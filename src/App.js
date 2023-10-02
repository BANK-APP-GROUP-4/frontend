import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import RegisterUser from './screens/RegisterScreen';
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CustomerDashboard from "./screens/CustomerDashboard";
import TransferFunds from "./screens/TransferFunds";
import AccountSummary from "./screens/AccountSummary";
import AccountStatement from "./screens/AccountStatement";
import CustomerDetails from "./screens/CustomerDetails";
import ResetPassword from "./screens/ResetPassword";
import AdminDashboard from './screens/AdminDashboard';
import AdminLogin from './screens/AdminLogin';
import NotFound from './components/NotFound';
import AccountCreation from './screens/AccountCreation';
import AdminRegister from './screens/AdminRegister';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}/>
        <Route exact path='/customer/register' element={<RegisterUser/>}/>
        <Route path="/customer/login" element={<LoginScreen />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/transfer-funds" element={<TransferFunds />} />
        <Route path="/customer/account-summary" element={<AccountSummary />} />
        <Route path="/customer/account-statement" element={<AccountStatement />} />
        <Route path="/customer/details" element={<CustomerDetails />} />
        <Route path="/customer/reset-password" element={<ResetPassword />} />
        <Route path= "/customer/create-account" element = {<AccountCreation/>}/>
        <Route path= "/admin/login" element= {<AdminLogin/>}/>
        <Route path= "/admin/register" element = {<AdminRegister/>}/>
        <Route path= "/admin/dashboard" element = {<AdminDashboard/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
);
}


export default App;
