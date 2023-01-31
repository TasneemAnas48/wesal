<template>
    <div class="scroll">
        <button class="scroll-to-top" v-scroll-to="'#header'">
            <b-icon icon="chevron-up"></b-icon>
        </button>
    </div>
</template>

<script>
export default {
    name: "Scroll",
    data() {
        return {
        };
    },
};
</script>


<style >
.scroll-to-top {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    right: 4%;
    top: 80%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 7px 15px rgba(30, 115, 148, 0.342);
    cursor: pointer;
    border: none;
}

.bi-chevron-up {
    font-size: 30px;
}
</style>
