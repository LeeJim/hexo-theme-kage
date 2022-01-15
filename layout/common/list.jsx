const { Component } = require('inferno');
const classname = require('hexo-component-inferno/lib/util/classname');

module.exports = class extends Component {
  render() {
    const { page } = this.props
    const language = page.lang || page.language || config.language;

    return (
      <ul className="k-list">
        {page.posts.data.map(item => (
          <li class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64" style={{ "background-image": "url('" + (item.logo || 'https://bulma.io/images/placeholders/128x128.png') + "')"}}>
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  {/* {Object.keys(item).join(',')} */}
                  <h2>{item.title}</h2>
                  <p><a href={item.url} target='_blank'><small>{item.url}</small></a></p>
                  <p className="tags">
                    {item.tags.data.map(item => (<span className={classname({
                      tag: true,
                      'is-warning': item.name == '金榜',
                      'is-primary': item.name == '小而美',
                      'is-info': item.name == '大厂出品',
                    })}>{item.name}</span>))}
                    {item.categories.data.map(item => (<span className="tag is-light is-primary">{item.name}</span>))}
                  </p>
                  <p>{item.desc}</p>
                  <p><small>created by <strong>{item.creator || 'admin'}</strong> at {item.date.startOf('day').fromNow()}</small></p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    )
  }
}