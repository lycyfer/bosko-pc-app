import './reasonsList.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReasonsList = (props) => {
    console.log(props)
    const element = props.data.map(item => {
        return (
        <Col md={6}>
            <div className='reasons_block'>
                <div className='reasons_icon'>
                    <img src={item.img} alt="logo" className='reasons_img' />
                </div>
                <div className='reasons_descr'>
                    <span>{item.descrSpan}</span>
                    <p>
                        {item.descr}
                    </p>
                </div>
            </div>
        </Col>
        )
    })
    return (
        <section class="reasons" id='advantages'>
            <h2 className='reasons_title'>
                6 причин работать с нами
            </h2>
            <Row className='reasons_list'>
                {element}
            </Row>
        </section>
    )

}

export default ReasonsList