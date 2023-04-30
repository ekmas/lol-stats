import { create } from "zustand";
import { routingValues } from "../data"

const useLeaderboardStore = create((set) => ({
    leaderboard: [],
    ready: false,
    reset: () => {
        set({ ready: false })
    },
    fetch: (region) => {
        fetch(`/.netlify/functions/fetchleaderboard?region=${routingValues[region]}`)
        .then(res => res.json())
        .then(data => {
            set({ leaderboard: data.entries })
            set({ ready: true })
        })
    }
}))

export default useLeaderboardStore