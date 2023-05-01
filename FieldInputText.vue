<template>
	<input type="text" :value="modelValue" />
</template>
<script setup lang="ts">
defineProps<{
	modelValue: string | boolean;
}>();
</script>
