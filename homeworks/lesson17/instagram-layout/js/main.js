const addClass = ( className, context ) => context.classList.add( className ),
  removeClass = ( className, context ) => context.classList.remove( className ),
  hasClass = ( className, context ) => context.classList.contains( className );
class iLayout {
  constructor( container ) {
    this.container = container;
    this.positionsContainer = container.querySelector( '.layout__positions' );
    this.actionButton = container.querySelector( '.layout__button' );
    this.result = container.querySelector( '.layout__result' );
    this.layout = {
      left: null,
      top: null,
      bottom: null
    };
    this.registerEvents();
  }
  registerEvents() {
   for(var el of this.positionsContainer.children){
     el.addEventListener('dragover', this.showActive.bind(this));
     el.addEventListener('drop', this.loadImage.bind(this));
     el.addEventListener('dragleave', this.hideActive.bind(this));
    }
   this.actionButton.addEventListener('click', this.collage.bind(this));
   }
  showActive(event) {
    event.preventDefault();
    event.target.classList.add('layout__item_active');
  }
  hideActive(event) {
    event.target.classList.remove('layout__item_active');
  }
  loadImage(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files[0].type.includes('image')) {
      this.hideActive(event);
      const img = document.createElement('img');
      img.src = URL.createObjectURL(files[0]);
      img.classList.add('layout__image');
      event.target.appendChild(img);
      this.setLayout(event.target);
    } else {
      alert('Фаил не изображение');
    }
  }
  collage() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = this.positionsContainer.offsetHeight;
    canvas.width = this.positionsContainer.offsetWidth;
    for(var el of this.positionsContainer.children){
      const image = el.getElementsByTagName('img')[0];
      if (image) {
        context.drawImage(image,0,0,
          image.naturalWidth,Math.min(image.naturalHeight, image.naturalWidth / el.offsetWidth * el.offsetHeight),
          el.offsetLeft - el.parentElement.offsetLeft,el.offsetTop - el.parentElement.offsetTop,
          layout.offsetWidth,Math.min(el.offsetHeight, image.naturalHeight / image.naturalWidth * el.offsetWidth)
          );
      }
    }
      const collage = document.createElement('img');
      collage.src = canvas.toDataURL();
      this.positionsContainer.innerHTML = '';
      this.positionsContainer.appendChild(collage);
      this.result.value = `<img src=${canvas.toDataURL()}>`;
   }
}
new iLayout( document.getElementById( 'layout' ));
