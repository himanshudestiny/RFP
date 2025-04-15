import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Header = ({allRfpData}) => {
  const [legalEntity, setLegalEntity] = useState(null);
  const [rfpNumber, setRfpNumber] = useState(null);
  const [userDepartment, setUserDepartment] = useState(null);
  const [bidType, setBidType] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState(null);
  const [rfpStatus, setRfpStatus] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [boqType, setBoqType] = useState(null);
  const [budget, setBudget] = useState(null);
  const [retention, setRetention] = useState(null);
  const [paymentTerms, setPaymentTerms] = useState(null);
  const [description, setDescription] = useState(null);
  const [rfpType, setRfpType] = useState(null);
  const [ editMode, setEditMode ] = useState(true);

  const getParentToChildData = (data) => {    
    if(data) {
      setLegalEntity(data.le_name);
      setRfpNumber(data.rfp_number);
      setUserDepartment(data.user_department_meaning);
      setBidType(data.rfp_type_meaning);
      setApprovalStatus(data.approval_status);
      setRfpStatus(data.rfp_status);
      setStartDate(data.start_date);
      setEndDate(data.end_date);
      setBoqType(data.rfp_item_boq_type);
      setBudget(data.budget);
      setRetention(data.retention); 
      setPaymentTerms(data.payment_terms); 
      setDescription(data.description);
      setRfpType(data.rfp_basis);
      setEditMode(false)  
    }
  };

  const handleRfpTypeChange = (e) => {
    setRfpType(e.target.value);
  };

  const handleEditMode = () => {
    setEditMode(!editMode)
  }

  useEffect(() => {
    if(allRfpData) {
      getParentToChildData(allRfpData);
    }
    
  }, []);

  return (
    <>
      <Row>
        <Col xs={3}>
          <h6>RFP Type</h6>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Item"
                  name="rfpType"
                  value="Item"
                  type={type}
                  id={`inline-${type}-1`}
                  checked={rfpType === "Item"}
                  onChange={handleRfpTypeChange}
                />
                <Form.Check
                  inline
                  label="BOQ"
                  name="rfpType"
                  value="BOQ"
                  type={type}
                  id={`inline-${type}-2`}
                  checked={rfpType === "BOQ"}
                  onChange={handleRfpTypeChange}
                />
              </div>
            ))}
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>Legal Entity</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={legalEntity || ""}
              onChange={(e) => setLegalEntity(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>RFP Number</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={rfpNumber || ""}
              onChange={(e) => setRfpNumber(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>User Department</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={userDepartment || ""}
              onChange={(e) => setUserDepartment(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>Bid Type</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={bidType || ""}
              onChange={(e) => setBidType(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>Approval Status</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={approvalStatus || ""}
              onChange={(e) => setApprovalStatus(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>RFP Status</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={rfpStatus || ""}
              onChange={(e) => setRfpStatus(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={startDate || ""}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={endDate || ""}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>BOQ Type</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={boqType || ""}
              onChange={(e) => setBoqType(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>Budget</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={budget || ""}
              onChange={(e) => setBudget(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>Retention</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={retention || ""}
              onChange={(e) => setRetention(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>Payment Terms</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={paymentTerms || ""}
              onChange={(e) => setPaymentTerms(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group className="mb-3" controlId="formBasicRfp">
            <Form.Label>Description</Form.Label>
            <InputGroup>
              <Form.Control
                as="textarea"
                value={description || ""}
                aria-label="With textarea"
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <Button variant="outline-dark">Attachment</Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <div style={{ display: "flex" }}>
          <Button variant="success" disabled={!editMode}>Save</Button>
          <Button style={{ marginLeft: "10px" }} variant="warning" onClick={handleEditMode}>
            Enable Edit
          </Button>
          <Button style={{ marginLeft: "10px" }} variant="danger" disabled={!editMode}>
            Close RFP
          </Button>
          <Button style={{ marginLeft: "10px" }} variant="info" disabled={!editMode}>
            Cancel RFP
          </Button>
          <Button style={{ marginLeft: "10px" }} variant="dark" disabled={!editMode}>
            Owners
          </Button>
          <Button style={{ marginLeft: "10px" }} variant="dark" disabled={!editMode}>
            Q & A
          </Button>
        </div>
      </Row>
    </>
  );
};

export default Header;
