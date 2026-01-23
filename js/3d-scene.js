// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Scene Setup
const scene = new THREE.Scene();
scene.background = null; // Transparent to show CSS background

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputEncoding = THREE.sRGBEncoding; // Ensure true colors

const canvasContainer = document.getElementById("canvas-container");
canvasContainer.appendChild(renderer.domElement);
// Initially disable pointer events on canvas to allow scrolling
canvasContainer.style.pointerEvents = "none";

// Lighting - Flat lighting to show original colors
const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); // Neutral intensity for true colors
scene.add(ambientLight);

// Controls
let controls;
if (typeof THREE.OrbitControls !== "undefined") {
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.enabled = false; // Start disabled
} else {
  console.warn("OrbitControls not available");
  controls = { enabled: false, update: () => {} }; // Mock object
}

// Model Loader
let model;
const loader = new THREE.GLTFLoader();

// Placeholder while loading or if failed
const geometry = new THREE.CylinderGeometry(1, 1, 3, 32);
const material = new THREE.MeshStandardMaterial({
  color: 0xd4af37,
  metalness: 0,
  roughness: 1,
});
const placeholder = new THREE.Mesh(geometry, material);

// Load the model
loader.load(
  "assets/models/perfume.glb",
  (gltf) => {
    model = gltf.scene;

    // Auto-center and scale the model
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    console.log("Model loaded. Size:", size);

    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scale = 3 / maxDim; // Scale to fit in view
      model.scale.set(scale, scale, scale);

      model.position.x = -center.x * scale;
      model.position.y = -center.y * scale;
      model.position.z = -center.z * scale;
    } else {
      console.warn("Model has zero size, using default scale.");
      model.scale.set(1, 1, 1);
    }

    // Ensure materials are visible
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        // Ensure material is visible
        if (child.material) {
          child.material.side = THREE.DoubleSide; // Render both sides
          // Remove shine and reflections
          child.material.metalness = 0;
          child.material.roughness = 1;
          child.material.needsUpdate = true;
        }
      }
    });

    scene.add(model);

    // Hide loader
    const loaderEl = document.getElementById("loader");
    if (loaderEl) {
      loaderEl.style.opacity = 0;
      setTimeout(() => {
        loaderEl.style.display = "none";
      }, 500);
    }

    initAnimations();
  },
  undefined,
  (error) => {
    console.error("An error happened loading the model:", error);
    scene.add(placeholder);
    model = placeholder;

    // Hide loader on error too
    const loaderEl = document.getElementById("loader");
    if (loaderEl) {
      loaderEl.style.opacity = 0;
      setTimeout(() => {
        loaderEl.style.display = "none";
      }, 500);
    }

    initAnimations();
  }
);

// Animation Logic
function initAnimations() {
  if (!model) return;

  // Fade out scroll indicator immediately on scroll
  gsap.to("#scrollIndicator", {
    opacity: 0,
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "100px top",
      scrub: true,
    },
  });

  // Create a timeline for smoother sequencing
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  // --- Section 1: Intro ---
  tl.to("#text1", { opacity: 1, duration: 1 })
    .to(model.position, { z: 0.5, duration: 2 }, "<")
    .to("#text1", { opacity: 0, duration: 1 }, ">-0.5");

  // --- Section 2: Harmful Fixatives ---
  // Rotate Left 90deg & Move Right
  tl.to(model.rotation, { y: -Math.PI / 2, z: 0, duration: 2 })
    .to(model.position, { x: 1, duration: 2 }, "<")
    .to("#text2", { opacity: 1, duration: 1 }, "<+0.5")
    .to("#text2", { opacity: 0, duration: 1 }, ">+0.5");

  // --- Section 3: Chemical Free ---
  // Rotate Right 90deg & Move Left
  tl.to(model.rotation, { y: Math.PI / 2, z: 0, duration: 2 })
    .to(model.position, { x: -1, duration: 2 }, "<")
    .to("#text3", { opacity: 1, duration: 1 }, "<+0.5")
    .to("#text3", { opacity: 0, duration: 1 }, ">+0.5");

  // --- Section 4: Organic Oils ---
  // Center & Zoom In
  tl.to(model.position, { x: 0, z: 2, duration: 2 })
    .to(model.rotation, { y: Math.PI, z: 0, duration: 2 }, "<")
    .to("#text4", { opacity: 1, duration: 1 }, "<+0.5")
    .to("#text4", { opacity: 0, duration: 1 }, ">+0.5");

  // --- Section 5: Pure Quality ---
  // Full Spin
  tl.to(model.rotation, { y: Math.PI * 3, duration: 2 })
    .to(model.position, { z: 0.5, duration: 2 }, "<")
    .to("#text5", { opacity: 1, duration: 1 }, "<+0.5")
    .to("#text5", { opacity: 0, duration: 1 }, ">+0.5");

  // --- Section 6: Shop Button ---
  // Move Up & Final Rotation
  tl.to(model.position, { y: 1, duration: 2 }).to(
    model.rotation,
    { y: Math.PI * 4, duration: 2 },
    "<"
  );

  // Animate controls target to follow the bottle smoothly
  if (controls.target) {
    tl.to(controls.target, { y: 1, duration: 2 }, "<");
  }

  // Animate Brand Name
  tl.to("#brandName", { opacity: 1, duration: 1 }, "<");

  tl.to(
    "#shopBtnContainer",
    {
      opacity: 1,
      duration: 1,
      onStart: () => {
        console.log("Enabling controls");
        controls.enabled = true;
        document.getElementById("canvas-container").style.pointerEvents =
          "auto";
      },
      onReverseComplete: () => {
        console.log("Disabling controls");
        controls.enabled = false;
        document.getElementById("canvas-container").style.pointerEvents =
          "none";
        // Reset camera to original position to ensure smooth reverse animation
        gsap.to(camera.position, { x: 0, y: 0, z: 5, duration: 1 });
        gsap.to(camera.rotation, { x: 0, y: 0, z: 0, duration: 1 });
      },
    },
    "<"
  );
}

// Render Loop
function animate() {
  requestAnimationFrame(animate);

  // Update controls
  if (controls.enabled) {
    controls.update();
  }

  renderer.render(scene, camera);
}
animate();

// Resize Handler
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Fallback to hide loader if something goes wrong
setTimeout(() => {
  const loaderEl = document.getElementById("loader");
  if (loaderEl && loaderEl.style.display !== "none") {
    console.warn("Loading timed out, forcing loader hide.");
    loaderEl.style.opacity = 0;
    setTimeout(() => {
      loaderEl.style.display = "none";
    }, 500);
  }
}, 5000); // 5 seconds timeout
