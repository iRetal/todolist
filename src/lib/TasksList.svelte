<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime";
  import TaskListItems from "./TaskListItems.svelte";
  import { fade } from "svelte/transition";

  dayjs.extend(relativeTime);
</script>

{#if $tasks.length == 0}
 <dev class="flex flex-col items-center justify-center h-[50dvh]">
  <img src="/noTask.png" class="w-32 h-32" alt="لوحة"/>
  ليس لديك أي مهام
</dev>
{:else}
{#if $tasks.filter((task) => !task.isDone).length > 0}
<ol transition:fade class="gap-2 flex flex-col">
  <h3>المهام المتبقية:</h3>
  <TaskListItems doneTasks={false}/>
</ol>
{/if}

{#if $tasks.filter((task) => task.isDone).length > 0}
<ol class="gap-2 flex flex-col">
  <h3>المهام المكتملة:</h3>
  <TaskListItems doneTasks={true}/>
</ol>
{/if}
{/if}