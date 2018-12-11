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
    const onSelectFiles = this.onSelectFiles.bind( this );
    const generateSprite = this.generateSprite.bind(this);

    this.uploadButton.addEventListener('change', onSelectFiles);
    this.submitButton.addEventListener('click', generateSprite);
  }

  onSelectFiles(event) {
     const files = Array.from(event.target.files);
     this.updateFilesInfo(files);
   }

   updateFilesInfo(file) {
    const imageTypeRegExp = /^image\//;
    if (imageTypeRegExp.test(file.type)) {
  		 const img = document.createElement('img');
       img.src = window.URL.createObjectURL(file);
       img.addEventListener('load', event => {
           window.URL.revokeObjectURL(event.target.src);
          });
       this.imageElement.appendChild(img);
       console.log(img);
       var imgs;
      this.images.push(imgs);
      this.setImageCount();
     }
   }

  setImageCount() {
    this.imagesCount = this.images.length;
    this.imagesCountContainer.innerText = this.imagesCount;
  }

  generateSprite(event) {
    event.preventDefault();
    var width = Math.ceil(Math.sqrt(this.imagesCount));
    var height = Math.ceil(this.imagesCount / width);
    var maxWidth = 0;
    var maxHeight = 0;
    for (var image of this.images) {
      if (image.image.naturalHeight > maxHeight) {
        maxHeight = image.image.naturalHeight;
      }
      if (image.image.naturalWidth > maxWidth) {
        maxWidth = image.image.naturalWidth;
      }
    }
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    this.imageElement.src = canvas.toDataURL('image/jpeg');
  }
};

new SpriteGenerator( document.getElementById( 'generator' ));
