import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieProx from "../assets/Movieprox1.png";
import Muggle from "../assets/muggle.png";

import tract from "../assets/Tract1.png";
import logo_neu from "../assets/logo_neu.svg";
import React, { useState, useEffect } from "react";

import Link from "@mui/material/Link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Astria from "../assets/AstriaTodoAI.png";
import Joi from "../assets/Joi.webp";
import Joiai from "../assets/Joiai.png";
import Joiai2 from "../assets/Joiai2.png";


import Huskyhub from "../assets/Huskyhub.png";
import neu from "../assets/logo_husky.ico";
import ProjectItem from "./ProjectItem";
import TechStack from "./TechStack";

const Projects = () => {
  const [textProgress, setTextProgress] = useState(0);
  const loadingTexts = [
    // "👋 Hi, there! I am an aspiring software developer who enjoys discovering new ideas and technologies while diving.",
    // "Currently I am pursuing my Masters in Information Systems at Northeastern University, interning at TRACT as a software development intern.",
    // "I am a full-stack developer specializing in MERN stack Front-end and Back-end jobs. I am looking for an intern position this year or a new grad job in 2024. Please feel free to get in touch with me on LinkedIn or via email."
    "Projects",
  ];

  useEffect(() => {
    const totalTextLength = loadingTexts.reduce(
      (total, text) => total + text.length,
      0
    );
    const increment = 1;

    const timer = setInterval(() => {
      setTextProgress((prevProgress) => prevProgress + increment);
    }, 100);

    if (textProgress >= totalTextLength) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  const projectsData = [
    {
      title: "JOI.AI",
      images: [Joi, Joiai, Joiai2],
      imageLink: "https://joi-ai.vercel.app/",
      about:
        "Joi.ai is a SaaS AI companion website where users can create and chat with role-based AIs",
      techs: "Next.js, Typescript, Prisma, Tailwind CSS, shadcn ui, langchain and Openai API",
      position:
        "Built & developed the full-stack",
      breadcrumbs: [
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href="https://joi-ai.vercel.app/"
          style={{ marginRight: "10px" }}
        >
          <span className="boldsub">
            <KeyboardArrowRightIcon xs={{ fontSize: "small", color: "red" }} />
            SEE PROJECT
          </span>
        </Link>,
      ],
    },
    {
      title: "TRACT",
      images: [tract],
      imageLink: "https://usetract.com",
      about:
        "While interning at TRACT, I mainly served as a frontend developer using skill of TypeScript and React, developed the official website page of TRACT, improving website's UI/UX",
      techs: "Typescript, React, AWS services",
      position:
        "Leveraged React components, managed state using Redux, and utilized Axios for API calls. Employed CSS modules for styling to ensure modularity and avoid conflicts. Contributed to the user Authentication and Authorization APIs development and integration in the backend, working closely with the team to optimize performance and functionality; Published website updates with AWS EC2 and Nginx, ensuring seamless deployment and accessibility for end-users",
      breadcrumbs: [
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href="https://usetract.com"
          style={{ marginRight: "10px" }}
        >
          <span className="boldsub">
            <KeyboardArrowRightIcon xs={{ fontSize: "small", color: "red" }} />
            SEE PROJECT
          </span>
        </Link>,
      ],
    },
    {
      title: "MOVIEPROX",
      images: [MovieProx],
      imageLink: "https://movieprox.vercel.app/",
      about:
        "MovieProx is a fullstack responsive Nextflix-like website built with MERN (MongoDB, Express, React, Node.js) stack and the Themoviedb API. Users can sign up, search movies, TVs and people, add movies to favorite list, write reviews",
      techs: "Javascript, React, Node.js, Mongoose, Axios, Redux",
      position:
        "Developed the frontend with Material UI and react, server APIs with Express and make API calls to the Themoviedb API by deploying Axios clients; Provided user authentication and protection with JWT and Express Validator; Deployed the application on Vercel and host the database on MongoDB Atlas for cloud storage",
      breadcrumbs: [
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href="https://movieprox.vercel.app/"
          style={{ marginRight: "10px" }}
        >
          <span className="boldsub">
            <KeyboardArrowRightIcon xs={{ fontSize: "small", color: "red" }} />
            SEE PROJECT
          </span>
        </Link>,
      ],
    },
    {
      title: "HUSKYHUB",
      images: [Huskyhub],
      imageLink: "https://github.com/rentxiang/Huskyhub",
      about:
        "Huskyhub is an original pioneer program designed by the Silicon Valley Hackers Club to support student life and foster a community for students at Northeastern University to join and engage in discussions.",
      techs: "Python, Django, HTML, CSS",
      position:
        "Finished and developed the frontend with HTML and backend with Django framework",
      breadcrumbs: [
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href="https://github.com/rentxiang/Huskyhub"
          style={{ marginRight: "10px" }}
        >
          <span className="boldsub">
            <KeyboardArrowRightIcon xs={{ fontSize: "small", color: "red" }} />
            SEE PROJECT
          </span>
        </Link>,
      ],
    },
  ];

  return (
    <section className="">
      <Container className="p-4">
        <Row className="align-items-center justify-content-center">
          <Col lg={8} md={6}>
            {loadingTexts.map((text, index) => (
              <h1 className="name py-0" style={{ textAlign: "left" }}>
                <ArrowForwardIosIcon xs={{ fontSize: "large" }} />{" "}
                {text.substring(0, textProgress)}
              </h1>
            ))}
            <div style={{ marginTop: 100 }}>
              {projectsData.map((project, index) => (
                <ProjectItem
                  key={index}
                  title={project.title}
                  images={project.images}
                  imageLink={project.imageLink}
                  about={project.about}
                  techs={project.techs}
                  position={project.position}
                  breadcrumbs={project.breadcrumbs}
                />
              ))}
            </div>
          </Col>

          {/* Whole Body Border*/}

          <Col lg={2} md={6}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
