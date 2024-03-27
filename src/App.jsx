import { fetchData } from './CustomFunc/fetchData'
import { Suspense } from 'react'
import './App.css'
import HeaderComponent from './Components/Header/HeaderComponent';
import FooterComponent from './Components/Footer/FooterComponent';
import DataTable from './Components/DataTable/DataTable'
import { useState } from 'react'


const apiData = fetchData("http://localhost:8080/api/v1/document");
function App() {
  const data = apiData.read();
  return (
    <>
      <div className="App">
        <HeaderComponent/>
        <DataTable data = {data}></DataTable>
        <FooterComponent/>
      </div>
    </>
  )
}

export default App
