import React from "react"
import { Element } from "react-scroll"

import "./Create.css"
import Img from "../../../images/create-section1.jpg"

const Create = () => {
  return (
    <>
      {/* CREATE HEAD */}
      <section id="create-head-section" class="bg-primary">
        <Element className="container" name="create-head-section">
          <div className="row">
            <div className="col text-center py-5">
              <h1 className="display-4">Create</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                nulla aliquid velit obcaecati modi aut temporibus quibusdam eius
                illum facere!
              </p>
              <a href="#" className="btn btn-outline-light">
                Find Out More
              </a>
            </div>
          </div>
        </Element>
      </section>

      {/* CREATE SECTION */}
      <section id="create-section" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-2">
              <img
                src={Img}
                alt="Create"
                className="img-fluid mb-3 rounded-circle"
              />
            </div>
            <div className="col-md-6 order-1">
              <h3>Create Your Passion</h3>
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

export default Create
