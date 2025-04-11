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
                            <h1 class="font-bold text-white text-xl">{{text.title}}</h1>
                            <p class="text-white text-xl mt-4" v-for="item in text.text">- {{ item }}</p>
                            <div v-if="Object.keys(text.icon).length > 0">
                                <div class="flex flex-row">
                                    <template v-for="item in text.icon" class="flex">
                                        <div class="w-10 h-10 text-center flex items-center justify-center rounded-lg text-black bg-gray-100 cursor-pointer shadow-lg">
                                            <font-awesome-icon :icon="item" />
                                        </div>
                                    </template>
                                </div>
                            </div>
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
                        join:"17/12/2023",
                        title:"Project E-Clinic",
                        text:[],
                        icon:[]
                    },
                    {
                        id:2,
                        join:"N/09/2024",
                        title:"Project One Winder Service",
                        text:[],
                        icon:[]
                    },
                    {
                        id:3,
                        join:"01/01/2025",
                        title:"Project Currently worked",
                        text:[
                            "DEF Ministry Of Econamic and Finance PUSAT",
                            "Restaurant Management",
                            "CP HR Management"
                        ],
                        icon:[]
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