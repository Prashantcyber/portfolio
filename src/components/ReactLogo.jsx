// import { Float, useGLTF } from '@react-three/drei';

// const ReactLogo = (props) => {
// const { nodes, materials } = useGLTF('models/react.glb');

// return (
// <Float floatIntensity={1}>
//   <group position={[8, 8, 0]} scale={0.3} {...props} dispose={null}>
//     <mesh
//       geometry={nodes['React-Logo_Material002_0'].geometry}
//       material={materials['Material.002']}
//       position={[0, 0.079, 0.181]}
//       rotation={[0, 0, -Math.PI / 2]}
//       scale={[0.392, 0.392, 0.527]}
//     />
//   </group>
// </Float>
// );
// };

// useGLTF.preload('models/react.glb');

// export default ReactLogo;



import { Float, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('models/react.glb');
  const groupRef = useRef();

  // Apply clockwise rotation
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.01; // Decrement for clockwise rotation
    }
  });

  return (
    <Float floatIntensity={1}>
      <group
        ref={groupRef} // Attach ref to the group
        position={[8, 8, 0]}
        scale={0.3}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;

