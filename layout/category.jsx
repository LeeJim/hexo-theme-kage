const { Component, Fragment } = require('inferno');
const Paginator = require('hexo-component-inferno/lib/view/misc/paginator');
// const Article = require('./common/article');
const Index = require('./index');

module.exports = class extends Component {
    render() {
        const { site, config, page, helper } = this.props;
        // const { __, url_for } = helper;

        return <Fragment>
            category
            <Index config={config} page={page} helper={helper} />
        </Fragment>;
    }
};