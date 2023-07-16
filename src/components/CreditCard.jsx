import React from 'react'
import cardfront from '../assets/cardfront.svg'

const CreditCard = ({digit1,digit2,digit3,digit4,name,mm,yy}) => {
  return (
    <div className='card-front' >
       <div className='card-e{} dit'>
          <img src={cardfront} />
          <div className='card-digits'>
            <p>{digit1 ? digit1 : "0000" }</p>
            <p>{digit2 ? digit2 : "0000" }</p>
            <p>{digit3 ? digit3 : "0000" }</p>
            <p>{digit4 ? digit4 : "0000" }</p>
          </div>
          <div className='card-name' >
            <p>{name ? name : 'JANE APPLESEED'}</p>
            <p>{mm ? mm : '00'}/{yy ? yy : "00"}</p>
          </div>
       </div>
    </div>
  )
}

export default CreditCard