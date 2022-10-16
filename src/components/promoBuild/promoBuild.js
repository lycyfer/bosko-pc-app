import { useEffect, useState } from 'react'

import tiktokVideo from '../../resources/video/save322.mp4'
import pcPhoto from '../../resources/img/kisspng-computer-cases-housings-graphics-cards-video-a-5b3003542de919.8813330015298732361881.png'

import './promoBuild.css'


const Promobuild = (props) => {

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(current => {
                const res = current === props.slider.length - 1 ? 0 : current + 1
                return res
            })
            console.log('hi')
        }, 6000)
        return () => clearInterval()
    }, [])

    const prevImgIndex = activeSlide ? activeSlide - 1 : props.slider.length - 1
    const nextImgIndex = activeSlide === props.slider.length - 1 ? 0 : activeSlide + 1

    return (
        <div className='promo'>
            <div className='promo_slider' style={{ 'background': `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.slider[nextImgIndex].imgMain}) center center/cover no-repeat` }}>
            <img src={props.slider[nextImgIndex].imgPc} alt="" className='promo_pc' />
                <div>
                    <h2 className='promo_title'>игровой на компьюте на <span className='RTX'>3080RTX</span></h2>
                    <button className='promo_btn'>
                        Заказать сборку
                    </button>
                </div>
            </div>
            <div className='promo_video'>
                <video className='promo_video_tiktok' autoPlay loop muted>
                    <source src={tiktokVideo} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default Promobuild