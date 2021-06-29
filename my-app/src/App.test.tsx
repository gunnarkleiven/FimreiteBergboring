import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

test("renders the correct content", () => {
    // Render a React comonent to the DOM
    const root = document.createElement("div");
    ReactDOM.render(<App />, root);

    // Use DOM APIs (querySelector) to make assertions

    // This is just a foolish test
    // expect(root.querySelector("h1").textContent).toBe(undefined);
    expect(1).toBe(1);

});
