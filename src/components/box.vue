<template>
    <section class="box">
        <slot></slot>
        <div
        @click="onBoxCLick"
        v-for="(box, index) in boxList"
        :key="index"
        @dragleave="dragleave"
        v-on:dragover="dragover($event, box)" v-on:drop="drop($event, box)"></div>
    </section>

</template>

<script>
export default {
    name: 'box',
    props: ['num'],
    computed: {
        boxList() {
            let num = this.$props.num || 0;
            const list = [];

            while (num) {
                list.push({ choose: false, index: num });
                num --;
            }

            return list;
        }
    },
    methods: {
            onBoxCLick(evt) {
            
                if (/^<img/.test(evt.target.outerHTML)) {
                    this.$emit('onBoxCLick', evt.target);
                }
        
            },
            dragover(evt, index) {
                evt.target.style.transform = 'scale(1.2, 1.2)'
                evt.dataTransfer.dropEffect = 'move';

                event.preventDefault();
            },
            dragleave(evt) {
                evt.target.style.transform = 'scale(1,1)';
            },
            drop(evt, box) {
            
                evt.target.style.transform = 'scale(1,1)';

                if (box.choose) return;

                try {
                    const info = JSON.parse(evt.dataTransfer.getData('info'));
                    if (info.id + 1 === box.index) {
                        box.choose = true;
                        const img = new Image(100, 100);
                        img.src = info.path;
                        evt.target.appendChild(img);
                    }
                } catch(e) {

                }
                

            }
    }
}
</script>

<style lang="less">
.box {
    width: 210px;
    height: auto;

    margin-left: 200px;
    display: flex;
    flex-wrap: wrap;

    > div {
        border: 1px solid seagreen;
        width: 100px;
        height: 100px;
        margin-right: 2px;

        transition: transform 1s ease;
    }

    >div>img {
    animation: headShake 1000ms both
    }


    @keyframes headShake {
    0% {
        transform: translateX(0);
    }

    6.5% {
        transform: translateX(-6px) rotateY(-9deg);
    }

    18.5% {
        transform: translateX(5px) rotateY(7deg);
    }

    31.5% {
        transform: translateX(-3px) rotateY(-5deg);
    }

    43.5% {
        transform: translateX(2px) rotateY(3deg);
    }

    50% {
        transform: translateX(0);
    }
}
}
</style>

