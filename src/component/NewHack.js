import React from "react";
import axios from "axios";

class NewHack extends React.Component {
  state = {
    title: null,
    date: null,
    address: null,
    description: null
  };

  handleSubmit = async event => {
    event.preventDefault();

    await axios.post(`http://localhost:3003/hackatons`, this.state);
    this.props.history.push("/admin")
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              onChange={event => this.setState({ title: event.target.value })}
            />
          </label>
          <label>
            date:
            <input
              type="text"
              name="date"
              onChange={event => this.setState({ date: event.target.value })}
            />
          </label>
          <label>
            address:
            <input
              type="text"
              name="address"
              onChange={event => this.setState({ address: event.target.value })}
            />
          </label>
          <label>
            description:
            <input
              type="text"
              name="description"
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

NewHack.propTypes = {};

export default NewHack;
