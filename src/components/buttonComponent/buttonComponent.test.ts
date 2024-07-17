import { ButtonStyles } from './buttonComponent';
import "jest-environment-jsdom";
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('ButtonStyles component', () => {
    test('renders with prev style', () => {
        render(<ButtonStyles styled="prev">Previous</ButtonStyles>);
        const button = screen.getByText('Previous');
        expect(button).toHaveStyle('background-color: #FFFFFF');
        expect(button).toHaveStyle('color: #135846');
        expect(button).toHaveStyle('border: 1px solid #135846');
    });

    test('renders with next style', () => {
        render(<ButtonStyles styled="next">Next</ButtonStyles>);
        const button = screen.getByText('Next');
        expect(button).toHaveStyle('background-color: #135846');
        expect(button).toHaveStyle('color: #FFFFFF');
        expect(button).toHaveStyle('border: none');
    });
});
