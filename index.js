const provider = {
  type: 'provider',
  name: 'geojson',
  hosts: false,
  disableIdParam: false,
  Model: require('./src/model'),
  version: require('./package.json').version
}

module.exports = provider
