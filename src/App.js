import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title.js';
import Navbar from './components/Navbar';

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
        <Navbar/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={() => {console.log('NO hace nada')}}
            productos={this.state.productos}
          />
        </Layout>
        
      </div>
    )
  }
}

export default App;
