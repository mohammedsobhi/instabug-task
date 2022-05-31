<template>
  <div class="or"> OR </div>
</template>

<style lang="scss" scoped>

.or {
  width: 100%;
  display:flex;
  align-items: center;
  gap: $space-s;
  color: $blue-text;
  font-weight: 600;
  margin: $space-s 0;
  &:after,
  &:before {
    content: "";
    flex-grow: 1;
    height: 0.75px;
    background-color: $gray-color;
  }
}

</style>