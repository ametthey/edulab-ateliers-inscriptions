<!-- app/components/RegisterForm.vue -->
<script setup>
import { ref } from "vue";
import { z } from "zod";

const emit = defineEmits(["register"]);

// once again, we'll use zod to validate the form
const schema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  // we'll also make sure the passwords match
  // with the zod refine methods
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// keep track of the form values
const form = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

// also just like before, we'll emit the form values to the parent on submit
const handleSubmit = async () => {
  const { confirmPassword, ...registerData } = form.value;
  emit("register", registerData);
};
</script>

<template>
  <!--  layout markup ommited for brevity -->
  <div
    class="flex flex-col items-center justify-center mt-4">
    <UForm :state="form" :schema="schema" @submit="handleSubmit">
      <div class="flex flex-col items-center gap-2">
        <div class="mb-2">
          <UFormField
            label="Nom"
            name="name"
            class="text-lg font-medium"
          >
            <UInput
              v-model="form.name"
              class="width"
            />
          </UFormField>
        </div>
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
        <div class="mb-2">
          <UFormField
            label="Confirmer mot de passe"
            name="confirmPassword"
            class="text-lg font-medium"
          >
            <UInput
              v-model="form.confirmPassword"
              type="password"
              class="width"
            />
          </UFormField>
        </div>

        <LazyUButton
          type="submit"
          color="neutral"
          variant="outline"
          size="md"
          class="font-bold text-sm mt-6 w-max"
          block
        >
        S'enregistrer
        </LazyUButton>
      </div>
    </UForm>
  </div>
</template>
