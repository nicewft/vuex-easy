<template>
  <div id="app">
    <router-view/>
    <!--<j-header></j-header>-->
    <div class="tab-bar">
      <ul>
        <li>
          <router-link to="/one">
            <span class="icon-rili one"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/two">
            <span class="icon-rili1 two"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/three">
            <span class="icon-rili3 three"></span>
          </router-link>
        </li>
        <li>
          <router-link to="/four">
            <span class="icon-rili2 four"></span>
          </router-link>
        </li>
        <!--<li>
          <router-link to="/five">
            <span class="icon-rili4 five"></span>
          </router-link>
        </li>-->
        <!--<li>
          <router-link to="/six">
            <span class="icon-rili13 six"></span>
          </router-link>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
import JHeader from '@/common/components/header.vue'
export default {
  components: {JHeader},
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ccc;
}

ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 60px;
  line-height: 60px;
}

li {
  flex: 1;
  text-align: center;
}

.one,
.two,
.three,
.four,
.five,
.six {
  font-size: 40px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #666;
  display: block;
}
.list-active{
  background-color: #F2B416;
  color: #fff;
}
</style>
