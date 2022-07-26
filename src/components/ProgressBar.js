import React from 'react'

function ProgressBar(props) {
  const containerStyles = {
    height: 20,
    width: '100px',
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    border: '1px solid black'
  }

  const fillerStyles = {
    height: '100%',
    width: `${props.completed}%`,
    backgroundColor: `${props.color}`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <>
      <div>
        {props.title}
        {props.completed / 10}/10
        <div style={containerStyles}>
          <div style={fillerStyles}>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgressBar