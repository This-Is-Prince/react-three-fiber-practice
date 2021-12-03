import { useRef } from "react";
import {
  useThree,
  useFrame,
  extend,
  ReactThreeFiber,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

const CameraController = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef<OrbitControls>(null!);
  useFrame(() => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      enableDamping={true}
      args={[camera, domElement]}
    />
  );
};

export default CameraController;
