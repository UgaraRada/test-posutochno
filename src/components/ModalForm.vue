<template>
  <v-form
    @submit.prevent="submitForm"
  >
    <h2 class="mb-2"> Изменение задачи </h2>
    <v-text-field
      outlined
      placeholder="Название"
      v-model="item.title"
    >
    </v-text-field>
    <v-textarea
      outlined
      placeholder="Описание"
      v-model="item.description"
    />
    <v-btn-toggle
      v-model="item.status"
      class="d-flex justify-space-between"
      dense
      tile
      mandatory
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
      Измененить задачу
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ModalForm',
  props: {
    item: Object,
  },

  data() {
    return {

    };
  },
  computed: {
    ...mapState(['todoList']),
  },
  methods: {
    submitForm() {
      const oldItemIndex = this.todoList.findIndex((it) => it.id === this.item.id);
      this.$set(this.todoList, oldItemIndex, this.item);
      this.$emit('modalVisible', false);
    },
  },
};
</script>
