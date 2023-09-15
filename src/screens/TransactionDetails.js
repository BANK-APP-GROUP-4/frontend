import React from 'react';
import {Link} from 'react-router-dom';

const TransactionDetails = () => {

    const transaction_details = JSON.parse(localStorage.getItem('transaction_details'));
    console.log(transaction_details);

    return(
        <div>
        <table>
            <thead>
                <tr>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>Date of Transaction</th>
                <th>Reciever Account</th>
                </tr>
                
            </thead>
            <tbody>
                {
                    transaction_details.map((s,index) =>(
                        <tr>
                           
                            <td>{s.transactionId}</td>
                            {console.log(s.transactionId)}
                            <td>{s.amount}</td>
                            <td>{s.date}</td>
                            <td>{s.receiver_acc}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        </div>
       
       
    );
    
    

}

export default TransactionDetails;