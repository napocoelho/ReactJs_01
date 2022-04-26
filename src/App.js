import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


const App = () => {



  function Container(props) {
    return (
      <div className='container'>
        Container: {props.children}
      </div >
    )
  }

  function CapsLock(props) {
    const textoInserido = props.children;
    const textoEmCapsLock = textoInserido.toUpperCase();
    return <div>{textoEmCapsLock}</div>
  }

  function Timer(props) {
    const [segundos, setSegundos] = React.useState(props.valor == undefined ? 0 : parseInt(props.valor));

    setTimeout(function () {
      setSegundos(segundos + 1)
    }, 1000);

    return <div className="Timer">Segundos: {segundos}</div>
  }

  function HoraCerta(props) {
    const [hora, setHora] = React.useState(new Date());

    setTimeout(function () {
      setHora(new Date())
    }, 1000);

    const dia = Right('0' + hora.getDate(), 2)
    const mes = Right('0' + hora.getMonth(), 2);

    return <div className='HoraCerta'>
      {dia}/{mes}/{hora.getFullYear()} - {hora.getHours()}:{hora.getMinutes()}:{hora.getSeconds()}
    </div>
  }

  function Left(str, n) {
    if (n <= 0)
      return "";
    else if (n > String(str).length)
      return str;
    else
      return String(str).substring(0, n);
  }
  function Right(str, n) {
    if (n <= 0)
      return "";
    else if (n > String(str).length)
      return str;
    else {
      var iLen = String(str).length;
      return String(str).substring(iLen, iLen - n);
    }
  }

  function Principal(props) {
    const [showImage, setShowImage] = React.useState(true);

    // toggle = () => {
    //   setShowImage({
    //     showImage: !this.state.showImage,
    //   });
    // }

    function toggle() {
      setShowImage(!showImage);
    }


    return <div className="App">
      <header className="App-header">

        <CapsLock>texto inserido aqui!</CapsLock>

        <Timer></Timer>

        <Container>
          <Timer valor='200' />
        </Container>

        <HoraCerta />


        {showImage && (
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

        <button type='button' onClick={toggle}>{showImage ? 'Esconder' : 'Mostrar'} {showImage}</button>


      </header>
    </div>
  }


  return (
    <Principal />
  );
}


/*

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

  Timer(props) {
    const [segundos, setSegundos] = React.useState(0);

    setTimeout(function () {
      setSegundos(segundos + 1)
    }, 1000);

    return <div className="Timer">Segundos: {segundos}</div>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">


          <this.CapsLock>texto inserido aqui!</this.CapsLock>

          <this.Timer></this.Timer>

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
*/



export default App;