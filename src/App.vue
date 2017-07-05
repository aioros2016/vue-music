<template>
  <div id="app">
  	<Top-header></Top-header>
  	<Tab></Tab>
  	<router-view></router-view>
  </div>
</template>

<script>
import TopHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  name: 'app',
  components: {
  	TopHeader,
  	Tab
  }
}
</script>