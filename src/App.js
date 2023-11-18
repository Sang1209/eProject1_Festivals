import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Payment from './Payment';
import Religion from './Religion';
import Countries from './Countries';
import Books from './Books';
import { MDBInputGroup, MDBInput, MDBIcon,MDBBtn } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import $ from 'jquery';
import Container from 'react-bootstrap/Container';

function App() {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop()>100) {
        $('#app-div-sticky').removeClass('app-hide-sticky');
        $('#app-div-sticky').addClass('fixed-top');
    } else {
        $('#app-div-sticky').addClass('app-hide-sticky');
        $('#app-div-sticky').removeClass('fixed-top');
      }
    })
  })

  return (
    <>
      <img className='app-logo' src="/image/logo1.png" alt="logo" />
      <div className="app-width-search">
      <MDBInputGroup>
              <MDBInput label='Search' />
              <MDBBtn rippleColor='light'>
                <MDBIcon icon='search' />
              </MDBBtn>
            </MDBInputGroup>
      </div>

      <Nav className="app-navbar">
        <Nav.Item>
          <Nav.Link>
            <Link className='app-link-tag' to="/">HOME</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className='app-link-tag' to="/religion">RELIGION</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className='app-link-tag' to="/countries">COUNTRIES</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className='app-link-tag' to="/books">BOOKS</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className='app-link-tag' to="/about">ABOUT</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/religion' element={<Religion />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/books' element={<Books />} />
      </Routes>

      <Navbar id='app-div-sticky' bg="light"  data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img src="/image/logo1.png" width={'150px'} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >
              <Link className='app-link-tag' to="/">Home</Link>
            </Nav.Link>
            <Nav.Link >
              <Link className='app-link-tag' to="/religion">Religion</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='app-link-tag' to="/countries">Countries</Link>
            </Nav.Link>
            <Nav.Link >
              <Link className='app-link-tag' to="/books">Books</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className='app-link-tag' to="/about">About</Link>
            </Nav.Link>
          </Nav>
          
          <div className="app-search-sticky">
            <MDBInputGroup>
              <MDBInput label='Search' />
              <MDBBtn rippleColor='light'>
                <MDBIcon icon='search' />
              </MDBBtn>
            </MDBInputGroup>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default App;