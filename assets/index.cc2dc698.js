import{I as e}from"./index.a988b399.js";import{B as n}from"./index.3293552c.js";import{t as l,C as c}from"./tag.acfbb551.js";import{s as d}from"./animation.fdae6ac9.js";import{j as r}from"./jsx-runtime.264ec44b.js";const m=l(c.BUBBLE),o=d(m(n.Reset),{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"$round",backgroundColor:"$primary",trans:["background-color","box-shadow"],"&:hover":{backgroundColor:"$darkPrimary"},variants:{size:{small:{height:"$xs",width:"$xs",[`& ${e.Frame}`]:{width:"$xxs",height:"$xxs"}},large:{height:"$xl",width:"$xl",border:"1px solid $shadow4",boxShadow:"0 1px 6px $shadow6, 0 2px 24px $shadow8",[`& ${e.Frame}`]:{width:"$sm",height:"$sm"}}}},defaultVariants:{size:"large"}}),a=({svg:t,color:i,...s})=>r.exports.jsx(o,{...s,children:r.exports.jsx(e,{svg:t,css:{color:i,...s.css}})}),b=Object.assign(a,{Container:o});try{a.displayName="Bubble",a.__docgenInfo={description:"Call-to-action button with an icon.",displayName:"Bubble",props:{svg:{defaultValue:null,description:`The name of the SVG icon to be rendered or a React component.
@see {@link https://github.com/voiceflow/react-chat/tree/master/packages/react-chat/src/assets/svg the available icons}`,name:"svg",required:!0,type:{name:'"close" | "closeV2" | "largeArrowLeft" | "minus" | "smallArrowUp" | "thumbsUp" | "topCaret" | ComponentType<{}>'}},size:{defaultValue:{value:"'large'"},description:"Pre-defined size variants.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}export{b as B};
