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
export function Payment({ id, expense, purpose, payer }: PaymentProps) {

    return (
        <div data-id={id} data-testid="payment-row" className="payment-row" >
            <div className="payment-item" data-testid="payment-item">{payer}</div>
            <div className="payment-item" data-testid="payment-item">{purpose}</div>
            <div className="payment-item" data-testid="payment-item">{expense}</div>
        </div>
    );
}