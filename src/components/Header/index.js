import React from 'react'

import { getDayNumber, getMonthText } from '../../utils/date'

class Header extends React.Component {


  render() {
    const { currentDay, openEditScreen } = this.props
    const day = getDayNumber()
    const monthText = getMonthText()

    return (
        <header className="header">
          <div className="money-info">
            <div className="money-info-day">
              <div>
                <span className="money-info-day-number">{day}</span>
                <span className="money-info-day-simbol">й</span>
              </div>
              <div className="money-info-day-day">
                день
              </div>
            </div>
            <button className="money-info-sum" onClick={openEditScreen}>
              {currentDay.left != null && currentDay.left}
            </button>
            <div className="money-info-period">
              <div className="money-info-period-date">
                {currentDay.date != null && currentDay.date[0]}-{currentDay.date != null && currentDay.date[1]}
              </div>
              <div className="money-info-period-month">
                {monthText}
              </div>
            </div>
          </div>
        </header>
    )
  }
}

export default Header