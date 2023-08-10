import React, { useState } from 'react';
import { 
  Form, 
  Button,
  Container
} from 'react-bootstrap';

const EmailTemplateForm = ({ variables }) => {
  const [emailContent, setEmailContent] = useState('');
  const [emailOutput, setEmailOutput] = useState('');

  const replaceVariables = (e) => {
    let replacedValue = e.target.value;
    setEmailContent(e.target.value)

    variables.forEach((variable) => {
      const regex = /#\{(\w+)\}/
      replacedValue = replacedValue.replace(regex, variable.value);
    });

    return replacedValue;
  };

  const handleInputChange = (e) => {
    const newValue = replaceVariables(e);
    setEmailOutput(newValue)
  };

  const handleEmailSubmission = () => {
    const regex = /#\{(\w+)\}/
    const result = emailContent.replace(regex, (_, variableLabel) => {
      const variable = variables.find((v) => v.label.toLowerCase() === variableLabel.toLowerCase());
      if (variable) {
        return variable.value;
      } else {
        return `[Variable '${variableLabel}' not found]`;
      }
    });
    setEmailOutput(result)
  };

  return (
    <>
    <Container>
      <Form>
        <Form.Group controlId="emailContent">
          <Form.Label>Email Template:</Form.Label>
          <Form.Control
            as="textarea"
            rows="8"
            value={emailContent}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </Form>
      <br/>
      {emailOutput}
      </Container>
    </>
  );
};

export default EmailTemplateForm;
