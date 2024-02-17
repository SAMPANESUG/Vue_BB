<template>
  <h1>Hello,Huiseong / 안녕, 희성</h1>
</template>

<script>
import apiBoard from '@/api/board';

export default {
  mounted() {
    apiBoard.getArticle(1)
      .then(function (response) {
        console.log("getArticle", response);
      })
      .catch(function (e) {
        console.log(e);
      });
  }
}
</script>
