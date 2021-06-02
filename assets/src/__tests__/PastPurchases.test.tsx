import React from 'react';
import * as ReactDOM from "react-dom";
import PastPurchases from '../modules/pastPurchases/PastPurchases';

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PastPurchases />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});