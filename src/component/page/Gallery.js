class Gallery extends Component{
    setup() {
        alert(IMAGE_LIST);
      //this.state = { imageList };
    }
    template() {
      const { imageList } = this.state;
      return `
        <h2>Gallery This is My Gallery</h2>
        ${imageList.map(v => `<li>${v.id}</li>`)}
      `;
    }
  }