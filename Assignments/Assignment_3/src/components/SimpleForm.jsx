import { useState } from 'react'

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      console.log(inputValue)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full border-2 border-indigo-200 p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition"
          placeholder="Enter text..."
        />
      </div>
      <button 
        type="submit"
        disabled={!inputValue.trim()}
        className="w-full bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition duration-300 disabled:opacity-50"
      >
        Submit
      </button>
      {submitted && (
        <div className="text-green-500 text-center">Successfully submitted!</div>
      )}
    </form>
  )
}

export default SimpleForm
