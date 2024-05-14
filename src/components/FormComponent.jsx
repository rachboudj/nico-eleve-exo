import React, { useEffect, useState } from 'react'
import { Table,Checkbox,Label,input,Button  } from "flowbite-react";


export default function FormComponent({update,data}) {
    const [name, setName] = useState('')
    const [note1, setNote1] = useState('')
    const [note2, setNote2] = useState('')
    const [note3, setNote3] = useState('')
  
    function handleSubmit(event) {

        event.preventDefault();
        if (update.get === false) {
            data.set([...data.get, {
                id: new Date().getTime(),
                name: name,
                matiere: {
                  html: parseFloat(note1).toFixed(2),
                  javascript: parseFloat(note2).toFixed(2),
                  php: parseFloat(note3).toFixed(2),
                 
                },
                moyenne : (parseFloat(note1) + parseFloat(note2) + parseFloat(note3) / 3).toFixed(2)
              }])
        }else {
            data.set(data.get.map(element => (element.id == update.get ? {
                    id: new Date().getTime(),
                    name: name,
                    matiere: {
                      html: parseFloat(note1).toFixed(2),
                      javascript: parseFloat(note2).toFixed(2),
                      php: parseFloat(note3).toFixed(2),
                     
                    },
                    moyenne : (parseFloat(note1) + parseFloat(note2) + parseFloat(note3) / 3).toFixed(2)
                  } : element
            )))
        }
        update.set(false)
       
  
    }

    useEffect(() => {
        if (update.get) {
            const element = data.get.find((value) => value.id == update.get)
            setName(element.name)
            setNote1(element.matiere.html)
            setNote2(element.matiere.javascript)
            setNote3(element.matiere.php)

        }else{
            setName('')
            setNote1('')
            setNote2('')
            setNote3('')
        }
    }, [update])
    
  return (
    <form className="formUser flex items-end gap-4 my-8 overflow-x-auto p-8" onSubmit={handleSubmit}>
         <div className="grow">
            <div className="mb-2 block">
                <Label htmlFor="small" value="Nom" />
            </div>
            <input id="base" type="text" sizing="md" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="grow">
            <div className="mb-2 block">
                <Label htmlFor="small" value="Html" />
            </div>
            <input id="base" type="number" sizing="md" value={note1}  onChange={(e) => setNote1(e.target.value)} required/>
        </div>
            <div className="grow">
            <div className="mb-2 block">
                <Label htmlFor="small" value="Javascript" />
            </div>
            <input id="base" type="number" sizing="md" value={note2}  onChange={(e) => setNote2(e.target.value)} required/>
        </div>
        <div className="grow">
            <div className="mb-2 block">
                <Label htmlFor="small" value="Php" />
            </div>
            <input id="base" type="number" sizing="md" value={note3}  onChange={(e) => setNote3(e.target.value)} required/>
        </div>
        <div className="h-min">
            <Button type='submit'>Enregistrer</Button>
        </div>


    </form>
  )
}
