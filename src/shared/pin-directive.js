/* eslint-disable no-param-reassign */
// This is shorthand for beforeMount and updated lifecycle hooks
export default function (element, binding) {
    Object.keys(binding.value).forEach((individualPosition) => {
        element.style[individualPosition] = binding.value[individualPosition];
    });
    element.style.position = 'absolute';
}

// /* eslint-disable no-param-reassign */
// function applyStyle(element, binding) {
// Object.keys(binding.value).forEach((individualPosition) => {
//     element.style[individualPosition] = binding.value[individualPosition];
// });
// element.style.position = 'absolute';
// }

// export default {
//     // Update styles before mount
//     beforeMount(element, binding) {
//         // console.log('arg:', binding.arg, 'modifiers:', binding.modifiers);
//         applyStyle(element, binding);
//     },
//     // Update styles when they change i.e. click etc.
//     updated: (element, binding) => {
//         applyStyle(element, binding);
//     },
// };
