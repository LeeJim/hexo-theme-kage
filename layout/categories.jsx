const { Component, Fragment } = require('inferno');
const Categories = require('hexo-component-inferno/lib/view/widget/categories');

module.exports = class extends Component {
    render() {
        const { site, page, helper } = this.props;

        return (
            <Fragment>
                <Categories.Cacheable site={site} page={page} helper={helper} />
            </Fragment>
        );
    }
};
