<template>

  <nav class="bg-[#171717] h-14 w-full flex  bg-opacity-25 text-bold text-title justify-evenly border-b-2 shadow-md border-b-[#27272A]">
    <a href="https://http.cat/404" target="_blank" class="mt-3 transition-all delay-150 font-bold text-lg"> sethh. </a>
    <a href="https://http.cat/404" target="_blank" class="mt-3 transition-all delay-150">home</a>
    <a href="https://http.cat/404" target="_blank" class="mt-3 transition-all delay-150">technologies</a>
    <a href="https://http.cat/404" target="_blank" class="mt-3 transition-all delay-150">projects</a>
    <a href="https://http.cat/404" target="_blank" class="mt-3 transition-all delay-150">hoa</a> 

</nav>

      <div class="self-center max-w-full float-right mt-40 mr-[14rem] grid grid-cols-1 grid-rows-1">
              <img src="./assets/me.jpg" class="shadow rounded-full h-64 w-64 border-none row-start-1 col-start-1 ">
              <div id="statusColor" class="bg-transparent shadow-lg h-8 w-8 rounded-full row-start-1 col-start-1 mt-auto ml-auto mr-4 mb-7"></div> 
            </div>
   
        <h1 v-on:click="test()" class="float-left font-bold text-xl mt-[13rem] ml-[5rem] text-title">
          ✨ sethh silver <br>
        </h1>
        <p class="ml-[6rem] font-semibold text-lg mt-[16rem] text-p">
         Hello! I'm a 16 Year old guy Named Sethh, I code stuff in <span class="bg-gry-400 shadow-lg drop-shadow-lg text-title px-3 py-1 text-sm inline-block rounded-lg"> #html </span> <span class="bg-gry-400 text-title px-3 py-1 text-sm inline-block shadow-lg drop-shadow-lg rounded-lg"> #js </span> <span class="bg-gry-400 shadow-lg drop-shadow-lg text-title px-3 py-1 text-sm inline-block rounded-lg"> #css </span> <span class="bg-gry-400 shadow-lg drop-shadow-lg text-title px-3 py-1 text-sm inline-block rounded-lg"> #python </span>
          <span class="bg-gry-400 shadow-lg drop-shadow-lg ml-2  text-title px-3 py-1 text-sm inline-block rounded-lg"> #lua </span>   . <br>
          You can can check stuff i've done in this <a href="#projects" class="text-blue font-semibold hover:cursor-pointer active:no-underline"> page </a> and you can check technologies i use in this <a href="#tech" class="text-blue font-semibold  hover:cursor-pointer active:no-underline"> page </a>
          <br>
          You can check what im doing at down below,  if you want to see most retarded people on internet. You can check my <a href="#hoa" class="text-blue font-semibold active:no-underline"> hoa </a> page. and <span id="hello"> I'm currently listening to <a id="statusText" class="text-gry-100 font-normal"> <a id="song" class="text-gry-100">  </a> by <a id="artist" class="text-gry-100">  </a> on <a id="album" class="text-gry-100">  </a>  </a> </span>
         <br>
         <br>
           <span class="text-title" id="status"></span>
         </p>


         <section href="#tech" class="mt-6">
         <h3 class=" text-gray-400 dark:text-neutral-700 px-4 text-lg font-medium uppercase ml-20">Technologies I use</h3>
          <div class="mt-4 grid gap-4 ml-24 sm:grid-cols-3 md:grid-cols-4">
            <div v-for="tech in bettertech" :key="tech.id" class="w-44 h-12  rounded-md focus-ring overflow-x-hidden text-[#c8c8c8] transition-colors p-4 hover:bg-gray-100 dark:hover:bg-neutral-800/40 items-center justify-between overflow-hidden flex space-x-2">{{ tech.name }} <img class=" h-8 w-8 invert" :src="tech.img"> </div>
          </div>
         </section>
         
         <section href="#projects" class="mt-6">
           <h3 class=" text-gray-400 dark:text-neutral-700 px-4 text-lg font-medium uppercase ml-20 pb-4">Projects I've done</h3>
               <div class="mt-4 grid gap-2 ml-24 sm:grid-cols-3 md:grid-cols-3"> 

                 <div class="bg-[#1b1b1b] bg-neutral-900hover:bg-neutral-800/40 hover:cursor-pointer w-96 h-84 text-[#c8c8c8]">
                 <img class="w-full rounded-md " src="./assets/jung.png">
                 <div class="text-title font-semibold px-6 py-4">
                   <div class="font-bold text-xl mb-2"> Hello There!</div>
                   <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illo magnam fuga. Illo mollitia enim quas iste fuga suscipit, nostrum similique distinctio ab amet ea sapiente laboriosam nesciunt aspernatur odit.
                   </p>
                 </div>
                 </div>

                
                 <div class="bg-[#1b1b1b] bg-neutral-900hover:bg-neutral-800/40 hover:cursor-pointer w-96 h-84 text-[#c8c8c8]">
                 <img class="w-full rounded-md " src="./assets/jung.png">
                 <div class="text-title font-semibold px-6 py-4">
                   <div class="font-bold text-xl mb-2"> Hello There!</div>
                   <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illo magnam fuga. Illo mollitia enim quas iste fuga suscipit, nostrum similique distinctio ab amet ea sapiente laboriosam nesciunt aspernatur odit.
                   </p>
                 </div>
                 </div>

                 
                 <div class="bg-[#1b1b1b] bg-neutral-900hover:bg-neutral-800/40 hover:cursor-pointer w-96 h-84 text-[#c8c8c8]">
                 <img class="w-full rounded-md " src="./assets/jung.png">
                 <div class="text-title font-semibold px-6 py-4">
                   <div class="font-bold text-xl mb-2"> Hello There!</div>
                   <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illo magnam fuga. Illo mollitia enim quas iste fuga suscipit, nostrum similique distinctio ab amet ea sapiente laboriosam nesciunt aspernatur odit.
                   </p>
                 </div>
                 </div>
               </div>
               
               
         </section>
               
         <section href="#socials" class="mt-6">
                      <h3 class=" text-gray-400 dark:text-neutral-700  text font-medium uppercase text-center ml-6 mb-5">Contact ME</h3>
             <div class="grid grid-col-3 pl-5 justify-center content-center" v-for="social in socials" :key="social.id"> 
                <h5 class="flex  text-center"> <a target="_blank" class="text-sm font-semibold text-indigo-400" :href="social.url"> {{ social.name }} </a> </h5>  
                </div>


         </section>

        

</template>
<script>
import tech from './jsons/techs.json'
import autism from './jsons/hoa.json'
import socials from './jsons/socials.json'
export default {
  data() {
    return {
      
      color: "#747f8d",
      techs: [],
      spotify: [],
      bettertech: tech,
      autism: autism,
      socials: socials,
      activity: [],
      vsCodeAppID: "",
      // vscActivity: data.activites.find(activity => activity.application_id == vsCodeAppID),
      daataa: []

    };
  },
  async mounted() {
    this.checkUser();
    this.status();
    this.songCheck();
   // this.getTech();
  // this.activityCheck();
   //this.returnData();
  },
  methods: {
    async checkUser() {
      fetch("https://api.lanyard.rest/v1/users/920364039568236565")
        .then((res) => res.json())
        .then(({data}) => {
          document.getElementById("statusColor").style.backgroundColor = {
            online: "#43b581",
            dnd: "#f04747",
            idle: "#fAA61a",
            offline: "#747f8d",
          }[data.discord_status];
        })
    },
    async status () {
      fetch("https://api.lanyard.rest/v1/users/920364039568236565")
      .then((res) => res.json())
      .then(({data}) => { 
          document.getElementById('status').innerText = data.discord_status.replace("dnd", "Do not disturb").replace("idle", "Idle").replace("online", "Online").replace("offline", "Offline")
    })
    },
    async songCheck() {
      fetch("https://api.lanyard.rest/v1/users/920364039568236565")
      .then((res) => res.json())
      .then(({data}) => {
        if(!data.spotify) {
                  document.getElementById('hello').innerText = "I'm currently not listening to anything."
        } else {
                  document.getElementById('song').innerText = data.spotify.song
                  document.getElementById('artist').innerText = data.spotify.artist
                  document.getElementById('album').innerText = data.spotify.album
          }
        },
        
      )
      


    },
    async activityCheck() {
      fetch("https://api.lanyard.rest/v1/users/920364039568236565")
      .then((res) => res.json())
      .then(({data}) => {
        if(!this.vscActivity) {
          console.log("no")

        } else {
          console.log("yes", this.vscActivity)
        }
      })
    },

        async returnData() {
      fetch("https://api.lanyard.rest/v1/users/920364039568236565")
      .then((res) => res.json())
      .then(({data}) => {
        this.daataa = data
      })
  }
  },
};
</script>
