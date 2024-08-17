<script lang="ts">
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";

  let title = "";
  let datetime = dayjs().add(1, "hour").format("YYYY-MM-DDTHH:mm");

  function addTask() {
    tasks.update((currentTasks) => {
      currentTasks.push({
        title,
        assighnedDate: datetime,
        isDone: false,
      });

      return currentTasks.sort((a:Task, b:Task) => {
        return dayjs(a.assighnedDate).unix() - dayjs(b.assighnedDate).unix();
      });
    });
    title = "";
  }
</script>

<form
 class="input-group input-group-divider flex flex-col md:flex-row justify-betwen bg-white">
  <input
    bind:value={title}
    class="flex-1"
    type="search"
    placeholder="عنوان المهمة"
  />
  <input
  bind:value={datetime}
   class="input sm:w-fit" 
   title="Input (datetime-local)"
    type="datetime-local" />
  <button type="submit" on:click={addTask} class="variant-filled-primary p-2 {title.trim().length == 0 && 'bg-blue-100'}" disabled={title.trim().length == 0}>
    <span class="mx-auto">إضافة</span></button>
</form>
