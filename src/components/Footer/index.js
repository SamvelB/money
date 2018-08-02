import React from 'react'

class Footer extends React.Component {

  render() {
    const { toHome, toHistory, toPayments, isOpenedEditScreen, isOpenedHistoryScreen, isOpenedPaymentsScreen } = this.props
    let activeMainScreen = !isOpenedEditScreen && !isOpenedHistoryScreen && !isOpenedPaymentsScreen

    return (
      <footer className="footer">
        <button className={`footer-button footer-button-add ${isOpenedPaymentsScreen}`} onClick={toPayments}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57 57">
            <path d="M22.66 0H3.34A3.343 3.343 0 0 0 0 3.34v19.32A3.343 3.343 0 0 0 3.34 26h19.32A3.343 3.343 0 0 0 26 22.66V3.34A3.343 3.343 0 0 0 22.66 0zM33.34 26h19.32A3.343 3.343 0 0 0 56 22.66V3.34A3.343 3.343 0 0 0 52.66 0H33.34A3.343 3.343 0 0 0 30 3.34v19.32A3.343 3.343 0 0 0 33.34 26zM22.66 30H3.34A3.343 3.343 0 0 0 0 33.34v19.32A3.343 3.343 0 0 0 3.34 56h19.32A3.343 3.343 0 0 0 26 52.66V33.34A3.343 3.343 0 0 0 22.66 30zM55 41H45V31a2 2 0 0 0-4 0v10H31a2 2 0 0 0 0 4h10v10a2 2 0 0 0 4 0V45h10a2 2 0 0 0 0-4z"/>
          </svg>
        </button>
        <button className={`footer-button footer-button-home ${activeMainScreen}`} onClick={toHome}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
            <path d="M28 0C12.561 0 0 12.561 0 28s12.561 28 28 28 28-12.561 28-28S43.439 0 28 0zM15 15h26a1 1 0 1 1 0 2H15a1 1 0 1 1 0-2zm26 26H15a1 1 0 1 1 0-2h26a1 1 0 1 1 0 2zm4-8H11a1 1 0 1 1 0-2h34a1 1 0 1 1 0 2zm0-8H11a1 1 0 1 1 0-2h34a1 1 0 1 1 0 2z"/>
          </svg>
        </button>
        <button className={`footer-button footer-button-history ${isOpenedHistoryScreen}`} onClick={toHistory}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.201 58.201">
            <path d="M31.707 33.07a81.522 81.522 0 0 1-5.22 0c-7.341-.201-13.191-1.238-17.403-2.717C7.104 29.685 5.409 28.899 4.1 28v9.4c2.846 2.971 12.394 5.711 25 5.711s22.154-2.74 25-5.711V28c-1.318.905-3.028 1.697-5.025 2.367-4.21 1.472-10.048 2.503-17.368 2.703z"/>
            <path d="M4.1 14.889v9.4c2.638 2.754 11.033 5.31 22.286 5.668.115.004.233.005.349.008.326.009.651.018.982.023a79.019 79.019 0 0 0 2.766.001c.33-.005.656-.014.982-.023l.349-.008c11.253-.359 19.648-2.915 22.286-5.668v-9.401C49.233 18.232 38.944 20 29.1 20s-20.132-1.768-25-5.111zM53.965 8.542C52.843 4.241 44.215 0 29.1 0 14.023 0 5.404 4.22 4.247 8.51A.97.97 0 0 0 4.1 9v2.306C6.937 14.267 16.417 17 29.1 17s22.164-2.733 25-5.694V9a.92.92 0 0 0-.135-.458zM4.1 41v8.201a.94.94 0 0 0 .117.451c1.181 4.895 11.747 8.549 24.883 8.549 13.106 0 23.655-3.639 24.875-8.516a.993.993 0 0 0 .125-.484v-8.199c-4.135 2.911-12.655 5.199-25 5.199-12.346 0-20.866-2.29-25-5.201z"/>
          </svg>
        </button>
      </footer>
    )
  }
}

export default Footer