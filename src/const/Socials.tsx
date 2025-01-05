import Link from "next/link"
import Image from "next/image"
import { ReactNode } from "react"

    interface Socials{
        link:string
        icon:ReactNode
        className?:string
        iconName?:string
        classNameLink?:string
        type:string
    }
function Socials({ link, icon, className,classNameLink,type}: Socials) {


  return (
   <span className={className}>   
        <Link href={link} className={classNameLink} type={type}>
           {icon}
        </Link>
   </span>
  )
}

export default Socials
