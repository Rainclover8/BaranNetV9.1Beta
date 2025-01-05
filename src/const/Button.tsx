import { motion } from "framer-motion";
interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

function Button({ title, className, onClick  }: ButtonProps) {
  return (
    <motion.button className={className} type="button" onClick={onClick}
    initial={{ opacity: 0,}}
      animate={{ opacity: 1,}}
      transition={{
        duration: 1,
        delay: 0.5, 
        ease: "easeOut",
      }}
    >
      {title}
    </motion.button>
  );
}

export default Button;
