import React, { Component } from "react";

const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Mustafa",
        salary: 5000,
        department: "Bilisim",
      },
      {
        id: 2,
        name: "Kemalettin",
        salary: 5000,
        department: "Pazarlama",
      },
      {
        id: 3,
        name: "Halil",
        salary: 5000,
        department: "Bilisim ",
      },
    ],
  };

  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
