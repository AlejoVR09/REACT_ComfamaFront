import { fetchData } from './CustomFunc/fetchData'
import { Suspense } from 'react'
import './App.css'
import HeaderComponent from './Components/Header/HeaderComponent';
import FooterComponent from './Components/Footer/FooterComponent';
import DataTable from './Components/DataTable/DataTable'
import TableManager from './Components/TableManager/TableManager';
import { useState } from 'react'


const apiData = fetchData("http://localhost:8080/api/v1/document");
function App() {  
  const usersData = [
  {
    nombre: 'Juan Perez',
    correo: 'juanperez@example.com',
    direccion: '123 Main St, Ciudad, País',
    descripcion: 'Cliente frecuente',
    mensaje: 'Ningún mensaje por el momento.'
  },
  {
    nombre: 'Juan Perez',
    correo: 'juanperez@example.com',
    direccion: '123 Main St, Ciudad, País',
    descripcion: 'Cliente frecuente',
    mensaje: 'Ningún mensaje por el momento.'
  },
  {
    nombre: 'Juan Perez',
    correo: 'juanperez@example.com',
    direccion: '123 Main St, Ciudad, País',
    descripcion: 'Cliente frecuente',
    mensaje: 'Ningún mensaje por el momento.'
  },
];

const addData = (newData) => {
  setUsersData([...usersData, newData]);
};
  const data = apiData.read();
  return (
    <>
      <div className="App">
        <HeaderComponent/>
        <TableManager onAddData={addData} />
        <DataTable data = {usersData}></DataTable>
        <FooterComponent/>
      </div>
    </>
  )
}

export default App
