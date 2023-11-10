import React from 'react';
import Error from 'Components/Error';
import Error404 from '../../assets/Error404.png';
import './styles.scss';

const NotFound = () => (
  <div className="Error404">
    <Error image={Error404} className="E" />
  </div>
);

export default NotFound;
