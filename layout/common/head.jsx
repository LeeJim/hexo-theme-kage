const { Component } = require('inferno')

module.exports = class extends Component {
  render() {
    const { config, helper } = this.props;
    const { url_for } = helper;
    
    return (
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{config.title}</title>
        <link rel="stylesheet" href={url_for('/css/default.css')} />
      </head>
    )
  }
}