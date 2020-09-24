import React from 'react'

export const Alert = ({title, message, type}) => {

  return (
    <div className={`my-5 bg-${type}-100 border-t border-b border-${type}-500 text-${type}-700 px-4 py-3`} role="alert">
      <p className="font-bold">{title}</p>
      <p className="text-sm">{message}</p>
    </div>
  )
}