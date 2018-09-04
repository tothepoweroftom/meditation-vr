<template>
  <div class="hello">
    <template v-if="!loaded">
    <div class="overlay">

      <h1 class="center">

        Loading...
        </h1>
      </div>

      </template>
        <!-- <a-scene style="z-index: 1" > -->

    <!-- <a-scene stats> -->
    <a-scene antialias="true"
            effects=" glitch, godrays, fxaa"
             film="sIntensity: 0.5; nIntensity: 0.7"
              outline="enabled: false; width: 1.33 1.33; range: 0 10; strength: 3; smooth: true;"
               colors="mode:hqprtom; mul: 0.66 0.5 0.66; pow: 1 1.33 1.66; quant: 0.3 0.3 0.1; orig: 0.33 0.66 0.66"
             bloom="filter: bloom!, bloom.filter, #customFilter(bloom_texture 0.3 0.6 0.5); strength: 0.5; radius:1.2"
             fxaa="true" godrays="src: #sun; threshold: 0. 0.63; intensity: 1"
             glitch="true">
      <a-assets>
        <a-asset-item id="tree-obj" src="static/models/trees/trees-lo-poly.obj"></a-asset-item>
        <a-asset-item id="tree-mtl" src="static/models/trees/trees-lo-poly.obj"></a-asset-item>
      </a-assets>
  
      <a-sound src="src: url(static/music/loop1.mp3)" autoplay="true" loop="true" position="0 2 5"></a-sound>
  
  
  
      <a-entity position="0 -30 0" particle-system="preset: dust; particle-count: 10000"></a-entity>
      <a-entity light="type:ambient;intensity:0.26000000000000003"></a-entity>
      <a-text data-v-35fb1ec0="" :value="text" position="-1.0805017097797602 2.6480193483709424 -1.6184556424294714">
        <!-- <a-animation -->
      </a-text>

      <a-entity id="sun" geometry="primitive: sphere; radius: 40;" material="shader: flat; transparent: true; color: #aaaaaa" light="type: directional; color: #FFF; intensity: 0.7" position="500 423 420">
        <a-animation attribute="position" dur="40000" direction="alternate" to="500 600 -1000" repeat="indefinite"></a-animation>
      </a-entity>
  

  <!-- Wireframe terrain -->
      <a-terrain position="0 -50 0" wireframe="true" width="1000" increments="300" detail="7" sharpness="0.13" color="#999999"></a-terrain>


      <!-- TREES -->
      <a-entity v-on:el.hasLoaded="loadingHandler" id="trees" position="12 0 -2">

      <a-obj-model data-v-35fb1ec0="" src="#tree-obj" mtl="#tree-mtl" material="" scale="0.001 0.001 0.001">
        <a-animation attribute="scale" dur="40000" direction="alternate" from="0.003 0 0.003" to="0.003 0.003 0.003" repeat="indefinite">
        </a-animation>
      </a-obj-model>

      </a-entity>

      <a-obj-model position="17 -10 5" data-v-35fb1ec0="" src="#tree-obj" mtl="#tree-mtl" material="" scale="0.001 0.001 0.001">
        <a-animation attribute="scale" dur="40000" direction="alternate" from="0.004 0 0.004" to="0.004 0.004 0.004" repeat="indefinite">
        </a-animation>
      </a-obj-model>
      <!--
      <a-obj-model position="266 -10 1" data-v-35fb1ec0="" src="#tree-obj" mtl="#tree-mtl" material="" scale="0.001 0.001 0.001">
        <a-animation attribute="scale" dur="40000" direction="alternate" from="0.04 0 0.04" to="0.04 0.04 0.04" repeat="indefinite">
        </a-animation>
      </a-obj-model> -->
      <!-- Sky -->
      <a-sky color="black"></a-sky>
  
    </a-scene>
  </div>
</template>

<script>

  export default {
    name: 'GameWorld',
    data() {
      return {
        msg: '',
        loaded: false,
        FileLoader: null,
        text: "What if the whole world,"
      }
    }, 

    mounted() {

      setTimeout(() => { this.loaded = true }, 10000);
      setTimeout(() => { this.text = 'stood still for 1 day?' }, 15000);
      setTimeout(() => { this.text = '' }, 20000);

    },

   
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }

  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0.0,0.0,0.0,0.8);
    z-index: 10;
    position: absolute;
    top:0;
    left:0;
  }

  .center {
    margin: 300px auto;
    color: white;
  }
</style>
