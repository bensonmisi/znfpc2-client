<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      dark
      color ="blue darken-3 accent-4"
    >
    <div class="d-flex white justify-center pa-3">
               <img src="logo.jpg" width="90px"/>
               </div>
               
     <SideBar :menus="getMenus"/>
       <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="error" @click="logout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
       color="white"
      fixed
      app
      flat
      height="115px"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
     
      <v-toolbar-title v-text="title" />
      <v-spacer />
       <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          light
          v-bind="attrs"
          v-on="on"
          
        >
         Welcome: {{loggedInUser.profile.name}} {{loggedInUser.profile.surname}}
    
        </v-btn>
      </template>
      <v-list>
        <v-list-item router to="Profile">
           <v-list-item-action>
            <v-icon>mdi-account-cog</v-icon>
          </v-list-item-action>
           <v-list-item-content>
          <v-list-item-title>User Profile</v-list-item-title>
           </v-list-item-content>
        </v-list-item>
        <v-list-item router to="ChangePassword">
           <v-list-item-action>
            <v-icon>mdi-account-convert</v-icon>
          </v-list-item-action>
           <v-list-item-content>
          <v-list-item-title>Change Password</v-list-item-title>
           </v-list-item-content>
        </v-list-item>
         <v-list-item router  @click="logout">
           <v-list-item-action>
            <v-icon>mdi-power</v-icon>
          </v-list-item-action>
           <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
           </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
    <v-main class="grey lighten-4">
        <v-overlay :value="overlay">
         <div>
      <v-progress-circular
        indeterminate
        size="64"
        
      ></v-progress-circular>
         </div>
         <div>
       Looading 
         </div>
    </v-overlay>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
     
    
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      drawer: true,
      offset:true,
      fixed:true,
      items: [],
      title: 'Zimbabwe National Family Planning Council',
      overlay:false
    }
  },methods:{
  async logout(){
    await this.$auth.logout()
  }
  },
  computed:{
  ...mapGetters(['isAuthenticated', 'loggedInUser','getMenus']),
   }
}
</script>
