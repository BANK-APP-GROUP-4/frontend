import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import RegisterUser from './screens/RegisterScreen';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AccountDetails from "./screens/AccountDetails";
import TransactionDetails from './screens/TransactionDetails';
import CustomerDashboard from "./screens/CustomerDashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}/>
        <Route exact path='/customer/register' element={<RegisterUser/>}/>
        <Route path="/customer/login" element={<LoginScreen />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/dashboard/account-details" element={<AccountDetails />} /> 
        <Route path="/customer/dashboard/transaction-details" element={<TransactionDetails />} /> 

      </Routes>
      </BrowserRouter>
    </div>
);
}


export default App;
