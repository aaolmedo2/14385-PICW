// gallery-component.js

class GalleryComponent {
    constructor() {
      this.currentImageIndex = 0;
      this.images = document.querySelectorAll('.thumbnails-container img');
      this.mainImage = document.getElementById('main-image');
      this.prevButton = document.querySelector('.prev-button');
      this.nextButton = document.querySelector('.next-button');
  
      this.showImage(this.currentImageIndex);
  
      this.prevButton.addEventListener('click', () => this.showPrevImage());
      this.nextButton.addEventListener('click', () => this.showNextImage());
    }
  
    showImage(index) {
      this.currentImageIndex = index;
      this.mainImage.src = this.images[index].src;
    }
  
    showPrevImage() {
      if (this.currentImageIndex > 0) {
        this.showImage(this.currentImageIndex - 1);
      } else {
        // Si estás en la primera imagen, al hacer clic en "Anterior", cambia a la última imagen.
        this.showImage(this.images.length - 1);
      }
    }
  
    showNextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.showImage(this.currentImageIndex + 1);
      } else {
        // Si estás en la última imagen, al hacer clic en "Siguiente", cambia a la primera imagen.
        this.showImage(0);
      }
    }
  }
  
  // Crear una instancia del componente cuando se carga el DOM
  document.addEventListener('DOMContentLoaded', () => {
    new GalleryComponent();
  });
  