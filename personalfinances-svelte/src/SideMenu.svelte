<script>
    import Icon from 'fa-svelte'
    import { faHome, faReceipt,faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
    
    export let currentPage;

    let botoes = [
        {
            title: "Home",
            icon: faHome
        },
        {
            title: "Despesas",
            icon: faReceipt
        },
        {
            title: "Receitas",
            icon: faHandHoldingUsd
        }
    ];
    
    function getItems() {
        return botoes.map(botao => {
            return {
                ...botao,
                isActive: currentPage == botao.title
            }
        })
    }
</script>


<div class="sidemenu">
    <ul class="sidemenu-options">
        {#each getItems() as botao}
            <li class="item {botao.isActive ? 'active': ''}">
                <a href="">
                    <Icon class="sidemenu-icon" icon={botao.icon}></Icon>
                    {botao.title}
                </a>
            </li>
        {/each}        
    </ul>
</div>


<style>
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
    .sidemenu .sidemenu-options .item a :global(.sidemenu-icon) {
        font-size: 18px;
    }
</style>