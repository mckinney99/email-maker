import React, { useState, useEffect } from 'react';
import { 
  Form, 
  Container
} from 'react-bootstrap';

const EmailTemplateForm = ({ variables }) => {
  const [emailContent, setEmailContent] = useState("");
  const [emailOutput, setEmailOutput] = useState("");

  const handleInputChange = (e) => {
    setEmailContent(e.target.value)
  };

  const initialEmailContent = "Hello #{name}! How's life in #{location}?"

  useEffect(() => {
    setEmailContent(initialEmailContent)
  }, [emailContent, variables, initialEmailContent]);

  const replaceVariables = (variables) => {
    let replacedContent = emailContent;

    variables.forEach((variable) => {
      const regex = new RegExp(`#{${variable.label}}`, 'ig');
      replacedContent = replacedContent.replace(regex, variable.value);
    });
    setEmailOutput(replacedContent);
  };

  replaceVariables(variables);

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
            onChange={(e) => handleInputChange(e)}
            required
          />
        </Form.Group>
      </Form>
      <div className="email-output">
        {emailOutput}
      </div>
    </Container>
    </>
  );
};

export default EmailTemplateForm;
