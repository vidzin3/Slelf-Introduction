<template>
    <div class="w-full lg:w-full z-[0] flex relative shadow-lg p-5 mt-10 lg:mt-18 lg:p-0">
        <div class="bg-gradient-to-r lg:flex hidden -bottom-20 z-[-1] -left-20 absolute from-indigo-500 via-purple-500 to-pink-500 w-[200px] h-[200px] rounded-full"></div>
        <div class="flex md:flex-row lg:flex-row bg-white rounded-xl p-4 flex-col w-full">
            <div class="w-full p-4">
                <h1 class="text-xl lg:text-4xl md:text-4xl sm:text-4xl text-black font-bold">ABOUT MYSELF</h1>
                <p class="text-xl mt-8 text-black">
                    Hello David, you can call me Kmeng toch. Im 18. I work as a junior web developer, but I'm still in training and practicing. I started learning web development when I became a student in software engineering. I learned on my own at home and with a teacher. In the future, I want to be a full-stack web developer. I never give up because there's one person who always supports me and provides motivation.
                    <img class="w-14 lg:m-0 m-auto" src="https://thenounproject.com/api/private/icons/1545803/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="">
                </p>
            </div>
            <div class="w-full">
                <div v-for="test in text" class="flex flex-col gap-3 mt-3">
                    <p class="text-sm font-bold text-black">{{ test.text }} {{ test.progres }}%</p>
                    <div class="w-full border rounded-3xl p-1">
                        <div class="bg-gradient-to-r h-3 from-cyan-500 to-blue-500 rounded-3xl" :style="{width: test.progres + '%'}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                text : [
                    {
                        id: 1,
                        text:"HTML",
                        progres : 95
                    },
                    {
                        id: 2,
                        text:"CSS / TAILWIND",
                        progres : 100
                    },
                    {
                        id: 3,
                        text:"JAVASCRIP",
                        progres : 65
                    },
                    {
                        id: 4,
                        text:"VUE",
                        progres : 75
                    },
                    {
                        id: 5,
                        text:"VUE JS / VUEFITY",
                        progres : 70
                    },
                    {
                        id:6,
                        text: "C++",
                        progres:80,
                    },
                    {
                        id:7,
                        text: "JAVA",
                        progres:40
                    }
                ]
            }
        }
    }
</script>