import { Component } from 'react';
import Productos from './components/Productos';

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 5, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', price: 10, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', price: 2, img: '/productos/lechuga.jpg'},
    ]
  }
  render() {
    return (
      <div>
        <Productos
          agregarAlCarro={() => {console.log('NO hace nada')}}
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App;
