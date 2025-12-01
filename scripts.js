const form = document.getElementById('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const hideAlert = document.querySelector('.hide-alert')
const footer = document. querySelector('#footer')

// Add new li with new item to the form
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const newItem = input.value
  const li = document.createElement('li')

  li.className = 'list'
  li.innerHTML = `
    <div class="unchecked"></div>
    <span>${newItem}</span>
    <button><img src="assets/icons/trash.svg" alt="trash"></button>`

  ul.prepend(li)
  input.value = ''
})

function hideAlertMessage() {
  hideAlert.classList.add('hide-alert')
}

ul.addEventListener('click', (event) => {
  // Delete item
  if (event.target.closest('button')) {
    const li = event.target.closest('.list')
    li.remove()

    hideAlert.classList.remove('hide-alert')
    
    setTimeout(() => {
      hideAlert.classList.add('hide-alert')
    }, 5000)
  }

  // Checkboxes checked / unchecked
  if (event.target.classList.contains('unchecked') || event.target.classList.contains('checked')) {
    const div = event.target
    if (div) {
      div.classList.toggle('checked')
      div.classList.toggle('unchecked')
    }
  }
})

footer.querySelector('button').addEventListener('click', () => {
  hideAlertMessage()
})