import{r as e}from"./index-d3dc8ec6.js";const c=()=>{const[r,s]=e.useState(0),[n,o]=e.useState(10),f=e.useRef(()=>{});return e.useEffect(()=>{f.current=()=>{if(r>100)s(0),o(10);else{const t=Math.random()*10,u=Math.random()*10;s(r+t),o(r+t+u)}}}),e.useEffect(()=>{const t=setInterval(()=>{f.current()},500);return()=>{clearInterval(t)}},[]),{progress:r,buffer:n}};export{c as u};
