import v from"./ArticlesListItem.fed8125e.js";import k from"./ProseA.d8068b31.js";import w from"./ProseCodeInline.56ba4db0.js";import{u as A}from"./asyncData.c9fcb959.js";import{a as I,I as g,J as L,u as c,o as a,i as r,k as o,m as i,F as S,K as C,L as e,w as p,s as B,v as N,A as V,M as F,c as P,x as T}from"./entry.53e6d36e.js";import"./date.824a539b.js";const b=t=>(B("data-v-d211d7e3"),t=t(),N(),t),q={key:0,class:"articles-list"},D={class:"featured"},E={class:"layout"},J={key:1,class:"tour"},K=b(()=>o("p",null,"Seems like there are no articles yet.",-1)),M=I({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,_;const u=t,{data:m}=([s,_]=g(async()=>A("articles",async()=>await V(F(u.path)).sort({date:-1}).find())),s=await s,_(),s),n=L(()=>m.value||[]);return(Y,$)=>{var d;const l=v,f=k,h=w;return(d=c(n))!=null&&d.length?(a(),r("div",q,[o("div",D,[i(l,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",E,[(a(!0),r(S,null,C(c(n).slice(1),(y,x)=>(a(),P(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",J,[K,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:p(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:p(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}});const R=T(M,[["__scopeId","data-v-d211d7e3"]]);export{R as default};
