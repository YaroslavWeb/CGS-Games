import React from "react"
import ReactDOM from "react-dom"
import App from "App"

import { createOvermind } from "overmind"
import { Provider } from "overmind-react"
import { config } from "store"

import "./index.scss"

const overmind = createOvermind(config)

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
