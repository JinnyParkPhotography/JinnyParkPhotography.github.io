class Thumbnail extends Component {
    template() {
        const { id, author, width, height, download_url } = this.props;
        const sWidth = parseInt(width / 10);
        const sHeight = parseInt(height / 10);
        return `
            <img src="${download_url}" 
                alt="${author}'s image" 
                width="${sWidth}" 
                height="${sHeight}"
            />
        `;
    }
}