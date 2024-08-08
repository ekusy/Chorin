import React from 'react' // React���C���|�[�g���Ȃ���React�v�f��Rendering���ł��Ȃ�
import { render, screen } from "@testing-library/react"  // 
import '@testing-library/jest-dom';
import { Payment } from '../../../src/componets/table/Payment';


describe('Payment�e�X�g', () => {
    test('�Œ蕔��', async () => {
        // �v�f�̃����_�����O(�����screen�Ń����_�����O���ꂽ�v�f�ɃA�N�Z�X�ł���)
        render(<Payment id={"test"} expense={100} purpose="test purpose" payer="test payer" />)

        // data-testid���g���đΏۂ̗v�f������
        const headerRow = screen.getAllByTestId('payment-row');
        expect(headerRow).toHaveLength(1);

        
        const items = screen.getAllByTestId('payment-item');
        expect(items).toHaveLength(3);
        expect(items[0]).toHaveTextContent("test payer");
        expect(items[1]).toHaveTextContent("test purpose");
        expect(items[2]).toHaveTextContent("100");
    });
});