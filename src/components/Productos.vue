<template>
    <div>
        <b-container>
            <b-row>
                <b-col cols="3" v-for="(book,index) in books" :key="index">
                    <b-card
                        img-height="400"
                        img-width="150"
                        :title=book.name
                        :img-src="require(`@/assets/Libros/Libro${index+1}.jpg`)"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mb-4"                    
                    >

                    <b-card-text>
                        <h5>Price: ${{book.price}}.00</h5>
                        <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
                        <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
                        <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
                        <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
                        <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
                    </b-card-text>

                    <b-button v-if="!book.cart" :disabled="book.cart" @click="book.cart=true,
                    addtocart(JSON.parse(JSON.stringify(book)))"    block href="#" 
                    variant="sucess">Añadir al carrito</b-button>
                    <b-button v-if="book.cart" :disabled="book.cart" 
                    block href="#" variant="warning">Ya fue añadido</b-button>
                                      

                    </b-card>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            books:[
                {
                    id:1,
                    name:"Cien años de soledad",
                    auth: "Gabriel García Marquez",
                    price:10000,
                    img: '@/assets/Libros/Libro1.jpg',
                    cart: false,
                    quantity:1
                },

                {
                    id:2,
                    name:"El olvido que seremos",
                    auth: "Héctor Abad",                
                    price:10000,
                    img: '@/assets/Libros/Libro2.jpg',
                    cart: false,
                    quantity:1
                },

                {
                    id:3,
                    name:"Así habló Zaratrusta",
                    auth: "Friederich Nietzche",
                    price:500000,
                    img: '@/assets/Libros/Libro3.jpg',
                    cart: false,
                    quantity:1
                },

                {
                    id:4,
                    name:"Orgullo y prejuicio",                    
                    auth: "Jane Austen",
                    price:10000,
                    img: '@/assets/Libros/Libro4.jpg',
                    cart: false,
                    quantity:1
                },

                {
                    id:5,
                    name:"La agonía de una flor",                     
                    auth: "Fernando Soto Aparicio",
                    price:10000,
                    img: '@/assets/Libros/Libro5.jpg',
                    cart: false,
                    quantity:1
                },

                {
                    id:6,
                    name:"Nombres y figuras",                    
                    auth: "Alejandra Pizarnik",
                    price:10000,
                    img: '@/assets/Libros/Libro6.jpg',
                    cart: false,
                    quantity:1
                }
            ]
        }
    },

    methods:{
        addtocart(product){

            let cart=[]
            if(JSON.parse(localStorage.getItem('products'))){
                cart=JSON.parse(localStorage.getItem('products'))
            }else{
                cart=[]
            }
            cart.push(product)
            localStorage.setItem('products',JSON.stringify(cart))
        }

    },
    created(){
        let cart=[]
        if (JSON.parse(localStorage.getItem('products'))){
            cart = JSON.parse(localStorage.getItem('products'))
        } else{
            cart=[]
        }
        for( let index=0;index<cart.length;index++){
            for (let index2 =0; index2<this.books.length;index2++){
                if(cart[index].id ==this.books[index2].id){
                    this.books[2].cart=true
                }
            }
        }
    }
}
</script>