class GalleryThumbnails extends Component {
    template() {
        const { filteredImageList } = this.props;
        return `
            ${filteredImageList.map(image => `
                <img src="${image.download_url}" 
                    alt="${image.author}" 
                    style="width: 200px;"
                />    
            `).join('')}
        `;
    }
}