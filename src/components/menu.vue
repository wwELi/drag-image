<template>
    <section class="menu-own">
        <img v-for="(img, index) in imgs" :key="index" :src="img" v-on:dragstart="ondragstart($event, img, index)"/>
    </section>
</template>

<script>

    import img1 from '../assets/imgs/1.jpg';
    import img2 from '../assets/imgs/2.jpg';
    import img4 from '../assets/imgs/4.jpg';

    export default {
        name: 'menuOwn',
        data() {
            return {
                name: 'meun',
                imgs: [img1, img4, img2]
            }
        },
        computed: {
        
        },
        methods: {
            ondragstart(evt, src, index) {

                evt.dropEffect = "move";
                evt.dataTransfer.setData('info', JSON.stringify({ path: src, id: index }));
            }
        }
    }
</script>

<style lang="less">
  .menu-own {
      width: 100px;

      display: flex;
      flex-direction: column;

      > img {
          height: 100px;
      }

      > div {
          width: 200px;
          height: 200px;
          border: 1px solid seagreen;

      }

      > div:-moz-drag-over {
            border: 1px solid black;
        }

        > div:drag-over {
            border: 1px solid black;
        }
        > div:-drag-over {
            border: 1px solid black;
        }

  }
</style>


