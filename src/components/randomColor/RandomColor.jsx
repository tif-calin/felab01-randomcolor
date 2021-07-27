import React from 'react';
import './RandomColor.css';

export default function RandomColor() {
  // set state
  const [color, setColor] = React.useState('#000');

  // create tick function to call every second
  const tick = () => {
    // set color to a random color between #000000 and #ffffff
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };
  
  // useEffect to call tick function every second and then unmount when needed
  React.useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  // return color div
  return (
    <div  className="RandomColor" style={{ 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color, 
      height: '3rem', 
      transition: 'background-color 0.2s ease-in-out' 
    }}>
      <h3 style={{ color: '#fff' }}>{color}</h3>
    </div>
  );
}
