import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: "0px",
    width: "100%",
    fontSize:"17px",
    marginTop:'100px'
  }
  return (
    <footer className='text-center bg-dark text-light py-3' style={footerStyle}>
      Copyright &copy; Ayush's Todos-List .
    </footer>
  )
}

export default Footer
