import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'

const ExtendRFP = (allRfpData) => {
  const [ extendedData, setExtendedData ] = useState([]);
  const [ columns, setColumns ] = useState([
    { dataField: "approval_status", text: "Approval Status" },
    { dataField: "le_id", text: "Legal Entity" },
    { dataField: "old_end_date", text: "Old End Date" },
    { dataField: "new_end_date", text: "New End Date" }
  ])
  return (
    <>
    <Row>
    <BootstrapTable
          keyField="id"
          data={extendedData}
          columns={columns}
          striped
          hover
          bootstrap4
        />
    </Row>
    </>
  )
}

export default ExtendRFP