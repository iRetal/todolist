<script>
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";
  let title = "";

  function addTask() {
    tasks.update((currentTasks) => {
      currentTasks.push({
        title,
        assighnedDate: dayjs(),
        isDone: false,
      });

      return currentTasks;
    });
    title = "";
  }
</script>

<div class="input-group input-group-divider flex justify-between">
  <input
    bind:value={title}
    class="flex-1 !bg-white"
    type="search"
    placeholder="عنوان المهمة"
  />
  <button class="variant-filled-primary">إضافة</button>
</div>
