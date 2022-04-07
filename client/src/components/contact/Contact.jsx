import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";

function Home({children}) {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
              <>
                <h1 className="heading">
                  This is Contact Page
                </h1>
                <hr />
              </>
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
