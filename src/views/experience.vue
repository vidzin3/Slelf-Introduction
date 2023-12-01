<template>
    <div class="w-full lg:w-full mt-6">
        <div class="w-full flex justify-center gap-10">
            <button class="p-3 rounded-lg font-sans text-gray-500 font-bold" :class="{ 'active:text-white bg-white': $route.path.includes('/experience/exp') }" @click="router.push(`/experience/${exp}`)">My Experiences</button>
            <button class="p-3 rounded-lg font-sans text-gray-500 font-bold" :class="{ 'active:text-white bg-white': $route.path.includes('/experience/edu') }" @click="router.push(`/experience/${edu}`)">My Education</button>
        </div>
        <router-view v-slot="{ Component }">
            <transition name="scale" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <!-- <transition name="fade" mode="out-in">
            <div v-if="tabs === 'exp'" class="text-center mt-16 lg:pb-0 pb-16 w-[95%] m-auto h-full">
                <div class="w-1 absolute right-0 left-0 bg-orange-100 opacity-50 lg:h-[500px] m-auto"></div>
                <div class="flex flex-col gap-16 pt-0 lg:pt-10">
                    <div v-for="text in textinner" class="flex lg:gap-0 gap-5 items-center justify-center flex-col text-start lg:flex-row w-full" :key="text.id">
                        <h1 class="w-full lg:text-end text-white text-xl">{{ text.join }}</h1>
                        <div class="w-full hidden lg:flex">
                            <div class="w-4 h-4 flex shadow-2xl m-auto bg-white rounded-full">
                                <div class="w-2 h-2 z-20 shadow-2xl m-auto bg-red-500 rounded-full"></div>
                            </div>
                        </div>
                        <div class="w-full">
                            <h1 class="font-bold text-white text-xl">{{text.text[0]}}</h1>
                            <p class="text-white text-xl mt-4">{{ text.text[1] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <Transition name="fade" mode="out-in">
            <div v-if="tabs === 'edu'" class="text-center mt-16 lg:pb-0 pb-16 w-[95%] m-auto h-full">
                <div class="w-1 absolute right-0 left-0 bg-orange-100 opacity-50 lg:h-[500px] m-auto"></div>
                <div class="flex flex-col gap-16 pt-0 lg:pt-10">
                    <div v-for="text in textinner" class="flex lg:gap-0 gap-5 items-center justify-center flex-col text-start lg:flex-row w-full" :key="text.id">
                        <h1 class="w-full lg:text-end text-white text-xl">{{ text.join }}</h1>
                        <div class="w-full hidden lg:flex">
                            <div class="w-4 h-4 flex shadow-2xl m-auto bg-white rounded-full">
                                <div class="w-2 h-2 z-20 shadow-2xl m-auto bg-red-500 rounded-full"></div>
                            </div>
                        </div>
                        <div class="w-full">
                            <h1 class="font-bold text-white text-xl">{{text.text[0]}}</h1>
                            <p class="text-white text-xl mt-4">{{ text.text[1] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Transition> -->
    </div>
</template>

<script>
import {RouterView,useRouter} from 'vue-router'
    export default {
        components:{
            RouterView
        },
        setup(){
            const router = useRouter()

            return{
                router
            }
        },
        data(){
            return{
                tabs : false,
                exp: "exp",
                edu: "edu",
                textinner:[
                    {
                        id:1,
                        join:"March 2017 to present",
                        text:[
                            "COLORLIB",
                            "Senior Web DeveloperSanta monica, Los angeles"
                        ]
                    },
                    {
                        id:2,
                        join:"March 2017 to present",
                        text:[
                            "COLORLIB",
                            "Senior Web DeveloperSanta monica, Los angeles"
                        ]
                    },
                    {
                        id:3,
                        join:"March 2017 to present",
                        text:[
                            "COLORLIB",
                            "Senior Web DeveloperSanta monica, Los angeles"
                        ]
                    },
                ]
            }
        },
        methods:{
            tabMe(tab){
                this.tabs = tab
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active,.fade-enter-leave{
        transition: opacity 0.5s;
    }
    .fade-enter,.fade-enter-to{
        opacity: 0;
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