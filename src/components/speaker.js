import React from 'react';
import '../App.css';

import { useSpring, animated } from 'react-spring'


function Speaker({typer}) {

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


  const other = useSpring({
    delay: 3200,
    opacity: 1,
    from: { opacity: 0 },
  })


  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div 
      class= "card" id = {typer}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style ={{ transform: props.xys.interpolate(trans)}}
    > 
    </animated.div >

  )
}


  export default Speaker;