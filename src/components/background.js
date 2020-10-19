import React, { useEffect } from "react";
import * as THREE from "three";

import "../styles/components/background.scss";

const Background = () => {
    useEffect(() =>{
        const canvasContainer = document.querySelector('.background__canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 65, window.innerWidth/window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize( window.innerWidth, window.innerHeight );
        canvasContainer.appendChild( renderer.domElement );

        const geometry = new THREE.DodecahedronBufferGeometry( 1, 4 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00000, wireframe: true } );
        const circle = new THREE.Mesh( geometry, material );

        scene.add( circle );
        camera.position.z = 5;
      
        const animate = () => {
          requestAnimationFrame( animate );
          circle.rotation.y += 0.004;
          circle.rotation.x += 0.001;
          renderer.render( scene, camera );
        };

        const scale = () => {
          let scaleVal = (window.scrollY + 100 ) / 100;
          circle.scale.x = scaleVal;
          circle.scale.y = scaleVal;
          circle.scale.z = scaleVal;
        }

        const handleResize = () => {
            const { innerWidth, innerHeight } = window;
            renderer.setSize(innerWidth, innerHeight);
            camera.aspect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();
        }
        window.addEventListener('resize', handleResize);
        if(window.innerWidth >= 800){
          window.addEventListener('scroll', ()=>{ scale() });
        }
        else{
          circle.scale.x = 5;
          circle.scale.y = 5;
          circle.scale.z = 5;

        }
        animate();
      })
      return(
          <div className="background__canvas"> 
          </div>
      )
}

export default Background;