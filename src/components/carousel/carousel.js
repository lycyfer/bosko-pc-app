import { useEffect, useState, Children, cloneElement } from 'react'
import './carousel.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PAGE_WIDTH = 1300

export const Carousel = ({ children }) => {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;

            console.log(newOffset)
            if (newOffset === 1300) {
                return -3900
            }
            // return Math.min(newOffset, 0)
            return newOffset
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;

            const maxOffset = - (PAGE_WIDTH * (pages.length - 1))

            if (newOffset < maxOffset) {
                return 0
            }
            console.log(newOffset)
            /* return Math.max(newOffset, maxOffset)  */
            return newOffset
        })
    }

    const handleClick = (e) => {
        // setOffset(0)
        // console.log(e.target.className)
        if(e.target.className === 'dot1') {
            return setOffset(0)
        } 
        if(e.target.className === 'dot2') {
            return setOffset(-1300)
        }
        if(e.target.className === 'dot3') {
            return setOffset(-2600)
        }
        if(e.target.className === 'dot4') {
            return setOffset(-3900)
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
    }, [children])


/*     useEffect(() => {
        setInterval(() => {
            console.log(offset)
            if(offset != -3900) {
                setOffset((offset - PAGE_WIDTH))
            } else {
                setOffset(0)
            }
            
        },5000)
    }) */

    return (
        <div>
            <div className="main-container">
                <FaChevronLeft className='arrow-slider' onClick={handleLeftArrowClick} />
                <div className="window">
                    <div className="all-pages-container" style={{ transform: `translateX(${offset}px)` }}>
                        {pages}
                    </div>
                </div>
                <FaChevronRight className='arrow-slider' onClick={handleRightArrowClick} />
            </div>
            <div className='dots'>
                <button className={offset === 0 ? 'dot1 active-dot' : 'dot1'} onClick={handleClick}></button>
                <button className={offset === -1300 ? 'dot2 active-dot' : 'dot2'} onClick={handleClick}></button>
                <button className={offset === -2600 ? 'dot3 active-dot' : 'dot3'} onClick={handleClick}></button>
                <button className={offset === -3900 ? 'dot4 active-dot' : 'dot4'} onClick={handleClick}></button>
            </div>
        </div>
    )
}