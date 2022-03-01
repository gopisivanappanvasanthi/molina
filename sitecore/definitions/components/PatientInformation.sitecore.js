import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
export default function (manifest) {
  manifest.addComponent({
    name: 'PatientInformation',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'firstName', type: CommonFieldTypes.SingleLineText },
      { name: 'lastName', type: CommonFieldTypes.SingleLineText },
      { name: 'dob', type: CommonFieldTypes.SingleLineText },
      { name: 'gender', type: CommonFieldTypes.SingleLineText },
      { name: 'phoneNumber', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
