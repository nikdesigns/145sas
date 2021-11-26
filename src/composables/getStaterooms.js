import { ref } from '@vue/reactivity';

const getStaterooms = () => {
  const staterooms = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/staterooms');
      if (!data.ok) {
        throw Error('no data available');
      }
      staterooms.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { staterooms, error, load };
};
export default getStaterooms;
