import React from 'react'

import Block from './Block'

class Blocks extends React.Component {

  render() {
    const { items, openEdit } = this.props

    return (
        <div className="blocks">
          { items.map(item =>
              <Block
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  all={item.all}
                  spent={item.spent}
                  left={item.left}
                  openEdit={openEdit}
              />
            )
          }
        </div>
    )
  }
}

export default Blocks