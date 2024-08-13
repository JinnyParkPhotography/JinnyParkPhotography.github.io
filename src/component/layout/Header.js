class Header extends Component {
    template() {
      const { nav } = this.props;
      return `
        <h1><a href="#" data-nav="welcome">Jinny Park Photography</a></h1>
        <nav>
          <a href="#" data-nav="about">About</a>
          <a href="#" data-nav="gallery">Gallery</a>
          <a href="#" data-nav="contact">Contact</a>
        </nav>
      `;
    }
    setEvent() {
      const { changeNavHandler } = this.props;
      this.$target.addEventListener('click', ({ target }) => {
        if(target.tagName === 'A') {
          const { nav } = target.dataset;
          changeNavHandler(nav);
        }
      });
    }
  }