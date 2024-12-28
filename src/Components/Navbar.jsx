import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const MenuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "#home",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "#about",
    },
    {
      text: "Testmonials",
      icon: <PhoneRoundedIcon />,
      path: "#testimonial",
    },
    {
      text: "Contact",
      icon: <ShoppingCartRoundedIcon />,
      path: "#contact",
    },
  ]

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="#"><BsCart2 className='navbar-cart-icon'/></a>

        <button className='primary-button'>Booking now</button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={ () => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={ () => setOpenMenu(false)}
      anchor="right">
        <Box 
          sx={{width: 250}}
          role="presentation"
          onClick={ () => setOpenMenu(false)}
          onKeyDown = { () => setOpenMenu(false)}
        >
          <List>
            {MenuOptions.map((item) => (
              <ListItem key={item.text}>

                <ListItemButton href={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <h3>{item.text}</h3>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar