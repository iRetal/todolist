<script lang="ts">
	import Header from "$lib/Header.svelte";
    import TaskInput from "$lib/TaskInput.svelte";
    import TaskList from "$lib/TasksList.svelte";
</script>

<div class="p-5 sm:p-7 md:p-8 lg:p-10 xl:p-12 flex flex-col gap-8 max-w-screen-lg mx-auto">
    <Header />
    <TaskInput />
    <TaskList />
</div>