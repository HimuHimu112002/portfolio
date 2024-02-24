import { Col, Container, Row } from 'react-bootstrap'
import { FiLink2 } from 'react-icons/fi';
const ReactNative = () => {
  return (
    <Container>
        <Row>
            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className="img-fluid" src="image/nextjs.png"></img>
                    <div className='projent_position-section'>
                        <h5>Protfolio</h5>
                        <ul className='g'>
                            <li>React.js</li>
                            <li>Strapi</li>
                            <li>React-Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href=''><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div> 
            </Col>
        </Row>
    </Container>
  )
}
export default ReactNative