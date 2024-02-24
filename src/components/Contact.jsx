import { useState } from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {

    let [userName, setuserName] = useState("")
    let [userEmail, setuserEmail] = useState("")
    let [userSubject, setuserSubject] = useState("")
    let [userSms, setuserSms] = useState("")

    let [userNameerror, setuserNameerror] = useState("")
    let [userEmailerror, setuserEmailerror] = useState("")
    let [usersubjecterror, setusersubjecterror] = useState("")
    let [usersmserror, setusersmserror] = useState("")

    let handleName = (e)=>{
        setuserName(e.target.value)
        setuserNameerror("")
    }
    let handlEmal = (e)=>{
        setuserEmail(e.target.value)
        setuserEmailerror("")
    }
    let handlesubject = (e)=>{
        setuserSubject(e.target.value)
        setusersubjecterror("")
    }
    let handleSms= (e)=>{
        setuserSms(e.target.value)
        setusersmserror("")
    }

    let handleSend =()=>{
        if(!userName){
            setuserNameerror("Please Input Your Name Here !")
        }
        if(!userEmail){
            setuserEmailerror("Please Input Your Email Here !")
        }
        if(!userSubject){
            setusersubjecterror("Please Input Your Subject Here !")
        }
        if(!userSms){
            setusersmserror("Please Input Your Message Here !")
        }
        if(userName && userEmail && userSubject && userSms){
            setTimeout(()=>{
                toast.success("Successfully Submited.");
            },1000)                      
        }
    }

return (
    <>
        <ToastContainer position="bottom-center" theme="dark"/>
        <Container className='contact_main rounded'>
            <Row className='mt-5 px-5 contact_bg'>
                <div className='py-5 know_heading'>
                    <h2>CONTACT WITH ME</h2> 
                </div>

                <div className='contact_info mt-5 pb-5'>
                    <div>
                        <h4>Phone Number</h4>
                        <div className='contact_icon'>
                            <BsPhone></BsPhone>
                            <p>01637244543</p>
                        </div>
                        <div className='contact_icon'>
                            <BsPhone></BsPhone>
                            <p>01733571516</p>
                        </div>
                    </div>

                    <div>
                        <h4 className=''>Email Address</h4>
                        <div className='contact_icon'>
                        
                        <AiOutlineMail></AiOutlineMail>
                        <p className='email'>mdhmaktaruzzaman9101@gmail.com</p>
                        </div>
                    </div>
                </div>

                <Col className='m-auto' sm={10} md={4}>
                    <Form onChange={handleName}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-white'>Name</Form.Label>
                            <Form.Control required type="text" placeholder="name" />
                        </Form.Group>
                    </Form>
                    <p className='text-danger'>{userNameerror}</p>
                </Col>

                <Col className='m-auto'  sm={10} md={4}>
                    <Form  onChange={handlEmal}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-white'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                    </Form>
                    <p className='text-danger'>{userEmailerror}</p>
                </Col>

                <Col className='m-auto'  sm={10} md={4}>
                    <Form  onChange={handlesubject}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-white'>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Abc" />
                        </Form.Group>
                    </Form>
                    <p className='text-danger'>{usersubjecterror}</p>
                </Col>

                <Col className='m-auto'>
                    <Form.Group  onChange={handleSms} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='text-white'>Message</Form.Label>
                        <Form.Control placeholder="xxxxxxxxxxxxxxxxxxxxxx" as="textarea" rows={3} />
                    </Form.Group>
                    <p className='text-danger'>{usersmserror}</p>

                    <div className='text-center py-3 pb-5'>
                        <Button onClick={handleSend} className='banner--button2'>SEND MESSAGE</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact