class GalleryTags extends Component {
    template() {
        const { imageList } = this.props;
        const { allImageTags } = this;
        return `
            <h1>Hello! I'm Gallery Tags!</h1>
            ${allImageTags.map(tag => `<button>${tag}</button>`).join('')}
        `;
    }
    get allImageTags() {
        const { imageList } = this.props;
        let allImageTag = imageList.map(image => image.author); // 임시로 author로 한다.
        allImageTag = new Set(allImageTag);
        return [...allImageTag];
    }
}