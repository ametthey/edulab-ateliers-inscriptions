<!-- app/pages/register.vue -->
<script setup lang="ts">
 const { fetch } = useUserSession();
  const toast = useToast();

  const handleRegister = async (form: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      // call the registration endpoint here
      // everything else is basically the same as the login page
      await $fetch("/api/auth/register", {
        method: "POST",
        body: form,
      });
      await fetch();
      navigateTo("/Utilisateur");
    } catch (error) {
      if (error && typeof error === "object" && "statusMessage" in error) {
        toast.add({
          color: "error",
          title: "Registration failed",
          description: error.statusMessage as string,
        });
      } else {
        console.error(error);
      }
    }
  };
</script>

<template>
  <RegisterForm @register="handleRegister" />
</template>
