function toggleLoaded () {
  const image = document.querySelector('.loading_background') || null
  if (!image) return
  image.classList.add('loaded')
}

export default toggleLoaded
