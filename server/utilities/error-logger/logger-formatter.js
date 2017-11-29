module.exports = (options) => {
  const message = options.message ? `Message=${options.message}` : ''

  const metaDataContent = formatMetadata(options.meta)
  if (message && metaDataContent) {
    return `${message} || ${metaDataContent}`
  } else {
    return `${message}${metaDataContent}`
  }
}

const formatMetadata = (properties) => {
  return Object.keys(properties).map((key) => {
    return `${key}=${properties[key]}`
  }).join(' || ')
}
