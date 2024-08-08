import { useState } from 'react';
import './Payment.css';

/**
 * @summary �x����
 */
export interface PaymentProps {
    id:string,  // �x�������ʎq
    expense: number;    // ���z
    purpose: string;    // �ړI
    payer: string;      // �������l
}

/**
 * 
 * @param payment
 * @returns
 */
export function Payment({id,expense,purpose,payer }: PaymentProps) {
    return (
        <tr data-id={id }>
            <td>{payer}</td>
            <td>{purpose}</td>
            <td>{expense}</td>
        </tr>
    );
}