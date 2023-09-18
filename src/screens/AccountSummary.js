import CustomerNavbar from "../components/CustomerNavbar";
import Footer from "../components/Footer";
const AccountSummary = () => {
    return (
        <div className="acc-summary">
            <CustomerNavbar />
            <h2>Account Summary</h2>
            <div className="account-summary-details">
            <table className="account-summary-details-table">
                <tbody>
                    <tr>
                        <td>Account Number</td>
                        <td>1234567890</td>
                    </tr>
                    <tr>
                        <td>Account Balance</td>
                        <td>Rs. 1000</td>
                    </tr>
                    <tr>
                        <td>Account Type</td>
                        <td>Savings</td>
                    </tr>
                    <tr>
                        <td>Account Opened On</td>
                        <td>19/09/2023</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
            <div className="account-summary-recent-transactions-cntr">
            <h2>Recent Transactions</h2>
            <table className="account-summary-recent-transactions-table">
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1234567890</td>
                        <td>1111111111</td>
                        <td>Rs. 1000</td>
                        <td>19/09/2023</td>
                    </tr>
                    <tr>
                        <td>1234567890</td>
                        <td>1111111111</td>
                        <td>Rs. 1000</td>
                        <td>19/09/2023</td>
                    </tr>
                    <tr>
                        <td>1234567890</td>
                        <td>1111111111</td>
                        <td>Rs. 1000</td>
                        <td>19/09/2023</td>
                    </tr>
                    <tr>
                        <td>1234567890</td>
                        <td>1111111111</td>
                        <td>Rs. 1000</td>
                        <td>19/09/2023</td>
                    </tr>
                    <tr>
                        <td>1234567890</td>
                        <td>1111111111</td>
                        <td>Rs. 1000</td>
                        <td>19/09/2023</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <Footer />
        </div>
    );
}
export default AccountSummary;