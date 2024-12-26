import { useState } from 'react'
import Table from '../../components/Table'

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'Admin',
      organization: 'Tech Corp',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'User',
      organization: 'Design Inc',
    },
    // Add more sample data as needed
  ])

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log('Edit user with id:', id)
  }

  const handleDelete = (id: number) => {
    // Implement delete functionality
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-6'>Users</h1>
      <Table data={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default Dashboard
