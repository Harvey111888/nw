import{d as F,c as i,s as P,u as C,b as n,f as o,g as s,F as B,i as r,j as d,k as h,w as _,h as u,S as I,r as N,p as V,q as A,o as a,e as U,J as z,z as E,K as L,_ as R}from"./index-e31bf4cb.js";import{a as T,u as j}from"./useProfile-8747cb7b.js";const v=l=>(V("data-v-09f07209"),l=l(),A(),l),q={class:"profile-page"},D={class:"user-info"},G={class:"container"},J={class:"row"},K={class:"col-xs-12 col-md-10 offset-md-1"},$={key:0,class:"align-left"},H=["src","alt"],M={key:0},O=v(()=>o("i",{class:"ion-gear-a space"},null,-1)),Q=["disabled"],W=v(()=>o("i",{class:"ion-plus-round space"},null,-1)),X={class:"container"},Y={class:"row"},Z={class:"col-xs-12 col-md-10 offset-md-1"},ss=F({__name:"Profile",setup(l){const g=E(),c=i(()=>g.params.username),{profile:t,updateProfile:w}=T({username:c}),{followProcessGoing:b,toggleFollow:p}=j({following:i(()=>{var e;return((e=t.value)==null?void 0:e.following)??!1}),username:c,onUpdate:e=>w(e)}),{user:f}=P(C()),k=i(()=>{var e;return L()&&((e=f.value)==null?void 0:e.username)===c.value}),y=i(()=>{var e;return((e=f.value)==null?void 0:e.username)!==c.value});return(e,m)=>{const x=N("AppLink");return a(),n("div",q,[o("div",D,[o("div",G,[o("div",J,[o("div",K,[s(t)?(a(),n(B,{key:1},[o("img",{src:s(t).image,class:"user-img",alt:s(t).username},null,8,H),o("h4",null,r(s(t).username),1),s(t).bio?(a(),n("p",M,r(s(t).bio),1)):d("",!0),s(k)?(a(),h(x,{key:1,class:"btn btn-sm btn-outline-secondary action-btn",name:"settings"},{default:_(()=>[O,u(" 編輯你的個人資料 ")]),_:1})):d("",!0),s(y)?(a(),n("button",{key:2,class:"btn btn-sm btn-outline-secondary action-btn",disabled:s(b),onClick:m[0]||(m[0]=(...S)=>s(p)&&s(p)(...S))},[W,u(" "+r(s(t).following?"Unfollow":"Follow")+" "+r(s(t).username),1)],8,Q)):d("",!0)],64)):(a(),n("div",$," 個人首頁正在加載... "))])])])]),o("div",X,[o("div",Y,[o("div",Z,[(a(),h(I,null,{fallback:_(()=>[u(" 文章正在加載... ")]),default:_(()=>[U(z,{"use-user-feed":"","use-user-favorited":""})]),_:1}))])])])])}}});const ts=R(ss,[["__scopeId","data-v-09f07209"]]);export{ts as default};
