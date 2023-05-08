<script>
    import { data } from "../data/data"; 
    import State from "./State.svelte";

    let width = 1200, height = 800;
    const grid = [];

    const states = $data.filter(d => d.year === 2021)

    for(let i=1; i<=8; i++) {
        for(let j=1; j<=11; j++) {
            grid.push({row: i, column: j, state:"", class: "blank"})
        }
    }

    grid.forEach(g => {
        states.forEach(state => {
            if (g.row === state.row && g.column === state.col) {
                g.state = state.state_code;
                g.class = "state"
            }             
        })
    })
</script>

<div class="container" style="width:{width}px; height:{height}px">
    {#each grid as g}
        <div class="grid-box {g.class} {g.state}" >
            {#if g.state !== ""}
                <svg width={width/11} height={height/8} >
                    <State 
                        stateData={$data.filter(d => d.state_code === g.state)}
                        cellWidth={width/11}
                        cellHeight={height/8}
                    />
                </svg> 
            {/if}
        </div>
    {/each}
</div>

<style>
    svg {
        overflow: visible;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        gap: 12px;
    }

    .state {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blank {
        border: none;
        visibility: hidden;
    }
</style>