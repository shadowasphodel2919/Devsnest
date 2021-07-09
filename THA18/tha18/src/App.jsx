import Board from './Board';

const appStyle = {"minHeight":"100vh","width":"100vw","display":"flex","justifyContent":"center"};
function App() {
  return (
    <div style={appStyle}>
      <Board />
    </div>
  );
}

export default App;
