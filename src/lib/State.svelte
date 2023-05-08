<script>
    import * as d3 from "d3";
    import { data } from "../data/data";
    import TooltipPoint from "./Tooltip.svelte";

    export let stateData;
    export let cellWidth;
    export let cellHeight;

    let tooltipOpacity = 0;

    const xScale = d3.scaleLinear()
        .domain(d3.extent(stateData.sort((a, b) => a.year - b.year), d => d.year))
        .range([0, cellWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max($data, d => d.total)])
        .range([cellHeight, 0]);

    const area = d3.area()
        .curve(d3.curveNatural)
        .x(d => xScale(d.year))
        .y0(cellHeight)
        .y1(d => yScale(d.total));

    const bisect = d3.bisector((d) => d.year).right;

    let m = { x: 0, y: 0 };
    let point = stateData[0];

	function handleMousemove(event) {
        m.x = event.offsetX;
        m.y = event.offsetY;

        let 
        x0 = xScale.invert(m.x),
        i = bisect(stateData, x0, 1),
            d0 = stateData[i - 1],
            d1 = stateData[i];        

        point = x0 - d0.year > d1.year - x0 ? d1 : d0;
	}

    const path = area(stateData);

    const line = d3.line()
        .curve(d3.curveNatural)
        .x(d => xScale(d.year))
        .y(d => yScale(d.total));
</script>

<g >
    <!-- <defs>
        <linearGradient id="area-gradient"  x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#fff" />
          <stop offset="100%" stop-color="lightseagreen" />
        </linearGradient>
      </defs> -->
    <path d={path} fill="lightblue" class="area"/>
    <path d={line(stateData)} class="line"/>
    <text x={cellWidth/2} y=20 class="state-label">
        {stateData[0].state_code}
    </text>
    <line
        x1=0
        x2={cellWidth}
        y1={yScale(3)}
        y2={yScale(3)}
        class="grid-line"
    ></line>
    <text x={cellWidth-4} y={cellHeight/2} class="grid-line-label">3%</text>
    
    <TooltipPoint x={xScale(point.year)} y={yScale(point.total)} opacity={tooltipOpacity} {point}/>
</g>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<rect 
    x={0},
    y={0},
    width={cellWidth}
    height={cellHeight}
    opacity={0}
    on:mousemove={handleMousemove}
    on:mouseover={() => tooltipOpacity=1}
    on:mouseout={() => tooltipOpacity=0}
>

</rect>

<style>
    path {
        shape-rendering: crispEdges;
    }

    .line {
        stroke: lightseagreen;
        stroke-width: 2;
        fill: transparent;
    }

    .area {
        /* fill: url(#area-gradient); */
        fill: lightseagreen;
        opacity: 0.3;
    }

    .state-label {
        text-anchor: middle;
        font-size: 12px;
        font-weight: 500;
        fill: hsl(177, 70%, 24%);
    }

    .grid-line {
        stroke: lightseagreen;
        stroke-dasharray: 2;
        stroke-width: 0.6;
    }

    .grid-line-label {
        font-size: 10px;
        text-anchor: end;
        fill: lightseagreen;
    }
</style>