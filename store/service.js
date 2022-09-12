export const state =()=>({
    services:[]
})

export const mutations={
    setService(state,payload){
        state.services = payload
    }
}

export const actions={
    async getServices({commit}){
        await this.$axios.get('administrator/service').then((res)=>{
            commit('setService',res.data)
          })
    }
} 