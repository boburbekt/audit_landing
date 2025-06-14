<template>
  <div>
     <HeroSct />
    <ServiceSct />
    <ProjectSct />
    <PaymentsSct />
    <ContactSct /></div>
</template>
<script>
import HeroSct from '../components/HeroSct.vue'
import ServiceSct from '../components/Service.vue'
import ProjectSct from '../components/Projects.vue'
import PaymentsSct from '../components/PaymentsSct.vue'
import ContactSct from '../components/Contact.vue'

export default {
  components: {
    HeroSct,
    ServiceSct,
    ProjectSct,
    PaymentsSct,
    ContactSct,
  }
}
</script>