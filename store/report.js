export const state=()=>({
    data:[]
})

export const mutations={
     setData(state,payload){
         state.data = payload
     }
}

export const actions={
    async getData({commit}){
        await this.$axios.get('administrator/analysis').then((res)=>{
            commit('setData',res.data)
          })
    },
    async filterData({commit},payload){
        await this.$axios.post('administrator/analysis',payload).then((res)=>{
            commit('setData',res.data)
          })
    }
}