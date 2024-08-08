import { useState } from 'react';
import './Payment.css';

/**
 * @summary x•¥‚¢
 */
export interface PaymentProps {
    id:string,  // x•¥‚¢¯•Êq
    expense: number;    // ‹àŠz
    purpose: string;    // –Ú“I
    payer: string;      // •¥‚Á‚½l
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