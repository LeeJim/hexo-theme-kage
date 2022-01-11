const { Component } = require('inferno');
const classname = require('hexo-component-inferno/lib/util/classname');

const Head = require('./common/head')
const Navbar = require('./common/navbar')
const Footer = require('./common/footer')

module.exports = class extends Component {
  
  render() {
    const { site, config, page, helper, body } = this.props;
    
    return (<html lang="zh-CN">
      <Head config={config} helper={helper} page={page} />
      <body>
        <div className="wrapper">
          <Navbar config={config} helper={helper} page={page} />
          <div className="k-body">
          <div class={classname({
              column: true,
              'order-2': true,
              'column-main': true,
          })} dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
          <Footer />
        </div>
      </body>
    </html>)
  }
}
