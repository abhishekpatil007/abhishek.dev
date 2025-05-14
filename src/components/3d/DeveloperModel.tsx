'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { Suspense } from 'react';

function FloatingShape() {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <motion.group
        initial={{ scale: 0.8, y: -1 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Main Cube */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial 
            color="#10b981"
            metalness={0.8}
            roughness={0.2}
            emissive="#10b981"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Orbiting Sphere */}
        <motion.mesh
          position={[0, 0, 0]}
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial 
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </motion.mesh>

        {/* Glowing Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.2, 16, 100]} />
          <meshStandardMaterial 
            color="#10b981"
            metalness={0.5}
            roughness={0.2}
            emissive="#10b981"
            emissiveIntensity={0.5}
          />
        </mesh>
      </motion.group>
    </Float>
  );
}

export default function DeveloperModel() {
  return (
    <div className="w-full h-[500px] relative bg-black/50 rounded-2xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="rounded-2xl"
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <FloatingShape />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 