import product from './product';
import customer from './customer';
import vendor from './vendor'
import response from './response'
import config from './config'
import auth from './auth'
import user from './user'

export const services = {
  product,
  customer,
  vendor,
  response,
  config,
  auth,
  user
};

// Optionally, if you want to access all services via a single object
export default services;