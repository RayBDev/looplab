import React, { Component } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

class Footer extends Component {
  state = {
    show: false,
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  render() {
    return (
      <footer className="main-footer" id="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col text-center py-4">
              <h3>LoopLAB</h3>
              <p>Copyright &copy; {new Date().getFullYear()}</p>
              <Button variant="primary" onClick={this.handleShow}>
                Contact Us
              </Button>

              <Modal
                animation="true"
                show={this.state.show}
                onHide={this.handleClose}
                className="text-dark"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" />
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.handleClose} block>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
