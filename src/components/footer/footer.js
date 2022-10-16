import './footer.css'

const Footer = (props) => {
    const element = props.build.map(item => {
        return (
            <div className='footer_build_list'>
                <img src={item.img} alt="" className='footer_build_img' />
                <div className='footer_build_descr'>{item.descr}</div>
            </div>
        )
    })
    const eleme = props.services.map(item => {
        return (
            <div className='footer_build_list'>
                <img src={item.img} alt="" className='footer_build_img' />
                <div className='footer_build_descr'>{item.descr}</div>
            </div>
        )
    })
    const contacts = props.contacts.map(item => {
        return (
            <>
                <div className='footer_subtitle'>{item.subtitle}</div>
                <div className='footer_build_list'>
                    <img src={item.img} alt="" className='footer_build_img' />
                    <div className='footer_build_descr'>{item.descr}</div>
                </div>
            </>

        )
    })
    return (
        <div className='footer'>
            <div className='footer_build'>
                <h2 className='footer_title'>Ремонт</h2>
                {element}
            </div>
            <div className='footer_build'>
                <h2 className='footer_title'>сервис</h2>
                {eleme}
            </div>
            <div className='footer_build'>
            <h2 className='footer_title'>Контакты</h2>
                {contacts}
            </div>
        </div>
    )
}

export default Footer