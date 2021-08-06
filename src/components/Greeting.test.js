import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting Component' , () => {
    test('renders the greeting component', () => {
        //Arrange
      render(<Greeting />);
    
      //Act
      //No Actions required here in this test
    
      //Assert
      const paragraphElement = screen.getByText('good to see you!', {exact: false});
      expect(paragraphElement).toBeInTheDocument();
    });

    test('renders the changed text', () => {
        //Arrange
      render(<Greeting />);
    
      //Act
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);
    
      //Assert
      const paragraphElement = screen.getByText('Text is Changed!', {exact: false});
      expect(paragraphElement).toBeInTheDocument();
    });

    test('renders the changed text', () => {
        //Arrange
      render(<Greeting />);
    
      //Act
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);
    
      //Assert
      const paragraphElement = screen.queryByText('good to see you!', {exact: false});
      expect(paragraphElement).toBeNull();
    });
})

