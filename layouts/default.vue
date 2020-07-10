<template>
  <div id="wrapper">
    <nuxt-link to="/">top</nuxt-link>
    <nuxt-link to="/about">about</nuxt-link>
    <div id="container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
// common style ( no-scoped )
html {
  position: relative;
}
body {
  position: relative;
}
#wrapper {
  position: relative;
}
#container {
  position: relative;
}
</style>
