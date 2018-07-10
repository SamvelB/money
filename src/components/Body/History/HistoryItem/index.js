import React from 'react'

const HistoryItem = ({ id, group, groupName, date, sum, comment, author, deletePay }) => (
    <div className="history-item">
      <div className="history-button">
        <div className={`history-icon history-icon--${group}`} />
        <div className="history-info">
          <div className="history-info-header">
            <div className="history-info-header-title">{groupName}</div>
            <button id={id} className="history-info-header-all" onClick={deletePay}>
              {sum === 0 ? '' : '-'}{sum} ₽
            </button>
          </div>
          <div className="history-info-money">
            {comment}
          </div>
        </div>
      </div>
    </div>
)

export default HistoryItem