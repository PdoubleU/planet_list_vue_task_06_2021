import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const renderModel = () => {
  const canvas = document.querySelector('.model')
  var model

  const scene = new THREE.Scene()

  {
    const color = 0xADBAC9
    const intensity = 5
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(90, 35, 10)
    scene.add(light)
  }

  const fov = 75
  const aspect = canvas.clientWidth / canvas.clientHeight
  const near = 0.1
  const far = 1000
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.z = 10

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  document.body.appendChild(renderer.domElement)

  const gltfLoader = new GLTFLoader()
  const url = '/death_star/scene.gltf'
  gltfLoader.load(url, (gltf) => {
    gltf.scene.scale.set(0.05, 0.05, 0.05)
    model = gltf.scene
    model.rotation.x += 0.6
    scene.add(model)
  }
  )

  camera.position.z = 100

  function animate () {
    requestAnimationFrame(animate)

    if (model) model.rotation.y -= 0.01
    renderer.render(scene, camera)
  }
  animate()
}

export default renderModel
