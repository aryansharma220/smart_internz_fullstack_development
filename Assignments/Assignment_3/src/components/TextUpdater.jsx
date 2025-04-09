import { useState } from 'react'

const TextUpdater = () => {
  const [text, setText] = useState('')

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border-2 border-indigo-200 p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition"
          placeholder="Type something..."
        />
        <span className="absolute right-2 bottom-2 text-sm text-gray-400">
          {text.length} characters
        </span>
      </div>
      {text && (
        <p className="p-4 bg-indigo-50 rounded-lg text-indigo-600">
          Preview: {text}
        </p>
      )}
    </div>
  )
}

export default TextUpdater
