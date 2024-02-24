import { Col, Container, Row } from 'react-bootstrap'
import { FiLink2 } from 'react-icons/fi';
const React = () => {
  return (
    <Container>
        <Row>
            <Col className='m-auto' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/chatting.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Real time chatting app</h5>
                        <ul className='g'>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>Tailwind</li>
                            <li>Firebase</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://monumental-yeot-a61ad5.netlify.app'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/social.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Multi feature social app</h5>
                        <ul className='g'>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>Bootstrap</li>
                            <li>Firebase</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://statuesque-sorbet-d97a99.netlify.app'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/blog.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Blog App</h5>
                        <ul className='g'>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>Bootstrap</li>
                            <li>Firebase</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://ubiquitous-phoenix-c616c0.netlify.app/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/oreby.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Ecommerce frontend</h5>
                        <ul className='g'>
                            <li>React.js</li>
                            <li>Pagination</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://648404fc6038ce1e0c4f696c--graceful-dasik-f25c01.netlify.app/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/react-agen.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>React agency application</h5>
                        <ul className='g'>
                            <li>React.js</li>
                            <li>Rest-Api</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://6554184d4bbe7238bf5f337d--capable-fudge-62ef19.netlify.app'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>
            
            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/nextjs.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>React agency application</h5>
                        <ul className='g'>
                            <li>React.js</li>
                            <li>Rest-Api</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://next-js-full-stack-blush.vercel.app/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
export default React