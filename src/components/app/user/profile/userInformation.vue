<template>
  <div class="row">
    <div class="col-xs-5 flex flex-center q-mt-lg q-mb-lg">
      <img src="https://picsum.photos/500" class="avatar-full-width">
    </div>
    <div class="col-xs-7">
      <div class="row">
        <div class="col-xs-12 q-mt-xl min-line-height">
          <p class="text-color-primary">
            <b>Nombre Completo</b>
          </p>
          <p>
            <span class="text-color-primary">
              <b>CC</b>
            </span> 
            1110.000.000</p>
          <p>
            <q-icon name="person" color="primary" class="min-line-height"/>
            Cargo del Usuario</p>
          <p>
            <q-icon name="email" color="primary" class="min-line-height"/>
            usuario@ejemplo.com</p>
          <p>
            <q-icon name="phone" color="primary" class="min-line-height"/>
            +57 300 000 0000</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
  .avatar-full-width{
    width: 80%;
    border-radius: 50%
  }
  .min-line-height{
    line-height:5px;
  }
  .text-color-primary{
    color: #069535
  }
</style>