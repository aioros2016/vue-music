export function addClass(el, className) {
	if(hasClass(el, className)) return;
	let newClass = el.className.split(' ')
	newClass.push(className);
	el.className = newClass.join(' ');
}

export function hasClass(el, className) {
	let reg = /(^|\\s) + className + (\\s|$)/
	return reg.test(el.className)
}

export function getAttr(el, name, val) {
	const prefix = 'data-'
	name = prefix + name
	if(val) {
		return el.setAttribute(name, val)
	}else {
		return el.getAttribute(name)
	}
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
	let transformNames = {
		webkit: 'webkitTransform',
		moz: 'MozTransform',
		O: 'OTransform',
		ms: 'msTransform',
		standard: 'transform'
	}
	
	for(var i in transformNames) {
		if(elementStyle[transformNames[i]] !== undefined) {
			return i
		}
	}
	
	return false
})()

export function prefixStyle(style) {
	if(vendor === false) return false
	
	if(vendor === 'standard') return style
	
	return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
