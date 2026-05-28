import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

function BoomerModel() {
  const { scene } = useGLTF('/models/boomer-sombra.glb');
  
  return <primitive object={scene} position={[-0.5, -0.2, -0.5]} scale={0.27} />;
}

export default function BoomerSection() {
  return (
    <section id="modelo-3d" className="relative min-h-screen bg-black overflow-hidden py-32 flex items-center justify-center border-t border-white/5">
      
      <div className="absolute inset-0 bg-red-900/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-10 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[10px] text-red-500 mb-6">
            Asset Enemigo
          </p>
          <h2 className="text-5xl md:text-7xl font-black leading-none text-white">
            EL PRIMER INFECTADO <br/>
            <span className="text-red-600">DE LAS MINAS</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 rounded-full mt-6 mb-8" />
          <p className="text-gray-400 text-lg leading-relaxed">
            Asset oficial 3D del proyecto. Esta abominación hinchada es el resultado de la infección en las profundidades de la mina. Interactúa con el modelo arrastrando el cursor para analizar a la amenaza.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="h-[600px] w-full relative cursor-grab active:cursor-grabbing rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} color="red" />
            <directionalLight position={[-5, 5, 5]} intensity={0.5} color="white" />

            <Suspense fallback={null}>
              <BoomerModel />
            </Suspense>

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </motion.div>

      </div>
    </section>
  );
}