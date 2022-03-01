import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const DoctorPrescription = ({ route }) => {
  console.log(route);
  return (
    <div>
      <h1>
        <p>Prescription</p>
      </h1>
      <Text field={props.fields.patientName} />
      <br />
      <Text field={props.fields.patientAge} />
      <br />
      <Text field={props.fields.patientDescription} />
    </div>
  );
};

export default DoctorPrescription;
