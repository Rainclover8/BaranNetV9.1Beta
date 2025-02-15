import Link from "next/link"
import Image from "next/image"
import { ReactNode } from "react"
import { motion } from "framer-motion";

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
   <motion.span className={className}
   initial={{ opacity: 0,}}
   animate={{ opacity: 1,}}
   transition={{
    duration: 2,
    delay: 2,
    ease: "easeOut",
  }}
   >   
        <Link href={link} className={classNameLink} type={type} target="_blank">
           {icon}
        </Link>
   </motion.span>
  )
}

export default Socials
