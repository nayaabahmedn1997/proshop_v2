import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import React from 'react';
// Define the test suite
describe('App Component', () => {

    // Test 1: Check if the component renders the expected text
    test('renders the text "App"', () => {
        // 1. Arrange: Render the component
        render(<App />);

        // 2. Act/Assert: Use screen to query the DOM for an element 
        // that contains the text 'App' (case-insensitive via /App/i)
        const appElement = screen.getByText(/App/i);

        // 3. Assert: Verify that the element was found in the document
        expect(appElement).toBeInTheDocument();
    });

    // Test 2: Check the accessibility role
    test('renders a role-less div (or a non-semantic container)', () => {
        render(<App />);

        // Use getByText to find the element
        const container = screen.getByText('App');

        // Check that the found element is a DIV tag
        expect(container.tagName).toBe('DIV');
    });
});
