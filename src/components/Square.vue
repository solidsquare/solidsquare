<template>
  <div class="square">
  </div>
</template>

<script>
export default {
  name: 'Square',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square {
    width: 20%;
    height: 20%;
    border: solid 4px #F4C430;
    background: black;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

@media screen and (aspect-ratio: 1/1){
  .square {
      background: #F4C430;
  }
}
</style>
