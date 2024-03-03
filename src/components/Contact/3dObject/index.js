import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useEffect } from 'react';

const ThreeDeeObject = () => {

    useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth , window.innerHeight );
    const contactPage = document.getElementById('container3D');
    contactPage.appendChild( renderer.domElement );

    const loader = new GLTFLoader();

    loader.load(
        'src/assets/Model/3dObject.gltf',
        function ( gltf ) {
            scene.add( gltf.scene );
        },
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        function ( error ) {
            console.error( 'Error loading glTF:', error );
        }
    );

    // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // const cube = new THREE.Mesh( geometry, material );
    // scene.add( loader.load );

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    }

    animate();
    }, []);
}

export default ThreeDeeObject;
