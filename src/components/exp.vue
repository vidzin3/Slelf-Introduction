<template>
    <div class="w-full lg:w-full mt-6">
        <transition name="fade" mode="out-in">
            <div class="text-center mt-16 lg:pb-0 pb-16 w-[95%] m-auto h-full">
                <div class="w-1 absolute right-0 left-0 bg-orange-100 opacity-50 lg:h-[430px] m-auto"></div>
                <div class="flex flex-col gap-16 pt-0 lg:pt-10">
                    <div v-for="text in textinner" class="flex lg:gap-0 gap-5 items-center justify-center flex-col text-start lg:flex-row w-full" :key="text.id">
                        <h1 class="w-full lg:text-end text-white text-xl">{{ text.join }}</h1>
                        <div class="w-1/2 hidden lg:flex">
                            <div class="w-4 h-4 flex shadow-2xl m-auto bg-white rounded-full">
                                <div class="w-2 h-2 z-20 shadow-2xl m-auto bg-gray-500 opacity-30 rounded-full"></div>
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
    </div>
</template>

<script>
import {useRoute,useRouter} from 'vue-router'
    export default {
        setup(){
            const route = useRoute()
            const router = useRouter()

            return{
                route,
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
                        join:"21/5/2023",
                        text:[
                            "HTML / CSS",
                            "started HTML and CSS."
                        ]
                    },
                    {
                        id:2,
                        join:"3/7/2023",
                        text:[
                            "JavaScript / C++ / Java",
                            "Learn How to use Function, Build static Web with basic HTML/CSS/JS."
                        ]
                    },
                    {
                        id:3,
                        join:"10/8/2023",
                        text:[
                            "Tailwindcss / VueJs / PHP / MySql",
                            "Design Frontend With Framwork and add Backend Server."
                        ]
                    },
                ]
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
</style>