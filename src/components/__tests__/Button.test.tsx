import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {Button} from "../Button";

describe('Button component', () => {
    it('renders button with provided children', () => {
        const { getByText } = render(<Button className="btn" type="button">Click me</Button>);
        expect(getByText('Click me')).toBeInTheDocument();
    });

    it('renders button with spinner when isLoading is true', () => {
        const { getByTestId } = render(<Button className="btn" type="button" isLoading={true}>Loading</Button>);
        expect(getByTestId('spinner')).toBeInTheDocument();
    });
    
    it ('renders button with disabled attribute when isLoading is true', () => {
        const { container } = render(<Button className="btn" type="button" isLoading={true}>Loading</Button>);
        expect(container.firstChild).toHaveAttribute('disabled');
    });
    
    it ('renders button with disabled attribute when isDisabled is true', () => {
        const { container } = render(<Button className="btn" type="button" isDisabled={true}>Disabled</Button>);
        expect(container.firstChild).toHaveAttribute('disabled');
    });

    it('does not render spinner when isLoading is false', () => {
        const { queryByTestId } = render(<Button className="btn" type="button" isLoading={false}>Not Loading</Button>);
        expect(queryByTestId('spinner')).not.toBeInTheDocument();
    });

    it('calls onClick function when button is clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button className="btn" type="button" onClick={handleClick}>Click me</Button>);
        fireEvent.click(getByText('Click me'));
        expect(handleClick).toHaveBeenCalled();
    });

    it('renders button with correct type attribute', () => {
        const { container } = render(<Button className="btn" type="submit">Submit</Button>);
        expect(container.firstChild).toHaveAttribute('type', 'submit');
    });
});