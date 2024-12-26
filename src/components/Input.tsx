import React from 'react'
import { TextField } from '@mui/material'
interface Iinput {
  label: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}
const Input: React.FC<Iinput> = ({ label, value, onChange }) => {
  return (
    <TextField
      className='h-1/4'
      label={label}
      value={value}
      onChange={(e) => onChange(e)}
      name={label}
    />
  )
}

export default Input
