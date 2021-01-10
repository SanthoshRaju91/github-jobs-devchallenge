import { FaGlobeAmericas, FaRegClock } from 'react-icons/fa'
import moment from 'moment'

export default function JobCard({
    companyLogo,
    companyName,
    jobTitle,
    jobPosition,
    jobLocation,
    jobPostedOn
}) {

    function getFormattedJobPostedOn(postedOn) {
        return moment(postedOn, '').fromNow()
    }

    return (
        <div className="job-card-container my-6">
            <div className=" bg-white shadow-md rounded px-4 py-4 flex flex-nowrap space-x-4">
                <div className="job-card-container__company-image w-4/12">
                    <img className="w-20 h-24 rounded-md shadow-sm object-contain" src={companyLogo} alt="Company" />
                </div>
                <div className="job-card-container__company-info w-full">
                    <h4 className="text-sm font-semibold text-gray-900">{companyName}</h4>
                    <h3 className="my-2 text-lg text-gray-700 font-light">{jobTitle}</h3>
                    <div className="my-2 mb-6 px-2 py-1 border inline-block text-sm rounded-lg border-gray-700">
                        {jobPosition}
                    </div>
                    <div className="flex flex-wrap w-full">
                        <div className="location w-1/2 flex flex-nowrap space-x-2 items-center">
                          <FaGlobeAmericas className="text-gray-400" />
                          <span className="text-gray-400 text-sm">{jobLocation}</span>
                        </div>
                        <div className="posted w-1/2 flex flex-wrap space-x-2 items-center">
                           <FaRegClock className="text-gray-400" />
                           <span className="text-gray-400 text-sm">{getFormattedJobPostedOn(jobPostedOn)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}