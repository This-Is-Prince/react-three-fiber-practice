import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";
import PointLight from "./PointLight";

const CanvasAPI = () => {
  return (
    <Canvas
      gl={(canvas) => new THREE.WebGLRenderer({ canvas, antialias: true })}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 2, 5] }}
      shadows={{ enabled: true, type: THREE.PCFSoftShadowMap }}
    >
      <CameraController />
      <PointLight position={[0, 2, 2]} castShadow />
      <mesh
        position={[0, -1.5, 0]}
        rotation={new THREE.Euler(-Math.PI * 0.5, 0, 0)}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh castShadow>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
};

export default CanvasAPI;
