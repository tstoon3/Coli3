<script setup>
import CoNavVue from "./components/CoNav.vue"
import PromotionCo from "./components/PromotionCo.vue";
import WelcomePagevue from "./components/WelcomePage.vue"
import FooterCo from "./components/FooterCo.vue";
import LocationCo from "./components/LocationCo.vue";
import TestMapCo from "./components/TestMapCo.vue";

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
      <TestMapCo />

    </main>
    <footer>
      <FooterCo />
    </footer>
  </header>

</template>
