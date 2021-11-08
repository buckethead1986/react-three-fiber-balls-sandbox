import React, { useRef, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
// import "./styles.css";
import {
  OrbitControls,
  // FlyControls,
  // DeviceOrientationControls,
  // PointerLockControls,
  TransformControls,
  // PerspectiveCamera,
  // Stars,
  useControl
} from "@react-three/drei";

export default function Shape(props) {
  const [mode, setMode] = useState("translate");
  const { shape, color, position } = props;
  // const orbit = useRef();
  const transform = useRef();

  //cycle through 'translate', 'scale', and 'rotate'; transform modes.
  function changeMode() {
    switch (mode) {
      case "translate":
        return setMode("scale");
      case "scale":
        return setMode("rotate");
      case "rotate":
        return setMode("translate");
    }
  }
  // const mode = useControl("mode", {
  //   type: "select",
  //   items: ["scale", "rotate", "translate"]
  // });
  // const { nodes, materials } = useLoader(GLTFLoader, "/scene.gltf")

  return (
    <TransformControls
      ref={transform}
      position={position}
      mode={mode}
      enabled={props.active === props.id ? true : false}
      showX={props.active === props.id ? true : false}
      showY={props.active === props.id ? true : false}
      showZ={props.active === props.id ? true : false}
    >
      <mesh
        key={props.id}
        castShadow
        receiveShadow
        onClick={e => {
          if (props.active === props.id) {
            changeMode();
            e.stopPropagation();
          } else {
            props.setActive(props.id);
            e.stopPropagation();
          }
        }}
        onPointerMissed={e => {
          props.active === props.id && props.setActive("");
          e.stopPropagation();
        }}
      >
        {shapeBufferGeometrySwitcher(shape)}
        <meshStandardMaterial color={color} />
      </mesh>
    </TransformControls>
  );
  // <OrbitControls ref={transform} />
}

function shapeBufferGeometrySwitcher(shape) {
  switch (shape.shape) {
    case "ball":
      return <sphereBufferGeometry args={shape.args} />;
    case "cube":
      return <boxBufferGeometry args={shape.args} />;
    case "cylinder":
      return <cylinderBufferGeometry args={shape.args} />;
  }
}
