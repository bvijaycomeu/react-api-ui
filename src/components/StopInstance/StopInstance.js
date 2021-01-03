import React, { Fragment, Component } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import "./StopInstance.css";

class StartInstance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      State: "",
      ids: [],
      Selectedid: "",
    };
  }

  async componentDidMount() {
    await fetch("/api/v1/instanceid")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ ids: data });
      })
      .catch((err) => {
        console.log("caught it!", err);
      });
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
console.log([event.target.name], event.target.value,);
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(this.state.State);
    console.log(this.state.Selectedid);
    if (
      form.checkValidity() === true ||
      this.state.State !== '' ||
      this.state.Selectedid !== ''
    ) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      };
      fetch("/api/v1/SingleInstanceStop", requestOptions)
        .then((response) => {
          return response.json();
        })
        .then((respData) => {
          console.log(respData);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({
      validate: true,
    });
  };

  render() {
    const { ids } = this.state;

    return (
      <Fragment>
        <Container>
          <Form
            className="mt-2"
            variant="info"
            noValidate
            validated={this.state.validate}
            onSubmit={this.handleSubmit}
          >
            <Form.Row className="_color ">
              <Form.Group as={Col} md="4" mr="1">
                <Form.Label>Instance Action</Form.Label>
                <Form.Control
                  as="select"
                  name="State"
                  className="col-lg-12"
                  md="2"
                  onChange={this.onChange}
                  value="Start"
                >
                  <option>Select</option>
                  <option value="Stop">Stop</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md="4" mr="1">
                <Form.Label>Instance Id</Form.Label>
                <Form.Control
                  as="select"
                  name="Selectedid"
                  className="col-lg-12"
                  md="2"
                  onChange={this.onChange}
                >
                  <option>select</option>
                  {ids.map((reptile) => (
                    <option value={reptile} key={reptile}>
                      {reptile}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} md="2" mr="1">
                <Button variant="primary" type="submit">
                  Stop
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
          Note:
          <p>{ids.length} instance available in your account </p>
        </Container>
      </Fragment>
    );
  }
}

export default StartInstance;
