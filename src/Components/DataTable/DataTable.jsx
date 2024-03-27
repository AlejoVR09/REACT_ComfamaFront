import React from 'react';
import './DataTable.css';

const DataTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Dirección</th>
            <th>Descripción</th>
            <th>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>{item.direccion}</td>
              <td>{item.descripcion}</td>
              <td>{item.mensaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;