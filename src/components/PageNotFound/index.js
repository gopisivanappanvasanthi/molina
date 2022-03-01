import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const PageNotFound = (props) => (
  <div>
    <p>Page NotFound</p>
    <Text field={props.fields.PageNotFoundText} />
  </div>
);

export default PageNotFound;
