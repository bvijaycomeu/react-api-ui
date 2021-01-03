import React, { Fragment } from "react";
import { Alert } from "react-bootstrap";

const Home = () => {
  return (
    <Fragment>
      <br />

      <Alert variant="primary">
        <p>AWS console</p>
        <p className="mb-0">
          be sure to use margin utilities to keep things nice and tidy.
        </p>
      </Alert>

      <Alert variant="secondary">
        <p>Azure console</p>
        <p className="mb-0">Whenever</p>
      </Alert>

      <Alert variant="warning">
        <p>GOOGLE CLOUD console</p>
        <p className="mb-0">utilities to keep things nice and tidy.</p>
      </Alert>
    </Fragment>
  );
};

export default Home;
