import React, { Component } from 'react'

import { getServerData, setServerData } from './data/axiosMethods'
import Spinner from './Spinner'
import Header from './components/Header'
import Footer from './components/Footer'
import Blocks from './components/Body/Blocks'
import Edit from './components/Body/Edit'
import History from './components/Body/History'

class App extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      selectedId: undefined,
      isOpenedHistoryScreen: false,
      isOpenedEditScreen: false,
    }

    this.getData = this.getData.bind(this)
    this.openEditScreen = this.openEditScreen.bind(this)
    this.toHome = this.toHome.bind(this)
    this.toHistory = this.toHistory.bind(this)
    this.openEdit = this.openEdit.bind(this)
    this.closeEditScreen = this.closeEditScreen.bind(this)
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

  changeData(data) {
    const saveSetData = (data) => {
      this.setState(data)
      console.log('data from server:', data)
    }
    setServerData(saveSetData, data)
  }


  openEditScreen(groupId) {
    this.setState({ isOpenedEditScreen: true, selectedId: groupId })
  }

  closeEditScreen() {
    this.setState({ isOpenedEditScreen: false, selectedId: undefined })
  }

  toHome() {
    this.setState({ isOpenedEditScreen: false, isOpenedHistoryScreen: false })
    this.closeEditScreen()
  }

  toHistory() {
    this.setState({ isOpenedEditScreen: false, isOpenedHistoryScreen: true })
    this.closeEditScreen()
  }

  openEdit(event){
    const groupId = parseInt(event.currentTarget.id, 10)
    this.openEditScreen(groupId)
  }


  render () {
    const { data, selectedId, isOpenedEditScreen, isOpenedHistoryScreen } = this.state

    return (
        <div className="web">
          { data == null
            ? <Spinner />
            : <div className="web-wrapper">
                <Header currentDay={data != null && data.currentDay} openEditScreen={this.openEditScreen} />
                <div className="wrapper">
                  {
                    !isOpenedEditScreen &&
                    !isOpenedHistoryScreen &&
                    <Blocks items={data != null && data.items} openEdit={this.openEdit} />
                  }
                  {
                    isOpenedEditScreen &&
                    <Edit
                        data={data != null && data}
                        selectedId={selectedId}
                        closeEditScreen={this.closeEditScreen}
                    />
                  }
                  {
                    isOpenedHistoryScreen &&
                    <History history={data != null && data.history} />
                  }
                </div>
                <Footer toHome={this.toHome} toHistory={this.toHistory} />
              </div>
          }
        </div>
    )
  }
}

export default App
