import React, { useState } from 'react'

interface InviteUserModalProps {
  isOpen: boolean
  onClose: () => void
  onInvite: (email: string) => void
}

const InviteUserModal: React.FC<InviteUserModalProps> = ({
  isOpen,
  onClose,
  onInvite,
}) => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    if (email) {
      onInvite(email)
      setEmail('')
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-lg shadow-xl w-96'>
        <h2 className='text-xl font-bold mb-4'>Invite User</h2>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email address'
          className='w-full p-2 border rounded mb-4'
        />
        <div className='flex justify-end gap-2'>
          <button
            onClick={onClose}
            className='px-4 py-2 text-gray-600 hover:text-gray-800'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700'
          >
            Invite User
          </button>
        </div>
      </div>
    </div>
  )
}

export default InviteUserModal
