const TYPE_SUMMARY = 1

function toPolygonFeature (summary) {
  const b = summary.Bounds
  return {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [[b[1], b[0]], [b[1], b[2]],
          [b[3], b[0]], [b[3], b[2]],
          [b[1], b[0]]]
      ]
    },
    properties: {
      'startTime:': summary.StartTime,
      'endTime:': summary.Time
    }
  }
}

export function mapSummariesGeoJson (data) {
  const summaries = data.filter(e => e.Type === TYPE_SUMMARY).map(e => toPolygonFeature(e))
  return {
    type: 'FeatureCollection',
    features: summaries
  }
}
