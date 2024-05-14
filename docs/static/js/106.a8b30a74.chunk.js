"use strict";(self.webpackChunkmirzayanov_portfolio=self.webpackChunkmirzayanov_portfolio||[]).push([[106],{448:(e,t,a)=>{a.d(t,{A:()=>g});var r=a(5043),i=a(8254),s=a(1605),c=a(5475),l=a(579);const d=e=>{let{title:t,category:a,image:r,url:i}=e;return(0,l.jsx)(s.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,l.jsx)(c.N_,{to:{pathname:"/projects/"+i},"aria-label":"Single Project",children:(0,l.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),(0,l.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,l.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,l.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})};var n=a(4047);const o=["Angular","Landing","\u0410\u0434\u043c\u0438\u043d\u043a\u0430"],m=e=>{let{setSelectProject:t}=e;return(0,l.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[(0,l.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"\u0412\u0441\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"}),o.map((e=>(0,l.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})},g=()=>{const{projects:e,searchProject:t,setSearchProject:a,searchProjectsByTitle:s,selectProject:c,setSelectProject:o,selectProjectsByCategory:g}=(0,r.useContext)(n.Y);return(0,l.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})}),(0,l.jsx)("div",{className:"mt-10 sm:mt-16",children:(0,l.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[(0,l.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,l.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:(0,l.jsx)(i.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,l.jsx)("input",{onChange:e=>{a(e.target.value)},className:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442","aria-label":"Name"})]}),(0,l.jsx)(m,{setSelectProject:o})]})}),(0,l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:c?g.map((e=>(0,l.jsx)(d,{title:e.title,category:e.category,image:e.img,url:e.url},e.id))):t?s.map((e=>(0,l.jsx)(d,{title:e.title,category:e.category,image:e.img,url:e.url},e.id))):e.map((e=>(0,l.jsx)(d,{title:e.title,category:e.category,image:e.img,url:e.url},e.id)))})]})}},4047:(e,t,a)=>{a.d(t,{Y:()=>y,S:()=>h});var r=a(5043),i=a(162);const s=a.p+"static/media/main.e6ca8ff87cea04ace666.png";var c=a(3377),l=a(925),d=a(6541),n=a(6174);const o=a.p+"static/media/main.e758c9c94796a17e5900.png",m=a.p+"static/media/main.a9d208b5cf5956c013bf.png",g=a.p+"static/media/main.d70c543430d038b3f217.png",p=a.p+"static/media/main.b07290ab413aa2ecc165.png",x=[{id:1,title:"\u0414\u043e\u0445\u043e\u0434\u044b \u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b",category:"\u0410\u0434\u043c\u0438\u043d\u043a\u0430",img:i,url:"income-expense",ProjectHeader:{title:"\u0414\u043e\u0445\u043e\u0434\u044b \u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b",publishDate:"1 \u0424\u0435\u0432\u0440\u0430\u043b\u044f, 2024",tags:"SPA / Admin"}},{id:2,title:"\u0420\u0430\u0441\u0442\u0435\u043d\u0438\u044f",category:"Angular",img:s,url:"plants"},{id:3,title:"Freelance Studio",category:"\u0410\u0434\u043c\u0438\u043d\u043a\u0430",img:c,url:"freelance-studio"},{id:4,title:"\u0421\u0442\u0430\u0442\u044c\u0438",category:"Angular",img:a.p+"static/media/main.035ec38a406e544e567b.png",url:"articles"},{id:5,title:"\u0427\u0430\u0439",category:"Angular",img:l,url:"tea"},{id:6,title:"\u041a\u0430\u043b\u044c\u044f\u043d\u043d\u0430\u044f",category:"Landing",img:d,url:"hookah"},{id:7,title:"\u041a\u043b\u0443\u0431 4 \u043a\u043e\u043d\u0435\u0439",category:"Landing",img:n,url:"club-4-horse"},{id:8,title:"\u0421\u0443\u0448\u0438",category:"Landing",img:o,url:"sushi"},{id:9,title:"\u041a\u0430\u043f\u043f\u0430\u0434\u043e\u043a\u0438\u044f",category:"Landing",img:m,url:"cappadocia"},{id:10,title:"\u041c\u0430\u043a\u0430\u0440\u0443\u043d\u044b",category:"Landing",img:g,url:"macaroons"},{id:11,title:"\u0411\u0443\u0440\u0433\u0435\u0440\u044b",category:"Landing",img:p,url:"burgers"}];var u=a(579);const y=(0,r.createContext)(),h=e=>{const[t,a]=(0,r.useState)(x),[i,s]=(0,r.useState)(""),[c,l]=(0,r.useState)(""),d=t.filter((e=>e.title.toLowerCase().includes(i.toLowerCase())||""===i?e:"")),n=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(c)));return(0,u.jsx)(y.Provider,{value:{projects:t,setProjects:a,searchProject:i,setSearchProject:s,searchProjectsByTitle:d,selectProject:c,setSelectProject:l,selectProjectsByCategory:n},children:e.children})}},4283:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var r=a(448),i=a(4047),s=a(579);const c=()=>(0,s.jsx)(i.S,{children:(0,s.jsx)("div",{className:"container mx-auto",children:(0,s.jsx)(r.A,{})})})},6174:(e,t,a)=>{e.exports=a.p+"static/media/main.de7342b02f66c90cf3b3.png"},3377:(e,t,a)=>{e.exports=a.p+"static/media/main.3d0691deb136d6270850.png"},6541:(e,t,a)=>{e.exports=a.p+"static/media/main.a3b80899575bf5664eb3.png"},162:(e,t,a)=>{e.exports=a.p+"static/media/main.19378490540041dc4592.png"},925:(e,t,a)=>{e.exports=a.p+"static/media/main.02819693dc54e939fe0a.png"}}]);
//# sourceMappingURL=106.a8b30a74.chunk.js.map