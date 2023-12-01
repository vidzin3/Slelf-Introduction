<template>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 lg:h-screen">
    <header :class="{ 'scrolled z-20': isScrolled }">
      <div class="flex p-4 justify-between lg:flex-row flex-col">
          <div class="flex items-center justify-between">
              <h1 class="text-white text-2xl">MEETME</h1>
              <button class="flex lg:hidden flex-col gap-1" @click="menu = !menu">
                  <div class="w-6 h-[2px] bg-white"></div>
                  <div class="w-6 h-[2px] bg-white"></div>
                  <div class="w-6 h-[2px] bg-white"></div>
              </button>
          </div>
          <ul class="lg:flex gap-4 flex-col lg:flex-row items-center text-white" :class="{ 'flex': menu, 'hidden': !menu }">
              <li class="text-lg hover:text-black cursor-pointer transition-all p-2 rounded-lg" :class="{ 'active:text-white text-black bg-white': $route.path === '/' }">
                <RouterLink to="/" @click="menu = false" exact>Home</RouterLink>
              </li>
              <li class="text-lg hover:text-black cursor-pointer transition-all p-2 rounded-lg" :class="{ 'active:text-white text-black bg-white': $route.path === '/about' }">
                <router-link to="/about" @click="menu = false">About Me</router-link>
              </li>
              <li class="text-lg hover:text-black cursor-pointer transition-all p-2 rounded-lg" :class="{ 'active:text-white text-black bg-white': $route.path.includes('/experience') }">
                <RouterLink to="/experience/exp" @click="menu = false">Experience</RouterLink>
              </li> <!-- Corrected the spelling of 'Experience' -->
              <li class="text-lg hover:text-black cursor-pointer transition-all p-2 rounded-lg" :class="{ 'active:text-white text-black bg-white': $route.path === '/project' }">
                <router-link to="/project" @click="menu = false">Project</router-link>
              </li>
          </ul>
        </div>
    </header>
    <div class="lg:w-4/5 w-full m-auto">
      <RouterView v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<script>
  import {RouterView,RouterLink,useRouter} from 'vue-router'

  export default {
    components:{
      RouterView,
      RouterLink
    },
    setup(){
      const router = useRouter()
      return{
        router
      }
    },
    data(){
        return{
            menu : false,
            isScrolled : false,
            text: 'exp'
        }
    },
    mounted(){
        window.addEventListener("scroll",this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll(){
            this.isScrolled = window.scrollY > 50
        },
        routerPush(){
          this.menu = false
          this.router.push(`/experience/${this.text}`)
        }
    }
  }
</script>

<style scoped>
    header{
      background-color: transparent;
      transition: background-color 0.4s;
    }
    .scrolled {
        position: sticky;
        top: 0;
        background-color: black;
    }
    .scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>