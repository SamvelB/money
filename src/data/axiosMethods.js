import React from 'react'
import axios from 'axios'

const getServerData = (saveGetData) => {
	axios
		.get(`http://appast.ru/money/back/get.php`)
		.then(response => {
			saveGetData(response)
		})
	}

const setServerData = (saveSetData, data) => {
	axios
		.post(`http://appast.ru/money/back/set.php`, data)
		.then(response => {
			console.log('response status:' + response.status)
			saveSetData(response.data)
		})
	}

export { getServerData, setServerData }
