<template>
    <div>
        <div class="row p-5 ml-5">
            <div class="col text-white mt-5">
                <img :src="caminhoDaImagem" class="img-fluid img-thumbnail img-small-and-round" alt="...">
            </div>
            <div class="col text-white mt-5">
                <figure class="text-center">
                    <blockquote class="blockquote">
                        <p>...Every fortress falls It is not the end It ain't if you fall But how you rise that says Who you
                            really are...</p>
                    </blockquote>
                    <figcaption class="blockquote-footer text-dark">
                        Joshua Homme <cite title="Source Title"> in Fortress</cite>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div class="row  p-5 ml-5">
            <div class="col text-white">
                <h4 id="sobre-mim" class="pb-3 fs-1">Olá, eu sou Renan Jansen!</h4>
                <p class="fs-1">Analista de Sistemas, pós-graduando em Engenharia de Software, técnico em mecatrônica, e
                    apaixonado por tecnologia.</p>
                <p class="fs-1">Descobri na pandemia de 2019/2021 um mundo totalmente novo, repleto de
                    oportunidades e desafios, <i>"tô codando"</i> desde então.</p>
                <p class="fs-1"> Atuo como desenvolvedor fullstack na empresa DBSeller Sitemas Integrados desde dezembro de
                    2022.</p>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'SobreMim',
    components: {
    },
    props: {
        imagem: String,
    },
    data() {
        return {
            caminhoDaImagem: 'src/imagens/P_20191231_180445~2.jpg', // Defina o caminho da imagem
        };
    },
}
</script>


<style scoped>
.img-small-and-round {
    max-width: 100px;
    height: auto;
    border-radius: 50%;
    /* Isso torna a imagem redonda */
}
</style>

