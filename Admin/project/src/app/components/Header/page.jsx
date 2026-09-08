"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
function Navbarcomponent() {
    const logout=()=>{
    localStorage.removeItem("token")
    window.location.href='https://food-resturant-pagf.vercel.app/';
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-2">
      <Container>
           <Link href="/" className=' ms-2 me-2 text-decoration-none fw-bold text-xl text-dark'>Admin Panel</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link href="/" className=' ms-2 me-2 text-decoration-none text-dark'>Add  Food</Link>
            <Link href="/showfood"  className=' ms-2 me-2 text-decoration-none text-dark'>Show  Food</Link>
            <Link href="/addcategory" className=' ms-2 me-2 text-decoration-none text-dark'>Add Category</Link>
            <Link href="/showcategory" className=' ms-2 me-2 text-decoration-none text-dark'>Show Category</Link>
          </Nav>
          <hr />
          <Nav>
            <button onClick={logout} className='bg-red-600 hover:bg-red-500 p-2 rounded text-white cursor-pointer'>Logout</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomponent;