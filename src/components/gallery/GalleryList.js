class GalleryList extends Component {
    mounted() {
        const { $target } = this;
        const { imageList, filteredImageList, 
            changeTagsHandler, changeModeHandler, changeImageIdHandler } = this.props;

        const $galleryTags = $target.querySelector('[data-component="gallery-tags"]');
        new GalleryTags($galleryTags, { imageList, changeTagsHandler });

        const $galleryThumbnails = $target.querySelector('[data-component="gallery-thumbnails"]');
        new GalleryThumbnails($galleryThumbnails, { filteredImageList, 
            changeModeHandler, changeImageIdHandler });
    }
    template() {
        return `
            <h1>Hello, I'm Gallery List Component!</h1>
            <div data-component="gallery-tags"></div>
            <div data-component="gallery-thumbnails"></div>
        `;
    }
}