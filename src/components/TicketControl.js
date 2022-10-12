import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }

  handleClick = () => {
    this.setState({ formVisibleOnPage: true });
  };

  render() {
    let currentlyVisibleState = null;
    let addTicketButton = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
    } else {
      currentlyVisibleState = <TicketList />;
      addTicketButton = <button onClick={this.handleClick}>Add ticket</button>; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addTicketButton} {/* new code */}
      </React.Fragment>
    );
  }
}

export default TicketControl;
