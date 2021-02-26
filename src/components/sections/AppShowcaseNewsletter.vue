<template>
  <div class="newsletter-section section-space--pb_120" id="uc-davis-chile">
    <div class="app-showcase-section__titel">
      <div class="vc_row-separator center_curve top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M 0 0 Q 50 200 100 0"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import ChartCircleTwo from "../ChartCircleTwo";
import SectionTitle from "@/components/SectionTitle";
import NewsletterTwo from "../NewsletterTwo";
export default {
  name: "AppShowcaseNewsletter",
  components: {
    NewsletterTwo,
    ChartCircleTwo,
    SectionTitle,
  },
};
</script>