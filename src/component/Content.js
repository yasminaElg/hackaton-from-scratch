import React from "react";
import { Hackathon } from "./Hackathon";
import axios from "axios";

export class Content extends React.Component {
  state = {
    hackathons: null
  };

  componentDidMount() {
    axios.get("http://localhost:3003/hackatons").then(res => {
      this.setState({ hackathons: res.data });
    });
  }

  render() {
    if (!this.state.hackathons) {
      return <div>Un instant....</div>;
    }
    const hacks = [...this.state.hackathons];

    const pastHacks = hacks.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    const futurHack = pastHacks.splice(0, 1)[0];

    return (
      <div>
        <div>
          <div>
            <span>NEXT EVENT</span><br/>
          </div>
          <Hackathon
            key={futurHack.id}
            title={futurHack.title}
            date={futurHack.date}
            address={futurHack.address}
            description={futurHack.description}
          /><br/><br/>
        </div>
        <div>
          <span>PREVIOUS EVENTS</span>
        </div>
        <div>
          {pastHacks.map(({ id, title, date, address, description }) => (
            <Hackathon
              key={id}
              title={title}
              date={date}
              address={address}
              description={description}
            />
          ))}
        </div>
      </div>
    );
  }
}
