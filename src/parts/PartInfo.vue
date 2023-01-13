<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script>
import parts from '../data/parts';

export default {
    name: 'PartInfo',
    props: {
        partType: { type: String },
        id: {
            type: [Number, String], // Allows Number or String type
            validator(value) {
                return Number.isInteger(Number(value));
            },
        },
    },
    computed: {
        part() {
            // couples component with router, doesn't work with child comp.
            const { partType, id } = this; // Only need this if routes are props
            // const { partType, id } = this.$route.params; // Without props: true in routes

            // Access parts array by part Type
            // find part.id in the part
            // cast the id to an int to match type of part.id
            return parts[partType].find((part) => part.id === +id);
        },
    },
};
</script>
