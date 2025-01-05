import React from "react"

    interface ButtonProps {
        title:string
        className?:string
        type:string
        onClick?: () => void
    }

function Button({title, className, onClick, type}: ButtonProps) {



  return (
   <button className={className} type={type} onClick={onClick}>{title}</button>
  )
}

export default Button
