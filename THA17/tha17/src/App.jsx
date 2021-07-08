import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div class = "main-head">Calorie Read Count</div>
        <div className="block">
          <Card head = "Pizza" body = "56"></Card>
          <Card head = "Burger" body = "69"></Card>
          <Card head = "Coke" body = "500"></Card>
          <Card head = "Brownie" body = "180"></Card>
          <Card head = "Fried Rice" body = "90"></Card>
          <Card head = "Lassagna" body = "200"></Card>
          <Card head = "Pani Puri" body = "10"></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
