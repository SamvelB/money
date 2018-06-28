import React from 'react'

const HistoryItem = ({ group, groupName, date, sum, comment, author }) => (
    <div className="history-item">
      <button className="history-button">
        <div className={`history-icon history-icon--${group}`} />
        <div className="history-info">
          <div className="history-info-header">
            <div className="history-info-header-title">{groupName}</div>
            <div className="history-info-header-all">-{sum} ₽</div>
          </div>
          <div className="history-info-money">
            {comment}
          </div>
        </div>
      </button>
    </div>
)

export default HistoryItem