import { Component } from 'react';

import NavBar from '../navBar/navBar';
import Header from '../header/header';
import ReasonsList from '../reasons/reasonsList';
import OurServices from '../ourServices/ourServices';
import Promobuild from '../promoBuild/promoBuild';
import ForCommunication from '../forCommunication/forCommunication';
import Footer from '../footer/footer';
import FooterSecond from '../footerSecond/footerSecond';
import PriceList from '../priceList/priceList';

import car from '../../resources/logo/free-icon-car-5670285.png'
import guarantee from '../../resources/logo/free-icon-guarantee-3832075.png'
import diagnosis from '../../resources/logo/free-icon-diagnosis-6014161.png'
import experience from '../../resources/logo/free-icon-experience-2303952.png'
import repair from '../../resources/logo/free-icon-repair-4382310.png'
import discount from '../../resources/logo/free-icon-discount-label-2415331.png'

import anime from '../../resources/img/anime.png'
import jopa from '../../resources/img/jopa.png'
import clear from '../../resources/img/clear.png'
import remont from '../../resources/img/remont.png'
import windows from '../../resources/img/windowstried.png'
import app from '../../resources/img/app.png'

import mainOne from '../../resources/img/1636729327_34-modnica-club-p-belaya-liniya-na-chernom-fone-42.jpg'
import mainSecond from '../../resources/img/1636729360_57-modnica-club-p-belaya-liniya-na-chernom-fone-70.jpg'
import mainThreed from '../../resources/img/abstrakciya-linii-biryuzovyy-6449.jpg'
import mainFo from '../../resources/img/android-50-lollipop-material-dizajn-linii-abstrakciya-polosy-biryuzovyj-belyj.jpg'

import pcPhotoOne from '../../resources/img/kisspng-computer-cases-housings-graphics-cards-video-a-5b3003542de919.8813330015298732361881.png'
import pcPhotoSecond from '../../resources/img/pcPhoto2.png'
import pcPhotoThreed from '../../resources/img/kisspng-computer-cases-housings-computer-hardware-person-liquid-viper-custom-pc-dubai-pc-components-dis-5bae97c361cb95.1342021115381687714006.png'
import pcPhotoFo from '../../resources/img/kisspng-computer-cases-housings-computer-hardware-avadir-performance-pc-inc-5b2791b25b4733.0890746115293198583739.png'

import rec from '../../resources/logo/Rectangle.png'

import './App.css';

class App extends Component {

  state = {
    data: [
      { img: car, descrSpan: 'БЕСПЛАТНЫЙ ВЫЕЗД МАСТЕРА НА ДОМ ИЛИ В ОФИС', descr: 'Cпециалист прибудет к вам на дом или в офис в течение 30 минут' },
      { img: guarantee, descrSpan: 'ГАРАНТИЯ', descr: 'Гарантия предоставляется на все виды проделанных работ. Её срок варьируется от 3 месяцев до 1 года и определяется мастером в зависимости от характера ремонта.' },
      { img: diagnosis, descrSpan: 'БЕСПЛАТНАЯ ДИАГНОСТИКА', descr: 'На заказ выезжает компьютерный инженер, у которого при себе имеется все, что требуется для диагностики и ремонта. Это комплектующие, сервисный софт и инструменты' },
      { img: experience, descrSpan: 'ОПЫТ РАБОТЫ БОЛЕЕ 10 ЛЕТ', descr: 'Только у нас высококвалифицированные специалисты с опытом работы более 10 лет! Мастера определят, почему возникла неисправность и дадут рекомендации относительно обслуживания техники' },
      { img: repair, descrSpan: 'УСТРАНЕНИЕ ТЕХНИЧЕСКИХ НЕПОЛАДОК', descr: 'Программные сбои и ошибки операционной системы устраняются в домашних условиях.Если речь идет о механических дефектах, техника забирается в сервис, где проводится дополнительная диагностика, после которой выполняется ремонт техники' },
      { img: discount, descrSpan: 'САМЫЕ НИЗКИЕ ЦЕНЫ В ГОРОДЕ', descr: 'Фиксированные низкие цены в данном сегменте в городе Краснодар. Также наши мастера предоставляют скидки до 25% в зависимости от количества выполненных работ.' }
    ],
    dataSeervices: [
      { img: windows, descr: 'установка windows' },
      { img: jopa, descr: 'Ремонт компьютеров и ноутбуков' },
      { img: remont, descr: 'Ремонт и настройка телевизоров' },
      { img: anime, descr: 'Настройка интернет и wi-fi' },
      { img: clear, descr: 'чистка компьютеров и ноутбуков' },
      { img: app, descr: 'Установка программного обеспечения' }
    ],
    build: [
      { img: rec, descr: 'ремонт компьютеров' },
      { img: rec, descr: 'ремонт ноутбуков' },
      { img: rec, descr: 'ремонт ноутбуков после залития' },
      { img: rec, descr: 'Замена матрицы ноутбука' },
      { img: rec, descr: 'Ремонт материнской платы ноутбука' }
    ],
    services: [
      { img: rec, descr: 'настройка ноутбука на дому' },
      { img: rec, descr: 'чистка компьютера от пыли' },
      { img: rec, descr: 'чистка ноутбука от пыли' },
      { img: rec, descr: 'установка windows' },
      { img: rec, descr: 'установка антивируса' },
      { img: rec, descr: 'сборка компьютера под заказ' },
      { img: rec, descr: 'установка программ' }
    ],
    contacts: [
      { img: rec, subtitle: 'телефон:', descr: '+7-900-297-47-44' },
      { img: rec, subtitle: 'электронная почта:', descr: 'Denis.remont.PC@yandex.ru' },
      { img: rec, subtitle: 'рабочие часы:', descr: 'Ежедневно 08:00 - 22:00' }
    ],
    slider: [
      { imgMain: mainOne, imgPc: pcPhotoOne, descr: '' },
      { imgMain: mainSecond, imgPc: pcPhotoSecond, descr: '' },
      { imgMain: mainThreed, imgPc: pcPhotoThreed, descr: '' },
      { imgMain: mainFo, imgPc: pcPhotoFo, descr: '' }
    ],
    testPrice: [
      {
        name: 'Установка комплектующих',
        name1: 'Замена жесткого диска',
        name2: 'Замена оперативной памяти',
        name3: 'Замена процессора',
        name4: 'Замена батарейки BIOS',
        name5: 'Установка CD / DVD / Blu-ray',
        name6: 'Ремонт блока питания',
        name7: 'Ремонт / замена материнской платы',
        name8: 'Ремонт видеокарт',
        name9: 'Установка и настройка драйвера устройства',
        name10: 'Устранение проблем с перегревом, зависанием',


        price: 'от 200',
        price1: '300',
        price2: '300',
        price3: 'от 400',
        price4: '400',
        price5: '300',
        price6: 'от 900',
        price7: 'от 600',
        price8: 'от 1000',
        price9: 'от 1000',
        price10: 'от 150',
        descr: 'ремонт компьютеров'
      },
      {
        name: 'Профилактика ноутбуков',
        name1: 'Настройка ноутбуков',
        name2: 'Замена матрицы',
        name3: 'Замена шлейфа',
        name4: 'Замена инвертора',
        name5: 'Ремонт и восстановление после залития',
        name6: 'Замена клавиатуры ноутбука (без стоимости клавиатуры)',
        name7: 'Замена разъема питания ноутбука',
        name8: 'Настройка, обновление версии BIOS',
        name9: 'Прошивка микросхемы BIOS на программаторе',
        name10: 'Ремонт ноутбука по цепи питания',


        price: 'от 200',
        price1: '300',
        price2: '300',
        price3: 'от 400',
        price4: '400',
        price5: '300',
        price6: 'от 900',
        price7: 'от 600',
        price8: 'от 1000',
        price9: 'от 1000',
        price10: 'от 150', descr: 'ремонт ноутбуков'
      },
    ],
    servicesPrice: [
      {
        name: 'Профилактика ноутбуков',
        name1: 'Настройка ноутбуков',
        name2: 'Настройка, обновление версии BIOS',
        name3: 'Прошивка микросхемы BIOS на программаторе',
        price: 'от 500',
        price1: 'от 500',
        price2: 'от 500',
        price3: 'от 500',
        descr: 'настройка ноутбука на дому'
      },
      { name: '', price: '', descr: 'чистка компьютера от пыли' },
      { name: '', price: '', descr: 'чистка ноутбука от пыли' },
      { name: '', price: '', descr: 'установка windows' },
      { name: '', price: '', descr: 'установка антивируса' },
      { name: '', price: '', descr: 'сборка компьютера под заказ' },
      { name: '', price: '', descr: 'установка программ' }
    ],
    id: 0,
    filter: '',
    filterSecond: '',
    testData: [{}]
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'ремонт компьютеров':
        return items.filter(item => item.descr === 'ремонт компьютеров')
      case 'ремонт ноутбуков':
        return items.filter(item => item.descr === 'ремонт ноутбуков')
      default:
        return items
    }
  }
  filterPostBuild = (items, filterSecond) => {
    switch (filterSecond) {
      case 'настройка ноутбука на дому':
        return items.filter(item => item.descr === 'настройка ноутбука на дому')
      case 'чистка компьютера от пыли':
        return items.filter(item => item.descr === 'чистка компьютера от пыли')
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({ filter: filter })
  }
  onFilterSelectSecond = (filterSecond) => {
    this.setState({ filterSecond: filterSecond })
  }

  render() {
    const { testPrice, filter, servicesPrice,filterSecond } = this.state
    const visibleData = this.filterPost(testPrice, filter)
    const visibleBuild = this.filterPostBuild(servicesPrice, filterSecond)
    return (
      <div className='App'>
        {/* <View/> */}
        <NavBar />
        <Header />
        <ReasonsList data={this.state.data} />
        <OurServices services={this.state.dataSeervices} />
        <Promobuild slider={this.state.slider} />
        <ForCommunication />
{/*         <Footer build={this.state.build} services={this.state.services} contacts={this.state.contacts} />
        <FooterSecond
          build={this.state.build}
          services={this.state.services}
          contacts={this.state.contacts}
          testPrice={this.state.testPrice}
          onFilterSelect={this.onFilterSelect}
          onFilterSelectSecond={this.onFilterSelectSecond}
          visibleData={visibleData}
          visibleBuild={visibleBuild}
          deleteItem={this.deleteItem}
          testData={this.state.testData} /> */}
          {/* <PriceFooter/> */}
          <PriceList/>
      </div>
    )
  }


}

/* const View = () => {
  return (
    <div className='formApp'>
     <form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='uer_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
       <Form.Field
          id='form-input-control-last-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message...'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </form>
    </div>
  )
} */


export default App;
