import { Col, Container, Row } from "react-bootstrap"
const Services = () => {
    let frontendDesign = "Frontend design refers to the process of creating the user interface (UI) and user experience (UX) of a website or web application. It involves designing and structuring the visual elements and interactive components that users see and interact with within their web browsers. Frontend design is a crucial aspect of web development because it directly impacts how users perceive and interact with a website or application."

    let reactJs = "Frontend Development with React.JS is a term that encompasses the practice of using JavaScript as the primary programming language for building and enhancing the user interface (UI) and user experience (UX) web applications. JavaScript is a versatile powerful programming language commonly used for front-end development because it allows developers to create dynamic and web content."

    let backend = "Backend development is a crucial aspect of web development that focuses on building the server-side components and infrastructure of a website or web application. While frontend development deals with what users see and interact with within their web browsers, backend development handles behind-the-scenes logic, data processing, and server management."

    let business = `A business management web application can offer numerous benefits to organizations of all sizes and across various industries. These applications are designed to streamline and enhance various aspects of business operations and management.
    Business management applications centralize critical data and information, providing a single source of truth for various departments and stakeholders.`

    let eCommerce = 'eCommerce web application offers numerous benefits for businesses looking to sell products or services online. eCommerce platforms have become increasingly popular in recent years due to their ability to reach a global audience and streamline the buying and selling process. eCommerce web can reach customers worldwide businesses to expand their customer base beyond geographical boundaries'

  return (
    <Container className="py-5">
        <Row>
            <div className='py-5 know_heading'>
                <h2>MY BEST SERVICES</h2> 
            </div>

                
            <Col sm={10} md={6} lg={4} className="m-auto">
                <div className="service_main-section shadow-sm p-4 rounded mb-2">
                    <div className="service_main-content text-center">
                        <h5>FRONTEND DESIGN</h5>
                        <p className="serviceDiscription">{frontendDesign}</p>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={6} lg={4}  className="m-auto mt-3">
                <div className="service_main-section shadow-sm p-4 rounded mb-2">
                    <div className="service_main-content text-center">
                        <h5>FRONTEND DEVELOPMENT WITH REACT.JS</h5>
                        <p className="serviceDiscription">{reactJs}</p>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={6} lg={4}  className="m-auto mt-3">
                <div className="service_main-section shadow-sm p-4 rounded mb-2">
                    <div className="service_main-content text-center">
                        <h5>BACKEND DEVELOPMENT WITH MERN</h5>
                        <p className="serviceDiscription">{backend}</p>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={6} lg={4} className="m-auto mt-3">
                <div className="service_main-section shadow-sm p-4 rounded mb-2">
                    <div className="service_main-content text-center">
                        <h5>BUSINESS MANAGEMENT</h5>
                        <p className="serviceDiscription">{business}</p>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={6} lg={4} className="m-auto mt-3">
                <div className="service_main-section shadow-sm p-4 rounded mb-2">
                    <div className="service_main-content text-center">
                        <h5>ANY KIND OF MANAGEMENT</h5>
                        <p className="serviceDiscription">{business}</p>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={6} lg={4} className="m-auto mt-3">
                <div className="service_main-section shadow-sm p-4 rounded mb-2">
                    <div className="service_main-content text-center">
                        <h5>ECOMMERCE</h5>
                        <p className="serviceDiscription">{eCommerce}</p>
                    </div>
                </div>
            </Col> 
        </Row>
    </Container>
  )
}
export default Services