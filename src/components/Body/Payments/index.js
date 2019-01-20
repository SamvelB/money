import React from 'react'

import { getServerData } from '../../../data/axiosMethods'
import { changeData } from '../../../data'

import Payment from './Payment'

class Payments extends React.Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.getData()
  }

  getData() {
    const saveGetData = (response) => {
      this.setState({ data: response.data })
    }
    getServerData(saveGetData)
  }

  handleSubmit(event) {
    const { data } = this.props
    const { payments } = data
    const id = parseInt(event.currentTarget.id, 10)
    const currentPayment = payments.find(item => id === item.id)

    if(currentPayment.status){
      currentPayment.status = false
    } else {
      currentPayment.status = true
    }

    if(data.payments[id].name === currentPayment.name) {
      data.payments[id] = currentPayment
    } else {
      console.error('ОШИБКА: неверная структура данных payments')
    }

    changeData(data)
    event.preventDefault();
  }

  render() {
    const { payments, incomes } = this.props.data

    return (
        <div className="payments">
          <div className="payments-item income">
            <span className="payments-item__head">
              <span className="payments-item__name">
                <span>{incomes.name}</span>
              </span>
              <span className="payments-item__sum">
                {incomes.sum}
              </span>
              {}
            </span>
          </div>
          { payments != null && payments.map(payment =>
              <Payment
                  key={payment.id}
                  id={payment.id}
                  name={payment.name}
                  sum={payment.sum}
                  date={payment.date}
                  status={payment.status}
                  comments={payment.comments}
                  handleSubmit={this.handleSubmit}
              />
            )
          }
        </div>
    )
  }
}

export default Payments