import React from 'react'

import { getServerData, setServerData } from './axiosMethods'

const getData = () => {
  const saveGetData = (response) => {
    return response.data
  }
  getServerData(saveGetData)
}

const changeData = (data) => {
  const saveSetData = (data) => {
    // this.setState(data)
    console.log('TRUE')
  }
  setServerData(saveSetData, data)
}


export { getData, changeData }