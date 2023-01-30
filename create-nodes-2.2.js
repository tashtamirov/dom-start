
const arr = ['html', 'css', 'js']

const ul = document.createElement('li')

const render = (arr) => {
    for (i of arr) {
        const li = document.createElement('li')
        li.textContent = 'i'
        ul.append(li)
        document.body(append(ul))
    }
    return ul
}
console.log(render(arr))
