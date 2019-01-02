import React, { Component} from 'react'


export default class ContentArea extends Component {
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
      <section id="content-area">
        <div className="col-md-6 model">
          <img src="http://www.josephcollett.com/ecommerce/img/bape2.png" alt="bape clothes" />
        </div>
        <div className="col-md-6 info">
          <div className="insider">
            <h5>Mens</h5>
            <h1>JACKET DRIPPING SAUCE</h1>
            <p>Lorem ipsum dolor amet vinyl mumblecore vexillologist enamel pin, shaman semiotics shoreditch tumblr bicycle rights fanny pack gluten-free put a bird on it listicle taiyaki marfa. Kinfolk XOXO cornhole small batch bicycle rights mlkshk austin kickstarter VHS woke snackwave. Unicorn cronut truffaut iPhone. Keytar hell of cornhole bicycle rights, 8-bit pok pok church-key cred.</p>
            <div className="size">
              <div className="title">
                size
              </div>
              <ul className="sizes">
                <li className="circle">S</li>
                <li className="circle">M</li>
                <li className="circle">L</li>
                <li className="semi-circle">XL</li>
                <li className="semi-circle">XXL</li>
                <li className="semi-circle">CUSTOM</li>
              </ul>
            </div>
            <div className="action-btns">
              <a className="col-md-6 red-hollow-btn">
                <span className="price">
                  $495
                </span>
                Add to cart
              </a>
              <a className="col-md-6 lightgrey-btn">
                find a store
              </a>
            </div>
          </div>
        </div>
      </section>)
  }
}
