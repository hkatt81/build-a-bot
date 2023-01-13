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
    computed: {
        part() {
            const { partType, id } = this.$route.params;
            // Access parts array by part Type
            // find part.id in the part
            // cast the id to an int to match type of part.id
            return parts[partType].find((part) => part.id === +id);
        },
    },
};
</script>
