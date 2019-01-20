import React from 'react'

const Payment = ({ id, name, sum, date, status, comments, handleSubmit }) => (
  <button className={`payments-item ${status}`} id={id} onClick={handleSubmit}>
    <span className="payments-item__head">
      <span className="payments-item__name">
        <span>{name}</span>
        <span className="payments-item__date">
          {`до ${date}-го числа`}
        </span>
      </span>
      <span className="payments-item__sum">
        {sum}
      </span>
    </span>
    <span className="payments-item__comments">
      {comments}
    </span>
  </button>
)

export default Payment