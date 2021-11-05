import './App.css';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';

function App() {
  return (
    <div className="App">
      <p>click the box</p>
      <Box1 />

      <p>hover, click or drag the box</p>
      <Box2 />

      <p>hover, click or drag the box</p>
      <Box3 />
    </div>
  );
}

export default App;
