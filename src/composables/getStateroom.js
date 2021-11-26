import { ref } from '@vue/reactivity';

const getStateroom = (id) => {
  const stateroom = ref(null);
  const error = ref(null);
  const loading = ref(false);
  const load = async () => {
    try {
      loading.value = true;

      let data = await fetch('http://localhost:3000/staterooms/' + id);
      if (!data.ok) {
        throw Error(
          "We're sorry. The Web address you entered is not a functioning page on our site."
        );
      }
      stateroom.value = await data.json();
      loading.value = false;
    } catch (err) {
      error.value = err.message;
      loading.value = false;
      console.log(error.value);
    }
  };
  return { stateroom, error, loading, load };
};
export default getStateroom;
