// MODAL
function openAppointment() {
  document.getElementById("appointmentModal").style.display = "block";
}
function closeAppointment() {
  document.getElementById("appointmentModal").style.display = "none";
}

// THREE.JS
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(350, 350);
document.getElementById("three-container").appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 3;

// LOAD GLB
const loader = new THREE.GLTFLoader();
loader.load("uterus_stethoscope.glb", (gltf) => {
  const model = gltf.scene;
  model.scale.set(1.4, 1.4, 1.4);
  scene.add(model);

  function animate() {
    requestAnimationFrame(animate);
    model.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();
});

