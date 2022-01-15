const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Web Hunter</strong> created by <a href="http://africans.cn">leejimqiu</a>.
            <br />
            © 2021－{new Date().getFullYear()} anyhub.cn, all rights reserved LEEJIM
          </p>
        </div>
    </footer>
    )
  }
}