<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated class="glossy">
            <q-toolbar>
                <q-toolbar-title> Quasar App </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'LayoutDefault',

    components: {},

    setup() {
        return {
            leftDrawerOpen: ref(false)
        };
    }
};
</script>
