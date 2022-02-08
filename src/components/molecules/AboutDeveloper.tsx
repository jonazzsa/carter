import React from 'react';
import label from '../../constants/labels';

const AboutDeveloper: React.FC = () => {
  return <div className='about-developer'>
      <p>
          {label.DEVELOPER_NAME_LABEL}{label.DEVELOPER_NAME}<br />
          {label.DEVELOPER_SURNAME_LABEL}{label.DEVELOPER_SURNAME}<br />
          {label.DEVELOPER_PHONE_LABEL}{label.DEVELOPER_PHONE}<br />
          {label.DEVELOPER_EMAIL_LABEL}{label.DEVELOPER_EMAIL}
      </p>
  </div>;
};

export default AboutDeveloper;
