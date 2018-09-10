const CACHE_NAME='v1_cache_Gfonts',
urlsToCache=[
    './',
    'https://fonts.googleapis.com/css?family=Roboto',
    "https://fonts.googleapis.com/css?family=Roboto",
    "https://fonts.googleapis.com/css?family=Lato",
    "https://fonts.googleapis.com/css?family=Open+Sans",
    "https://fonts.googleapis.com/css?family=Kosugi",
    "https://fonts.googleapis.com/css?family=Oswald",
    "https://fonts.googleapis.com/css?family=Merriweather" ,
    "https://fonts.googleapis.com/css?family=Ubuntu",
    "https://fonts.googleapis.com/css?family=Lora",
    "https://fonts.googleapis.com/css?family=Lora|Metamorphous",
    "./style.css",
    "./scripts.js",
    "./img/icon_16.png",
    "./img/icon_48.png",
    "./img/icon_72.png",
    "./img/icon_76.png",
    "./img/icon_96.png",
    "./img/icon_120.png",
    "./img/icon_144.png",
    "./img/icon_180.png",
    "./img/icon_192.png",
    "./img/icon_512.png",
    "./img/icon_1024.png",
]

self.addEventListener('install', e=> {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache =>{
            return cache.addAll(urlsToCache)
            .then(()=> self.skipWaiting())
        })
        .catch(err=> console.log("Error to load cache",err))
    )
})

self.addEventListener('activate', e=> {
    const whiteList=[CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cachesNames=>{
            cachesNames.map(cacheName=>{
                if(whiteList.indexOf(cacheName)===-1){
                    return caches.delete(cacheName)
                }
            })
        })
        .then(()=>self.clients.claim())
    )
})

self.addEventListener('fetch', e=> {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                return res
            }
            return fetch(e.request)
        })
    )
})