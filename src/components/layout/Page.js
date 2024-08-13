class Page extends Component {
    mounted() {
      const { nav } = this.props;
      switch(nav) {
        case 'welcome':
          const $welcome = document.querySelector('[data-component="welcome"]');
          new Welcome($welcome);
          break;
        case 'about':
          const $about = document.querySelector('[data-component="about"]');
          new About($about);
          break;
        case 'gallery':
          const $gallery = document.querySelector('[data-component="gallery"]');
          new Gallery($gallery);
          break;
        case 'contact':
          const $contact = document.querySelector('[data-component="contact"]');
          new Contact($contact);
          break;
        default:
          alert(`${nav} is undefined... fix please!`);
      }
    }
    template() {
      return `
        <div data-component="welcome"></div>
        <div data-component="about"></div>
        <div data-component="gallery"></div>
        <div data-component="contact"></div>
      `;
    }
  }