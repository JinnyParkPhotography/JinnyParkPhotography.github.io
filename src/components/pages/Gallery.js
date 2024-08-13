class Gallery extends Component{
    setup() {
      this.state = {
        imageList: IMAGE_LIST,
        selectedId: ''
      }
    }
    mounted() {
      const { imageList } = this.state;
      imageList.forEach(image => {
        const $galleryItem = this.$target.querySelector(`[data-component="thumbnail-${image.id}"]`);
        new Thumbnail($galleryItem, image);
      });
      if(selectedId !== '') {
        const $modal = this.$target.querySelector('[data-component="modal"]');
        const selectedImage = imageList.find(image => image.id === selectedId);
        new Modal($modal, selectedImage);
      }
    }
    template() {
      const { imageList } = this.state;
      return `
        <div style="display: flex; flex-wrap: wrap; justify-content: center;">
          ${imageList.map(image => `
              <div data-component="thumbnail-${image.id}"></div>
          `).join('')}
        </div>
        <div data-component="modal" style="display: absolute; width: 100%; height: 100%"></div>
      `;
    }
  }