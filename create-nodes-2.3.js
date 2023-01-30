const arr = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]

  const ul = document.createElement('ul')

  const render = (arr) => {
      document.createElement('ul') 
      for(i of arr) {
          const obj = arr[i]
          const li = document.createElement('li')
          const a = document.createElement('a')
          a.textContent = 'obj.name'
          a.href = 'obj.url'
          li.append(a)
          ul.append(li)
          document.body.append(ul)
        }
        return ul
    }
    console.log(render(arr))
  
  

      

  
