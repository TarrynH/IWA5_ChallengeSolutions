FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence' // WARNING spelling error
NONE_SELECTED = 0   // is an amount so must be number not string


// changed location to country bc kept getting error message
let country = 'RSA' // moved all variables to top for neatness/readability
let customers = 1
let currency = 'R'
let shipping = null 

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED  // remove quotes, they are global variables
batteries = 35 * 2
pens = 5 * NONE_SELECTED

price = shoes + toys + shirts + batteries + pens  // to avoid typing out all variables over in console log

// established all the different shipping costs first
if (country === 'RSA') { 
    shipping = 400 
} else if (country === 'NAM') {
    shipping = 600
} else if (country === 'NK') {
    console.log(BANNED_WARNING)
} else {
    shipping = 800
}

if ( (country = 'RSA' || 'NAM') && (price >= 1000) && (customers === 1) ) { 
	shipping = 0
} else if (customers > 1) {  // or (customer !== 1)
    console.log(FREE_WARNING)
}


console.log('Total price (excl. shipping):', currency, price)
console.log('Total price (incl. shipping):', currency, price + shipping)