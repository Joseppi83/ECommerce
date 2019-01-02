import React, { Component} from 'react'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
          <header id={'header'}>
            <div className={'logo'}>
              Bape
            </div>
            <div className={'menu'}>
              <nav>
                <a href={'http://www.josephcollett.com/ecommerce/lookbook.html'}>
                  Home
                </a>
                <a href={'http://www.josephcollett.com/ecommerce/lookbook.html'}>
                  Lookbook
                </a>
                <a href={'http://www.josephcollett.com/ecommerce/lookbook.html'}>
                  Mens
                </a>
                <a href={'http://www.josephcollett.com/ecommerce/lookbook.html'}>
                  Womens
                </a>
                  <a href={'http://www.josephcollett.com/ecommerce/lookbook.html'}>
                    Sales
                  </a>
                  <a href={'http://www.josephcollett.com/ecommerce/lookbook.html'}>
                    News
                  </a>
              </nav>
            </div>
          </header>)
  }
}
