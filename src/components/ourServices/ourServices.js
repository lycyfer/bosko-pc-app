import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import servicesVideo from '../../resources/video/buildpc.mp4'

import './ourServices.css'

const OurServices = (props) => {
    const element = props.services.map(item => {
        return (
            <Col md={4}>
                <div className="services_card mobile_card_2" style={{ 'background': `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.img}) center center no-repeat` }}>
                    <div className="services_title">{item.descr}</div>
                    <div className="services_plus">
                    </div>
                </div>
            </Col>
        )
    })
    return (
        <div className='services'>
            <h2 className='services_title_main'>Наши услуги</h2>
            <Row className='services_row'>
                {element}
            </Row>
            <div className="services_card_pc">
                <video className='services_video' autoPlay loop muted>
                    <source src={servicesVideo} type='video/mp4' />
                </video>
                <div className="services_title_pc">сборка компьютеров</div>
            </div>
        </div>

    )
}

export default OurServices