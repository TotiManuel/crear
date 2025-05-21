import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../component/Sidebar';
import '../styles/styleIndex.css';
import ProximamenteComponents from '../component/ProximamenteComponent';

const ProximamentePage = () => {

  return (
    <div>
      <Sidebar />
      <ProximamenteComponents />
    </div>
  );
};

export default ProximamentePage;
