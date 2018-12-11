const prop = ( data, name ) => data.map( item => item[ name ] ),
  summ = data => data.reduce(( total, value ) => total + value, 0 );
class SpriteGenerator {
  constructor( container ) {
    this.uploadButton = container.querySelector( '.sprite-generator__upload' );
    this.submitButton = container.querySelector( '.sprite-generator__generate' );
    this.imagesCountContainer = container.querySelector( '.images__added-count-value' );
    this.codeContainer = container.querySelector( '.sprite-generator__code' );
    this.imageElement = container.querySelector( '.sprite-generator__result-image' );
    this.images = [];
    this.imagesCount = 0;
    this.registerEvents();
  }

  registerEvents() {
    this.uploadButton.addEventListener('change', onSelectFiles);
  }
   onSelectFiles(event) {
     const files = Array.from(event.target.files);
     updateFilesInfo(files);
   }


updateFilesInfo(files) {
    const imageTypeRegExp = /^image\//;
    if (imageTypeRegExp.test(file.type)) {
  		 const img = document.createElement('img');
       img.width = 150;
       img.height = 150;
       img.src = window.URL.createObjectURL(file);
       img.addEventListener('load', event => {
           window.URL.revokeObjectURL(event.target.src);
          });
     this.imageElement.appendChild(img);
     console.log(img)
     }
   }
}

new SpriteGenerator( document.getElementById( 'generator' ));
