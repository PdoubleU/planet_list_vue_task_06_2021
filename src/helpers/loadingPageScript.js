function toggleLoaded () {
  const image = document.querySelector('.loading_background') || null
  const homeBtn = document.querySelector('.link-home') || null
  const planetsBtn = document.querySelector('.link-planets') || null
  if (!image) return
  image.classList.add('loaded')
  homeBtn.classList.add('loaded')
  planetsBtn.classList.add('loaded')
}

export default toggleLoaded
