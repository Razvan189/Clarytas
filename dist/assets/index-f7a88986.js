import{r as y,j as e}from"./index-d3dc8ec6.js";import{C as d}from"./auto-a199c2c6.js";import"./httpClient-458ee8d8.js";import{P as k}from"./PageBreadCrumb-4724c852.js";import{C as s}from"./ComponentContainerCard-ada72cf6.js";import{h as a}from"./chartjs-55811c8e.js";import{G as l}from"./Grid-c654f6c7.js";import{B as i}from"./Box-34926251.js";import"./assertThisInitialized-081f9914.js";import"./OutlinedInput-569485e6.js";import"./InputBase-0890acc9.js";import"./PageMetaData-9cc0daf9.js";import"./index.esm-f102f759.js";import"./Typography-92458322.js";import"./createSvgIcon-526ad4b9.js";import"./ButtonBase-27728b09.js";import"./TransitionGroupContext-50cf2de2.js";import"./useSlotProps-ef556448.js";import"./mergeSlotProps-792837f7.js";import"./Card-e7d212e6.js";import"./Paper-66d9b1bc.js";import"./CardContent-e59f288f.js";import"./Stack-431ac2e3.js";import"./styled-5f6f3a21.js";import"./useTheme-b6a8389b.js";const j={type:"line",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"Fully Rounded",data:[12.5,-19.4,14.3,-15,10.8,-10.5],borderColor:["#3e60d5"],backgroundColor:a("#3e60d5",.3),fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}},r=["#3e60d5","#fa5c7c","#47ad77","#ebeff2","#f56f36"],w={type:"line",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"D0",data:[10,20,15,35,38,24],borderColor:r[0],hidden:!0,backgroundColor:a(r[0],.3)},{label:"D1",data:[12,18,18,33,41,20],borderColor:r[1],fill:"-1",backgroundColor:a(r[1],.3)},{label:"D2",data:[5,25,20,25,28,14],borderColor:r[2],fill:1,backgroundColor:a(r[2],.3)},{label:"D3",data:[12,45,15,35,38,24],borderColor:r[3],fill:"-1",backgroundColor:a(r[3],.3)},{label:"D4",data:[24,38,35,15,20,10],borderColor:r[4],fill:8,backgroundColor:a(r[4],.3)}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{filler:{propagate:!1}},interaction:{intersect:!1},scales:{x:{grid:{display:!1}},y:{stacked:!0,grid:{display:!1}}}}},n=["#3e60d5","#47ad77"],D={type:"line",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"Fully Rounded",data:[10,20,15,35,38,24],borderColor:n[0],backgroundColor:n[0],fill:!0,pointBackgroundColor:"#fff",radius:5},{label:"Small Radius",data:[24,38,35,15,20,10],backgroundColor:a(n[1],.3),borderColor:n[1],borderWidth:1,pointBackgroundColor:"#fff",radius:5}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},filler:{propagate:!1}},interaction:{intersect:!1},scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}},t=["#3e60d5","#fa5c7c","#47ad77","#ebeff2","#f56f36"],B={type:"line",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"D0",data:[10,20,15,35,38,24],borderColor:t[0],fill:!0,backgroundColor:t[0]},{label:"D1",data:[12,18,18,33,41,20],borderColor:t[1],fill:!0,backgroundColor:t[1]},{label:"D2",data:[5,25,20,25,28,14],borderColor:t[2],fill:!0,backgroundColor:t[2]},{label:"D3",data:[12,45,15,35,38,24],borderColor:t[3],fill:!0,backgroundColor:t[3]},{label:"D4",data:[24,38,35,15,20,10],borderColor:t[4],fill:!0,backgroundColor:t[4]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},interaction:{mode:"nearest",axis:"x",intersect:!1},scales:{x:{title:{display:!0,text:"Month"},grid:{display:!1}},y:{stacked:!0,title:{display:!0,text:"Value"},grid:{display:!1}}}}},o=["#3e60d5","#fa5c7c","#47ad77","#ebeff2","#f56f36"],A={type:"radar",data:{labels:["Jan","Feb","March","April","May","June"],datasets:[{label:"D0",data:[10,20,15,35,38,24],borderColor:o[0],fill:"-1",backgroundColor:a(o[0],.3)},{label:"D1",data:[12,18,18,33,41,20],borderColor:o[1],fill:!1,backgroundColor:a(o[1],.3)},{label:"D2",data:[5,25,20,25,28,14],borderColor:o[2],fill:"-1",backgroundColor:a(o[2],.3)},{label:"D3",data:[12,45,15,35,38,24],borderColor:o[3],fill:"-1",backgroundColor:a(o[3],.3)}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},filler:{propagate:!1}}}},_=()=>(y.useEffect(()=>{const c=document.getElementById("boundaries-example"),p=new d(c,j),f=document.getElementById("dataset-example"),u=new d(f,w),m=document.getElementById("draw-time-example"),b=new d(m,D),g=document.getElementById("stacked-example"),x=new d(g,B),C=document.getElementById("radar-example"),h=new d(C,A);return()=>{p.destroy(),u.destroy(),b.destroy(),x.destroy(),h.destroy()}},[]),e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Chartjs",subName:"Charts"}),e.jsxs(l,{container:!0,spacing:3,children:[e.jsx(l,{item:!0,xl:6,xs:12,children:e.jsx(s,{title:"Boundaries",children:e.jsx(i,{height:"320px",width:"100%",children:e.jsx("canvas",{id:"boundaries-example","data-colors":"#3e60d5,#47ad77"})})})}),e.jsx(l,{item:!0,xl:6,xs:12,children:e.jsx(s,{title:"Different Dataset",children:e.jsx(i,{height:"320px",width:"100%",children:e.jsx("canvas",{id:"dataset-example","data-colors":"#3e60d5,#fa5c7c,#47ad77,#ebeff2, #f56f36"})})})}),e.jsx(l,{item:!0,xl:6,xs:12,children:e.jsx(s,{title:"Draw Time",children:e.jsx(i,{height:"320px",width:"100%",children:e.jsx("canvas",{id:"draw-time-example","data-colors":"#3e60d5,#47ad77"})})})}),e.jsx(l,{item:!0,xl:6,xs:12,children:e.jsx(s,{title:"Stacked",children:e.jsx(i,{height:"320px",width:"100%",children:e.jsx("canvas",{id:"stacked-example","data-colors":"#3e60d5,#fa5c7c,#47ad77,#ebeff2, #f56f36"})})})}),e.jsx(l,{item:!0,xl:6,xs:12,children:e.jsx(s,{title:"Radar",children:e.jsx(i,{height:"320px",width:"100%",children:e.jsx("canvas",{id:"radar-example","data-colors":"#3e60d5,#fa5c7c,#47ad77,#ebeff2, #f56f36"})})})})]})]}));export{_ as default};
