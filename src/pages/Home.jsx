import React, { useState } from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap';
import VariableForm from "../components/VariableForm"
import EmailTemplateForm from "../components/EmailTemplateForm"

export default function Home() {

  // const [variables, setVariables] = useState('');
  const [variables, setVariables] = useState([])


  const handleChildData = (childData) => {
    setVariables(childData);
  };

  return (
    <>
      <Navigation/>
      <Container>
        <Row>
          <Col>
            <h1>Variable Email App</h1>
            <VariableForm onDataUpdate={handleChildData} />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <EmailTemplateForm variables={variables} />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}
