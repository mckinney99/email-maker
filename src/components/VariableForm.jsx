import React, { useState } from 'react';
import { 
  Form, 
  Button,
  Container,
  Row,
  Col 
} from 'react-bootstrap';

let nextId = 1;

const VariableForm = ({ onAddVariable }) => {
  let firstVariable = { id: 0, label: '', value: '' }

  const [label, setLabel] = useState('');
  const [value, setValue] = useState('');
  const [variableFields, setVariableFields] = useState([firstVariable])

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    if (name === 'label') {
      setLabel(value);
    } else if (name === 'value') {
      setValue(value);
    }
    onAddVariable(label, value);
  };
  

  const handleAddVariableClick = (index) => {
    let newVariable = { id: nextId++, label: '', value: '' }
    setVariableFields([...variableFields, newVariable])
  };

  const handleRemoveVariableClick = (variable) => {
    setVariableFields(variableFields.filter(a => a.id !== variable.id));
    // let data = [...variableFields]
    // let updatedData = data.splice(index, 1)
    // setVariableFields(updatedData)
  }

  return (
    <Container>
      <Row>
      <Button 
        className="w-100" 
        variant="light" 
        type="submit"
        onClick={(index) => handleAddVariableClick(index)}
      >
        Add Variable
      </Button>
      {variableFields.map(variable => {
        return(
          <Col key={variable.id}>
          <Form>
            <Form.Group controlId="label">
              <Form.Label>Label:</Form.Label>
              <Form.Control
                type="text"
                name="label"
                value={variable.label}
                onChange={(event) => handleChange(variable, event)}
              />
            </Form.Group>
            <Form.Group controlId="value">
              <Form.Label>Value:</Form.Label>
              <Form.Control
                type="text"
                name="value"
                value={variable.value}
                onChange={(event) => handleChange(variable, event)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Button 
                  className="w-100" 
                  variant="danger" 
                  type="submit"
                  onClick={() => handleRemoveVariableClick(variable)}
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
