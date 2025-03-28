import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [rfpNumber, setRfpNumber] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState(null);
  const [rfpStatus, setRfpStatus] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [columns, setColumns] = useState([
    {
      dataField: "rfp_number",
      text: "RFP Number",
      sort: true,
    },
    {
      dataField: "user_name",
      text: "RFP Created By",
      sort: true,
    },
    {
      dataField: "start_date",
      text: "Start Date",
    },
    {
      dataField: "end_date",
      text: "End Date",
    },
    {
      dataField: "approval_status",
      text: "Approval Status",
    },
    {
      dataField: "rfp_status",
      text: "RFP Status",
    },
  ]);
  const [data, setData] = useState([]);

  const getRfpGridData = async () => {
    const accessToken = sessionStorage.getItem('token');
    let payload = {
      _limit: perPage,
      _page: currentPage - 1,
      rfp_number: rfpNumber ? rfpNumber : null,
      approval_status: approvalStatus ? approvalStatus : null,
      rfp_status: rfpStatus ? rfpStatus : null,
      start_date: startDate ? startDate : null,
      end_date: endDate ? endDate : null,
    };

    const queryString = Object.keys(payload)
      .filter((key) => payload[key] !== null)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`
      )
      .join("&");

    const apiUrl = `https://realappdev.delhivery.com:8080/realapp/rfp/rfp-entry?${queryString}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data.data.page);
      setData(data.data.page)
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return (
    <Row>
      <Row className="mt-4" style={{ backgroundColor: "teal", width: "100%" }}>
        <Col xs={1}></Col>
        <Col
          className=""
          xs={6}
          lg="2"
          style={{
            backgroundColor: "white",
            width: "10%",
            border: "2px solid teal",
          }}
        >
          RFP
        </Col>
      </Row>
      <Container>
        <Row
          className="mt-4"
          style={{ backgroundColor: "white", width: "95%", margin: "auto" }}
        >
          <Col className="ml-4" xs={2}>
            <Form.Group className="mb-3" controlId="formBasicRfp">
              <Form.Label style={{ alignItems: "left" }}>RFP Number</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={rfpNumber}
                onChange={(e) => setRfpNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="ml-4" xs={2}>
            <Form.Group className="mb-3" controlId="formBasicRfp">
              <Form.Label style={{ alignItems: "left" }}>
                Approval Status
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={approvalStatus}
                onChange={(e) => setApprovalStatus(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="ml-4" xs={2}>
            <Form.Group className="mb-3" controlId="formBasicRfp">
              <Form.Label style={{ alignItems: "left" }}>RFP Status</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={rfpStatus}
                onChange={(e) => setRfpStatus(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="ml-4" xs={2}>
            <Form.Group className="mb-3" controlId="formBasicRfp">
              <Form.Label style={{ alignItems: "left" }}>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="ml-4" xs={2}>
            <Form.Group className="mb-3" controlId="formBasicRfp">
              <Form.Label style={{ alignItems: "left" }}>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="ml-4 mt-4" xs={1}>
            <Form.Group className="mb-3 mt-2" controlId="formBasicRfp">
              <Form.Label style={{ alignItems: "left" }}></Form.Label>
              <Button variant="dark" onClick={getRfpGridData}>
                Search
              </Button>
            </Form.Group>
          </Col>
          <Col className="ml-4 mt-4" xs={1}>
            <Form.Group className="mb-3 mt-2" controlId="formBasicRfp">
              <Form.Label style={{ alignItems: "left" }}></Form.Label>
              <Button variant="dark">Clear</Button>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Row>
        <BootstrapTable keyField="id" data={data} columns={columns} />
      </Row>
    </Row>
  );
};

export default Home;
