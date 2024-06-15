/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "FurryFriendCare",
    description:
      "My Project FurryFriendCare is an innovative platform who addresses the need of pet owners who may find themselves in a situation where they want to go outside but they can't take their beloved pets with them. My Project is a bridge between pet owner and care-taker, so that pet owner can find trusted care-taker nearby.",
    url: "https://github.com/Desania/FurryFriendCare.git",
  },
  {
    title: "GreenBridge",
    description:
      "My Project GreenBridge is revolutionizing the agricultural market by empowering farmers to bypass intermediaries and connect directly with consumers. Our platform ensures that growers receive the full value of their hard work, enabling them to sell their products directly to customers and secure the earnings they rightfully deserve.",
    url: "https://greenbridge.vercel.app/",
  },
  // {
  //   title: "My Resume",
  //   description:
  //     "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
  //   url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  // },
  // {
  //   title: "GitHub Codespaces and github.dev",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
