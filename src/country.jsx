import { useState } from "react";

const Country = ({country}) => {

    const {name,flags,currencies,capital,languages,
        region,area} = country;

        const [visit, setVisit]= useState(false);

        const handleVisit =() => {
              setVisit(!visit)
        }
    return (
        <div className={`box ${visit && 'visit' }`}>
            <h2 className="name">Name: {name.common}</h2>
          <img src={flags.png} alt=""className="img" />
          <div className="details">
          <p>Currency: {currencies?.name}</p>
            <p>capital: {capital}</p>
            <p>languages:{languages?.fra}</p>
            <p>region: {region}</p>
            <p>area: {area}</p>
          </div>
          <div className="center">
          <button onClick={handleVisit}>{ visit? 'Visit' : 'Going' }</button>
           {
            visit && 'I have visited '
           }
          </div>
        </div>
    );
};

export default Country;