<script setup>
import telegramimage from "@/assets/images/dashboard-card/telegram-image.png";
const telegramimg = telegramimage;
</script>

<template>
  <div>
    <VRow class="row" dense>
      <VCol cols="12">
        <div
          class="d-flex mx-auto justify-space-between telegram-card mt-13 py-2 pr-3"
        >
          <div>
            <h1>دایرکتم را در تلگرام دنبال کنید.</h1>
            <p>
              آموزش‌های خاص،پیشنهادهای هیجان‌انگیز و آپدیت‌های جدید فقط یک کلیک
              با شما فاصله داره!
            </p>
            <button>یه سر به کانال بزن 🔔</button>
          </div>
          <img :src="telegramimg" alt="telegram-Icon" />
        </div>
      </VCol>
    </VRow>
  </div>
</template>
