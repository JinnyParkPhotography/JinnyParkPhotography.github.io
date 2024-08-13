class Thumbnail extends Component {
    template() {
        const { id, author, width, height, download_url } = this.props;
        const sWidth = parseInt(width / 10);
        const sHeight = parseInt(height / 10);
        return `
            <a href="javascript:void(0)">
                <img src="${download_url}" 
                    alt="${author}'s image" 
                    width="${sWidth}" 
                    height="${sHeight}"
                    data-selected-id="${id}"
                />
            </a>
        `;
    }
    setEvent() {
        const { selectIdHandler } = this.props;
        this.$target.addEventListener('click', ({ target }) => {
            if(target.tagName === 'IMG') {
                const { selectedid } = target.dataset;
                selectIdHandler(selectedId);
            }
        });
    }
}