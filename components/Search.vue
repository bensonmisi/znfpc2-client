<template>
<div>
   <v-btn small depressed class="success" rounded @click="addFunc">Filter</v-btn>
  <v-dialog v-model="addPermModel" width="300">
           <v-form v-model="valid" ref="form" lazy-validation>
       <v-card>
           <v-card-title>
               Filter Records
               <v-spacer/>
               <v-btn icon @click="addPermModel=false"><v-icon>mdi-close</v-icon></v-btn>
           </v-card-title>
           <v-card-text>
               
                           <v-text-field
                            label="Start Date"
                            type="date"
                            outlined
                            dense
                            v-model="form.startdate"
                            :rules="rule"
                        />
                         <v-text-field
                            label="End Date"
                            type="date"
                            outlined
                            dense
                            v-model="form.enddate"
                            :rules="rule"
                        />
                          
           </v-card-text>
           <v-card-actions>
               <v-btn rounded class="error" @click="addPermModel=false">Cancel</v-btn>
              <v-btn rounded class="primary" @click="Reset">Reset</v-btn>
               <v-btn rounded class="success" @click="submit" :loading="loading" :disabled="loading">Submit</v-btn>
           </v-card-actions>
       </v-card>
           </v-form>
      </v-dialog>
       <v-snackbar
      absolute
      :color="color"
      right
      top
      v-model="snackbar"
    >{{text}}</v-snackbar>
  </div>
</template>

<script>
export default {
    props:['id'],
 data(){
     return{
         addPermModel:false,
         valid:false,
         form:{
              startdate:'',
              enddate:''
         },
        rule:[v=>!!v || ' requried'],
         snackbar:false,
         color:'',
         text:'',
         loading:false
     }
 },methods:{
    
    async addFunc()
     {
            this.addPermModel = true
     },
     submit(){
         this.loading = true
         this.$store.dispatch('report/filterData',this.form)
         this.loading = false
     },
     Reset(){
          this.$refs.form.reset()
     }
 },computed:{
     
      

 }
}
</script>

<style>

</style>