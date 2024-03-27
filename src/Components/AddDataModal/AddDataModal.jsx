import React, { useState, useEffect } from "react";
import "./AddDataModal.css";

const AddDataModal = ({ onSave, onClose }) => {
  // Efecto para agregar el event listener
  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      console.log("enter here", e);
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };

    // Agrega el event listener
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    // Limpia el event listener
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [onClose]); // Asegúrate de que el efecto se ejecute nuevamente si la función onClose cambia

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    direccion: "",
    descripcion: "",
    mensaje: "",
    seleccion: '',
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
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Descripción:
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mensaje:
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Seleccion:
            <select name="seleccion" value={formData.seleccion} onChange={handleChange} required>
              <option value="">Seleccione una opción</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>
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
