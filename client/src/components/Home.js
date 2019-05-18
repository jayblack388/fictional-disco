import React from "react";

import Button from "./Button";
import Modal from "./Modal";
import Page from "../containers/Page";
import NavBar from "./Navigation";
class Home extends React.Component {
  state = {
    showModal: false
  };
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    return (
      <Page className="home">
      <NavBar />
        <Button text="Click to Open" onClick={this.toggleModal} />
        <Modal onClose={this.toggleModal} show={this.state.showModal} />
      </Page>
    );
  }
}

export default Home;
