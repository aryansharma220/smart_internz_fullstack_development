import { useState } from 'react'

const Button = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    console.log("Button clicked!")
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="relative bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg transform transition duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : 'Click Me'}
    </button>
  )
}

export default Button
