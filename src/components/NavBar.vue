<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/">
        <img class="logo" src="/logo.png" alt="" />
      </RouterLink>
      <nav class="nav">
        <RouterLink :class="{ active: $route.path === '/posts' }" class="link" to="/posts"> Посты </RouterLink>
        <RouterLink :class="{ active: $route.path === '/about' }" class="link" to="/about">О сайте</RouterLink>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.header {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 35px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.link {
  color: gray;
}

.active {
  color: var(--var-blue);
}
</style>
