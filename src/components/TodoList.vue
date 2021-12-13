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
          <button
            v-for="it in tabs"
            :key="it"
            :class="currentTab === it && 'currentTab__active'"
            @click="currentTab = it"
            class="pa-2 mb-4"
          >
          {{ it }}
          </button>
          <div
            v-for="it in currentList"
            :key="it.id"
            class="d-flex card"
          >
            <div :class="[
                it.status == 3 ? 'card_card-status__red':
                it.status == 2 ? 'card_card-status__yellow' :
                'card_card-status__green'
              ]"
              class="card_card-status"
            />
            <div class="flex-grow-1">
              <div class="card_content-wrapper">
                <v-checkbox
                  v-model="it.checked"/>
                <h3 class="mr-auto"> {{it.title}} </h3>
                <button @click="openEditModal(it)">
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </button>
              </div>
              <div class="card_content-wrapper">
                <p class="mr-auto"> {{it.description}} </p>
                <button @click="removeItem(it.id)">
                  <v-icon>
                    mdi-delete-outline
                  </v-icon>
                </button>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      class="modalForm"
      v-model="modalVisible"
      hide-overlay
      scrollable
      max-width="400"
    >
      <v-card
      class="pa-4"
      >
        <modal-form
        @modalVisible="closeEditModal"
        :item="editItem"
        />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import TodoForm from './TodoForm.vue';
import ModalForm from './ModalForm.vue';

export default {
  name: 'TodoList',
  components: { TodoForm, ModalForm },
  data: () => ({
    tabs: ['Текущие задачи', 'Выполненые задачи'],
    currentTab: 'Текущие задачи',
    showEditedItem: false,
    modalVisible: false,
    editItem: '',
  }),
  computed: {
    ...mapGetters(['sortedTodoList']),
    todoListActive() {
      return this.sortedTodoList.filter((it) => !it.checked);
    },
    todoListCompleted() {
      return this.sortedTodoList.filter((it) => it.checked);
    },
    currentList() {
      const tabs = {
        'Текущие задачи': this.todoListActive,
        'Выполненые задачи': this.todoListCompleted,
      };
      return tabs[this.currentTab];
    },
  },
  methods: {
    removeItem(id) {
      this.$store.commit('removeItem', id);
    },
    openEditModal(it) {
      this.modalVisible = true;
      this.editItem = JSON.parse(JSON.stringify(it));
    },
    closeEditModal(val) {
      this.modalVisible = val;
    },
  },
};
</script>

<style scoped lang="scss">
  .card {
    margin-bottom: 10px;
    padding: 0 5px;
    border: 1px solid grey;
    border-radius: 8px;
  }

  .card_content-wrapper {
    display: flex;
    align-items: center;
  }

  .card_card-status {
    width: 10px;
    border-radius: 4px;
    margin-right: 10px;

    &__green {
      background-color: #81C784
    }

    &__yellow {
      background-color: #FFF59D ;
    }

    &__red {
    background-color: #EF9A9A;
    }
  }

  .currentTab__active {
    background-color: rgb(213, 213, 213);
    border-radius: 0.2rem;
  }

</style>
