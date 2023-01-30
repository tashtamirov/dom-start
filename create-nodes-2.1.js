const arr = ['html', 'css', 'js']

const ul = document.createElement('div')

for (let i of arr) {
    const li = document.createElement('li')
    li.textContent = 'i'
    ul.append(li)
}
document.body.append(ul)
console.log(ul)