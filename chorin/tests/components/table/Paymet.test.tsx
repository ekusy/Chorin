import React from 'react' // ReactをインポートしないとReact要素のRenderingができない
import { render, screen } from "@testing-library/react"  // 
import '@testing-library/jest-dom';
import { Payment } from '../../../src/componets/table/Payment';


describe('Paymentテスト', () => {
    test('固定部分', async () => {
        // 要素のレンダリング(するとscreenでレンダリングされた要素にアクセスできる)
        render(<Payment id={"test"} expense={100} purpose="test purpose" payer="test payer" />)

        // data-testidを使って対象の要素を検索
        const headerRow = screen.getAllByTestId('payment-row');
        expect(headerRow).toHaveLength(1);

        
        const items = screen.getAllByTestId('payment-item');
        expect(items).toHaveLength(3);
        expect(items[0]).toHaveTextContent("test payer");
        expect(items[1]).toHaveTextContent("test purpose");
        expect(items[2]).toHaveTextContent("100");
    });
});