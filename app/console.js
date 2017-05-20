function consoleLog(log, title){
	var _title = title || ''
	console.log(_title, log)
}

function consoleInfo(info, title){
	var _title = title || 'New Info'
	console.info('----- ' + _title + ' -----', info)
}

module.exports = {
	cl: consoleLog,
	ci: consoleInfo
}