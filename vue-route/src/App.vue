<template>
  <div class="container-fluid">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          
          <router-link to="/" class="navbar-brand">Vue</router-link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" active-class="active">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main class="container mt-4">
      <router-view />
    </main>
  </div>
</template>