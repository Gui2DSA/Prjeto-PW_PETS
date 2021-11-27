import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'
import { FaCat } from 'react-icons/fa'
import { FaDog } from 'react-icons/fa'
import { FaFish } from 'react-icons/fa'
import { FaKiwiBird } from 'react-icons/fa'

 
const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li> 
                    <Link to="/">Sobre nós</Link>
                </li>
                <li> 
                    < font size="7"><FaCat className="App-logo" /></font>
                </li> 
                <li> 
                    <Link to="/adotar/123">Adotar</Link>
                </li>
                <li> 
                    < font size="7"><FaDog className="App-logo" /></font>
                </li>  
                <li> 
                    <Link to="/doar">Doar</Link>
                </li>                          
                <li> 
                    < font size="7"><FaFish className="App-logo" /></font>
                </li>      
                <li> 
                    <Link to="/contato">Contato</Link>
                </li> 
                <li> 
                    < font size="7"><FaKiwiBird className="App-logo" /></font>
                </li>            
            </ul>
        </nav>
    </aside>
)
export default Menu
