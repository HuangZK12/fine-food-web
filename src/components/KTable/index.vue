<template>
	<div class="table-container">
		<el-table v-bind="$attrs" :data="data" @selection-change="$emit('select',$event)" border style="width: 100%">
			<slot></slot>
		</el-table>
	</div>
</template>
<script setup>
const props = defineProps({
	data: {
		type: Array,
		required: true,
		default: () => [],
	}
})

</script>

<style lang="scss" scoped>
.table-container {
	// height:calc(100% - 64px);
}
</style>