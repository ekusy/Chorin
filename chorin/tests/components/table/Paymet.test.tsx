import React from 'react' // React���C���|�[�g���Ȃ���React�v�f��Rendering���ł��Ȃ�
import { render, screen } from "@testing-library/react"  // 
import '@testing-library/jest-dom';
import { Payment } from '../../../src/componets/table/Payment';

describe('Payment�e�X�g', () => {
    test('�Œ蕔��', async () => {
        // �v�f�̃����_�����O(�����screen�Ń����_�����O���ꂽ�v�f�ɃA�N�Z�X�ł���)
        render(<Payment id={"test"} expense={100} purpose="test purpose" payer="test payer" />)

        // �w�b�_�[�̊m�F
        expect(screen.getByText(/100/i)).toBeInTheDocument();
        expect(screen.getByText(/test purpose/i)).toBeInTheDocument();
        expect(screen.getByText(/test payer/i)).toBeInTheDocument();
    });
});