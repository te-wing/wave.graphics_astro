<template>
  <Transition name="fade">
    <button v-show="showButton" @click="returnTop" class="back-to-top">
      <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill=currentColor>
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/>
      </svg>
    </button>
  </Transition>
</template>

<script>
  export default {
    data() {
      return {
        showButton: false,
        scrollPosition: 0,
        showAtPixel: 400,
      };
    },
    methods: {
      returnTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      handleScroll() {
        this.scrollPosition = window.scrollY;
        this.showButton = this.scrollPosition > this.showAtPixel;
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>

<style scoped lang='scss'>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    color: var(--foreground);
    background-color: var(--background-transparent);
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    backdrop-filter: blur(3px);
    border-color: var(--a-default);
    border-width: 2px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease; 
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>