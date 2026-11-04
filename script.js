
import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 32, 32);

const textureLoader = new THREE.TextureLoader();

const earthTexture = textureLoader.load("WhatsApp Image 2026-09-21 at 8.08.30 PM (1).jpeg");

const material = new THREE.MeshBasicMaterial({
    map: earthTexture
    
   
});

const Sphere = new THREE.Mesh(geometry, material);
scene.add(Sphere);

Sphere.position.x = 0;
Sphere.position.y = -0.5;
Sphere.position.z = 0;

camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);
    Sphere.rotation.y += 0.005;

    renderer.render(scene, camera);


}

animate();




const clickSound = new Audio("click.mp3");

function handleGlobalClick(e) {
  const target = e.target.closest("button, a");
  if (!target) return;

  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});

  const href = target.getAttribute("href");

  if (target.tagName === "A" && href && !href.startsWith("#") && target.target !== "_blank") {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 180);
  }
}

document.addEventListener("click", handleGlobalClick);

window.addEventListener("pageshow", () => {
  clickSound.load();
})


