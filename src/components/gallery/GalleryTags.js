class GalleryTags extends Component {
    template() {
        const { selectedImageTags } = this.props;
        const { allImageTags } = this;
        return `
            <h1>Hello! I'm Gallery Tags!</h1>
            ${allImageTags.map(tag => `
                <a href="javascript:void(0)" 
                    ${selectedImageTags.includes(tag) ? 
                    `class="selectedTag"` : ""}
                    data-tag="${tag}"
                >${tag}</a>
            `).join('')}
        `;
    }
    setEvent() {
        const { selectedImageTags, changeTagsHandler } = this.props;
        this.$target.addEventListener('click', ({ target }) => {
            if(target.tagName === 'A') {
                const { tag } = target.dataset;
                selectedImageTags.push(tag);
                changeTagsHandler(selectedImageTags);
            }
        })
    }
    get allImageTags() {
        const { imageList } = this.props;
        let allImageTag = imageList.map(image => image.author); // 임시로 author로 한다.
        allImageTag = new Set(allImageTag);
        return [...allImageTag];
    }
}