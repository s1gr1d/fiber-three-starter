import React, { useState, useEffect } from "react";
import { useThree } from "react-three-fiber";

export const Thing = ({ position, color }) => {

  const [rotY, setRotY] = useState(0);
/*
  const x = Math.random() * 2000 - 1000;
  const y = Math.random() * 2000 - 1000;
  const z = Math.random() * 2000 - 1000;
  const randPosition = [x,y,z];
  */

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotY((rotY+0.01)%100)
    }, 10);
    return () => clearTimeout(timer);
  }, [rotY]);

  const { camera } = useThree();
  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1000;
  camera.up.set(0, 0, 0);
  camera.position.set(0, 0, 3);

  return (
    <group>
      <mesh
        onClick={() => console.log("click")}
        onPointerOver={() => console.log("hover")}
        onPointerOut={() => console.log("unhover")}
        rotation={[90, rotY, 90]}
        position={position}
      >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshNormalMaterial
          attach="material"
          color={color}
          opacity={0.5}
        />
      </mesh>
    </group>
  );
};