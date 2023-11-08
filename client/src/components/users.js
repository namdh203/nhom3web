import { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("api/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ users: users });
      });
  }


  render() {
    return (
      <div>
        <h1>Users Component</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key="">
              Username {user.username}, Age: {user.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
