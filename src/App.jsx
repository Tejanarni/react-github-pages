import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src='https://expocontech.com/images/expocon_logo.png'
          className='App-logo'
          alt='logo'
        />
        <p>Deploy to GitHub Pages</p>
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App
