import clock from '../../resources/logo/free-icon-clock-7164560.png';
import phone from '../../resources/logo/free-icon-smartphone-4372946.png';
import mail from '../../resources/logo/free-icon-mail-icon-5757765.png'

import './forCommunication.css'



const ForCommunication = () => {
    return (
        <div className="communication" id='request'>
            <h2 className="communication_title">для связи</h2>
            <div className='communication_flex'>
            <div className="communication_block">
                    <img src={phone} alt="" className='communication_block_img'/>
                    <div className='communication_block_title'>Телефон</div>
                    <div className='communication_block_subtitle'>+7-900-297-47-44</div>
                </div>
                <div className="communication_block">
                    <img src={clock} alt="" className='communication_block_img'/>
                    <div className='communication_block_title'>Рабочие часы</div>
                    <div className='communication_block_subtitle'>Ежедневно 08:00 - 22:00</div>
                </div>
                <div className="communication_block">
                    <img src={mail} alt="" className='communication_block_img'/>
                    <div className='communication_block_title'>электронная почта</div>
                    <div className='communication_block_subtitle'>Denis.remont.PC@yandex.ru</div>
                </div>
            </div>
        </div>
    )
}

export default ForCommunication