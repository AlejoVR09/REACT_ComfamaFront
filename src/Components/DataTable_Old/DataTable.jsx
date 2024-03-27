import PropTypes from 'prop-types';
const DataTable = ({ data, onView, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.idDocumentType}>
            <td>{item.idDocumentType}</td>
            <td>{item.documentTypeName}</td>
            <td>
              <button onClick={() => onView(item.id)}>Ver</button>
              <button onClick={() => onEdit(item.id)}>Editar</button>
              <button onClick={() => onDelete(item.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default DataTable;