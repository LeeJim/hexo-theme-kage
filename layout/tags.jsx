const { Component } = require('inferno');
const { wrapTags } =  require('./utils');
const Tags = require('hexo-component-inferno/lib/view/widget/tags');
const classname = require('hexo-component-inferno/lib/util/classname');

module.exports = class extends Component {
    render() {
        const { site, helper } = this.props;
        const tags = wrapTags(site.tags, helper).sort((a, b) => b.length - a.length)

        return (
            <div className="columns is-center categories">
                {/* <Tags.Cacheable site={site} helper={helper} /> */}
                <div className="box">
                    <h3 className="title is-6">发现</h3>    
                    <div className="filed d-flex">
                        {tags.map(tag => <div className="control">
                            <a className="tags has-addons" href={tag.url}>
                                <span className={classname(tag.classlist)}>{tag.name}</span>
                                <span className="tag">{tag.length}</span>
                            </a>
                        </div>)}
                    </div>
                </div>
            </div>
        );
    }
};
