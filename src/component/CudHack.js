import React from "react";
import axios from "axios";

export class CudHack extends React.Component {
  state = {
    id: this.props.match.params.id,
    title: null,
    date: null,
    address: null,
    description: null
  };

  async componentDidMount() {
    await this.fetchHackaton();
  }

  fetchHackaton = async () => {
    const res = await axios.get(
      `http://localhost:3003/hackatons/${this.state.id}`
    );
    this.setState({
      title: res.data.title,
      date: res.data.date,
      address: res.data.address,
      description: res.data.description
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    await axios.patch(`http://localhost:3003/hackatons/${this.state.id}`, this.state);
    this.props.history.push("/admin")
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })}
            />
          </label>
          <label>
            date:
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={event => this.setState({ date: event.target.value })}
            />
          </label>
          <label>
            address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={event => this.setState({ address: event.target.value })}
            />
          </label>
          <label>
            description:
            <input
              type="text"
              name="description"
              value={this.state.description}
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

CudHack.propTypes = {};

export default CudHack;
