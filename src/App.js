import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className='card_container'>
      <p className='card_top'></p>
      <p className='card_title'></p>
      <div className='card_plus-icon'>
        <span className='icon'></span>
      </div>
    </div>
  );
}

export default App;
