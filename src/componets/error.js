import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center">
    <h1>404 - Not Found!</h1>
    <Link to="/dashboard">Go Home</Link>
  </div>
);

export default NotFound;