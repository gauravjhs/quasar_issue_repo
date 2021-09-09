<template>
    <div class="row">Documents</div>
</template>
<script>
export default {
    name: 'TestPageDocuments',
    props: ['testParam'],
    created() {
        console.log(this.testParam);
    }
};
</script>
