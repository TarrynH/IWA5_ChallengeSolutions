FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0

let country = 'RSA'
let customers = 1
let currency = 'R'
let shipping = null

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED

price = shoes + toys + shirts + batteries + pens


if (country = 'RSA') { 
    shipping = 400 
} else if (country = 'NAM') {
    shipping = 600
} else if (country = 'NK') {
    console.log(BANNED_WARNING)
} else {
    shipping = 800
}


if ( (country = 'RSA' || 'NAM') && (price >= 1000) && (customers === 1)) { 
	shipping = 0
} else if (customers !== 1) {
    console.log(FREE_WARNING)
}


console.log('Total price including shipping:', currency, price + shipping)

