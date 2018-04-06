import React from "react"
import PropTypes from "prop-types"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    let that = this
    // axios.get('/users/check_for_user', {
    //
    // })
    // .then((response) => {
    //   if (response.data.email) {
    //     that.setState({
    //       currentUser: response.data.email
    //     })
    //   } else {
    //     that.setState({
    //       currentUser: null
    //     })
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
  }

  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }

  render () {
    return (
      // <React.Fragment>
      // </React.Fragment>
      <h1>App</h1>
    );
  }
}

export default App
