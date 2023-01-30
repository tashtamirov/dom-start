const div = document.createElement('div')
const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const a1 = document.createElement('a')
const a2 = document.createElement('a')

a1.href = 'https://instagram.com/intocode'
a1.textContent = 'наш инстаграм'

a2.href = 'https://intocode.ru'
a2.textContent = 'наш сайт'

li1.append(a1)
li2.append(a2)
ul.append(li1)
ul.append(li2)
div.append(ul)
document.body.append(div)


