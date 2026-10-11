import React, { useState } from 'react';
import './Button.css';

// Question 2: Button Component demonstrating styling techniques
function Button({
  variant = 'primary',
  children,
  onClick,
  style = {},
  className = '',
  disabled = false,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  // 1. Inline Styles Object
  const inlineStyles = {
    padding: '9px 18px',
    borderRadius: '6px',
    fontSize: '0.92rem',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    opacity: disabled ? 0.6 : 1,
    // Demonstrating dynamic inline style change on hover
    transform: isHovered && !disabled ? 'translateY(-1px)' : 'none',
    transition: 'all 0.15s ease-in-out',
    ...style, // merge any custom inline style prop
  };

  // 2. CSS class from external stylesheet (Button.css)
  const buttonClass = `btn btn-${variant} ${className}`.trim();

  return (
    <button
      type="button"
      className={buttonClass}
      style={inlineStyles}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
