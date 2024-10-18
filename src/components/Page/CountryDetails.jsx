import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const CountryDetails = ({ }) => {
    const { name } = useParams();
    const [data, setData] = useState([]);
    const [countryName, setCountryName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log("Data not FOund")
            }
        }
        fetchData();
    }, [name]);

    useEffect(() => {
        const fetchCountryName = async () => {

            try {
                const response = await fetch("https://restcountries.com/v3.1/all")
                const data = await response.json();
                const countryName = data.map(name => name.name.common);
                setCountryName(countryName);

            } catch (error) {

                console.log("Data not Found");
            }

        }
        fetchCountryName();
    }, [])

    let currentIndex = 0;

    // console.log(countryName)
    for (let i = 0; i < countryName.length; i++) {
        if (countryName[i] == name) {
            currentIndex = i
        }
    }
    //    console.log(currentIndex)

    const prev = () => {
        if (currentIndex > 0) {
            navigate(`/country/${countryName[currentIndex - 1]}`)
        }
    }
    const after = () => {
        if (currentIndex < countryName.length - 1) {
            navigate(`/country/${countryName[currentIndex + 1]}`)
        }
    }
    return (
        <div className="w-[80%] mx-auto py-10">
            
        <div className="flex justify-center gap-8">
          {data.map((item, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg text-center bg-white">
              {/* Flag */}
              <img src={item.flags.png} alt={item.name.common} className="w-[100px] h-auto mx-auto mb-4" />
      
              {/* Common and Official Name */}
              <h2 className="text-lg font-semibold mb-2">{item.name.common}</h2>
              <p className="text-gray-700 italic mb-2">{item.name.official}</p>
      
              {/* Region and Population */}
              <p className="text-gray-500 mb-2">
                <strong>Region:</strong> {item.region}
              </p>
              <p className="text-gray-500 mb-2">
                <strong>Population:</strong> {item.population}
              </p>
      
              {/* Capital */}
              <p className="text-gray-500 mb-2">
                <strong>Capital:</strong> {item.capital ? item.capital.join(', ') : 'N/A'}
              </p>
      
              {/* Currency */}
              <p className="text-gray-500 mb-2">
                <strong>Currency:</strong> {item.currencies ? Object.values(item.currencies)[0].name : 'N/A'} ({item.currencies ? Object.values(item.currencies)[0].symbol : ''})
              </p>
      
              {/* Language */}
              <p className="text-gray-500 mb-2">
                <strong>Language:</strong> {item.languages ? Object.values(item.languages).join(', ') : 'N/A'}
              </p>
      
              {/* Timezone */}
              <p className="text-gray-500 mb-2">
                <strong>Timezone:</strong> {item.timezones ? item.timezones.join(', ') : 'N/A'}
              </p>
      
              {/* Map Links */}
              <div className="mt-4">
                <a href={item.maps.googleMaps} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Buttons for pagination */}
        <div className="mt-10 flex justify-between">
          <button onClick={prev} className="border bg-red-500 text-white text-sm px-6 py-2 rounded-lg shadow hover:bg-red-600">
            Previous
          </button>
          <button onClick={after} className="border bg-red-500 text-white text-sm px-6 py-2 rounded-lg shadow hover:bg-red-600">
            Next
          </button>
        </div>
      </div>
      

    )
}

export default CountryDetails
