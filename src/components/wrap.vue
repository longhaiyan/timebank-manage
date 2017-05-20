<template>
    <div class="my-wrap">
        <div class="my-wrap_hd">
            <h3>{{title}}</h3>
        </div>
        <div class="my-wrap_body">
            <slot name="content"></slot>
        </div>
        <!--<div class="my-wrap_footer" v-if="hasFooter">
            <slot name="footer"></slot>
        </div>-->
    </div>
</template>
<script>
  export default{
    name: 'Wrap',
    props: ['title'],
  }
</script>