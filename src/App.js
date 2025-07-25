import logo from './logo.svg';
import './App.css';
import './redux/store'
import Form from './components/Form';
import Account from './components/Account';

function App() {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="p-4 rounded shadow bg-white text-center" style={{ width: '800px' }}>
        <h2 className="mb-4 fw-bold text-primary">Bank Account Dashboard</h2>
        <Form />
        <hr />
        <Account />
      </div>
    </div>
  );
}

export default App;
