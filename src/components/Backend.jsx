import { Col, Container, Row } from 'react-bootstrap'
import { FiLink2 } from 'react-icons/fi';

const Backend = () => {

return (
    <Container>
        <Row>
            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/inventory.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Inventory  Management</h5>
                        <ul className='g'>
                            <li>React.js</li>
                            <li>Node</li>
                            <li>Express.js</li>
                            <li>Mongodb</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://inventory-management-system-mern.netlify.app/'><FiLink2></FiLink2></a>
                        </div>
                    </div>    
                </div>
            </Col>
            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/ecom.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Full Stack (MERN) E-commerce</h5>
                        <ul className='g'>
                            <li>React.js</li>
                            <li>Node</li>
                            <li>Express.js</li>
                            <li>Mongodb</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://jolly-rabanadas-487e64.netlify.app/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Backend