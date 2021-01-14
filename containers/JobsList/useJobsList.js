import { useEffect, useState } from "react";
import { fetchJobs } from "../../services/jobs";

export default function useJobsList() {
    const [ jobs, setJobs ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isFullTime, setIsFullTime] = useState(false)
    const [ predefinedLocation, setPredefinedLocation ] = useState('')
    const [ searchLocation, setSearchLocation ] = useState('')
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        const filterQuery = constructFilterQuery()
        fetchJobsNow(filterQuery)
    }, [isFullTime, predefinedLocation, searchLocation, search])

    async function fetchJobsNow(filter = '') {
        try {
            setIsLoading(true)
            const jobs = await fetchJobs(filter)
            setJobs(jobs)
        } catch (err) {
            setJobs([])
        } finally {
            setIsLoading(false)
        }
    }

    function constructFilterQuery() {
        const filters = []
        if (isFullTime) {
            filters.push(`full_time=${isFullTime}`)
        }
        if (predefinedLocation) {
            filters.push(`location=${predefinedLocation}`)
        }
        if (searchLocation) {
            filters.push(`location=${searchLocation}`)
        }
        if (search) {
            filters.push(`description=${search}`)
        }
        let filterQuery = ''
        filters.forEach((filter, index) => {
            const filterQuerySymbol = (index === 0) ? '?' : '&'
            filterQuery += `${filterQuerySymbol}${filter}`
        })
        return filterQuery
    }

    function handleFullTimeChange(value) {
        setIsFullTime(value)
    }

    function handlePredefinedLocationChange(value) {
        setPredefinedLocation(value)
    }

    function handleSearchLocationChange(value) {
        setSearchLocation(value)
    }

    function handleSearchChange(value) {
        setSearch(value)
    }

    return {
        jobs,
        isLoading,
        handleFullTimeChange,
        handlePredefinedLocationChange,
        handleSearchLocationChange,
        handleSearchChange
    }
}