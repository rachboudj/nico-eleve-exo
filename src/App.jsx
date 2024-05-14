import { useEffect, useState } from 'react';
import { Button  } from "flowbite-react";
import './App.css';
import TableComponent from './components/TableComponent'
import FormComponent from './components/FormComponent'
function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Rachid',
      matiere: {
        html: 12,
        javascript: 20,
        php: 20,
       
      },
      moyenne: 17
    },
    {
      id: 2,
      name: 'Rachid',
      matiere: {
        html: 12,
        javascript: 20,
        php: 20,
    
      },
      moyenne: 17
    }
    
  ]);

  const [dataCheck, setDataCheck] = useState([]) 
  const [update, setUpdate] = useState(false) 

  function toggleCheck(id) {
    console.log('Toggle')
    dataCheck.find((value) => value == id) ? setDataCheck(dataCheck.filter((value) => (value !== id))) : setDataCheck([...dataCheck, id])
  }

  function deleteDataBySelection() {
   setData(data.filter((value) =>!dataCheck.includes(value.id)))
   setDataCheck([])
  }
  
  useEffect(() => {
    console.log('dfdfdf',localStorage.getItem('dataEleve'))
    if (localStorage.getItem('dataEleve') && JSON.parse(localStorage.getItem('dataEleve'))) {
      setData(JSON.parse(localStorage.getItem('dataEleve')));
    }
 
  }, []);

  useEffect(() => {
    localStorage.setItem("dataEleve", JSON.stringify(data));
  }, [data]);



  return (
    <div className="App">
      <FormComponent update={{set:setUpdate,get:update}} data={{'set': setData, 'get' : data}}/>
      <TableComponent data={data} dataCheck={{'set': setDataCheck, 'get' : dataCheck}} toggleCheck={toggleCheck} setUpdate={setUpdate}/>
      <div className="flex flex-wrap gap-2">
        <Button gradientMonochrome="failure" onClick={deleteDataBySelection}>Supprimer</Button>
      </div>
    </div>
  );
}

export default App;


