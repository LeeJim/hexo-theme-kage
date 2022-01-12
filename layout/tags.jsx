const { Component } = require('inferno');
const Tags = require('hexo-component-inferno/lib/view/widget/tags');

module.exports = class extends Component {
    render() {
        const { site, helper } = this.props;

        return (
            <div className="columns is-center categories">
                <Tags.Cacheable site={site} helper={helper} />
            </div>
        );
    }
};
