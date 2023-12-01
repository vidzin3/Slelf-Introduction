<template>
    <div class="w-full lg:w-full mt-5">
        <div class="flex gap-2 flex-col p-4 lg:p-0 sm:gap-5 lg:gap-5 md:gap-5 justify-center sm:flex-row md:flex-row lg:justify-start">
            <div v-for="file in data" class="border p-4 border-white flex shadow-xl flex-col gap-4 rounded-xl bg-white">
                <div class="text-4xl text-black">
                    <font-awesome-icon icon="fa-solid fa-diagram-project" />
                </div>
                <div class="flex flex-col gap-4">
                    <h1 class="text-black font-bold text-2xl" v-for="text in file.show">{{ text.Samllproject }}+</h1>
                    <h1 class="text-black text-xl">Total Samll Project</h1>
                </div>
            </div>
            <div v-for="file in data" class="border p-4 border-white shadow-xl flex flex-col bg-white gap-4 rounded-xl">
                <div class="text-4xl text-blue-700">
                    <font-awesome-icon icon="fa-solid fa-database" />
                </div>
                <div class="flex flex-col gap-4">
                    <h1 class="text-black font-bold text-2xl" v-for="text in file.show">{{ text.bigproject }}</h1>
                    <h1 class="text-black text-xl">Total Big Project</h1>
                </div>
            </div>
        </div>
        <div class="p-4 lg:p-0">
            <div class="w-full lg:w-full mt-5 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 rounded-xl">
                <a href="https://github.com/vidzin3">
                    <h1 class="text-white font-thin text-lg">More Project In Github</h1>
                </a>
            </div>      
        </div>
        <div class="p-4 lg:p-0">
            <div class="w-full lg:w-full mt-0 lg:mt-5 p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl">
                <h1 class="text-white font-thin text-lg">Host Project</h1>
            </div>      
        </div>
        <div class="w-full lg:w-full mt-5">
            <div>
                <div v-for="text in file" class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5">
                    <div v-for="texts in text" :key="texts.id">
                        <a :href="texts.link">
                            <img class="w-4/5 m-auto h-full rounded-xl bg-white p-1" :src="texts.img" alt="">
                            <div class="p-2">
                                <h1 class="text-center text-white text-xl">{{ texts.text }}</h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../database/project.json'
    import {onMounted, ref} from 'vue'
    export default {
        setup(){

            const file = ref(null)

            onMounted( () => {
                file.value = data.map(pro => pro.project)
            })

            return {
                data,
                file
            }
        }
    }
</script>