<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        cols="6"
        md="4"
        sm="3"
      >
        <v-card
          class="pa-2 mr-4"
        >
        <todo-form/>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="8"
        sm="6"
      >
        <v-card
          class="pa-2"
        >
          .casdfasdf
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoForm from './TodoForm.vue';

export default {
  name: 'TodoList',
  components: { TodoForm },
  data: () => ({

  }),
};
</script>
