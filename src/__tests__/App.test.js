import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { Provider } from "react-redux";
import store from "../store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // TEST TO DO
});
