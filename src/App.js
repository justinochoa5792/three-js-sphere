import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  // //Creating three js scene
  // const scene = new THREE.Scene();
  // //Creating the shape
  // const geometry = new THREE.SphereGeometry(3, 64, 64);
  // //What it looks like
  // const material = new THREE.MeshStandardMaterial({
  //   color: "#00ff83",
  // });
  // //Combo of geometry and material
  // const mesh = new THREE.Mesh(geometry, material);
  // scene.add(mesh);

  // const light = new THREE.PointLight(0xffffff, 1, 100);
  // light.position.set(0, 10, 10);
  // scene.add(light);

  // const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 100);
  // camera.position.z = 20;
  // scene.add(camera);

  // const canvas = document.querySelector(".webgl");
  // const renderer = new THREE.WebGL1Renderer({ canvas });
  // renderer.setSize(800, 600);
  // renderer.render(scene, camera);
  // Geometry
  function Sphere() {
    return (
      <mesh
        visible
        userData={{ test: "hello" }}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        castShadow
      >
        <sphereGeometry attach="geometry" args={[3, 50, 50]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    );
  }
  // highlight-start

  // Lights
  function KeyLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-2, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  }

  function FillLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[2, 1, 4]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    );
  }

  function RimLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[1, 4, -2]}
        rotation={[0, 180, 0]}
        castShadow
      />
    );
  }
  // highlight-end

  // Geometry
  function GroundPlane() {
    return (
      <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry attach="geometry" args={[500, 500]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }
  function BackDrop() {
    return (
      <mesh receiveShadow position={[0, -1, -5]}>
        <planeGeometry attach="geometry" args={[700, 700]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }

  return (
    <div className="App">
      <Canvas className="canvas">
        <GroundPlane />
        <BackDrop />
        <KeyLight brightness={5.6} color="#ffbdf4" />
        <FillLight brightness={2.6} color="#bdefff" />
        <RimLight brightness={54} color="#fff" />
        <Sphere />
      </Canvas>
    </div>
  );
}

export default App;
