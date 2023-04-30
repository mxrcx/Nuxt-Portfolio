<template>
    <section class="hero" id="contact">
      <p class="text-center title-text text-white">Contact</p>
      <b-row class="d-flex justify-content-center">
        <b-col lg="4" md="6" sm="8" cols="10" class="d-flex align-items-center">
          <p class="font-weight-bold text-white regular-text">Work with me!</p>
        </b-col>
      </b-row>
      <form action=“” method=“POST”>
      <div>
        <label for=“name”>Name </label>
        <input type=“text” name=“name” id=“name” required />
      </div>
      <div>
        <label for=“email”>Email </label>
        <input type=“email” name=“email” id=“email” required />
      </div>
      <div>
        <label for=“message”>Leave a Message </label>
        <textarea id=“message” name=“message” rows=“5” cols="33"></textarea>
      </div>
      <div>
        <button type="submit"></button>
      </div>
    </form>
      <BaseScrollTo desc="Send" variantColor="outline-light" descendTo="contact"/>
    </section>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  .hero {
    background-color: black;
    padding-bottom: 200px;
    padding-top: 100px;
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 79%);
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 79%);
  }
  </style>