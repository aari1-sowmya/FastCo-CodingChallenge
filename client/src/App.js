import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import LoginForm from './components/LoginForm';
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
