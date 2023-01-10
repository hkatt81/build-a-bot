<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <div class="robot-name">
            {{selectedRobot.head.title}}
            <span v-show="selectedRobot.head.onSale" class="sale">NEW YEAR SALE!</span>
        </div>
        <img :src="selectedRobot.head.src" title="head"/>
        <button @click="selectPrevHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm"/>
        <button @click="selectPrevLeftArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="torso"/>
        <button @click="selectPrevTorso()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="right arm"/>
        <button @click="selectPrevRightArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm()" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="base"/>
        <button @click="selectPrevBase()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBase()" class="next-selector">&#9658;</button>
      </div>
    </div>
  </div>

</template>

<script>
import availableParts from '../data/parts';
// NOTE FOR ABOVE SYNTAX;
// : is short for v-bind
// @ is short for v-on

// HELPER METHODS BELOW
// Takes index and length
// Checks if zero
// If it is zero, return to the last item
function getPrevValidIndex(index, length) {
    const decrementIndex = index - 1;
    return decrementIndex < 0 ? length - 1 : decrementIndex;
}
// Takes index and length
// Checks if it is the last one in the series
// If it is the last one, return to the first item
function getNextValidIndex(index, length) {
    const incrementedIndex = index + 1;
    return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
    name: 'RobotBuilder',
    data() {
        return {
            availableParts,
            // Initialize and set default for variables
            selectedHeadIndex: 0, // Set index to zero
            selectedLeftArmIndex: 0,
            selectedTorsoIndex: 0,
            selectedRightArmIndex: 0,
            selectedBaseIndex: 0,
        };
    },
    computed: {
        selectedRobot() {
            return {
                head: availableParts.heads[this.selectedHeadIndex],
                leftArm: availableParts.arms[this.selectedLeftArmIndex],
                torso: availableParts.torsos[this.selectedTorsoIndex],
                rightArm: availableParts.arms[this.selectedRightArmIndex],
                base: availableParts.bases[this.selectedBaseIndex],
            };
        },
    },
    methods: {
        selectNextHead() {
            // this.selectedHeadIndex += 1; // Basic incrementing a variable
            this.selectedHeadIndex = getNextValidIndex(
                this.selectedHeadIndex,
                availableParts.heads.length,
            );
        }, // Allows you to go around in circle pressing next
        selectPrevHead() {
            // this.selectedHeadIndex -= 1;  // Basic decrementing a variable
            this.selectedHeadIndex = getPrevValidIndex(
                this.selectedHeadIndex,
                availableParts.heads.length,
            );
        }, // Allows you to go around in circle pressing previous
        selectNextLeftArm() {
            this.selectedLeftArmIndex = getNextValidIndex(
                this.selectedLeftArmIndex,
                availableParts.arms.length,
            );
        },
        selectPrevLeftArm() {
            this.selectedLeftArmIndex = getPrevValidIndex(
                this.selectedLeftArmIndex,
                availableParts.arms.length,
            );
        },
        selectNextTorso() {
            this.selectedTorsoIndex = getNextValidIndex(
                this.selectedTorsoIndex,
                availableParts.torsos.length,
            );
        },
        selectPrevTorso() {
            this.selectedTorsoIndex = getPrevValidIndex(
                this.selectedTorsoIndex,
                availableParts.torsos.length,
            );
        },
        selectNextRightArm() {
            this.selectedRightArmIndex = getNextValidIndex(
                this.selectedRightArmIndex,
                availableParts.arms.length,
            );
        },
        selectPrevRightArm() {
            this.selectedRightArmIndex = getPrevValidIndex(
                this.selectedRightArmIndex,
                availableParts.arms.length,
            );
        },
        selectNextBase() {
            this.selectedBaseIndex = getNextValidIndex(
                this.selectedBaseIndex,
                availableParts.arms.length,
            );
        },
        selectPrevBase() {
            this.selectedBaseIndex = getPrevValidIndex(
                this.selectedBaseIndex,
                availableParts.arms.length,
            );
        },
    },
};
</script>

<style>
.part {
    position: relative;
    width: 165px;
    height: 165px;
    border: 3px solid #aaa;
}
.part img {
    width: 165px;
}
.top-row {
    display: flex;
    justify-content: space-around;
}
.middle-row {
    display: flex;
    justify-content: center;
}
.bottom-row {
    display: flex;
    justify-content: space-around;
    border-top: none;
}
.head {
    border-bottom: none;
}
.left {
    border-right: none;
}
.right {
    border-left: none;
}
.left img {
    transform: rotate(-90deg);
}
.right img {
    transform: rotate(90deg);
}
.bottom {
    border-top: none;
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
.right .next-selector {
    right: -3px;
}
.robot-name {
    position: absolute;
    top: -25px;
    text-align: center;
    width: 100%;
}
.sale {
    color: red;
}
</style>