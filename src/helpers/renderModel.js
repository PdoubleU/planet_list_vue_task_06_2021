import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const renderModel = () => {
  const canvas = document.querySelector('.model')

  const scene = new THREE.Scene()

  {
    const color = 0xFFFFFF
    const intensity = 1
    const light = new THREE.DirectionalLight(color, intensity)
    light.position.set(-1, 2, 4)
    scene.add(light)
  }

  const fov = 75
  const aspect = canvas.clientWidth / canvas.clientHeight
  const near = 0.1
  const far = 5
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.z = 2

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  document.body.appendChild(renderer.domElement)

  const gltfLoader = new GLTFLoader()
  const url = '/scene.gltf'
  gltfLoader.load(url, (gltf) => {
    console.log(gltf)
    const root = gltf.scene
    scene.add(root)
    console.log(scene)
  }
  )

  function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()
}

export default renderModel
