class Gallery extends Component{
    setup() {
      this.state = {
        imageList: IMAGE_LIST,
        imageTags: [],
        imageId: '',
        mode: 'list', // list, detail
      }
    }
    mounted() {
      const { $target, 
        changeImageIdHandler, 
        changeModeHandler,
        changeTagsHandler, 
        filteredImageList, 
        selectedImage } = this;
      const { mode } = this.state;

      switch (mode) {
        case 'list':
          const $galleryList = $target.querySelector('[data-component="gallery-list"]');
          new GalleryList($galleryList, { filteredImageList,
            changeImageIdHandler: changeImageIdHandler.bind(this),
            changeModeHandler: changeModeHandler.bind(this),
            changeTagsHandler: changeTagsHandler.bind(this)
          });
          break;
        case 'detail':
          const $galleryDetail = $target.querySelector('[data-component="gallery-detail"]');
          new GalleryDetail($galleryDetail, { selectedImage,
            changeImageIdHandler: changeImageIdHandler.bind(this),
            changeModeHandler: changeModeHandler.bind(this)
          });
          break;
        default:
          alert(`${mode} is not allow in Gallery Component`);
          break;
      }
    }
    template() {
      const { mode } = this.state;
      switch (mode) {
        case 'list':
          return `<div data-component="gallery-list"></div>`;
        case 'detail':
          return `<div data-component="gallery-detail"></div>`;
        default:
          return `<h1>${mode} is not allow in Gallery Component!</h1>`;
      }
    }
    changeImageIdHandler(imageId) {
      this.setState({ imageId });
    }
    changeModeHandler(mode) {
      this.setState({ mode });
    }
    changeTagsHandler(imageTags) {
      this.setState({ imageTags });
    }
    get selectedImage() {
      const { imageList, imageId } = this.state;
      return imageList.find(image => image.id === imageId);  
    }
    get filteredImageList() {
      const { imageList, imageTags } = this.state;
      let result = [...imageList];
      if(imageTags.length > 0) {
        imageTags.forEach(tag => {
          result = result.filter(v => v.tags.include(tag));
        });
      }
      return result;
    }
   }