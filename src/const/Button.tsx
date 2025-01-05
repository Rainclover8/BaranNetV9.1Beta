import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

function Button({ title, className, onClick  }: ButtonProps) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
