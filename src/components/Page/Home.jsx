import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ input, page, setPage }) => {
    const [data, setData] = useState([]);

    // console.log("input",input)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = input.length === 0
                    ? `https://restcountries.com/v3.1/all`
                    : `https://restcountries.com/v3.1/name/${input}`;


                const response = await fetch(url);
                const countryData = await response.json();
                setData(countryData);
            } catch (error) {
                console.error('Error fetching data:');
            }
        };

        fetchData();
    }, [input]);

    const lastPage = page * 12;
    // console.log("lastPage",lastPage)
    const firstPage = (page - 1) * 12;
    // console.log("firstPage",firstPage)
    const totalPage = Math.ceil(data.length / 12);
    
    const paginatedData = data.slice(firstPage, lastPage);




    return (
        <div className='w-[80%] mx-auto py-12'>
        {/* Page Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Page {page}</h2>
      
        {/* Input Field to Manually Change Pages */}
        <div className='flex justify-center items-center flex-col'>
          <input
            type="number"
            placeholder={`Enter a value between 1 to ${totalPage}`}
            onChange={(e) => {
              const value = e.target.value;
      
              if (value >= 1 && value <= totalPage) {
                setPage(value);
              } else if (value < 1) {
                setPage(1);
              } else if (value > totalPage) {
                setPage(totalPage);
              }
            }}
            min={1}
            max={totalPage}
            className="border border-gray-300 rounded-lg p-2 text-center w-[250px] mb-6 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      
        {/* Display Country Data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {
            paginatedData.length > 0
              ? paginatedData.map((item, index) => (
                  <div key={index} className="border rounded-lg p-6 shadow-lg bg-white hover:bg-gray-50 transition duration-300">
                    {/* Country Flag and Link */}
                    <Link to={`/country/${item.name.common}`} className="block text-center">
                      <img src={item.flags.png} className='w-[100px] h-auto mx-auto mb-4' alt={`${item.name.common} flag`} />
                    </Link>
                    {/* Country Name */}
                    <h2 className="text-lg font-semibold text-gray-800 text-center">{item.name.common}</h2>
                  </div>
                ))
              : <p className="text-center col-span-full text-gray-500">No countries found.</p>
          }
        </div>
      
        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-4 mt-10">
          <button
            onClick={() => { setPage(page > 1 ? page - 1 : 1) }}
            className="border border-gray-300 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
            disabled={page === 1}
          >
            Prev Page
          </button>
          <button
            onClick={() => { setPage(page + 1) }}
            className="border border-gray-300 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
            disabled={paginatedData.length < 12}
          >
            Next Page
          </button>
        </div>
      </div>
      
    );
};

export default Home;
