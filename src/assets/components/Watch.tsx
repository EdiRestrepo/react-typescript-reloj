import {useState, useEffect} from 'react'

export const Watch = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div className='jsx-ejercicio'>
        It is {time}
      </div>
    )
}
