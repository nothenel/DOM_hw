

//                                                         task1

let task1 = document.getElementById('title')
console.log(task1)


//                                                                 task2

let task2 = document.getElementsByClassName('text')
console.log(Array.from(task2))


//                                                                   task3

let task3 = document.querySelectorAll('li.list-item')
console.log(Array.from(task3))


//                                                                     task4

let task4 = document.getElementsByTagName('li')
Array.from(task4).forEach((item, idx) => {
    item.textContent = `${item.textContent} ${idx}`
})


//                                                                       task5

let task5 = document.getElementsByTagName('li')
Array.from(task5).forEach((item) => {
    item.style.color = 'red'
    item.style.textDecoration = 'underline'
})


//                                                                          task6

let task6 = document.getElementsByClassName('info')
Array.from(task6).forEach((item, idx) => {
    if (idx % 2 !== 0) {
        item.style.color = 'red'
    } else {
        item.style.color = 'green'
    }
})









