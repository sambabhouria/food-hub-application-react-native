import {create} from 'apisauce';

export const api = create({
  baseURL: 'baseUrl',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
});
