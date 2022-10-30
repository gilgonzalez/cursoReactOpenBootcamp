import React from 'react'

interface Props{
    error:string
}

const ErrorMessageCustom = ({error}:Props) => {
  return (
    <div className="error">
        <p>{error}</p>
    </div>
  )
}

export default ErrorMessageCustom