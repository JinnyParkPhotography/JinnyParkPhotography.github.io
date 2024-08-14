class GalleryTags extends Component {
    template() {
        const { imageList } = this.props;
        return `
            <h1>Hello! I'm Gallery Tags!</h1>
            ${imageList.map(image => `<button>${image.author}</button>`).join('')}
        `;
    }
}