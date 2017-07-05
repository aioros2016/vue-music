import jsonp from 'jsonp'

export default function jsonp(url, data, option) {
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
	
	return new Promise((resolve, reject) => {
		jsonp(url, option, (err, data) => {
			if(!err) {
				resolve(data)
			} else {
				reject(err)
			}
		})
	})
}

function param(data) {
	var url = '';
	for(var i in data) {
		let value = data[i] !== underfined ? data[i] : ''
		url += `&${i}=${encodeURIComponent(value)}`
	}
	return url ? url.substring(1) : ''
}
