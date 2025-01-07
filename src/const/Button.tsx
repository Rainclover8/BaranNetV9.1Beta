import { motion } from "framer-motion";
import Link from "next/link";
interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  link?:string
}

function Button({ title, className, onClick, link }: ButtonProps) {
  return (
    <motion.button
      className={className}
      type="button"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        delay: 2,
        ease: "easeOut",
      }}
    >
      <Link href={link}>
      {title}
      </Link>
    </motion.button>
  );
}

export default Button;
