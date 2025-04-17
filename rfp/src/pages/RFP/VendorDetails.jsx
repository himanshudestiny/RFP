import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const VendorDetails = ({ allRfpData }) => {
  const [vendorData, setVendorData] = useState([]);
  const inputFormatter = (cell, row, rowIndex, formatExtraData) => {
    const { value, onChange } = formatExtraData;
    return (
      <Form.Control
        type="text"
        value={value[row.id] || cell || ""}
        onChange={(e) => onChange(row.id, e.target.value)}
      />
    );
  }; 
  const [inputValues, setInputValues] = useState({});  
  const handleInputChange = (rowId, value) => {
    setInputValues((prev) => ({
      ...prev,
      [rowId]: value, 
    }));
  };
  const [columns] = useState([
    { dataField: "add", text: "Add", sort: true },
    { dataField: "delete", text: "Delete", sort: true },
    {
      dataField: "vendor_code",
      text: "Vendor Code",
      formatter: inputFormatter,
      formatExtraData: {
        value: inputValues,
        onChange: handleInputChange,
      },
    },
    {
      dataField: "name",
      text: "Name",
      formatter: inputFormatter,
      formatExtraData: {
        value: inputValues,
        onChange: handleInputChange,
      },
    },
    {
      dataField: "email",
      text: "Email",
      formatter: inputFormatter,
      formatExtraData: {
        value: inputValues,
        onChange: handleInputChange,
      },
    },
    {
      dataField: "mob",
      text: "Mobile",
      formatter: inputFormatter,
      formatExtraData: {
        value: inputValues,
        onChange: handleInputChange,
      },
    },
    {
      dataField: "pan_no",
      text: "PAN No.",
      formatter: inputFormatter,
      formatExtraData: {
        value: inputValues,
        onChange: handleInputChange,
      },
    },
  ]);

  const getParentToChildData = (data) => {
    setVendorData(data.rfp_vendor_dtls);
  };

  useEffect(() => {
    if (allRfpData) {
      getParentToChildData(allRfpData);
    }
  }, []);

  return (
    <>
      <Row>
        <BootstrapTable
          keyField="id" 
          data={vendorData}
          columns={columns}
          striped
          hover
          bootstrap4
        /> 
      </Row>
    </>
  );
};

export default VendorDetails;
