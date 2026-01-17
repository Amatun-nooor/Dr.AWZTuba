/* MODAL */
function openAppointment() {
  document.getElementById("appointmentModal").style.display = "block";
}

function closeAppointment() {
  document.getElementById("appointmentModal").style.display = "none";
}

/* THREE.JS – UTERUS + STETHOSCOPE */
const container = document.getElementById("three-container");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(220, 220);
container.appendChild(renderer.domElement);

const uterusMaterial = new THREE.MeshStandardMaterial({
  color: 0xffb6c1,
  metalness: 0.4,
  roughness: 0.3
});

const body = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  uterusMaterial
);
scene.add(body);

const tubeGeometry = new THREE.TorusGeometry(1.4, 0.15, 16, 100, Math.PI);

const leftTube = new THREE.Mesh(tubeGeometry, uterusMaterial);
leftTube.rotation.z = Math.PI / 2;
leftTube.position.x = -1.4;

const rightTube = leftTube.clone();
rightTube.position.x = 1.4;

scene.add(leftTube, rightTube);

const stethoscope = new THREE.Mesh(
  new THREE.TorusGeometry(2.1, 0.07, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
scene.add(stethoscope);

scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

function animate() {
  requestAnimationFrame(animate);
  body.rotation.y += 0.01;
  stethoscope.rotation.z += 0.008;
  renderer.render(scene, camera);
}
animate();
