class Gallery extends Component{
    setup() {
      this.state = {
        imageList: IMAGE_LIST
      }
    }
    mounted() {
      const { imageList } = this.state;
      imageList.forEach(image => {
        const $galleryItem = this.$target.querySelector(`[data-component="gallery-item-${image.id}"]`);
        new GalleryItem($galleryItem, image);
      });
    }
    template() {
      const { imageList } = this.state;
      return `
        <h2>Gallery This is My Gallery</h2>
        ${imageList.map(image => `
            <div data-component="gallery-item-${image.id}"></div>
        `)}
      `;
    }
  }