
import { Table,Checkbox,Label,TextInput,Button  } from "flowbite-react";

export default function TableComponent({data,dataCheck,toggleCheck,setUpdate}) {
  return (
    <div className="overflow-x-auto p-8">
      
      <Table hoverable className="mb-8">
        <Table.Head>
          <Table.HeadCell className="p-4">
          <Checkbox checked={dataCheck.get.length == data.length} onClick={()=> dataCheck.get.length == data.length ? dataCheck.set([]) : dataCheck.set(data.map(element => (element.id))) } />
          </Table.HeadCell>
          <Table.HeadCell>Nom</Table.HeadCell>
          <Table.HeadCell>Html</Table.HeadCell>
          <Table.HeadCell>Javascript</Table.HeadCell>
          <Table.HeadCell>Php</Table.HeadCell>
          <Table.HeadCell>Moyenne</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
    
         {data.map((element, index) => (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
            <Checkbox checked={dataCheck.get.find((value) => (value == element.id))} onClick={() => toggleCheck(element.id)} />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {element.name}
            </Table.Cell>
            <Table.Cell>{element.matiere.html}</Table.Cell>
            <Table.Cell>{element.matiere.javascript}</Table.Cell>
            <Table.Cell>{element.matiere.php}</Table.Cell>
            <Table.Cell>{element.moyenne}</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500" onClick={()=>setUpdate(element.id)}>
                Edit  
              </a>
            </Table.Cell>
          </Table.Row>
         ))}
        
        </Table.Body>
      </Table>
      
    </div>
  );
}
