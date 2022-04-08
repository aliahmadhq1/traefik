import { APP } from '../_helpers/APP'

const apiBase = ''

function getOverview () {
  return APP.api.get(`${apiBase}/overview`)
    .then(body => {
      
      return body.data
    })
}

function getVersion () {
  return APP.api.get(`${apiBase}/version`)
    .then(body => {
      
      return body.data
    })
}

export default {
  getOverview,
  getVersion
}
