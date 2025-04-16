import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'

const NegotiationRounds = ({allRfpData}) => {
  const [ roundsData, setRoundsData ] = useState([]);
  const inputFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Form.Group className="mt-2" controlId="formBasicRfp">
          <Button variant="success">Close Negotiation</Button>
        </Form.Group>
    );
  };
  const [ columns, setColumns ] = useState([
    { dataField: "negotiation_seq", text: "Round" },
    { dataField: "start_date", text: "Initiation Date" },
    { dataField: "end_date", text: "End Date" },
    { dataField: "status", text: "Status" },
    { dataField: "remarks", text: "Remarks" },
    { dataField: "close", text: "Close Negotiation", formatter: inputFormatter, },
  ])

  


  const getParentToChildData = (data) => {
         setRoundsData(data.rfp_negotiation_dtls)
  }

  useEffect(() => {
    if(allRfpData) {
      getParentToChildData(allRfpData)
    }    
  }, [])

  return (
    <>
    <Row>
    <div style={{ display:"flex"}}>
          <Form.Group className="mt-2" controlId="formBasicRfp">
            <Button variant="success">Initiate RFP</Button>
          </Form.Group>
          <Form.Group className="mt-2 ml-2" controlId="formBasicRfp">
            <Button style={{ marginLeft: "10px"}} variant="warning" className="ml-2">Generate Comparative</Button>
          </Form.Group>
          <Form.Group className="mt-2 ml-2" controlId="formBasicRfp">
            <Button style={{ marginLeft: "10px"}} variant="success" className="ml-2">Approval Workflow</Button>
          </Form.Group>
          </div>
    </Row>
    <Row className="mt-3">
        <BootstrapTable
          keyField="id"
          data={roundsData}
          columns={columns}
          striped
          hover
          bootstrap4
        />
      </Row>
    </>
  )
}

export default NegotiationRounds