<template>
    <v-form>
      <h2> {{headerForm.title}} </h2>
      <v-text-field
      outlined
      placeholder="Название"
      >
      </v-text-field>
      <v-textarea
      outlined
      placeholder="Описание"
      >
      </v-textarea>
    </v-form>
</template>

<script>
export default {
  name: 'TodoAdd',
  props: {
    type: String,
  },
  computed: {
    headerForm() {
      if (this.type === 'change') {
        return [{
          title: 'Изменение задачи',
          buttonTitle: 'Изменить задачу',
        }];
      }
      return {
        title: 'Добавление задачи',
        buttonTitle: 'Добавить задачу',
      };
    },
  },
};
</script>

<style>

</style>
