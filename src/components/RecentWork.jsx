import {useState } from 'react';
import { Col, Container, Row } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Backend from "./Backend";
import React from "./React";
import Frontend from "./Frontend";
import Strapi from "./Strapi";
import Nextjs from "./Nextjs";

const RecentWork = () => {
    const [key, setKey] = useState('FRONTEND');

return (

   <Container className="py-5" id="project">
        <div className='py-5 about_heading'>
            <h3>LATEST PROJECT</h3> 
        </div>
    <Row>
        <Col md={12} className="tab_section">
            <Tabs
                defaultActiveKey="FRONTEND"
                id="uncontrolled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3">

                <Tab eventKey="FRONTEND" title="FRONTEND">
                   <Frontend></Frontend>
                </Tab>

                <Tab eventKey="REACT.JS" title="REACT.JS">
                    <React></React>
                </Tab>

                <Tab eventKey="FULL-STACK NEXT.JS & PRISMA" title="FULL-STACK NEXT.JS & PRISMA">
                    <Nextjs/>
                </Tab>

                <Tab eventKey="FULL-STACK MERN" title="FULL-STACK MERN">
                    <Backend></Backend>
                </Tab>
                
                <Tab eventKey="SOCKET.IO" title="SOCKET.IO">
                    <Strapi></Strapi>
                </Tab>
            </Tabs>
        </Col>
    </Row>
   </Container>
  )
}
export default RecentWork