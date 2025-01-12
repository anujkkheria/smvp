import React from 'react'
import { TextField } from '@mui/material'
interface Iinput {
  showLabel?: boolean
  label: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  isEditing?: boolean
}
const EditableInput: React.FC<Iinput> = (props) => {
  const { value, onChange, label, isEditing, showLabel } = props

  if (!showLabel) {
    return !isEditing ? (
      <TextField
        className='h-1/4'
        value={value}
        onChange={(e) => onChange(e)}
        name={label}
      />
    ) : (
      <p className='h-1/4'>{value}</p>
    )
  }
  return !isEditing ? (
    <TextField
      className='h-1/4'
      value={value}
      onChange={(e) => onChange(e)}
      name={label}
    />
  ) : (
    <p className='h-1/4'>{value}</p>
  )
}

export default EditableInput
