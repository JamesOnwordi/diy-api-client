import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function New(){

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name:'',
        age:0,
        description:'',
        image: ''
    })

    const handleLegend = (e) =>{
        e.preventDefault()
            console.log(form)
            const response = axios.post(`${process.env.REACT_APP_DATABASE}/legend`, form)
            navigate(`/details/${response._id}`)

     }

    const handleChange = (e) =>{
        console.log(e)

    }
        

    return(
        <div>
            <form onSubmit={handleLegend}>
                <div> 
                <label htmlFor="name"><p>name: </p></label>
                <input name="name" 
                    value={form.name} 
                    type='text'
                    onChange={e=>setForm({...form,name:e.target.value})}
                ></input>
                </div>
                <div>
                <label htmlFor="age"><p> age: </p></label>
                <input 
                        name='age' 
                        value={form.age} 
                        type='number' 
                        onChange={e=>setForm({...form,age:e.target.value})}
                ></input>
                </div>
                <div>
                <label htmlFor="info"><p> info: </p></label>
                <input 
                name="description" 
                value={form.description}type='text' 
                placeholder="description here!!!" 
                onChange={e=>setForm({...form,description:e.target.value})}
                ></input>
                </div>
                <div>
                <label htmlFor="image"><p> image: </p></label>
                <input   
                    value={form.image} 
                    type='text' 
                    placeholder="image link here!!!" 
                    onChange={e=>setForm({...form,image:e.target.value})}
                    ></input>
                </div>
                <p></p>
                <button>Add Legends</button>
            </form>
        </div>
    )
}