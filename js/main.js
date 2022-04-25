const calculator = document.querySelector(".calculator")


const priceDisplay = calculator.querySelector(".price_display")
const fifteenDisplay = calculator.querySelector(".fifteen_display")

const keys = calculator.querySelector(".calculator__keys")
const decimalKey = keys.querySelector(".decimal")

const displays = calculator.querySelector(".display-container");
const subDisplays = displays.querySelectorAll(".display-group")
//format number
const numberFormat = new Intl.NumberFormat("en-US")


keys.addEventListener("click", (event) => {

    if (event.target === keys) return

    const key = event.target
    const type = key.dataset.type;
    const keyValue = key.dataset.value




    if (type === "number") {
        const priceText = priceDisplay.dataset.value
        // no decimal in price
        if (keyValue === ".") return
        // change decimal button to triple zero


        if (priceText === "0") {
            const priceValue = keyValue

            priceDisplay.dataset.value = priceValue
            priceDisplay.textContent = numberFormat.format(priceValue)
        } else {
            const priceValue = priceText + keyValue

            priceDisplay.dataset.value = priceValue
            priceDisplay.textContent = numberFormat.format(priceValue)
        }

    } else if (type === "clear") {
        priceDisplay.dataset.value = "0"
        priceDisplay.textContent = "0"
    }
    calculateAndUpdate()


})


function convertToKyat(gram) {
    const c = 16.606
    const kyatWeight = gram / c
    const kyat = Math.floor(kyatWeight)
    const pel = Math.floor((kyatWeight - kyat) * 16)
    const yway = Math.round(((kyatWeight * 128) % 8) * 100) / 100
    // post to display
    kyatDisplay.textContent = kyat
    pelDisplay.textContent = pel
    ywayDisplay.textContent = yway
}

function convertToGram() {
    const kyat = parseInt(kyatDisplay.textContent),
        pel = parseInt(pelDisplay.textContent),
        yway = parseFloat(ywayDisplay.textContent);
    const gramValue = (kyat + (pel / 16) + (yway / 128)) * 16.606
    gramDisplay.textContent = gramValue.toFixed(3)

}


function calculateAndUpdate() {
    const price = parseInt(priceDisplay.dataset.value);
    const fifteen = price / 17 * 16
    const roundedResult = Math.round(fifteen / 100) * 100
    fifteenDisplay.textContent = numberFormat.format(roundedResult)
}