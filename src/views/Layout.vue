<template>
  <div class="my-vuelive d-flex justify-content-between">
    <div class="my-vuelive-editor">
      <slot name="editor"><input type="button" value="update me" /> </slot>
    </div>
    <div class="my-vuelive-preview">d;e;l</div>
  </div>
</template>
<style>
.my-vuelive {
  border: 1px solid #ccc;
  height: 500px;
  border-radius: 10px;
}

.my-vuelive-editor {
  margin: 8px;
  flex-basis: 50%;
}

.my-vuelive-preview {
  margin: 8px;
  background: #fff;
}
</style>
