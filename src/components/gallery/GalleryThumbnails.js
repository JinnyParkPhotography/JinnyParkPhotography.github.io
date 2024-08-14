class GalleryThumbnails extends Component {
    template() {
        const { filteredImageList } = this.props;
        return `
            <h1>Hello, I'm Gallery Thumbnail Component!</h1>
            ${filteredImageList.map(image => `
                <img src="${image.download_url}" 
                    alt="${image.author}" 
                    style="width: 200px;"
                />    
            `).join('')}
        `;
    }
}