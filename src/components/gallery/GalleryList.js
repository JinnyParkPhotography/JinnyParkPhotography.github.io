class GalleryList extends Component {
    mounted() {
        const { $target } = this;
        const { selectedImageTags, imageList, filteredImageList, 
            changeTagsHandler, changeModeHandler, changeImageIdHandler } = this.props;

        const $galleryTags = $target.querySelector('[data-component="gallery-tags"]');
        new GalleryTags($galleryTags, { selectedImageTags, imageList, changeTagsHandler });

        const $galleryThumbnails = $target.querySelector('[data-component="gallery-thumbnails"]');
        new GalleryThumbnails($galleryThumbnails, { filteredImageList, 
            changeModeHandler, changeImageIdHandler });
    }
    template() {
        return `
            <div data-component="gallery-tags"></div>
            <hr/>
            <div data-component="gallery-thumbnails"></div>
        `;
    }
}