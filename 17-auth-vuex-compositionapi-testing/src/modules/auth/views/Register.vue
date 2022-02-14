<template>
<span class="login100-form-title p-b-41">
					Registro
				</span>
  <form class="login100-form validate-form p-b-33 p-t-5"
        @submit.prevent="onSubmit">

    <div class="wrap-input100 validate-input" data-validate="Ingrese su nombre">
      <input v-model="userForm.name" class="input100" type="text" placeholder="Nombre" required>
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Ingrese su email">
      <input v-model="userForm.email" class="input100" type="email" placeholder="Email" required>
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Ingrese su password">
      <input v-model="userForm.password" class="input100" type="password" placeholder="Contraseña" required>
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button type="submit" class="login100-form-btn">
        Crear cuenta
      </button>

    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'login' }">¿Ya tienes una cuenta?</router-link>
    </div>
  </form>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from "@/modules/auth/composables/useAuth";
import Swal from 'sweetalert2'

export default {
  setup() {
    const router = useRouter()
    const { createUser } = useAuth()

    const userForm = ref( {
      email: '' ,
      password: '' ,
      name: ''
    } )

    return {
      userForm ,

      //fn
      onSubmit: async () => {
        const { ok , message } = await createUser( userForm.value ) // return ok si todo ok , o return message con el error
        if ( !ok ) Swal.fire( 'Error msg: ' , message , 'error' )
        else await router.push( { name: 'no-entry' } )
        console.log( ok , message )
      }
    }
  }
}
</script>