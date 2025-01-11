import React, { useState } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
// import Input from './Input'
// import RoundedButton from './RoundedButton'

interface TableProps {
  data: {
    id: number
    name: string
    role: string
  }[]
  onEdit: (id: number) => void
  onDelete: (id: number) => void
  onAdd: (user: Omit<TableProps['data'][0], 'id'>) => void
}

const Table: React.FC<TableProps> = ({ data, onEdit, onDelete, onAdd }) => {
  // const [isAdding, setIsAdding] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  // const [newUser, setNewUser] = useState({
  //   name: '',
  //   role: '',
  // })

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   onAdd(newUser)
  //   setNewUser({ name: '', role: '' })
  //   setIsAdding(false)
  // }

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setNewUser((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

  const exportToPDF = () => {
    const doc = new jsPDF()
    autoTable(doc, {
      head: [['S.No', 'Name', 'Role']],
      body: data.map((item, index) => [index + 1, item.name, item.role]),
    })
    doc.save('users-data.pdf')
  }

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      data.map((item, index) => ({
        'S.No': index + 1,
        Name: item.name,
        Role: item.role,
      }))
    )
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users')
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    })
    const dataBlob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    saveAs(dataBlob, 'users-data.xlsx')
  }

  const exportToCSV = () => {
    const csvContent = data
      .map((item, index) => `${index + 1},${item.name},${item.role}`)
      .join('\n')
    const header = 'S.No,Name,Role\n'
    const blob = new Blob([header + csvContent], { type: 'text/csv' })
    saveAs(blob, 'users-data.csv')
  }

  // Calculate pagination values
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className='space-y-4'>
      <div className='flex gap-4 justify-between'>
        <button
          onClick={() => {}}
          className='px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700'
        >
          Add User
        </button>
        <div className='flex gap-4'>
          <button
            onClick={exportToPDF}
            className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
          >
            Export PDF
          </button>
          <button
            onClick={exportToExcel}
            className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700'
          >
            Export Excel
          </button>
          <button
            onClick={exportToCSV}
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
          >
            Export CSV
          </button>
        </div>
      </div>

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
                Password
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {/* {isAdding && (
              <tr>
                <td className='px-6 py-4 whitespace-nowrap'>New</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <input
                    type='text'
                    name='name'
                    value={newUser.name}
                    onChange={handleInputChange}
                    className='border rounded px-2 py-1 w-full'
                    placeholder='Enter name'
                    required
                  />
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <input
                    type='text'
                    name='role'
                    value={newUser.role}
                    onChange={handleInputChange}
                    className='border rounded px-2 py-1 w-full'
                    placeholder='Enter role'
                    required
                  />
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <input
                    type='text'
                    name='organization'
                    value={newUser.organization}
                    onChange={handleInputChange}
                    className='border rounded px-2 py-1 w-full'
                    placeholder='Enter organization'
                    required
                  />
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex gap-2'>
                    <button
                      onClick={handleSubmit}
                      className='text-green-600 hover:text-green-800'
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setIsAdding(false)
                        setNewUser({ name: '', role: '', organization: '' })
                      }}
                      className='text-red-600 hover:text-red-800'
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            )} */}
            {currentItems.map((item, index) => (
              <tr key={item.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {indexOfFirstItem + index + 1}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>{item.name}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{item.role}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <button>Request Reset</button>
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
            <tr></tr>
          </tbody>
        </table>
      </div>

      {/* Add pagination controls - only show if data length > itemsPerPage */}
      {data.length > itemsPerPage && (
        <div className='flex justify-center space-x-2 mt-4'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-3 py-1 rounded bg-gray-200 disabled:opacity-50'
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='px-3 py-1 rounded bg-gray-200 disabled:opacity-50'
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default Table
