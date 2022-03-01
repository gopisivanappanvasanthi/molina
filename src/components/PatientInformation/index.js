import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const PatientInformation = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        <div>Patient Information</div>
      </h1>
      <h3>
        <Text field={props.fields.firstName} />
        &nbsp;
        <Text field={props.fields.lastName} />
      </h3>
      <Text field={props.fields.dob} />
      <br />
      <Text field={props.fields.phoneNumber} />
      <br />
      <Text field={props.fields.gender} />
    </div>
  );
};
export default PatientInformation;
