/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Canvas, useThree } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { ClawMachine } from './ClawMachine';
import { Claw } from './Claw';
import { Prizes } from './Prizes';
import { useGameStore } from '../store';
import { useEffect } from 'react';

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Fixed front view for 2D feel
    camera.position.set(0, 5, 18);
    camera.lookAt(0, 4, 0);
  }, [camera]);

  return null;
};

export const GameScene = () => {
  const activePlayer = useGameStore(state => state.activePlayer);
  const myId = useGameStore(state => state.myId);
  const isLocal = activePlayer === myId && myId !== null;

  return (
    <Canvas shadows gl={{ antialias: true, preserveDrawingBuffer: true }}>
      <PerspectiveCamera makeDefault position={[0, 5, 18]} fov={40} />
      <CameraSetup />
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 9, 5]} intensity={3.0} castShadow shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} />
      <directionalLight position={[0, 10, 10]} intensity={1.0} castShadow />

      <Physics gravity={[0, -9.81, 0]}>
        <ClawMachine />
        <Claw isLocal={isLocal} />
        <Prizes isLocal={isLocal} />
      </Physics>

      <Environment preset="city" background blur={0.5} />
    </Canvas>
  );
};
