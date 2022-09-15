import axios from 'axios'

const getServerData = (saveGetData) => {
	axios
		.get(`http://0.0.0.0:5000/get-data`)
		.then(response => {
			saveGetData(response)
		})
	}

const setServerData = (saveSetData, data) => {
	axios
		.post(`http://0.0.0.0:5000/set-data`, data)
		.then(response => {
			console.log('response status:' + response.status)
			saveSetData(response.data)
		})
	}

export { getServerData, setServerData }
