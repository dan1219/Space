import React from 'react'
import './index.css'
import Header from './components/Header'

const App = () => {
  return (<div>
    <Header/>
    <div className='main'>

      <div className='wrapper'>
        <div className='circle__text'>
          <div className='circle__text-title'>Путешествие</div>
          <div className='circle__text-info'>На красную планету</div>
          <div className='button__wraper'>
            <a href='#' className='circle__text-button'>Начать путешествие</a>
          </div>
        </div>

        <div className='circle'></div>

        <div className='info'>
          <div className='info_row'>
            <div className='info__element info__element-1'>
              <div className='info__element-first'>мы</div>
              <div className='info__element-second'>1</div>
              <div className='info__element-third'>на рынке</div>
            </div>
            <div className='info__element info__element-2'>
              <div className='info__element-first'>гарантируем</div>
              <div className='info__element-second'>50%</div>
              <div className='info__element-third'>безопасность</div>
            </div>
          </div>

          <div className='info_row'>
            <div className='info__element info__element-3'>
              <div className='info__element-first'>календарик за</div>
              <div className='info__element-second'>2001г.</div>
              <div className='info__element-third'>в подарок</div>
            </div>
            <div className='info__element info__element-4'>
              <div className='info__element-first'>путешествие</div>
              <div className='info__element-second'>597</div>
              <div className='info__element-third'>дней</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>)
}

export default App
