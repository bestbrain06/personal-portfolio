const navigation = document.querySelector('.navbar__links')
const navigationToggle = document.querySelector('.hamburger')

navigationToggle.addEventListener('click', () => {
  navigationToggle.classList.toggle('active')
  const visibility = navigation.getAttribute('data-visible')

  if (visibility === 'false') {
    navigation.setAttribute('data-visible', true)
    navigationToggle.setAttribute('aria-expanded', true)
  } else if (visibility === 'true') {
    navigation.setAttribute('data-visible', false)
    navigationToggle.setAttribute('aria-expanded', false)
  }
})
