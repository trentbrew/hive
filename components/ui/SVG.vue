<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: '',
      requred: true,
    },
    size: {
      type: [Number, String],
      default: 120,
    },
    color: {
      type: String,
      default: 'gray',
    },
  })

  const svg = await fetch(`https://www.iconic.rest/api/icons/${props.name}`)
</script>

<template>
  <div
    v-html="svg[props.name]"
    :style="`
      color: ${props.color};
      width: ${props.size}px;
      height: ${props.size}px;
    `"
  ></div>
</template>
