<template>
    <div class="android-box">
        <header :style="{'background-color': colorValue.color}">
            <span>Android 建</span>
            <div class="eye-l" :style="{'background-color': colorValue.eyesColor}"></div>
            <div class="eye-r" :style="{'background-color': colorValue.eyesColor}"></div>
        </header>
        <main :style="{'background-color': colorValue.color}">
            <div class="hand-l" :style="{'background-color': colorValue.color}"></div>
            <div class="hand-r" :style="{'background-color': colorValue.color}"></div>
        </main>
        <footer>
            <div class="foot-l" :style="{'background-color': colorValue.color}"></div>
            <div class="foot-r" :style="{'background-color': colorValue.color}"></div>
        </footer>
    </div>
</template>

<script>
export default {
    props: ['colorValue']
}
</script>
<style lang="scss" scoped>
.android-box {
    margin: 0 auto;
}

header {
    width: 250px;
    height: 125px;
    margin: 10px auto;
    border-radius: 125px 125px 0 0;
    position: relative;
    text-align: center;
    span{
        font-size: 16px;
        color: #fff;
    }
}

.eye-l,
.eye-r {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    bottom: 40px;
}

.eye-l {
    left: 70px;
}

.eye-r {
    right: 70px;
}

main {
    width: 250px;
    height: 250px;
    margin: 0px auto;
    border-radius: 0px 0px 20px 20px;
    position: relative;
}

.hand-l,
.hand-r {
    content: "";
    position: absolute;
    width: 30px;
    height: 180px;
    top: 20px;
    border-radius: 10px;
}

.hand-l {
    left: -40px;
}

.hand-r {
    right: -40px;
}

footer {
    width: 250px;
    height: 100px;
    margin: 0 auto;
    position: relative;
}

.foot-l,
.foot-r {
    content: "";
    position: absolute;
    width: 30px;
    height: 80px;
    top: 0;
    border-radius: 0 0 20px 20px;
}

.foot-l {
    left: 50px;
}

.foot-r {
    right: 50px;
}
</style>
