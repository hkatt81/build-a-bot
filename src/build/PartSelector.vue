<template>
    <div class="part" :class="position">
        <div class="copyright">{{ user.userName }}</div>
        <img @click="showPartInfoPage()" :src="selectedPart.src" title="arm"/>
        <!-- <img :src="selectedPart.src" @click="showPartInfo= !showPartInfo" title="arm"/> -->
        <button @click="selectPreviousPart()" class="prev-selector"></button>
        <button @click="selectNextPart()" class="next-selector"></button>
        <span v-pin:position.top.right class="sale" v-show="selectedPart.onSale">Sale!</span>
        <!-- <teleport to="#part-info" v-if="showPartInfo">
            <div>
                <div>{{ selectedPart.cost }}  {{ selectedPart.title }}
                    {{ selectedPart.type }}</div>
                <div>{{ selectedPart.description }}</div>
                <hr>
            </div>
        </teleport> -->
    </div>
  </template>

<script>
import pinDirective from '../shared/pin-directive';
// import availableParts from '../data/parts';

// const parts = availableParts.heads;

function getPreviousValidIndex(index, length) {
    const deprecatedIndex = index - 1;
    return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
    const incrementedIndex = index + 1;
    return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
    directives: {
        pin: pinDirective,
    },
    // Inject receives data from parent provide, so can be used
    inject: ['user'],
    props: {
        parts: { type: Array, required: true },
        position: {
            type: String,
            required: true,
            validator(value) {
                return ['left', 'right', 'top', 'bottom', 'center'].includes(value);
            },
        },
    },
    data() {
        return { selectedPartIndex: 0 };
        // return { selectedPartIndex: 0, showPartInfo: false };
        // showPartInfo is used with teleport to show element on screen
    },
    computed: {
        selectedPart() {
            return this.parts[this.selectedPartIndex];
        },
    },
    created() {
        this.emitSelectedPart();
    },
    updated() {
        this.emitSelectedPart();
    },
    methods: {
        emitSelectedPart() {
            // Emits an event which can be picked up by parent
            this.$emit('partSelected', this.selectedPart);
        },
        selectNextPart() {
            this.selectedPartIndex = getNextValidIndex(
                this.selectedPartIndex,
                this.parts.length,
            );
        },
        selectPreviousPart() {
            this.selectedPartIndex = getPreviousValidIndex(
                this.selectedPartIndex,
                this.parts.length,
            );
        },
        // showPartInfoPage is used instead of showPartInfo to browse to page
        showPartInfoPage() {
            // this.$router.push('/parts'); // < This is used for direct URLS no params
            // Below is used to pass params with named URL via code
            this.$router.push({
                name: 'Parts',
                params: {
                    id: this.selectedPart.id,
                    partType: this.selectedPart.type,
                },
            });
            // Can also pass name and params to router-link
        },
    },
};

</script>

<style scoped>
.part {
    position: relative;
    width: 165px;
    height: 165px;
    border: 3px solid #aaa;
}
.sale {
    color: white;
    background-color: red;
    padding: 3px;
}
.part-title {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: red;
    padding-top: 5px;
    top: -25px;
}
.part img {
    width: 165px;
    cursor: pointer;
}
.top {
    border-bottom: none;
}
.left {
    border-right: none;
}
.right {
    border-left: none;
}
.bottom {
    border-top: none;
}
.left img {
    transform: rotate(-90deg);
}
.right img {
    transform: rotate(90deg);
}
.prev-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    left: -28px;
    width: 25px;
    height: 171px;
}
.next-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    right: -28px;
    width: 25px;
    height: 171px;
}
.left .prev-selector:after,
.right .prev-selector:after {
    content: "\25B2";
}
.left .next-selector:after,
.right .next-selector:after {
    content: "\25BC";
}
.top .prev-selector:after,
.bottom .prev-selector:after,
.center .prev-selector:after {
    content: "\25C4";
}
.top .next-selector:after,
.bottom .next-selector:after,
.center .next-selector:after {
    content: "\25BA";
}
.center .prev-selector,
.center .next-selector {
    opacity: 0.8;
}
.left .prev-selector {
    top: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
}
.left .next-selector {
    top: auto;
    bottom: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
}
.right .prev-selector {
    top: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
}
.right .next-selector {
    top: auto;
    bottom: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
}
.highlight {
    border: 1px solid red;
}
.copyright {
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
}
</style>
