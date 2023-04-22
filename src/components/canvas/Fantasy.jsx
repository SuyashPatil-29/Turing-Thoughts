import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const fantasy = useGLTF("/src/assets/fantasy_town/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.5}
        penumbra={0.7}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0} />
      <primitive
        object={fantasy.scene}
        scale={4.25}
        position={[0, -3.55, 0]}
        rotation={[0,-30,0]}
      />
    </mesh>
  );
};

const Fantasy = () => {
  return (
    <Canvas
      className="z-10"
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2 }
          minPolarAngle={Math.PI/2 }
        />
        <Computers />
      </Suspense>

      <Preload true />
    </Canvas>
  );
};

export default Fantasy;