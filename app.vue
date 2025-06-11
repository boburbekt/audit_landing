<template>
  <div class="font-sans text-gray-800 scroll-smooth">
    <Header />
    <HeroSct />
    <ServiceSct />
    <ProjectSct />
    <PaymentsSct />
    <ContactSct />
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderNav.vue'
import HeroSct from './components/HeroSct.vue'
import ServiceSct from './components/Service.vue'
import ProjectSct from './components/Projects.vue'
import PaymentsSct from './components/PaymentsSct.vue'
import ContactSct from './components/Contact.vue'
import Footer from './components/FooterB.vue'

export default {
  components: {
    Header,
    HeroSct,
    ServiceSct,
    ProjectSct,
    PaymentsSct,
    ContactSct,
    Footer
  }
}
</script>

<!-- <script>
import Header from './components/header.vue'

export default {
  components: {
    Header
  }
}
</script> -->