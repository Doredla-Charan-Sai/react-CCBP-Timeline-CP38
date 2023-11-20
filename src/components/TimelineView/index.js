// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="bg-cont">
      <h1 className="head">
        MY JOURNEY OF
        <span className="main-head">CCBP 4.0</span>
      </h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        scrollable={{scrollbar: true}}
        theme={{
          secondary: 'white',
          cardBgColor: 'white',
          titleColor: '#0967d2',
        }}
      >
        {timelineItemsList.map(eachItem =>
          eachItem.categoryId === 'COURSE' ? (
            <CourseTimelineCard details={eachItem} />
          ) : (
            <ProjectTimelineCard details={eachItem} />
          ),
        )}
      </Chrono>
    </div>
  )
}
export default TimelineView
