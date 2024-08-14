class Gallery extends Component{
    setup() {
      this.state = {
        imageList: IMAGE_LIST,
        selectedImageTags: [],
        selectedImageId: '',
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
      const { imageList, selectedImageTags, mode } = this.state;

      switch (mode) {
        case 'list':
          const $galleryList = $target.querySelector('[data-component="gallery-list"]');
          new GalleryList($galleryList, { selectedImageTags, imageList, filteredImageList,
            changeImageIdHandler: changeImageIdHandler.bind(this),
            changeModeHandler: changeModeHandler.bind(this),
            changeTagsHandler: changeTagsHandler.bind(this)
          });
          break;
        case 'detail':
          const $galleryDetail = $target.querySelector('[data-component="gallery-detail"]');
          new GalleryDetail($galleryDetail, { filteredImageList, selectedImage,
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
    changeImageIdHandler(selectedImageId) {
      this.setState({ selectedImageId });
    }
    changeModeHandler(mode) {
      this.setState({ mode });
    }
    changeTagsHandler(imageTags) {
      this.setState({ imageTags });
    }
    get selectedImage() {
      const { imageList, selectedImageId } = this.state;
      return imageList.find(image => image.id === selectedImageId);  
    }
    get filteredImageList() {
      const { imageList, selectedImageTags } = this.state;
      let result = [...selectedImageTags];
      if(selectedImageTags.length > 0) {
        selectedImageTags.forEach(tag => {
          result = result.filter(v => v.tags.include(tag));
        });
      }
      return result;
    }
   }