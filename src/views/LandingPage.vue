<template>
    <div>
        <carousel/>
        <br>
        <products/>  
        <foot/>
    </div>
    
</template>

<script >
import carousel from '../components/Carousel.vue'
import products from '../components/Productos.vue'
import foot from '../components/Footerbooks.vue'
export default({
    name: 'index',
    components:{
    carousel,
        products,
        foot
    }    
})
</script>