import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import App from "./components/App"
import reducers from "./reducers"

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)