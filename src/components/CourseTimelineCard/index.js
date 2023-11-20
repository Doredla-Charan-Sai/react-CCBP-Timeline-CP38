// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, description, tagsList, duration} = details
  return (
    <div className="chrono-container">
      <div className="course-cont">
        <div className="title-duration-cont">
          <h1 className="title">{courseTitle}</h1>
          <div className="title-duration-cont">
            <AiFillClockCircle className="clock" />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <ul className="tags-list">
          {tagsList.map(eachTag => (
            <li key={eachTag.id} className="tag-name-cont">
              <p className="tag-name">{eachTag.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CourseTimelineCard
