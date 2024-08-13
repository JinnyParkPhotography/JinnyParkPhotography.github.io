class Gallery extends Component{
    setup() {
      this.state = {
        imageList: IMAGE_LIST
      }
    }
    mounted() {
      const { imageList } = this.state;
      imageList.forEach(image => {
        const $galleryItem = this.$target.querySelector(`[data-component="thumbnail-${image.id}"]`);
        new Thumbnail($galleryItem, image);
      });
    }
    template() {
      const { imageList } = this.state;
      return `
        <div style="display: flex;">
          ${imageList.map(image => `
              <div data-component="thumbnail-${image.id}"></div>
          `).join('')}
        </div>
      `;
    }
  }