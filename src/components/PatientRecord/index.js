import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const PatientRecord = (props) => {
  console.log(props);
  const listItems = props.fields.records;
  return (
    <div>
      <p>PatientRecord Component</p>
      {listItems &&
        listItems.map((listItem, index) => (
          <div key={`listitem-${index}`}>
            <h5>Patient Prescription</h5>
            <p>
              Prescription: <Text field={listItem.fields.patientPrescription} />
            </p>
          </div>
        ))}
    </div>
  );
};

export default PatientRecord;
