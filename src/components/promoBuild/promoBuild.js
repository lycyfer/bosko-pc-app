import { useEffect, useState } from 'react'
import { Carousel } from '../carousel/carousel'
import { CarouselVideo } from '../carouselVideo/carouselVideo'
import tiktokVideo from '../../resources/video/save322.mp4'
import tiktokVideo2 from '../../resources/video/tiktok2.mp4'
import tiktokVideo3 from '../../resources/video/tiktok3.mp4'
import pcPhoto from '../../resources/img/kisspng-computer-cases-housings-graphics-cards-video-a-5b3003542de919.8813330015298732361881.png'
import pc1 from '../../resources/img/kisspng-computer-cases-housings-graphics-cards-video-a-5b3003542de919.8813330015298732361881.png'
import pc2 from '../../resources/img/pcPhoto2.png'
import pc3 from '../../resources/img/kisspng-computer-cases-housings-computer-hardware-avadir-performance-pc-inc-5b2791b25b4733.0890746115293198583739.png'
import pc4 from '../../resources/img/kisspng-computer-cases-housings-computer-hardware-person-liquid-viper-custom-pc-dubai-pc-components-dis-5bae97c361cb95.1342021115381687714006.png'


import './promoBuild.css'


const Promobuild = (props) => {


    return (
        <div className='promo'>
            <Carousel>
                <div className='item item-1'>
                    <img src={pc1} alt="" className='img-1' />
                    <div className='test-flex-1'>
                        <p >Игровой компьютер на <span className='span-1'>3080RTX</span></p>
                        <button className='button-1'>
                            заказать сборку
                        </button>
                    </div>
                </div>
                <div className='item item-2'>
                    <img src={pc2} alt="" className='img-2' />
                    <div className='test-flex-1'>
                        <p>Открывай <span className='span-2'>новые</span> возможности</p>
                        <button className='button-2'>
                            заказать сборку
                        </button>
                    </div>
                </div>
                <div className='item item-3'>
                    <div className='test-flex-2'>
                        <p>сделай свой компьютер <span className='span-3'>лучше</span></p>
                        <button className='button-3'>
                            заказать сборку
                        </button>
                    </div>
                    <img src={pc3} alt="" className='img-3' />
                </div>
                <div className='item item-4'>
                    <img src={pc4} alt="" className='img-4' />
                    <div className='test-flex-1'>
                        <p>Работай с комфортом</p>
                        <button className='button-4'>
                            заказать сборку
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

export default Promobuild