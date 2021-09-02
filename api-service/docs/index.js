
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const api_service = require('./api_service');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...api_service
};