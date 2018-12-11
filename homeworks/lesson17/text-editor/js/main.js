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
    this.hintContainer = container.querySelector( '.text-editor__hint' );
    this.filenameContainer = container.querySelector( '.text-editor__filename' );
    this.storageKey = storageKey;
    this.registerEvents();
    this.load( this.getStorageData());
  }
  registerEvents() { //Подключение обработчиков событий
    const save = throttle( this.save.bind( this ), 1000 );
    const loadFile = this.loadFile.bind( this );
    const showHint = this.showHint.bind( this );
    
    this.contentContainer.addEventListener( 'input', save );
    this.container.addEventListener( 'dragover', showHint);
    this.container.addEventListener( 'drop', loadFile );
    

  }
  loadFile(e) { //для загрузки файла после переноса в окно редактора
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const textTypeRegExp = /^text\//;
    if (textTypeRegExp.test(files[0].type)) {
      this.hideHint();
      this.setFilename(files[0].name);
      this.readFile(files[0]);
    }
    else {
      alert('Wrong extension by file');
      this.hideHint();
    }
  }

  readFile( file ) { //для чтения .txt файла
    const reader = new FileReader();
    this.contentContainer.value = '';
    reader.addEventListener('load', event => {
      this.contentContainer.value = event.target.result;
    });
    reader.readAsText(file);
  }
    
  setFilename( filename ) {// для установки имени файла
    this.filenameContainer.textContent = filename;
  }
  showHint(e) {// для показа подсказки
    e.preventDefault();
    this.hintContainer.classList.add('text-editor__hint_visible');
  }
  hideHint(e) { // для скрытия подсказки
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
};

new TextEditor( document.getElementById( 'editor' ));
