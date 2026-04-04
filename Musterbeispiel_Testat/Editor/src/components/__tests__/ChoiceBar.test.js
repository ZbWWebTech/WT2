import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import {act} from 'react';
import ReactDOMClient from 'react-dom/client';
import ChoiceBar from "../ChoiceBar";


test("that it renders and button works", () => {
  const onClickHandler = jest.fn();

  const { getByText, container } = render(
    <ChoiceBar
      title="Hello"
      percent={33}
      count={123}
      onClickHandler={onClickHandler}
    />
  );

  const progress = container.querySelector(".Progress");
  expect(progress).toHaveStyle("width: 33%");

  expect(getByText("123")).toBeInTheDocument();

  fireEvent.click(getByText("Hello"));
  expect(onClickHandler).toHaveBeenCalled();
});

test('can render output percent', async () => {

    const container = document.createElement('div');
    document.body.appendChild(container);
    
    // ✅ Render the component inside act().
    await act(() => {
        ReactDOMClient.createRoot(container).render(
            <ChoiceBar title="Hello" percent={33} count={123} />
        );
    });
    
    const tree = container.querySelector('div');
    expect(tree).toMatchSnapshot();
});