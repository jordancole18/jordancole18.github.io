import "./App.css";
import { ReactTerminal } from "react-terminal";
import resume from "./assets/resume.pdf";

const Links = (
  <span>
    Links{": "}
    <a target="_open" href={resume}>
      Resume
    </a>{" "}
    |{" "}
    <a target="_open" href="https://www.linkedin.com/in/jordan-avery-cole/">
      Linkedin
    </a>{" "}
    |{" "}
    <a target="_open" href="https://github.com/jordancole18">
      GitHub
    </a>{" "}
    |{" "}
    <a target="_open" href="https://gitlab.com/Jordan2118">
      GitLab
    </a>
  </span>
);

const WelcomeMessage = (
  <span>
    <br />
    Jordan Cole <br />
    <a href="mailto:contact@jordancole.me">contact@jordancole.me</a> <br />
    <br />
    {Links} <br /> <br />
    Welcome to my personal website <br />
    Type "help" to explore what I have to offer 😁 <br /> <br />
  </span>
);

const HelpCommand = (
  <span>
    <br />
    <span style={{ color: "rgb(66, 165, 245)" }}>about</span> - Check out my
    interests & hobbies <br />
    <span style={{ color: "rgb(66, 165, 245)" }}>projects</span> - Look at the
    projects I work on <br />
    <span style={{ color: "rgb(66, 165, 245)" }}>contact</span> - Need work
    done? Type this to contact me <br />
    <br />
  </span>
);

const AboutCommand = (
  <span>
    <br />
    <span
      style={{
        color: "rgb(66, 165, 245)",
        width: "100vw",
        textAlign: "center",
        display: "block",
      }}
    >
      About Me
    </span>{" "}
    <br />
    <span>
      Hi! I'm Jordan Cole, I'm a {getAge("2002/01/18")} year old software
      developer who has been programming for the last {getAge("2014/01/18")}{" "}
      years. I currently work for{" "}
      <a target="_open" href="https://sevenhillstechnology.com/">
        Seven Hills Technology
      </a>{" "}
      where I consult & program for various clients creating Mobile App,
      Websites, and API's using a multitude of frameworks & languages such as
      React, React Native, Angular, Node.JS, PHP, and .NET. Some of my interests
      include Bowling, Gaming, and Traveling.
    </span>
    <br />
  </span>
);

const Contact = (
  <span>
    <br />
    <a href="mailto:contact@jordancole.me">contact@jordancole.me</a> <br />
    <br />
    {Links} <br />
  </span>
);

function App() {
  const commands = {
    help: HelpCommand,
    about: AboutCommand,
    projects: <span></span>,
    contact: Contact,
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <ReactTerminal
        commands={commands}
        welcomeMessage={WelcomeMessage}
        theme={"material-dark"}
        style={{ height: "100vh" }}
        showControlBar={false}
      />
    </div>
  );
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default App;
