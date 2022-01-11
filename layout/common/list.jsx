const { Component } = require('inferno');

module.exports = class extends Component {
  render() {
    const { page } = this.props

    return (
      <div className="k-list">
        <ul>
          {page.posts.data.map(item => (
            <li>
              <h3 className="k-list__title">{item.title}</h3>
              <p className="k-list__desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}