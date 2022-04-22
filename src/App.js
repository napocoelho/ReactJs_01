import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';





class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showImage: true,
    };
  }

  toggle = () => {
    this.setState({
      showImage: !this.state.showImage,
    });
  }



  CapsLock(props) {
    const textoInserido = props.children;
    const textoEmCapsLock = textoInserido.toUpperCase();
    var teste = "CapsLock";
    return <div>{textoEmCapsLock}</div>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">


          <this.CapsLock>texto inserido aqui!</this.CapsLock>


          {this.state.showImage && (
            <img src={logo} className="App-logo" alt="logo" />
          )}

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <button type='button' onClick={this.toggle}>{this.state.showImage ? 'Esconder' : 'Mostrar'} {this.state.showImage}</button>


        </header>
      </div>
    );
  }

}


export default App;
