import Immutable from 'immutable'

const immutable = function(){
	let map1 = Immutable.Map({a: 1, b: 2, c: 3})
	let map2 = map1.set('b', 50)

	/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
	console.warn(map1.get('b'))
	console.warn(map2.get('b'))
}

export default immutable
