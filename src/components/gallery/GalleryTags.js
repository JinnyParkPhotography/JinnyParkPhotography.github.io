class GalleryTags extends Component {
    template() {
        const { selectedImageTags } = this.props;
        const { allImageTags } = this;
        return `
            <h3>Pick my tags</h3>
            ${allImageTags.map(tag => `
                <a href="javascript:void(0)" 
                    ${selectedImageTags.includes(tag) ? 
                    `class="selectedTag"` : ""}
                    data-tag="${tag}"
                >${tag}</a>
            `).join(' / ')}
        `;
    }
    setEvent() {
        const { selectedImageTags, changeTagsHandler } = this.props;
        this.$target.addEventListener('click', ({ target }) => {
            if(target.tagName === 'A') {
                const { tag } = target.dataset;
                if(selectedImageTags.includes(tag)) {
                    const tagIndex = selectedImageTags.indexOf(tag);
                    selectedImageTags.splice(tagIndex, 1);
                } else {
                    selectedImageTags.push(tag);
                }
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