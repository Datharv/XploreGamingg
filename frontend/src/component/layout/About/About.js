import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import me from "../../../images/atharvimage.jpg";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/d_atharv9/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={me}
              alt="Founder"
            />
            <Typography>Atharv Darunkar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              I am a skilled and passionate web developer, dedicated to creating
              dynamic and user-friendly websites. With a strong focus on
              innovation and efficiency, I strive to deliver exceptional digital
              experiences through my expertise in front-end and back-end
              development. Let's transform ideas into captivating online
              realities together.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Let's Connect</Typography>
            <a
              href="https://www.linkedin.com/in/atharv-darunkar-6ba3b9205/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
            <a href="https://github.com/Datharv" target="blank">
              <GithubIcon className="githubSvgIcon" />
            </a>
            <a href="https://www.instagram.com/d_atharv9/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
