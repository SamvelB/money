import React from 'react'
import HistoryItem from './HistoryItem'

class History extends React.Component {

  render() {
    const { history, deletePay } = this.props
    const date = new Date();
    const day = date.getDate()
    const dayBefore = date.getDate() - 1

    return (
        <div className="history">
          <div className="history-title">
            Сегодня
          </div>
          { history.map(historyItem =>
              day == historyItem.date.slice(0,2) &&
              <HistoryItem
                key={historyItem.id}
                id={historyItem.id}
                group={historyItem.group}
                groupName={historyItem.groupName}
                date={historyItem.date}
                sum={historyItem.sum}
                comment={historyItem.comment}
                author={historyItem.author}
                deletePay={deletePay}
              />
            )
          }
          <div className="history-title">
            Вчера
          </div>
          { history.map(historyItem =>
                dayBefore == historyItem.date.slice(0,2) &&
                <HistoryItem
                  key={historyItem.id}
                  id={historyItem.id}
                  group={historyItem.group}
                  groupName={historyItem.groupName}
                  date={historyItem.date}
                  sum={historyItem.sum}
                  comment={historyItem.comment}
                  author={historyItem.author}
                  deletePay={deletePay}
                />
            )
          }
          <div className="history-title">
            Ранее
          </div>
          { history.map(historyItem =>
                day != historyItem.date.slice(0,2) &&
                dayBefore != historyItem.date.slice(0,2) &&
                <HistoryItem
                  key={historyItem.id}
                  id={historyItem.id}
                  group={historyItem.group}
                  groupName={historyItem.groupName}
                  date={historyItem.date}
                  sum={historyItem.sum}
                  comment={historyItem.comment}
                  author={historyItem.author}
                  deletePay={deletePay}
                />
            )
          }
        </div>
    )
  }
}

export default History