import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function CreateHeadScene(sceneHead) {
  const ambientLight = new THREE.AmbientLight("#ffffff", 4);
  sceneHead.add(ambientLight);
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      '/łeb.glb',  // Path to your model file
      function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0.4, 0);
        model.scale.set(2,2,2);
        sceneHead.add(model);  // Add model to its own scene
        resolve(model);  // Resolve with the loaded model
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.error('An error occurred while loading the model', error);
        reject(error);  // Reject if there was an error
      }
    );
  });
}