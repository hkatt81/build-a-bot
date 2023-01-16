/* eslint-disable no-param-reassign */
export default {
    beforeMount(element, binding) {
        // console.log('arg:', binding.arg, 'modifiers:', binding.modifiers);
        // if (binding.arg !== 'position') return; // arg syntax

        // Object.keys(binding.modifiers).forEach((key) => { // arg syntax
        Object.keys(binding.value).forEach((individualPosition) => {
            // element.style[key] = '5px'; // arg syntax
            element.style[individualPosition] = binding.value[individualPosition];
        });
        element.style.position = 'absolute';
        // element.style.bottom = '5px';
        // element.style.right = '5px';
    },
};
