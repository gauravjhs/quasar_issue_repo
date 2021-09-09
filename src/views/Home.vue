<template>
    <div class="flex flex-centre">
        <router-view />
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    data() {
        return { testParam: 'Abc' };
    }
};
</script>
