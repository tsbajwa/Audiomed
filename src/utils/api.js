import axios from 'axios';

const list_id = 'bc0ce4bb7e';
const apiKey = '61e077e4ea80071c3239a7482d0b7bd1-us16';
const url = 'https://us16.api.mailchimp.com/3.0/';


export default function test() {
  return axios.request({
    baseURL: url,
    auth: { user: `anystring:${apiKey}` },
    method: 'get',
    }).then(function(result) {
     console.log(result)
  });
}
