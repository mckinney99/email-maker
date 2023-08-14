import React, { useState, useEffect } from 'react';
import { 
  Form, 
  Button,
  Container,
  Row,
  Col 
} from 'react-bootstrap';

let nextId = 1;

const VariableForm = ({ onDataUpdate }) => {
  let firstVariables = [{ id: 0, label: 'name', value: 'Bob' },
                        { id: 1, label: 'location', value: 'Mars'}]

  const [variableFields, setVariableFields] = useState(firstVariables)

  useEffect(() => {
    onDataUpdate(variableFields);;
  }, [variableFields]);

  const handleChange = (index, e) => {
    const updatedFields = [...variableFields];

    if (e.target.name == 'label') {
      updatedFields[index].label = e.target.value;
    } else if (e.target.name == 'value') {
      updatedFields[index].value = e.target.value;
    }
    setVariableFields(updatedFields)
    // onDataUpdate(updatedFields);
  };
  
  const handleAddVariableClick = (index) => {
    let newVariable = { id: nextId++, label: '', value: '' }
    setVariableFields([...variableFields, newVariable])
  };

  const handleRemoveVariableClick = (variable, e) => {
    if (variableFields.length >= 1) {
      e.preventDefault();
      setVariableFields(current => {
        // return current.filter(vari => vari !== variable)
        const updatedState = current.filter(vari => vari !== variable)
        // onDataUpdate(updatedState);
        return updatedState
      })
    }
    console.log()
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
        {variableFields.length >= 1 && variableFields.map((field, index) => (
          <Col key={field.id}>
            <Form>
              <Form.Group controlId="label">
                <Form.Label>Label:</Form.Label>
                <Form.Control
                  type="text"
                  name="label"
                  value={field.label}
                  onChange={(e) => handleChange(index, e)}
                />
              </Form.Group>
              <Form.Group controlId="value">
                <Form.Label>Value:</Form.Label>
                <Form.Control
                  type="text"
                  name="value"
                  value={field.value}
                  onChange={(e) => handleChange(index, e)}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Button 
                    className="w-100" 
                    variant="danger" 
                    type="submit"
                    onClick={(e) => handleRemoveVariableClick(field, e)}
                    >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VariableForm;
