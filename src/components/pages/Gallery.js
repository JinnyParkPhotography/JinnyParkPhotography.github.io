class Gallery extends Component{
    setup() {
      this.state = {
        imageList: IMAGE_LIST,
        selectedId: ''
      }
    }
    mounted() {
      const { imageList, selectedId } = this.state;
      if(selectedId) {
        const selectedImage = imageList.find(image => image.id === selectedId);
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
      const { imageList, selectedId } = this.state;
      return `
        ${selectedId ? `
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
    selectIdHandler(selectedId) {
      this.setState({ selectedId });
    }
  }