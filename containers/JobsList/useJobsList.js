import { useEffect, useState } from "react";
import { fetchJobs } from "../../services/jobs";

export default function useJobsList() {
    const [ jobs, setJobs ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        fetchJobsNow()

        async function fetchJobsNow() {
            try {
                setIsLoading(true)
                const jobs = await fetchJobs()
                setJobs(jobs)
            } catch (err) {
                setJobs([])
            } finally {
                setIsLoading(false)
            }
        }
    }, [])

    return {
        jobs,
        isLoading
    }
}