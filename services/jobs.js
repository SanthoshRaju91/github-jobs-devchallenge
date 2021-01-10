import fetch from "./fetch";

export function constructJobsFilter() {}

export async function fetchJobs() {
  const response = await fetch("/jobs");
  return response.data;
}

export async function fetchJobsWithFilter() {}
