import React from 'react';
import Sidebar from '../component/Sidebar';
import ComprasForm from '../component/ComprasForm';
import ComprasList from '../component/ComprasList';

const ComprasPage = () => {
  return (
    <div>
      <Sidebar />
      <ComprasForm />
      <ComprasList />
    </div>
  );
};

export default ComprasPage;
