import React from "react";
import { Hackathon } from "./Hackathon";


export const Content = () => {
  const hackathons = [
    {
      id: 1,
      title: "Retake control of all your deliveries",
      date: "12/11/18",
      address: "rue des palais 44",
      description: "blablabla"
    },
    {
      id: 2,
      title: "Retake control of all your deliveries",
      date: "12/12/18",
      address: "rue des palais 44",
      description: "blablabla"
    },
    {
      id: 3,
      title: "Retake control of all your deliveries",
      date: "12/01/19",
      address: "rue des palais 44",
      description: "blablabla"
    }
  ];
  return (
    <div>
      {hackathons.map(({ id, title, date, address, description }) => (
        <Hackathon
          key={id}
          title={title}
          date={date}
          address={address}
          description={description}
        />
      ))}
    </div>
  );
};
