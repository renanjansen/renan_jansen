<template>
    <div>
        <div class="container p-2 mb-5 shadow-lg">
            <div class="row pb-5" id="grad_cert">
                <div class="col text-white">
                    <div id="carouselExampleControls" class="carousel slide rounded" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <iframe src="src/Certificados/1.pdf" class="d-block w-100" style="height: 600px;" frameborder="0"></iframe>
                          </div>
                          <div class="carousel-item" v-for="index in 33" :key="index">
                            <iframe :src="`src/Certificados/${index}.pdf`" class="d-block w-100" style="height: 600px;" frameborder="0"></iframe>
                          </div>

                          <!-- Outros itens do carrossel -->
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                     </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
</script>

<style scoped>
</style>
