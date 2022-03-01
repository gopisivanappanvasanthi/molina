import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
export default function (manifest) {
  manifest.addComponent({
    name: 'DoctorPrescription',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'patientName', type: CommonFieldTypes.SingleLineText },
      { name: 'patientAge', type: CommonFieldTypes.SingleLineText },
      { name: 'patientPrescription', type: CommonFieldTypes.RichText }
    ],
  });
}

