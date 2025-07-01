<template>
  <svg
    class="svg-icon"
    :fill="color"
    :style="{ width: size, height: size }"
    :viewBox="iconViewBox"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template v-if="Array.isArray(iconPath)">
      <path v-for="(path, index) in iconPath" :key="index" :d="path" />
    </template>
    <path v-else :d="iconPath" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  is: {
    type: String,
    default: 'notification'
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  size: {
    type: String,
    default: '24px'
  },
  viewBox: {
    type: String,
    default: null
  }
})

const iconPaths = {
  "play": {
    paths: "M8,5.14V19.14L19,12.14L8,5.14Z",
    viewBox: "0 0 24 24"
  },
  "home": {
    paths: [
      "m487.083 225.514-75.08-75.08v-86.73c0-15.682-12.708-28.391-28.413-28.391-15.669 0-28.377 12.709-28.377 28.391v29.941L299.31 37.74c-27.639-27.624-75.694-27.575-103.27.05L8.312 225.514c-11.082 11.104-11.082 29.071 0 40.158 11.087 11.101 29.089 11.101 40.172 0l187.71-187.729c6.115-6.083 16.893-6.083 22.976-.018l187.742 187.747a28.337 28.337 0 0 0 20.081 8.312c7.271 0 14.541-2.764 20.091-8.312 11.086-11.086 11.086-29.053-.001-40.158z",
      "M257.561 131.836c-5.454-5.451-14.285-5.451-19.723 0L72.712 296.913a13.977 13.977 0 0 0-4.085 9.877v120.401c0 28.253 22.908 51.16 51.16 51.16h81.754v-126.61h92.299v126.61h81.755c28.251 0 51.159-22.907 51.159-51.159V306.79c0-3.713-1.465-7.271-4.085-9.877L257.561 131.836z"
    ],
    viewBox: "0 0 512 512"
  },
  "search": {
    paths: "m10.1 17.3c1.6 0 3.1-.5 4.3-1.4l4.7 4.8c.4.4 1.1.4 1.6 0 .4-.5.4-1.2 0-1.6l-4.7-4.8c.8-1.2 1.3-2.6 1.3-4.2 0-3.9-3.2-7.1-7.2-7.1-3.9 0-7.1 3.2-7.1 7.1 0 4 3.2 7.2 7.1 7.2zm0-2.3c2.7 0 4.9-2.2 4.9-4.9 0-2.7-2.2-4.8-4.9-4.8-2.7 0-4.8 2.1-4.8 4.8 0 2.7 2.1 4.9 4.8 4.9z",
    viewBox: "0 0 24 24"
  },
  "history": {
    paths: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z",
    viewBox: "0 0 24 24"
  },
  "menu": {
    paths: [
      "M3,6H21V8H3V6M3,11H21V13H3V11Z",
      "M3,16H21V18H3V16Z"
    ],
    viewBox: "0 0 24 24"
  }
}

const iconData = computed(() => {
  return iconPaths[props.is] || iconPaths.play
})

const iconPath = computed(() => {
  return iconData.value.paths
})

const iconViewBox = computed(() => {
  return props.viewBox || iconData.value.viewBox
})
</script>

<style scoped>
.svg-icon {
  flex-shrink: 0;
  display: block;
}
</style>