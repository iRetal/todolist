<script lang="ts">
    import dayjs from 'dayjs';
    import 'dayjs/locale/ar';

	dayjs.locale('ar')

	let period = dayjs().format('a') == "م" ? "مساء" : "صباح";
</script>

<header class="flex justify-between">
    <div>
        <h1 class="text-4xl mb-2">
            {period} الخير 👋
        </h1>
        <h2 class="text-lg text-surface-900/30" >
        {dayjs().format('اليوم, dddd D MMMM YYYY')}
        </h2>
    </div>
    <div class="bg-slate-400 w-20 h-20">

    </div>
</header>