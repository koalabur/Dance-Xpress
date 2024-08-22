<template>
  <main>
    <section class="banner">
      <NuxtImg v-if="!isMobile" class="banner__img" :src="pageContent?.banner.url" alt="Registration Page Banner"
        width="1920" height="720" preload />
      <NuxtImg v-if="isMobile" class="banner__img" :src="pageContent?.mobileBanner.url" alt="Registration Page Banner"
        width="768" height="720" preload />
      <div class="banner__foreground"></div>
      <div class="banner__content">
        <!-- LOCATION -->
        <div class="banner__content-row">
          <svg class="banner__content-row-icon" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64.4 95.1"
            style="enable-background: new 0 0 64.4 95.1" xml:space="preserve">
            <path class="st0"
              d="M5250.6,2407.9c-0.6,0-1,0.4-1,1s0.4,1,1,1h4.3c0.6,0,1-0.4,1-1s-0.4-1-1-1H5250.6z M5254.9,2411.2h-4.3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4.3c0.6,0,1-0.4,1-1S5255.5,2411.2,5254.9,2411.2z M5254.9,2414.6h-4.3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5255.9,2415.1,5255.5,2414.6,5254.9,2414.6z M32.2,0.1C14.4,0.1,0,14.5,0,32.3c0,20.1,19.1,48.5,27.8,60.6c2.2,3,6.5,3,8.7,0c8.8-12.1,27.9-40.5,27.9-60.6C64.4,14.5,50,0.1,32.2,0.1z M32.4,47.7c-8.6,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6S48,23.5,48,32.1C48,40.8,41,47.7,32.4,47.7z" />
          </svg>

          <p class="banner__content-row-body">
            <strong>Location: </strong><a class="banner__content-row-body-link" :href="pageContent?.location.url"
              target="_blank" rel="noopener">{{ pageContent?.location.text }}</a>
          </p>
        </div>
        <!-- IMPORTANT -->
        <div class="banner__content-row banner__content-row--important">
          <svg class="banner__content-row-icon" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21C42 32.598 32.598 42 21 42ZM21 38.5C30.665 38.5 38.5 30.665 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21C3.5 30.665 11.335 38.5 21 38.5ZM19.25 9.19034C19.25 8.4639 19.8437 7.875 20.5632 7.875H21.4368C22.162 7.875 22.75 8.45726 22.75 9.19034V24.0597C22.75 24.7861 22.1563 25.375 21.4368 25.375H20.5632C19.838 25.375 19.25 24.7927 19.25 24.0597V9.19034ZM21 34.125C19.5503 34.125 18.375 32.9497 18.375 31.5C18.375 30.0503 19.5503 28.875 21 28.875C22.4497 28.875 23.625 30.0503 23.625 31.5C23.625 32.9497 22.4497 34.125 21 34.125Z" />
          </svg>

          <p class="banner__content-row-body">
            {{ pageContent?.important }}
          </p>
        </div>
      </div>
      <div class="banner__polkaDot"></div>
    </section>
    <section v-if="!success" class="register">
      <h1 class="register__title">Register Your Child</h1>
      <form class="register__form" @submit.prevent="submitForm">
        <input type="checkbox" name="botcheck" class="hidden" v-model="register.botcheck" style="display: none" />
        <div class="register__form-row">
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="parentGuardianName">Parent/ Guardian Full Name</label>
            <input id="parentGuardianName" class="register__form-row-col-input"
              v-model.lazy="register.parentGuardianName" />
          </div>
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="parentGuardianEmail">Parent/ Guardian Email</label>
            <input id="parentGuardianEmail" class="register__form-row-col-input"
              v-model.lazy="register.parentGuardianEmail" />
          </div>
        </div>
        <div class="register__form-row">
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="parentGuardianNumber">Parent/ Guardian Number</label>
            <input id="parentGuardianNumber" class="register__form-row-col-input" type="number"
              v-model.lazy="register.parentGuardianNumber" />
          </div>
        </div>
        <div class="register__form-row">
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="numberOfChildren">How Many Children Are You
              Registering?</label>
            <select id="numberOfChildren" class="register__form-row-col-input" v-model="register.numberOfChildren">
              <option disabled value="">Please select a number.</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <div v-if="children >= 1" class="register__form-row">
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="child1FullName">Child 1 Full Name</label>
            <input id="child1FullName" class="register__form-row-col-input" v-model.lazy="register.child1FullName" />
          </div>
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="child1Age">Child 1 Age</label>
            <input id="child1Age" class="register__form-row-col-input" type="number" v-model.lazy="register.child1Age" />
          </div>
        </div>
        <div v-if="children >= 2" class="register__form-row">
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="child2FullName">Child 2 Full Name</label>
            <input id="child2FullName" class="register__form-row-col-input" v-model.lazy="register.child2FullName" />
          </div>
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="child2Age">Child 2 Age</label>
            <input id="child2Age" class="register__form-row-col-input" type="number" v-model.lazy="register.child2Age" />
          </div>
        </div>
        <div v-if="children == 3" class="register__form-row">
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="child3FullName">Child 3 Full Name</label>
            <input id="child3FullName" class="register__form-row-col-input" v-model.lazy="register.child3FullName" />
          </div>
          <div class="register__form-row-col">
            <label class="register__form-row-col-label" for="child3Age">Child 3 Age</label>
            <input id="child3Age" class="register__form-row-col-input" type="number" v-model.lazy="register.child3Age" />
          </div>
        </div>
        <div class="register__form-row">
          <div class="register__form-row-col">
            <div class="register__form-row-col-checkbox">
              <input id="childFee" class="register__form-row-col-checkbox-input" type="checkbox"
                v-model="register.childFee" />
              <label for="childFee" class="register__form-row-col-checkbox-label">
                I understand that there is a per child non-refundable registration fee due once I have registered my
                child. This fee is highlighted above the form. An email will be sent to me advising details on submitting payment.
              </label>
            </div>
          </div>
        </div>
        <div class="register__form-row">
          <div class="register__form-row-col">
            <div class="register__form-row-col-checkbox">
              <input id="readAboutPage" class="register__form-row-col-checkbox-input" type="checkbox"
                v-model="register.readAboutPage" />
              <label for="readAboutPage" class="register__form-row-col-checkbox-label">
                I have read over the fees related to the program and other
                information on the
                <NuxtLink class="register__form-row-col-checkbox-label-link" to="/about#about-the-program"
                  target="_blank">about page.</NuxtLink>
              </label>
            </div>
          </div>
        </div>
        <div v-if="error.length" class="register__error">
          <p class="register__error-title">These fields have an error:</p>
          <ol class="register__error-list">
            <li class="register__error-list-item" v-for="item in error">
              {{ item }}
            </li>
          </ol>
        </div>
        <button type="submit" class="register__btn">Register Now</button>
      </form>
    </section>
    <section v-if="success" class="success">
      <h2 class="success__title">
        You Have Successfully Registered Your Child!
      </h2>
      <h3 class="success__subtitle">
        Below is the information received. Please keep a record for your
        reference.
      </h3>
      <div class="success__form">
        <div class="success__form-row">
          <p class="success__form-row-title">Parent/ Guardian Full Name</p>
          <p class="success__form-row-info">
            {{ register.parentGuardianName }}
          </p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Parent/ Guardian Email</p>
          <p class="success__form-row-info">
            {{ register.parentGuardianEmail }}
          </p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Parent/ Guardian Number</p>
          <p class="success__form-row-info">
            {{ register.parentGuardianNumber }}
          </p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">
            How Many Children Are You Registering?
          </p>
          <p class="success__form-row-info">{{ register.numberOfChildren }}</p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Child 1 Full Name</p>
          <p class="success__form-row-info">{{ register.child1FullName }}</p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Child 1 Age</p>
          <p class="success__form-row-info">{{ register.child1Age }}</p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Child 2 Full Name</p>
          <p class="success__form-row-info">{{ register.child2FullName }}</p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Child 2 Age</p>
          <p class="success__form-row-info">{{ register.child2Age }}</p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Child 3 Full Name</p>
          <p class="success__form-row-info">{{ register.child3FullName }}</p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Child 3 Age</p>
          <p class="success__form-row-info">{{ register.child3Age }}</p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">
            I understand that there is a $20 per child non-refundable registration fee due once I have registered my
            child. An email will be sent to me advising details on submitting payment.
          </p>
          <p class="success__form-row-info">Accepted</p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">
            I have read over the fees related to the program and other
            information on the
            <NuxtLink class="success__form-row-title-link" to="/about#about-the-program" target="_blank">about page.
            </NuxtLink>
          </p>
          <p class="success__form-row-info">Accepted</p>
        </div>
      </div>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";
const config = useRuntimeConfig();

useSeoMeta({
  title: "Registration | Dance Xpress",
  ogTitle: "Registration | Dance Xpress",
  description: "Register your child(ren) for the Dance Xpress program!",
  ogDescription: "Register your child(ren) for the Dance Xpress program!",
  ogImage: "/registration-ogimg.jpg",
});

// CONTENTFUL
interface DataFromContentful {
  banner: {
    url: string;
  };
  mobileBanner: {
    url: string;
  };
  location: {
    url: string;
    text: string;
  };
  important: string;
}
/// Query
const query = `
  query registrationEntryQuery {
    registration(id: "2RoT3sdlwuVFowJkvRdDXf") {
      banner {
        url
      },
      mobileBanner {
        url
      },
      location,
      important
    }
  }
`;
/// use conposable
const content = await useContentful(query);
/// page content
const pageContent = ref<DataFromContentful>();
pageContent.value = content.data.registration;

// REGISTRATION FORM
interface Register {
  parentGuardianName: string;
  parentGuardianEmail: string;
  parentGuardianNumber: string;
  numberOfChildren: string | number;
  child1FullName: string;
  child1Age: string;
  child2FullName: string;
  child2Age: string;
  child3FullName: string;
  child3Age: string;
  childFee: boolean;
  readAboutPage: boolean;
  botcheck: boolean;
}
const register = ref<Register>({
  parentGuardianName: "",
  parentGuardianEmail: "",
  parentGuardianNumber: "",
  numberOfChildren: "",
  child1FullName: "",
  child1Age: "",
  child2FullName: "",
  child2Age: "",
  child3FullName: "",
  child3Age: "",
  childFee: false,
  readAboutPage: false,
  botcheck: false,
});
/// validation
const error = ref<Array<string>>([]);
/// how many children selector
const children = computed(() => {
  return register.value.numberOfChildren;
});
/// submit form
async function submitForm() {
  //// validate all fields
  error.value = [];
  if (!register.value.parentGuardianName) {
    error.value.push(`${"Parent/ Guardian Full Name".toUpperCase()} is empty.`);
  }
  const validateEmail: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!register.value.parentGuardianEmail.match(validateEmail)) {
    error.value.push(
      `${"Parent/ Guardian Email".toUpperCase()} is empty or invalid.`
    );
  }
  if (!register.value.parentGuardianNumber) {
    error.value.push(
      `${"Parent/ Guardian Number".toUpperCase()} is empty or invalid.`
    );
  }
  if (!register.value.numberOfChildren) {
    error.value.push(
      `You must select the ${"number of children".toUpperCase()} to register.`
    );
  }
  if (!register.value.child1FullName) {
    error.value.push(`${"Child 1 Full Name".toUpperCase()} is empty.`);
  }
  if (!register.value.child1Age) {
    error.value.push(`${"Child 1 Age".toUpperCase()} is empty.`);
  }
  if (register.value.numberOfChildren >= 2 && !register.value.child2FullName) {
    error.value.push(`${"Child 2 Full Name".toUpperCase()} is empty.`);
  }
  if (register.value.numberOfChildren >= 2 && !register.value.child2Age) {
    error.value.push(`${"Child 2 Age".toUpperCase()} is empty.`);
  }
  if (register.value.numberOfChildren == 3 && !register.value.child3FullName) {
    error.value.push(`${"Child 3 Full Name".toUpperCase()} is empty.`);
  }
  if (register.value.numberOfChildren == 3 && !register.value.child3Age) {
    error.value.push(`${"Child 3 Age".toUpperCase()} is empty.`);
  }
  if (!register.value.childFee) {
    error.value.push(
      `${"The Fee".toUpperCase()} is a requirement to register your child. Please review ${"The Fee".toUpperCase()} checkbox.`
    );
  }
  if (!register.value.readAboutPage) {
    error.value.push(
      `The ${"about page".toUpperCase()} has information related to the program. Please review the ${"about page".toUpperCase()} checkbox.`
    );
  }
  //// front end validation
  if (register.value.numberOfChildren >= 2) {
    if (
      !register.value.parentGuardianName ||
      !register.value.parentGuardianEmail.match(validateEmail) ||
      !register.value.numberOfChildren ||
      !register.value.child1FullName ||
      !register.value.child1Age ||
      !register.value.child2FullName ||
      !register.value.child2Age ||
      !register.value.childFee ||
      !register.value.readAboutPage
    ) {
      return;
    }
  } else if (register.value.numberOfChildren == 3) {
    if (
      !register.value.parentGuardianName ||
      !register.value.parentGuardianEmail.match(validateEmail) ||
      !register.value.numberOfChildren ||
      !register.value.child1FullName ||
      !register.value.child1Age ||
      !register.value.child2FullName ||
      !register.value.child2Age ||
      !register.value.child3FullName ||
      !register.value.child3Age ||
      !register.value.childFee ||
      !register.value.readAboutPage
    ) {
      return;
    }
  } else {
    if (
      !register.value.parentGuardianName ||
      !register.value.parentGuardianEmail.match(validateEmail) ||
      !register.value.numberOfChildren ||
      !register.value.child1FullName ||
      !register.value.child1Age ||
      !register.value.childFee ||
      !register.value.readAboutPage
    ) {
      return;
    }
  }
  //// submit form if no problems
  try {
    await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: config.public.WEB3FORMS_ACCESS_KEY,
        botcheck: register.value.botcheck,
        subject: `New Child Registration from ${register.value.parentGuardianName}`,
        replyto: register.value.parentGuardianEmail,
        from_name: "Dancexpresslv.com",
        "Parent/ Guardian Name": register.value.parentGuardianName,
        "Parent/ Guardian Email": register.value.parentGuardianEmail,
        "Parent/ Guardian Number": register.value.parentGuardianNumber,
        "Number Of Children": register.value.numberOfChildren,
        "Child 1 Full Name": register.value.child1FullName,
        "Child 1 Age": register.value.child1Age,
        "Child 2 Full Name": register.value.child2FullName,
        "Child 2 Age": register.value.child2Age,
        "Child 3 Full Name": register.value.child3FullName,
        "Child 3 Age": register.value.child3Age,
        "I understand that there is a $20 per child non-refundable registration fee due once I have registered my child.  An email will be sent to me advising details on submitting payment.": register.value.childFee,
        "I have read the about page": register.value.readAboutPage,
      }),
    });
    success.value = true;
  } catch (e) {
    console.log("something broke \n", e);
  }
}
/// success screen
const success = ref<boolean>(false);

// MOBILE DETECTION
const isMobile = useMediaQuery("(max-width: 768px)");
</script>
<style lang="scss" scoped>
.banner {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  &__content {
    background: $light-pink;
    max-width: 1004px;
    margin-left: auto;
    margin-right: auto;
    padding: 27px 32px;
    border-radius: 12px;
    z-index: 3;
    height: auto;
    margin-top: -150px;
    margin-bottom: 137px;

    &-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 26px;

      &-body {
        font-size: #{fluid(16px, 24px)};

        &-link {
          text-decoration: underline;
        }
      }

      &-icon {
        height: 42px;
        min-height: 42px;
        width: auto;
        min-width: auto;
        margin-right: #{fluid(8px, 12px)};
        fill: $black;

        @include mobile {
          min-height: 80px;
        }

        .banner__content-row--important & {
          width: 29px;
          min-width: 29px;
          height: auto;
          min-height: auto;

          @include mobile {
            min-width: 32px;
          }
        }
      }

      &--important {
        align-items: flex-start;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__foreground {
    background: linear-gradient(180deg,
        rgba(217, 217, 217, 0) 0%,
        #ffb6c1 100%);
    width: 100%;
    height: 100%;
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;
  }

  &__img {
    position: relative;
    height: 720px;
    width: 100%;
    object-fit: cover;
    grid-area: 1 / 1 / 2 / 2;
  }

  &__polkaDot {
    background-image: radial-gradient(#d16f82 20%, transparent 20%),
      radial-gradient(#d16f82 20%, transparent 20%);
    background-color: transparent;
    background-position: 0 0, 50px 50px;
    background-size: 25px 25px;
    width: #{fluid(150px, 1200px)};
    height: #{fluid(600px, 700px)};
    margin-left: auto;
    overflow: hidden;
    margin-top: auto;
    margin-bottom: -250px;
    grid-area: 1 / 1 / 2 / 2;
    z-index: 2;
  }
}

.register {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  &__btn {
    font-family: $subtitle-font;
    font-size: #{fluid(24px, 40px)};
    color: $pink;
    border-radius: 12px;
    background: $black;
    padding: 10px 28px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 12px 2px 6px $light-pink;
    transition: 0.2s ease-in-out;

    @include mobile {
      width: 100%;
    }

    &:hover {
      box-shadow: 0px 0px 2px 12px $white;
    }
  }

  &__error {
    background: $error;
    padding: 10px;
    margin-bottom: 35px;

    &-title {
      font-size: #{fluid(14px, 20px)};
      margin-bottom: 10px;
      color: $white;
    }

    &-list {
      padding-left: 20px;

      &-item {
        font-size: #{fluid(12px, 18px)};
        color: $white;
        font-weight: 400;
        margin-bottom: 7px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  &__form {
    width: 100%;
    @include edge-padding;

    &-row {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      gap: #{fluid(20px, 80px)};
      margin-bottom: 26px;

      @include mobile {
        flex-direction: column;
      }

      &-col {
        display: flex;
        flex-direction: column;
        width: 100%;

        &-checkbox {
          display: flex;
          flex-direction: row;
          align-items: flex-start;

          &-input {
            min-width: 27px;
            min-height: 27px;
            margin-right: 7px;
          }

          &-label {
            font-family: $body-font;
            font-size: #{fluid(15px, 20px)};
            cursor: pointer;
            font-weight: 400;
            width: auto;

            &-link {
              text-decoration: underline;

              &:hover {
                background: $light-pink;
              }
            }
          }
        }

        &-input {
          width: 100%;
          font-family: $body-font;
          font-size: #{fluid(16px, 20px)};
          background: $light-pink;
          border-radius: 35px;
          border: 1px solid $black;
          padding: 8px 15px;
          font-weight: 400;
        }

        &-label {
          font-family: $body-font;
          font-size: #{fluid(16px, 24px)};
          font-weight: 700;
          margin-bottom: 12px;
          display: inline-block;
          width: 100%;
        }
      }
    }
  }

  &__title {
    @include title-size;
    margin-bottom: 28px;
    z-index: 2;
  }
}

.success {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 50px;
  @include edge-padding;

  &__form {
    display: flex;
    flex-direction: column;
    background: $white;
    padding: 15px 10px;
    border: 2px dashed $black;
    width: 100%;
    max-width: 600px;

    &-row {
      display: flex;
      flex-direction: row;
      padding: 8px 4px;
      justify-content: space-between;

      &:nth-child(even) {
        background: #d6d6d6;
      }

      &-info {
        font-size: #{fluid(13px, 17px)};
      }

      &-title {
        font-size: #{fluid(12px, 17px)};
        max-width: #{fluid(170px, 300px)};
        margin-right: 15px;
        font-weight: 700;
        white-space: normal;

        &-link {
          text-decoration: underline;

          &:hover {
            background: $light-pink;
          }
        }
      }
    }
  }

  &__subtitle {
    font-size: #{fluid(17px, 26px)};
    font-family: $body-font;
    margin-bottom: 25px;
    text-align: center;
  }

  &__title {
    font-size: #{fluid(26px, 60px)};
    font-family: $title-font;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
