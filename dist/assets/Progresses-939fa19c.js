import{j as r,n as e}from"./index-d3dc8ec6.js";import"./httpClient-458ee8d8.js";import{u as n}from"./useProgressValue-ab102d16.js";import{P as l}from"./PageBreadCrumb-4724c852.js";import{C as o}from"./ComponentContainerCard-ada72cf6.js";import{G as t}from"./Grid-c654f6c7.js";import{B as i}from"./Box-34926251.js";import{T as c}from"./Typography-92458322.js";import"./assertThisInitialized-081f9914.js";import"./OutlinedInput-569485e6.js";import"./InputBase-0890acc9.js";import"./PageMetaData-9cc0daf9.js";import"./index.esm-f102f759.js";import"./createSvgIcon-526ad4b9.js";import"./ButtonBase-27728b09.js";import"./TransitionGroupContext-50cf2de2.js";import"./useSlotProps-ef556448.js";import"./mergeSlotProps-792837f7.js";import"./Card-e7d212e6.js";import"./Paper-66d9b1bc.js";import"./CardContent-e59f288f.js";import"./Stack-431ac2e3.js";import"./styled-5f6f3a21.js";import"./useTheme-b6a8389b.js";const m=()=>r.jsx(o,{title:"Default Linear",description:"Linear indeterminate progress, impossible to tract actual progress",children:r.jsx(i,{width:"100%",children:r.jsx(e,{})})}),p=()=>r.jsx(o,{title:"Color Variant Linear",description:"Linear indeterminate progress, impossible to tract actual progress",children:r.jsxs(i,{sx:{width:"100%",flexDirection:"column",gap:2,display:"flex"},children:[r.jsx(e,{color:"primary"}),r.jsx(e,{color:"secondary"}),r.jsx(e,{color:"success"}),r.jsx(e,{color:"info"}),r.jsx(e,{color:"warning"}),r.jsx(e,{color:"error"})]})}),d=()=>{const{progress:s}=n();return r.jsx(o,{title:"Linear Determinate",description:"Linear determinate progress, whose actuall progress can be determined",children:r.jsx(i,{width:"100%",children:r.jsx(e,{variant:"determinate",value:s})})})},x=()=>{const{progress:s,buffer:a}=n();return r.jsx(o,{title:"Linear Buffer",description:"Linear buffer progress, which also shows the buffer progress with actuall progress",children:r.jsx(i,{width:"100%",children:r.jsx(e,{variant:"buffer",value:s,valueBuffer:a})})})},u=()=>{const{progress:s}=n();return r.jsx(o,{title:"Linear Determinate",description:"Linear determinate progress, whose actuall progress can be determined",children:r.jsxs(i,{sx:{display:"flex",width:"100%",alignItems:"center",gap:2},children:[r.jsx(i,{width:"100%",children:r.jsx(e,{variant:"determinate",value:s})}),r.jsx(c,{variant:"body2",color:"text.secondary",children:`${Math.round(s)}%`})]})})},k=()=>r.jsxs(r.Fragment,{children:[r.jsx(l,{title:"Progress",subName:"Base UI"}),r.jsxs(t,{container:!0,spacing:3,children:[r.jsx(t,{item:!0,lg:6,children:r.jsx(m,{})}),r.jsx(t,{item:!0,lg:6,children:r.jsx(d,{})}),r.jsx(t,{item:!0,lg:6,children:r.jsx(x,{})}),r.jsx(t,{item:!0,lg:6,children:r.jsx(u,{})}),r.jsx(t,{item:!0,lg:6,children:r.jsx(p,{})})]})]});export{k as default};
