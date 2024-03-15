import React from 'react';

const Button = ({ title, color, textColor }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: textColor
  };

  return (
    <div className=''>
      <button style={buttonStyle} className="button p-4 text-white font-bold">
        {title}
      </button>
    </div>
  );
}

export default Button;

