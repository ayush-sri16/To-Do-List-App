import React from "react";

export const About = (props) => {
  const aboutStyle = {
    width: "700px",
    fontSize: "20px",

  };
  return (
    <div className="container" style={aboutStyle}>
      <h2 className="text-center my-3 text-dark">About Us</h2>
      <p>
        This is a To do List Web App, in this web app you can add the important
        tasks of the day with their description to see your progress, and also
        you can delete the tasks which have been accomplished.
      </p>
    </div>
  );
};

export default About;
