import { useState } from 'react'
import './App.css'

function App() {
  const [toSubscribe, setToSubscribe] = useState('');
  const text = toSubscribe ? 'Suscrito' : 'Suscribete';
  
  const handleClick = () => {
    setToSubscribe(!toSubscribe)
  }

  return (
    <>
      <div className="content">
        <input type="email" placeholder="What's your email?" className='campo' />
        <button className='btn' onClick={handleClick}>{text}</button>
      </div>
    </>
  )
}

export default App
