const { Component, Fragment } = require('inferno');
const Paginator = require('hexo-component-inferno/lib/view/misc/paginator');
// const Article = require('./common/article');
const List = require('./common/list')

module.exports = class extends Component {
  render() {
    const { site, config, page, helper } = this.props;
    const { __, url_for } = helper;

    return <Fragment>
      <List site={site} page={page} /> 
      {page.total > 1 ? <Paginator
        current={page.current}
        total={page.total}
        baseUrl={page.base}
        path={config.pagination_dir}
        urlFor={url_for}
        prevTitle={__('common.prev')}
        nextTitle={__('common.next')} /> : null}
    </Fragment>;
  }
};