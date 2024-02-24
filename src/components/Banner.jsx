import react, { useEffect } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap'
import AOS from 'aos';
import { Link } from 'react-router-dom';
const Banner = () => {

    useEffect(()=>{
        AOS.init({
            duration: 1000,
            easing: 'ease-in-sine',
          });
      },[])

    const onButtonClick = () => {
        fetch('ReactCV.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resumi_Aktarujjaman.pdf';
                alink.click();
            })
        })
    }
return (
    <>
        <div className='bg_img'>
            <Container data-aos="fade-right" >
                <Row>
                    <Col sm={10} md={10} lg={7} className='m-auto'>

                        <div className='banner_left'>
                            <div>
                                <div className='banner_heading'>
                                    
                                    <p></p>
                                    <h3 className='banner_heading--name'>MERN <span>STACK</span> DEVELOPER</h3>
                                    <p></p>
                                   
                                </div>

                                <h1 className='banner_heading--sub'><span>MD:</span> AKTARUJJAMAN</h1>
                                <div className='mern_logo_section pt-4'>

                                <div className='mern_logo_main'>
                                    <div className='mern_logo'>
                                        <img src='image/mongodb.png'></img>
                                    </div>
                                </div>
                                <div className='mern_logo_main'>
                                    <div className='mern_logo'>
                                        <img src='image/react.png'></img>
                                    </div>
                                </div>
                                <div className='mern_logo_main'>
                                    <div className='mern_logo'>
                                        <img src='image/express-js.png'></img>
                                    </div>
                                </div>
                                <div className='mern_logo_main'>
                                    <div className='mern_logo'>
                                        <img src='image/node.png'></img>
                                    </div>
                                </div>
                                </div>
                                <div className='banner_button--div mt-5'>
                                    <Link to="/contact"><Button className='banner--button1'>CONTACT WITH ME</Button></Link>
                                    <Button onClick={onButtonClick} className='banner--button2'>DOWNLOAD CV</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={10} md={5} lg={5} className='m-auto mt-2 about_img_main'>
                        <div className='banner_img--border m-auto'>
                            <div className='banenr_img__inner--border'>
                                <img className='img-fluid' src='image/banner.png'></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Banner