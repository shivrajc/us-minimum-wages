<script>
    import * as d3 from "d3";
    export let x = 0;
    export let y = 0;
    export let opacity = 0;
    export let point;

    const format = d3.format(".1f");
  </script>
  
  <g style="opacity:{opacity}; overflow:visible">
    <text {x} y={y-10} class="value-label">
        {format(point.total)}%
    </text>
    <circle class="point" cx={x} cy={y} r="4"/>
    <text {x} y={y+16} class="value-label">
        {point.year}
    </text>
  </g>
  
  <style>
    .point {
      fill: hsl(177, 70%, 24%);
    }

    .value-label {
        font-size: 9px;
        font-weight: 600;
        text-anchor: middle;
        text-align: center;
    }
  </style>