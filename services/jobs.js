import fetch from "./fetch";

export function constructJobsFilter() {}

export async function fetchJobs(query) {
  const response = await fetch(`/jobs${query}`);
  return response.data;
}

export async function fetchJobsWithFilter() {}
