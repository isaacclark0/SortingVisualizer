let randArray = document.getElementById('randomize_array_button')
let sortBtn = document.getElementById('sort_button')
let barsCont = document.getElementById('bars_container')
let minRange = 1
let maxRange = 100
let numBars = 40
let heightFact = 5
let unsortedArr = new Array(numBars)
barsCont.style.height = maxRange * heightFact + "px"

function random(min, max){
    return Math.floor(Math.random() * (max-min+1))+min
}
function createRandomArray(){
    for(let i=0;i<numBars;i++){
        unsortedArr[i] = random(minRange, maxRange)
    }
    return unsortedArr
}
document.addEventListener("DOMContentLoaded", function(){
    createRandomArray()
    renderBars(unsortedArr)
})
function renderBars(arr){
    for(let i=0;i<arr.length;i++){
        let bar = document.createElement("div")
        bar.classList.add("bar")
        bar.style.height = arr[i] * heightFact + "px"
        barsCont.appendChild(bar)
    }
}
randArray.addEventListener("click", function(){
    createRandomArray()
    barsCont.innerHTML = ""
    renderBars(unsortedArr)
})

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function bubbleSort(arr){
    let bars = document.getElementsByClassName("bar")
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                for(let k=0;k<bars.length;k++){
                    if(k!=j && k!=j+1){
                        bars[k].style.backgroundColor = "blueviolet"
                    }
                }
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]=temp
                bars[j].style.height = arr[j] * heightFact + "px"
                bars[j].style.backgroundColor = "lightgreen"
                //bars[j].innerText = arr[j]
                bars[j+1].style.height = arr[j+1] * heightFact + "px"
                bars[j+1].style.backgroundColor = "lightgreen"
                //bars[j+1].innerText = arr[j+1]
                await sleep(150)
            }
        }
        await sleep(30)
    }
    return arr
}
sortBtn.addEventListener("click", function(){
    let sortedArr = bubbleSort(unsortedArr)
    console.log(sortedArr)
})