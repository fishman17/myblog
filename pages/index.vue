<template>
  <div class="index">
    <list :articles="articles"></list>
  </div>
</template>

<script>
import List from '~/components/List.vue'

export default {
  data(){
    return {
      articles: [{id:1,title:2,content:3},{id:1,title:2,content:3},{id:1,title:2,content:3}]
    }
  },
  components: {
    List
  }
}
</script>

<style>
</style>
