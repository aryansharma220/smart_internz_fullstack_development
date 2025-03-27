const UserCard = ({ name, email, avatar }) => {
  return (
    <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 hover:shadow-lg transition duration-300">
      <div className="flex items-center space-x-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-16 h-16 rounded-full border-2 border-indigo-200"
        />
        <div>
          <h2 className="text-xl font-bold text-indigo-600">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard
