const { Component, Fragment } = require('inferno');
const Paginator = require('hexo-component-inferno/lib/view/misc/paginator');
const Index = require('./index');

module.exports = class extends Component {
    render() {
        const { site, config, page, helper } = this.props;
        const { _p, url_for } = helper;

        return <Fragment>
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href={url_for('/categories')}>{_p('common.category', Infinity)}</a></li>
                    {page.parents.map(category => {
                        return <li><a href={url_for(category.path)}>{category.name}</a></li>;
                    })}
                    <li class="is-active"><a href="#" aria-current="page">{page.category}</a></li>
                </ul>
            </nav>
            .
            <Index config={config} page={page} helper={helper} />
        </Fragment>;
    }
};