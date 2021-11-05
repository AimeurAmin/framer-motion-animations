import './App.css';
import Box1 from './components/Box1';
import Box2 from './components/Box2';

function App() {
  return (
    <div className="App">
      <p>click the box</p>
      <Box1 />
      <p>hover, click or drag the box</p>
      <Box2 />
    </div>
  );
}

export default App;
