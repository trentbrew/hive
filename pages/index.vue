<script setup>
  import { VueFlow, useVueFlow, Handle, Position } from '@vue-flow/core'
  import { Background } from '@vue-flow/background'
  import { MiniMap } from '@vue-flow/minimap'
  import { Controls } from '@vue-flow/controls'
  import { NodeResizer } from '@vue-flow/node-resizer'
  import { initialElements } from './initial-elements.js'

  import '@vue-flow/node-resizer/dist/style.css'

  const { onConnect, addEdges } = useVueFlow()
  const elements = ref(initialElements)

  onConnect(params => addEdges(params))
  defineProps(['label'])
</script>

<template>
  <main class="fullscreen bg-white">
    <dialog id="my_modal_2" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-2xl flex">Settings</h3>
        <div class="py-4 m-4">
          <NodeInteractionControls />
        </div>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn btn-neutral">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <VueFlow
      v-model="elements"
      fit-view-on-init
      class="custom-node-flow"
      :default-edge-options="{ type: 'smoothstep' }"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.4"
      :max-zoom="4"
    >
      <Background pattern-color="#ccc" gap="8" />
      <template #node-resizable="resizableNodeProps">
        <NodeResizable :label="resizableNodeProps.label" />
      </template>
      <MiniMap />
    </VueFlow>
  </main>
</template>
