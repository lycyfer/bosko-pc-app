import './footerSecond.css'
import { useState } from 'react'
import { FaChevronUp } from 'react-icons/fa';

const FooterSecond = (props) => {

    const [tilt, setTitlt] = useState(false)
    const [tilt1, setTitlt1] = useState(false)
    const [tilt2, setTitlt2] = useState(false)

    const handleClick = (e) => {
        // props.onFilterSelect(e.target)
        // console.log(e.target.value)
        // console.log(e.current.target.value)
        // console.log()
        // setXyi(e.current.value)
        // props.onFilterSelect(e.currentTarget.innerHTML)
        // props.onFilterSelect(e)
        /* if (tilt) {
            setTitlt(false)
        } else {
            setTitlt(true)
        } */
        setTitlt(true)
        setTitlt1(false)
        // props.deleteItem(id)
        props.onFilterSelect(e.currentTarget.innerHTML)
    }

    const handleClickSecond = (e) => {
        props.onFilterSelect(e.currentTarget.innerHTML)
        setTitlt(false)
        setTitlt1(true)
    }

    const habdleClickTwo = (e) => {
        // setTitltT(true)
        setTitlt2(true)
        props.onFilterSelectSecond(e.currentTarget.innerHTML)
    }

    const handleClickThree = (e) => {
        props.onFilterSelectSecond(e.currentTarget.innerHTML)
        setTitlt2(false)
    }

    const element = props.visibleData.map(item => {
        return (
            <div className='footer_build_list'>
                <div className='footer_build_descr' onClick={handleClick}>{item.descr}</div>
                {tilt ? <FaChevronUp className='arrow_up' onClick={handleClickSecond}></FaChevronUp> : null}
            </div>
        )
    })
    const eleme = props.visibleBuild.map(item => {
        return (
            <div className='footer_build_list'>
                <div className='footer_build_descr' onClick={habdleClickTwo}>{item.descr}</div>
                {tilt2 ? <FaChevronUp className='arrow_up' onClick={handleClickThree}></FaChevronUp> : null}
            </div>
        )
    })
    const contacts = props.contacts.map(item => {
        return (
            <>
                <div className='footer_subtitle'>{item.subtitle}</div>
                <div className='footer_build_list'>
                    <div className='footer_build_descr'>{item.descr}</div>
                </div>
            </>

        )
    })
    const pizda = props.visibleData.map(item => {
        return (
            <div className='testList'>
                <div className={tilt1 ? 'przdec1' : 'pizdec'}>
                    <div className={tilt ? 'price_list' : 'price_list_true'}>
                        <div className='price_list_name'>{item.name}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price}</div>
                        </div>
                    </div>
                </div>
                <div className={tilt1 ? 'przdec1' : 'pizdec'}>
                    <div className={tilt ? 'price_list' : 'price_list_true'}>
                        <div className='price_list_name'>{item.name1}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price1}</div>
                        </div>
                    </div>
                </div>
                <div className='pizdec'>
                    <div className='price_list'>
                        <div className='price_list_name'>{item.name2}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price2}</div>
                        </div>
                    </div>
                </div>
                <div className='pizdec'>
                    <div className='price_list'>
                        <div className='price_list_name'>{item.name3}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price3}</div>
                        </div>
                    </div>
                </div>
                <div className='pizdec'>
                    <div className='price_list'>
                        <div className='price_list_name'>{item.name4}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price4}</div>
                        </div>
                    </div>
                </div>
                <div className='pizdec'>
                    <div className='price_list'>
                        <div className='price_list_name'>{item.name5}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price5}</div>
                        </div>
                    </div>
                </div>
                <div className='pizdec'>
                    <div className='price_list'>
                        <div className='price_list_name'>{item.name6}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price6}</div>
                        </div>
                    </div>
                </div>
                <div className='pizdec'>
                    <div className='price_list'>
                        <div className='price_list_name'>{item.name7}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price7}</div>
                        </div>
                    </div>
                </div>
                <div className='pizdec'>
                    <div className='price_list'>
                        <div className='price_list_name'>{item.name8}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price8}</div>
                        </div>
                    </div>
                </div>
                <div className='pizdec'>
                    <div className='price_list'>
                        <div className='price_list_name'>{item.name9}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price9}</div>
                        </div>
                    </div>
                </div>
                <div className='pizdec'>
                    <div className='price_list'>
                        <div className='price_list_name'>{item.name10}</div>
                        <div className='testBlock'>
                            <div className='price_list_price'>{item.price10}</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    })
    const servicesList = props.visibleBuild.map(item => {
        return (
            <div className='services_list'>
                <div className='services_list_item'>
                    <div className='services_list_name'>{item.name}</div>
                    <div className='test_services'>
                        <div className='services_list_price'>{item.price}</div>
                    </div>
                </div>
                <div className='services_list_item'>
                    <div className='services_list_name'>{item.name1}</div>
                    <div className='test_services'>
                        <div className='services_list_price'>{item.price1}</div>
                    </div>
                </div>
                <div className='services_list_item'>
                    <div className='services_list_name'>{item.name2}</div>
                    <div className='test_services'>
                        <div className='services_list_price'>{item.price2}</div>
                    </div>
                </div>
                <div className='services_list_item'>
                    <div className='services_list_name'>{item.name3}</div>
                    <div className='test_services'>
                        <div className='services_list_price'>{item.price3}</div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className='footer'>
            <div className='footer_build'>
                <h2 className='footer_title'>Ремонт</h2>
                {element}
                <div className='chell'>
                    {tilt ? pizda : null}
                </div>

            </div>
            <div className='footer_build'>
                <h2 className='footer_title'>сервис</h2>
                {eleme}
                <div className='chell'>
                    {tilt2 ? servicesList : null}
                </div>

            </div>
            <div className='footer_build'>
                <h2 className='footer_title'>Контакты</h2>
                {contacts}
            </div>
        </div>
    )
}

export default FooterSecond