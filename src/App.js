import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import RegisterUser from './screens/RegisterScreen';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AccountDetails from "./screens/AccountDetails";
import TransactionDetails from './screens/TransactionDetails';
import CustomerDashboard from "./screens/CustomerDashboard";
import TransferFunds from "./screens/TransferFunds";
import AccountSummary from "./screens/AccountSummary";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}/>
        <Route exact path='/customer/register' element={<RegisterUser/>}/>
        <Route path="/customer/login" element={<LoginScreen />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/account-details" element={<AccountDetails />} /> 
        <Route path="/customer/dashboard/transaction-details" element={<TransactionDetails />} /> 
        <Route path="/customer/transfer-funds" element={<TransferFunds />} />
        <Route path="/customer/account-summary" element={<AccountSummary />} />
      </Routes>
      </BrowserRouter>
    </div>
);
}


export default App;
