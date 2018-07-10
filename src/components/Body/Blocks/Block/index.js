import React from 'react'

const Block = ({ id, name, all, spent, left, openEdit }) => (
    <div className="block">
      <button className="block-button" id={id} onClick={openEdit}>
        <div className={`block-icon block-icon--${id}`} />
        <div className="block-info">
          <div className="block-info-header">
            <div className="block-info-header-title">{name}</div>
            <div className="block-info-header-all">{all}</div>
          </div>
          <div className="block-info-money">
            <span className="block-info-money-bbb">{left}</span>
            <span className="block-info-money-aaa">{spent === 0 ? '' : '-'}{spent}</span>
          </div>
        </div>
      </button>
    </div>
)

export default Block