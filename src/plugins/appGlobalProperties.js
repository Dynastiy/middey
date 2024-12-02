import { services } from '@/services/services'

const setupGlobalProperties = (app) => {
// Register all services globally
  Object.keys(services).forEach((key) => {
    app.config.globalProperties[`$${key}`] = services[key]
  })
}

export default setupGlobalProperties