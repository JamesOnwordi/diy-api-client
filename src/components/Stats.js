import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { useParams, useNavigate} from "react-router-dom"

export default function Stats(props){

    const {id} =useParams()
    const navigate = useNavigate()
    const [legend,setLegend] = useState([])

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_DATABASE}/legend/${id}`)
        .then((responce)=>{
            setLegend(responce.data)
        })
    },[])

    const deleteLegend = (e) =>{
        console.log(e)
        axios.delete(`${process.env.REACT_APP_DATABASE}/legend/${id}`)
        navigate(`/`)
    }

    
    return(
        <div>
            <h2>{legend.name}</h2>
            <img src={legend.image} />
            <h2>{legend.age} years</h2>
            <h3>{legend.description}</h3>
            <button onClick={deleteLegend}>Delete</button>
            <span> </span>
            <button>Update</button>
        </div>
    )
}