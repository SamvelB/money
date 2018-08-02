import React from 'react'

const Payment = ({ id, name, sum, date, status, comments }) => (
  <div className={`payments-item ${status}`} id={id}>
    <div className="payments-item__head">
      <div className="payments-item__name">
        {name}
      </div>
      <div>
        <span className="payments-item__date">
          {date}
        </span>
        <span className="payments-item__sum">
          {sum}
        </span>
      </div>
    </div>

    <div className="payments-item__comments">
      {comments}
    </div>
  </div>
)

export default Payment