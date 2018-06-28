import React from 'react'

class Footer extends React.Component {

  render() {
    const { toHome, toHistory } = this.props

    return (
      <footer className="footer">
        <button className="footer-button footer-button-add" onClick={toHome}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
            <g>
              <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26   S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z" fill="#56789a"/>
              <path d="M38.5,25H27V14c0-0.553-0.448-1-1-1s-1,0.447-1,1v11H13.5c-0.552,0-1,0.447-1,1s0.448,1,1,1H25v12c0,0.553,0.448,1,1,1   s1-0.447,1-1V27h11.5c0.552,0,1-0.447,1-1S39.052,25,38.5,25z" fill="#56789a"/>
            </g>
          </svg>
        </button>
        <button className="footer-button footer-button-home" onClick={toHome}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
            <g>
              <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" fill="#56789a"/>
              <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z M30,36c-3.309,0-6-2.691-6-6s2.691-6,6-6   s6,2.691,6,6S33.309,36,30,36z" fill="#56789a"/>
              <path d="M30,16c-7.72,0-14,6.28-14,14s6.28,14,14,14s14-6.28,14-14S37.72,16,30,16z M30,42c-6.617,0-12-5.383-12-12s5.383-12,12-12   s12,5.383,12,12S36.617,42,30,42z" fill="#56789a"/>
            </g>
          </svg>
        </button>
        <button className="footer-button footer-button-history" onClick={toHistory}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
            <g>
              <path d="M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M28,54C13.663,54,2,42.336,2,28   S13.663,2,28,2s26,11.664,26,26S42.337,54,28,54z" fill="#56789a"/>
              <path d="M40,16H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,16,40,16z" fill="#56789a"/>
              <path d="M40,27H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,27,40,27z" fill="#56789a"/>
              <path d="M40,38H16c-0.553,0-1,0.448-1,1s0.447,1,1,1h24c0.553,0,1-0.448,1-1S40.553,38,40,38z" fill="#56789a"/>
            </g>
          </svg>
        </button>
      </footer>
    )
  }
}

export default Footer