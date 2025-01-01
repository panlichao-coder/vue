<template>
    <div class="app">
        <my-slot-cpn></my-slot-cpn>
        <my-slot-cpn>
            <button>我是按钮</button>
        </my-slot-cpn>
        <my-slot-cpn>
            我是文本
        </my-slot-cpn>
        <my-slot-cpn>
            <my-button></my-button>
        </my-slot-cpn>
        <my-slot-cpn>
            <my-button></my-button>
            <span>我是span</span>
            <strong>我是strong</strong>
        </my-slot-cpn>
    </div>
</template>
<script>
import mySlotCpn from "./MySlotCpn.vue";
import myButton from "./MyButton.vue";
export default {
    components: {
        mySlotCpn,
        myButton,
    },
};
</script>