import { transcode } from "buffer"
import { Button, Container, Nav,  Navbar  as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/shoppingCartContent"

export function Navbar(){
    const { openCart, cartQuantity } = useShoppingCart()
    return (<NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
    <Container>
        <Nav className="me-auto">
            <Nav.Link to="/" as ={NavLink}>
                Home
            </Nav.Link>
            <Nav.Link to="Store" as ={NavLink}>
                Store
            </Nav.Link>
            <Nav.Link to="About" as ={NavLink}>
                About
            </Nav.Link>
        </Nav>
        <Button 
        onClick={openCart}
        style = {{width: "3rem", 
        height:"3rem", 
        position:"relative"}}
        variant="outline-primary"   
        className="rounded-circle"
        >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">      
        <path d="M22 12.5L21.1667 15M21.1667 15L20 18.5H15.5L14.5 15H21.1667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16.5 20.51L16.51 20.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.5 20.51L19.51 20.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> <path d="M2 18C2 14.134 5.13401 11 9 11C10.635 11 12.1391 11.5606 13.3306 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/> </svg>
        <div 
        className="rounded-circle 
        bg-danger 
        d-flex 
        justify-content-center 
        align-items-center"
        style={{color:"white", 
        width:"1.5rem", 
        height:"1.5rem", 
        position:"absolute", 
        bottom:"0", 
        top:"0",
        transform: "translate(60%, 130%)"

        }}>
            {cartQuantity}
        </div>
        </Button>
    </Container>
    </NavbarBs>
    )
}