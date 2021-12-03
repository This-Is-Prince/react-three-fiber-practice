import React, { useRef } from "react";
import {} from "@react-three/fiber";

const PointLight: React.FC<JSX.IntrinsicElements["pointLight"]> = (props) => {
  const light = useRef<THREE.PointLight>();
  light.current?.shadow.mapSize.set(2048, 2048);
  return <pointLight ref={light} {...props} />;
};

export default PointLight;
