<script>
    import {onMount} from 'svelte';
  
    let speaker_list = [];
  
    onMount(()=>{
      fetch(`https://events.startupmission.in/api/event/wss-2023/speakers?category=speaker`)
          .then(response => response.json())
          .then((json) => {
            speaker_list = json;
          });
    });
  
  </script>
 
{#each Object.entries(speaker_list) as [category, speakers]}
<div class="mx-auto speakers__container ">

  <div class="grid grid-cols-1 gap-10 md:grid-cols-4 sm:grid-cols-3">

    {#each speakers as {name, designation, organisation, photo, linkedin}}

      <div class="bg-cover rounded-2xl h-[20rem] max-w-[18rem] w-full mx-auto speaker cursor-pointer bg-center" style={ 'background-image: url(' +photo+');' }>
    
        {#if linkedin}
          <a class="linkedin" href={linkedin} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
              <line x1="8" y1="11" x2="8" y2="16"></line>
              <line x1="8" y1="8" x2="8" y2="8.01"></line>
              <line x1="12" y1="16" x2="12" y2="11"></line>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </a>
        {/if}

        <div class="content">
          <h3 class="text-white">{name}</h3>
          <p>{designation}</p>
          {#if organisation}
            <p>{organisation}</p>
          {/if}
          <div class="mt-2 h-1 w-20 bg-pink-400"></div>
        </div>
    
      </div>
      
    {/each}
  </div>

</div>
{/each}


<style lang="scss">
  .speaker{
    position: relative;
    //width: 100%;
    overflow: hidden;

    &:hover{
      &::after{
        top: 0;
      }

      .content{
        top: 50%;
        p{
          visibility: visible;
        }
      }

      .linkedin{
        right: 20px;
      }
    }

    .linkedin{
      position: absolute;
      top: 20px;
      right: -30px;
      transition: all 500ms ease;
      z-index: 2;
    }

    .content{
      position: absolute;
      top: 78%;
      z-index: 2;
      padding: 15px 10px;
      transition: all 500ms ease;
      
      h3{
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: .5rem;
        

      }

      p{
        font-size: .9rem;
        font-weight: 300;
        
        visibility: hidden;
        transition: all 500ms ease;
      }
    }

    &::after{
      position: absolute;
      content: '';
      left: 0;
      top: 75%;
      border: 15px;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.8);
      z-index: 1;
      transition: all 500ms ease
    }
  }
</style>