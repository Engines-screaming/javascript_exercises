import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
import image1 from "./image1.jpg";


it('Card component renders', () => {
    render(<Card src={image1}  caption="test caption" currNum="10" totalNum="10"/>);
})