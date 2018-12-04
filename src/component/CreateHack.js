import React from "react";
// import { Hackathon } from "./Hackathon";
// import axios from "axios";

export class CreateHack extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

CreateHack.propTypes = {};

export default CreateHack;