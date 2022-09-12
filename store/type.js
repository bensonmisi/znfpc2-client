export const state =()=>({
    types:[]
})

export const mutations={
    setTypes(state,payload){
        state.types = payload
    }
}

export const actions={
    async getTypes({commit},payload){
        await this.$axios.get('administrator/types/'+payload).then((res)=>{
            commit('setTypes',res.data)
          })
    }
}