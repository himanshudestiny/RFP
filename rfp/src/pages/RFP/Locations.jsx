import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const Locations = (allRfpData) => {
  const [locationsData, setLocationsData] = useState([]);
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
      dataField: "country",
      text: "Country",
      formatter: inputFormatter,
      formatExtraData: {
        value: inputValues,
        onChange: handleInputChange,
      },
    },
    {
      dataField: "region",
      text: "Region",
      formatter: inputFormatter,
      formatExtraData: {
        value: inputValues,
        onChange: handleInputChange,
      },
    },
    {
      dataField: "state",
      text: "State",
      formatter: inputFormatter,
      formatExtraData: {
        value: inputValues,
        onChange: handleInputChange,
      },
    },
    {
      dataField: "cost_centre",
      text: "Cost Center",
      formatter: inputFormatter,
      formatExtraData: {
        value: inputValues,
        onChange: handleInputChange,
      },
    },
  ]);

  const getParentToChildData = (data) => {
    setLocationsData(data.rfp_location_dtls);
  };

  useEffect(() => {
    getParentToChildData(allRfpData);
  }, []);

  return (
    <>
      <Row>
        <BootstrapTable 
          keyField="id"
          data={locationsData}
          columns={columns}
          striped
          hover
          bootstrap4
        />
      </Row>
    </>
  );
};

export default Locations;
