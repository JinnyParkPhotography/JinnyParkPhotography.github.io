class GalleryItem extends Component {
    template() {
        const { id, author, width, height, url } = this.props;
        return `
            <p>id: ${id}</p>
            <p>author: ${author}</p>
            <p>width: ${width}</p>
            <p>height: ${height}</p>
            <img src="${url}" alt="${author}'s image"/>
        `;
    }
}