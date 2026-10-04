import React from 'react'
const navLinks =[
  { href: "#about", label:"About" },
  { href:"#projects", label:"Projects"},
  { href:" #experience" , label: "Experience"},
  { href:"#testimonials", label:"Testimonials"},
];

const Navbar = () => {
  return (
    <header>
      <nav>
        <a>
          PM<span>.</span>
        </a>

        {/* Desktop Nav */}

        <div>
          <div>
            {navLinks.map((link,index)=>(
              <a href ={link.href}>{link.label}</a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar