
module.exports.wrapTags = function wrapTags(tags, { url_for }) {
  return tags.map(tag => ({
    ...tag,
    url: url_for(tag.path),
    classlist: {
      tag: true,
      'is-warning': tag.name == '金榜',
      'is-primary': tag.name == '小而美',
      'is-info': tag.name == '大厂出品',
      'is-link': tag.name == '有趣',
      'is-success': tag.name.indexOf('软件') > -1,
    },
  }))
}