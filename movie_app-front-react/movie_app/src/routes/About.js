import React from "react";
import './About.css';

function About(props) {
  console.log(props);

  return (
    <div className="about__container">
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias beatae, cum cupiditate enim expedita harum hic magni nam natus obcaecati porro quaerat quas rem rerum sed sint totam voluptas?</span>
      <span>- George Orwell, 1984</span>
    </div>
  );
}

export default About;