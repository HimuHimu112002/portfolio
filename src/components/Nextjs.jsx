import { Col, Container, Row } from 'react-bootstrap'
import { FiLink2 } from 'react-icons/fi';

const Nextjs = () => {
return (
    <Container>
        <Row>
            <Col className='m-auto' sm={10} md={6} lg={4}>
                <div className='px-2 py-4 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/news.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Full Stack Next.js And Prisma News App</h5>
                        <ul className='g'>
                            <li>Next.js</li>
                            <li>Prisma</li>
                            <li>React-bootstrap</li>
                            <li>MySql</li>
                        </ul>
                    </div>
                </div>
            </Col>

            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1 project__img--section'>
                    <img className='img-fluid' src='image/nextjs.png'/>
                    <div className='projent_position-section px-3'>
                        <h5>Next.js Agency Application</h5>
                        <ul className='g'>
                            <li>Next.js</li>
                            <li>Rest-Api</li>
                            <li>React-Bootstrap</li>
                            <li>SEO</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://statuesque-sorbet-d97a99.netlify.app'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
export default Nextjs