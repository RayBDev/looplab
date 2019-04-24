import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Element } from "react-scroll"

import "./Share.css"

const Share = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "share-section1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 540) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {/* SHARE HEAD */}
        <section id="share-head-section" className="bg-primary">
          <Element className="container" name="share-head-section">
            <div className="row">
              <div className="col text-center py-5">
                <h1 className="display-4">Share</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  nulla aliquid velit obcaecati modi aut temporibus quibusdam
                  eius illum facere!
                </p>
                <a href="/" className="btn btn-outline-light">
                  Find Out More
                </a>
              </div>
            </div>
          </Element>
        </section>

        {/* SHARE SECTION */}
        <section id="share-section" className="bg-light text-muted py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Img
                  className="mb-3 rounded-circle"
                  alt="share"
                  fluid={data.placeholderImage.childImageSharp.fluid}
                />
              </div>
              <div className="col-md-6">
                <h3>Share What You Create</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eligendi voluptatibus reiciendis facilis eos tenetur veniam
                  tempora quia et officia iusto.
                </p>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x" />
                  </div>
                  <div className="p-4 align-self-end">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum unde veniam culpa atque mollitia quam?
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-check fa-2x" />
                  </div>
                  <div className="p-4 align-self-end">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum unde veniam culpa atque mollitia quam?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )}
  />
)

export default Share
