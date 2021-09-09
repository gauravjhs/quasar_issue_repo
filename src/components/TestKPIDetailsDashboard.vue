<template>
    <div>
        <div class="col-12 fixed bg-secondary row full-width text-white" style="padding-top: 55px; z-index: 2">
            <q-tabs
                class="full-width"
                inline-label
                align="left"
                active-bg-color="white"
                active-color="secondary"
                indicator-color="transparent"
            >
                <q-route-tab :to="{ name: 'TestKPI' }" icon="home" />
                <q-route-tab no-caps :to="{ name: 'TestKPIDetails', props: { testParam } }" label="KPI" />
                <q-route-tab no-caps :to="{ name: 'TestPageDocuments', props: { testParam } }" label="Documents" />
            </q-tabs>
        </div>
        <router-view style="padding-top: 55px" />
    </div>
</template>
<script>
export default {
    props: {
        testParam: { type: String, required: false }
    }
};
</script>
