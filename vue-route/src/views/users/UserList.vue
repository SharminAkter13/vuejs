<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center">User Management</h1>

    <!-- Alert messages -->
    <div v-if="successMsg" class="alert alert-success">{{ successMsg }}</div>
    <div v-if="errorMsg" class="alert alert-danger">{{ errorMsg }}</div>

    <!-- Add User Form -->
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <form class="row g-3" @submit.prevent="createUser">
          <div class="col-md-4">
            <input
              v-model="newUser.name"
              type="text"
              class="form-control"
              placeholder="Name"
              required
              :disabled="loading"
            />
            <div v-if="errors.name" class="text-danger small mt-1">{{ errors.name[0] }}</div>
          </div>
          <div class="col-md-4">
            <input
              v-model="newUser.email"
              type="email"
              class="form-control"
              placeholder="Email"
              required
              :disabled="loading"
            />
            <div v-if="errors.email" class="text-danger small mt-1">{{ errors.email[0] }}</div>
          </div>
          <div class="col-md-3">
            <input
              v-model="newUser.password"
              type="password"
              class="form-control"
              placeholder="Password"
              required
              :disabled="loading"
            />
            <div v-if="errors.password" class="text-danger small mt-1">{{ errors.password[0] }}</div>
          </div>
          <div class="col-md-4 d-grid">
            <button type="submit" class="btn btn-success" :disabled="loading">
              {{ loading ? "Saving..." : "Add User" }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Users Table -->
    <div class="card shadow-sm">
      <div class="card-body table-responsive">
        <table class="table table-hover align-middle">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user.id">
              <th>{{ index + 1 }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <button class="btn btn-primary btn-sm me-2" disabled>Edit</button>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteUser(user.id)"
                  :disabled="loading"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr v-if="users.length === 0">
              <td colspan="4" class="text-center text-muted">No users found.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_BASE = "https://fin-serve-bank.sharmin.online/laravel/api";

export default {
  data() {
    return {
      users: [],
      newUser: { name: "", email: "", password: "" },
      errors: {},        // Validation errors
      loading: false,    // To disable buttons while request in progress
      successMsg: "",    // Success feedback message
      errorMsg: "",      // Generic error message
    };
  },

  mounted() {
    this.getUsers();
  },

  methods: {
    async getUsers() {
      try {
        const res = await axios.get(`${API_BASE}/users`);
        this.users = res.data.data;
      } catch (error) {
        this.errorMsg = "Failed to fetch users.";
        console.error(error);
      }
    },

    async createUser() {
      this.errors = {};
      this.successMsg = "";
      this.errorMsg = "";
      this.loading = true;

      const payload = { ...this.newUser };

      try {
        const res = await axios.post(`${API_BASE}/users`, payload);
        this.users.unshift(res.data.data);
        this.successMsg = "User added successfully!";
        this.newUser = { name: "", email: "", password: "" };
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors || {};
        } else {
          this.errorMsg = "An error occurred while adding user.";
          console.error(error);
        }
      } finally {
        this.loading = false;
      }
    },

    async deleteUser(id) {
      if (!confirm("Are you sure you want to delete this user?")) return;

      this.errorMsg = "";
      this.successMsg = "";
      this.loading = true;

      try {
        await axios.delete(`${API_BASE}/users/${id}`);
        this.users = this.users.filter(u => u.id !== id);
        this.successMsg = "User deleted successfully!";
      } catch (error) {
        this.errorMsg = "Failed to delete user.";
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
.card {
  border-radius: 0.5rem;
}
table th,
table td {
  vertical-align: middle;
}
</style>
