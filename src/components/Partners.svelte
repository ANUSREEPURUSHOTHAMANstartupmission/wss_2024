<script>
  export let partners;

</script>



<div class="flex flex-wrap justify-center">
  {#each partners as partner}
    <div class="w-1/2 p-3 md:w-44">
      <div class="bg-white shadow-md">
        <img src="/img/{partner.image}" alt="partners">
      </div>
    </div>
  {/each}
</div>
