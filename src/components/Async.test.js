import { render, screen } from "@testing-library/react";
import Async from './Async';

describe('Async Component' , () => {
    test('renders posts if req is success', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{
                id: 'p1',
                title: 'test post'
            }]
        });
        render(<Async />);

        const listItems = await screen.findAllByRole('listitem',{},{});
        expect(listItems).not.toHaveLength(0);
    })
})