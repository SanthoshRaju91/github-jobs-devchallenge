import Search from "../../components/Search";

export default function JobsList() {
  function handleSearchSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="jobs-list-container">
      <Search handleSearchSubmit={handleSearchSubmit} />
    </div>
  );
}
