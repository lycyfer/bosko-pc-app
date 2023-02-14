import { Carousel } from '../carousel/carousel'
import { CarouselVideo } from '../carouselVideo/carouselVideo'
import tiktokVideo from '../../resources/video/save322.mp4'
import tiktokVideo2 from '../../resources/video/tiktok2.mp4'
import tiktokVideo3 from '../../resources/video/tiktok3.mp4'
import pc1 from '../../resources/img/kisspng-computer-cases-housings-graphics-cards-video-a-5b3003542de919.8813330015298732361881.png'
import pc2 from '../../resources/img/pcPhoto2.png'
import pc3 from '../../resources/img/kisspng-computer-cases-housings-computer-hardware-avadir-performance-pc-inc-5b2791b25b4733.0890746115293198583739.png'
import pc4 from '../../resources/img/kisspng-computer-cases-housings-computer-hardware-person-liquid-viper-custom-pc-dubai-pc-components-dis-5bae97c361cb95.1342021115381687714006.png'
import { useState, useRef, useEffect } from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

import './promoBuild.css'


const Promobuild = (props) => {

    const [click, setClick] = useState(false);

    return (
        <div className='promo'>
            <Carousel>
                <div className='item item-1'>
                    <img src={pc1} alt="" className='img-1' />
                    <div className='test-flex-1'>
                        <p >собери новый <span className='span-1'>игровой</span> компьютер</p>
                        <button className='button-1' onClick={() => setClick(true)}>
                            <a href="#main" className='button-href'>заказать сборку</a>
                        </button>
                    </div>
                </div>
                <div className='item item-2'>
                    <img src={pc2} alt="" className='img-2' />
                    <div className='test-flex-1'>
                        <p>Открывай <span className='span-2'>новые</span> возможности</p>
                        <button className='button-2' onClick={() => setClick(true)}>
                            <a href="#main" className='button-href'>заказать сборку</a>
                        </button>
                    </div>
                </div>
                <div className='item item-3'>
                    <div className='test-flex-2'>
                        <p>сделай свой компьютер <span className='span-3'>лучше</span></p>
                        <button className='button-3' onClick={() => setClick(true)}>
                            <a href="#main" className='button-href'>заказать сборку</a>
                        </button>
                    </div>
                    <img src={pc3} alt="" className='img-3' />
                </div>
                <div className='item item-4'>
                    <img src={pc4} alt="" className='img-4' />
                    <div className='test-flex-1'>
                        <p>Работай с комфортом</p>
                        <button className='button-4' onClick={() => setClick(true)}>
                            <a href="#main" className='button-href'>заказать сборку</a>
                        </button>
                    </div>
                </div>
            </Carousel>

            <CarouselVideo>
                <div className='promo-video'>
                    <video className='promo_video_tiktok' autoPlay loop muted>
                        <source src={tiktokVideo} type='video/mp4' />
                    </video>
                    <video className='promo_video_tiktok' autoPlay loop muted>
                        <source src={tiktokVideo2} type='video/mp4' />
                    </video>
                    <video className='promo_video_tiktok' autoPlay loop muted>
                        <source src={tiktokVideo3} type='video/mp4' />
                    </video>
                </div>
            </CarouselVideo>
        </div>
    )
}

const View = (props) => {
    const SERVICE_ID = "service_hg79zz9"
    const TEMPLATE_ID = "template_g9jp5vm"
    const YOUR_PUBLIC_KEY = 'QmR6rAzygaG9NCbE7'
    const myRef = useRef();

    const kaydownHandler = ({ key }) => {
        switch (key) {
            case 'Escape':
                props.onClose();
                break;
            default:
        }
    }
    useEffect(() => {
        cloceForm();
        hidenForm();
    })

    const cloceForm = () => {
        document.addEventListener('keydown', kaydownHandler);
        return () => document.removeEventListener('keydown', kaydownHandler)
    }

    const hidenForm = () => {
        const onClick = e => myRef.current.contains(e.target) || props.onClose();
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    // icon: 'loading',
                    title: 'Сообщение отправлено'
                })
                props.onClose()
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    // icon: 'error',
                    title: 'Упс, что-то пошло не так',
                    text: error.text,
                })
                props.onClose()
            });
        e.target.reset()
    }

    return !props.isVisble ? null : (
        <div className='modal'>
            <div className='headerForm'>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Имя'
                        name='user_name'
                        placeholder='Имя…'
                        required
                        icon='user circle'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-input-control-email'
                        control={Input}
                        label='Телефон'
                        name='user_phone'
                        placeholder='Телефон…'
                        required
                        icon='phone volume'
                        iconPosition='left'
                    />
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Сообщение'
                        name='user_message'
                        placeholder='Сообщение…'
                        required
                    />
                    <Button type='submit' color='blue'>Отправить</Button>
                </Form>
            </div>
        </div>
    )
}

export default Promobuild