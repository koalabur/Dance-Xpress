<template>
  <main>
    <div class="polkaDot"></div>
    <section v-if="!success" class="contact">
      <h1 class="contact__title">Have A Question?</h1>
      <h2 class="contact__subtitle">
        Please fill out the form below and I'll get back to you!
      </h2>
      <form class="contact__form" @submit.prevent="submitForm">
        <label class="contact__form-label" for="fullName">Full Name</label>
        <input
          type="checkbox"
          name="botcheck"
          class="hidden"
          v-model="contact.botcheck"
          style="display: none"
        />
        <input
          id="fullName"
          class="contact__form-input"
          v-model.lazy="contact.fullName"
        />
        <label class="contact__form-label" for="email">Email</label>
        <input
          id="email"
          class="contact__form-input"
          v-model.lazy="contact.email"
        />
        <label class="contact__form-label" for="number">Number</label>
        <input
          id="number"
          class="contact__form-input"
          v-model.lazy="contact.number"
        />
        <label class="contact__form-label" for="subject">Subject</label>
        <select
          id="subject"
          class="contact__form-input"
          v-model="contact.subject"
        >
          <option disabled value="">Please select a subject.</option>
          <option>General Inquiry</option>
          <option>Question About Program</option>
          <option>Question About Registration</option>
        </select>
        <label class="contact__form-label" for="message">Message</label>
        <textarea
          id="message"
          class="contact__form-input"
          v-model.lazy="contact.message"
          rows="8"
        ></textarea>
        <div v-if="error.length" class="contact__form-error">
          <p class="contact__form-error-title">These fields have an error:</p>
          <ol class="contact__form-error-list">
            <li class="contact__form-error-list-item" v-for="item in error">
              {{ item }}
            </li>
          </ol>
        </div>
        <button type="submit" class="contact__form-btn">Send Email</button>
      </form>
    </section>
    <section v-if="success" class="success">
      <h2 class="success__title">The Email Has Been Sent!</h2>
      <h3 class="success__subtitle">
        Below is the information received. Please keep a record for your
        reference.
      </h3>
      <div class="success__form">
        <div class="success__form-row">
          <p class="success__form-row-title">Full Name</p>
          <p class="success__form-row-info">
            {{ contact.fullName }}
          </p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Email</p>
          <p class="success__form-row-info">
            {{ contact.email }}
          </p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Number</p>
          <p class="success__form-row-info">
            {{ contact.number }}
          </p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Subject</p>
          <p class="success__form-row-info">{{ contact.subject }}</p>
        </div>
        <div class="success__form-row">
          <p class="success__form-row-title">Message</p>
          <p class="success__form-row-info">{{ contact.message }}</p>
        </div>
      </div>
    </section>
    <div class="polkaDot polkaDot--bottom"></div>
  </main>
</template>
<script lang="ts" setup>
const config = useRuntimeConfig();

useSeoMeta({
  title: "Contact | Dance Xpress",
  ogTitle: "Contact | Dance Xpress",
  description:
    "Have a question? Fill out the form that is provided on this page and I'll be sure to get back to you!",
  ogDescription:
    "Have a question? Fill out the form that is provided on this page and I'll be sure to get back to you!",
  ogImage: "/contact-ogimg.jpg",
});

// CONTACT FORM
interface Contact {
  fullName: string;
  email: string;
  number: string;
  subject: string;
  message: string;
  botcheck: boolean;
}
const contact = ref<Contact>({
  fullName: "",
  email: "",
  number: "",
  subject: "",
  message: "",
  botcheck: false,
});
/// validation
const error = ref<Array<string>>([]);
/// submit form
async function submitForm() {
  //// validate all fields
  error.value = [];
  if (!contact.value.fullName) {
    error.value.push(`Your ${"full name".toUpperCase()} is empty.`);
  }
  const validateEmail: RegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!contact.value.email.match(validateEmail)) {
    error.value.push(`Your ${"Email".toUpperCase()} is empty or invalid.`);
  }
  if (!contact.value.number) {
    error.value.push(`Your ${"number".toUpperCase()} is empty or invalid.`);
  }
  if (!contact.value.subject) {
    error.value.push(`Please select a ${"subject".toUpperCase()}.`);
  }
  if (!contact.value.message) {
    error.value.push(`Please enter a ${"message".toUpperCase()}.`);
  }
  //// front end validation before submission
  if (
    !contact.value.fullName ||
    !contact.value.email.match(validateEmail) ||
    !contact.value.number ||
    !contact.value.subject ||
    !contact.value.message
  ) {
    return;
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
        replyto: contact.value.email,
        botcheck: contact.value.botcheck,
        from_name: "Dancexpresslv.com",
        "Full Name": contact.value.fullName,
        Email: contact.value.email,
        Number: contact.value.number,
        subject: contact.value.subject,
        message: contact.value.message,
      }),
    });
    success.value = true;
  } catch (e) {
    console.log("something broke \n", e);
  }
}
// success screen
const success = ref<boolean>(false);
</script>
<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  background: $light-pink;
  border-radius: 12px;
  padding: #{fluid(35px, 59px)} 10px;
  grid-area: 1 / 1 / 2 / 2;
  z-index: 2;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;

  @include laptop {
    margin-top: 80px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 100%;

    &-btn {
      font-family: $subtitle-font;
      font-size: #{fluid(24px, 40px)};
      color: $pink;
      border-radius: 12px;
      background: $black;
      padding: 10px 0px;
      cursor: pointer;
      border: none;
      box-shadow: 0px 12px 2px 6px $pink;
      transition: 0.2s ease-in-out;
      display: block;
      max-width: 255px;

      @include mobile {
        max-width: 100%;
      }

      &:hover {
        box-shadow: 0px 0px 2px 12px $white;
      }
    }

    &-error {
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

    &-input {
      width: 100%;
      font-family: $body-font;
      font-size: #{fluid(16px, 20px)};
      background: $pink;
      border-radius: 35px;
      border: 1px solid $black;
      padding: 8px 15px;
      font-weight: 400;
      margin-bottom: 25px;
    }

    &-label {
      font-family: $body-font;
      font-size: #{fluid(16px, 24px)};
      font-weight: 700;
      margin-bottom: 12px;
      width: 100%;
    }
  }

  &__subtitle {
    font-family: $body-font;
    font-size: #{fluid(16px, 24px)};
    font-weight: 400;
    margin-bottom: #{fluid(30px, 79px)};
    text-align: center;
  }

  &__title {
    @include title-size;
    margin-bottom: 11px;
    text-align: center;
  }
}

main {
  @include edge-padding;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.polkaDot {
  background-image: radial-gradient(#d16f82 20%, transparent 20%),
    radial-gradient(#d16f82 20%, transparent 20%);
  background-color: transparent;
  background-position: 0 0, 50px 50px;
  background-size: 25px 25px;
  width: #{fluid(150px, 650px)};
  height: #{fluid(600px, 700px)};
  overflow: hidden;
  grid-area: 1 / 1 / 2 / 2;
  z-index: 1;

  &--bottom {
    margin-top: auto;
    margin-left: auto;
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
  grid-area: 1 / 1 / 2 / 2;
  z-index: 2;
  width: 100%;
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
