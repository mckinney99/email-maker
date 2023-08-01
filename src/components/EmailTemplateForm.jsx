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
    setEmailContent(e.target.value);
  };

  const handleEmailSubmission = () => {
    const regex = /#\{(\w+)\}/
    const result = emailContent.replace(regex, (_, variableLabel) => {
      const variable = variables.find((v) => v.label === variableLabel);
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
        <Button variant="primary" onClick={handleEmailSubmission}>
          Submit Email
        </Button>
      </Form>
      <br/>
      {emailOutput}
      </Container>
    </>
  );
};

export default EmailTemplateForm;
