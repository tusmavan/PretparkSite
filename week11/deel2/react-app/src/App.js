import './App.css';
import Main from './pages/Main.js';
import OverOns from './pages/Over Ons'
import Bestel from './pages/Bestel Tickets'
import './mystyle.css';
import React from 'react';
import './script'
import './jquery-ui.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.overOns = this.overOns.bind(this);
    this.bestel = this.bestel.bind(this);
    this.main = this.main.bind(this);
    this.state = { pagina: 0 };
  }

  overOns() {
    this.setState({ pagina: 1 });
  }
  bestel() {
    this.setState({ pagina: 2 });
  }
  main() {
    this.setState({ pagina: 0 });
  }


  render() {
    if (this.state.pagina == 0) {
      return (
        <div>
          <Main.Head />
          <Main.Body overOns={this.overOns} bestel={this.bestel} main={this.main} />
        </div>
      );
    }
    else if (this.state.pagina == 1) {
      return (
        <div>
          <OverOns.Head />
          <OverOns.Body overOns={this.overOns} bestel={this.bestel} main={this.main} />
        </div>
      );
    }
    else if (this.state.pagina == 2) {
      return (
        <div>
          <Bestel.Head />
          <Bestel.Body overOns={this.overOns} bestel={this.bestel} main={this.main} />
        </div>
      );
    }
  }
}

export default App;
