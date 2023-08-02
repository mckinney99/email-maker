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
    const { name, value } = e.target;
    if (name === 'label') {
      setLabel(value);
    } else if (name === 'value') {
      setValue(value);
    }
    onAddVariable(label, value);
  };

  return (
    <Container>
      <Row>
        <Col>
        <Form>
          <Form.Group controlId="label">
            <Form.Label>Label:</Form.Label>
            <Form.Control
              type="text"
              name="label"
              value={label}
              onChange={(e) => handleSubmit(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="value">
            <Form.Label>Value:</Form.Label>
            <Form.Control
              type="text"
              name="value"
              value={value}
              onChange={(e) => handleSubmit(e)}
              required
            />
          </Form.Group>
          <Row>
            <Col>
              <Button 
                className="w-100" 
                variant="light" 
                type="submit" 
              >
                Add
              </Button>
            </Col>
            <Col>
              <Button 
                className="w-100" 
                variant="danger" 
                type="submit"
                >
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
