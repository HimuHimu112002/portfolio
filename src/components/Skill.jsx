import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {Zoom} from "react-awesome-reveal";
const Skill = () => {

return (
  <>
    <Container className='py-5'>
      <div>
        <div className='know_heading my-5'>
          <h3>MY BEST SKILLS</h3> 
        </div>
        <Zoom delay={1e1} cascade damping={1e-1}>
          <Row>
            <Col sm={6} md={4}>
              <div className='know_items'>BOOTSTRAP</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>REACT-BOOTSTRAP</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>TAILWIND-CSS</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>JAVASCRIPT</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>TYPESCRIPT</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>REACT.JS</div>
            </Col>
          </Row>

          <Row>
            <Col sm={6} md={4}>
              <div className='know_items'>NEXT.JS</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>PRISMA</div>
            </Col>
          
            <Col sm={6} md={4}>
              <div className='know_items'>MYSQL</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>FIREBASE</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>NODE.JS</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>EXPRESS.JS</div>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col sm={6} md={4}>
              <div className='know_items'>MONGODB</div>
            </Col>
            
            <Col sm={6} md={4}>
              <div className='know_items'>MONGOOSE</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>POSTMAN</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>SOCKET.IO</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>STUDIO-3T</div>
            </Col>

            <Col sm={6} md={4}>
              <div className='know_items'>VUE.JS</div>
            </Col>
          </Row>
        </Zoom>
      </div>
    </Container>
  </>
  )
}
export default Skill