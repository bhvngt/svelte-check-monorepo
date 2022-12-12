<script lang="ts">
    import type {Hst} from "@histoire/plugin-svelte";
    import Button from "./Button.svelte";

    export let Hst: Hst
</script>

<Hst.Story>
    <Button>Link</Button>
</Hst.Story>