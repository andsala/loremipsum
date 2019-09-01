<script>
  import { size, type, startWithLorem } from '../stores/lorem.store'

  // TODO max number in base al tipo
</script>

<form class="pt-3">
  <div class="form-group">
    <label class="sr-only" for="opt-number">Number</label>
    <input class="form-control" type="number" min="1" id="opt-number" bind:value={$size}>
  </div>

  <div>
    <div class="custom-control custom-radio">
      <input class="custom-control-input" type="radio" id="opt-type__paragraph" bind:group={$type} value="paragraph">
      <label class="custom-control-label" for="opt-type__paragraph">Paragraphs</label>
    </div>
    <div class="custom-control custom-radio">
      <input class="custom-control-input" type="radio" id="opt-type__sentence" bind:group={$type} value="sentence">
      <label class="custom-control-label" for="opt-type__sentence">Sentences</label>
    </div>
    <div class="custom-control custom-radio">
      <input class="custom-control-input" type="radio" id="opt-type__word" bind:group={$type} value="word">
      <label class="custom-control-label" for="opt-type__word">Words</label>
    </div>
    <div class="custom-control custom-radio">
      <input class="custom-control-input" type="radio" id="opt-type__list" bind:group={$type} value="list">
      <label class="custom-control-label" for="opt-type__list">Lists</label>
    </div>
    <div class="custom-control custom-radio">
      <input class="custom-control-input" type="radio" id="opt-type__byte" bind:group={$type} value="byte">
      <label class="custom-control-label" for="opt-type__byte">Bytes</label>
    </div>
  </div>

  <div class="custom-control custom-switch">
    <input class="custom-control-input" type=checkbox id="opt-start-lorem" bind:checked={$startWithLorem}>
    <label class="custom-control-label" for="opt-start-lorem">Start with "Lorem ipsum&hellip;"</label>
  </div>

</form>
