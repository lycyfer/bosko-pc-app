import './header.css'
import 'semantic-ui-css/semantic.min.css';

import headerVideo from '../../resources/video/testVideo.mp4'

import { useState, useRef, useEffect } from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const Header = () => {


    const [click, setClick] = useState(false);

    return (
        <div className='header' id='main'>
            <View isVisble={click} onClose={() => setClick(false)} />
            <video className='headerVideo' autoPlay loop muted>
                <source src={headerVideo} type='video/mp4' />
            </video>
            <p className='header_descr'>
                Ремонт компьютеров в Краснодаре
            </p>
            <button class="header_btn" onClick={() => setClick(true)} >
                Отправить заявку!
            </button>
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


export default Header