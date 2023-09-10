import { useEffect, useState } from "react"
import Country from "./country"

export default function Countries (){
    
 const [countries,setCountries] = useState([])

 useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
 },[])

    return (
        <div className="box1">
            <h3>All-Countries : {countries.length} </h3>

            <div className="grid">
                {
                    countries.map (country => <Country
                    country={country}></Country> )
                }
            </div>
        </div>
    )
}