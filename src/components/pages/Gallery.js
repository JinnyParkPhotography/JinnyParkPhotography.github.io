class Gallery extends Component{
    setup() {
      this.state = {
        imageList: IMAGE_LIST,
        imageId: '',
        mode: 'list', // list, detail
      }
    }
    mounted() {
      const { imageList, imageId } = this.state;
      if(mode !== 'list') {
        const selectedImage = imageList.find(image => image.id === imageId);
        const { id, author, width, height, download_url } = selectedImage;
        const $modal = this.$target.querySelector('[data-component="modal"]');
        new Modal($modal, { id, author, width, height, download_url });
      } else {
        imageList.forEach(image => {
          const { id, author, width, height, download_url } = image;
          const $galleryItem = this.$target.querySelector(`[data-component="thumbnail-${id}"]`);
          new Thumbnail($galleryItem, {
            id, author, width, height, download_url,
            selectIdHandler: this.selectIdHandler.bind(this)
          });
        });
      }
    }
    template() {
      const { imageList, imageId } = this.state;
      return `
        ${imageId ? `
          <div data-component="modal" 
            style="display: absolute; width: 90%; height: 90%"></div>  
        ` : `
          <div style="display: flex; flex-wrap: wrap; justify-content: center;">
            ${imageList.map(image => `
                <div data-component="thumbnail-${image.id}"></div>
            `).join('')}
          </div>
        `}
      `;
    }
    selectIdHandler(imageId) {
      this.setState({ imageId });
    }
  }