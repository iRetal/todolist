<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
    import dayjs from 'dayjs';
    import 'dayjs/locale/ar';
	import {filter} from "$lib/stores/filter";

	dayjs.locale('ar')

	let period = dayjs().format('a') == "م" ? "مساء" : "صباح";


const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};
				
</script>

<header class="flex justify-between">
    <div>
        <h1 class="text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-2">
            {period} الخير 👋
        </h1>
        <h2 class="text-base sm:text-lg md:text-lg lg:text-xl text-surface-900" >
        {dayjs().format('اليوم, dddd D MMMM YYYY')}
        </h2>
    </div>
    
<button class="btn !bg-white w-40 sm:w-40 md:40 lg:46 xl:50 h-fit py-4 justify-between" use:popup={popupCombobox}>
	<span>{$filter}</span>
	<span class="!m-0">
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569z"/></svg>
	</span>
</button>
					
<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none" active="variant-filled-primary">
		<ListBoxItem bind:group={$filter} name="medium" value="جميع المهام">جميع المهام</ListBoxItem>
		<ListBoxItem bind:group={$filter} name="medium" value="مهام اليوم">مهام اليوم</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					
</header>