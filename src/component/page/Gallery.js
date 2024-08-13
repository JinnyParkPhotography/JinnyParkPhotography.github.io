class Gallery extends Component{
    setup() {
      const imageList = this.getImageList();
      this.state = { imageList };
    }
    template() {
      const { imageList } = this.state;
      return `
        <h2>Gallery This is My Gallery</h2>
        ${imageList.map(v => `<li>${v.id}</li>`)}
      `;
    }
    async getImageList() {
      const response = await fetch('https://picsum.photos/v2/list');
      if(response.ok) {
        const json = await response.json();
        alert("From getImageList: "+response);
        return json;
      } else {
        alert("HTTP-Error: " + response.status);
        return;
      }
    }
  }