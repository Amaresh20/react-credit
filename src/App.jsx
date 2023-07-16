import React, { useState } from 'react'
import sidebar from './assets/sidebar.svg'
import cardback from './assets/cardback.svg'
import './App.css'
import CreditCard from './components/CreditCard'

const card = {
  name:"",
  cardNumber:"",
  mm:"",
  yy:"",
  cvc:""
}

const ErrorObject = {
    nameError : "",
    cardNumberError : "",
    mmError : "",
    yyError : "",
    cvcError : "",
  }

const App = () => {

  const [cardDetail,setCardDetail] = useState(card)
  const [isSubmitted,setIsSubmitted] = useState(false)
  const [errorState,setErrorState] = useState(ErrorObject);

  const handleChange = (e) => {
     const { name,value } = e.target
     setCardDetail({...cardDetail,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!cardDetail.name.length) {
      errorState.nameError = "This is Required !!"
    }
    if(!cardDetail.cardNumber.length) {
      errorState.cardNumberError = "This is Required !!"
    }
    if(!cardDetail.mm.length) {
      errorState.mmError = "This is Required !!"
    }
    if(!cardDetail.yy.length) {
      errorState.yyError = "This is Required !!"
    }
    if(isNaN(Number(cardDetail.cvc))){
      errorState.cvcError = "cvc should be numeric"
    }
    setIsSubmitted(true);
  }


  return (
    <div className='app'>
      <div className='side'>
        { isSubmitted ? <CreditCard name={cardDetail.name} 
          digit1={cardDetail.cardNumber.substring(0,4)}
          digit2={cardDetail.cardNumber.substring(4,8)}
          digit3={cardDetail.cardNumber.substring(8,12)}
          digit4={cardDetail.cardNumber.substring(12,16)}
          mm={cardDetail.mm}
          yy={cardDetail.yy}
         /> : < CreditCard /> }
        <img className='side-img' src={sidebar} />
        <img className='card-back' src={cardback} />
      </div>
      <div className='main' >
          <div>
            <form onSubmit={handleSubmit} action="">
              <label htmlFor="">CARDHOLDER NAME</label>
              <input name='name' onChange={ handleChange } placeholder='e.g. Jane Appleseed' type="text" />
              <p className='error' >{errorState.nameError? errorState.nameError : ""}</p>
              <label htmlFor="">CARD NUMBER </label>
              <input maxLength={16} name='cardNumber' onChange={handleChange} placeholder='e.g. 1234 5678 9123 0000' type="text" />
              <p className='error' >{errorState.cardNumberError? errorState.cardNumberError : ""}</p>
              <div className='wrapper' >
                <div className='container'>
                  <label>EXP DATE (MM/YY)</label>
                  <div className='mmyy'>
                    <div>
                    <input name='mm' onChange={ handleChange } placeholder='MM' />
                    <p className='error' >{errorState.mmError? errorState.mmError : ""}</p>
                    </div>
                   <div>
                   <input name='yy' onChange={ handleChange } placeholder='YY' />
                    <p className='error' >{errorState.yyError? errorState.yyError : ""}</p>
                   </div>
                  </div>
                </div>
                <div>
                <label>CVC</label>
                  <input name='cvc' maxLength={3} onChange={ handleChange } type='text' placeholder='e.g 124' />
                  <p className='error' >{errorState.cvcError? errorState.cvcError : ""}</p>
                </div>
              </div>
              <button>Confirm</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default App