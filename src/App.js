import logo from './logo.svg';
import './App.css';
import Ball from"./Ball"
import Lottery from './lottery'

function App() {
  return (
    <div className='App'>
      <Lottery maxBalls={6}/>
      <Lottery color={'Orange'}/>
      <Lottery title={'3rd Lotto'}/>
      {/* <Lottery title='Mini Daily' maxNum={10} maxBalls={4}/> */}
    </div>
  );
}

export default App;
