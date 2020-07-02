import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render() {

    const isInOrOut = () => {
      if (this.state.isLoggedIn === true) {
        return "in"
      }
      else {
        return "out"
      }
    }

    return (
      <>
        <h1>You are current logged-{isInOrOut()}</h1>
      </>
    )
  }

}

export default App;