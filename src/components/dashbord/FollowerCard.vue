<script setup>
import ChartAreaTest from "@/components/chart/ChartAreaTest.vue";
</script>

<template>
  <div>
    <VRow class="row" dense>
      <VCol cols="12">
        <div class="mx-auto rounded-lg follower-card">
          <h1 class="text-subtitle-1 mb-2 header-card-text-color mr-3 mt-3">
            فالورهای جدید
          </h1>

          <span class="d-flex align-center mr-3">
            <p
              class="header-card-badgecolor rounded-pill ml-1 px-2 text-caption align-content-center"
            >
              15% &#8593;
            </p>
            <p class="text-caption-card">بیشتر ازهفته گذشته</p>
          </span>
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex">
              <p class="text-h4 ml-2 mr-3 text-primary">183</p>
              <p class="text-primary text-body-2">
                فالور<br />
                جدید
              </p>
            </div>
            <!-- chart-Area -->
            <div>
              <ChartAreaTest />
            </div>
          </div>
        </div>
      </VCol>
    </VRow>
  </div>
</template>

<style scoped lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
