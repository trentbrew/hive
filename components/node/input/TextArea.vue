<script setup>
  import { Handle, Position, useVueFlow } from '@vue-flow/core'

  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  })

  const { updateNodeData } = useVueFlow()

  function onInput(event) {
    updateNodeData(props.id, { text: event.target.value })
  }
</script>

<template>
  <textarea :value="data.text" @input="onInput" class="nodrag nopan"></textarea>

  <Handle id="a" type="source" :position="Position.Right" />
</template>
