import React, { useState } from 'react';
import { 
  Form, 
  Button,
  Container,
  Row,
  Col 
} from 'react-bootstrap';

const VariableForm = ({ onAddVariable }) => {
  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVariable(label, value);
    setLabel('');
    setValue('');
  };

  return (
    <Container>
      <Row>
        <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="label">
            <Form.Label>Label:</Form.Label>
            <Form.Control
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="value">
            <Form.Label>Value:</Form.Label>
            <Form.Control
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </Form.Group>
          <Row>
            <Col>
              <Button className="w-100" variant="light" type="submit" xs="auto">
                Add
              </Button>
            </Col>
            <Col>
              <Button className="w-100" variant="danger" type="submit">
                Remove
              </Button>
            </Col>
          </Row>
          
        </Form>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default VariableForm;
