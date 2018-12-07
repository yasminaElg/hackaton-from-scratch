import React, { Fragment } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import axios from "axios";

export class Home extends React.Component {
  state = {
    hackathons: null,
    cpt: null
  };


  componentDidMount() {
    axios.get("http://localhost:3003/hackatons").then(res => {
      this.setState({ hackathons: res.data, cpt: res.data.length});
    });
  }
  render() {
    if (!this.state.hackathons) {
      return <div>Un instant....</div>;
    }
    console.log(this.state.hackathons);
    return (
      <Fragment>
        <Header hacks={this.state.hackathons} cpt={this.state.cpt} />
        <Content hacks={this.state.hackathons}/>
      </Fragment>
    );
  }
}

Home.propTypes = {};

