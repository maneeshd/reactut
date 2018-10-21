import React from "react"
import { Container, Card, CardBody, Badge, Row, Col, CardTitle, CardHeader} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons"


const Contact = () => (
    <Container fluid={true} className="text-center justify-content-center align-content-center d-flex my-4">
        <Card className="w-50 rounded shadow-lg">
            <CardHeader><h3>Contact Me</h3></CardHeader>

            <div className="my-2">
                <img src="/static/img/profile_pic.jpg" className="round-img img-fluid" />
            </div>

            <CardTitle className="mb-1">Maneesh Divana</CardTitle>
            <h6><Badge color="primary" className="p-2" pill>Full Stack Developer</Badge></h6>

            <CardBody>
                <Container fluid={true} className="text-center mb-2" style={{fontSize: "1rem"}}>
                    <FontAwesomeIcon icon={faEnvelope}  className="md-link" />&nbsp;
                    <a className="text-dark" href="mailto:maneeshd77@gmail.com" title="Email">
                        <span className="md-link">maneeshd77@gmail.com</span>
                    </a>
                    <br />
                    <FontAwesomeIcon icon={faMobile} className="md-link" />&nbsp;<span className="md-link" title="Phone">+91-7795826802</span>
                </Container>

                <Container fluid={true} className="text-center" style={{fontSize: "25px"}}>
                    <a href="https://github.com/maneeshd/" target="_blank" className="text-dark mr-2" title="Github">
                        <FontAwesomeIcon icon={faGithub} className="md-link" />
                    </a>
                    <a href="https://www.facebook.com/D.Maneesh/" target="_blank" className="text-dark ml-2 mr-2" title="Facebook">
                        <FontAwesomeIcon icon={faFacebook} className="md-link" />
                    </a>
                    <a href="https://www.linkedin.com/in/maneesh-divana-66b793104/" target="_blank" className="text-dark ml-2 mr-2" title="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} className="md-link" />
                    </a>
                    <a href="https://twitter.com/ManeeshD7/" target="_blank" className="text-dark ml-2" title="Twitter">
                        <FontAwesomeIcon icon={faTwitter} className="md-link" />
                    </a>
                </Container>
            </CardBody>
        </Card>
    </Container>
)

export default Contact