import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const ArticleDetail = (props) => (
  <div>
    <h1>
      <Text field={props.fields.articleTitle} />
    </h1>
    <br />
    <h3>
      <RichText field={props.fields.articleShortDescription} />
    </h3>
    <br />
    <br />
    <RichText field={props.fields.articleDetailedDescription} />
    <br />
  </div>
);

export default ArticleDetail;
