export const goToPage = (id) => {
  const homeElement = document.querySelector('#home_page')
  homeElement.classList.remove('active')
  setTimeout(() => {
    const element = document.querySelector('#' + id)
    element && element.classList.add('active')
    if (id === "skill_page") {
      element.querySelector(".animation-container").classList.remove('active')
      setTimeout(() => {
        element.querySelector(".animation-container").classList.add('active')
      }, 2500)
    }
  }, 2000)
}
export const closePage = (id) => {
  const element = document.querySelector('#' + id)
  element && element.classList.remove('active')
  setTimeout(() => {
    const homeElement = document.querySelector('#home_page')
    homeElement.classList.add('active')
  }, 2000)
}
