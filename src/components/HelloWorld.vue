<template>
  <div class="hello">
    <menuOwn></menuOwn>
    <box num="4" @onBoxCLick="onBoxCLickAction">
      <span>this is img box</span>
      </box>
  </div>
</template>

<script>
import menuOwn from './menu.vue';
import box from './box.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: { menuOwn, box },
  methods: {
    onBoxCLickAction(target) {

      const zIndex = target.parentNode.style.zIndex;

      target.parentNode.style.zIndex = zIndex === '1' ? 0 : 1;

      target.style.transform = target.style.transform === 'scale(5, 5)'
      ? 'scale(1, 1)'
      : 'scale(5, 5)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

.hello {
  display: flex;
}
</style>
