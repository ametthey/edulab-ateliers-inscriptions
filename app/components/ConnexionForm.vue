<!-- app/components/LoginForm.vue -->
<script setup>
import { ref } from "vue";
import { z } from "zod";

const emit = defineEmits(["login"]);

// define the form value requirements with zod
// makes validation easy and expressive
// plus works great with Nuxt UI
const schema = z.object({
  email: z.string().email("Email non valable"),
  password: z.string(),
});

// keep track of the form values
const form = ref({
  email: "",
  password: "",
});

// since the login form will be a "dumb" component
// (https://vueschool.io/lessons/smart-vs-dumb-components)
// it will simply emit the form values to the parent on submit
const handleSubmitLogin = async () => {
  emit("login", form.value);
};

</script>

<template>
  <!--  layout markup ommited for brevity -->
  <div
    class="flex flex-col items-center justify-center pt-4 gap-8">
    <PageHeader titre="Se connecter" />
    <UForm
      :state="form"
      :schema="schema"
      @submit="handleSubmitLogin"
    >
      <div class="flex flex-col items-center gap-2">
        <div class="mb-2">
          <UFormField
            label="Email"
            name="email"
            class="text-lg font-medium"
          >
            <UInput
              v-model="form.email"
              class="width"
            />
          </UFormField>
        </div>

        <div class="mb-2">
          <UFormField
            label="Mot de passe"
            name="password"
            class="text-lg font-medium"
          >
            <UInput
              v-model="form.password"
              type="password"
              class="width"
            />
          </UFormField>
        </div>

        <!-- Bouton envoyer -->
        <LazyUButton
          type="submit"
          color="neutral"
          variant="outline"
          size="md"
          class="font-bold text-sm mt-6 w-max"
          block
        >
          Se connecter
        </LazyUButton>
      </div>
    </UForm>
  </div>
</template>
