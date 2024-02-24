import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavMenu = () => {

  function changeBG() {
    let navbar = document.getElementById('navbar')
    let scrollValoue = window.scrollY;
    if(scrollValoue < 150){
      navbar.classList.remove('bgColor')
    }else{
      navbar.classList.add('bgColor')
    }
  }
  window.addEventListener('scroll', changeBG)
return (
    <Navbar id="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <h4>Akhtarujjaman</h4>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skill">Skill</Link>
            <Link to="/service">Service</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
          <Link to="https://github.com/HimuHimu112002">
            <Button className='menu_contact--button'>GITHUB LINK</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavMenu