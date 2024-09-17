<template>
  <div class="container">
    <h1>Gerenciamento de Computadores</h1>

    <!-- Formulário para adicionar/editar computador -->
    <div class="card">
      <h2>{{ editing ? "Editar Computador" : "Adicionar Computador" }}</h2>
      <form @submit.prevent="saveComputador" class="computador-form">
        <div class="form-group">
          <label>Nome do Computador</label>
          <input v-model="newComputador.nome" placeholder="Nome do Computador" required />
        </div>
        <div class="form-group">
          <label>Cor</label>
          <input v-model="newComputador.cor" placeholder="Cor do Computador" required />
        </div>
        <div class="form-group">
          <label>Data de Fabricação</label>
          <input v-model="newComputador.dataFabricacao" type="number" placeholder="Ano de Fabricação" required />
        </div>

        <!-- Periféricos -->
        <div class="form-group">
          <h3>Periféricos</h3>
          <div v-for="(periferico, index) in newComputador.perifericos" :key="index" class="periferico">
            <input v-model="periferico.nome" placeholder="Nome do Periférico" required />
            <button @click.prevent="removePeriferico(index)" class="btn-remove">Remover</button>
          </div>
          <button @click.prevent="addPeriferico" class="btn-add">Adicionar Periférico</button>
        </div>

        <button type="submit" class="btn-save">{{ editing ? "Salvar Alterações" : "Adicionar Computador" }}</button>
        <button v-if="editing" @click="resetForm" class="btn-cancel">Cancelar</button>
      </form>
    </div>

    <!-- Lista de computadores -->
    <div class="card">
      <h2>Lista de Computadores</h2>
      <ul class="computador-list">
        <li v-for="computador in computadores" :key="computador.id" class="computador-item">
          <div class="computador-details">
            <p><strong>Nome:</strong> {{ computador.nome }}</p>
            <p><strong>Cor:</strong> {{ computador.cor }}</p>
            <p><strong>Data de Fabricação:</strong> {{ computador.dataFabricacao }}</p>
            <h4>Periféricos:</h4>
            <ul>
              <li v-for="periferico in computador.perifericos" :key="periferico.id">
                {{ periferico.nome }}
              </li>
            </ul>
          </div>
          <div class="computador-actions">
            <button @click="editComputador(computador)" class="btn-edit">Editar</button>
            <button @click="deleteComputador(computador.id)" class="btn-delete">Excluir</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      computadores: [],
      newComputador: {
        nome: '',
        cor: '',
        dataFabricacao: '',
        perifericos: [] // Lista de periféricos do computador
      },
      editing: false,
    };
  },
  mounted() {
    this.fetchComputadores();
  },
  methods: {
    async fetchComputadores() {
      const response = await api.get('/computador');
      this.computadores = response.data;
    },
    async saveComputador() {
      if (this.editing) {
        await api.put(`/computador/${this.newComputador.id}`, this.newComputador);
      } else {
        await api.post('/computador', this.newComputador);
      }
      this.resetForm();
      this.fetchComputadores();
    },
    addPeriferico() {
      this.newComputador.perifericos.push({ nome: '' });
    },
    removePeriferico(index) {
      this.newComputador.perifericos.splice(index, 1);
    },
    editComputador(computador) {
      this.newComputador = { ...computador, perifericos: [...computador.perifericos] };
      this.editing = true;
    },
    async deleteComputador(id) {
      await api.delete(`/computador/${id}`);
      this.fetchComputadores();
    },
    resetForm() {
      this.newComputador = { nome: '', cor: '', dataFabricacao: '', perifericos: [] };
      this.editing = false;
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.computador-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.periferico {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.btn-save, .btn-add, .btn-edit, .btn-delete, .btn-remove, .btn-cancel {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.btn-save {
  background-color: #28a745;
  color: white;
}

.btn-add {
  background-color: #007bff;
  color: white;
}

.btn-remove {
  background-color: #dc3545;
  color: white;
}

.btn-cancel {
  background-color: #ffc107;
  color: white;
}

.computador-list {
  list-style: none;
  padding: 0;
}

.computador-item {
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
}

.computador-details {
  margin-bottom: 10px;
}

.computador-actions {
  display: flex;
  justify-content: flex-start;
}
</style>
