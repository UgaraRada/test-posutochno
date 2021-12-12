<template>
    <v-form
      @submit.prevent="submitForm"
    >
      <h2 class="mb-2">Добавление задачи</h2>
      <v-text-field
        outlined
        placeholder="Название"
        v-model="title"
      >
      </v-text-field>
      <v-textarea
        outlined
        placeholder="Описание"
        v-model="description"
      />
      <v-btn-toggle
        v-model="status"
        class="d-flex justify-space-between"
        dense
        tile
        mandatory
        color="black"
      >
        <v-btn
          value="1"
          class="green lighten-2 mb-4"
        >
          Неважно
        </v-btn>
        <v-btn
          value="2"
          class="yellow lighten-3"
        >
          Срочно
        </v-btn>
        <v-btn
          value="3"
          class="red lighten-3"
        >
          Оч. срочно
        </v-btn>
      </v-btn-toggle>
      <v-btn
        type="submit"
        class="mb-3"
        block
        outlined
      >
        Добавить задачу
      </v-btn>
    </v-form>
</template>

<script>
import uniqid from 'uniqid';
import { mapState } from 'vuex';

export default {
  name: 'TodoAdd',
  props: {
    type: String,
  },
  data() {
    return {
      title: '',
      description: '',
      status: '',
    };
  },
  computed: {
    ...mapState(['todoList']),
  },
  watch: {
    todoList: {
      handler() {
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
      },
      deep: true,
    },
  },
  methods: {
    submitForm() {
      const newTodoObj = {
        id: uniqid(),
        title: this.title,
        description: this.description,
        status: this.status,
        checked: false,
      };
      this.clearFields();
      this.$store.commit('addNewTodo', newTodoObj);
    },
    clearFields() {
      this.title = '';
      this.description = '';
      this.status = '';
    },
  },
};
</script>
