<template>
  <img
    :src="profile"
    class="thumbnail img-fluid z-depth-1 rounded-circle"
    style="height: 175px; width: 175px"
    alt="Responsive image"
  />
</template>

<script>
import profile from "@/assets/images/julius-profile.jpg";

export default {
  data: function () {
    return {
      profile: profile,
    };
  },
};
</script>

<style>
.thumbnail {
  border: 5px solid white;
}
</style>
