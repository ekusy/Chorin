import { useState } from 'react';
import './PaymentsTable.css';
import { Payment,PaymentProps } from './Payment';

interface PaymentsTableProps {
    id: string;
}

function PaymentsTable({ id }: PaymentsTableProps) {

    const [payments, setPaymants] = useState(Array<PaymentProps>());

    function UpdatePayments() { 
        setPaymants([...payments, {id:"test", expense: (payments.length+1)*100, purpose: "太郎", payer: "なにか"}])
    }

    return (
        <div>
            <h1>対象:{id}</h1>
            <button onClick={UpdatePayments}>行追加</button>
            <table>
                <tr>
                    <th>支払者</th>
                    <th>目的</th>
                    <th>金額</th>
                </tr>
                {payments.map((payment) => (
                    <Payment id={payment.id} expense={payment.expense} purpose={payment.purpose} payer={payment.payer} />
                ))}

            </table>
        </div>
    );
}

export default PaymentsTable;

           