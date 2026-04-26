<script setup lang="ts">
const { fetch } = useUserSession();
const toast = useToast();
// on the login event, we'll call a login api endpoint

const handleLogin = async (form: { email: string; password: string }) => {
  try {
    // call the login endpoint we just created
    await $fetch("/api/auth/login", {
      method: "POST",
      body: form,
    });

    // on successful login, we need to fetch the updated session
    // nuxt auth utils has a built in function for this
    await fetch();

    // then navigate to the protected part of the app
    navigateTo("/userinfo");
  } catch (error) {
    // if there's an error, notify the user with a NuxtUI toast
    // (for toast to work make sure wrap everything in app.vuew with the UApp component)
    if (error && typeof error === "object" && "statusMessage" in error) {
      toast.add({
        color: "error",
        title: "Login failed",
        description: error.statusMessage as string,
      });
    } else {
      console.error(error);
    }
  }
};
/*****************************************
 * Meta
 *****************************************/
const title = 'Connexion'
const description = ''

definePageMeta({
  layout: 'page-public'
})
useHead({
  title: title,
  description: description,
})
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description
})

</script>

<template>
  <ConnexionForm @login="handleLogin" />
</template>
