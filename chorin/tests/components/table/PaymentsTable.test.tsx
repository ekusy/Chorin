import React from 'react' // ReactをインポートしないとReact要素のRenderingができない
import { render, screen, fireEvent } from "@testing-library/react"  // 
import '@testing-library/jest-dom';
import PaymentsTable from '../../../src/componets/table/PaymentsTable';
import { Payment } from '../../../src/componets/table/Payment';

// Paymentモジュール全体をモック化
// 子要素であるPaymentはモック化することにより、Paymentの実装によらずテストできる
jest.mock('../../../src/componets/table/Payment');

describe('PaymentsTableテスト', () => {
    test('固定部分', async () => {
        // 要素のレンダリング(するとscreenでレンダリングされた要素にアクセスできる)
        render(<PaymentsTable id={"test"} />)

        // IDの確認
        expect(screen.getByText(/対象:test/i)).toBeInTheDocument();

        // ヘッダーの確認
        expect(screen.getByText(/支払者/i)).toBeInTheDocument();
        expect(screen.getByText(/目的/i)).toBeInTheDocument();
        expect(screen.getByText(/金額/i)).toBeInTheDocument();
    });
    test('ボタン押下で行が増える', async () => {
        // 要素のレンダリング
        render(<PaymentsTable id={"test"} />)

        // ボタンを取得
        const button = screen.getByText(/行追加/i);

        // ボタンを押すまでは要素が存在しないことをを確認
        // モック化したPayment functionが呼び出されていないことで確認する
        expect(Payment).toBeCalledTimes(0);

        // ボタンをクリック
        fireEvent.click(button);

        // ボタンを押すことでPaymentが増えることを確認
        // モック化したPayment functionが呼び出されていることで確認する
        expect(Payment).toHaveBeenCalled();

    });
});
