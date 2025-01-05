import Link from "next/link"
import Image from "next/image"
import { ReactNode } from "react"

    interface Socials{
        link:string
        icon:ReactNode
        className?:string
        iconName?:string
        classNameLink?:string
    }
function Socials({ link, icon, className,classNameLink}: Socials) {


  return (
   <span className={className}>   
        <Link href={link} className={classNameLink}>
           {icon}
        </Link>
   </span>
  )
}

export default Socials
