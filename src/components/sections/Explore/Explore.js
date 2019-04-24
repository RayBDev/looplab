import React from "react"

import "./Explore.css"
import Img from "../../../images/explore-section1.jpg"

const Explore = () => {
  return (
    <>
      {/* EXPLORE HEAD */}
      <section id="explore-head-section">
        <div className="container">
          <div className="row">
            <div className="col text-center py-5">
              <h1 className="display-4">Explore</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                nulla aliquid velit obcaecati modi aut temporibus quibusdam eius
                illum facere!
              </p>
              <a href="#" className="btn btn-outline-secondary">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section id="explore-section" className="bg-light text-muted py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={Img}
                alt="Explore"
                className="img-fluid mb-3 rounded-circle"
              />
            </div>
            <div className="col-md-6">
              <h3>Explore & Connect</h3>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  unde veniam culpa atque mollitia quam?
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x" />
                </div>
                <div className="p-4 align-self-end">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  unde veniam culpa atque mollitia quam?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Explore
