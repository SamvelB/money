import React from 'react'
import { connect } from 'react-redux'

import { mapStateToProps, mapDispatchToProps } from '../../../utils'
import HistoryItem from './HistoryItem'

class History extends React.Component {

  render() {
    const { history } = this.props
    const date = new Date();
    const day = date.getDate()
    const dayBefore = date.getDate() - 1

    console.log('history:', typeof history)

    return (
        <div className="history">
          <div className="history-title">
            Сегодня
          </div>
          { history.map((historyItem, index) =>
              day == historyItem.date.slice(0,2) &&
              <HistoryItem
                key={index}
                group={historyItem.group}
                groupName={historyItem.groupName}
                date={historyItem.date}
                sum={historyItem.sum}
                comment={historyItem.comment}
                author={historyItem.author}
              />
            )
          }
          <div className="history-title">
            Вчера
          </div>
          { history.map((historyItem, index) =>
                dayBefore == historyItem.date.slice(0,2) &&
                <HistoryItem
                  key={index}
                  group={historyItem.group}
                  groupName={historyItem.groupName}
                  date={historyItem.date}
                  sum={historyItem.sum}
                  comment={historyItem.comment}
                  author={historyItem.author}
                />
            )
          }
          <div className="history-title">
            Ранее
          </div>
          { history.map((historyItem, index) =>
                day != historyItem.date.slice(0,2) &&
                dayBefore != historyItem.date.slice(0,2) &&
                <HistoryItem
                  key={index}
                  group={historyItem.group}
                  groupName={historyItem.groupName}
                  date={historyItem.date}
                  sum={historyItem.sum}
                  comment={historyItem.comment}
                  author={historyItem.author}
                />
            )
          }
        </div>
    )
  }
}

export default History