import Filter from "../../components/Filter";
import JobCard from "../../components/JobCard";
import Search from "../../components/Search";
import useJobsList from "./useJobsList";

export default function JobsList() {
  const {
    isLoading,
    jobs = [],
    handleFullTimeChange,
    handleSearchChange,
    handleSearchLocationChange,
    handlePredefinedLocationChange
  } = useJobsList()

  function handleSearchSubmit(value) {
    handleSearchChange(value)
  }

  function handlePositionFilter(event) {
    handleFullTimeChange(event.target.checked)
  }

  function handleLocationSearchFilter(value) {
    handleSearchLocationChange(value)
  }

  function handlePredefinedLocationFilter(event) {
    handlePredefinedLocationChange(event.target.value)
  }

  return (
    <div className="jobs-list-container">
      <Search handleSearchSubmit={handleSearchSubmit} />
      <Filter
        handlePositionFilter={handlePositionFilter}
        handleLocationSearchFilter={handleLocationSearchFilter}
        handlePredefinedLocationFilter={handlePredefinedLocationFilter}
      />
      {isLoading && (
        <h3>Loading...</h3>
      )}
      {!isLoading && jobs.length && jobs.map(job => (
          <JobCard
            key={job.id}
            companyLogo={job.company_logo}
            companyName={job.company}
            jobLocation={job.location}
            jobPosition={job.type}
            jobPostedOn={job.created_at}
            jobTitle={job.title}
          />
        ))
      }
    </div>
  );
}
