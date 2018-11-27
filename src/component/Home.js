import React, { Fragment } from "react";
import { Header } from "./Header";
import { Content } from "./Content";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
      </Fragment>
    );
  }
}

Home.propTypes = {};

export default Home;
