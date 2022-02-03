<template>
	<div class="about">
		<h1>{{ title }}</h1>
		<button @click="changeTitle">Cambiar titulo</button>
	</div>
</template>

<script>
import {
	onBeforeMount,
	onMounted,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
	onErrorCaptured,
	onRenderTracked,
	onRenderTriggered,
	onActivated,
	onDeactivated,
	ref
} from 'vue'

export default {
	setup () {
		const title = ref ( 'about' )
		
		onMounted ( () => {
			console.log ( 'onMounted' )
		} )
		onBeforeMount ( () => {
			console.log ( 'onBeforeMount' )
		} )
		onUpdated ( () => {
			console.log ( 'onUpdated' )
		} )
		onBeforeUnmount ( () => {
			console.log ( 'onBeforeUnmount' )
		} )
		onUnmounted ( () => {
			console.log ( 'onUnmounted' )
		} )
		onErrorCaptured ( () => {
			console.log ( 'onErrorCaptured' )
		} )
		onRenderTracked ( () => {
			console.log ( 'onRenderTracked' )
		} )
		onRenderTriggered ( () => {
			console.log ( 'onRenderTriggered' )
		} )
		onActivated ( () => {
			console.log ( 'onActivated' )
		} )
		onDeactivated ( () => {
			console.log ( 'onDeactivated' )
		} )
		
		return {
			title,
			changeTitle: () => title.value = 'New About'
		}
	},
}
</script>