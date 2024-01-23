import './App.css';
import Navi from './Navi';
import Aside from './Aside';
import Main from './Main';
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Container className='container'>
      <Col className='asideCol'>
         <Aside title="Sidebar"></Aside>
      </Col>
      <Col className='navCol'>
         <Row>
            <Navi></Navi>
         </Row>
         <Main title='Responsive Sidebar Template'></Main>
      </Col>
   </Container>
  );
}

export default App;
