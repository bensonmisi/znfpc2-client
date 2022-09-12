export const state =()=>({
    roles:[],
    modules:[],
    submodules:[],
    permissions:[]
})

export const mutations={
    setRoles(state,payload){
        state.roles = payload
    },
    setModules(state,payload){
        state.modules = payload
    },
    setSubmodules(state,payload){
        state.submodules = payload
    },
    setPermissions(state,payload){
        state.permissions = payload
    }
}

export const actions={
    async getRoles({commit},payload){
        await this.$axios.get('administrator/roles').then((res)=>{
            commit('setRoles',res.data)
          })
    },
    async getAssignedModules({commit},payload){
        await this.$axios.get('administrator/assignmodule/'+payload).then((res)=>{
            commit('setModules',res.data)
        })
    },
    async getAssignedSubmodules({commit},payload){
        await this.$axios.get('administrator/assignsubmodule/'+payload.roleId+'/'+payload.id).then((res)=>{
            commit('setSubmodules',res.data)
        })
    },
    async getAssignedPermissions({commit},payload){
        await this.$axios.get('administrator/assignpermission/'+payload.roleId+'/'+payload.id).then((res)=>{
            commit('setPermissions',res.data)
        })
    }
}