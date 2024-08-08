import { useState } from 'react';
import './PaymentsTable.css';
import { Payment,PaymentProps } from './Payment';

interface PaymentsTableProps {
    id: string;
}

function PaymentsTable({ id }: PaymentsTableProps) {

    const [payments, setPaymants] = useState(Array<PaymentProps>());

    function UpdatePayments() {
        setPaymants([...payments, {id:"test", expense: (payments.length+1)*100, purpose: "なにか", payer: "太郎"}])
    }
    return (
        <div>
            <h1>対象:{id}</h1>
            <button onClick={UpdatePayments}>行追加</button>
            <div className="header-row">
                <div className="header-item">支払者</div>
                <div className="header-item">目的</div>
                <div className="header-item">金額</div>
            </div>
            
            {payments.map((payment) => (
                <Payment id={payment.id} expense={payment.expense} purpose={payment.purpose} payer={payment.payer} />
            ))}
        </div>
    );
}

export default PaymentsTable;

           