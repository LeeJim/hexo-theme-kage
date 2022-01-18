const { Component, Fragment } = require('inferno');
const classname = require('hexo-component-inferno/lib/util/classname');

const Head = require('./common/head')
const Navbar = require('./common/navbar')
const Footer = require('./common/footer')

module.exports = class extends Component {
  
  render() {
    const { config, page, helper, body } = this.props;
    const baiduScript = `
    var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?04ee3dbf2b7e6f8d8aafdea1cad24fe2";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
    `
    
    return (<html lang="zh-CN">
      <Head config={config} helper={helper} page={page} />
      <body>
        <div className="wrapper">
          <Navbar config={config} helper={helper} page={page} />
          <Fragment>
            <div className="main-content">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-two-thirds" dangerouslySetInnerHTML={{ __html: body }}></div>
                </div>
              </div>
            </div>
          </Fragment>
          <Footer />
        </div>
        <script dangerouslySetInnerHTML={{ __html: baiduScript }} />
        <script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1280794644'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280794644%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));</script>
      </body>
    </html>)
  }
}
