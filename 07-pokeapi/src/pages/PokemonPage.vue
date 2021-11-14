<template lang="">
    <div>
        <h1>¿Quien es este pokemon?</h1>
        <!--TODO: img --><PokemonPicture />
        <!--TODO: opciones --><PokemonOptions />
    </div>
</template>
<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    }
}
</script>
