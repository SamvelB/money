import React from 'react'

import Payment from './Payment'

class Payments extends React.Component {

  render() {
    const { payments } = this.props
    console.log('payments:', payments)

    return (
        <div className="payments">
          { payments != null && payments.map(payment =>
              <Payment
                  key={payment.id}
                  id={payment.id}
                  name={payment.name}
                  sum={payment.sum}
                  date={payment.date}
                  status={payment.status}
                  comments={payment.comments}
              />
            )
          }
        </div>
    )
  }
}

export default Payments