export default function Search({ handleSearchSubmit }) {
  return (
    <div className="search-container mt-8 h-32 relative">
      <div className="search-container__bg absolute">
        <img className="object-cover h-32 w-full rounded-md" src="backgroundImg.png" alt="Search background"></img>
      </div>
      <div className="search-container__form w-11/12 left-4 top-10 absolute z-20">
        <form onSubmit={handleSearchSubmit}>
            <div className="p-1 w-full bg-white rounded-sm shadow-md flex items-center">
                <span className="inline-block pl-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5H16V19H4V5H6V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H12C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V5ZM17 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V17C20 17.5304 19.7893 18.0391 19.4142 18.4142C19.0391 18.7893 18.5304 19 18 19H17V5ZM3 5V19H2C1.46957 19 0.960859 18.7893 0.585786 18.4142C0.210714 18.0391 0 17.5304 0 17V7C0 5.9 0.9 5 2 5H3ZM8 4V5H12V4H8Z" fill="#B9BDCF"/>
                </svg>
                </span>
                <input
                    className="w-10/12 h-10 pl-2 text-sm placeholder-gray-400 tracking-wide font-extralight focus:none focus:border-blue-400" 
                    placeholder="Title, companies, expertise..." 
                />
                <button className="px-5 py-3 bg-blue-500 rounded-md text-white text-sm font-light">
                    Search
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}
