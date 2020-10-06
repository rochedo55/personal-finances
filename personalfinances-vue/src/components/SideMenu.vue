<template>
    <div class="sidemenu">
        <ul class="sidemenu-options">
            <li v-bind:key="botao.title" v-for="botao in getItems" class="item" v-bind:class="{active:botao.isActive}">
                <a href="">
                    <font-awesome-icon  v-if="botao.isActive" :icon="botao.icon" :style="{ color: '#334ca5', fontSize:'18px' }"/>
                    <font-awesome-icon  v-else :icon="botao.icon" :style="{ color: '#ccc', fontSize:'18px' }"/>
                    {{botao.title}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            botoes: [
                {
                    title:"home",
                    icon:"home",
                    isActive: true
                },
                {
                    title:"Despesas",
                    icon:"receipt",
                    isActive: false
                },
                {
                    title:"Receitas",
                    icon:"hand-holding-usd",
                    isActive: false
                }
            ]            
        }
    },
    props: ['currentPage'],
    computed: {
        getItems: function() {
            return this.botoes.map(botao => {
                return {
                    ...botao,
                    isActive: this.currentPage == botao.title ? true : false
                }
            })
        }
    }
}
</script>

<style escoped>
.sidemenu{
    position:absolute;
    top:63px;
    left:0;
    height: calc(100vh - 63px);
    background-color: #f5f5f5;
}
.sidemenu .sidemenu-options {
    list-style: none;
}
.sidemenu .sidemenu-options .item {
    margin: 10px 0;
}
.sidemenu .sidemenu-options .item a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    padding: 10px 7px;
    color: #ccc;
}
.sidemenu .sidemenu-options .item.active a {
    color: #334ca5;
}
.sidemenu .sidemenu-options .item a i {
    font-size: 18px;
}
</style>