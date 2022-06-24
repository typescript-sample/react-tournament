import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AboutPage: React.FunctionComponent = () => {
  const [message, setMessage] = useState('');
  const { param } = useParams();

  useEffect(() => {
    if (param) {
      setMessage('The parameter is ' + param);
    } else {
      setMessage('No parameter was provided');
    }
  }, [param]);

  return (
    <div>
      <p>This is the about page.</p>
      <p>{message}</p>
    </div>
  );
};

export default AboutPage;
