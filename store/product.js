export const state =()=>({
    products:[]
})

export const mutations={
    setProducts(state,payload){
        state.products = payload
    }
}

export const actions={
    async getProducts({commit},payload){
        await this.$axios.get('administrator/products/'+payload).then((res)=>{
            commit('setProducts',res.data)
          })
    }
}