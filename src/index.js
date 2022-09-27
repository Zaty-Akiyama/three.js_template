import * as THREE from 'three'
import { Mesh, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const init = () => {

  const width = window.innerWidth
  const height = window.innerHeight

  const renderer = new WebGLRenderer({
    canvas: document.getElementById('wrapperCanvas'),
    antialias: true,
    alpha: true
  })
  renderer.setPixelRatio( window.devicePixelRatio )
  renderer.setSize( width, height )

  const scene = new Scene()

  const camera = new PerspectiveCamera( 45, width/height, .01, 10000 )
  camera.position.set( 0, 0, 10 )
  scene.add( camera )

  const geo = new THREE.BoxGeometry()
  const mat = new THREE.MeshNormalMaterial()
  const mesh = new Mesh(geo,mat)
  scene.add( mesh )

  const controls = new OrbitControls( camera, renderer.domElement)

  const animate = delta => {
    requestAnimationFrame( animate )

    controls.update()
    renderer.render( scene, camera )
  }
  animate()
  }
init()