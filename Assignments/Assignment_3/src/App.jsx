import TextUpdater from './components/TextUpdater'
import SimpleForm from './components/SimpleForm'
import UserCard from './components/UserCard'
import Button from './components/Button'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">React Components Demo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-indigo-600">1. Text Updater</h2>
            <TextUpdater />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-indigo-600">2. Simple Form</h2>
            <SimpleForm />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-indigo-600">3. User Card</h2>
            <UserCard name="John Doe" email="john@example.com" avatar="https://i.pravatar.cc/100" />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-indigo-600">4. Button Component</h2>
            <Button />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-indigo-600">5. Login Form</h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
