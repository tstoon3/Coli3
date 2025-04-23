<script setup>
import CoNavVue from "./components/CoNav.vue"
import PromotionCo from "./components/PromotionCo.vue";
import WelcomePagevue from "./components/WelcomePage.vue"
import FooterCo from "./components/FooterCo.vue";

import LocationCo from "./components/LocationCo.vue";

</script>

<template>
  <header>
    <div>
      <CoNavVue />
    </div>

    <main>
      <WelcomePagevue />
      <PromotionCo />
      <LocationCo />
    </main>
    <footer>
      <FooterCo />
    </footer>
  </header>

</template>
