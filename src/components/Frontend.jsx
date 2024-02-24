import { Col, Container, Row } from 'react-bootstrap'
import { FiLink2 } from 'react-icons/fi';
const Frontend = () => {
  return (
    <Container>
        <Row>
            <Col sm={10} md={6} lg={4} className='m-auto mb-3'>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/innovate.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Innovate frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Innovate_2/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={6} lg={4} className='m-auto mb-3'>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/innovate1.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Innovate-1 frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Arshakir/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={6} lg={4} className='m-auto'>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/inoovate2.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Innovate-2 frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Innovate_1/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='mt-3 m-auto' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/restaurant.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Restaurant frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                            <li>Jq-plugin</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Restaurant_Responsive/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='mt-3 m-auto' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/burger.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Burger frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                            <li>Jq-plugin</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Burger_2/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='mt-3 m-auto' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                <img className='img-fluid' src='image/tempico.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Tempico frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                            <li>Jq-plugin</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/teampico/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
export default Frontend