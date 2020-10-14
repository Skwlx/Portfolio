import React, { useEffect } from "react";
import * as THREE from "three";

import "../styles/components/background.scss";

const Background = () => {
    useEffect(() =>{
        const canvasContainer = document.querySelector('.background__canvas');
        const scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 65, window.innerWidth/window.innerHeight, 0.1, 1000 );
        let renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( window.innerWidth, window.innerHeight );
        canvasContainer.appendChild( renderer.domElement );
        const geometry = new THREE.DodecahedronBufferGeometry( 1, 5 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00000, wireframe: true } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
        const animate = () => {
          requestAnimationFrame( animate );
          cube.rotation.y += 0.01;
          cube.rotation.x += 0.001
          renderer.render( scene, camera );
        };
        const handleResize = () => {
            const { innerWidth, innerHeight } = window;
            renderer.setSize(innerWidth, innerHeight);
            camera.aspect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();
        }
        window.addEventListener('resize', handleResize)
        animate();
      })
      return(
          <div className="background__canvas"> 
          </div>
      )
}

export default Background;