import { Link } from "react-router-dom"

export default function Legends(props){

    console.log(props.data)

    const allLegends = props.data.map(legend=>{
        console.log(legend._id)
        return(
            <div key={legend._id}>
                <p>{legend.name}</p>
                <Link to={`/details/${legend._id}`}><button>More Info</button></Link>
            </div>
        )
    })
    return(
        <>
            {allLegends}
        </>
    )
}