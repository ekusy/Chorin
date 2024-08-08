import React from 'react' // ReactをインポートしないとReact要素のRenderingができない
import { render, screen } from "@testing-library/react"  // 
import '@testing-library/jest-dom';
import { Payment } from '../../../src/componets/table/Payment';

describe('Paymentテスト', () => {
    test('固定部分', async () => {
        // 要素のレンダリング(するとscreenでレンダリングされた要素にアクセスできる)
        render(<Payment id={"test"} expense={100} purpose="test purpose" payer="test payer" />)

        // ヘッダーの確認
        expect(screen.getByText(/100/i)).toBeInTheDocument();
        expect(screen.getByText(/test purpose/i)).toBeInTheDocument();
        expect(screen.getByText(/test payer/i)).toBeInTheDocument();
    });
});