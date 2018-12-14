import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker/es";
import { Header } from "./Header";
import styled from "styled-components";


const MyDatePicker = styled(DatePicker)`
  width: 180px;
  height: 15px;
`
export class NewHack extends React.Component {
  state = {
    title: null,
    date: null,
    address: null,
    description: null
  };

  handleSubmit = async event => {
    event.preventDefault();

    await axios({
      url: `http://localhost:3003/hackathons/`,
      data: this.state,
      method: "post",
      headers: { authorization: localStorage.getItem("token") }
    });

    this.props.history.push("/admin");
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
              onChange={event => this.setState({ title: event.target.value })}
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
