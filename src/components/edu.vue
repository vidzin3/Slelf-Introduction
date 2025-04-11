<template>
    <div class="w-full lg:w-full mt-6">
        <Transition name="fade" mode="out-in">
            <div class="text-center mt-16 lg:pb-0 pb-16 w-[95%] m-auto h-full">
                <div class="w-1 absolute right-0 left-0 bg-orange-100 opacity-50 lg:h-[430px] m-auto"></div>
                <div class="flex flex-col gap-16 pt-0 lg:pt-10">
                    <div v-for="text in textinner" class="flex lg:gap-0 gap-5 items-center justify-center flex-col text-start lg:flex-row w-full" :key="text.id">
                        <h1 class="w-full lg:text-end text-white text-xl">{{ text.join }}</h1>
                        <div class="w-1/2 hidden lg:flex">
                            <div class="w-4 h-4 flex shadow-2xl m-auto bg-white rounded-full">
                                <div class="w-2 h-2 z-20 shadow-2xl m-auto bg-gray-400 rounded-full"></div>
                            </div>
                        </div>
                        <div class="w-full">
                            <h1 class="font-bold text-white text-xl">{{text.text[0]}}</h1>
                            <p class="text-white text-xl mt-4">{{ text.text[1] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tabs : false,
                exp: "exp",
                edu: "edu",
                textinner:[
                    {
                        id:1,
                        join:"2010 to 2016",
                        text:[
                            "Primary School",
                            "Grade 1 - 6​"
                        ],
                        icon:[]
                    },
                    {
                        id:2,
                        join:"2017 to 2022",
                        text:[
                            "High School",
                            "Grade 7 - 12, Pass BacII in 2022"
                        ],
                        icon:[]
                    },
                    {
                        id:3,
                        join:"2022 to present",
                        text:[
                            "University",
                            "NUBB / Year 3, Semester 2"
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