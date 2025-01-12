import React, { useState } from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
interface Iinput {
  label: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  type: string
}
const Input: React.FC<Iinput> = ({ label, value, onChange, type }) => {
  const [showPassword, setShowPassword] = useState(false)
  if (type === 'password') {
    return (
      <TextField
        className='h-1/4'
        label={label}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e)}
        name={label}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    )
  }
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
