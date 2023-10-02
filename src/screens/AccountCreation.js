import react, {useState} from 'react';
import CustomerNavbar from '../components/CustomerNavbar';
import {savingsAccountCreationService} from '../actions/AccountsActions';
import {fdAccountCreationService} from '../actions/AccountsActions';
const AccountCreation = () => {
    const [accountTypeSelected, setAccountTypeSelected] = useState('');
    var [depositAmount, setDepositAmount] = useState('');
    var [creditCardNeeded, setCreditCardNeeded] = useState('');
    var [debitCardNeeded, setDebitCardNeeded] = useState('');
    var [principalAmount, setPrincipalAmount] = useState('');
    var [maturityPeriod, setMaturityPeriod] = useState('');
    const auth_token = localStorage.getItem('auth_token');
    if (!auth_token) {
        window.location.href = '/customer/login';
    }
    function handleAccountSelection(e) {
        console.log(accountTypeSelected);
        e.preventDefault();
        const accountType = accountTypeSelected;
        const customer_id = JSON.parse(localStorage.getItem('customer_details')).id;
        const status_msg_div = document.querySelector('.status_msg_div');
        if(accountType === 'Savings Account') {
            depositAmount =  parseInt(Number(depositAmount));
            creditCardNeeded = (creditCardNeeded === 'true');
            debitCardNeeded = (debitCardNeeded === 'true'); 
            savingsAccountCreationService.savingsAccountCreation(auth_token, customer_id, depositAmount, creditCardNeeded, debitCardNeeded)
            .then((response) => {
                console.log(response);
                if(response === 'Savings account successfully created.') {
                    status_msg_div.innerHTML = `<p class='success-msg'>${response}</p>`;
                }
                else {
                    status_msg_div.innerHTML = `<p class='error-msg'>${response}</p>`;
                }
            }).catch(error => {
                alert(error);
            });
        }
        else {
            principalAmount = parseInt(Number(principalAmount));
            maturityPeriod = parseInt(Number(maturityPeriod));
            fdAccountCreationService.fdAccountCreation(auth_token, customer_id, principalAmount, maturityPeriod)
            .then((response) => {
                if(response === 'FD Account created successfully.') {
                    status_msg_div.innerHTML = `<p class='success-msg'>${response}</p>`;
                }
                else {
                    status_msg_div.innerHTML = `<p class='error-msg'>${response}</p>`;
                }
            }).catch(error => {
                alert(error);
            });
        }
    }
    function populateAccountCreationForm(e) {
        const accountType = e.target.value;
        if(accountType === 'Savings Account') {
            setAccountTypeSelected('Savings Account');
        }
        else {
            setAccountTypeSelected('FD Account');
        }
    }
    return (
        <div>
            <CustomerNavbar/>
            <h1>Account Creation</h1>
            <div className='status_msg_div'></div>
            <select required onChange={populateAccountCreationForm}>
            <option>Select Account Type</option>
                <option value="Savings Account">Savings Account</option>
                <option value="FD Account">FD Account</option>
            </select>
            {
            (accountTypeSelected === 'Savings Account' || accountTypeSelected === 'FD Account') ?
            <form className="account-creation-form" onSubmit={handleAccountSelection}>
                {
                    (accountTypeSelected === 'Savings Account') ?
                    <div>
                        <label>Deposit Amount in [₹]</label>
                        <input onChange={(e) => setDepositAmount(e.target.value)}
                        type="number" name="depositAmount" required></input>
                        <label>Credit Card Needed</label>
                        <input 
                        onChange={(e) => setCreditCardNeeded(e.target.value)}
                        type="radio" name="creditCardNeeded" value="true" required></input>
                        <label>Yes</label>
                        <input 
                        onChange={(e) => setCreditCardNeeded(e.target.value)}
                        type="radio" name="creditCardNeeded" value="false" required></input>
                        <label>No</label>
                        <div>
                        <label>Debit Card Needed</label>
                        <input 
                        onChange={(e) => setDebitCardNeeded(e.target.value)}
                        type="radio" name="debitCardNeeded" value="true" required></input>
                        <label>Yes</label>
                        <input 
                        onChange={(e) => setDebitCardNeeded(e.target.value)}
                        type="radio" name="debitCardNeeded" value="no" required></input>
                        <label>No</label>
                        </div>
                        <button type="submit">Create Account</button>
                    </div>
                    :
                    (accountTypeSelected === 'FD Account') ?
                    <div>
                        <label>Principal Amount in [₹]</label>
                        <input 
                        onChange={(e) => setPrincipalAmount(e.target.value)}
                        type="number" name="principalAmount" required></input>
                        <label>Maturity Period in [Years]</label>
                        <input 
                        onChange={(e) => setMaturityPeriod(e.target.value)}
                        type="number" name="maturityPeriod" required></input>
                        <button type="submit">Create Account</button>
                    </div>
                    :
                    <div>
                    </div>
                    
                }
            </form>
            :
            <div>
            </div>
            }
            
            
        </div>
    )
}
export default AccountCreation;