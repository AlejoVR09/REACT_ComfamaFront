import React from 'react';
import './DataTable.css';

const DataTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre Propuesta</th>
            <th>Fecha</th>
            <th>Descripcion</th>
            <th>Valor</th>
            <th>Beneficiados</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.proposalName}</td>
              <td>{item.presentation}</td>
              <td>{item.proposalDescription}</td>
              <td>{item.valueProposal + "$"}</td>
              <td>{item.benefited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;