import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import RegisterUser from './Screens/RegisterUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
        <Route exact path='/' element={<RegisterUser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
