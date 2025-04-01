import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'

const BOQ = (allRfpData) => {
  const [ boqData, setBoqData ] = useState([]);
  const [columns] = useState([
      { dataField: "sheet_name", text: "Sheet Name" },
      { dataField: "s_number", text: "Serial No." },
      { dataField: "boq_line_code", text: "Activity Code" },
      { dataField: "boq_line_subcode", text: "Sub Code" },
      { dataField: "boq_description", text: "Description" },
      { dataField: "boq_uom", text: "UOM" },
      { dataField: "boq_quantity", text: "Quantity" },
    ]);

    const getParentToChildData = (data) => {
        setBoqData(data.rfp_boq_dtls);
    }


    useEffect(() => {
          getParentToChildData(allRfpData);
    }, [])



  return (
    <>
    <Row>
    <BootstrapTable
          keyField="id"
          data={boqData}
          columns={columns}
          striped
          hover
          bootstrap4
        />
    </Row>
    </>
  )
}

export default BOQ