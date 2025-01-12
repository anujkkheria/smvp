import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import EditableInput from '../../components/EditableInput'
import RoundedButton from '../../components/RoundedButton'

const Profile = () => {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [userDetails, setUserDetails] = useState<any>({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || '',
  })

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserDetails((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSave = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/users/update/${user?.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        }
      )

      if (response.ok) {
        setIsEditing(false)
      }
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  const handleResetPassword = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/users/reset-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (response.ok) {
        alert('Password reset email sent!')
      }
    } catch (error) {
      console.error('Error requesting password reset:', error)
    }
  }

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-2xl font-semibold mb-6'>Profile</h1>
      <div className='bg-white shadow rounded-lg p-6 space-y-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl'>Personal Information</h2>
          <button
            onClick={handleEdit}
            className='text-blue-600 hover:text-blue-800'
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <div className='flex flex-wrap justify-between gap-2'>
          {Object.keys(userDetails).map((key: string) => {
            return (
              <div key={key} className=' w-1/3 flex flex-col'>
                <h3>{key}</h3>
                <EditableInput
                  label={key}
                  value={userDetails[key]}
                  onChange={handleChange}
                  isEditing={!isEditing}
                />
              </div>
            )
          })}
        </div>

        {isEditing && (
          <div className='flex justify-end'>
            <RoundedButton label='Save Changes' onClick={handleSave} />
          </div>
        )}

        <div className='pt-6 border-t'>
          <h2 className='text-xl mb-4'>Security</h2>
          <RoundedButton label='Reset Password' onClick={handleResetPassword} />
        </div>
      </div>
    </div>
  )
}

export default Profile
