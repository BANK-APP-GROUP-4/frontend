
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import RegisterUser from './Screens/RegisterUser';
import LoginScreen from "./screens/LoginScreen";


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
        <Route exact path='/' element={<RegisterUser/>}/>
        <Route path="/login" element={<LoginScreen />} />

      </Routes>
      </BrowserRouter>
    </div>
);
}


export default App;
