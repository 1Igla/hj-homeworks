const throttle = ( handler, ms ) => {
  let timeout;
  return () => {
    clearTimeout( timeout );
    timeout = setTimeout( handler, ms );
  }
};
class TextEditor {
  constructor( container, storageKey = '_text-editor__content' ) {
    this.container = container;
    this.contentContainer = container.querySelector( '.text-editor__content' );
  //  this.contentContainer.setAttribute('draggable', true);
    this.hintContainer = container.querySelector( '.text-editor__hint' );
    this.filenameContainer = container.querySelector( '.text-editor__filename' );
    this.storageKey = storageKey;
    this.registerEvents();
    console.log(this);
    this.load( this.getStorageData());
  }
  registerEvents() { //Подключение обработчиков событий
    const save = throttle( this.save.bind( this ), 1000 );
    const loadFile = this.loadFile.bind( this );
    const showHint = this.showHint.bind( this );
    const hideHint = this.hideHint.bind( this );

    //this.contentContainer.addEventListener( 'dragover', showHint);
    this.contentContainer.addEventListener( 'drop', loadFile );
    this.contentContainer.addEventListener( 'input', save );
  //  this.contentContainer.addEventListener( 'dragleave', hideHint);

  }
  loadFile(e) { //для загрузки файла после переноса в окно редактора
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    this.setFilename( files[0].name );
    //this.hideHint(e);
    this.readFile(files[0]);

  }
  readFile( file ) { //для чтения .txt файла
    const textTypeRegExp = /^text\//;
    if (textTypeRegExp.test(file.type)) {
      const reader = new FileReader();
      this.contentContainer.value = '';
      reader.addEventListener('load', event => {
      this.contentContainer.value = event.target.result;
      });
     reader.readAsText(file);
      }
    else {
      alert('Wrong extension by file');
    }
  }
  setFilename( filename ) {// для установки имени файла
    this.filenameContainer.textContent = filename;
  }
  showHint(e) {// для показа подсказки
    e.preventDefault();
    this.hintContainer.classList.add('text-editor__hint_visible');
  }
  hideHint(e) { // для скрытия подсказки
    e.preventDefault();
    this.hintContainer.classList.remove('text-editor__hint_visible');
  }
  load( value ) {
    this.contentContainer.value = value || '';
  }
  getStorageData() {
    return localStorage[ this.storageKey ];
  }
  save() {
    localStorage[ this.storageKey ] = this.contentContainer.value;
  }
}

new TextEditor( document.getElementById( 'editor' ));
