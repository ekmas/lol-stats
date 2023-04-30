import { create } from "zustand";
import { generalRegion, routingValues } from "../data"

const useSummonerStore = create((set, get) => ({
    username: null,
    id: null,
    puuid: null,
    summonerInfo: {
        name: null,
        pfp: null,
        level: null
    },
    mastery: [],
    rank: [],
    matches: [],
    ready: false,
    reset: () => {
        set({ ready: false })
        set({ puuid: '' })
        set({ matches: [] })
    },
    fetch: (username, region) => {
        fetch(`/.netlify/functions/fetchplayer?region=${routingValues[region]}&username=${username}`)
            .then(response => response.json())
            .then(data => {
                set({ summonerInfo: { name: data.name, pfp: data.profileIconId, level: data.summonerLevel }})
                set({ id: data.id })
                set({ puuid: data.puuid })
                set({ username: data.name })
                
                fetch(`/.netlify/functions/fetchmastery?region=${routingValues[region]}&id=${get().id}`)
                    .then(response => response.json())
                    .then(data => {
                        set({ mastery: data })
                    })

                fetch(`/.netlify/functions/fetchrank?region=${routingValues[region]}&id=${get().id}`)
                    .then(response => response.json())
                    .then(data => {
                        set({ rank: data })
                    })
                    .catch(error => {
                        console.log(error)
                    })
                
                if(get().summonerInfo.level > 10){
                    fetch(`/.netlify/functions/fetchallmatches?region=${generalRegion[region]}&puuid=${get().puuid}&start=0`)
                        .then(response => response.json())
                        .then(data => {
                        let index = data.length < 15 ? data.length : 15
                
                        let matches = data.slice(0, index)
        
                        let matcheslinks = []
        
                        for(let i = 0; i < matches.length; i++){
                            matcheslinks.push(`/.netlify/functions/fetchmatch?region=${generalRegion[region]}&match=${matches[i]}`)            
                        }
        
                        Promise.all(matcheslinks.map(url =>
                        fetch(url)
                            .then(checkStatus)
                            .then(parseJSON)
                            .catch(error => {
                                console.log(error)
                            })
                        ))
                        .then(data => {
                            set({ matches: data })
                            set({ ready: true })
                        })
                        .catch(error => {
                            console.log(error)
                        })
        
                        function checkStatus(response) {
                            if (response.ok) {
                                return Promise.resolve(response);
                            } else {
                                return Promise.reject(new Error(response.statusText));
                            }
                        }
                
                        function parseJSON(response) {
                            return response.json();
                        }   
                    })
                }else{
                    set({ ready: true })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
}))

export default useSummonerStore