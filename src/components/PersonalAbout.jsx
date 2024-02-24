import { Col, Container, Row} from 'react-bootstrap'
import {Zoom} from "react-awesome-reveal";
import { useEffect } from 'react';
import AOS from 'aos';
import Skill from '../components/Skill'
const PersonalAbout = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
            easing: 'ease-in-sine',
          });
      },[])

    let aboutText = 'First, take my salam. I am Aktarujjaman and running student of CSE. I am  a professional (MERN STACK) developer. I love taking on new challenges and solving problems. I can easily communicate with my all team members and I can adapt myself to any environment. My main focus is improving my MERN technology and programming skill.And I am a quick learner of any new technology.'

return (
    <Container className="py-5" data-aos="fade-right">
        <Row>
            <div className='py-5 about_heading'>
                <h1>ABOUT ME</h1> 
            </div>

            <Col data-aos="fade-up-right" sm={10} md={10} className='m-auto mb-5'>
                <div className='about_content'>
                    <div className='mt-2'>
                        <h5 className='about_subHeading text-white'>{aboutText}</h5>
                    </div>
                    
                    <div className='about_config'>
                        <Row>
                            <Col sm={10} md={10} lg={5} className='shadow-sm py-2 m-1 text-white'>
                                <div>
                                <h4>01</h4>
                                <h2>Quality</h2>
                                <p className='qualityDiscription'>Design quality is very important for every website. I make sure 100% quality and satisfaction before delivering the project.</p>
                                </div>
                            </Col>

                            <Col sm={10} md={10} lg={5}  className='shadow-sm py-2 m-1 text-white'>
                                <div>
                                <h4>02</h4>
                                <h2>Responsive</h2>
                                <p className='qualityDiscription'>Responsive is hart every website. So i am prefect fully Responsive any devices.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className='about_config'>
                        <Row>
                            <Col sm={10} md={10} lg={5}  className='shadow-sm py-2 m-1 text-white'>
                                <div>
                                    <h4>03</h4>
                                    <h2>Support</h2>
                                    <p className='qualityDiscription'>I Will provide you life time any Support and some issu. I went to good relationship my all client</p>
                                </div>
                            </Col>

                            <Col sm={10} md={10} lg={5}  className='shadow-sm py-2 m-1 text-white'>
                                <div>
                                <h4>04</h4>
                                <h2>Security and safety</h2>
                                <p className='qualityDiscription'>Get complete Security website and safe your's all data and information</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* <img className='img-fluid signature_img' src='image/signature.png'></img> */}
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default PersonalAbout