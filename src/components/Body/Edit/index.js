import React from 'react'

import { getDateYesterday, getDate } from '../../../utils/date'
import { CURRENT_PRERIOD_GROUP } from '../../../utils/constants'
import { changeData } from '../../../data'


class Edit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeToday: true,
      date: null,   // вчера или сегодня
      value: '',
      comment: '',
    }

    this.setToday = this.setToday.bind(this)
    this.setYesterday = this.setYesterday.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeComment = this.handleChangeComment.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentWillMount() {
    this.setToday()
  }

  setToday() {
    this.setState({ date: getDate(), activeToday: true })
  }

  setYesterday() {
    this.setState({ date: getDateYesterday(), activeToday: false })
  }

  handleChange(event) {
    const id = event.target.id
    this.setState(prevState => ({
      value: prevState.value + id
    }))
  }

  handleChangeComment(event) {
    const inputValue = event.target.value
    this.setState({ comment: inputValue })
  }

  handleDelete(){
    const sum = this.state.value
    this.setState({ value: sum.substr(0, sum.length - 1) })
  }

  handleSubmit(event) {
    const { data, selectedId, closeEditScreen} = this.props
    const { currentDay, items, history } = data
    const currentItem = items.find(item => item.id === selectedId)
    const { value, comment } = this.state

    if(value === '' || value == null) {
      closeEditScreen()
      return
    }

    // new items
    currentItem.spent = currentItem.spent + parseInt(value, 10)
    currentItem.left = currentItem.all - currentItem.spent
    items[selectedId] = currentItem

    // in history
    let historyItem = {}
    historyItem.id = new Date().getTime()
    historyItem.group = selectedId
    historyItem.groupName = currentItem.name
    historyItem.sum = parseInt(value, 10)
    historyItem.comment = comment
    historyItem.author = 'admin'
    if(this.state.activeToday) {
      historyItem.date = getDate()
    } else {
      historyItem.date = getDateYesterday()
    }
    history.push(historyItem)

    // refresh data
    data.currentDay = currentDay
    data.items = items
    data.history = history
    changeData(data)
    closeEditScreen()
    event.preventDefault();
  }

  render() {
    const { data, selectedId} = this.props
    const { currentDay } = data
    const { items } = data
    const { activeToday } = this.state

    let currentItem = null
    if(selectedId === CURRENT_PRERIOD_GROUP) {
      currentItem = currentDay
    } else {
      currentItem = items.find(item => item.id === selectedId)
    }

    return (
        <div className="add">
          <div className="add-title">
            {currentItem != null && currentItem.name}
          </div>
          <div className="add-sum">
            <input className="add-sum-input" type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className="add-info">
            <input className="add-info-input" type="text" value={this.state.comment} onChange={this.handleChangeComment} />
          </div>
          <div className="add-day">
            <button className={`add-day-btn ${!activeToday}`} onClick={this.setYesterday}>Вчера</button>
            <button className={`add-day-btn ${activeToday}`} onClick={this.setToday}>Сегодня</button>
          </div>
          <div className="add-calculator">
            <button id="1" className="add-calculator-btn" onClick={this.handleChange}>1</button>
            <button id="2" className="add-calculator-btn" onClick={this.handleChange}>2</button>
            <button id="3" className="add-calculator-btn" onClick={this.handleChange}>3</button>
          </div>
          <div className="add-calculator">
            <button id="4" className="add-calculator-btn" onClick={this.handleChange}>4</button>
            <button id="5" className="add-calculator-btn" onClick={this.handleChange}>5</button>
            <button id="6" className="add-calculator-btn" onClick={this.handleChange}>6</button>
          </div>
          <div className="add-calculator">
            <button id="7" className="add-calculator-btn" onClick={this.handleChange}>7</button>
            <button id="8" className="add-calculator-btn" onClick={this.handleChange}>8</button>
            <button id="9" className="add-calculator-btn" onClick={this.handleChange}>9</button>
          </div>
          <div className="add-calculator">
            <button id="del" className="add-calculator-btn delete" onClick={this.handleDelete}>⮜</button>
            <button id="0" className="add-calculator-btn" onClick={this.handleChange}>0</button>
            <button id="ok" className="add-calculator-btn ok" onClick={this.handleSubmit}>OK</button>
          </div>
        </div>
    )
  }
}

export default Edit