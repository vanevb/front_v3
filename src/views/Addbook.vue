<template>
    <div>
        <div id="CreateFull" class="Login">        
        <div id="Create">
            <div class="Title"><h1></h1></div>
            <form  v-on:submit.prevent="RegisterUser" >     
                <table class="adf">
                    <tr >           
                        <th><label class="coment" for="fuser">Título</label></th>
                        <th><input v-model="bookin.titulo" type="text" placeholder="100 años de soledad" id="fuser" name="fuser" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="femail">Año de publicación</label></th>
                        <th><input v-model="bookin.ano" type="number" placeholder="1967" id="fano" name="femail" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="fcel">Descripción</label></th>
                        <th><input v-model="bookin.descripcion" type="text" placeholder="[---]" id="fcdesc" name="fcel" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="femail">Cantidad</label></th>
                        <th><input v-model="bookin.cantidad" type="number" placeholder="2" id="fcant" name="femail" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="fcel">Precio</label></th>
                        <th><input v-model="bookin.precio" type="number" placeholder="$1500" id="fcprice" name="fcel" class="Campos"><br></th>
                    </tr>
                    <tr >           
                        <th><label class="coment" for="fcel">Imagen</label></th>
                        <th><input v-model="bookin.imagen" type="text" placeholder="" id="fcimg" name="fcel" class="Campos"><br></th>
                    </tr>
                </table>
                <button class="invert" type="submit" id="signIn" >Añadir</button>
                <button class="invert" type="submit" id="Volver" v-on:click="RegisterUser">Volver</button>
                
            </form>
            </div>         
        </div>    
        <div class="footer">  
            <h2>      
                
            </h2>
        </div>
    
</div>

</template>

<script>
// import axios from "axios";
import CreateBook from '../graphql/RegisterLibrosMutation.gql';
export default {
    apollo: {
        authorsBybook: {
            query: require('@/graphql/authorsBybook.gql')
        },
        categoriasBybook:{
            query:require('@/graphql/categoriasBybook.gql')
        },
        editorialsBybook:{
            query:require('@/graphql/editorialsBybook.gql')
        }      
    },
    name: "Create",
    data: function(){
        return{
            bookin:{
                titulo:"",
                ano:0,
                descripcion:"",
                precio:"",
                cantidad:0,
                imagen:"",
                authorsBybook:
                {
                    Author1:[{}]
                },
                categoriasBybook:{
                    Categoria1:[{}]
                },
                editorialsBybook:{
                    Editorial1:[{}]
                },
                AuthorId:1,
                CategoryId:1,
                EditorialId:1
            }

        }
    },

    methods:{
        RegisterUser:async function(){
            await this.$apollo.mutate({
                mutation:CreateBook,
                variables: {
                    registerLibrosLibros: {
                        titulo:this.bookin.titulo,
                        ano:parseInt(this.bookin.ano),
                        descripcion:this.bookin.descripcion,
                        precio:parseInt(this.bookin.precio),
                        cantidad:parseInt(this.bookin.cantidad),
                        imagen:this.bookin.imagen,
                        AuthorId:this.bookin.AuthorId,
                        CategoryId:this.bookin.CategoryId,
                        EditorialId:this.bookin.EditorialId
                    }
                }
            }).then((result) => {
                console.log(result)
                alert("Libro creado correctamente");
                this.$router.push({ name: 'index' })
            }).catch((error) => {
                alert(error);
            });
        },

        Volver: function(){
            this.$router.push({name:"login"})
        }
    }
}
</script>

<style>
button.invert {
        border-radius: 20px;
        border: 1px solid #082e55;
        background-color: orange;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 40px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform .1s ease-in;
        margin-top: 25px;
        margin-right: 25px;
        margin-left: 25px;
    }   

.adf{
        text-align: left;
        position: initial;
        margin: 2rem;
        align-content: center;
        align-items: center;
        margin-left: auto;
  margin-right: auto;
        
    }
.coment{
        font-family: sans-serif;
        color: #000000;
        font-size: ;
       
        display: block;
        align-items: center;
        align-self: center;
        align-content: center;
        margin-bottom: 1rem ;
        
    }

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

input[type=number] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  width: 500px;
  font-family: sans-serif;
}
</style>