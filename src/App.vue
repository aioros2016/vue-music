<template>
  <div id="app">
  	<Top-header></Top-header>
  	<Tab></Tab>
  	<keep-alive>
  		<router-view></router-view>
  	</keep-alive>
  	<Player></Player>
  </div>
</template>

<script>
import TopHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  name: 'app',
  components: {
  	TopHeader,
  	Tab,
  	Player
  }
}
</script>