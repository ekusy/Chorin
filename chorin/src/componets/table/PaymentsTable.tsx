import { useState } from 'react';
import './PaymentsTable.css';

interface PaymentsTableProps {
    id: string;
}

interface Payment {
    expense: number;    // 金額
    purpose: string;    // 目的
    payer: string;      // 払った人
}

function PaymentsTable({ id }: PaymentsTableProps) {

    const [payments, setPaymants] = useState(Array<Payment>());

    function UpdatePayments() { 
        setPaymants([...payments, { expense: (payments.length+1)*100, purpose: "太郎", payer: "なにか"}])
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
                    <tr>
                        <td>{payment.payer}</td>
                        <td>{payment.purpose}</td>
                        <td>{payment.expense}</td>
                    </tr>
                ))};

            </table>
        </div>
    );
}

export default PaymentsTable;

           