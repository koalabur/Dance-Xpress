<template>
  <main>
    <section class="home">
      <nuxt-picture
        class="home__bg"
        provider="contentful"
        :src="pageContent?.backgroundImage.url"
        width="1273"
        height="853"
        alt="Dance Xpress Girls"
      />
      <div class="home__content">
        <img
          class="home__content-bg"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzk1IiBoZWlnaHQ9Ijg1MyIgdmlld0JveD0iMCAwIDc5NSA4NTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjI1MSIgY3k9IjQyNyIgcj0iNTQ0IiBmaWxsPSIjRkZDREQ1Ii8+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpvdmVybGF5Ij4KPHJlY3QgeD0iNTc1IiB5PSIxODEuMjQxIiB3aWR0aD0iMjQ1IiBoZWlnaHQ9IjE0IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNTc1IDE4MS4yNDEpIiBmaWxsPSIjRkZDREQ1Ii8+CjwvZz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ij4KPHJlY3QgeD0iNTc1IiB5PSIyMjkuMjQxIiB3aWR0aD0iMjQ1IiBoZWlnaHQ9IjE0IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNTc1IDIyOS4yNDEpIiBmaWxsPSIjRDg2QjdDIi8+CjwvZz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm92ZXJsYXkiPgo8cmVjdCB4PSI1NzUiIHk9IjI3My4yNDEiIHdpZHRoPSIyNDUiIGhlaWdodD0iMTQiIHRyYW5zZm9ybT0icm90YXRlKC00NSA1NzUgMjczLjI0MSkiIGZpbGw9IiNGRkNERDUiLz4KPC9nPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bXVsdGlwbHkiPgo8cmVjdCB4PSI1NzUiIHk9IjMyMS4yNDEiIHdpZHRoPSIyNDUiIGhlaWdodD0iMTQiIHRyYW5zZm9ybT0icm90YXRlKC00NSA1NzUgMzIxLjI0MSkiIGZpbGw9IiNEODZCN0MiLz4KPC9nPgo8L3N2Zz4K"
          width="705"
          height="1088"
          alt="Content Background"
        />
        <div class="home__content-body">
          <h1 ref="title" class="home__content-body-title">
            {{ pageContent?.title }}
          </h1>
          <div class="home__content-body-divider">
            <div ref="dot" class="home__content-body-divider-dot"></div>
            <div ref="line" class="home__content-body-divider-line"></div>
          </div>
          <h2 ref="subtitle" class="home__content-body-subtitle">
            {{ pageContent?.subtitle }}
          </h2>
          <div ref="btns" class="home__content-body-links">
            <NuxtLink class="home__content-body-links-btn" to="/about"
              >Learn More</NuxtLink
            >
            <NuxtLink
              class="home__content-body-links-btn home__content-body-links-btn--primary"
              to="/registration"
              >Register Now</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script lang="ts" setup>
// Import and register gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

useSeoMeta({
  title: "Dance Xpress - Las Vegas",
  ogTitle: "Dance Xpress - Las Vegas",
  description:
    "Dance Xpress provides an outlet for youth girls, ages 5-14, to express their love of liberal arts, DANCE!",
  ogDescription:
    "Dance Xpress provides an outlet for youth girls, ages 5-14, to express their love of liberal arts, DANCE!",
  ogImage: "/home-ogimg.jpg",
});

// Contentful
interface DataFromContentful {
  title: string;
  subtitle: string;
  backgroundImage: {
    url: string;
  };
}
/// Query
const query = `
  query homeEntryQuery {
    home(id: "75rNUqs3aIsSbT2sDI4Arr") {
      title
      subtitle
      backgroundImage {
        url
      },
    }
  }
`;
/// use conposable
const content = await useContentful(query);
/// page content
const pageContent = ref<DataFromContentful>();
pageContent.value = content.data.home;

// GSAP
/// elements
const title = ref<HTMLDivElement | null>(null);
const subtitle = ref<HTMLDivElement | null>(null);
const dot = ref<HTMLDivElement | null>(null);
const line = ref<HTMLDivElement | null>(null);
const btns = ref<HTMLDivElement | null>(null);
/// do the gsap thing
onMounted(() => {
  gsap.to(title.value, {
    scrollTrigger: {
      trigger: title.value,
      // start: "center center",
      // end: "bottom bottom",
    },
    opacity: 1,
    x: 0,
    duration: 0.5,
  });

  gsap.to(dot.value, {
    scrollTrigger: {
      trigger: dot.value,
    },
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: 0.2,
  });

  gsap.to(line.value, {
    scrollTrigger: {
      trigger: line.value,
    },
    opacity: 1,
    x: 0,
    duration: 0.7,
    delay: 0.35,
  });

  gsap.to(subtitle.value, {
    scrollTrigger: {
      trigger: subtitle.value,
    },
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: 0.7,
  });

  gsap.to(btns.value, {
    scrollTrigger: {
      trigger: btns.value,
      start: "center bottom",
    },
    opacity: 1,
    x: 0,
    duration: 0.5,
    delay: 0.75,
  });
});
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 1716px;
  width: 100%;
  height: 853px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.4);
  background: $light-pink;
  margin-bottom: 50px;

  @include laptop {
    flex-direction: column;
    height: auto;
    margin-bottom: 50px;
  }

  &__bg {
    position: absolute;
    right: 0px;
    bottom: 0;
    object-fit: cover;
    height: 100%;

    @media (max-width: 1450px) {
      right: #{fluid(-450px, 0px)};
    }

    @include laptop {
      position: relative;
      right: 0;
      margin-bottom: 2rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;

    &-bg {
      position: absolute;
      height: 1088px;
      left: #{fluid(-200px, 100px)};

      @include laptop {
        position: relative;
        display: none;
        height: auto;
      }
    }

    &-body {
      position: absolute;
      margin-bottom: 8rem;
      margin-left: 2rem;

      @include laptop {
        background: $light-pink;
        padding: 10px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
        @include edge-padding;
      }

      &-divider {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: #{fluid(25px, 41px)};

        &-dot {
          background: $black;
          height: 34px;
          width: 34px;
          border-radius: 100%;
          opacity: 0;
          transform: translateX(-100px);

          @include mobile {
            height: 30px;
            width: 38px;
          }
        }

        &-line {
          background: $black;
          width: #{fluid(350px, 441px)};
          height: 6px;
          opacity: 0;
          transform: translateX(-100px);
        }
      }

      &-links {
        display: flex;
        flex-direction: row;
        gap: #{fluid(20px, 44px)};
        opacity: 0;
        transform: translateX(-150px);

        @include mobile {
          flex-direction: column;
        }

        &-btn {
          font-family: $subtitle-font;
          font-size: #{fluid(24px, 36px)};
          background: $darker-pink;
          border-radius: 12px;
          color: $light-pink;
          display: block;
          padding: 4px 30px;
          transition: 0.2s ease-in-out;

          @include mobile {
            text-align: center;
            padding: 10px 15px;
          }

          &--primary {
            color: $white;
            background: $black;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

            &:hover {
              box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.8);
            }
          }
        }
      }

      &-subtitle {
        font-family: $subtitle-font;
        font-size: #{fluid(22px, 36px)};
        max-width: #{fluid(600px, 700px)};
        margin-bottom: 41px;
        opacity: 0;
        transform: translateX(-100px);
      }

      &-title {
        @include title-size;
        max-width: #{fluid(450px, 700px)};
        margin-bottom: 32px;
        opacity: 0;
        transform: translateX(-100px);
      }
    }
  }
}

main {
  @include edge-padding;
  margin-top: 80px;
}
</style>
