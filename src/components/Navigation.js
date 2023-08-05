import { Container, Nav, Navbar } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import { BsGearWide, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { MdKeyboardVoice } from 'react-icons/md';

const Navigation = () => (
  <Navbar className="bg-body-tertiary py-0">
    <Container fluid className="fw-bold gap-1" style={{ backgroundColor: '#FF5733', color: '#FFF' }}>
      <Link to="/" data-testid="back-button"><BsFillArrowLeftCircleFill className="fs-2 text-white" /></Link>
      <Navbar.Brand className="text-white me-4">Top News</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link className="text-white fs-2" data-testid="voice-icon">
            <MdKeyboardVoice />
          </Nav.Link>
          <Nav.Link className="text-white fs-2" data-testid="gear-icon">
            <BsGearWide />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default Navigation;
