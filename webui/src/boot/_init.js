import { APP } from '../_helpers/APP'
import errors from '../_helpers/Errors'

export default async ({ Vue }) => {
  // Router
  // ----------------------------------------------
  APP.router.beforeEach(async (to, from, next) => {
    // Set APP
    APP.routeTo = to
    APP.routeFrom = from
    next()
  })

  // Api (axios)
  // ----------------------------------------------
  APP.api.interceptors.request.use((config) => {
    
    // config.headers['Accept'] = '*/*'
    return config
  })

  APP.api.interceptors.response.use((response) => {
    
    return response
  }, errors.handleResponse)
}
