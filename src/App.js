import './App.css';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';
import Box5 from './components/Box5';

function App() {
  return (
    <div className="App">
      <p>click the box</p>
      <Box1 />

      <p>hover, click or drag the box</p>
      <Box2 />

      <p>...</p>
      <Box3 />

      <Box4 />

      <Box5 />
    </div>
  );
}

export default App;
