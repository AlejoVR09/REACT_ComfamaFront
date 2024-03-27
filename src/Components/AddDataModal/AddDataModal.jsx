import React, { useState, useEffect } from "react";
import "./AddDataModal.css";

const AddDataModal = ({ onSave, onClose }) => {
  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      console.log("enter here", e);
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };

    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [onClose]); 

  const [formData, setFormData] = useState({
    nombre: "",
    fecha: "",
    descripcionPropuesta: "",
    descripcionActivities: "",
    descripcion: "",
    proponent: "",
    benefited: "",
    seleccion: '',
    valor: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog open className="modal" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h2>Agregar Datos</h2>
          <label>
            Nombre de la propuesta:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Fecha de inicio del evento:
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Descripción de la propuesta:
            <textarea
              name="descripcionPropuesta"
              value={formData.descripcionPropuesta}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Descripción de las actividades:
            <textarea
              name="descripcionActivities"
              value={formData.descripcionActivities}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Beneficiados:
            <select name="benefited" value={formData.benefited} onChange={handleChange} required>
              <option value="">Seleccione una opción</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>
          </label>
          <label>
            Proponente:
            <select name="proponent" value={formData.proponent} onChange={handleChange} required>
              <option value="">Seleccione una opción</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>
          </label>
          <label>
            Valor de la propuesta:
            <input
              type="number"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
              required
            />
          </label>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cerrar
            </button>
            <button type="submit">Guardar</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddDataModal;
