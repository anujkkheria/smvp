import { useState, useEffect } from 'react'
import Table from '../../components/Table'
// import Header from '../../components/Header'

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'User',
    },
    // Add more sample data as needed
  ])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [loading, setLoading] = useState(false)

  const baseUrl = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `${baseUrl}/users/getall?page=${page}&limit=${limit}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const data = await response.json()
        if (response.ok) {
          // setUsers(data.users)
          console.log('Dashboard', data)
        }
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [page, limit, baseUrl])

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log('Edit user with id:', id)
  }

  const handleDelete = (id: number) => {
    // Implement delete functionality
    setUsers(users.filter((user) => user.id !== id))
  }

  const handleAdd = (newUser: Omit<(typeof users)[0], 'id'>) => {
    setUsers((prev) => [
      ...prev,
      {
        ...newUser,
        id: Math.max(...prev.map((user) => user.id)) + 1,
      },
    ])
  }

  return (
    <div>
      <h1 className='text-2xl font-semibold mt-8 mb-6'>Users</h1>
      <Table
        data={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </div>
  )
}

export default Dashboard
