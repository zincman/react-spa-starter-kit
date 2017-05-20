const consoleUtils = require('./console')
const ci = consoleUtils.ci

function execute(){
	ci('Hello World!', 'Welcome NewBie')
}

module.exports = execute