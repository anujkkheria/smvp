import React from 'react'
import { Button } from '@mui/material'
interface IButton {
  label: string
  onClick: () => void
}
const RoundedButton: React.FC<IButton> = ({ label, onClick }) => {
  return <Button onClick={() => onClick()}>{label}</Button>
}
export default RoundedButton
