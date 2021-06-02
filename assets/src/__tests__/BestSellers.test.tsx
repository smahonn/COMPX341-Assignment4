import React from "react";
import { act } from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import BestSellers from "../modules/bestSellers/BestSellers";

describe('BestSellers', function () {
    it('should render text for h3', function () {
        let container = document.createElement('div');
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<BestSellers />, container);
        })
        const header = container.querySelector(".best-sellers");
        expect(header.textContent).toBe("Top 20 best sellers")
    });
});