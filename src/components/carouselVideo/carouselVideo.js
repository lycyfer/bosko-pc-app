import { useEffect, useState, Children, cloneElement } from 'react'
import './carouselVideo.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PAGE_WIDTH = 400

export const CarouselVideo = ({ children }) => {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;

            console.log(newOffset)
            if (newOffset === 400) {
                return -800
            }
            return newOffset
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            if (newOffset < -800) {
                return 0
            }
            return newOffset
        })
    }

    const handleClick = (e) => {
        if(e.target.className === 'dot1') {
            return setOffset(0)
        } 
        if(e.target.className === 'dot2') {
            return setOffset(-400)
        }
        if(e.target.className === 'dot3') {
            return setOffset(-800)
        }
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    }
                })
            }))
    }, [])

    return (
        <div className='sliderVideo'>
            <div className="main-container-video">
                <FaChevronLeft className='arrow' onClick={handleLeftArrowClick} />
                <div className="window-video">
                    <div className="all-pages-container-video" style={{ transform: `translateX(${offset}px)` }}>
                        {pages}
                    </div>
                </div>
                <FaChevronRight className='arrow' onClick={handleRightArrowClick} />
            </div>
            <div className='dots'>
                <button className={offset === 0 ? 'dot1 active-dot' : 'dot1'} onClick={handleClick}></button>
                <button className={offset === -400 ? 'dot2 active-dot' : 'dot2'} onClick={handleClick}></button>
                <button className={offset === -800 ? 'dot3 active-dot' : 'dot3'} onClick={handleClick}></button>
            </div>
        </div>
    )
}