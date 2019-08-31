<script>
  import { size, type, startWithLorem } from './lorem.store'

	// TODO max number in base al tipo
</script>

<form class="flex items-start">
  <div class="flex-auto">
    <ul class="list pl0">
      <li>
        <label>
          <input type="radio" bind:group={$type} value="paragraph">
          Paragraphs
        </label>
      </li>
      <li>
        <label>
          <input type="radio" bind:group={$type} value="sentence">
          Sentences
        </label>
      </li>
      <li>
        <label>
          <input type="radio" bind:group={$type} value="word">
          Words
        </label>
      </li>
      <li>
        <label>
          <input type="radio" bind:group={$type} value="list">
          Lists
        </label>
      </li>
      <li>
        <label>
          <input type="radio" bind:group={$type} value="byte">
          Bytes
        </label>
      </li>
    </ul>
  </div>

  <div class="flex-auto">
    <div>
      <label>
        Number:
        <input type="number" min="1" bind:value={$size} class="input-reset ba br2 pa1">
      </label>
    </div>
    <div>
      <label>
        <input type=checkbox bind:checked={$startWithLorem}>
        Start with "Lorem ipsum&hellip;"
      </label>
    </div>
  </div>

</form>
