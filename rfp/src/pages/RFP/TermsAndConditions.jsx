import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const TermsAndConditions = (allRfpData) => {
  const [ terms, setTerms ] = useState(null);

  const getParentToChildData = (data) => {
    console.log('data',data)
        // setTerms(data.rfp_tc_dtls[0].rfp_t_and_c);
  };

  useEffect(() => {
      getParentToChildData(allRfpData);
  }, [])

  return (
    <>
      <Row>
        <div style={{ display:"flex"}}>
          <Form.Group className="mt-2" controlId="formBasicRfp">
            <Button variant="dark">Upload Document</Button>
          </Form.Group>
          <Form.Group className="mt-2 ml-2" controlId="formBasicRfp">
            <Button style={{ marginLeft: "10px"}} variant="dark" className="ml-2">View Document</Button>
          </Form.Group>
          </div>
      </Row>
      <Row className="mt-2">
      <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>Terms & Conditions</Form.Label>
            <InputGroup>
              <Form.Control as="textarea" value={terms || ""} aria-label="With textarea" />
            </InputGroup>
          </Form.Group>
      </Row>
      <Row>
      <div style={{ display:"flex"}}>
          <Form.Group className="mt-2" controlId="formBasicRfp">
            <Button variant="success">Save</Button>
          </Form.Group>
          <Form.Group className="mt-2 ml-2" controlId="formBasicRfp">
            <Button style={{ marginLeft: "10px"}} variant="warning" className="ml-2">Disable Edit</Button>
          </Form.Group>
          </div>
      </Row>
    </>
  );
};

export default TermsAndConditions;
