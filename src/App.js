import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <Navbar bg = "dark" variant = "dark" sticky="top" expand= "sm" collapseOnSelect>
        <Navbar.Brand>
        <img src={logo} className="logo" alt="logo"  />
          Diomedes
        </Navbar.Brand>
        
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="products">Home</Nav.Link>
          <Nav.Link href="products">About</Nav.Link>
          <Nav.Link href="products">Contact</Nav.Link>
          <Nav.Link href="products">Blog</Nav.Link>
        </Nav>
        </Navbar.Collapse>

        
      </Navbar>
      <div className="content">
        This is content
      </div>
    </div>
  );
}

export default App;
