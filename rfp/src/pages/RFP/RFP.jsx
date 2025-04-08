import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Header from "./Header";
import Locations from "./Locations";
import Item from "./Item";
import BOQ from "./BOQ";
import BOQFiles from "./BOQFiles";
import VendorDetails from "./VendorDetails";
import TermsAndConditions from "./TermsAndConditions";
import NegotiationRounds from "./NegotiationRounds";
import ExtendRFP from "./ExtendRFP";

const RFP = (allRfpData) => {
  return (
    <>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>RFP Details</Accordion.Header>
          <Accordion.Body>
            <Header {...allRfpData} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Location Details</Accordion.Header>
          <Accordion.Body>
            <Locations {...allRfpData} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Item</Accordion.Header>
          <Accordion.Body>
            <Item {...allRfpData} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>BOQ</Accordion.Header>
          <Accordion.Body>
            <BOQ {...allRfpData} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>BOQ Files</Accordion.Header>
          <Accordion.Body>
            <BOQFiles {...allRfpData} /> 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Vendor Details</Accordion.Header>
          <Accordion.Body>
            <VendorDetails {...allRfpData} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Terms & Conditions</Accordion.Header>
          <Accordion.Body>
            {/* <TermsAndConditions {...allRfpData} /> */}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Negotiation Rounds</Accordion.Header>
          <Accordion.Body>
            <NegotiationRounds {...allRfpData} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Extnd RFP</Accordion.Header>
          <Accordion.Body>
            <ExtendRFP {...allRfpData} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion.Item>
    </>
  );
};

export default RFP;
