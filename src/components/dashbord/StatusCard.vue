<script>
import yellowmessage from "@/assets/images/dashboard-card/yellow-message.svg";
import greentelegram from "@/assets/images/dashboard-card/green-telegram.svg";
import bluepicture from "@/assets/images/dashboard-card/blue-picture.svg";
import blueformbuilder from "@/assets/images/dashboard-card/blue-formbuilder.svg";
import purpleemail from "@/assets/images/dashboard-card/purple-email.svg";
import redsupport from "@/assets/images/dashboard-card/red-support.svg";
import statusIcon from "@/assets/images/dashboard-card/status-Icon.svg";

export default {
  name: "StatusCard",

  data() {
    return {
      statusimg: statusIcon,
      cards: [
        {
          image: yellowmessage,
          title: "۱۲ دستور",
          description: "کامنت هوشمند",
        },
        {
          image: greentelegram,
          title: "۱۲ دستور",
          description: "کامنت هوشمند",
        },
        {
          image: bluepicture,
          title: "۲ ویترین",
          description: "ویترین ساز",
        },
        { image: blueformbuilder, title: "۱ فرم", description: "فرم" },
        {
          image: purpleemail,
          title: "۱ پیامک ارسال شده",
          description: "پیامک هوشمند",
        },
        {
          image: redsupport,
          title: "Card 6",
          description: "۲ دستور",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <VRow class="row" dense>
      <VCol cols="12">
        <div class="mx-auto mt-10 status-crd">
          <div class="d-flex my-5 mr-2">
            <img :src="statusimg" alt="Icon" />
            <h1 class="mr-2">وضعیت من</h1>
          </div>

          <v-divider></v-divider>

          <div class="pa-4">
            <VRow class="row" dense>
              <VCol v-for="(card, index) in cards" :key="index" cols="6">
                <div class="d-flex">
                  <img :src="card.image" />
                  <div class="mr-2">
                    <span>{{ card.description }}</span>
                    <h2>{{ card.title }}</h2>
                  </div>
                </div>
              </VCol>
            </VRow>
          </div>
        </div>
      </VCol>
    </VRow>
  </div>
</template>
