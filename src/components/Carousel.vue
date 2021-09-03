<template>
    <div>
        <b-carousel
            id="carrousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
        >
            <b-carousel-slide>
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                    style = "height:80vh!important;"
                    :src="require('@/assets/Slide1.jpg')" 
                    alt="image_slot">
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                    style = "height:80vh!important;"
                    :src="require('@/assets/Slide2.jpg')" 
                    alt="image_slot">
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template v-slot:img>
                    <img class="d-block img-fluid w-100"
                    style = "height:80vh!important;"
                    :src="require('@/assets/Slide3.jpg')" 
                    alt="image_slot">
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
    
</template>

<script>


export default ({
    data() {
        return{
            slide: 0,
            sliding: null
        }
    },

    methods:{

    }
})
</script>
