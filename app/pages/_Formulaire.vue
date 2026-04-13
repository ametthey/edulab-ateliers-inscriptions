<script setup>
import { ref } from 'vue'

const formData = ref(defaultFormData())

const listes = reactive({
  referents: defaultReferents,
  outils: defaultOutils,
  salles: defaultSalles,
  actions: defaultTypeActions,
  structures: defaultTypeStructures,
  mediations: defaultTypeMediations,
  publics: defaultTypePublics,
  mobilierValue: ''
})

// Fonction appelé quand on soumet le formulaire
const handleSubmit = async () => {
  // Vérifie que le champ n'est pas vide
  if (!formData.value.referent.trim()) return alert('Veuillez remplir le champ "Référent"')

  try {
    await $fetch('/api/formulaires', {
      method: 'POST',
      body: { ...formData.value }
    })

    // reset le champ après chaque soumission
    formData.value = defaultFormData()
  } catch (error) {
    alert('Erreur lors de l\'envoi du formulaire' + error)
  }
}

// INFO DE BASE
const title = 'Le formulaire des projets'
const description = 'Formulaire de création de projet'

definePageMeta({
  layout: 'form'
})
useHead({
  title,
  description
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <div>
    <UPageHeader
      :title="title"
      :description="description"
    />

    <div class="py-4">
      <UForm @submit="handleSubmit">
        <!-- LES INFORMATIONS GENERALES -->
        <!-- LES INFORMATIONS GENERALES -->
        <!-- LES INFORMATIONS GENERALES -->
        <div
          id="container-infos"
          class="container--section"
        >
          <FormSection
            monid="infos"
            title="Les informations générales"
          />

          <FormSelect
            v-model="formData.referent"
            label="Référent"
            :items="listes.referents"
          />

          <!-- Nom du projet -->
          <FormInput
            v-model="formData.nomProjet"
            label="Nom du projet"
            name="nomProjet"
            type="text"
            placeholder="Entrez le nom du projet"
          />

          <!-- Nom de la structure  -->
          <FormInput
            v-model="formData.nomStructure"
            label="Nom de la structure"
            name="nomStructure"
            type="text"
            placeholder="Entrez le nom de la structure"
          />

          <!-- Prénom et Nom  -->
          <FormInput
            v-model="formData.PrenomNom"
            label="Nom de la personne"
            name="PrenomNom"
            type="text"
            placeholder="Entrez le nom de la personne"
          />

          <!-- Email  -->
          <FormInput
            v-model="formData.email"
            label="Email de la personne"
            name="email"
            type="email"
            placeholder="Entrez l'email"
          />

          <!-- Téléphone  -->
          <FormInput
            v-model="formData.tel"
            label="Téléphone de la personne"
            name="tel"
            type="tel"
            placeholder="Entrez le numéro de téléphone"
          />
        </div>

        <!-- LES TYPOLOGIES DE PROJET -->
        <!-- LES TYPOLOGIES DE PROJET -->
        <!-- LES TYPOLOGIES DE PROJET -->
        <!-- <div id="container-typologie" -->
        <!--   class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="typologie" -->
        <!--     title="Les typologies de projets" -->
        <!--   /> -->
        <!--   <FormSelect -->
        <!--     label="Type d'action" -->
        <!--     v-model="formData.typeAction" -->
        <!--     :items="listes.actions" -->
        <!--   /> -->
        <!--  -->
        <!--   <FormSelect -->
        <!--     label="Type de structure" -->
        <!--     v-model="formData.typeStructure" -->
        <!--     :items="listes.structures" -->
        <!--   /> -->
        <!--  -->
        <!--   <FormSelect -->
        <!--     label="Type de médiation" -->
        <!--     v-model="formData.typeMediation" -->
        <!--     :items="listes.mediations" -->
        <!--   /> -->
        <!--  -->
        <!--   <FormSelect -->
        <!--     label="Type de public" -->
        <!--     v-model="formData.typePublic" -->
        <!--     :items="listes.publics" -->
        <!--   /> -->
        <!--   &#60;&#33;&#45;&#45; Age  &#45;&#45;&#62; -->
        <!--   <FormInput -->
        <!--     v-model="formData.age" -->
        <!--     label="Âge du public" -->
        <!--     name="age" -->
        <!--     type="number" -->
        <!--     placeholder="Entre l'âge du public" -->
        <!--   /> -->
        <!--   &#60;&#33;&#45;&#45; Jauge  &#45;&#45;&#62; -->
        <!--   <FormInput -->
        <!--     v-model="formData.jauge" -->
        <!--     label="Jauge du public" -->
        <!--     name="jauge" -->
        <!--     type="number" -->
        <!--     placeholder="Jauge du public" -->
        <!--   /> -->
        <!--   &#60;&#33;&#45;&#45; Accompagnant  &#45;&#45;&#62; -->
        <!--   <FormInput -->
        <!--     v-model="formData.accompagnant" -->
        <!--     label="Nombre d'accompagnant" -->
        <!--     name="accompagnant" -->
        <!--     type="number" -->
        <!--     placeholder="Nombre d'accompagnants" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; LA MEDIATION  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; LA MEDIATION  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; LA MEDIATION  &#45;&#45;&#62; -->
        <!-- <div id="container-mediation" -->
        <!--   class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="mediation" -->
        <!--     title="La médiation" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; LE DEROULE  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; LE DEROULE  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; LE DEROULE  &#45;&#45;&#62; -->
        <!-- <div id="container-deroule" -->
        <!--   class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="deroule" -->
        <!--     title="Le déroulé" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; LES OUTILS  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; LES OUTILS  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; LES OUTILS  &#45;&#45;&#62; -->
        <!-- <div id="container-outils" -->
        <!--   class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="outils" -->
        <!--     title="Les outils" -->
        <!--   /> -->
        <!--  -->
        <!--   <FormCheckboxesGroup -->
        <!--     v-model="formData.outils" -->
        <!--     orientation="horizontal" -->
        <!--     :items="listes.outils" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; Les présentations  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; Les présentations  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; Les présentations  &#45;&#45;&#62; -->
        <!-- <div id="container-presentations" -->
        <!--   class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="presentations" -->
        <!--     title="Les présentations" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; Les initiations  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; Les initiations  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; Les initiations  &#45;&#45;&#62; -->
        <!-- <div id="container-initiations" -->
        <!--   class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="initiations" -->
        <!--     title="Les initiations" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; Les salles  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; Les salles  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; Les salles  &#45;&#45;&#62; -->
        <!-- <div id="container-salles" -->
        <!--   class="container--section" -->
        <!-- > -->
        <!--   <FormSection -->
        <!--     monid="salles" -->
        <!--     title="Les salles" -->
        <!--   /> -->
        <!--  -->
        <!--   &#60;&#33;&#45;&#45; Les salles  &#45;&#45;&#62; -->
        <!--   <FormCheckboxesGroup -->
        <!--     v-model="formData.salles" -->
        <!--     orientation="horizontal" -->
        <!--     :items="listes.salles" -->
        <!--   /> -->
        <!--   &#60;&#33;&#45;&#45; Salle de la conciergerie  &#45;&#45;&#62; -->
        <!--   <div class="my-8"> -->
        <!--     <UFormField -->
        <!--       v-if="formData.salles.includes('conciergerie')" -->
        <!--       label="Précisez" -->
        <!--       name="autresalle" -->
        <!--     > -->
        <!--       <UInput -->
        <!--         v-model="formData.autresSalle" -->
        <!--         placeholder="Nom de la salle" -->
        <!--         type="text" -->
        <!--       /> -->
        <!--     </UFormField> -->
        <!--   </div> -->
        <!--   &#60;&#33;&#45;&#45; Le mobilier  &#45;&#45;&#62; -->
        <!--   <FormTextarea -->
        <!--     v-model="formData.mobilier" -->
        <!--     label="Le mobilier à prévoir" -->
        <!--     name="mobilier" -->
        <!--     placeholder="Liste le mobilier" -->
        <!--   /> -->
        <!--   &#60;&#33;&#45;&#45; Le matériel  &#45;&#45;&#62; -->
        <!--   <FormTextarea -->
        <!--     v-model="formData.materiel" -->
        <!--     label="Le matériel à prévoir" -->
        <!--     name="materiel" -->
        <!--     placeholder="Liste le matériel en plus" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; L'agenda  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; L'agenda  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; L'agenda  &#45;&#45;&#62; -->
        <!-- <div id="container-agenda" class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="agenda" -->
        <!--     title="L'agenda" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; La communication  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; La communication  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; La communication  &#45;&#45;&#62; -->
        <!-- <div id="container-communication" class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="communication" -->
        <!--     title="La communication" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; La restitution  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; La restitution  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; La restitution  &#45;&#45;&#62; -->
        <!-- <div id="container-restitution" class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="restitution" -->
        <!--     title="La restitution" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; Le bilan  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; Le bilan  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; Le bilan  &#45;&#45;&#62; -->
        <!-- <div id="container-bilan" class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="bilan" -->
        <!--     title="Le bilan" -->
        <!--   /> -->
        <!-- </div> -->
        <!--  -->
        <!-- &#60;&#33;&#45;&#45; La réciprocité  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; La réciprocité  &#45;&#45;&#62; -->
        <!-- &#60;&#33;&#45;&#45; La réciprocité  &#45;&#45;&#62; -->
        <!-- <div id="container-reciprocite" class="container--section"> -->
        <!--   <FormSection -->
        <!--     monid="reciprocite" -->
        <!--     title="La réciprocité" -->
        <!--   /> -->
        <!--   <FormTextarea  -->
        <!--     v-model="formData.reciprocitePropo"  -->
        <!--     label="Les propositions"  -->
        <!--     name="reciprocitePropo"  -->
        <!--     placeholder="Les propositions de réciprocité"  -->
        <!--   />  -->
        <!--   <FormTextarea  -->
        <!--     v-model="formData.reciprociteChoix"  -->
        <!--     label="Le choix final"  -->
        <!--     name="reciprociteChoix"  -->
        <!--     placeholder="Choix final de réciprocité"  -->
        <!--   />  -->
        <!-- </div> -->

        <!-- Bouton envoyer -->
        <UButton
          type="submit"
          class="mt-6"
        >
          Envoyer
        </UButton>
      </UForm>
    </div>
  </div>
</template>
