<script>
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
</script>

<ol class="gap-2 flex flex-col">
  {#each $tasks as task}
    <li class="bg-white p-2 rounded-lg flex justify-between items-center">
      <div>
        <input
          class="checkbox h-7 w-7 bg-white border-2 border-gray-300"
          type="checkbox"
        />
        <span class="mr-3"> {task.title} </span>
      </div>
      <div class="flex gap-1">
        <button
          class="btn text-black variant-filled-surface hover:bg-surface-700"
        >
          {dayjs()}
        </button>
        <button
          class="btn variant-filled-surface hover:bg-surface-700 p-[0.7rem]"
        >
          <svg
            class=" text-black w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            ><g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              ><circle cx="8" cy="2.5" r=".75" /><circle
                cx="8"
                cy="8"
                r=".75"
              /><circle cx="8" cy="13.5" r=".75" /></g
            ></svg
          >
        </button>
      </div>
    </li>
  {/each}
</ol>
