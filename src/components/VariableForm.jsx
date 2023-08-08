import React, { useState } from 'react';
import { 
  Form, 
  Button,
  Container,
  Row,
  Col 
} from 'react-bootstrap';

const VariableForm = ({ onAddVariable }) => {
  let newVariable = { label: '', value: '' }

  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [variableFields, setVariableFields] = useState([newVariable])

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    if (name === 'label') {
      setLabel(value);
    } else if (name === 'value') {
      setValue(value);
    }
    onAddVariable(label, value);
  };
  

  const handleAddVariableClick = () => {
    let newVariable = { label: '', value: '' }
    setVariableFields([...variableFields, newVariable])
  };

  const removeVariable = (index) => {
    let data = [...variableFields]
    data.splice(index, 1)
    setVariableFields(data)
  }

  return (
    <Container>
      <Row>
      <Button 
        className="w-100" 
        variant="light" 
        type="submit"
        onClick={() => handleAddVariableClick()}
      >
        Add Variable
      </Button>
      {variableFields.map((input, index) => {
        return(
          <Col>
          <Form>
            <Form.Group controlId="label">
              <Form.Label>Label:</Form.Label>
              <Form.Control
                type="text"
                name="label"
                value={input.label}
                onChange={(event) => handleChange(index, event)}
              />
            </Form.Group>
            <Form.Group controlId="value">
              <Form.Label>Value:</Form.Label>
              <Form.Control
                type="text"
                name="value"
                value={input.value}
                onChange={(event) => handleChange(index, event)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Button 
                  className="w-100" 
                  variant="danger" 
                  type="submit"
                  onClick={() => removeVariable(index)}
                  >
                  Remove
                </Button>
              </Col>
            </Row>
            
          </Form>
          </Col>


        )
        
      }
      
      )
      
    }
    </Row>
    </Container>
  );
};

export default VariableForm;
