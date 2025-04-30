<template>
  <fieldset class="legend">
    <legend>LEGEND</legend>
    <div>
      <span class="legend__key">hazard</span>
      <br />
      <span class="legend__definition">A potentially harmful problem that must be dealt with directly.</span>
    </div>
    <div>
      <span class="legend__key">obstacle</span>
      <br />
      <span class="legend__definition">Any impediment to travel that must be overcome or circumnavigated.</span>
    </div>
    <div>
      <span class="legend__key">area</span>
      <br />
      <span class="legend__definition">A stretch of territory, distinguished from its parent region by some key difference.</span>
    </div>
    <div>
      <span class="legend__key">site</span>
      <br />
      <span class="legend__definition">A notable location at a specific spot on the map determined before or during play.</span>
    </div>
  </fieldset>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.legend {
  font-family: "Alegreya", serif;

  border: 2px solid white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  padding: 1em;
  margin-block: 1em;

  legend {
    padding-inline: 1em;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.8em;

  }

  .legend {
    &__key {
      color: white;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>
