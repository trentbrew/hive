<script setup>
  import { Handle, Position } from '@vue-flow/core'
  import { NodeResizer } from '@vue-flow/node-resizer'

  defineProps(['label'])

  const dims = ref({ width: 512, height: 512 })

  const limits = computed(() => {
    return {
      min: {
        width: dims.value.width / 4,
        height: dims.value.height / 4,
      },
      max: {
        width: dims.value.width * 1.5,
        height: dims.value.height * 1.5,
      },
    }
  })
</script>

<template>
  <NodeResizer :min-width="limits.min.width" :min-height="limits.min.height" />
  <Handle type="target" :position="Position.Left" />
  <div class="p-4 center bg-black">
    <div>
      <img src="https://vueflow.dev/favicons/android-chrome-512x512.png" />
    </div>
  </div>
  <Handle type="source" :position="Position.Right" />
</template>
