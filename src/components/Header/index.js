import React from 'react'
import * as moment from 'moment'

import { CURRENT_PRERIOD_GROUP } from '../../utils/constants'

const mmnt = moment().locale('ru')
const day = parseInt(mmnt.format('D'), 10)
const month = mmnt.format('MMMM')
const daysInCurrentMonth = parseInt(mmnt.daysInMonth(), 10)
const dayNumber = day % 2 === 0 ? 2 : 1

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.getPeriod = this.getPeriod.bind(this)
    this.getLeftSumForPeriod = this.getLeftSumForPeriod.bind(this)
    this.getDayFromBeginningPeriod = this.getDayFromBeginningPeriod.bind(this)
    this.getLimitMoney = this.getLimitMoney.bind(this)
  }

  getLeftSumForPeriod(items) {
    const dayFromBeginningPeriod = this.getDayFromBeginningPeriod()
    let limitMoney = this.getLimitMoney(dayFromBeginningPeriod)
    const leftMoneyForFood = items[0].left
    return  leftMoneyForFood - limitMoney
  }

  getDayFromBeginningPeriod() {
    if(day >= 5) {
      return day - 4
    } else {
      if(daysInCurrentMonth === 30) {
        const daysInCurrentLastMonth = 31
        return daysInCurrentLastMonth - 5 + day
      } else if(daysInCurrentMonth === 31) {
        const daysInCurrentLastMonth = 30
        return daysInCurrentLastMonth - 5 + day
      }
      else if(daysInCurrentMonth === 29 || daysInCurrentMonth === 28) {
        const daysInCurrentLastMonth = 31
        return daysInCurrentLastMonth - 5 + day
      }
    }
  }

  getLimitMoney(dayFromBeginningPeriod) {
    let preLimit = (31 - dayFromBeginningPeriod) * 1000
    if(dayNumber === 1) {
      return preLimit + 1000
    } else {
      return preLimit
    }
  }

  getPeriod(){
    if(dayNumber === 1) {
      if(day === daysInCurrentMonth) {
        return `${day} - 1`
      } else {
        return `${day} - ${day + 1}`
      }
    } else {
      return `${day - 1} - ${day}`
    }
  }

  render() {
    const { data } = this.props
    const { items } = data

    const period = this.getPeriod()
    const leftSumForPeriod = this.getLeftSumForPeriod(items)


    return (
        <header className="header">
          <div className="money-info">
            <div className="money-info-day">
              <div>
                <span className="money-info-day-number">{dayNumber}</span>
                <span className="money-info-day-simbol">й</span>
              </div>
              <div className="money-info-day-day">
                день
              </div>
            </div>
            <button id={CURRENT_PRERIOD_GROUP} className="money-info-sum">
              {leftSumForPeriod}
            </button>
            <div className="money-info-period">
              <div className="money-info-period-date">
                {period}
              </div>
              <div className="money-info-period-month">
                {month}
              </div>
            </div>
          </div>
        </header>
    )
  }
}

export default Header