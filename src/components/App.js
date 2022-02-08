import React, { Component } from 'react'
import MyPoem from "./MyPoem"
import { styleSheet } from "../styles"

const divStyles = {
    background: styleSheet.background
}

export default class App extends Component {
  render() {
      return <div style={divStyles}>
        <h1>Welcome To My Page</h1>
          <MyPoem />
          <footer style={{color:"pink",fontSize:"4em"}}>Thank You Visiting My Page </footer>
    </div>;
  }
}
