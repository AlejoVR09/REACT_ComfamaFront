import { fetchData } from './CustomFunc/fetchData'
import { Suspense } from 'react'
import './App.css'
import HeaderComponent from './Components/Header/HeaderComponent';
import FooterComponent from './Components/Footer/FooterComponent';
import DataTable from './Components/DataTable/DataTable'
import TableManager from './Components/TableManager/TableManager';
import { useState } from 'react'


const apiData = fetchData("http://localhost:8080/api/v1/proposalDefinition");
function App() {  
  const data = apiData.read();
  console.log(data)
  return (
    <>
      <div className="App">
        <HeaderComponent/>
        <TableManager onAddData={data} />
        <DataTable data = {data}></DataTable>
        <FooterComponent/>
      </div>
    </>
  )
}

export default App
