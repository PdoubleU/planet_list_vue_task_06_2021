import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()

const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.z = 5

function animate () {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

export default {
  name: 'WelcomePage',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
    loader.load(
      'src/assets/3dmodels/death_star/scene.gltf',
      function (gltf) {
        Scene.add(gltf.scene)
      },
      undefined,
      function (err) {
        console.log(err)
      }
    )
    animate()
  }
}
