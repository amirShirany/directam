<script setup>
import statusIcon from "@/assets/images/dashboard-card/grade-icon.svg";
const statusimg = statusIcon;
</script>

<template>
  <div>
    <VRow class="row" dense>
      <VCol cols="12">
        <div
          class="mx-auto roun mt-11 services-card pr-4 d-flex flex-column justify-end"
        >
          <img :src="statusimg" alt="Icon" class="services-card-icon" />
          <h1 class="services-card-headercolor mb-1">پیام خوش‌آمد گویی</h1>

          <div class="d-flex align-center">
            <span class="services-card-dot mb-1" />
            <p class="services-card-captioncolor1 mb-1">
              خودت رو به فالورات معرفی کن
            </p>
          </div>

          <p class="services-card-text mb-2">
            فالورهات نمی‌شناسنت؟ با قابلیت پیام خوش‌آمد گویی خودت رو به فالورهات
            معرفی کن، به سوالات متداولشون جواب بده.
          </p>

          <div class="d-flex justify-center mb-2">
            <button class="services-card-btn justify-center rounded-lg">
              یه نگاه بنداز
            </button>
          </div>
        </div>
      </VCol>
    </VRow>
  </div>
</template>
