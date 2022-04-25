const calculator = document.querySelector(".calculator")


const priceDisplay = calculator.querySelector(".price_display")
const fifteenDisplay = calculator.querySelector(".fifteen_display")
const fourteenAndHalfDisplay = calculator.querySelector(".fourteenAndHalf_display")
const fourteenDisplay = calculator.querySelector(".fourteen_display")
const thirteenDisplay = calculator.querySelector(".thirteen_display")
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

function roundResult(num) {
    return Math.round(num / 100) * 100
}

function calculateAndUpdate() {
    const price = parseInt(priceDisplay.dataset.value);
    const fifteenPrice = price / 17 * 16
    const fourteenAndHalfPrice = price / 17.5 * 16
    const fourteenPrice = price / 18 * 16
    const thirteenPrice = price / 19 * 16

    fifteenDisplay.textContent = numberFormat.format(roundResult(fifteenPrice))
    fourteenAndHalfDisplay.textContent = numberFormat.format(roundResult(fourteenAndHalfPrice))
    fourteenDisplay.textContent = numberFormat.format(roundResult(fourteenPrice))
    thirteenDisplay.textContent = numberFormat.format(roundResult(thirteenPrice))

}