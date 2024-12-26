import React from 'react'

interface TableProps {
  data: {
    id: number
    name: string
    role: string
    organization: string
  }[]
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

const Table: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white shadow-md rounded-lg'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              S.No
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Name
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Role
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Organization
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data.map((item, index) => (
            <tr key={item.id} className='hover:bg-gray-50'>
              <td className='px-6 py-4 whitespace-nowrap'>{index + 1}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item.role}</td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {item.organization}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='flex gap-2'>
                  <button
                    onClick={() => onEdit(item.id)}
                    className='text-blue-600 hover:text-blue-800'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className='text-red-600 hover:text-red-800'
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
