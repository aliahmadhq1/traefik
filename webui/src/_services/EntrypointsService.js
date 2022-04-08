import { APP } from '../_helpers/APP'

const apiBase = '/entrypoints'

function getAll () {
  return APP.api.get(`${apiBase}`)
    .then(body => {
      
      return body.data
    })
}

function getByName (name) {
  return APP.api.get(`${apiBase}/${name}`)
    .then(body => {
      
      return body.data
    })
}

export default {
  getAll,
  getByName
}
