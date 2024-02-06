<script setup>
  import { VueFlow, useVueFlow } from '@vue-flow/core'
  import { Background } from '@vue-flow/background'
  import { Controls } from '@vue-flow/controls'
  import { MiniMap } from '@vue-flow/minimap'
  import { initialElements } from './initial-elements.js'

  const { onConnect, addEdges } = useVueFlow()

  const elements = ref(initialElements)

  onConnect(params => addEdges(params))
</script>

<template>
  <main class="fullscreen bg-white">
    <dialog id="my_modal_2" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-2xl flex">Settings</h3>
        <div class="py-4 m-4">
          <InteractionControls />
        </div>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn btn-neutral">Close</button>
          </form>
          ``
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <VueFlow
      v-model="elements"
      class="basicflow"
      :default-edge-options="{ type: 'smoothstep' }"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.2"
      :max-zoom="4"
      fit-view-on-init
    >
      <Background pattern-color="#ccc" gap="8" />
      <MiniMap />
    </VueFlow>
  </main>
</template>
