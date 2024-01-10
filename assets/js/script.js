const elements = document.getElementsByClassName('card-content')

const arr = Array.from(elements)

arr.forEach((element) => {
  //   element.addEventListener('mouseover', () => {
  element.classList.add('animate__animated', 'animate__zoomIn')
  //   })
})

const processForm = () => {
  const nameInput = document.getElementById('name-input')
  if (nameInput.value === '') {
    alert('Please enter your name...')
  } else {
    alert(`Hi ${nameInput.value}!`)
    console.log(nameInput.value)
  }
}
