import React, { useState } from 'react';
import { 
  Form, 
  Button,
  Container
} from 'react-bootstrap';

const EmailTemplateForm = ({ variables }) => {
  const [emailContent, setEmailContent] = useState('');
  const [emailOutput, setEmailOutput] = useState('');

  const handleInputChange = (e) => {
    // setEmailContent(e.target.value);
    const regex = /#\{(\w+)\}/
    const result = e.target.value.replace(regex, (_, variableLabel) => {
      const variable = variables.find((v) => v.label.toLowerCase() === variableLabel.toLowerCase());
      if (variable) {
        return variable.value;
      } else {
        return `[Variable '${variableLabel}' not found]`;
      }
    });
    setEmailContent(result)
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
      {emailContent}
      </Container>
    </>
  );
};

export default EmailTemplateForm;
