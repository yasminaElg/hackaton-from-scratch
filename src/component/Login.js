import React from "react";
import { colors } from "../colors";
import { fonts } from "../fonts";
import styled from "styled-components";
import axios from "axios";
//import { withRouter } from "react-router-dom";

const LoginButton = styled.button`
  margin-top: 150px;
  margin-left: 850px;
  padding: 0 auto;
  height: 60px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid ${colors.red};
  color: ${colors.Red};
  font-family: ${fonts.catamaran};
  font-weight: 800;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: block;
  p {
    margin-top: 22px;
  }
`;

export class Login extends React.Component {
  createToken = async () => {
    const res = await axios.get("http://localhost:3003/system/login");
    localStorage.setItem("token", res.data.token);
    this.props.history.push("/admin");
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <LoginButton onClick={this.createToken}>
          <p>LOGIN</p>
        </LoginButton>
      </div>
    );
  }
}

//export const Login = withRouter(_Login)
