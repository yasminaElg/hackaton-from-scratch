import React from "react";
import axios from "axios";
import { Hackathon } from "./Hackathon";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../colors";
import { fonts } from "../fonts";
import { Header } from "./Header";

const Button = styled(Link)`
  padding: 0 auto;
  height: 60px;
  width: 100px;
  background-color: rgba(0, 0, 0, 0);
  color: ${colors.purple};
  font-family: ${fonts.catamaran};
  display: inline-block;

  p {
    margin-top: 22px;
  }
`;

export class Admin extends React.Component {
  state = {
    hackathons: null
  };

  async componentDidMount() {
    await this.fetchHackatons();
  }

  fetchHackatons = async () => {
    const res = await axios.get("http://localhost:3003/hackathons");
    this.setState({ hackathons: res.data });
  };

  removeHack = async id => {
    await axios({
      url: `http://localhost:3003/hackathons/${id}`,
      method: "delete",
      headers: { authorization: localStorage.getItem("token")}
    });
    await this.fetchHackatons();
  };

  render() {
    if (!this.state.hackathons) {
      return <div>Un instant....</div>;
    }

    const hacks = [...this.state.hackathons].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    console.log(hacks);

    return (
      <div>
        <Header/>
        {hacks.map(({ id, title, date, address, description }) => (
          <div key={id}>
            <Hackathon
              title={title}
              date={date}
              address={address}
              description={description}
            />
            <Button to={`/admin/update/${id}`}>
              <p>update</p>
            </Button>
            <button type="submit" onClick={() => this.removeHack(id)}>
              Delete
            </button>
          </div>
        ))}
        <div>
          <Link to={"/admin/create"}>
            <p>NEW HACKATHON</p>
          </Link>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {};

export default Admin;
