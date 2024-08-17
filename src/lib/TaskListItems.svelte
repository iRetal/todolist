<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
  import { slide } from 'svelte/transition';
  import { filter } from "$lib/stores/filter";

  const modalStore = getModalStore();


  dayjs.extend(relativeTime);

  
  export let doneTasks: boolean;

  function confirmDelete(task: Task) {
    const modal: ModalSettings = {
      type: "confirm",
      title: "يرجى التأكيد",
      body:`هل انت متأكد من رغبتك في حذف المهمة؟ "${task.title}"`,
      buttonTextCancel: 'إلغاء',
      buttonTextConfirm: 'تأكيد',
      response: (r: boolean) => {
        if (r) {
          tasks.update((currentTasks) => {
            let index = currentTasks.indexOf(task);
            currentTasks.splice(index, 1);
            return currentTasks;
          })
        }
      }
    };
    modalStore.trigger(modal);
  }

  function applyFilter(filter: typeof $filter, task: Task): boolean {
    switch (filter) {
      case "مهام اليوم":
        return dayjs(task.assighnedDate).unix() - dayjs().unix() <= 24 * 60 * 60
      case "جميع المهام":
      default:
        return true;
    }
  }
</script>

{#each $tasks as task}
  {#if task.isDone == doneTasks && applyFilter($filter, task)}
    <li
    transition:slide
     class="bg-white p-2 rounded-lg flex justify-between items-center">
      <div>
        <input
          bind:checked={task.isDone}
          class="checkbox h-7 w-7 bg-white border-2 border-gray-300"
          type="checkbox"
        />
        <span class="mr-3"> {task.title} </span>
      </div>
      <div class="flex gap-1">
        <button
          class="btn text-black variant-filled-surface hover:bg-surface-700"
        >
          {dayjs().to(dayjs(task.assighnedDate))}
        </button>
        <button
          on:click={() => confirmDelete(task)}
          class="btn variant-filled-surface hover:bg-surface-700 p-[0.7rem]"
        >
          <svg
            class="text-black w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            ><path
              fill="currentColor"
              d="M7 3h2a1 1 0 0 0-2 0M6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM9.5 6a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m-4.74 6.703A1.5 1.5 0 0 0 6.246 14h3.508a1.5 1.5 0 0 0 1.487-1.297L12.427 4H3.573z"
            /></svg
          >
        </button>
      </div>
    </li>
  {/if}
{/each}
