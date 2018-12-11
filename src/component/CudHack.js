import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Header } from "./Header";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";


const MyDatePicker = styled(DatePicker)`
  width: 180px;
  height: 15px;
`
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
    const res = await axios({
      url: `http://localhost:3003/hackatons/${this.state.id}`,
      method: "get",
      headers: { authorization: localStorage.getItem("token") }
    });
    this.setState({
      title: res.data.title,
      date: res.data.date,
      address: res.data.address,
      description: res.data.description
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    await axios({
      url: `http://localhost:3003/hackatons/${this.state.id}`,
      data: this.state,
      method: "patch",
      headers: { authorization: localStorage.getItem("token")}
    });
    this.props.history.push("/admin");
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };




  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={event => this.handleInput(event)}
            />
          </label>
          <label>
            date:
            <MyDatePicker
              name="date"
              selected={new Date(this.state.date)}
              onChange={date => this.setState({ date: date })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="d MMMM, yyyy h:mm aa"
              timeCaption="time"
            />
          </label>
          <label>
            address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={event => this.handleInput(event)}
            />
          </label>
          <label>
            description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={event => this.handleInput(event)}
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
