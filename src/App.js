import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import RegisterUser from './screens/RegisterScreen';
import LoginScreen from "./screens/LoginScreen";
import CustomerDashboard from "./screens/CustomerDashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
        <Route exact path='/customer/register' element={<RegisterUser/>}/>
        <Route path="/customer/login" element={<LoginScreen />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
);
}


export default App;
