import {ref} from 'vue'

const useCounter = (initValue = 1) => {
    const counter = ref(initValue)

    return {
        counter,

        increase: () => counter.value++,
        decrease: () => counter.value--
    }
}

export default useCounter