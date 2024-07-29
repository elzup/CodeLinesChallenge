import React from 'react'

export const Pentagon = ({ size = 100, color = 'red' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <polygon
        points="50,0 100,40 80,100 20,100 0,40"
        fill="none"
        stroke={color}
      />
    </svg>
  )
}
