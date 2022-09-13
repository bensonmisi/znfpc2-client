<template>
    <v-container>
      <v-row>
          <v-col>
              <v-card>
                  <v-card-text class="d-flex">
                      <v-btn text to="dashboard">Dashboard</v-btn>
                     </v-card-text>
              </v-card>
          </v-col>
      </v-row>
      <v-row class="mt-5">
          <v-col>
                <v-card>
                <v-card-title>
                  My Inquires
                    <v-spacer/>
                    <InquiryAdd/>
                </v-card-title>
                <v-card-text>
                 <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Date
                        </th>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                           City
                        </th>
                        <th class="text-left">
                           Location
                        </th>
                         <th class="text-left">
                           Service
                        </th>
                          <th class="text-left">
                           Service Type
                        </th>
                        <th class="text-right">
                           
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="inquiries.length>0">
                        <tr
                        v-for="per in inquiries"
                        :key="per.id"
                        >
                        <td>{{ per.created_at | formatDate }}</td>
                        <td>{{ per.name }}</td>
                          <td>{{ per.city }}</td>
                            <td>{{ per.location }}</td>
                              <td>{{ per.service.name }}</td>
                              <td>{{ per.type.name||'' }}</td>
                        <td class="d-flex justify-end pt-2 pb-2">
                            <InquiryEdit :inquiry="per"/>
                            <InquiryView :inquiry="per"/>
                        </td>
                        </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="6" class="text-center red--text"> No Inquires Found as yet</td>
                            </tr>
                        </template>
                    </tbody>
                    </template>
                </v-simple-table>
                </v-card-text>
            </v-card>
          </v-col>
      </v-row>
           <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    </v-container>
</template>

<script>
export default {
layout:'user',
data(){
    return{
        overlay:false
    }
},
async fetch(){
    this.overlay=true
   await this.$store.dispatch('inquiry/getMyInquries') 
   this.overlay = false
},computed:{
    inquiries(){
        return this.$store.state.inquiry.inquires
    }
}
}
</script>

<style>

</style>