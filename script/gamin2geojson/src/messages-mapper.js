const TYPE_MESSAGE = 0

function toPointFeatures (message) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [message.Longitude, message.Latitude]
    },
    properties: {
      time: message.Time,
      content: message.Content
    }
  }
}

export function mapMessagesGeoJson (data) {
  const messages = data.filter(e => e.Type === TYPE_MESSAGE).map(e => toPointFeatures(e))
  return {
    type: 'FeatureCollection',
    features: messages
  }
}
