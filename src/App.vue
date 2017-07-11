<template>
  <div id="app">
  	<Top-header></Top-header>
  	<Tab></Tab>
  	<keep-alive>
  		<router-view></router-view>
  	</keep-alive>
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