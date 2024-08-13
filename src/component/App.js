class App extends Component {
    setup() {
      this.state = {
        nav: 'welcome', // welcome, about, gallery contact
      }
    }
    mounted() {
      const { nav } = this.state;
      const { changeNavHandler } = this;

      const $header = document.querySelector('[data-component="header"]');
      new Header($header, { 
        nav, 
        changeNavHandler: changeNavHandler.bind(this) 
      });

      const $main = document.querySelector('[data-component="main"]');
      new Main($main, {
        nav
      });

      const $footer = document.querySelector('[data-component="footer"]');
      new Footer($footer);
    }
    template() {
      return `
        <header data-component="header" class="header"></header>
        <hr/>
        <main data-component="main" class="main"></main>
        <hr/>
        <footer data-component="footer" class="footer"></footer>
      `;
    }
    changeNavHandler(nav) {
      this.setState({ nav });
    }
  }