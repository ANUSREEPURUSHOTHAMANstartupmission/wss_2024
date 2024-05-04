<script is:inline>
	import {onMount} from 'svelte';

	export let date;

	let countDate = new Date(date).getTime();
	let interval = null;

	let dayText = 0, hourText = 0, minText = 0, secText = 0;

	onMount(() => {
		interval = setInterval(moveTimer, 1000)
	})

	function moveTimer(){
		const now = new Date().getTime();
		const gap = countDate - now;

		const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

		if(gap < 0){
      clearInterval(interval);
			return;
    }

		const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / minute);
    const textSec = Math.floor((gap % minute) / second);

		dayText = textDay.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    hourText = textHour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    minText = textMin.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    secText = textSec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
	}

</script>

<div class="flex items-center justify-center flex-wrap">
	<div class="counter pantoncls md:w-20   md:h-20 w-16 h-16 text-white shadow font-bold font-heading md:text-xl text-lg px-2 py-8 bg-[#e74100] flex flex-col items-center justify-center">
		{dayText}
		<div class="md:text-base text-sm pantoncls font-light pantoncls">Days</div>
	</div>
	<div class=" counter pantoncls md:w-20   md:h-20 w-16 h-16 text-white shadow font-bold font-heading md:text-xl text-lg px-2 py-8 bg-[#e74100] flex flex-col items-center justify-center">
		{hourText}
		<div class="md:text-base text-sm font-light pantoncls">Hours</div>
	</div>
	<div class="counter pantoncls md:w-20   md:h-20 w-16 h-16 text-white shadow font-bold font-heading md:text-xl text-lg px-2 py-8 bg-[#e74100] flex flex-col items-center justify-center">
		{minText}
		<div class="md:text-base text-sm font-light pantoncls">Mins</div>
	</div>
	<div class="counter pantoncls md:w-20   md:h-20 w-16 h-16 text-white shadow font-bold font-heading md:text-xl text-lg px-2 py-8 bg-[#e74100] flex flex-col items-center justify-center">
		{secText}
		<div class="md:text-base text-sm font-light pantoncls">Secs</div>
	</div>
</div>

<style lang="scss">
	.counter{
		margin: .5rem;
	}

	

    @font-face {
    font-family: FontName;
    src:url('/css/font/Panton-Trial-Regular.woff2') format('woff2'), 
    url('/css/font/Panton-Trial-Regular.woff') format('woff'),
    url('/css/font/Panton-Trial-Regular.ttf') format('truetype');
}

.pantoncls{
    font-family: 'FontName', Helvetica, Arial, sans-serif
}
</style>