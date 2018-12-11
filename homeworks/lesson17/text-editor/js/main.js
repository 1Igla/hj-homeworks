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
    console.log(this);
    this.load( this.getStorageData());
  }
  registerEvents() { //Подключение обработчиков событий
    const save = throttle( this.save.bind( this ), 1000 );
    const loadFile = this.loadFile.bind( this );
    this.contentContainer.addEventListener('drop', loadFile );
    this.contentContainer.addEventListener('dragover', event => event.preventDefault());
    this.contentContainer.addEventListener( 'input', save );

  }
  loadFile(e) { //для загрузки файла после переноса в окно редактора
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const content = document.querySelector( '.text-editor__content' );
    const fragment = document.createDocumentFragment();
    //content.innerText = readFile(e);
    console.log(content);
    ;
  }
  readFile( file ) { //для чтения .txt файла
     const textTypeRegExp = /^text\//;
     if (textTypeRegExp.test(file.type)) {
       const p = document.createElement('p');
       return "text";
     }
  }
  setFilename( filename ) {// для установки имени файла
    this.filenameContainer.textContent = filename;
  }
  showHint( e ) {// для показа подсказки
  }
  hideHint() { // для скрытия подсказки
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
