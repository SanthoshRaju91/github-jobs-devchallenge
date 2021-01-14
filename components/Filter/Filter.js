import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa'

export default function Filter({ handlePositionFilter, handleLocationSearchFilter, handlePredefinedLocationFilter }) {
    const inputLocationRef = React.createRef()

    function handleSubmit(event) {
        event.preventDefault()
        handleLocationSearchFilter(inputLocationRef.current.value)
    }
    return (
        <div className="filter-container">
            <div className="filter-container__positions my-8 px-2 flex space-x-2 items-center">
                <input id="fulltime" className="h-5 w-5 text-indigo-500 border border-gray-200 rounded" type="checkbox" onChange={handlePositionFilter} /> 
                <label htmlFor="fulltime" className="inline-block pl-2 tracking-normal text-gray-700 font-medium">Full time</label>
            </div>
            <div className="filter-container__location my-8">
                <h3 className="text-sm font-bold tracking-wide text-gray-300 uppercase">Location</h3>
                <div className="filter-container__location--search-form my-4 w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="relative flex px-4 space-x-4  bg-white rounded shadow flex-wrap items-stretch mb-3 h-12">
                            <FaGlobeAmericas className="text-gray-300 h-full" />
                            <input
                                className="h-full w-11/12 placeholder-gray-300 text-sm font-light text-gray-700 relative outline-none focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="City, state, zip code or country"
                                ref={inputLocationRef}
                            />
                        </div>                        
                    </form>
                </div>
                <div className="filter-container__location--predefined-selections mt-6">
                    <div className="flex flex-wrap items-center space-x-2 my-4">
                        <input className="h-4 w-4 border outline-none" id="londonSelection" type="radio" name="predefined-location" value="london" onChange={handlePredefinedLocationFilter} />
                        <label className="tracking-wide text-gray-600 font-medium" htmlFor="londonSelection">London</label>
                    </div>
                    <div className="flex flex-wrap items-center space-x-2 my-4">
                        <input className="h-4 w-4 border outline-none" id="amsterdamSelection" type="radio" name="predefined-location" value="amsterdam" onChange={handlePredefinedLocationFilter} />
                        <label className="tracking-wide text-gray-600 font-medium" htmlFor="amsterdamSelection">Amsterdam</label>
                    </div>
                    <div className="flex flex-wrap items-center space-x-2 my-4">
                        <input className="h-4 w-4 border outline-none" id="newyorkSelection" type="radio" name="predefined-location" value="new york" onChange={handlePredefinedLocationFilter} />
                        <label className="tracking-wide text-gray-600 font-medium" htmlFor="newyorkSelection">New York</label>
                    </div>
                    <div className="flex flex-wrap items-center space-x-2 my-4">
                        <input className="h-4 w-4 border outline-none" id="berlinSelection" type="radio" name="predefined-location" value="berlin" onChange={handlePredefinedLocationFilter} />
                        <label className="tracking-wide text-gray-600 font-medium" htmlFor="berlinSelection">Berlin</label>
                    </div>
                </div>
            </div>
        </div>
    )
}