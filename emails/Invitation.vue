<script setup lang="ts">
  defineProps<{
    prenom: string
    atelierTitre: string
    date: string
    horaires: string
  }>()
</script>
<template>
  <EHtml>
    <EHead>
      <EStyle>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..700&display=swap');

        .container {
          background-color:#A6DEFF;
        }

        p {
          font-family: 'Inter', 'Arial', sans-serif;
          font-weight: 300;
          font-size: 1rem;
        }

        .email-title {
          font-family: 'Inter', 'Arial', sans-serif;
          font-weight: 600;
          font-size: 2rem;
        }

        .strong {
          font-weight: 600;
        }

        .container-image {
          display:flex;
          align-items: start;
          gap: 10px;
        }
      </EStyle>
    </EHead>
    <EBody>

      <EContainer>
        <div class="container">
          <p class="email-title">{{ atelierTitre }}</p>
          <p>Bonjour <strong>{{ prenom }}</strong>,
          <br>
          <br>
          L'initiation dédiée <i>à la brodeuse numérique</i> aura lieu le <span class="strong">{{ date }}</span> de <span class="strong">{{ horaires }}</span>.
          <br>
          <br>
          Nous vous donnons rendez-vous à <span class="strong">l'édulab Pasteur</span>, au premier étage à gauche du bâtiment Pasteur (02 place Pasteur, Rennes).
          <br>
          <br>
          Celle-ci sera animée par l'équipe de médiation de l'édulab Pasteur.
          <br>
          <br>
          Son objectif principal est de vous permettre de découvrir le fonctionnement de cet outil ainsi que sa manipulation, vous permettant ensuite de l'utiliser.
          <br>
          <br>
          Nous restons à votre disposition si vous avez des questions.
          <br>
          <br>
          <span class="email-title">
            L'équipe de facilitation
          </span>
          </p>
          <!-- <ERow> -->
          <!--   <EColumn> -->
          <div class="container-image">
            <EImg
              src="https://www.edulabpasteur.fr/wp-content/uploads/2026/04/logopng.webp"
              alt="Company Logo"
              :width="200"
              :height="24"
            />
            <!-- </EColumn> -->

            <!-- <EColumn> -->
            <EImg
              src="https://www.edulabpasteur.fr/wp-content/themes/Louis2025/i/logo_rennes.png"
              alt="Company Logo"
              :width="82"
              :height="24"
            />
          </div>
          <!--   </EColumn> -->
          <!-- </ERow> -->
        </div>
      </EContainer>
    </EBody>
  </EHtml>
</template>
