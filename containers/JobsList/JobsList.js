import Filter from "../../components/Filter";
import Search from "../../components/Search";

export default function JobsList() {
  function handleSearchSubmit(event) {
    event.preventDefault();
  }

  function handlePositionFilter(event) {
    console.log(event.target.checked)
  }

  function handleLocationSearchFilter(event) {
    event.preventDefault()
  }

  function handlePredefinedLocationFilter(event) {
    console.log(event.target.value)
  }

  return (
    <div className="jobs-list-container">
      <Search handleSearchSubmit={handleSearchSubmit} />
      <Filter
        handlePositionFilter={handlePositionFilter}
        handleLocationSearchFilter={handleLocationSearchFilter}
        handlePredefinedLocationFilter={handlePredefinedLocationFilter}
      />
    </div>
  );
}
