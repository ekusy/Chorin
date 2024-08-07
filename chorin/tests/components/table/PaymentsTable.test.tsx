import React from 'react' // ReactをインポートしないとReact要素のRenderingができない
import { render, screen, fireEvent } from "@testing-library/react"  // 
import '@testing-library/jest-dom';
import PaymentsTable from '../../../src/componets/table/PaymentsTable';

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
        const { container } = render(<PaymentsTable id={"test"} />)

        // ボタンを取得
        const button = screen.getByText(/行追加/i);

        // ボタンをクリック
        fireEvent.click(button);

        // セルの数確認
        const tds1 = container.querySelectorAll("td");
        expect(tds1).toHaveLength(3);

        // セルの各要素確認
        expect(screen.getByText(/100/i)).toBeInTheDocument();
        expect(screen.getByText(/太郎/i)).toBeInTheDocument();
        expect(screen.getByText(/なにか/i)).toBeInTheDocument();

        // ボタンをクリック
        fireEvent.click(button);
        const tds2 = container.querySelectorAll("td");
        expect(tds2).toHaveLength(6);
        expect(screen.getByText(/200/i)).toBeInTheDocument();

    });
});
