import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import Modal from "react-bootstrap/Modal";
import RFP from "./RFP/RFP";
import CustomPagination from "../components/Pagination";

const Home = () => {
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [rfpNumber, setRfpNumber] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState(null);
  const [rfpStatus, setRfpStatus] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [columns] = useState([
    { dataField: "rfp_number", text: "RFP Number", sort: true },
    { dataField: "user_name", text: "RFP Created By", sort: true },
    { dataField: "start_date", text: "Start Date" },
    { dataField: "end_date", text: "End Date" },
    { dataField: "approval_status", text: "Approval Status" },
    { dataField: "rfp_status", text: "RFP Status" },
  ]);
  const [data, setData] = useState([]); 
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [allRfpData, setAllRfpData] = useState({}); 
  const [showAddRfp, setShowAddRfp] = useState(false); 

  const getRfpGridData = async () => {
    const accessToken = sessionStorage.getItem("token");
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
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData.data.page || []);
      const total = responseData.data.total_elements || 0;
      setTotalRecords(total);
      setTotalPages(Math.ceil(total / perPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getAllRfpData = async (rfpHdrId) => {
    const accessToken = sessionStorage.getItem("token");
    const apiUrl = `https://realappdev.delhivery.com:8080/realapp/rfp/rfp-entry/${rfpHdrId}`;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, 
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json(); 
      setAllRfpData({ ...responseData.data });
      setFullscreen(true);
      setShow(true);
    } catch (error) {}
  }; 

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClear = () => {
    setRfpNumber(null);
    setApprovalStatus(null);
    setRfpStatus(null);
    setStartDate(null);
    setEndDate(null);
    setCurrentPage(1);
    getRfpGridData();
  };

  const rowEvents = {
    onClick: (e, row) => {
      getAllRfpData(row.rfp_header_id);
    },
  };

  const handleAddRfp = () => {
    setFullscreen(true);
    setShowAddRfp(true);
  };

  useEffect(() => {
    getRfpGridData();
  }, [currentPage, rfpNumber, approvalStatus, rfpStatus, startDate, endDate]);

  return (
    <Row>
      <Row
        className="mt-0"
        style={{ backgroundColor: "indigo", width: "100%" }}
      >
        <Col xs={1}></Col>
        <Col
          className=""
          xs={6}
          lg="2"
          style={{
            backgroundColor: "white",
            width: "10%",
            border: "2px solid indigo",
          }}
        >
          RFP
        </Col>
      </Row>
      <Container>
        <Row
          className="mt-4"
          style={{ backgroundColor: "white", width: "100%", margin: "auto" }}
        >
          <Col className="ml-2" xs={2}>
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
          <Col className="ml-2" xs={2}>
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
          <Col className="ml-2" xs={2}>
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
          <Col className="ml-2" xs={2}>
            <Form.Group className="mb-3" controlId="formBasicRfp">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate || ""}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="ml-2" xs={2}>
            <Form.Group className="mb-3" controlId="formBasicRfp">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate || ""}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col className="mt-4" xs={2} style={{ marginLeft: "-30px" }}>
            <Form.Group className="mb-3 mt-2" controlId="formBasicRfp">
              <Button variant="dark" onClick={getRfpGridData}>
                Search
              </Button>
              <Button
                className="ml-2"
                style={{ marginLeft: "10px" }}
                variant="dark"
                onClick={handleClear}
              >
                Clear
              </Button>
              <Button
                className="ml-2"
                style={{ marginLeft: "10px" }}
                variant="dark"
                onClick={handleAddRfp}
              >
                +
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Row>
        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          rowEvents={rowEvents}
          striped
          hover
          bootstrap4
        />
      </Row>
      <Row>
        {data.length > 0 && (
          <CustomPagination
            totalRecords={totalRecords}
            perPage={perPage}
            totalPages={totalPages}
            maxVisiblePages={10}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </Row>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>RFP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RFP {...allRfpData} />
        </Modal.Body>
      </Modal>
      <Modal
        show={showAddRfp}
        fullscreen={fullscreen}
        onHide={() => setShowAddRfp(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>RFP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RFP />
        </Modal.Body>
      </Modal>
    </Row>
  );
};

export default Home;
