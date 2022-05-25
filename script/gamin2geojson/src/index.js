import fetch from 'node-fetch'
import * as fs from 'fs'
import { mapMessagesGeoJson } from './messages-mapper.js'
import { mapSummariesGeoJson } from './summaries-mapper.js'

const ENDPOINT = 'https://share.garmin.com/gullydeckel/Map/Messages/?fromDate=2022-05-01T00:00:00.000Z&toDate=2022-08-01T00:00:00.000Z&userId=2518784&units=1&_=1653464042392'

function writeGeoJson (filename, jsonContent) {
  try {
    const content = JSON.stringify(jsonContent, null, 2)
    fs.writeFileSync('../../map/data/' + filename, content)
    fs.writeFileSync('../../app/data/' + filename, content)
  } catch (err) {
    console.error(err)
  }
}

const response = await fetch(ENDPOINT)
const body = await response.json()
const data = body.Messages

writeGeoJson('messages.geojson', mapMessagesGeoJson(data))
writeGeoJson('summaries.geojson', mapSummariesGeoJson(data))
