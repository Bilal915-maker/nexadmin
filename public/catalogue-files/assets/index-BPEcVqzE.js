(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const U=(i,e,t={})=>({n:i,hex:e,...t}),wt={front:"black"},Rt={front:"white"},Yr=[{id:"iphone-se",name:"iPhone SE (1re génération)",year:2016,tier:"se",chip:"A9",display:"4 pouces · Retina (LCD)",cameras:"12 Mpx",front:"1,2 Mpx",storage:["16 Go","32 Go","64 Go","128 Go"],auth:"Touch ID",port:"Lightning",ip:null,material:"Aluminium",dims:[123.8,58.6,7.6],design:{edge:"flat",front:"home",back:"alu",cam:"single",frame:"alu",mute:!0,radius:.13,chamfer:!0},colors:[U("Gris sidéral","#4a4b4f",wt),U("Argent","#d9dadc",Rt),U("Or","#e5d1b6",Rt),U("Or rose","#e7c0b3",Rt)]},{id:"iphone-7",name:"iPhone 7",year:2016,tier:"standard",chip:"A10 Fusion",display:"4,7 pouces · Retina HD (LCD)",cameras:"12 Mpx grand-angle",front:"7 Mpx",storage:["32 Go","128 Go","256 Go"],auth:"Touch ID",port:"Lightning",ip:"IP67",material:"Aluminium",dims:[138.3,67.1,7.1],design:{edge:"round",front:"home",back:"alu",cam:"single",frame:"alu",mute:!0,radius:.14},colors:[U("Noir de jais","#0b0b0d",{gloss:!0,...wt}),U("Noir","#2a2b2e",wt),U("Argent","#d7d8da",Rt),U("Or","#e5d1b6",Rt),U("Or rose","#e7c0b3",Rt),U("(PRODUCT)RED","#b2152b",Rt)]},{id:"iphone-7-plus",name:"iPhone 7 Plus",year:2016,tier:"plus",chip:"A10 Fusion",display:"5,5 pouces · Retina HD (LCD)",cameras:"Double 12 Mpx : grand-angle + téléobjectif 2×",front:"7 Mpx",storage:["32 Go","128 Go","256 Go"],auth:"Touch ID",port:"Lightning",ip:"IP67",material:"Aluminium",dims:[158.2,77.9,7.3],design:{edge:"round",front:"home",back:"alu",cam:"dualH",frame:"alu",mute:!0,radius:.14},colors:[U("Noir de jais","#0b0b0d",{gloss:!0,...wt}),U("Noir","#2a2b2e",wt),U("Argent","#d7d8da",Rt),U("Or","#e5d1b6",Rt),U("Or rose","#e7c0b3",Rt),U("(PRODUCT)RED","#b2152b",Rt)]},{id:"iphone-8",name:"iPhone 8",year:2017,tier:"standard",chip:"A11 Bionic",display:"4,7 pouces · Retina HD (LCD)",cameras:"12 Mpx grand-angle",front:"7 Mpx",storage:["64 Go","128 Go","256 Go"],auth:"Touch ID",port:"Lightning",ip:"IP67",material:"Verre et aluminium",dims:[138.4,67.3,7.3],design:{edge:"round",front:"home",back:"glass",cam:"single",frame:"alu",mute:!0,radius:.14},colors:[U("Argent","#e6e6e4",{frame:"#cdced0",...Rt}),U("Or","#f0dcc4",{frame:"#dcc3a6",...Rt}),U("Gris sidéral","#2c2d30",{frame:"#4b4c50",...wt}),U("(PRODUCT)RED","#b3132a",{frame:"#a8142a",...wt})]},{id:"iphone-8-plus",name:"iPhone 8 Plus",year:2017,tier:"plus",chip:"A11 Bionic",display:"5,5 pouces · Retina HD (LCD)",cameras:"Double 12 Mpx : grand-angle + téléobjectif 2×",front:"7 Mpx",storage:["64 Go","128 Go","256 Go"],auth:"Touch ID",port:"Lightning",ip:"IP67",material:"Verre et aluminium",dims:[158.4,78.1,7.5],design:{edge:"round",front:"home",back:"glass",cam:"dualH",frame:"alu",mute:!0,radius:.14},colors:[U("Argent","#e6e6e4",{frame:"#cdced0",...Rt}),U("Or","#f0dcc4",{frame:"#dcc3a6",...Rt}),U("Gris sidéral","#2c2d30",{frame:"#4b4c50",...wt}),U("(PRODUCT)RED","#b3132a",{frame:"#a8142a",...wt})]},{id:"iphone-x",name:"iPhone X",year:2017,tier:"pro",chip:"A11 Bionic",display:"5,8 pouces · Super Retina (OLED)",cameras:"Double 12 Mpx : grand-angle + téléobjectif 2×",front:"7 Mpx TrueDepth",storage:["64 Go","256 Go"],auth:"Face ID",port:"Lightning",ip:"IP67",material:"Verre et acier inoxydable",dims:[143.6,70.9,7.7],design:{edge:"round",front:"notch",back:"glass",cam:"dualV",frame:"steel",mute:!0,radius:.17},colors:[U("Argent","#e8e8e5",{frame:"#d3d3d1"}),U("Gris sidéral","#2b2b2e",{frame:"#47484b"})]},{id:"iphone-xr",name:"iPhone XR",year:2018,tier:"standard",chip:"A12 Bionic",display:"6,1 pouces · Liquid Retina (LCD)",cameras:"12 Mpx grand-angle",front:"7 Mpx TrueDepth",storage:["64 Go","128 Go","256 Go"],auth:"Face ID",port:"Lightning",ip:"IP67",material:"Verre et aluminium",dims:[150.9,75.7,8.3],design:{edge:"round",front:"notch",back:"glass",cam:"singleXR",frame:"alu",mute:!0,radius:.17},colors:[U("Noir","#1d1e20"),U("Blanc","#f3f2ef"),U("Bleu","#5c9ccf"),U("Jaune","#f6cd4a"),U("Corail","#f27a66"),U("(PRODUCT)RED","#b8162c")]},{id:"iphone-xs",name:"iPhone XS",year:2018,tier:"pro",chip:"A12 Bionic",display:"5,8 pouces · Super Retina HD (OLED)",cameras:"Double 12 Mpx : grand-angle + téléobjectif 2×",front:"7 Mpx TrueDepth",storage:["64 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre et acier inoxydable",dims:[143.6,70.9,7.7],design:{edge:"round",front:"notch",back:"glass",cam:"dualV",frame:"steel",mute:!0,radius:.17},colors:[U("Or","#f2ddc4",{frame:"#d9b98e"}),U("Argent","#e8e8e5",{frame:"#d3d3d1"}),U("Gris sidéral","#2b2b2e",{frame:"#47484b"})]},{id:"iphone-xs-max",name:"iPhone XS Max",year:2018,tier:"promax",chip:"A12 Bionic",display:"6,5 pouces · Super Retina HD (OLED)",cameras:"Double 12 Mpx : grand-angle + téléobjectif 2×",front:"7 Mpx TrueDepth",storage:["64 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre et acier inoxydable",dims:[157.5,77.4,7.7],design:{edge:"round",front:"notch",back:"glass",cam:"dualV",frame:"steel",mute:!0,radius:.17},colors:[U("Or","#f2ddc4",{frame:"#d9b98e"}),U("Argent","#e8e8e5",{frame:"#d3d3d1"}),U("Gris sidéral","#2b2b2e",{frame:"#47484b"})]},{id:"iphone-11",name:"iPhone 11",year:2019,tier:"standard",chip:"A13 Bionic",display:"6,1 pouces · Liquid Retina HD (LCD)",cameras:"Double 12 Mpx : grand-angle + ultra grand-angle",front:"12 Mpx TrueDepth",storage:["64 Go","128 Go","256 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre et aluminium",dims:[150.9,75.7,8.3],design:{edge:"round",front:"notch",back:"glass",cam:"sq2v",frame:"alu",mute:!0,radius:.17},colors:[U("Noir","#202122"),U("Vert","#aee1cd"),U("Jaune","#ffe681"),U("Mauve","#d1cddb"),U("(PRODUCT)RED","#ba0c2e"),U("Blanc","#f8f6f0")]},{id:"iphone-11-pro",name:"iPhone 11 Pro",year:2019,tier:"pro",chip:"A13 Bionic",display:"5,8 pouces · Super Retina XDR (OLED)",cameras:"Triple 12 Mpx : grand-angle, ultra grand-angle, téléobjectif 2×",front:"12 Mpx TrueDepth",storage:["64 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre dépoli et acier inoxydable",dims:[144,71.4,8.1],design:{edge:"round",front:"notch",back:"matte",cam:"sq3",frame:"steel",mute:!0,radius:.17},colors:[U("Vert nuit","#4e5851",{frame:"#3f4740"}),U("Gris sidéral","#535150",{frame:"#47474a"}),U("Argent","#ebebe4",{frame:"#d4d4d2"}),U("Or","#f6dfc8",{frame:"#e0c39c"})]},{id:"iphone-11-pro-max",name:"iPhone 11 Pro Max",year:2019,tier:"promax",chip:"A13 Bionic",display:"6,5 pouces · Super Retina XDR (OLED)",cameras:"Triple 12 Mpx : grand-angle, ultra grand-angle, téléobjectif 2×",front:"12 Mpx TrueDepth",storage:["64 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre dépoli et acier inoxydable",dims:[158,77.8,8.1],design:{edge:"round",front:"notch",back:"matte",cam:"sq3",frame:"steel",mute:!0,radius:.17},colors:[U("Vert nuit","#4e5851",{frame:"#3f4740"}),U("Gris sidéral","#535150",{frame:"#47474a"}),U("Argent","#ebebe4",{frame:"#d4d4d2"}),U("Or","#f6dfc8",{frame:"#e0c39c"})]},{id:"iphone-se-2",name:"iPhone SE (2e génération)",year:2020,tier:"se",chip:"A13 Bionic",display:"4,7 pouces · Retina HD (LCD)",cameras:"12 Mpx grand-angle",front:"7 Mpx",storage:["64 Go","128 Go","256 Go"],auth:"Touch ID",port:"Lightning",ip:"IP67",material:"Verre et aluminium",dims:[138.4,67.3,7.3],design:{edge:"round",front:"home",back:"glass",cam:"single",frame:"alu",mute:!0,radius:.14},colors:[U("Noir","#1f2021",wt),U("Blanc","#f8f6f0",wt),U("(PRODUCT)RED","#ba0c2e",wt)]},{id:"iphone-12-mini",name:"iPhone 12 mini",year:2020,tier:"mini",chip:"A14 Bionic",display:"5,4 pouces · Super Retina XDR (OLED)",cameras:"Double 12 Mpx : grand-angle + ultra grand-angle",front:"12 Mpx TrueDepth",storage:["64 Go","128 Go","256 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre et aluminium",dims:[131.5,64.2,7.4],design:{edge:"flat",front:"notch",back:"glass",cam:"sq2v",frame:"alu",mute:!0,radius:.16},colors:[U("Noir","#25292e"),U("Blanc","#f6f2ef"),U("(PRODUCT)RED","#bf0013"),U("Vert","#d8efd5"),U("Bleu","#023b63"),U("Mauve","#b7afe6")]},{id:"iphone-12",name:"iPhone 12",year:2020,tier:"standard",chip:"A14 Bionic",display:"6,1 pouces · Super Retina XDR (OLED)",cameras:"Double 12 Mpx : grand-angle + ultra grand-angle",front:"12 Mpx TrueDepth",storage:["64 Go","128 Go","256 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre et aluminium",dims:[146.7,71.5,7.4],design:{edge:"flat",front:"notch",back:"glass",cam:"sq2v",frame:"alu",mute:!0,radius:.16},colors:[U("Noir","#25292e"),U("Blanc","#f6f2ef"),U("(PRODUCT)RED","#bf0013"),U("Vert","#d8efd5"),U("Bleu","#023b63"),U("Mauve","#b7afe6")]},{id:"iphone-12-pro",name:"iPhone 12 Pro",year:2020,tier:"pro",chip:"A14 Bionic",display:"6,1 pouces · Super Retina XDR (OLED)",cameras:"Triple 12 Mpx + scanner LiDAR, téléobjectif 2×",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre dépoli et acier inoxydable",dims:[146.7,71.5,7.4],design:{edge:"flat",front:"notch",back:"matte",cam:"sq3",lidar:!0,frame:"steel",mute:!0,radius:.16},colors:[U("Graphite","#52514f",{frame:"#3c3c3e"}),U("Argent","#e3e4df",{frame:"#d5d5d3"}),U("Or","#fcebd3",{frame:"#e6c99c"}),U("Bleu Pacifique","#2e4d61",{frame:"#34536a"})]},{id:"iphone-12-pro-max",name:"iPhone 12 Pro Max",year:2020,tier:"promax",chip:"A14 Bionic",display:"6,7 pouces · Super Retina XDR (OLED)",cameras:"Triple 12 Mpx + scanner LiDAR, téléobjectif 2,5×",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre dépoli et acier inoxydable",dims:[160.8,78.1,7.4],design:{edge:"flat",front:"notch",back:"matte",cam:"sq3",lidar:!0,frame:"steel",mute:!0,radius:.16},colors:[U("Graphite","#52514f",{frame:"#3c3c3e"}),U("Argent","#e3e4df",{frame:"#d5d5d3"}),U("Or","#fcebd3",{frame:"#e6c99c"}),U("Bleu Pacifique","#2e4d61",{frame:"#34536a"})]},{id:"iphone-13-mini",name:"iPhone 13 mini",year:2021,tier:"mini",chip:"A15 Bionic",display:"5,4 pouces · Super Retina XDR (OLED)",cameras:"Double 12 Mpx : grand-angle + ultra grand-angle",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre et aluminium",dims:[131.5,64.2,7.65],design:{edge:"flat",front:"notch",notch:"small",back:"glass",cam:"sq2d",frame:"alu",mute:!0,radius:.16},colors:[U("Minuit","#232a31"),U("Lumière stellaire","#faf6f2"),U("Bleu","#276787"),U("Rose","#fae0d8"),U("(PRODUCT)RED","#bf0013"),U("Vert","#394c38")]},{id:"iphone-13",name:"iPhone 13",year:2021,tier:"standard",chip:"A15 Bionic",display:"6,1 pouces · Super Retina XDR (OLED)",cameras:"Double 12 Mpx : grand-angle + ultra grand-angle",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre et aluminium",dims:[146.7,71.5,7.65],design:{edge:"flat",front:"notch",notch:"small",back:"glass",cam:"sq2d",frame:"alu",mute:!0,radius:.16},colors:[U("Minuit","#232a31"),U("Lumière stellaire","#faf6f2"),U("Bleu","#276787"),U("Rose","#fae0d8"),U("(PRODUCT)RED","#bf0013"),U("Vert","#394c38")]},{id:"iphone-13-pro",name:"iPhone 13 Pro",year:2021,tier:"pro",chip:"A15 Bionic",display:"6,1 pouces · Super Retina XDR avec ProMotion",cameras:"Triple 12 Mpx + LiDAR, téléobjectif 3×, macro",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go","1 To"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre dépoli et acier inoxydable",dims:[146.7,71.5,7.65],design:{edge:"flat",front:"notch",notch:"small",back:"matte",cam:"sq3",lidar:!0,frame:"steel",mute:!0,radius:.16,bigLens:!0},colors:[U("Graphite","#54524f",{frame:"#3d3d3f"}),U("Or","#fae7cf",{frame:"#e6c99c"}),U("Argent","#f1f2ed",{frame:"#d5d5d3"}),U("Bleu alpin","#a7c1d9",{frame:"#9fb7cf"}),U("Vert alpin","#576856",{frame:"#4c5a4b"})]},{id:"iphone-13-pro-max",name:"iPhone 13 Pro Max",year:2021,tier:"promax",chip:"A15 Bionic",display:"6,7 pouces · Super Retina XDR avec ProMotion",cameras:"Triple 12 Mpx + LiDAR, téléobjectif 3×, macro",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go","1 To"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre dépoli et acier inoxydable",dims:[160.8,78.1,7.65],design:{edge:"flat",front:"notch",notch:"small",back:"matte",cam:"sq3",lidar:!0,frame:"steel",mute:!0,radius:.16,bigLens:!0},colors:[U("Graphite","#54524f",{frame:"#3d3d3f"}),U("Or","#fae7cf",{frame:"#e6c99c"}),U("Argent","#f1f2ed",{frame:"#d5d5d3"}),U("Bleu alpin","#a7c1d9",{frame:"#9fb7cf"}),U("Vert alpin","#576856",{frame:"#4c5a4b"})]},{id:"iphone-se-3",name:"iPhone SE (3e génération)",year:2022,tier:"se",chip:"A15 Bionic",display:"4,7 pouces · Retina HD (LCD)",cameras:"12 Mpx grand-angle",front:"7 Mpx",storage:["64 Go","128 Go","256 Go"],auth:"Touch ID",port:"Lightning",ip:"IP67",material:"Verre et aluminium",dims:[138.4,67.3,7.3],design:{edge:"round",front:"home",back:"glass",cam:"single",frame:"alu",mute:!0,radius:.14},colors:[U("Minuit","#232a31",wt),U("Lumière stellaire","#faf6f2",wt),U("(PRODUCT)RED","#bf0013",wt)]},{id:"iphone-14",name:"iPhone 14",year:2022,tier:"standard",chip:"A15 Bionic",display:"6,1 pouces · Super Retina XDR (OLED)",cameras:"Double 12 Mpx : principal + ultra grand-angle",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre et aluminium",dims:[146.7,71.5,7.8],design:{edge:"flat",front:"notch",notch:"small",back:"glass",cam:"sq2d",frame:"alu",mute:!0,radius:.16},colors:[U("Minuit","#222930"),U("Lumière stellaire","#faf6f2"),U("Mauve","#e5ddea"),U("Bleu","#a0b4c7"),U("(PRODUCT)RED","#e31d33"),U("Jaune","#f9e479")]},{id:"iphone-14-plus",name:"iPhone 14 Plus",year:2022,tier:"plus",chip:"A15 Bionic",display:"6,7 pouces · Super Retina XDR (OLED)",cameras:"Double 12 Mpx : principal + ultra grand-angle",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre et aluminium",dims:[160.8,78.1,7.8],design:{edge:"flat",front:"notch",notch:"small",back:"glass",cam:"sq2d",frame:"alu",mute:!0,radius:.16},colors:[U("Minuit","#222930"),U("Lumière stellaire","#faf6f2"),U("Mauve","#e5ddea"),U("Bleu","#a0b4c7"),U("(PRODUCT)RED","#e31d33"),U("Jaune","#f9e479")]},{id:"iphone-14-pro",name:"iPhone 14 Pro",year:2022,tier:"pro",chip:"A16 Bionic",display:"6,1 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx principal, 12 Mpx ultra grand-angle, 12 Mpx téléobjectif 3×",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go","1 To"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre dépoli et acier inoxydable",dims:[147.5,71.5,7.85],design:{edge:"flat",front:"island",back:"matte",cam:"sq3",lidar:!0,frame:"steel",mute:!0,radius:.16,bigLens:!0},colors:[U("Noir sidéral","#403e3d",{frame:"#353436"}),U("Argent","#f0f2f2",{frame:"#d5d6d6"}),U("Or","#f4e8ce",{frame:"#e3c999"}),U("Violet intense","#594f63",{frame:"#4f4659"})]},{id:"iphone-14-pro-max",name:"iPhone 14 Pro Max",year:2022,tier:"promax",chip:"A16 Bionic",display:"6,7 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx principal, 12 Mpx ultra grand-angle, 12 Mpx téléobjectif 3×",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go","1 To"],auth:"Face ID",port:"Lightning",ip:"IP68",material:"Verre dépoli et acier inoxydable",dims:[160.7,77.6,7.85],design:{edge:"flat",front:"island",back:"matte",cam:"sq3",lidar:!0,frame:"steel",mute:!0,radius:.16,bigLens:!0},colors:[U("Noir sidéral","#403e3d",{frame:"#353436"}),U("Argent","#f0f2f2",{frame:"#d5d6d6"}),U("Or","#f4e8ce",{frame:"#e3c999"}),U("Violet intense","#594f63",{frame:"#4f4659"})]},{id:"iphone-15",name:"iPhone 15",year:2023,tier:"standard",chip:"A16 Bionic",display:"6,1 pouces · Super Retina XDR, Dynamic Island",cameras:"48 Mpx principal + 12 Mpx ultra grand-angle",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"USB‑C",ip:"IP68",material:"Verre teinté dans la masse et aluminium",dims:[147.6,71.6,7.8],design:{edge:"contour",front:"island",back:"matte",cam:"sq2d",frame:"alu",mute:!0,radius:.16},colors:[U("Noir","#35393b"),U("Bleu","#d4e4ed"),U("Vert","#e3e8d9"),U("Jaune","#efecc6"),U("Rose","#ead1d5")]},{id:"iphone-15-plus",name:"iPhone 15 Plus",year:2023,tier:"plus",chip:"A16 Bionic",display:"6,7 pouces · Super Retina XDR, Dynamic Island",cameras:"48 Mpx principal + 12 Mpx ultra grand-angle",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"USB‑C",ip:"IP68",material:"Verre teinté dans la masse et aluminium",dims:[160.9,77.8,7.8],design:{edge:"contour",front:"island",back:"matte",cam:"sq2d",frame:"alu",mute:!0,radius:.16},colors:[U("Noir","#35393b"),U("Bleu","#d4e4ed"),U("Vert","#e3e8d9"),U("Jaune","#efecc6"),U("Rose","#ead1d5")]},{id:"iphone-15-pro",name:"iPhone 15 Pro",year:2023,tier:"pro",chip:"A17 Pro",display:"6,1 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx principal, 12 Mpx ultra grand-angle, 12 Mpx téléobjectif 3×",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go","1 To"],auth:"Face ID",port:"USB‑C (USB 3)",ip:"IP68",material:"Titane et verre dépoli",dims:[146.6,70.6,8.25],design:{edge:"contour",front:"island",back:"matte",cam:"sq3",lidar:!0,frame:"titanium",action:!0,radius:.163,bigLens:!0},colors:[U("Titane noir","#3c3c3d",{frame:"#4a4a4b"}),U("Titane blanc","#f2f1ed",{frame:"#d2d0cb"}),U("Titane bleu","#2f4452",{frame:"#3f5462"}),U("Titane naturel","#bab4a9",{frame:"#aca79e"})]},{id:"iphone-15-pro-max",name:"iPhone 15 Pro Max",year:2023,tier:"promax",chip:"A17 Pro",display:"6,7 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx principal, 12 Mpx ultra grand-angle, 12 Mpx téléobjectif 5×",front:"12 Mpx TrueDepth",storage:["256 Go","512 Go","1 To"],auth:"Face ID",port:"USB‑C (USB 3)",ip:"IP68",material:"Titane et verre dépoli",dims:[159.9,76.7,8.25],design:{edge:"contour",front:"island",back:"matte",cam:"sq3",lidar:!0,frame:"titanium",action:!0,radius:.163,bigLens:!0},colors:[U("Titane noir","#3c3c3d",{frame:"#4a4a4b"}),U("Titane blanc","#f2f1ed",{frame:"#d2d0cb"}),U("Titane bleu","#2f4452",{frame:"#3f5462"}),U("Titane naturel","#bab4a9",{frame:"#aca79e"})]},{id:"iphone-16",name:"iPhone 16",year:2024,tier:"standard",chip:"A18",display:"6,1 pouces · Super Retina XDR, Dynamic Island",cameras:"48 Mpx Fusion + 12 Mpx ultra grand-angle",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"USB‑C",ip:"IP68",material:"Verre teinté dans la masse et aluminium",dims:[147.6,71.6,7.8],design:{edge:"contour",front:"island",back:"matte",cam:"pill2",frame:"alu",action:!0,control:!0,radius:.16},colors:[U("Noir","#3c4042"),U("Blanc","#f7f7f6"),U("Rose","#f1a7c8"),U("Sarcelle","#a8d0c8"),U("Outremer","#7484e3")]},{id:"iphone-16-plus",name:"iPhone 16 Plus",year:2024,tier:"plus",chip:"A18",display:"6,7 pouces · Super Retina XDR, Dynamic Island",cameras:"48 Mpx Fusion + 12 Mpx ultra grand-angle",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"USB‑C",ip:"IP68",material:"Verre teinté dans la masse et aluminium",dims:[160.9,77.8,7.8],design:{edge:"contour",front:"island",back:"matte",cam:"pill2",frame:"alu",action:!0,control:!0,radius:.16},colors:[U("Noir","#3c4042"),U("Blanc","#f7f7f6"),U("Rose","#f1a7c8"),U("Sarcelle","#a8d0c8"),U("Outremer","#7484e3")]},{id:"iphone-16-pro",name:"iPhone 16 Pro",year:2024,tier:"pro",chip:"A18 Pro",display:"6,3 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx Fusion, 48 Mpx ultra grand-angle, 12 Mpx téléobjectif 5×",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go","1 To"],auth:"Face ID",port:"USB‑C (USB 3)",ip:"IP68",material:"Titane et verre dépoli",dims:[149.6,71.5,8.25],design:{edge:"contour",front:"island",back:"matte",cam:"sq3",lidar:!0,frame:"titanium",action:!0,control:!0,radius:.163,bigLens:!0},colors:[U("Titane noir","#3d3d3b",{frame:"#4a4a48"}),U("Titane blanc","#f2f1ec",{frame:"#d2d0cb"}),U("Titane naturel","#c2bcb2",{frame:"#aea89e"}),U("Titane sable","#c4a891",{frame:"#b39a84"})]},{id:"iphone-16-pro-max",name:"iPhone 16 Pro Max",year:2024,tier:"promax",chip:"A18 Pro",display:"6,9 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx Fusion, 48 Mpx ultra grand-angle, 12 Mpx téléobjectif 5×",front:"12 Mpx TrueDepth",storage:["256 Go","512 Go","1 To"],auth:"Face ID",port:"USB‑C (USB 3)",ip:"IP68",material:"Titane et verre dépoli",dims:[163,77.6,8.25],design:{edge:"contour",front:"island",back:"matte",cam:"sq3",lidar:!0,frame:"titanium",action:!0,control:!0,radius:.163,bigLens:!0},colors:[U("Titane noir","#3d3d3b",{frame:"#4a4a48"}),U("Titane blanc","#f2f1ec",{frame:"#d2d0cb"}),U("Titane naturel","#c2bcb2",{frame:"#aea89e"}),U("Titane sable","#c4a891",{frame:"#b39a84"})]},{id:"iphone-16e",name:"iPhone 16e",year:2025,tier:"e",chip:"A18",display:"6,1 pouces · Super Retina XDR (OLED)",cameras:"48 Mpx Fusion",front:"12 Mpx TrueDepth",storage:["128 Go","256 Go","512 Go"],auth:"Face ID",port:"USB‑C",ip:"IP68",material:"Verre et aluminium",dims:[146.7,71.5,7.8],design:{edge:"flat",front:"notch",notch:"small",back:"matte",cam:"single16e",frame:"alu",action:!0,radius:.16},colors:[U("Noir","#333336"),U("Blanc","#f5f5f3")]},{id:"iphone-17",name:"iPhone 17",year:2025,tier:"standard",chip:"A19",display:"6,3 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx Fusion + 48 Mpx ultra grand-angle",front:"18 Mpx Center Stage",storage:["256 Go","512 Go"],auth:"Face ID",port:"USB‑C",ip:"IP68",material:"Verre et aluminium",dims:[149.6,71.5,7.95],design:{edge:"contour",front:"island",back:"matte",cam:"pill2",frame:"alu",action:!0,control:!0,radius:.163},colors:[U("Noir","#303033"),U("Blanc","#f4f4f1"),U("Bleu brume","#a9bcd8"),U("Sauge","#aab89c"),U("Lavande","#cbbfe3")]},{id:"iphone-air",name:"iPhone Air",year:2025,tier:"air",chip:"A19 Pro",display:"6,5 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx Fusion",front:"18 Mpx Center Stage",storage:["256 Go","512 Go","1 To"],auth:"Face ID",port:"USB‑C",ip:"IP68",material:"Titane",dims:[156.2,74.7,5.64],design:{edge:"flat",front:"island",back:"glass",cam:"plateau1",frame:"titanium",action:!0,control:!0,radius:.165},colors:[U("Noir sidéral","#2d2d2f",{frame:"#3a3a3c"}),U("Blanc nuage","#f4f3ef",{frame:"#dcdad5"}),U("Or pâle","#ebdcbf",{frame:"#d9c6a2"}),U("Bleu ciel","#d8e6f2",{frame:"#c2d3e2"})]},{id:"iphone-17-pro",name:"iPhone 17 Pro",year:2025,tier:"pro",chip:"A19 Pro",display:"6,3 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx Fusion, 48 Mpx ultra grand-angle, 48 Mpx téléobjectif 4×",front:"18 Mpx Center Stage",storage:["256 Go","512 Go","1 To"],auth:"Face ID",port:"USB‑C (USB 3)",ip:"IP68",material:"Aluminium monocoque",dims:[150,71.9,8.75],design:{edge:"contour",front:"island",back:"unibody",cam:"plateau3",lidar:!0,frame:"alu",action:!0,control:!0,radius:.165,bigLens:!0},colors:[U("Orange cosmique","#e57a32"),U("Bleu intense","#2f3b52"),U("Argent","#e2e3e4")]},{id:"iphone-17-pro-max",name:"iPhone 17 Pro Max",year:2025,tier:"promax",chip:"A19 Pro",display:"6,9 pouces · Super Retina XDR, ProMotion et toujours activé",cameras:"48 Mpx Fusion, 48 Mpx ultra grand-angle, 48 Mpx téléobjectif 4×",front:"18 Mpx Center Stage",storage:["256 Go","512 Go","1 To","2 To"],auth:"Face ID",port:"USB‑C (USB 3)",ip:"IP68",material:"Aluminium monocoque",dims:[163.4,78,8.75],design:{edge:"contour",front:"island",back:"unibody",cam:"plateau3",lidar:!0,frame:"alu",action:!0,control:!0,radius:.165,bigLens:!0},colors:[U("Orange cosmique","#e57a32"),U("Bleu intense","#2f3b52"),U("Argent","#e2e3e4")]},{id:"iphone-17e",name:"iPhone 17e",year:2026,tier:"e",chip:"A19",display:"6,1 pouces · Super Retina XDR (OLED)",cameras:"48 Mpx Fusion",front:"12 Mpx",storage:["256 Go","512 Go"],auth:"Face ID",port:"USB‑C",ip:null,material:null,dims:null,dims3d:[146.7,71.5,7.8],design:{edge:"flat",front:"notch",notch:"small",back:"matte",cam:"single16e",frame:"alu",action:!0,radius:.16},colors:[U("Noir","#333336"),U("Blanc","#f5f5f3"),U("Rose pâle","#efd1d5")]},{id:"iphone-18-pro",name:"iPhone 18 Pro",year:2026,tier:"pro",chip:"A20 Pro",display:"6,3 pouces · Super Retina XDR, Dynamic Island réduite",cameras:"48 Mpx Fusion à ouverture variable, ultra grand-angle, téléobjectif",front:null,storage:null,auth:"Face ID",port:"USB‑C",ip:null,material:null,dims:null,dims3d:[150,71.9,8.75],design:{edge:"contour",front:"island",island:"small",back:"unibody",cam:"plateau3",lidar:!0,frame:"alu",action:!0,control:!0,radius:.165,bigLens:!0},colors:[U("Bordeaux","#5c1f2b"),U("Glacier","#cfe0ea"),U("Argent","#e2e3e4"),U("Noir","#2b2b2d")]},{id:"iphone-18-pro-max",name:"iPhone 18 Pro Max",year:2026,tier:"promax",chip:"A20 Pro",display:"6,9 pouces · Super Retina XDR, Dynamic Island réduite",cameras:"48 Mpx Fusion à ouverture variable, ultra grand-angle, téléobjectif",front:null,storage:null,auth:"Face ID",port:"USB‑C",ip:null,material:null,dims:null,dims3d:[163.4,78,8.75],design:{edge:"contour",front:"island",island:"small",back:"unibody",cam:"plateau3",lidar:!0,frame:"alu",action:!0,control:!0,radius:.165,bigLens:!0},colors:[U("Bordeaux","#5c1f2b"),U("Glacier","#cfe0ea"),U("Argent","#e2e3e4"),U("Noir","#2b2b2d")]},{id:"iphone-duo",name:"iPhone Duo",year:2026,tier:"duo",chip:"A20 Pro",display:"Écran externe 5,4 pouces · écran interne pliable 7,6 pouces",cameras:"Double 48 Mpx",front:"12 Mpx (écran externe)",storage:["256 Go à 2 To"],auth:"Touch ID (bouton latéral)",port:"USB‑C",ip:null,material:null,dims:[117.8,84.1,11.3],dimsNote:"plié ; 117,8 × 164,6 × 5,2 mm déplié",design:{edge:"contour",front:"island",island:"dot",back:"glass",cam:"duo",frame:"titanium",action:!0,radius:.13,hinge:!0},colors:[U("Star White","#f2f1ee",{frame:"#d9d7d2"}),U("Night Sky","#1f2433",{frame:"#2e3446"})]}],hl={standard:"Standard",plus:"Plus",mini:"mini",pro:"Pro",promax:"Pro Max",se:"SE",e:"Gamme e",air:"Air",duo:"Pliable"},us=[{id:"all",label:"Tous",test:()=>!0},{id:"pro",label:"Pro",test:i=>i.tier==="pro"||i.tier==="promax"},{id:"standard",label:"Standard",test:i=>["standard","plus","mini"].includes(i.tier)},{id:"compact",label:"SE et e",test:i=>i.tier==="se"||i.tier==="e"},{id:"new",label:"Air et Duo",test:i=>i.tier==="air"||i.tier==="duo"}];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ra="160",dl=0,ba=1,fl=2,sc=1,pl=2,en=3,Pn=0,Dt=1,nn=2,An=0,Ei=1,Ta=2,Aa=3,wa=4,ml=5,Vn=100,gl=101,_l=102,Ra=103,Ca=104,vl=200,xl=201,Ml=202,Sl=203,qs=204,Ys=205,yl=206,El=207,bl=208,Tl=209,Al=210,wl=211,Rl=212,Cl=213,Pl=214,Ll=0,Dl=1,Il=2,zr=3,Ul=4,Nl=5,Fl=6,Ol=7,ac=0,Bl=1,zl=2,wn=0,Gl=1,Hl=2,Vl=3,oc=4,kl=5,Wl=6,cc=300,Ti=301,Ai=302,$s=303,js=304,$r=306,wi=1e3,Jt=1001,Js=1002,Lt=1003,Pa=1004,hs=1005,Wt=1006,Xl=1007,Ki=1008,Rn=1009,ql=1010,Yl=1011,sa=1012,lc=1013,En=1014,bn=1015,Qi=1016,uc=1017,hc=1018,Wn=1020,$l=1021,Zt=1023,jl=1024,Jl=1025,Xn=1026,Ri=1027,Zl=1028,dc=1029,Kl=1030,fc=1031,pc=1033,ds=33776,fs=33777,ps=33778,ms=33779,La=35840,Da=35841,Ia=35842,Ua=35843,mc=36196,Na=37492,Fa=37496,Oa=37808,Ba=37809,za=37810,Ga=37811,Ha=37812,Va=37813,ka=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,$a=37819,ja=37820,Ja=37821,gs=36492,Za=36494,Ka=36495,Ql=36283,Qa=36284,eo=36285,to=36286,gc=3e3,qn=3001,eu=3200,tu=3201,_c=0,nu=1,Xt="",vt="srgb",mn="srgb-linear",aa="display-p3",jr="display-p3-linear",Gr="linear",tt="srgb",Hr="rec709",Vr="p3",ei=7680,no=519,iu=512,ru=513,su=514,vc=515,au=516,ou=517,cu=518,lu=519,io=35044,ro="300 es",Zs=1035,dn=2e3,kr=2001;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let so=1234567;const qi=Math.PI/180,er=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function oa(i,e){return(i%e+e)%e}function uu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function hu(i,e,t){return i!==e?(t-i)/(e-i):0}function Yi(i,e,t){return(1-t)*i+t*e}function du(i,e,t,n){return Yi(i,e,1-Math.exp(-t*n))}function fu(i,e=1){return e-Math.abs(oa(i,e*2)-e)}function pu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function gu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _u(i,e){return i+Math.random()*(e-i)}function vu(i){return i*(.5-Math.random())}function xu(i){i!==void 0&&(so=i);let e=so+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mu(i){return i*qi}function Su(i){return i*er}function Ks(i){return(i&i-1)===0&&i!==0}function yu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Eu(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),p=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*f,c*p,a*l);break;case"YZY":i.set(c*p,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*p,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Or={DEG2RAD:qi,RAD2DEG:er,generateUUID:Qn,clamp:ht,euclideanModulo:oa,mapLinear:uu,inverseLerp:hu,lerp:Yi,damp:du,pingpong:fu,smoothstep:pu,smootherstep:mu,randInt:gu,randFloat:_u,randFloatSpread:vu,seededRandom:xu,degToRad:Mu,radToDeg:Su,isPowerOfTwo:Ks,ceilPowerOfTwo:yu,floorPowerOfTwo:Wr,setQuaternionFromProperEuler:Eu,normalize:Ct,denormalize:_i};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,r,s,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],p=n[2],h=n[5],g=n[8],_=r[0],m=r[3],d=r[6],x=r[1],v=r[4],y=r[7],R=r[2],A=r[5],w=r[8];return s[0]=o*_+a*x+c*R,s[3]=o*m+a*v+c*A,s[6]=o*d+a*y+c*w,s[1]=l*_+u*x+f*R,s[4]=l*m+u*v+f*A,s[7]=l*d+u*y+f*w,s[2]=p*_+h*x+g*R,s[5]=p*m+h*v+g*A,s[8]=p*d+h*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,p=a*c-u*s,h=l*s-o*c,g=t*f+n*p+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=p*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_s.makeScale(e,t)),this}rotate(e){return this.premultiply(_s.makeRotation(-e)),this}translate(e,t){return this.premultiply(_s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _s=new ke;function xc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bu(){const i=Xr("canvas");return i.style.display="block",i}const ao={};function $i(i){i in ao||(ao[i]=!0,console.warn(i))}const oo=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),co=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ur={[mn]:{transfer:Gr,primaries:Hr,toReference:i=>i,fromReference:i=>i},[vt]:{transfer:tt,primaries:Hr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[jr]:{transfer:Gr,primaries:Vr,toReference:i=>i.applyMatrix3(co),fromReference:i=>i.applyMatrix3(oo)},[aa]:{transfer:tt,primaries:Vr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(co),fromReference:i=>i.applyMatrix3(oo).convertLinearToSRGB()}},Tu=new Set([mn,jr]),Je={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Tu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ur[e].toReference,r=ur[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ur[i].primaries},getTransfer:function(i){return i===Xt?Gr:ur[i].transfer}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ti;class Mc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Xr("canvas")),ti.width=e.width,ti.height=e.height;const n=ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Au=0;class Sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xs(r[o].image)):s.push(xs(r[o]))}else s=xs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function xs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wu=0;class Ut extends Li{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Jt,r=Jt,s=Wt,o=Ki,a=Zt,c=Rn,l=Ut.DEFAULT_ANISOTROPY,u=Xt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Qn(),this.name="",this.source=new Sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:($i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qn?vt:Xt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?qn:gc}set encoding(e){$i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qn?vt:Xt}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=cc;Ut.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],p=c[1],h=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,y=(h+1)/2,R=(d+1)/2,A=(u+p)/4,w=(f+_)/4,G=(g+m)/4;return v>y&&v>R?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=A/n,s=w/n):y>R?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=A/r,s=G/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=w/s,r=G/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(p-u)/x,this.w=Math.acos((l+h+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ru extends Li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&($i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qn?vt:Xt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ut(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Ru{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yc extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cu extends Ut{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const p=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==p||l!==h||u!==g){let m=1-a;const d=c*p+l*h+u*g+f*_,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,d*x);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const y=a*x;if(c=c*m+p*y,l=l*m+h*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=R,l*=R,u*=R,f*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],p=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*h-l*p,e[t+1]=c*g+u*p+l*f-a*h,e[t+2]=l*g+u*h+a*p-c*f,e[t+3]=u*g-a*f-c*p-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),p=c(n/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*u*f+l*h*g,this._y=l*h*f-p*u*g,this._z=l*u*g+p*h*f,this._w=l*u*f-p*h*g;break;case"YXZ":this._x=p*u*f+l*h*g,this._y=l*h*f-p*u*g,this._z=l*u*g-p*h*f,this._w=l*u*f+p*h*g;break;case"ZXY":this._x=p*u*f-l*h*g,this._y=l*h*f+p*u*g,this._z=l*u*g+p*h*f,this._w=l*u*f-p*h*g;break;case"ZYX":this._x=p*u*f-l*h*g,this._y=l*h*f+p*u*g,this._z=l*u*g-p*h*f,this._w=l*u*f+p*h*g;break;case"YZX":this._x=p*u*f+l*h*g,this._y=l*h*f+p*u*g,this._z=l*u*g-p*h*f,this._w=l*u*f-p*h*g;break;case"XZY":this._x=p*u*f-l*h*g,this._y=l*h*f-p*u*g,this._z=l*u*g+p*h*f,this._w=l*u*f+p*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],p=n+a+f;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ms.copy(this).projectOnVector(e),this.sub(Ms)}reflect(e){return this.sub(Ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ms=new L,lo=new sr;class Dn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qt):qt.fromBufferAttribute(s,o),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),dr.subVectors(this.max,zi),ni.subVectors(e.a,zi),ii.subVectors(e.b,zi),ri.subVectors(e.c,zi),vn.subVectors(ii,ni),xn.subVectors(ri,ii),Nn.subVectors(ni,ri);let t=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Nn.z,Nn.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Nn.z,0,-Nn.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Nn.y,Nn.x,0];return!Ss(t,ni,ii,ri,dr)||(t=[1,0,0,0,1,0,0,0,1],!Ss(t,ni,ii,ri,dr))?!1:(fr.crossVectors(vn,xn),t=[fr.x,fr.y,fr.z],Ss(t,ni,ii,ri,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new L,new L,new L,new L,new L,new L,new L,new L],qt=new L,hr=new Dn,ni=new L,ii=new L,ri=new L,vn=new L,xn=new L,Nn=new L,zi=new L,dr=new L,fr=new L,Fn=new L;function Ss(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Fn.fromArray(i,s);const a=r.x*Math.abs(Fn.x)+r.y*Math.abs(Fn.y)+r.z*Math.abs(Fn.z),c=e.dot(Fn),l=t.dot(Fn),u=n.dot(Fn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Pu=new Dn,Gi=new L,ys=new L;class ar{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(ys)),this.expandByPoint(Gi.copy(e.center).sub(ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new L,Es=new L,pr=new L,Mn=new L,bs=new L,mr=new L,Ts=new L;class Lu{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Es.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Es);const s=e.distanceTo(t)*.5,o=-this.direction.dot(pr),a=Mn.dot(this.direction),c=-Mn.dot(pr),l=Mn.lengthSq(),u=Math.abs(1-o*o);let f,p,h,g;if(u>0)if(f=o*c-a,p=o*a-c,g=s*u,f>=0)if(p>=-g)if(p<=g){const _=1/u;f*=_,p*=_,h=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*c)+l;else p=-s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*c)+l;else p<=-g?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+p*(p+2*c)+l):p<=g?(f=0,p=Math.min(Math.max(-s,-c),s),h=p*(p+2*c)+l):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+p*(p+2*c)+l);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Es).addScaledVector(pr,p),h}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),r=cn.dot(cn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,r,s){bs.subVectors(t,e),mr.subVectors(n,e),Ts.crossVectors(bs,mr);let o=this.direction.dot(Ts),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const c=a*this.direction.dot(mr.crossVectors(Mn,mr));if(c<0)return null;const l=a*this.direction.dot(bs.cross(Mn));if(l<0||c+l>o)return null;const u=-a*Mn.dot(Ts);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,r,s,o,a,c,l,u,f,p,h,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,f,p,h,g,_,m)}set(e,t,n,r,s,o,a,c,l,u,f,p,h,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=p,d[3]=h,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/si.setFromMatrixColumn(e,0).length(),s=1/si.setFromMatrixColumn(e,1).length(),o=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*u,h=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,h=c*f,g=l*u,_=l*f;t[0]=p+_*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,h=c*f,g=l*u,_=l*f;t[0]=p-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,h=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=g*l-h,t[8]=p*l+_,t[1]=c*f,t[5]=_*l+p,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-p*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*f+g,t[10]=p-_*f}else if(e.order==="XZY"){const p=o*c,h=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=p*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Du,e,Iu)}lookAt(e,t,n){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Sn.crossVectors(n,Ft),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Sn.crossVectors(n,Ft)),Sn.normalize(),gr.crossVectors(Ft,Sn),r[0]=Sn.x,r[4]=gr.x,r[8]=Ft.x,r[1]=Sn.y,r[5]=gr.y,r[9]=Ft.y,r[2]=Sn.z,r[6]=gr.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],p=n[9],h=n[13],g=n[2],_=n[6],m=n[10],d=n[14],x=n[3],v=n[7],y=n[11],R=n[15],A=r[0],w=r[4],G=r[8],S=r[12],T=r[1],z=r[5],W=r[9],Q=r[13],P=r[2],O=r[6],F=r[10],X=r[14],$=r[3],ee=r[7],K=r[11],J=r[15];return s[0]=o*A+a*T+c*P+l*$,s[4]=o*w+a*z+c*O+l*ee,s[8]=o*G+a*W+c*F+l*K,s[12]=o*S+a*Q+c*X+l*J,s[1]=u*A+f*T+p*P+h*$,s[5]=u*w+f*z+p*O+h*ee,s[9]=u*G+f*W+p*F+h*K,s[13]=u*S+f*Q+p*X+h*J,s[2]=g*A+_*T+m*P+d*$,s[6]=g*w+_*z+m*O+d*ee,s[10]=g*G+_*W+m*F+d*K,s[14]=g*S+_*Q+m*X+d*J,s[3]=x*A+v*T+y*P+R*$,s[7]=x*w+v*z+y*O+R*ee,s[11]=x*G+v*W+y*F+R*K,s[15]=x*S+v*Q+y*X+R*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],p=e[10],h=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*c*f-r*l*f-s*a*p+n*l*p+r*a*h-n*c*h)+_*(+t*c*h-t*l*p+s*o*p-r*o*h+r*l*u-s*c*u)+m*(+t*l*f-t*a*h-s*o*f+n*o*h+s*a*u-n*l*u)+d*(-r*a*u-t*c*f+t*a*p+r*o*f-n*o*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],p=e[10],h=e[11],g=e[12],_=e[13],m=e[14],d=e[15],x=f*m*l-_*p*l+_*c*h-a*m*h-f*c*d+a*p*d,v=g*p*l-u*m*l-g*c*h+o*m*h+u*c*d-o*p*d,y=u*_*l-g*f*l+g*a*h-o*_*h-u*a*d+o*f*d,R=g*f*c-u*_*c-g*a*p+o*_*p+u*a*m-o*f*m,A=t*x+n*v+r*y+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=x*w,e[1]=(_*p*s-f*m*s-_*r*h+n*m*h+f*r*d-n*p*d)*w,e[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*d+n*c*d)*w,e[3]=(f*c*s-a*p*s-f*r*l+n*p*l+a*r*h-n*c*h)*w,e[4]=v*w,e[5]=(u*m*s-g*p*s+g*r*h-t*m*h-u*r*d+t*p*d)*w,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*d-t*c*d)*w,e[7]=(o*p*s-u*c*s+u*r*l-t*p*l-o*r*h+t*c*h)*w,e[8]=y*w,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*d-t*f*d)*w,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*d+t*a*d)*w,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*h-t*a*h)*w,e[12]=R*w,e[13]=(u*_*r-g*f*r+g*n*p-t*_*p-u*n*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*n*c-t*f*c-o*n*p+t*a*p)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,p=s*l,h=s*u,g=s*f,_=o*u,m=o*f,d=a*f,x=c*l,v=c*u,y=c*f,R=n.x,A=n.y,w=n.z;return r[0]=(1-(_+d))*R,r[1]=(h+y)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(h-y)*A,r[5]=(1-(p+d))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(g+v)*w,r[9]=(m-x)*w,r[10]=(1-(p+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=si.set(r[0],r[1],r[2]).length();const o=si.set(r[4],r[5],r[6]).length(),a=si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const l=1/s,u=1/o,f=1/a;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=dn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let h,g;if(a===dn)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===kr)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=dn){const c=this.elements,l=1/(t-e),u=1/(n-r),f=1/(o-s),p=(t+e)*l,h=(n+r)*u;let g,_;if(a===dn)g=(o+s)*f,_=-2*f;else if(a===kr)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new L,Yt=new rt,Du=new L(0,0,0),Iu=new L(1,1,1),Sn=new L,gr=new L,Ft=new L,uo=new rt,ho=new sr;class Jr{constructor(e=0,t=0,n=0,r=Jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],p=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ho.setFromEuler(this),this.setFromQuaternion(ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jr.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uu=0;const fo=new L,ai=new sr,ln=new rt,_r=new L,Hi=new L,Nu=new L,Fu=new sr,po=new L(1,0,0),mo=new L(0,1,0),go=new L(0,0,1),Ou={type:"added"},Bu={type:"removed"};class Mt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new L,t=new Jr,n=new sr,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new ke}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(po,e)}rotateY(e){return this.rotateOnAxis(mo,e)}rotateZ(e){return this.rotateOnAxis(go,e)}translateOnAxis(e,t){return fo.copy(e).applyQuaternion(this.quaternion),this.position.add(fo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(po,e)}translateY(e){return this.translateOnAxis(mo,e)}translateZ(e){return this.translateOnAxis(go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Hi,_r,this.up):ln.lookAt(_r,Hi,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),ai.setFromRotationMatrix(ln),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ou)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),p=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new L(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new L,un=new L,As=new L,hn=new L,oi=new L,ci=new L,_o=new L,ws=new L,Rs=new L,Cs=new L;let vr=!1;class jt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$t.subVectors(r,t),un.subVectors(n,t),As.subVectors(e,t);const o=$t.dot($t),a=$t.dot(un),c=$t.dot(As),l=un.dot(un),u=un.dot(As),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,h=(l*c-a*u)*p,g=(o*u-a*c)*p;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(e,t,n,r,s,o,a,c){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hn.x),c.addScaledVector(o,hn.y),c.addScaledVector(a,hn.z),c)}static isFrontFacing(e,t,n,r){return $t.subVectors(n,t),un.subVectors(e,t),$t.cross(un).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),un.subVectors(this.a,this.b),$t.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;oi.subVectors(r,n),ci.subVectors(s,n),ws.subVectors(e,n);const c=oi.dot(ws),l=ci.dot(ws);if(c<=0&&l<=0)return t.copy(n);Rs.subVectors(e,r);const u=oi.dot(Rs),f=ci.dot(Rs);if(u>=0&&f<=u)return t.copy(r);const p=c*f-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(oi,o);Cs.subVectors(e,s);const h=oi.dot(Cs),g=ci.dot(Cs);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ci,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return _o.subVectors(s,r),a=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(_o,a);const d=1/(m+_+p);return o=_*d,a=p*d,t.copy(n).addScaledVector(oi,o).addScaledVector(ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=oa(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ps(o,s,e+1/3),this.g=Ps(o,s,e),this.b=Ps(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=bc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Je.fromWorkingColorSpace(Et.copy(this),e),Math.round(ht(Et.r*255,0,255))*65536+Math.round(ht(Et.g*255,0,255))*256+Math.round(ht(Et.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=vt){Je.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(xr);const n=Yi(yn.h,xr.h,t),r=Yi(yn.s,xr.s,t),s=Yi(yn.l,xr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new We;We.NAMES=bc;let zu=0;class Di extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Ei,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qs,this.blendDst=Ys,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=no,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ys&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==no&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ln extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new L,Mr=new ce;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=io,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}}class Tc extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ac extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gu=0;const Vt=new rt,Ls=new Mt,li=new L,Ot=new Dn,Vi=new Dn,gt=new L;class It extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xc(e)?Ac:Tc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Ls.lookAt(e),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Ot.min,Vi.min),Ot.expandByPoint(gt),gt.addVectors(Ot.max,Vi.max),Ot.expandByPoint(gt)):(Ot.expandByPoint(Vi.min),Ot.expandByPoint(Vi.max))}Ot.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)gt.fromBufferAttribute(a,l),c&&(li.fromBufferAttribute(e,l),gt.add(li)),r=Math.max(r,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new L,u[T]=new L;const f=new L,p=new L,h=new L,g=new ce,_=new ce,m=new ce,d=new L,x=new L;function v(T,z,W){f.fromArray(r,T*3),p.fromArray(r,z*3),h.fromArray(r,W*3),g.fromArray(o,T*2),_.fromArray(o,z*2),m.fromArray(o,W*2),p.sub(f),h.sub(f),_.sub(g),m.sub(g);const Q=1/(_.x*m.y-m.x*_.y);isFinite(Q)&&(d.copy(p).multiplyScalar(m.y).addScaledVector(h,-_.y).multiplyScalar(Q),x.copy(h).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(Q),l[T].add(d),l[z].add(d),l[W].add(d),u[T].add(x),u[z].add(x),u[W].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,z=y.length;T<z;++T){const W=y[T],Q=W.start,P=W.count;for(let O=Q,F=Q+P;O<F;O+=3)v(n[O+0],n[O+1],n[O+2])}const R=new L,A=new L,w=new L,G=new L;function S(T){w.fromArray(s,T*3),G.copy(w);const z=l[T];R.copy(z),R.sub(w.multiplyScalar(w.dot(z))).normalize(),A.crossVectors(G,z);const Q=A.dot(u[T])<0?-1:1;c[T*4]=R.x,c[T*4+1]=R.y,c[T*4+2]=R.z,c[T*4+3]=Q}for(let T=0,z=y.length;T<z;++T){const W=y[T],Q=W.start,P=W.count;for(let O=Q,F=Q+P;O<F;O+=3)S(n[O+0]),S(n[O+1]),S(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,f=new L;if(e)for(let p=0,h=e.count;p<h;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,h=t.count;p<h;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,p=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*u;for(let d=0;d<u;d++)p[g++]=l[h++]}return new bt(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const p=l[u],h=e(p,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,p=l.length;f<p;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let p=0,h=f.length;p<h;p++)u.push(f[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vo=new rt,On=new Lu,Sr=new ar,xo=new L,ui=new L,hi=new L,di=new L,Ds=new L,yr=new L,Er=new ce,br=new ce,Tr=new ce,Mo=new L,So=new L,yo=new L,Ar=new L,wr=new L;class _e extends Mt{constructor(e=new It,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Ds.fromBufferAttribute(f,e),o?yr.addScaledVector(Ds,u):yr.addScaledVector(Ds.sub(t),u))}t.add(yr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),On.copy(e.ray).recast(e.near),!(Sr.containsPoint(On.origin)===!1&&(On.intersectSphere(Sr,xo)===null||On.origin.distanceToSquared(xo)>(e.far-e.near)**2))&&(vo.copy(s).invert(),On.copy(e.ray).applyMatrix4(vo),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,p=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],d=o[m.materialIndex],x=Math.max(m.start,h.start),v=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,R=v;y<R;y+=3){const A=a.getX(y),w=a.getX(y+1),G=a.getX(y+2);r=Rr(this,d,e,n,l,u,f,A,w,G),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,d=_;m<d;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Rr(this,o,e,n,l,u,f,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],d=o[m.materialIndex],x=Math.max(m.start,h.start),v=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,R=v;y<R;y+=3){const A=y,w=y+1,G=y+2;r=Rr(this,d,e,n,l,u,f,A,w,G),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,d=_;m<d;m+=3){const x=m,v=m+1,y=m+2;r=Rr(this,o,e,n,l,u,f,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Hu(i,e,t,n,r,s,o,a){let c;if(e.side===Dt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Pn,a),c===null)return null;wr.copy(a),wr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(wr);return l<t.near||l>t.far?null:{distance:l,point:wr.clone(),object:i}}function Rr(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,ui),i.getVertexPosition(c,hi),i.getVertexPosition(l,di);const u=Hu(i,e,t,n,ui,hi,di,Ar);if(u){r&&(Er.fromBufferAttribute(r,a),br.fromBufferAttribute(r,c),Tr.fromBufferAttribute(r,l),u.uv=jt.getInterpolation(Ar,ui,hi,di,Er,br,Tr,new ce)),s&&(Er.fromBufferAttribute(s,a),br.fromBufferAttribute(s,c),Tr.fromBufferAttribute(s,l),u.uv1=jt.getInterpolation(Ar,ui,hi,di,Er,br,Tr,new ce),u.uv2=u.uv1),o&&(Mo.fromBufferAttribute(o,a),So.fromBufferAttribute(o,c),yo.fromBufferAttribute(o,l),u.normal=jt.getInterpolation(Ar,ui,hi,di,Mo,So,yo,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};jt.getNormal(ui,hi,di,f.normal),u.face=f}return u}class gn extends It{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let p=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(f,2));function g(_,m,d,x,v,y,R,A,w,G,S){const T=y/w,z=R/G,W=y/2,Q=R/2,P=A/2,O=w+1,F=G+1;let X=0,$=0;const ee=new L;for(let K=0;K<F;K++){const J=K*z-Q;for(let ae=0;ae<O;ae++){const Y=ae*T-W;ee[_]=Y*x,ee[m]=J*v,ee[d]=P,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[d]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(ae/w),f.push(1-K/G),X+=1}}for(let K=0;K<G;K++)for(let J=0;J<w;J++){const ae=p+J+O*K,Y=p+J+O*(K+1),re=p+(J+1)+O*(K+1),ue=p+(J+1)+O*K;c.push(ae,Y,ue),c.push(Y,re,ue),$+=6}a.addGroup(h,$,S),h+=$,p+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=Ci(i[t]);for(const r in n)e[r]=n[r]}return e}function Vu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wc(i){return i.getRenderTarget()===null?i.outputColorSpace:Je.workingColorSpace}const ku={clone:Ci,merge:Pt};var Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=Vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rc extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Rc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class qu extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(fi,pi,e,t);r.layers=this.layers,this.add(r);const s=new zt(fi,pi,e,t);s.layers=this.layers,this.add(s);const o=new zt(fi,pi,e,t);o.layers=this.layers,this.add(o);const a=new zt(fi,pi,e,t);a.layers=this.layers,this.add(a);const c=new zt(fi,pi,e,t);c.layers=this.layers,this.add(c);const l=new zt(fi,pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,p,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cc extends Ut{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yu extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&($i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qn?vt:Xt),this.texture=new Cc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gn(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:An});s.uniforms.tEquirect.value=t;const o=new _e(r,s),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Wt),new qu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Is=new L,$u=new L,ju=new ke;class Gn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Is.subVectors(n,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Is),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ju.getNormalMatrix(e),r=this.coplanarPoint(Is).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new ar,Cr=new L;class ca{constructor(e=new Gn,t=new Gn,n=new Gn,r=new Gn,s=new Gn,o=new Gn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],p=r[7],h=r[8],g=r[9],_=r[10],m=r[11],d=r[12],x=r[13],v=r[14],y=r[15];if(n[0].setComponents(c-s,p-l,m-h,y-d).normalize(),n[1].setComponents(c+s,p+l,m+h,y+d).normalize(),n[2].setComponents(c+o,p+u,m+g,y+x).normalize(),n[3].setComponents(c-o,p-u,m-g,y-x).normalize(),n[4].setComponents(c-a,p-f,m-_,y-v).normalize(),t===dn)n[5].setComponents(c+a,p+f,m+_,y+v).normalize();else if(t===kr)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Cr.x=r.normal.x>0?e.max.x:e.min.x,Cr.y=r.normal.y>0?e.max.y:e.min.y,Cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ju(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const f=l.array,p=l.usage,h=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,p),l.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:h}}function s(l,u,f){const p=u.array,h=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,l),h.count===-1&&g.length===0&&i.bufferSubData(f,0,p),g.length!==0){for(let _=0,m=g.length;_<m;_++){const d=g[_];t?i.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}h.count!==-1&&(t?i.bufferSubData(f,h.offset*p.BYTES_PER_ELEMENT,p,h.offset,h.count):i.bufferSubData(f,h.offset*p.BYTES_PER_ELEMENT,p.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,r(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,l,u),f.version=l.version}}return{get:o,remove:a,update:c}}class jn extends It{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=e/a,p=t/c,h=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const x=d*p-o;for(let v=0;v<l;v++){const y=v*f-s;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<a;x++){const v=x+l*d,y=x+l*(d+1),R=x+1+l*(d+1),A=x+1+l*d;h.push(v,y,A),h.push(y,R,A)}this.setIndex(h),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,od=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ud=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Od=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,af=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Zu,alphahash_pars_fragment:Ku,alphamap_fragment:Qu,alphamap_pars_fragment:eh,alphatest_fragment:th,alphatest_pars_fragment:nh,aomap_fragment:ih,aomap_pars_fragment:rh,batching_pars_vertex:sh,batching_vertex:ah,begin_vertex:oh,beginnormal_vertex:ch,bsdfs:lh,iridescence_fragment:uh,bumpmap_pars_fragment:hh,clipping_planes_fragment:dh,clipping_planes_pars_fragment:fh,clipping_planes_pars_vertex:ph,clipping_planes_vertex:mh,color_fragment:gh,color_pars_fragment:_h,color_pars_vertex:vh,color_vertex:xh,common:Mh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:yh,displacementmap_pars_vertex:Eh,displacementmap_vertex:bh,emissivemap_fragment:Th,emissivemap_pars_fragment:Ah,colorspace_fragment:wh,colorspace_pars_fragment:Rh,envmap_fragment:Ch,envmap_common_pars_fragment:Ph,envmap_pars_fragment:Lh,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Wh,envmap_vertex:Ih,fog_vertex:Uh,fog_pars_vertex:Nh,fog_fragment:Fh,fog_pars_fragment:Oh,gradientmap_pars_fragment:Bh,lightmap_fragment:zh,lightmap_pars_fragment:Gh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Vh,lights_pars_begin:kh,lights_toon_fragment:Xh,lights_toon_pars_fragment:qh,lights_phong_fragment:Yh,lights_phong_pars_fragment:$h,lights_physical_fragment:jh,lights_physical_pars_fragment:Jh,lights_fragment_begin:Zh,lights_fragment_maps:Kh,lights_fragment_end:Qh,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:rd,map_pars_fragment:sd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:cd,metalnessmap_pars_fragment:ld,morphcolor_vertex:ud,morphnormal_vertex:hd,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:_d,normal_vertex:vd,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:yd,iridescence_pars_fragment:Ed,opaque_fragment:bd,packing:Td,premultiplied_alpha_fragment:Ad,project_vertex:wd,dithering_fragment:Rd,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Dd,shadowmap_pars_vertex:Id,shadowmap_vertex:Ud,shadowmask_pars_fragment:Nd,skinbase_vertex:Fd,skinning_pars_vertex:Od,skinning_vertex:Bd,skinnormal_vertex:zd,specularmap_fragment:Gd,specularmap_pars_fragment:Hd,tonemapping_fragment:Vd,tonemapping_pars_fragment:kd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:qd,uv_pars_vertex:Yd,uv_vertex:$d,worldpos_vertex:jd,background_vert:Jd,background_frag:Zd,backgroundCube_vert:Kd,backgroundCube_frag:Qd,cube_vert:ef,cube_frag:tf,depth_vert:nf,depth_frag:rf,distanceRGBA_vert:sf,distanceRGBA_frag:af,equirect_vert:of,equirect_frag:cf,linedashed_vert:lf,linedashed_frag:uf,meshbasic_vert:hf,meshbasic_frag:df,meshlambert_vert:ff,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:gf,meshnormal_vert:_f,meshnormal_frag:vf,meshphong_vert:xf,meshphong_frag:Mf,meshphysical_vert:Sf,meshphysical_frag:yf,meshtoon_vert:Ef,meshtoon_frag:bf,points_vert:Tf,points_frag:Af,shadow_vert:wf,shadow_frag:Rf,sprite_vert:Cf,sprite_frag:Pf},de={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},tn={basic:{uniforms:Pt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Pt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Pt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Pt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Pt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new We(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Pt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Pt([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Pt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Pt([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Pt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Pt([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Pt([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Pt([de.lights,de.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};tn.physical={uniforms:Pt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Pr={r:0,b:0,g:0};function Lf(i,e,t,n,r,s,o){const a=new We(0);let c=s===!0?0:1,l,u,f=null,p=0,h=null;function g(m,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===$r)?(u===void 0&&(u=new _e(new gn(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ci(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Je.getTransfer(v.colorSpace)!==tt,(f!==v||p!==v.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,p=v.version,h=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _e(new jn(2,2),new $n({name:"BackgroundMaterial",uniforms:Ci(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Je.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,p=v.version,h=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Pr,wc(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Df(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function f(P,O,F,X,$){let ee=!1;if(o){const K=_(X,F,O);l!==K&&(l=K,h(l.object)),ee=d(P,X,F,$),ee&&x(P,X,F,$)}else{const K=O.wireframe===!0;(l.geometry!==X.id||l.program!==F.id||l.wireframe!==K)&&(l.geometry=X.id,l.program=F.id,l.wireframe=K,ee=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,G(P,O,F,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function h(P){return n.isWebGL2?i.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,O,F){const X=F.wireframe===!0;let $=a[P.id];$===void 0&&($={},a[P.id]=$);let ee=$[O.id];ee===void 0&&(ee={},$[O.id]=ee);let K=ee[X];return K===void 0&&(K=m(p()),ee[X]=K),K}function m(P){const O=[],F=[],X=[];for(let $=0;$<r;$++)O[$]=0,F[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:F,attributeDivisors:X,object:P,attributes:{},index:null}}function d(P,O,F,X){const $=l.attributes,ee=O.attributes;let K=0;const J=F.getAttributes();for(const ae in J)if(J[ae].location>=0){const re=$[ae];let ue=ee[ae];if(ue===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor)),re===void 0||re.attribute!==ue||ue&&re.data!==ue.data)return!0;K++}return l.attributesNum!==K||l.index!==X}function x(P,O,F,X){const $={},ee=O.attributes;let K=0;const J=F.getAttributes();for(const ae in J)if(J[ae].location>=0){let re=ee[ae];re===void 0&&(ae==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),ae==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const ue={};ue.attribute=re,re&&re.data&&(ue.data=re.data),$[ae]=ue,K++}l.attributes=$,l.attributesNum=K,l.index=X}function v(){const P=l.newAttributes;for(let O=0,F=P.length;O<F;O++)P[O]=0}function y(P){R(P,0)}function R(P,O){const F=l.newAttributes,X=l.enabledAttributes,$=l.attributeDivisors;F[P]=1,X[P]===0&&(i.enableVertexAttribArray(P),X[P]=1),$[P]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),$[P]=O)}function A(){const P=l.newAttributes,O=l.enabledAttributes;for(let F=0,X=O.length;F<X;F++)O[F]!==P[F]&&(i.disableVertexAttribArray(F),O[F]=0)}function w(P,O,F,X,$,ee,K){K===!0?i.vertexAttribIPointer(P,O,F,$,ee):i.vertexAttribPointer(P,O,F,X,$,ee)}function G(P,O,F,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=X.attributes,ee=F.getAttributes(),K=O.defaultAttributeValues;for(const J in ee){const ae=ee[J];if(ae.location>=0){let Y=$[J];if(Y===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const re=Y.normalized,ue=Y.itemSize,ye=t.get(Y);if(ye===void 0)continue;const fe=ye.buffer,Ae=ye.type,Ie=ye.bytesPerElement,Me=n.isWebGL2===!0&&(Ae===i.INT||Ae===i.UNSIGNED_INT||Y.gpuType===lc);if(Y.isInterleavedBufferAttribute){const Le=Y.data,C=Le.stride,le=Y.offset;if(Le.isInstancedInterleavedBuffer){for(let j=0;j<ae.locationSize;j++)R(ae.location+j,Le.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let j=0;j<ae.locationSize;j++)y(ae.location+j);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let j=0;j<ae.locationSize;j++)w(ae.location+j,ue/ae.locationSize,Ae,re,C*Ie,(le+ue/ae.locationSize*j)*Ie,Me)}else{if(Y.isInstancedBufferAttribute){for(let Le=0;Le<ae.locationSize;Le++)R(ae.location+Le,Y.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Le=0;Le<ae.locationSize;Le++)y(ae.location+Le);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Le=0;Le<ae.locationSize;Le++)w(ae.location+Le,ue/ae.locationSize,Ae,re,ue*Ie,ue/ae.locationSize*Le*Ie,Me)}}else if(K!==void 0){const re=K[J];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(ae.location,re);break;case 3:i.vertexAttrib3fv(ae.location,re);break;case 4:i.vertexAttrib4fv(ae.location,re);break;default:i.vertexAttrib1fv(ae.location,re)}}}}A()}function S(){W();for(const P in a){const O=a[P];for(const F in O){const X=O[F];for(const $ in X)g(X[$].object),delete X[$];delete O[F]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const F in O){const X=O[F];for(const $ in X)g(X[$].object),delete X[$];delete O[F]}delete a[P.id]}function z(P){for(const O in a){const F=a[O];if(F[P.id]===void 0)continue;const X=F[P.id];for(const $ in X)g(X[$].object),delete X[$];delete F[P.id]}}function W(){Q(),u=!0,l!==c&&(l=c,h(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:W,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function If(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function c(u,f,p){if(p===0)return;let h,g;if(r)h=i,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](s,u,f,p),t.update(f,s,p)}function l(u,f,p){if(p===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<p;g++)this.render(u[g],f[g]);else{h.multiDrawArraysWEBGL(s,u,0,f,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Uf(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,y=o||e.has("OES_texture_float"),R=v&&y,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:A}}function Nf(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Gn,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const h=f.length!==0||p||n!==0||r;return r=p,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const x=s?0:n,v=x*4;let y=d.clippingState||null;c.value=y,y=u(g,p,v,h);for(let R=0;R!==v;++R)y[R]=t[R];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,p,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=h+_*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=h;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ff(i){let e=new WeakMap;function t(o,a){return a===$s?o.mapping=Ti:a===js&&(o.mapping=Ai),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$s||a===js)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Yu(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Lc extends Rc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,Eo=[.125,.215,.35,.446,.526,.582],kn=20,Us=new Lc,bo=new We;let Ns=null,Fs=0,Os=0;const Hn=(1+Math.sqrt(5))/2,mi=1/Hn,To=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Hn,mi),new L(0,Hn,-mi),new L(mi,0,Hn),new L(-mi,0,Hn),new L(Hn,mi,0),new L(-Hn,mi,0)];class Qs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns,Fs,Os),e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget(),Fs=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Qi,format:Zt,colorSpace:mn,depthBuffer:!1},r=Ao(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ao(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Of(s)),this._blurMaterial=Bf(s,e,t)}return r}_compileMaterial(e){const t=new _e(this._lodPlanes[0],e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,n,r){const a=new zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(bo),u.toneMapping=wn,u.autoClear=!1;const h=new Ln({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new _e(new gn,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(bo),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):x===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const v=this._cubeSize;Lr(r,x*v,d>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ti||e.mapping===Ai;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Lr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=To[(r-1)%To.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _e(this._lodPlanes[r],l),p=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*kn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):kn;m>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const d=[];let x=0;for(let w=0;w<kn;++w){const G=w/_,S=Math.exp(-G*G/2);d.push(S),w===0?x+=S:w<m&&(x+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const y=this._sizeLods[r],R=3*y*(r>v-xi?r-v+xi:0),A=4*(this._cubeSize-y);Lr(t,R,A,3*y,2*y),c.setRenderTarget(t),c.render(f,Us)}}function Of(i){const e=[],t=[],n=[];let r=i;const s=i-xi+1+Eo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-xi?c=Eo[o-i+xi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,p=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*h),v=new Float32Array(m*g*h),y=new Float32Array(d*g*h);for(let A=0;A<h;A++){const w=A%3*2/3-1,G=A>2?0:-1,S=[w,G,0,w+2/3,G,0,w+2/3,G+1,0,w,G,0,w+2/3,G+1,0,w,G+1,0];x.set(S,_*g*A),v.set(p,m*g*A);const T=[A,A,A,A,A,A];y.set(T,d*g*A)}const R=new It;R.setAttribute("position",new bt(x,_)),R.setAttribute("uv",new bt(v,m)),R.setAttribute("faceIndex",new bt(y,d)),e.push(R),r>xi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ao(i,e,t){const n=new Yn(i,e,t);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Bf(i,e,t){const n=new Float32Array(kn),r=new L(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function wo(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ro(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$s||c===js,u=c===Ti||c===Ai;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Qs(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Qs(i));const p=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Hf(i,e,t,n){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}p.removeEventListener("dispose",o),delete r[p.id];const h=s.get(p);h&&(e.remove(h),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(f){const p=f.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(f){const p=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const x=h.array;_=h.version;for(let v=0,y=x.length;v<y;v+=3){const R=x[v+0],A=x[v+1],w=x[v+2];p.push(R,A,A,w,w,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const R=v+0,A=v+1,w=v+2;p.push(R,A,A,w,w,R)}}else return;const m=new(xc(p)?Ac:Tc)(p,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const p=s.get(f);if(p){const h=f.index;h!==null&&p.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Vf(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,g){i.drawElements(s,g,a,h*c),t.update(g,s,1)}function f(h,g,_){if(_===0)return;let m,d;if(r)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,g,a,h*c,_),t.update(g,s,_)}function p(h,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(h[d]/c,g[d]);else{m.multiDrawElementsWEBGL(s,g,0,a,h,0,_);let d=0;for(let x=0;x<_;x++)d+=g[x];t.update(d,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function kf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Wf(i,e){return i[0]-e[0]}function Xf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function qf(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new xt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let O=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var h=O;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],G=u.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),R===!0&&(S=3);let T=u.attributes.position.count*S,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const W=new Float32Array(T*z*4*_),Q=new yc(W,T,z,_);Q.type=bn,Q.needsUpdate=!0;const P=S*4;for(let F=0;F<_;F++){const X=A[F],$=w[F],ee=G[F],K=T*z*4*F;for(let J=0;J<X.count;J++){const ae=J*P;v===!0&&(o.fromBufferAttribute(X,J),W[K+ae+0]=o.x,W[K+ae+1]=o.y,W[K+ae+2]=o.z,W[K+ae+3]=0),y===!0&&(o.fromBufferAttribute($,J),W[K+ae+4]=o.x,W[K+ae+5]=o.y,W[K+ae+6]=o.z,W[K+ae+7]=0),R===!0&&(o.fromBufferAttribute(ee,J),W[K+ae+8]=o.x,W[K+ae+9]=o.y,W[K+ae+10]=o.z,W[K+ae+11]=ee.itemSize===4?o.w:1)}}m={count:_,texture:Q,size:new ce(T,z)},s.set(u,m),u.addEventListener("dispose",O)}let d=0;for(let v=0;v<p.length;v++)d+=p[v];const x=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const R=_[y];R[0]=y,R[1]=p[y]}_.sort(Xf);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Wf);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const R=a[y],A=R[0],w=R[1];A!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+y)!==m[A]&&u.setAttribute("morphTarget"+y,m[A]),d&&u.getAttribute("morphNormal"+y)!==d[A]&&u.setAttribute("morphNormal"+y,d[A]),r[y]=w,x+=w):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",v),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Yf(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Dc extends Ut{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:Xn,u!==Xn&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xn&&(n=En),n===void 0&&u===Ri&&(n=Wn),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ic=new Ut,Uc=new Dc(1,1);Uc.compareFunction=vc;const Nc=new yc,Fc=new Cu,Oc=new Cc,Co=[],Po=[],Lo=new Float32Array(16),Do=new Float32Array(9),Io=new Float32Array(4);function Ii(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Co[r];if(s===void 0&&(s=new Float32Array(r),Co[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zr(i,e){let t=Po[e];t===void 0&&(t=new Int32Array(e),Po[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function Kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Io.set(n),i.uniformMatrix2fv(this.addr,!1,Io),ft(t,n)}}function Qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Do.set(n),i.uniformMatrix3fv(this.addr,!1,Do),ft(t,n)}}function ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Lo.set(n),i.uniformMatrix4fv(this.addr,!1,Lo),ft(t,n)}}function tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function sp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function lp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Uc:Ic;t.setTexture2D(e||s,r)}function up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Fc,r)}function hp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Oc,r)}function dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Nc,r)}function fp(i){switch(i){case 5126:return $f;case 35664:return jf;case 35665:return Jf;case 35666:return Zf;case 35674:return Kf;case 35675:return Qf;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(i,e){i.uniform1fv(this.addr,e)}function mp(i,e){const t=Ii(e,this.size,2);i.uniform2fv(this.addr,t)}function gp(i,e){const t=Ii(e,this.size,3);i.uniform3fv(this.addr,t)}function _p(i,e){const t=Ii(e,this.size,4);i.uniform4fv(this.addr,t)}function vp(i,e){const t=Ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xp(i,e){const t=Ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mp(i,e){const t=Ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sp(i,e){i.uniform1iv(this.addr,e)}function yp(i,e){i.uniform2iv(this.addr,e)}function Ep(i,e){i.uniform3iv(this.addr,e)}function bp(i,e){i.uniform4iv(this.addr,e)}function Tp(i,e){i.uniform1uiv(this.addr,e)}function Ap(i,e){i.uniform2uiv(this.addr,e)}function wp(i,e){i.uniform3uiv(this.addr,e)}function Rp(i,e){i.uniform4uiv(this.addr,e)}function Cp(i,e,t){const n=this.cache,r=e.length,s=Zr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ic,s[o])}function Pp(i,e,t){const n=this.cache,r=e.length,s=Zr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Fc,s[o])}function Lp(i,e,t){const n=this.cache,r=e.length,s=Zr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Oc,s[o])}function Dp(i,e,t){const n=this.cache,r=e.length,s=Zr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Nc,s[o])}function Ip(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return xp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return yp;case 35668:case 35672:return Ep;case 35669:case 35673:return bp;case 5125:return Tp;case 36294:return Ap;case 36295:return wp;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Dp}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fp(t.type)}}class Np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ip(t.type)}}class Fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function Uo(i,e){i.seq.push(e),i.map[e.id]=e}function Op(i,e,t){const n=i.name,r=n.length;for(Bs.lastIndex=0;;){const s=Bs.exec(n),o=Bs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Uo(t,l===void 0?new Up(a,i,e):new Np(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Fp(a),Uo(t,f)),t=f}}}class Br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Op(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function No(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bp=37297;let zp=0;function Gp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Hp(i){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(i);let n;switch(e===t?n="":e===Vr&&t===Hr?n="LinearDisplayP3ToLinearSRGB":e===Hr&&t===Vr&&(n="LinearSRGBToLinearDisplayP3"),i){case mn:case jr:return[n,"LinearTransferOETF"];case vt:case aa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Fo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Gp(i.getShaderSource(e),o)}else return r}function Vp(i,e){const t=Hp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kp(i,e){let t;switch(e){case Gl:t="Linear";break;case Hl:t="Reinhard";break;case Vl:t="OptimizedCineon";break;case oc:t="ACESFilmic";break;case Wl:t="AgX";break;case kl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function Xp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Mi).join(`
`)}function qp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Mi(i){return i!==""}function Oo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $p=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace($p,Jp)}const jp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jp(i,e){let t=ze[e];if(t===void 0){const n=jp.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ea(t)}const Zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zo(i){return i.replace(Zp,Kp)}function Kp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Go(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function em(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Ai:e="ENVMAP_TYPE_CUBE";break;case $r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function nm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Bl:e="ENVMAP_BLENDING_MIX";break;case zl:e="ENVMAP_BLENDING_ADD";break}return e}function im(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Qp(t),l=em(t),u=tm(t),f=nm(t),p=im(t),h=t.isWebGL2?"":Wp(t),g=Xp(t),_=qp(s),m=r.createProgram();let d,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mi).join(`
`),d.length>0&&(d+=`
`),x=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mi).join(`
`),x.length>0&&(x+=`
`)):(d=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),x=[h,Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?ze.tonemapping_pars_fragment:"",t.toneMapping!==wn?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Vp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),o=ea(o),o=Oo(o,t),o=Bo(o,t),a=ea(a),a=Oo(a,t),a=Bo(a,t),o=zo(o),a=zo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+d+o,R=v+x+a,A=No(r,r.VERTEX_SHADER,y),w=No(r,r.FRAGMENT_SHADER,R);r.attachShader(m,A),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function G(W){if(i.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(w).trim();let F=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,A,w);else{const $=Fo(r,A,"vertex"),ee=Fo(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+$+`
`+ee)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(P===""||O==="")&&(X=!1);X&&(W.diagnostics={runnable:F,programLog:Q,vertexShader:{log:P,prefix:d},fragmentShader:{log:O,prefix:x}})}r.deleteShader(A),r.deleteShader(w),S=new Br(r,m),T=Yp(r,m)}let S;this.getUniforms=function(){return S===void 0&&G(this),S};let T;this.getAttributes=function(){return T===void 0&&G(this),T};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(m,Bp)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=w,this}let sm=0;class am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new om(e),t.set(e,n)),n}}class om{constructor(e){this.id=sm++,this.code=e,this.usedTimes=0}}function cm(i,e,t,n,r,s,o){const a=new Ec,c=new am,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,T,z,W,Q){const P=W.fog,O=Q.geometry,F=S.isMeshStandardMaterial?W.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),$=X&&X.mapping===$r?X.image.height:null,ee=g[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=K!==void 0?K.length:0;let ae=0;O.morphAttributes.position!==void 0&&(ae=1),O.morphAttributes.normal!==void 0&&(ae=2),O.morphAttributes.color!==void 0&&(ae=3);let Y,re,ue,ye;if(ee){const Tt=tn[ee];Y=Tt.vertexShader,re=Tt.fragmentShader}else Y=S.vertexShader,re=S.fragmentShader,c.update(S),ue=c.getVertexShaderID(S),ye=c.getFragmentShaderID(S);const fe=i.getRenderTarget(),Ae=Q.isInstancedMesh===!0,Ie=Q.isBatchedMesh===!0,Me=!!S.map,Le=!!S.matcap,C=!!X,le=!!S.aoMap,j=!!S.lightMap,oe=!!S.bumpMap,I=!!S.normalMap,q=!!S.displacementMap,Z=!!S.emissiveMap,E=!!S.metalnessMap,M=!!S.roughnessMap,N=S.anisotropy>0,te=S.clearcoat>0,ne=S.iridescence>0,ie=S.sheen>0,Ee=S.transmission>0,pe=N&&!!S.anisotropyMap,xe=te&&!!S.clearcoatMap,we=te&&!!S.clearcoatNormalMap,Fe=te&&!!S.clearcoatRoughnessMap,se=ne&&!!S.iridescenceMap,Ye=ne&&!!S.iridescenceThicknessMap,Xe=ie&&!!S.sheenColorMap,Ue=ie&&!!S.sheenRoughnessMap,Te=!!S.specularMap,Se=!!S.specularColorMap,Be=!!S.specularIntensityMap,je=Ee&&!!S.transmissionMap,st=Ee&&!!S.thicknessMap,He=!!S.gradientMap,he=!!S.alphaMap,D=S.alphaTest>0,me=!!S.alphaHash,ge=!!S.extensions,Pe=!!O.attributes.uv1,Re=!!O.attributes.uv2,Ze=!!O.attributes.uv3;let Ke=wn;return S.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Ke=i.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:re,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Ie,instancing:Ae,instancingColor:Ae&&Q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:mn,map:Me,matcap:Le,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:$,aoMap:le,lightMap:j,bumpMap:oe,normalMap:I,displacementMap:p&&q,emissiveMap:Z,normalMapObjectSpace:I&&S.normalMapType===nu,normalMapTangentSpace:I&&S.normalMapType===_c,metalnessMap:E,roughnessMap:M,anisotropy:N,anisotropyMap:pe,clearcoat:te,clearcoatMap:xe,clearcoatNormalMap:we,clearcoatRoughnessMap:Fe,iridescence:ne,iridescenceMap:se,iridescenceThicknessMap:Ye,sheen:ie,sheenColorMap:Xe,sheenRoughnessMap:Ue,specularMap:Te,specularColorMap:Se,specularIntensityMap:Be,transmission:Ee,transmissionMap:je,thicknessMap:st,gradientMap:He,opaque:S.transparent===!1&&S.blending===Ei,alphaMap:he,alphaTest:D,alphaHash:me,combine:S.combine,mapUv:Me&&_(S.map.channel),aoMapUv:le&&_(S.aoMap.channel),lightMapUv:j&&_(S.lightMap.channel),bumpMapUv:oe&&_(S.bumpMap.channel),normalMapUv:I&&_(S.normalMap.channel),displacementMapUv:q&&_(S.displacementMap.channel),emissiveMapUv:Z&&_(S.emissiveMap.channel),metalnessMapUv:E&&_(S.metalnessMap.channel),roughnessMapUv:M&&_(S.roughnessMap.channel),anisotropyMapUv:pe&&_(S.anisotropyMap.channel),clearcoatMapUv:xe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(S.sheenRoughnessMap.channel),specularMapUv:Te&&_(S.specularMap.channel),specularColorMapUv:Se&&_(S.specularColorMap.channel),specularIntensityMapUv:Be&&_(S.specularIntensityMap.channel),transmissionMapUv:je&&_(S.transmissionMap.channel),thicknessMapUv:st&&_(S.thicknessMap.channel),alphaMapUv:he&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(I||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Re,vertexUv3s:Ze,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(Me||he),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Me&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ge&&S.extensions.derivatives===!0,extensionFragDepth:ge&&S.extensions.fragDepth===!0,extensionDrawBuffers:ge&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)T.push(z),T.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(x(T,S),v(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const T=g[S.type];let z;if(T){const W=tn[T];z=ku.clone(W.uniforms)}else z=S.uniforms;return z}function R(S,T){let z;for(let W=0,Q=l.length;W<Q;W++){const P=l[W];if(P.cacheKey===T){z=P,++z.usedTimes;break}}return z===void 0&&(z=new rm(i,T,S,s),l.push(z)),z}function A(S){if(--S.usedTimes===0){const T=l.indexOf(S);l[T]=l[l.length-1],l.pop(),S.destroy()}}function w(S){c.remove(S)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:l,dispose:G}}function lm(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function um(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,p,h,g,_,m){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=h,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,p,h,g,_,m){const d=o(f,p,h,g,_,m);h.transmission>0?n.push(d):h.transparent===!0?r.push(d):t.push(d)}function c(f,p,h,g,_,m){const d=o(f,p,h,g,_,m);h.transmission>0?n.unshift(d):h.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,p){t.length>1&&t.sort(f||um),n.length>1&&n.sort(p||Ho),r.length>1&&r.sort(p||Ho)}function u(){for(let f=e,p=i.length;f<p;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function hm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Vo,i.set(n,[o])):r>=s.length?(o=new Vo,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function dm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new We};break;case"SpotLight":t={position:new L,direction:new L,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pm=0;function mm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gm(i,e){const t=new dm,n=fm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,o=new rt,a=new rt;function c(u,f){let p=0,h=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let _=0,m=0,d=0,x=0,v=0,y=0,R=0,A=0,w=0,G=0,S=0;u.sort(mm);const T=f===!0?Math.PI:1;for(let W=0,Q=u.length;W<Q;W++){const P=u[W],O=P.color,F=P.intensity,X=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=O.r*F*T,h+=O.g*F*T,g+=O.b*F*T;else if(P.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(P.sh.coefficients[ee],F);S++}else if(P.isDirectionalLight){const ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const K=P.shadow,J=n.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,r.directionalShadow[_]=J,r.directionalShadowMap[_]=$,r.directionalShadowMatrix[_]=P.shadow.matrix,y++}r.directional[_]=ee,_++}else if(P.isSpotLight){const ee=t.get(P);ee.position.setFromMatrixPosition(P.matrixWorld),ee.color.copy(O).multiplyScalar(F*T),ee.distance=X,ee.coneCos=Math.cos(P.angle),ee.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),ee.decay=P.decay,r.spot[d]=ee;const K=P.shadow;if(P.map&&(r.spotLightMap[w]=P.map,w++,K.updateMatrices(P),P.castShadow&&G++),r.spotLightMatrix[d]=K.matrix,P.castShadow){const J=n.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,r.spotShadow[d]=J,r.spotShadowMap[d]=$,A++}d++}else if(P.isRectAreaLight){const ee=t.get(P);ee.color.copy(O).multiplyScalar(F),ee.halfWidth.set(P.width*.5,0,0),ee.halfHeight.set(0,P.height*.5,0),r.rectArea[x]=ee,x++}else if(P.isPointLight){const ee=t.get(P);if(ee.color.copy(P.color).multiplyScalar(P.intensity*T),ee.distance=P.distance,ee.decay=P.decay,P.castShadow){const K=P.shadow,J=n.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,r.pointShadow[m]=J,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=P.shadow.matrix,R++}r.point[m]=ee,m++}else if(P.isHemisphereLight){const ee=t.get(P);ee.skyColor.copy(P.color).multiplyScalar(F*T),ee.groundColor.copy(P.groundColor).multiplyScalar(F*T),r.hemi[v]=ee,v++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=h,r.ambient[2]=g;const z=r.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==d||z.rectAreaLength!==x||z.hemiLength!==v||z.numDirectionalShadows!==y||z.numPointShadows!==R||z.numSpotShadows!==A||z.numSpotMaps!==w||z.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+w-G,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=S,z.directionalLength=_,z.pointLength=m,z.spotLength=d,z.rectAreaLength=x,z.hemiLength=v,z.numDirectionalShadows=y,z.numPointShadows=R,z.numSpotShadows=A,z.numSpotMaps=w,z.numLightProbes=S,r.version=pm++)}function l(u,f){let p=0,h=0,g=0,_=0,m=0;const d=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),p++}else if(y.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const R=r.point[h];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),h++}else if(y.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:r}}function ko(i,e){const t=new gm(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _m(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new ko(i,e),t.set(s,[c])):o>=a.length?(c=new ko(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class vm extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xm extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ym(i,e,t){let n=new ca;const r=new ce,s=new ce,o=new xt,a=new vm({depthPacking:tu}),c=new xm,l={},u=t.maxTextureSize,f={[Pn]:Dt,[Dt]:Pn,[nn]:nn},p=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _e(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let d=this.type;this.render=function(A,w,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),T=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),W=i.state;W.setBlending(An),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Q=d!==en&&this.type===en,P=d===en&&this.type!==en;for(let O=0,F=A.length;O<F;O++){const X=A[O],$=X.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ee=$.getFrameExtents();if(r.multiply(ee),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,$.mapSize.y=s.y)),$.map===null||Q===!0||P===!0){const J=this.type!==en?{minFilter:Lt,magFilter:Lt}:{};$.map!==null&&$.map.dispose(),$.map=new Yn(r.x,r.y,J),$.map.texture.name=X.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const K=$.getViewportCount();for(let J=0;J<K;J++){const ae=$.getViewport(J);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),W.viewport(o),$.updateMatrices(X,J),n=$.getFrustum(),y(w,G,$.camera,X,this.type)}$.isPointLightShadow!==!0&&this.type===en&&x($,G),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,T,z)};function x(A,w){const G=e.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,G,p,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,G,h,_,null)}function v(A,w,G,S){let T=null;const z=G.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)T=z;else if(T=G.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=T.uuid,Q=w.uuid;let P=l[W];P===void 0&&(P={},l[W]=P);let O=P[Q];O===void 0&&(O=T.clone(),P[Q]=O,w.addEventListener("dispose",R)),T=O}if(T.visible=w.visible,T.wireframe=w.wireframe,S===en?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=i.properties.get(T);W.light=G}return T}function y(A,w,G,S,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===en)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),P=A.material;if(Array.isArray(P)){const O=Q.groups;for(let F=0,X=O.length;F<X;F++){const $=O[F],ee=P[$.materialIndex];if(ee&&ee.visible){const K=v(A,ee,S,T);A.onBeforeShadow(i,A,w,G,Q,K,$),i.renderBufferDirect(G,null,Q,K,A,$),A.onAfterShadow(i,A,w,G,Q,K,$)}}}else if(P.visible){const O=v(A,P,S,T);A.onBeforeShadow(i,A,w,G,Q,O,null),i.renderBufferDirect(G,null,Q,O,A,null),A.onAfterShadow(i,A,w,G,Q,O,null)}}const W=A.children;for(let Q=0,P=W.length;Q<P;Q++)y(W[Q],w,G,S,T)}function R(A){A.target.removeEventListener("dispose",R);for(const G in l){const S=l[G],T=A.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function Em(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const me=new xt;let ge=null;const Pe=new xt(0,0,0,0);return{setMask:function(Re){ge!==Re&&!D&&(i.colorMask(Re,Re,Re,Re),ge=Re)},setLocked:function(Re){D=Re},setClear:function(Re,Ze,Ke,pt,Tt){Tt===!0&&(Re*=pt,Ze*=pt,Ke*=pt),me.set(Re,Ze,Ke,pt),Pe.equals(me)===!1&&(i.clearColor(Re,Ze,Ke,pt),Pe.copy(me))},reset:function(){D=!1,ge=null,Pe.set(-1,0,0,0)}}}function s(){let D=!1,me=null,ge=null,Pe=null;return{setTest:function(Re){Re?Ie(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Re){me!==Re&&!D&&(i.depthMask(Re),me=Re)},setFunc:function(Re){if(ge!==Re){switch(Re){case Ll:i.depthFunc(i.NEVER);break;case Dl:i.depthFunc(i.ALWAYS);break;case Il:i.depthFunc(i.LESS);break;case zr:i.depthFunc(i.LEQUAL);break;case Ul:i.depthFunc(i.EQUAL);break;case Nl:i.depthFunc(i.GEQUAL);break;case Fl:i.depthFunc(i.GREATER);break;case Ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Re}},setLocked:function(Re){D=Re},setClear:function(Re){Pe!==Re&&(i.clearDepth(Re),Pe=Re)},reset:function(){D=!1,me=null,ge=null,Pe=null}}}function o(){let D=!1,me=null,ge=null,Pe=null,Re=null,Ze=null,Ke=null,pt=null,Tt=null;return{setTest:function(Qe){D||(Qe?Ie(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Qe){me!==Qe&&!D&&(i.stencilMask(Qe),me=Qe)},setFunc:function(Qe,At,Qt){(ge!==Qe||Pe!==At||Re!==Qt)&&(i.stencilFunc(Qe,At,Qt),ge=Qe,Pe=At,Re=Qt)},setOp:function(Qe,At,Qt){(Ze!==Qe||Ke!==At||pt!==Qt)&&(i.stencilOp(Qe,At,Qt),Ze=Qe,Ke=At,pt=Qt)},setLocked:function(Qe){D=Qe},setClear:function(Qe){Tt!==Qe&&(i.clearStencil(Qe),Tt=Qe)},reset:function(){D=!1,me=null,ge=null,Pe=null,Re=null,Ze=null,Ke=null,pt=null,Tt=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let p={},h={},g=new WeakMap,_=[],m=null,d=!1,x=null,v=null,y=null,R=null,A=null,w=null,G=null,S=new We(0,0,0),T=0,z=!1,W=null,Q=null,P=null,O=null,F=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=ee>=1):K.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=ee>=2);let J=null,ae={};const Y=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),ue=new xt().fromArray(Y),ye=new xt().fromArray(re);function fe(D,me,ge,Pe){const Re=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(D,Ze),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<ge;Ke++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(me,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(me+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Ze}const Ae={};Ae[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ie(i.DEPTH_TEST),c.setFunc(zr),Z(!1),E(ba),Ie(i.CULL_FACE),I(An);function Ie(D){p[D]!==!0&&(i.enable(D),p[D]=!0)}function Me(D){p[D]!==!1&&(i.disable(D),p[D]=!1)}function Le(D,me){return h[D]!==me?(i.bindFramebuffer(D,me),h[D]=me,n&&(D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me)),!0):!1}function C(D,me){let ge=_,Pe=!1;if(D)if(ge=g.get(me),ge===void 0&&(ge=[],g.set(me,ge)),D.isWebGLMultipleRenderTargets){const Re=D.texture;if(ge.length!==Re.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,Ke=Re.length;Ze<Ke;Ze++)ge[Ze]=i.COLOR_ATTACHMENT0+Ze;ge.length=Re.length,Pe=!0}}else ge[0]!==i.COLOR_ATTACHMENT0&&(ge[0]=i.COLOR_ATTACHMENT0,Pe=!0);else ge[0]!==i.BACK&&(ge[0]=i.BACK,Pe=!0);Pe&&(t.isWebGL2?i.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function le(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const j={[Vn]:i.FUNC_ADD,[gl]:i.FUNC_SUBTRACT,[_l]:i.FUNC_REVERSE_SUBTRACT};if(n)j[Ra]=i.MIN,j[Ca]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(j[Ra]=D.MIN_EXT,j[Ca]=D.MAX_EXT)}const oe={[vl]:i.ZERO,[xl]:i.ONE,[Ml]:i.SRC_COLOR,[qs]:i.SRC_ALPHA,[Al]:i.SRC_ALPHA_SATURATE,[bl]:i.DST_COLOR,[yl]:i.DST_ALPHA,[Sl]:i.ONE_MINUS_SRC_COLOR,[Ys]:i.ONE_MINUS_SRC_ALPHA,[Tl]:i.ONE_MINUS_DST_COLOR,[El]:i.ONE_MINUS_DST_ALPHA,[wl]:i.CONSTANT_COLOR,[Rl]:i.ONE_MINUS_CONSTANT_COLOR,[Cl]:i.CONSTANT_ALPHA,[Pl]:i.ONE_MINUS_CONSTANT_ALPHA};function I(D,me,ge,Pe,Re,Ze,Ke,pt,Tt,Qe){if(D===An){d===!0&&(Me(i.BLEND),d=!1);return}if(d===!1&&(Ie(i.BLEND),d=!0),D!==ml){if(D!==x||Qe!==z){if((v!==Vn||A!==Vn)&&(i.blendEquation(i.FUNC_ADD),v=Vn,A=Vn),Qe)switch(D){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.ONE,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,R=null,w=null,G=null,S.set(0,0,0),T=0,x=D,z=Qe}return}Re=Re||me,Ze=Ze||ge,Ke=Ke||Pe,(me!==v||Re!==A)&&(i.blendEquationSeparate(j[me],j[Re]),v=me,A=Re),(ge!==y||Pe!==R||Ze!==w||Ke!==G)&&(i.blendFuncSeparate(oe[ge],oe[Pe],oe[Ze],oe[Ke]),y=ge,R=Pe,w=Ze,G=Ke),(pt.equals(S)===!1||Tt!==T)&&(i.blendColor(pt.r,pt.g,pt.b,Tt),S.copy(pt),T=Tt),x=D,z=!1}function q(D,me){D.side===nn?Me(i.CULL_FACE):Ie(i.CULL_FACE);let ge=D.side===Dt;me&&(ge=!ge),Z(ge),D.blending===Ei&&D.transparent===!1?I(An):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const Pe=D.stencilWrite;l.setTest(Pe),Pe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),N(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ie(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(D){W!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),W=D)}function E(D){D!==dl?(Ie(i.CULL_FACE),D!==Q&&(D===ba?i.cullFace(i.BACK):D===fl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),Q=D}function M(D){D!==P&&($&&i.lineWidth(D),P=D)}function N(D,me,ge){D?(Ie(i.POLYGON_OFFSET_FILL),(O!==me||F!==ge)&&(i.polygonOffset(me,ge),O=me,F=ge)):Me(i.POLYGON_OFFSET_FILL)}function te(D){D?Ie(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function ne(D){D===void 0&&(D=i.TEXTURE0+X-1),J!==D&&(i.activeTexture(D),J=D)}function ie(D,me,ge){ge===void 0&&(J===null?ge=i.TEXTURE0+X-1:ge=J);let Pe=ae[ge];Pe===void 0&&(Pe={type:void 0,texture:void 0},ae[ge]=Pe),(Pe.type!==D||Pe.texture!==me)&&(J!==ge&&(i.activeTexture(ge),J=ge),i.bindTexture(D,me||Ae[D]),Pe.type=D,Pe.texture=me)}function Ee(){const D=ae[J];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(D){ue.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function je(D){ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function st(D,me){let ge=f.get(me);ge===void 0&&(ge=new WeakMap,f.set(me,ge));let Pe=ge.get(D);Pe===void 0&&(Pe=i.getUniformBlockIndex(me,D.name),ge.set(D,Pe))}function He(D,me){const Pe=f.get(me).get(D);u.get(me)!==Pe&&(i.uniformBlockBinding(me,Pe,D.__bindingPointIndex),u.set(me,Pe))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},J=null,ae={},h={},g=new WeakMap,_=[],m=null,d=!1,x=null,v=null,y=null,R=null,A=null,w=null,G=null,S=new We(0,0,0),T=0,z=!1,W=null,Q=null,P=null,O=null,F=null,ue.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ie,disable:Me,bindFramebuffer:Le,drawBuffers:C,useProgram:le,setBlending:I,setMaterial:q,setFlipSided:Z,setCullFace:E,setLineWidth:M,setPolygonOffset:N,setScissorTest:te,activeTexture:ne,bindTexture:ie,unbindTexture:Ee,compressedTexImage2D:pe,compressedTexImage3D:xe,texImage2D:Te,texImage3D:Se,updateUBOMapping:st,uniformBlockBinding:He,texStorage2D:Xe,texStorage3D:Ue,texSubImage2D:we,texSubImage3D:Fe,compressedTexSubImage2D:se,compressedTexSubImage3D:Ye,scissor:Be,viewport:je,reset:he}}function bm(i,e,t,n,r,s,o){const a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return h?new OffscreenCanvas(E,M):Xr("canvas")}function _(E,M,N,te){let ne=1;if((E.width>te||E.height>te)&&(ne=te/Math.max(E.width,E.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ie=M?Wr:Math.floor,Ee=ie(ne*E.width),pe=ie(ne*E.height);f===void 0&&(f=g(Ee,pe));const xe=N?g(Ee,pe):f;return xe.width=Ee,xe.height=pe,xe.getContext("2d").drawImage(E,0,0,Ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ee+"x"+pe+")."),xe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return Ks(E.width)&&Ks(E.height)}function d(E){return a?!1:E.wrapS!==Jt||E.wrapT!==Jt||E.minFilter!==Lt&&E.minFilter!==Wt}function x(E,M){return E.generateMipmaps&&M&&E.minFilter!==Lt&&E.minFilter!==Wt}function v(E){i.generateMipmap(E)}function y(E,M,N,te,ne=!1){if(a===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=M;if(M===i.RED&&(N===i.FLOAT&&(ie=i.R32F),N===i.HALF_FLOAT&&(ie=i.R16F),N===i.UNSIGNED_BYTE&&(ie=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(ie=i.R8UI),N===i.UNSIGNED_SHORT&&(ie=i.R16UI),N===i.UNSIGNED_INT&&(ie=i.R32UI),N===i.BYTE&&(ie=i.R8I),N===i.SHORT&&(ie=i.R16I),N===i.INT&&(ie=i.R32I)),M===i.RG&&(N===i.FLOAT&&(ie=i.RG32F),N===i.HALF_FLOAT&&(ie=i.RG16F),N===i.UNSIGNED_BYTE&&(ie=i.RG8)),M===i.RGBA){const Ee=ne?Gr:Je.getTransfer(te);N===i.FLOAT&&(ie=i.RGBA32F),N===i.HALF_FLOAT&&(ie=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ie=Ee===tt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(E,M,N){return x(E,N)===!0||E.isFramebufferTexture&&E.minFilter!==Lt&&E.minFilter!==Wt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){return E===Lt||E===Pa||E===hs?i.NEAREST:i.LINEAR}function w(E){const M=E.target;M.removeEventListener("dispose",w),S(M),M.isVideoTexture&&u.delete(M)}function G(E){const M=E.target;M.removeEventListener("dispose",G),z(M)}function S(E){const M=n.get(E);if(M.__webglInit===void 0)return;const N=E.source,te=p.get(N);if(te){const ne=te[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(E),Object.keys(te).length===0&&p.delete(N)}n.remove(E)}function T(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const N=E.source,te=p.get(N);delete te[M.__cacheKey],o.memory.textures--}function z(E){const M=E.texture,N=n.get(E),te=n.get(M);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(N.__webglFramebuffer[ne]))for(let ie=0;ie<N.__webglFramebuffer[ne].length;ie++)i.deleteFramebuffer(N.__webglFramebuffer[ne][ie]);else i.deleteFramebuffer(N.__webglFramebuffer[ne]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[ne])}else{if(Array.isArray(N.__webglFramebuffer))for(let ne=0;ne<N.__webglFramebuffer.length;ne++)i.deleteFramebuffer(N.__webglFramebuffer[ne]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ne=0;ne<N.__webglColorRenderbuffer.length;ne++)N.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[ne]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,ie=M.length;ne<ie;ne++){const Ee=n.get(M[ne]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(E)}let W=0;function Q(){W=0}function P(){const E=W;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),W+=1,E}function O(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function F(E,M){const N=n.get(E);if(E.isVideoTexture&&q(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(N,E,M);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function X(E,M){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ue(N,E,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function $(E,M){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ue(N,E,M);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function ee(E,M){const N=n.get(E);if(E.version>0&&N.__version!==E.version){ye(N,E,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}const K={[wi]:i.REPEAT,[Jt]:i.CLAMP_TO_EDGE,[Js]:i.MIRRORED_REPEAT},J={[Lt]:i.NEAREST,[Pa]:i.NEAREST_MIPMAP_NEAREST,[hs]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[Xl]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},ae={[iu]:i.NEVER,[lu]:i.ALWAYS,[ru]:i.LESS,[vc]:i.LEQUAL,[su]:i.EQUAL,[cu]:i.GEQUAL,[au]:i.GREATER,[ou]:i.NOTEQUAL};function Y(E,M,N){if(N?(i.texParameteri(E,i.TEXTURE_WRAP_S,K[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,J[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,J[M.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Jt||M.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,A(M.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Lt&&M.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Lt||M.minFilter!==hs&&M.minFilter!==Ki||M.type===bn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Qi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function re(E,M){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",w));const te=M.source;let ne=p.get(te);ne===void 0&&(ne={},p.set(te,ne));const ie=O(M);if(ie!==E.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ne[ie].usedTimes++;const Ee=ne[E.__cacheKey];Ee!==void 0&&(ne[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(M)),E.__cacheKey=ie,E.__webglTexture=ne[ie].texture}return N}function ue(E,M,N){let te=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=i.TEXTURE_3D);const ne=re(E,M),ie=M.source;t.bindTexture(te,E.__webglTexture,i.TEXTURE0+N);const Ee=n.get(ie);if(ie.version!==Ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+N);const pe=Je.getPrimaries(Je.workingColorSpace),xe=M.colorSpace===Xt?null:Je.getPrimaries(M.colorSpace),we=M.colorSpace===Xt||pe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Fe=d(M)&&m(M.image)===!1;let se=_(M.image,Fe,!1,r.maxTextureSize);se=Z(M,se);const Ye=m(se)||a,Xe=s.convert(M.format,M.colorSpace);let Ue=s.convert(M.type),Te=y(M.internalFormat,Xe,Ue,M.colorSpace,M.isVideoTexture);Y(te,M,Ye);let Se;const Be=M.mipmaps,je=a&&M.isVideoTexture!==!0&&Te!==mc,st=Ee.__version===void 0||ne===!0,He=R(M,se,Ye);if(M.isDepthTexture)Te=i.DEPTH_COMPONENT,a?M.type===bn?Te=i.DEPTH_COMPONENT32F:M.type===En?Te=i.DEPTH_COMPONENT24:M.type===Wn?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:M.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Xn&&Te===i.DEPTH_COMPONENT&&M.type!==sa&&M.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=En,Ue=s.convert(M.type)),M.format===Ri&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,M.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Wn,Ue=s.convert(M.type))),st&&(je?t.texStorage2D(i.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,Xe,Ue,null));else if(M.isDataTexture)if(Be.length>0&&Ye){je&&st&&t.texStorage2D(i.TEXTURE_2D,He,Te,Be[0].width,Be[0].height);for(let he=0,D=Be.length;he<D;he++)Se=Be[he],je?t.texSubImage2D(i.TEXTURE_2D,he,0,0,Se.width,Se.height,Xe,Ue,Se.data):t.texImage2D(i.TEXTURE_2D,he,Te,Se.width,Se.height,0,Xe,Ue,Se.data);M.generateMipmaps=!1}else je?(st&&t.texStorage2D(i.TEXTURE_2D,He,Te,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,Xe,Ue,se.data)):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,Xe,Ue,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){je&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Te,Be[0].width,Be[0].height,se.depth);for(let he=0,D=Be.length;he<D;he++)Se=Be[he],M.format!==Zt?Xe!==null?je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,se.depth,Xe,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,Te,Se.width,Se.height,se.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Se.width,Se.height,se.depth,Xe,Ue,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,Te,Se.width,Se.height,se.depth,0,Xe,Ue,Se.data)}else{je&&st&&t.texStorage2D(i.TEXTURE_2D,He,Te,Be[0].width,Be[0].height);for(let he=0,D=Be.length;he<D;he++)Se=Be[he],M.format!==Zt?Xe!==null?je?t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Se.width,Se.height,Xe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,he,Te,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(i.TEXTURE_2D,he,0,0,Se.width,Se.height,Xe,Ue,Se.data):t.texImage2D(i.TEXTURE_2D,he,Te,Se.width,Se.height,0,Xe,Ue,Se.data)}else if(M.isDataArrayTexture)je?(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Te,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Xe,Ue,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,Xe,Ue,se.data);else if(M.isData3DTexture)je?(st&&t.texStorage3D(i.TEXTURE_3D,He,Te,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Xe,Ue,se.data)):t.texImage3D(i.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,Xe,Ue,se.data);else if(M.isFramebufferTexture){if(st)if(je)t.texStorage2D(i.TEXTURE_2D,He,Te,se.width,se.height);else{let he=se.width,D=se.height;for(let me=0;me<He;me++)t.texImage2D(i.TEXTURE_2D,me,Te,he,D,0,Xe,Ue,null),he>>=1,D>>=1}}else if(Be.length>0&&Ye){je&&st&&t.texStorage2D(i.TEXTURE_2D,He,Te,Be[0].width,Be[0].height);for(let he=0,D=Be.length;he<D;he++)Se=Be[he],je?t.texSubImage2D(i.TEXTURE_2D,he,0,0,Xe,Ue,Se):t.texImage2D(i.TEXTURE_2D,he,Te,Xe,Ue,Se);M.generateMipmaps=!1}else je?(st&&t.texStorage2D(i.TEXTURE_2D,He,Te,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,Ue,se)):t.texImage2D(i.TEXTURE_2D,0,Te,Xe,Ue,se);x(M,Ye)&&v(te),Ee.__version=ie.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ye(E,M,N){if(M.image.length!==6)return;const te=re(E,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const ie=n.get(ne);if(ne.version!==ie.__version||te===!0){t.activeTexture(i.TEXTURE0+N);const Ee=Je.getPrimaries(Je.workingColorSpace),pe=M.colorSpace===Xt?null:Je.getPrimaries(M.colorSpace),xe=M.colorSpace===Xt||Ee===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,se=[];for(let he=0;he<6;he++)!we&&!Fe?se[he]=_(M.image[he],!1,!0,r.maxCubemapSize):se[he]=Fe?M.image[he].image:M.image[he],se[he]=Z(M,se[he]);const Ye=se[0],Xe=m(Ye)||a,Ue=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),Se=y(M.internalFormat,Ue,Te,M.colorSpace),Be=a&&M.isVideoTexture!==!0,je=ie.__version===void 0||te===!0;let st=R(M,Ye,Xe);Y(i.TEXTURE_CUBE_MAP,M,Xe);let He;if(we){Be&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Se,Ye.width,Ye.height);for(let he=0;he<6;he++){He=se[he].mipmaps;for(let D=0;D<He.length;D++){const me=He[D];M.format!==Zt?Ue!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,0,0,me.width,me.height,Ue,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,0,0,me.width,me.height,Ue,Te,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,Se,me.width,me.height,0,Ue,Te,me.data)}}}else{He=M.mipmaps,Be&&je&&(He.length>0&&st++,t.texStorage2D(i.TEXTURE_CUBE_MAP,st,Se,se[0].width,se[0].height));for(let he=0;he<6;he++)if(Fe){Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,se[he].width,se[he].height,Ue,Te,se[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,se[he].width,se[he].height,0,Ue,Te,se[he].data);for(let D=0;D<He.length;D++){const ge=He[D].image[he].image;Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,0,0,ge.width,ge.height,Ue,Te,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,Se,ge.width,ge.height,0,Ue,Te,ge.data)}}else{Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ue,Te,se[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Se,Ue,Te,se[he]);for(let D=0;D<He.length;D++){const me=He[D];Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,0,0,Ue,Te,me.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,Se,Ue,Te,me.image[he])}}}x(M,Xe)&&v(i.TEXTURE_CUBE_MAP),ie.__version=ne.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function fe(E,M,N,te,ne,ie){const Ee=s.convert(N.format,N.colorSpace),pe=s.convert(N.type),xe=y(N.internalFormat,Ee,pe,N.colorSpace);if(!n.get(M).__hasExternalTextures){const Fe=Math.max(1,M.width>>ie),se=Math.max(1,M.height>>ie);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ie,xe,Fe,se,M.depth,0,Ee,pe,null):t.texImage2D(ne,ie,xe,Fe,se,0,Ee,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),I(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ne,n.get(N).__webglTexture,0,oe(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ne,n.get(N).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(E,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let te=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||I(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===bn?te=i.DEPTH_COMPONENT32F:ne.type===En&&(te=i.DEPTH_COMPONENT24));const ie=oe(M);I(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,te,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,te,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){const te=oe(M);N&&I(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):I(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<te.length;ne++){const ie=te[ne],Ee=s.convert(ie.format,ie.colorSpace),pe=s.convert(ie.type),xe=y(ie.internalFormat,Ee,pe,ie.colorSpace),we=oe(M);N&&I(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,xe,M.width,M.height):I(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,xe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,ne=oe(M);if(M.depthTexture.format===Xn)I(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===Ri)I(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Me(E){const M=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,E)}else if(N){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=i.createRenderbuffer(),Ae(M.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Ae(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(E,M,N){const te=n.get(E);M!==void 0&&fe(te.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Me(E)}function C(E){const M=E.texture,N=n.get(E),te=n.get(M);E.addEventListener("dispose",G),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,o.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,ie=E.isWebGLMultipleRenderTargets===!0,Ee=m(E)||a;if(ne){N.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[pe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)N.__webglFramebuffer[pe][xe]=i.createFramebuffer()}else N.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)N.__webglFramebuffer[pe]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ie)if(r.drawBuffers){const pe=E.texture;for(let xe=0,we=pe.length;xe<we;xe++){const Fe=n.get(pe[xe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&I(E)===!1){const pe=ie?M:[M];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){const we=pe[xe];N.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[xe]);const Fe=s.convert(we.format,we.colorSpace),se=s.convert(we.type),Ye=y(we.internalFormat,Fe,se,we.colorSpace,E.isXRRenderTarget===!0),Xe=oe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ye,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,N.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Y(i.TEXTURE_CUBE_MAP,M,Ee);for(let pe=0;pe<6;pe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)fe(N.__webglFramebuffer[pe][xe],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else fe(N.__webglFramebuffer[pe],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(M,Ee)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const pe=E.texture;for(let xe=0,we=pe.length;xe<we;xe++){const Fe=pe[xe],se=n.get(Fe);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),Y(i.TEXTURE_2D,Fe,Ee),fe(N.__webglFramebuffer,E,Fe,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),x(Fe,Ee)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,te.__webglTexture),Y(pe,M,Ee),a&&M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)fe(N.__webglFramebuffer[xe],E,M,i.COLOR_ATTACHMENT0,pe,xe);else fe(N.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,pe,0);x(M,Ee)&&v(pe),t.unbindTexture()}E.depthBuffer&&Me(E)}function le(E){const M=m(E)||a,N=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ne=N.length;te<ne;te++){const ie=N[te];if(x(ie,M)){const Ee=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,pe=n.get(ie).__webglTexture;t.bindTexture(Ee,pe),v(Ee),t.unbindTexture()}}}function j(E){if(a&&E.samples>0&&I(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],N=E.width,te=E.height;let ne=i.COLOR_BUFFER_BIT;const ie=[],Ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(E),xe=E.isWebGLMultipleRenderTargets===!0;if(xe)for(let we=0;we<M.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let we=0;we<M.length;we++){ie.push(i.COLOR_ATTACHMENT0+we),E.depthBuffer&&ie.push(Ee);const Fe=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Fe===!1&&(E.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),xe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[we]),Fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ee])),xe){const se=n.get(M[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,N,te,0,0,N,te,ne,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let we=0;we<M.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,pe.__webglColorRenderbuffer[we]);const Fe=n.get(M[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function oe(E){return Math.min(r.maxSamples,E.samples)}function I(E){const M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function q(E){const M=o.render.frame;u.get(E)!==M&&(u.set(E,M),E.update())}function Z(E,M){const N=E.colorSpace,te=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Zs||N!==mn&&N!==Xt&&(Je.getTransfer(N)===tt?a===!1?e.has("EXT_sRGB")===!0&&te===Zt?(E.format=Zs,E.minFilter=Wt,E.generateMipmaps=!1):M=Mc.sRGBToLinear(M):(te!==Zt||ne!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=ee,this.rebindTextures=Le,this.setupRenderTarget=C,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=I}function Tm(i,e,t){const n=t.isWebGL2;function r(s,o=Xt){let a;const c=Je.getTransfer(o);if(s===Rn)return i.UNSIGNED_BYTE;if(s===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(s===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===ql)return i.BYTE;if(s===Yl)return i.SHORT;if(s===sa)return i.UNSIGNED_SHORT;if(s===lc)return i.INT;if(s===En)return i.UNSIGNED_INT;if(s===bn)return i.FLOAT;if(s===Qi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$l)return i.ALPHA;if(s===Zt)return i.RGBA;if(s===jl)return i.LUMINANCE;if(s===Jl)return i.LUMINANCE_ALPHA;if(s===Xn)return i.DEPTH_COMPONENT;if(s===Ri)return i.DEPTH_STENCIL;if(s===Zs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zl)return i.RED;if(s===dc)return i.RED_INTEGER;if(s===Kl)return i.RG;if(s===fc)return i.RG_INTEGER;if(s===pc)return i.RGBA_INTEGER;if(s===ds||s===fs||s===ps||s===ms)if(c===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ds)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ds)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ms)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===La||s===Da||s===Ia||s===Ua)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===La)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Da)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ia)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ua)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Na||s===Fa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Na)return c===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Fa)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Oa||s===Ba||s===za||s===Ga||s===Ha||s===Va||s===ka||s===Wa||s===Xa||s===qa||s===Ya||s===$a||s===ja||s===Ja)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Oa)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ba)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===za)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ga)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ha)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Va)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ka)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wa)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xa)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qa)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ya)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$a)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ja)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ja)return c===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gs||s===Za||s===Ka)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gs)return c===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Za)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ka)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ql||s===Qa||s===eo||s===to)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===eo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===to)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Am extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&p>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rm extends Li{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,p=null,h=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const x=[],v=[],y=new ce;let R=null;const A=new zt;A.layers.enable(1),A.viewport=new xt;const w=new zt;w.layers.enable(2),w.viewport=new xt;const G=[A,w],S=new Am;S.layers.enable(1),S.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=x[Y];return re===void 0&&(re=new zs,x[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=x[Y];return re===void 0&&(re=new zs,x[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=x[Y];return re===void 0&&(re=new zs,x[Y]=re),re.getHandSpace()};function W(Y){const re=v.indexOf(Y.inputSource);if(re===-1)return;const ue=x[re];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,l||o),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",P);for(let Y=0;Y<x.length;Y++){const re=v[Y];re!==null&&(v[Y]=null,x[Y].disconnect(re))}T=null,z=null,e.setRenderTarget(m),h=null,p=null,f=null,r=null,d=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),d=new Yn(h.framebufferWidth,h.framebufferHeight,{format:Zt,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let re=null,ue=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=_.stencil?Ri:Xn,ue=_.stencil?Wn:En);const fe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(fe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new Yn(p.textureWidth,p.textureHeight,{format:Zt,type:Rn,depthTexture:new Dc(p.textureWidth,p.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ae=e.properties.get(d);Ae.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(Y){for(let re=0;re<Y.removed.length;re++){const ue=Y.removed[re],ye=v.indexOf(ue);ye>=0&&(v[ye]=null,x[ye].disconnect(ue))}for(let re=0;re<Y.added.length;re++){const ue=Y.added[re];let ye=v.indexOf(ue);if(ye===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=v.length){v.push(ue),ye=Ae;break}else if(v[Ae]===null){v[Ae]=ue,ye=Ae;break}if(ye===-1)break}const fe=x[ye];fe&&fe.connect(ue)}}const O=new L,F=new L;function X(Y,re,ue){O.setFromMatrixPosition(re.matrixWorld),F.setFromMatrixPosition(ue.matrixWorld);const ye=O.distanceTo(F),fe=re.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,Ie=fe[14]/(fe[10]-1),Me=fe[14]/(fe[10]+1),Le=(fe[9]+1)/fe[5],C=(fe[9]-1)/fe[5],le=(fe[8]-1)/fe[0],j=(Ae[8]+1)/Ae[0],oe=Ie*le,I=Ie*j,q=ye/(-le+j),Z=q*-le;re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Z),Y.translateZ(q),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const E=Ie+q,M=Me+q,N=oe-Z,te=I+(ye-Z),ne=Le*Me/M*E,ie=C*Me/M*E;Y.projectionMatrix.makePerspective(N,te,ne,ie,E,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function $(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;S.near=w.near=A.near=Y.near,S.far=w.far=A.far=Y.far,(T!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,z=S.far);const re=Y.parent,ue=S.cameras;$(S,re);for(let ye=0;ye<ue.length;ye++)$(ue[ye],re);ue.length===2?X(S,A,w):S.projectionMatrix.copy(A.projectionMatrix),ee(Y,S,re)};function ee(Y,re,ue){ue===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=er*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&h===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)};let K=null;function J(Y,re){if(u=re.getViewerPose(l||o),g=re,u!==null){const ue=u.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ye=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,ye=!0);for(let fe=0;fe<ue.length;fe++){const Ae=ue[fe];let Ie=null;if(h!==null)Ie=h.getViewport(Ae);else{const Le=f.getViewSubImage(p,Ae);Ie=Le.viewport,fe===0&&(e.setRenderTargetTextures(d,Le.colorTexture,p.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(d))}let Me=G[fe];Me===void 0&&(Me=new zt,Me.layers.enable(fe),Me.viewport=new xt,G[fe]=Me),Me.matrix.fromArray(Ae.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Ae.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),fe===0&&(S.matrix.copy(Me.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ye===!0&&S.cameras.push(Me)}}for(let ue=0;ue<x.length;ue++){const ye=v[ue],fe=x[ue];ye!==null&&fe!==void 0&&fe.update(ye,re,l||o)}K&&K(Y,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const ae=new Pc;ae.setAnimationLoop(J),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}}function Cm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,wc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,x,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Pm(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const R=v.program;n.updateUBOMapping(x,R);const A=e.render.frame;s[x.id]!==A&&(p(x),s[x.id]=A)}function u(x){const v=f();x.__bindingPointIndex=v;const y=i.createBuffer(),R=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=r[x.id],y=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,w=y.length;A<w;A++){const G=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,T=G.length;S<T;S++){const z=G[S];if(h(z,A,S,R)===!0){const W=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let P=0;for(let O=0;O<Q.length;O++){const F=Q[O],X=_(F);typeof F=="number"||typeof F=="boolean"?(z.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,W+P,z.__data)):F.isMatrix3?(z.__data[0]=F.elements[0],z.__data[1]=F.elements[1],z.__data[2]=F.elements[2],z.__data[3]=0,z.__data[4]=F.elements[3],z.__data[5]=F.elements[4],z.__data[6]=F.elements[5],z.__data[7]=0,z.__data[8]=F.elements[6],z.__data[9]=F.elements[7],z.__data[10]=F.elements[8],z.__data[11]=0):(F.toArray(z.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,v,y,R){const A=x.value,w=v+"_"+y;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const G=R[w];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return R[w]=A,!0}else if(G.equals(A)===!1)return G.copy(A),!0}return!1}function g(x){const v=x.uniforms;let y=0;const R=16;for(let w=0,G=v.length;w<G;w++){const S=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,z=S.length;T<z;T++){const W=S[T],Q=Array.isArray(W.value)?W.value:[W.value];for(let P=0,O=Q.length;P<O;P++){const F=Q[P],X=_(F),$=y%R;$!==0&&R-$<X.boundary&&(y+=R-$),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=X.storage}}}const A=y%R;return A>0&&(y+=R-A),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class Bc{constructor(e={}){const{canvas:t=bu(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const v=this;let y=!1,R=0,A=0,w=null,G=-1,S=null;const T=new xt,z=new xt;let W=null;const Q=new We(0);let P=0,O=t.width,F=t.height,X=1,$=null,ee=null;const K=new xt(0,0,O,F),J=new xt(0,0,O,F);let ae=!1;const Y=new ca;let re=!1,ue=!1,ye=null;const fe=new rt,Ae=new ce,Ie=new L,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return w===null?X:1}let C=n;function le(b,B){for(let V=0;V<b.length;V++){const k=b[V],H=t.getContext(k,B);if(H!==null)return H}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ra}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",me,!1),C===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),C=le(B,b),C===null)throw le(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let j,oe,I,q,Z,E,M,N,te,ne,ie,Ee,pe,xe,we,Fe,se,Ye,Xe,Ue,Te,Se,Be,je;function st(){j=new Gf(C),oe=new Uf(C,j,e),j.init(oe),Se=new Tm(C,j,oe),I=new Em(C,j,oe),q=new kf(C),Z=new lm,E=new bm(C,j,I,Z,oe,Se,q),M=new Ff(v),N=new zf(v),te=new Ju(C,oe),Be=new Df(C,j,te,oe),ne=new Hf(C,te,q,Be),ie=new Yf(C,ne,te,q),Xe=new qf(C,oe,E),Fe=new Nf(Z),Ee=new cm(v,M,N,j,oe,Be,Fe),pe=new Cm(v,Z),xe=new hm,we=new _m(j,oe),Ye=new Lf(v,M,N,I,ie,p,c),se=new ym(v,ie,oe),je=new Pm(C,q,oe,I),Ue=new If(C,j,q,oe),Te=new Vf(C,j,q,oe),q.programs=Ee.programs,v.capabilities=oe,v.extensions=j,v.properties=Z,v.renderLists=xe,v.shadowMap=se,v.state=I,v.info=q}st();const He=new Rm(v,C);this.xr=He,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=j.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=j.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(O,F,!1))},this.getSize=function(b){return b.set(O,F)},this.setSize=function(b,B,V=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,F=B,t.width=Math.floor(b*X),t.height=Math.floor(B*X),V===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(O*X,F*X).floor()},this.setDrawingBufferSize=function(b,B,V){O=b,F=B,X=V,t.width=Math.floor(b*V),t.height=Math.floor(B*V),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,B,V,k){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,B,V,k),I.viewport(T.copy(K).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,B,V,k){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,B,V,k),I.scissor(z.copy(J).multiplyScalar(X).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){I.setScissorTest(ae=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(b=!0,B=!0,V=!0){let k=0;if(b){let H=!1;if(w!==null){const ve=w.texture.format;H=ve===pc||ve===fc||ve===dc}if(H){const ve=w.texture.type,be=ve===Rn||ve===En||ve===sa||ve===Wn||ve===uc||ve===hc,Ce=Ye.getClearColor(),De=Ye.getClearAlpha(),Ge=Ce.r,Ne=Ce.g,Oe=Ce.b;be?(h[0]=Ge,h[1]=Ne,h[2]=Oe,h[3]=De,C.clearBufferuiv(C.COLOR,0,h)):(g[0]=Ge,g[1]=Ne,g[2]=Oe,g[3]=De,C.clearBufferiv(C.COLOR,0,g))}else k|=C.COLOR_BUFFER_BIT}B&&(k|=C.DEPTH_BUFFER_BIT),V&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",me,!1),xe.dispose(),we.dispose(),Z.dispose(),M.dispose(),N.dispose(),ie.dispose(),Be.dispose(),je.dispose(),Ee.dispose(),He.dispose(),He.removeEventListener("sessionstart",Tt),He.removeEventListener("sessionend",Qe),ye&&(ye.dispose(),ye=null),At.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=q.autoReset,B=se.enabled,V=se.autoUpdate,k=se.needsUpdate,H=se.type;st(),q.autoReset=b,se.enabled=B,se.autoUpdate=V,se.needsUpdate=k,se.type=H}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ge(b){const B=b.target;B.removeEventListener("dispose",ge),Pe(B)}function Pe(b){Re(b),Z.remove(b)}function Re(b){const B=Z.get(b).programs;B!==void 0&&(B.forEach(function(V){Ee.releaseProgram(V)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,V,k,H,ve){B===null&&(B=Me);const be=H.isMesh&&H.matrixWorld.determinant()<0,Ce=ol(b,B,V,k,H);I.setMaterial(k,be);let De=V.index,Ge=1;if(k.wireframe===!0){if(De=ne.getWireframeAttribute(V),De===void 0)return;Ge=2}const Ne=V.drawRange,Oe=V.attributes.position;let ot=Ne.start*Ge,Nt=(Ne.start+Ne.count)*Ge;ve!==null&&(ot=Math.max(ot,ve.start*Ge),Nt=Math.min(Nt,(ve.start+ve.count)*Ge)),De!==null?(ot=Math.max(ot,0),Nt=Math.min(Nt,De.count)):Oe!=null&&(ot=Math.max(ot,0),Nt=Math.min(Nt,Oe.count));const mt=Nt-ot;if(mt<0||mt===1/0)return;Be.setup(H,k,Ce,V,De);let an,nt=Ue;if(De!==null&&(an=te.get(De),nt=Te,nt.setIndex(an)),H.isMesh)k.wireframe===!0?(I.setLineWidth(k.wireframeLinewidth*Le()),nt.setMode(C.LINES)):nt.setMode(C.TRIANGLES);else if(H.isLine){let Ve=k.linewidth;Ve===void 0&&(Ve=1),I.setLineWidth(Ve*Le()),H.isLineSegments?nt.setMode(C.LINES):H.isLineLoop?nt.setMode(C.LINE_LOOP):nt.setMode(C.LINE_STRIP)}else H.isPoints?nt.setMode(C.POINTS):H.isSprite&&nt.setMode(C.TRIANGLES);if(H.isBatchedMesh)nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)nt.renderInstances(ot,mt,H.count);else if(V.isInstancedBufferGeometry){const Ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,as=Math.min(V.instanceCount,Ve);nt.renderInstances(ot,mt,as)}else nt.render(ot,mt)};function Ze(b,B,V){b.transparent===!0&&b.side===nn&&b.forceSinglePass===!1?(b.side=Dt,b.needsUpdate=!0,lr(b,B,V),b.side=Pn,b.needsUpdate=!0,lr(b,B,V),b.side=nn):lr(b,B,V)}this.compile=function(b,B,V=null){V===null&&(V=b),m=we.get(V),m.init(),x.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),b!==V&&b.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(v._useLegacyLights);const k=new Set;return b.traverse(function(H){const ve=H.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const Ce=ve[be];Ze(Ce,V,H),k.add(Ce)}else Ze(ve,V,H),k.add(ve)}),x.pop(),m=null,k},this.compileAsync=function(b,B,V=null){const k=this.compile(b,B,V);return new Promise(H=>{function ve(){if(k.forEach(function(be){Z.get(be).currentProgram.isReady()&&k.delete(be)}),k.size===0){H(b);return}setTimeout(ve,10)}j.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ke=null;function pt(b){Ke&&Ke(b)}function Tt(){At.stop()}function Qe(){At.start()}const At=new Pc;At.setAnimationLoop(pt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(b){Ke=b,He.setAnimationLoop(b),b===null?At.stop():At.start()},He.addEventListener("sessionstart",Tt),He.addEventListener("sessionend",Qe),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(B),B=He.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,B,w),m=we.get(b,x.length),m.init(),x.push(m),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(fe),ue=this.localClippingEnabled,re=Fe.init(this.clippingPlanes,ue),_=xe.get(b,d.length),_.init(),d.push(_),Qt(b,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,ee),this.info.render.frame++,re===!0&&Fe.beginShadows();const V=m.state.shadowsArray;if(se.render(V,b,B),re===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,b),m.setupLights(v._useLegacyLights),B.isArrayCamera){const k=B.cameras;for(let H=0,ve=k.length;H<ve;H++){const be=k[H];va(_,b,be,be.viewport)}}else va(_,b,B);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(v,b,B),Be.resetDefaultState(),G=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Qt(b,B,V,k){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){k&&Ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(fe);const be=ie.update(b),Ce=b.material;Ce.visible&&_.push(b,be,Ce,V,Ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const be=ie.update(b),Ce=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ie.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ie.copy(be.boundingSphere.center)),Ie.applyMatrix4(b.matrixWorld).applyMatrix4(fe)),Array.isArray(Ce)){const De=be.groups;for(let Ge=0,Ne=De.length;Ge<Ne;Ge++){const Oe=De[Ge],ot=Ce[Oe.materialIndex];ot&&ot.visible&&_.push(b,be,ot,V,Ie.z,Oe)}}else Ce.visible&&_.push(b,be,Ce,V,Ie.z,null)}}const ve=b.children;for(let be=0,Ce=ve.length;be<Ce;be++)Qt(ve[be],B,V,k)}function va(b,B,V,k){const H=b.opaque,ve=b.transmissive,be=b.transparent;m.setupLightsView(V),re===!0&&Fe.setGlobalState(v.clippingPlanes,V),ve.length>0&&al(H,ve,B,V),k&&I.viewport(T.copy(k)),H.length>0&&cr(H,B,V),ve.length>0&&cr(ve,B,V),be.length>0&&cr(be,B,V),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function al(b,B,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ve=oe.isWebGL2;ye===null&&(ye=new Yn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?Qi:Rn,minFilter:Ki,samples:ve?4:0})),v.getDrawingBufferSize(Ae),ve?ye.setSize(Ae.x,Ae.y):ye.setSize(Wr(Ae.x),Wr(Ae.y));const be=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(Q),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=wn,cr(b,V,k),E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye);let De=!1;for(let Ge=0,Ne=B.length;Ge<Ne;Ge++){const Oe=B[Ge],ot=Oe.object,Nt=Oe.geometry,mt=Oe.material,an=Oe.group;if(mt.side===nn&&ot.layers.test(k.layers)){const nt=mt.side;mt.side=Dt,mt.needsUpdate=!0,xa(ot,V,k,Nt,mt,an),mt.side=nt,mt.needsUpdate=!0,De=!0}}De===!0&&(E.updateMultisampleRenderTarget(ye),E.updateRenderTargetMipmap(ye)),v.setRenderTarget(be),v.setClearColor(Q,P),v.toneMapping=Ce}function cr(b,B,V){const k=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ve=b.length;H<ve;H++){const be=b[H],Ce=be.object,De=be.geometry,Ge=k===null?be.material:k,Ne=be.group;Ce.layers.test(V.layers)&&xa(Ce,B,V,De,Ge,Ne)}}function xa(b,B,V,k,H,ve){b.onBeforeRender(v,B,V,k,H,ve),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(v,B,V,k,b,ve),H.transparent===!0&&H.side===nn&&H.forceSinglePass===!1?(H.side=Dt,H.needsUpdate=!0,v.renderBufferDirect(V,B,k,H,b,ve),H.side=Pn,H.needsUpdate=!0,v.renderBufferDirect(V,B,k,H,b,ve),H.side=nn):v.renderBufferDirect(V,B,k,H,b,ve),b.onAfterRender(v,B,V,k,H,ve)}function lr(b,B,V){B.isScene!==!0&&(B=Me);const k=Z.get(b),H=m.state.lights,ve=m.state.shadowsArray,be=H.state.version,Ce=Ee.getParameters(b,H.state,ve,B,V),De=Ee.getProgramCacheKey(Ce);let Ge=k.programs;k.environment=b.isMeshStandardMaterial?B.environment:null,k.fog=B.fog,k.envMap=(b.isMeshStandardMaterial?N:M).get(b.envMap||k.environment),Ge===void 0&&(b.addEventListener("dispose",ge),Ge=new Map,k.programs=Ge);let Ne=Ge.get(De);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===be)return Sa(b,Ce),Ne}else Ce.uniforms=Ee.getUniforms(b),b.onBuild(V,Ce,v),b.onBeforeCompile(Ce,v),Ne=Ee.acquireProgram(Ce,De),Ge.set(De,Ne),k.uniforms=Ce.uniforms;const Oe=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=Fe.uniform),Sa(b,Ce),k.needsLights=ll(b),k.lightsStateVersion=be,k.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),k.currentProgram=Ne,k.uniformsList=null,Ne}function Ma(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Br.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Sa(b,B){const V=Z.get(b);V.outputColorSpace=B.outputColorSpace,V.batching=B.batching,V.instancing=B.instancing,V.instancingColor=B.instancingColor,V.skinning=B.skinning,V.morphTargets=B.morphTargets,V.morphNormals=B.morphNormals,V.morphColors=B.morphColors,V.morphTargetsCount=B.morphTargetsCount,V.numClippingPlanes=B.numClippingPlanes,V.numIntersection=B.numClipIntersection,V.vertexAlphas=B.vertexAlphas,V.vertexTangents=B.vertexTangents,V.toneMapping=B.toneMapping}function ol(b,B,V,k,H){B.isScene!==!0&&(B=Me),E.resetTextureUnits();const ve=B.fog,be=k.isMeshStandardMaterial?B.environment:null,Ce=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:mn,De=(k.isMeshStandardMaterial?N:M).get(k.envMap||be),Ge=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Oe=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,Nt=!!V.morphAttributes.color;let mt=wn;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=v.toneMapping);const an=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,nt=an!==void 0?an.length:0,Ve=Z.get(k),as=m.state.lights;if(re===!0&&(ue===!0||b!==S)){const Ht=b===S&&k.id===G;Fe.setState(k,b,Ht)}let at=!1;k.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==as.state.version||Ve.outputColorSpace!==Ce||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||Ve.envMap!==De||k.fog===!0&&Ve.fog!==ve||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Fe.numPlanes||Ve.numIntersection!==Fe.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==Ne||Ve.morphTargets!==Oe||Ve.morphNormals!==ot||Ve.morphColors!==Nt||Ve.toneMapping!==mt||oe.isWebGL2===!0&&Ve.morphTargetsCount!==nt)&&(at=!0):(at=!0,Ve.__version=k.version);let In=Ve.currentProgram;at===!0&&(In=lr(k,B,H));let ya=!1,Bi=!1,os=!1;const St=In.getUniforms(),Un=Ve.uniforms;if(I.useProgram(In.program)&&(ya=!0,Bi=!0,os=!0),k.id!==G&&(G=k.id,Bi=!0),ya||S!==b){St.setValue(C,"projectionMatrix",b.projectionMatrix),St.setValue(C,"viewMatrix",b.matrixWorldInverse);const Ht=St.map.cameraPosition;Ht!==void 0&&Ht.setValue(C,Ie.setFromMatrixPosition(b.matrixWorld)),oe.logarithmicDepthBuffer&&St.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Bi=!0,os=!0)}if(H.isSkinnedMesh){St.setOptional(C,H,"bindMatrix"),St.setOptional(C,H,"bindMatrixInverse");const Ht=H.skeleton;Ht&&(oe.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),St.setValue(C,"boneTexture",Ht.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(St.setOptional(C,H,"batchingTexture"),St.setValue(C,"batchingTexture",H._matricesTexture,E));const cs=V.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0&&oe.isWebGL2===!0)&&Xe.update(H,V,In),(Bi||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,St.setValue(C,"receiveShadow",H.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Un.envMap.value=De,Un.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Bi&&(St.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&cl(Un,os),ve&&k.fog===!0&&pe.refreshFogUniforms(Un,ve),pe.refreshMaterialUniforms(Un,k,X,F,ye),Br.upload(C,Ma(Ve),Un,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Br.upload(C,Ma(Ve),Un,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(C,"center",H.center),St.setValue(C,"modelViewMatrix",H.modelViewMatrix),St.setValue(C,"normalMatrix",H.normalMatrix),St.setValue(C,"modelMatrix",H.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ht=k.uniformsGroups;for(let ls=0,ul=Ht.length;ls<ul;ls++)if(oe.isWebGL2){const Ea=Ht[ls];je.update(Ea,In),je.bind(Ea,In)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return In}function cl(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function ll(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,B,V){Z.get(b.texture).__webglTexture=B,Z.get(b.depthTexture).__webglTexture=V;const k=Z.get(b);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const V=Z.get(b);V.__webglFramebuffer=B,V.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,V=0){w=b,R=B,A=V;let k=!0,H=null,ve=!1,be=!1;if(b){const De=Z.get(b);De.__useDefaultFramebuffer!==void 0?(I.bindFramebuffer(C.FRAMEBUFFER,null),k=!1):De.__webglFramebuffer===void 0?E.setupRenderTarget(b):De.__hasExternalTextures&&E.rebindTextures(b,Z.get(b.texture).__webglTexture,Z.get(b.depthTexture).__webglTexture);const Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(be=!0);const Ne=Z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?H=Ne[B][V]:H=Ne[B],ve=!0):oe.isWebGL2&&b.samples>0&&E.useMultisampledRTT(b)===!1?H=Z.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[V]:H=Ne,T.copy(b.viewport),z.copy(b.scissor),W=b.scissorTest}else T.copy(K).multiplyScalar(X).floor(),z.copy(J).multiplyScalar(X).floor(),W=ae;if(I.bindFramebuffer(C.FRAMEBUFFER,H)&&oe.drawBuffers&&k&&I.drawBuffers(b,H),I.viewport(T),I.scissor(z),I.setScissorTest(W),ve){const De=Z.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,V)}else if(be){const De=Z.get(b.texture),Ge=B||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,De.__webglTexture,V||0,Ge)}G=-1},this.readRenderTargetPixels=function(b,B,V,k,H,ve,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){I.bindFramebuffer(C.FRAMEBUFFER,Ce);try{const De=b.texture,Ge=De.format,Ne=De.type;if(Ge!==Zt&&Se.convert(Ge)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ne===Qi&&(j.has("EXT_color_buffer_half_float")||oe.isWebGL2&&j.has("EXT_color_buffer_float"));if(Ne!==Rn&&Se.convert(Ne)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===bn&&(oe.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-k&&V>=0&&V<=b.height-H&&C.readPixels(B,V,k,H,Se.convert(Ge),Se.convert(Ne),ve)}finally{const De=w!==null?Z.get(w).__webglFramebuffer:null;I.bindFramebuffer(C.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(b,B,V=0){const k=Math.pow(2,-V),H=Math.floor(B.image.width*k),ve=Math.floor(B.image.height*k);E.setTexture2D(B,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,b.x,b.y,H,ve),I.unbindTexture()},this.copyTextureToTexture=function(b,B,V,k=0){const H=B.image.width,ve=B.image.height,be=Se.convert(V.format),Ce=Se.convert(V.type);E.setTexture2D(V,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,V.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,V.unpackAlignment),B.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,k,b.x,b.y,H,ve,be,Ce,B.image.data):B.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,k,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,be,B.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,k,b.x,b.y,be,Ce,B.image),k===0&&V.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),I.unbindTexture()},this.copyTextureToTexture3D=function(b,B,V,k,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=b.max.x-b.min.x+1,be=b.max.y-b.min.y+1,Ce=b.max.z-b.min.z+1,De=Se.convert(k.format),Ge=Se.convert(k.type);let Ne;if(k.isData3DTexture)E.setTexture3D(k,0),Ne=C.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)E.setTexture2DArray(k,0),Ne=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const Oe=C.getParameter(C.UNPACK_ROW_LENGTH),ot=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Nt=C.getParameter(C.UNPACK_SKIP_PIXELS),mt=C.getParameter(C.UNPACK_SKIP_ROWS),an=C.getParameter(C.UNPACK_SKIP_IMAGES),nt=V.isCompressedTexture?V.mipmaps[H]:V.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,b.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,b.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?C.texSubImage3D(Ne,H,B.x,B.y,B.z,ve,be,Ce,De,Ge,nt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Ne,H,B.x,B.y,B.z,ve,be,Ce,De,nt.data)):C.texSubImage3D(Ne,H,B.x,B.y,B.z,ve,be,Ce,De,Ge,nt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Oe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ot),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nt),C.pixelStorei(C.UNPACK_SKIP_ROWS,mt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,an),H===0&&k.generateMipmaps&&C.generateMipmap(Ne),I.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),I.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,I.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===aa?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===jr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?qn:gc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qn?vt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Lm extends Bc{}Lm.prototype.isWebGL1Renderer=!0;class ua extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Wo extends bt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new rt,Xo=new rt,Dr=[],qo=new Dn,Dm=new rt,ki=new _e,Wi=new ar;class Im extends _e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Dm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),qo.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(qo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),Wi.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Wi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wi.copy(this.boundingSphere),Wi.applyMatrix4(n),e.ray.intersectsSphere(Wi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,gi),Xo.multiplyMatrices(n,gi),ki.matrixWorld=Xo,ki.raycast(e,Dr);for(let o=0,a=Dr.length;o<a;o++){const c=Dr[o];c.instanceId=s,c.object=this,t.push(c)}Dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends Ut{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],p=n[r+1]-u,h=(o-u)/p;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ce:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],o=[],a=new L,c=new rt;for(let h=0;h<=e;h++){const g=h/e;r[h]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ht(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(ht(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ha extends Kt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new ce,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,h=l-this.aY;c=p*u-h*f+this.aX,l=p*f+h*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Um extends ha{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let p=(o-s)/l-(a-s)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+f)+(c-a)/f;p*=u,h*=u,r(o,a,p,h)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Ir=new L,Gs=new da,Hs=new da,Vs=new da;class Qr extends Kt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Ir.subVectors(r[0],r[1]).add(r[0]),l=Ir);const f=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ir.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),h),_=Math.pow(f.distanceToSquared(p),h),m=Math.pow(p.distanceToSquared(u),h);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Gs.initNonuniformCatmullRom(l.x,f.x,p.x,u.x,g,_,m),Hs.initNonuniformCatmullRom(l.y,f.y,p.y,u.y,g,_,m),Vs.initNonuniformCatmullRom(l.z,f.z,p.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Gs.initCatmullRom(l.x,f.x,p.x,u.x,this.tension),Hs.initCatmullRom(l.y,f.y,p.y,u.y,this.tension),Vs.initCatmullRom(l.z,f.z,p.z,u.z,this.tension));return n.set(Gs.calc(c),Hs.calc(c),Vs.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yo(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function Nm(i,e){const t=1-i;return t*t*e}function Fm(i,e){return 2*(1-i)*i*e}function Om(i,e){return i*i*e}function ji(i,e,t,n){return Nm(i,e)+Fm(i,t)+Om(i,n)}function Bm(i,e){const t=1-i;return t*t*t*e}function zm(i,e){const t=1-i;return 3*t*t*i*e}function Gm(i,e){return 3*(1-i)*i*i*e}function Hm(i,e){return i*i*i*e}function Ji(i,e,t,n,r){return Bm(i,e)+zm(i,t)+Gm(i,n)+Hm(i,r)}class zc extends Kt{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ji(e,r.x,s.x,o.x,a.x),Ji(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vm extends Kt{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ji(e,r.x,s.x,o.x,a.x),Ji(e,r.y,s.y,o.y,a.y),Ji(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gc extends Kt{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class km extends Kt{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hc extends Kt{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ji(e,r.x,s.x,o.x),ji(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vc extends Kt{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(ji(e,r.x,s.x,o.x),ji(e,r.y,s.y,o.y),ji(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kc extends Kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(Yo(a,c.x,l.x,u.x,f.x),Yo(a,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ce().fromArray(r))}return this}}var qr=Object.freeze({__proto__:null,ArcCurve:Um,CatmullRomCurve3:Qr,CubicBezierCurve:zc,CubicBezierCurve3:Vm,EllipseCurve:ha,LineCurve:Gc,LineCurve3:km,QuadraticBezierCurve:Hc,QuadraticBezierCurve3:Vc,SplineCurve:kc});class Wm extends Kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new qr[r.type]().fromJSON(r))}return this}}class ta extends Wm{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Gc(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Hc(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new zc(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){const l=new ha(e,t,n,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jn extends It{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ht(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/t,f=new L,p=new ce,h=new L,g=new L,_=new L;let m=0,d=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,h.x=d*1,h.y=-m,h.z=d*0,_.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,h.x=d*1,h.y=-m,h.z=d*0,g.copy(h),h.x+=_.x,h.y+=_.y,h.z+=_.z,h.normalize(),c.push(h.x,h.y,h.z),_.copy(g)}for(let x=0;x<=t;x++){const v=n+x*u*r,y=Math.sin(v),R=Math.cos(v);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*y,f.y=e[A].y,f.z=e[A].x*R,o.push(f.x,f.y,f.z),p.x=x/t,p.y=A/(e.length-1),a.push(p.x,p.y);const w=c[3*A+0]*y,G=c[3*A+1],S=c[3*A+0]*R;l.push(w,G,S)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,R=y,A=y+e.length,w=y+e.length+1,G=y+1;s.push(R,A,G),s.push(w,G,A)}this.setIndex(s),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.points,e.segments,e.phiStart,e.phiLength)}}class or extends Jn{constructor(e=1,t=1,n=4,r=8){const s=new ta;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new or(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ui extends It{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new L,u=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){const h=n+f/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rn extends It{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],p=[],h=[];let g=0;const _=[],m=n/2;let d=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(h,2));function x(){const y=new L,R=new L;let A=0;const w=(t-e)/n;for(let G=0;G<=s;G++){const S=[],T=G/s,z=T*(t-e)+e;for(let W=0;W<=r;W++){const Q=W/r,P=Q*c+a,O=Math.sin(P),F=Math.cos(P);R.x=z*O,R.y=-T*n+m,R.z=z*F,f.push(R.x,R.y,R.z),y.set(O,w,F).normalize(),p.push(y.x,y.y,y.z),h.push(Q,1-T),S.push(g++)}_.push(S)}for(let G=0;G<r;G++)for(let S=0;S<s;S++){const T=_[S][G],z=_[S+1][G],W=_[S+1][G+1],Q=_[S][G+1];u.push(T,z,Q),u.push(z,W,Q),A+=6}l.addGroup(d,A,0),d+=A}function v(y){const R=g,A=new ce,w=new L;let G=0;const S=y===!0?e:t,T=y===!0?1:-1;for(let W=1;W<=r;W++)f.push(0,m*T,0),p.push(0,T,0),h.push(.5,.5),g++;const z=g;for(let W=0;W<=r;W++){const P=W/r*c+a,O=Math.cos(P),F=Math.sin(P);w.x=S*F,w.y=m*T,w.z=S*O,f.push(w.x,w.y,w.z),p.push(0,T,0),A.x=O*.5+.5,A.y=F*.5*T+.5,h.push(A.x,A.y),g++}for(let W=0;W<r;W++){const Q=R+W,P=z+W;y===!0?u.push(P,P+1,Q):u.push(P+1,P,Q),G+=3}l.addGroup(d,G,y===!0?1:2),d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fa extends ta{constructor(e){super(e),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ta().fromJSON(r))}return this}}const Xm={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Wc(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,f,p,h;if(n&&(s=Jm(i,e,s,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<r;g+=t)f=i[g],p=i[g+1],f<a&&(a=f),p<c&&(c=p),f>l&&(l=f),p>u&&(u=p);h=Math.max(l-a,u-c),h=h!==0?32767/h:0}return tr(s,o,t,a,c,h,0),o}};function Wc(i,e,t,n,r){let s,o;if(r===o0(i,e,t,n)>0)for(s=e;s<t;s+=n)o=$o(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=$o(s,i[s],i[s+1],o);return o&&es(o,o.next)&&(ir(o),o=o.next),o}function Zn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(es(t,t.next)||it(t.prev,t,t.next)===0)){if(ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function tr(i,e,t,n,r,s,o){if(!i)return;!o&&s&&t0(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Ym(i,n,r,s):qm(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ir(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=$m(Zn(i),e,t),tr(i,e,t,n,r,s,2)):o===2&&jm(i,e,t,n,r,s):tr(Zn(i),e,t,n,r,s,1);break}}}function qm(i){const e=i.prev,t=i,n=i.next;if(it(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=r<s?r<o?r:o:s<o?s:o,f=a<c?a<l?a:l:c<l?c:l,p=r>s?r>o?r:o:s>o?s:o,h=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=f&&g.y<=h&&Si(r,a,s,c,o,l,g.x,g.y)&&it(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ym(i,e,t,n){const r=i.prev,s=i,o=i.next;if(it(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,f=s.y,p=o.y,h=a<c?a<l?a:l:c<l?c:l,g=u<f?u<p?u:p:f<p?f:p,_=a>c?a>l?a:l:c>l?c:l,m=u>f?u>p?u:p:f>p?f:p,d=na(h,g,e,t,n),x=na(_,m,e,t,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=d&&y&&y.z<=x;){if(v.x>=h&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Si(a,u,c,f,l,p,v.x,v.y)&&it(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=h&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Si(a,u,c,f,l,p,y.x,y.y)&&it(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=d;){if(v.x>=h&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Si(a,u,c,f,l,p,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=h&&y.x<=_&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Si(a,u,c,f,l,p,y.x,y.y)&&it(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function $m(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!es(r,s)&&Xc(r,n,n.next,s)&&nr(r,s)&&nr(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ir(n),ir(n.next),n=i=s),n=n.next}while(n!==i);return Zn(n)}function jm(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&r0(o,a)){let c=qc(o,a);o=Zn(o,o.next),c=Zn(c,c.next),tr(o,e,t,n,r,s,0),tr(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Jm(i,e,t,n){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=Wc(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(i0(l));for(r.sort(Zm),s=0;s<r.length;s++)t=Km(r[s],t);return t}function Zm(i,e){return i.x-e.x}function Km(i,e){const t=Qm(i,e);if(!t)return e;const n=qc(t,i);return Zn(n,n.next),Zn(t,t.next)}function Qm(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=s&&p>n&&(n=p,r=t.x<t.next.x?t:t.next,p===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,c=r.x,l=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&Si(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),nr(t,i)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&e0(r,t)))&&(r=t,u=f)),t=t.next;while(t!==a);return r}function e0(i,e){return it(i.prev,i,e.prev)<0&&it(e.next,i,i.next)<0}function t0(i,e,t,n){let r=i;do r.z===0&&(r.z=na(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,n0(r)}function n0(i){let e,t,n,r,s,o,a,c,l=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(o>1);return i}function na(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function i0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Si(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function r0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!s0(i,e)&&(nr(i,e)&&nr(e,i)&&a0(i,e)&&(it(i.prev,i,e.prev)||it(i,e.prev,e))||es(i,e)&&it(i.prev,i,i.next)>0&&it(e.prev,e,e.next)>0)}function it(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function es(i,e){return i.x===e.x&&i.y===e.y}function Xc(i,e,t,n){const r=Nr(it(i,e,t)),s=Nr(it(i,e,n)),o=Nr(it(t,n,i)),a=Nr(it(t,n,e));return!!(r!==s&&o!==a||r===0&&Ur(i,t,e)||s===0&&Ur(i,n,e)||o===0&&Ur(t,i,n)||a===0&&Ur(t,e,n))}function Ur(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Nr(i){return i>0?1:i<0?-1:0}function s0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function nr(i,e){return it(i.prev,i,i.next)<0?it(i,e,i.next)>=0&&it(i,i.prev,e)>=0:it(i,e,i.prev)<0||it(i,i.next,e)<0}function a0(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qc(i,e){const t=new ia(i.i,i.x,i.y),n=new ia(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function $o(i,e,t,n){const r=new ia(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ia(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function o0(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Cn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Cn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];jo(e),Jo(n,e);let o=e.length;t.forEach(jo);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Jo(n,t[c]);const a=Xm.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function jo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Jo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ni extends It{constructor(e=new fa([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new $e(r,3)),this.setAttribute("uv",new $e(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:h-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:c0;let v,y=!1,R,A,w,G;d&&(v=d.getSpacedPoints(u),y=!0,p=!1,R=d.computeFrenetFrames(u,!1),A=new L,w=new L,G=new L),p||(m=0,h=0,g=0,_=0);const S=a.extractPoints(l);let T=S.shape;const z=S.holes;if(!Cn.isClockWise(T)){T=T.reverse();for(let C=0,le=z.length;C<le;C++){const j=z[C];Cn.isClockWise(j)&&(z[C]=j.reverse())}}const Q=Cn.triangulateShape(T,z),P=T;for(let C=0,le=z.length;C<le;C++){const j=z[C];T=T.concat(j)}function O(C,le,j){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(le,j)}const F=T.length,X=Q.length;function $(C,le,j){let oe,I,q;const Z=C.x-le.x,E=C.y-le.y,M=j.x-C.x,N=j.y-C.y,te=Z*Z+E*E,ne=Z*N-E*M;if(Math.abs(ne)>Number.EPSILON){const ie=Math.sqrt(te),Ee=Math.sqrt(M*M+N*N),pe=le.x-E/ie,xe=le.y+Z/ie,we=j.x-N/Ee,Fe=j.y+M/Ee,se=((we-pe)*N-(Fe-xe)*M)/(Z*N-E*M);oe=pe+Z*se-C.x,I=xe+E*se-C.y;const Ye=oe*oe+I*I;if(Ye<=2)return new ce(oe,I);q=Math.sqrt(Ye/2)}else{let ie=!1;Z>Number.EPSILON?M>Number.EPSILON&&(ie=!0):Z<-Number.EPSILON?M<-Number.EPSILON&&(ie=!0):Math.sign(E)===Math.sign(N)&&(ie=!0),ie?(oe=-E,I=Z,q=Math.sqrt(te)):(oe=Z,I=E,q=Math.sqrt(te/2))}return new ce(oe/q,I/q)}const ee=[];for(let C=0,le=P.length,j=le-1,oe=C+1;C<le;C++,j++,oe++)j===le&&(j=0),oe===le&&(oe=0),ee[C]=$(P[C],P[j],P[oe]);const K=[];let J,ae=ee.concat();for(let C=0,le=z.length;C<le;C++){const j=z[C];J=[];for(let oe=0,I=j.length,q=I-1,Z=oe+1;oe<I;oe++,q++,Z++)q===I&&(q=0),Z===I&&(Z=0),J[oe]=$(j[oe],j[q],j[Z]);K.push(J),ae=ae.concat(J)}for(let C=0;C<m;C++){const le=C/m,j=h*Math.cos(le*Math.PI/2),oe=g*Math.sin(le*Math.PI/2)+_;for(let I=0,q=P.length;I<q;I++){const Z=O(P[I],ee[I],oe);fe(Z.x,Z.y,-j)}for(let I=0,q=z.length;I<q;I++){const Z=z[I];J=K[I];for(let E=0,M=Z.length;E<M;E++){const N=O(Z[E],J[E],oe);fe(N.x,N.y,-j)}}}const Y=g+_;for(let C=0;C<F;C++){const le=p?O(T[C],ae[C],Y):T[C];y?(w.copy(R.normals[0]).multiplyScalar(le.x),A.copy(R.binormals[0]).multiplyScalar(le.y),G.copy(v[0]).add(w).add(A),fe(G.x,G.y,G.z)):fe(le.x,le.y,0)}for(let C=1;C<=u;C++)for(let le=0;le<F;le++){const j=p?O(T[le],ae[le],Y):T[le];y?(w.copy(R.normals[C]).multiplyScalar(j.x),A.copy(R.binormals[C]).multiplyScalar(j.y),G.copy(v[C]).add(w).add(A),fe(G.x,G.y,G.z)):fe(j.x,j.y,f/u*C)}for(let C=m-1;C>=0;C--){const le=C/m,j=h*Math.cos(le*Math.PI/2),oe=g*Math.sin(le*Math.PI/2)+_;for(let I=0,q=P.length;I<q;I++){const Z=O(P[I],ee[I],oe);fe(Z.x,Z.y,f+j)}for(let I=0,q=z.length;I<q;I++){const Z=z[I];J=K[I];for(let E=0,M=Z.length;E<M;E++){const N=O(Z[E],J[E],oe);y?fe(N.x,N.y+v[u-1].y,v[u-1].x+j):fe(N.x,N.y,f+j)}}}re(),ue();function re(){const C=r.length/3;if(p){let le=0,j=F*le;for(let oe=0;oe<X;oe++){const I=Q[oe];Ae(I[2]+j,I[1]+j,I[0]+j)}le=u+m*2,j=F*le;for(let oe=0;oe<X;oe++){const I=Q[oe];Ae(I[0]+j,I[1]+j,I[2]+j)}}else{for(let le=0;le<X;le++){const j=Q[le];Ae(j[2],j[1],j[0])}for(let le=0;le<X;le++){const j=Q[le];Ae(j[0]+F*u,j[1]+F*u,j[2]+F*u)}}n.addGroup(C,r.length/3-C,0)}function ue(){const C=r.length/3;let le=0;ye(P,le),le+=P.length;for(let j=0,oe=z.length;j<oe;j++){const I=z[j];ye(I,le),le+=I.length}n.addGroup(C,r.length/3-C,1)}function ye(C,le){let j=C.length;for(;--j>=0;){const oe=j;let I=j-1;I<0&&(I=C.length-1);for(let q=0,Z=u+m*2;q<Z;q++){const E=F*q,M=F*(q+1),N=le+oe+E,te=le+I+E,ne=le+I+M,ie=le+oe+M;Ie(N,te,ne,ie)}}}function fe(C,le,j){c.push(C),c.push(le),c.push(j)}function Ae(C,le,j){Me(C),Me(le),Me(j);const oe=r.length/3,I=x.generateTopUV(n,r,oe-3,oe-2,oe-1);Le(I[0]),Le(I[1]),Le(I[2])}function Ie(C,le,j,oe){Me(C),Me(le),Me(oe),Me(le),Me(j),Me(oe);const I=r.length/3,q=x.generateSideWallUV(n,r,I-6,I-3,I-2,I-1);Le(q[0]),Le(q[1]),Le(q[3]),Le(q[1]),Le(q[2]),Le(q[3])}function Me(C){r.push(c[C*3+0]),r.push(c[C*3+1]),r.push(c[C*3+2])}function Le(C){s.push(C.x),s.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return l0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new qr[r.type]().fromJSON(r)),new Ni(n,e.options)}}const c0={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new ce(s,o),new ce(a,c),new ce(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],f=e[n*3+2],p=e[r*3],h=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-f),new ce(p,1-g),new ce(_,1-d)]:[new ce(a,1-c),new ce(u,1-f),new ce(h,1-g),new ce(m,1-d)]}};function l0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pa extends It{constructor(e=new fa([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(s,3)),this.setAttribute("uv",new $e(o,2));function l(u){const f=r.length/3,p=u.extractPoints(t);let h=p.shape;const g=p.holes;Cn.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,d=g.length;m<d;m++){const x=g[m];Cn.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=Cn.triangulateShape(h,g);for(let m=0,d=g.length;m<d;m++){const x=g[m];h=h.concat(x)}for(let m=0,d=h.length;m<d;m++){const x=h[m];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,d=_.length;m<d;m++){const x=_[m],v=x[0]+f,y=x[1]+f,R=x[2]+f;n.push(v,y,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return u0(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new pa(n,e.curveSegments)}}function u0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Pi extends It{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new L,p=new L,h=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const x=[],v=d/n;let y=0;d===0&&o===0?y=.5/t:d===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const A=R/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),m.push(A+y,1-v),x.push(l++)}u.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const v=u[d][x+1],y=u[d][x],R=u[d+1][x],A=u[d+1][x+1];(d!==0||o>0)&&h.push(v,y,A),(d!==n-1||c<Math.PI)&&h.push(y,R,A)}this.setIndex(h),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ts extends It{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new L,f=new L,p=new L;for(let h=0;h<=n;h++)for(let g=0;g<=r;g++){const _=g/r*s,m=h/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),p.subVectors(f,u).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=r;g++){const _=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,d=(r+1)*(h-1)+g,x=(r+1)*h+g;o.push(_,m,x),o.push(m,d,x)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ns extends It{constructor(e=new Vc(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new ce;let u=new L;const f=[],p=[],h=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(h,2));function _(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),x(),d()}function m(v){u=e.getPointAt(v/t,u);const y=o.normals[v],R=o.binormals[v];for(let A=0;A<=r;A++){const w=A/r*Math.PI*2,G=Math.sin(w),S=-Math.cos(w);c.x=S*y.x+G*R.x,c.y=S*y.y+G*R.y,c.z=S*y.z+G*R.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,f.push(a.x,a.y,a.z)}}function d(){for(let v=1;v<=t;v++)for(let y=1;y<=r;y++){const R=(r+1)*(v-1)+(y-1),A=(r+1)*v+(y-1),w=(r+1)*v+y,G=(r+1)*(v-1)+y;g.push(R,A,G),g.push(A,w,G)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=r;y++)l.x=v/t,l.y=y/r,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ns(new qr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class h0 extends Di{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class d0 extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class et extends d0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Yc extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class f0 extends Yc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ks=new rt,Zo=new L,Ko=new L;class p0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zo),Ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ko),t.updateMatrixWorld(),ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ks),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class m0 extends p0{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class g0 extends Yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new m0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);function _0(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),c={},l={},u=[],f=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let x=0,v=a.length;x<v;x++){const y=a[x],R=i.attributes[y];c[y]=new bt(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const A=i.morphAttributes[y];A&&(l[y]=new bt(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized))}const h=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=h*_;for(let x=0;x<s;x++){const v=n?n.getX(x):x;let y="";for(let R=0,A=a.length;R<A;R++){const w=a[R],G=i.getAttribute(w),S=G.itemSize;for(let T=0;T<S;T++)y+=`${~~(G[f[T]](v)*_+m)},`}if(y in t)u.push(t[y]);else{for(let R=0,A=a.length;R<A;R++){const w=a[R],G=i.getAttribute(w),S=i.morphAttributes[w],T=G.itemSize,z=c[w],W=l[w];for(let Q=0;Q<T;Q++){const P=f[Q],O=p[Q];if(z[O](o,G[P](v)),S)for(let F=0,X=S.length;F<X;F++)W[F][O](o,S[F][P](v))}}t[y]=o,u.push(o),o++}}const d=i.clone();for(const x in i.attributes){const v=c[x];if(d.setAttribute(x,new bt(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),x in l)for(let y=0;y<l[x].length;y++){const R=l[x][y];d.morphAttributes[x][y]=new bt(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return d.setIndex(u),d}function Fi(i,e,t,n=.3){const r=new fa,s=-i/2,o=-e/2;return t=Math.min(t,i/2,e/2),r.moveTo(s+t,o),r.lineTo(s+i-t,o),r.bezierCurveTo(s+i-t*n,o,s+i,o+t*n,s+i,o+t),r.lineTo(s+i,o+e-t),r.bezierCurveTo(s+i,o+e-t*n,s+i-t*n,o+e,s+i-t,o+e),r.lineTo(s+t,o+e),r.bezierCurveTo(s+t*n,o+e,s,o+e-t*n,s,o+e-t),r.lineTo(s,o+t),r.bezierCurveTo(s,o+t*n,s+t*n,o,s+t,o),r}function v0(i,e,t){const n=i.attributes.position,r=new Float32Array(n.count*2);for(let s=0;s<n.count;s++)r[s*2]=n.getX(s)/e+.5,r[s*2+1]=n.getY(s)/t+.5;return i.setAttribute("uv",new bt(r,2)),i}function $c(i,e=!1){e||i.deleteAttribute("uv"),i.deleteAttribute("normal");const t=_0(i,1e-4);return t.computeVertexNormals(),t}function Gt(i,e,t,n,{bevel:r,bevelSize:s,segments:o=8,curve:a=36,k:c=.3}={}){const l=r??Math.min(t*.3,.25),u=s??l,f=Math.max(.001,t-2*l),p=new Ni(Fi(i-2*u,e-2*u,Math.max(.01,n-u),c),{depth:f,bevelEnabled:!0,bevelThickness:l,bevelSize:u,bevelSegments:o,curveSegments:a});return p.translate(0,0,-f/2),$c(p)}function Kn(i,e,t,{thick:n=.02,bevel:r=.03,k:s=.3}={}){const o=new Ni(Fi(i-2*r,e-2*r,Math.max(.01,t-r),s),{depth:n,bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:4,curveSegments:36});return v0(o,i,e),$c(o,!0)}function Ws(i,e){const t=i.attributes.position;for(let n=0;n<t.count;n++){const r=t.getX(n),s=t.getZ(n),o=r/e,a=e+s;t.setXYZ(n,Math.sin(o)*a,t.getY(n),Math.cos(o)*a-e)}return i.computeVertexNormals(),i}const qe={metal:(i,e=.32,t={})=>new et({color:i,metalness:1,roughness:e,clearcoat:.15,clearcoatRoughness:.3,...t}),plastic:(i,e=.3,t={})=>new et({color:i,metalness:0,roughness:e,clearcoat:.6,clearcoatRoughness:.2,...t}),glassBlack:(i={})=>new et({color:131587,roughness:.05,clearcoat:1,clearcoatRoughness:.03,...i}),matteBlack:()=>new et({color:394759,roughness:.6}),screen:i=>new et({color:0,emissive:16777215,emissiveMap:i,emissiveIntensity:1.05,roughness:.06,clearcoat:.6,clearcoatRoughness:.03,envMapIntensity:.45})};function fn(i,e,t,n,{axis:r="y",squash:s=.45}={}){const o=new _e(new or(t,e,6,24),i);return o.scale.set(s,1,1),r==="x"&&(o.rotation.z=Math.PI/2),o.position.set(...n),o}function Zi(i,e,t,{facing:n="front",seg:r=48}={}){const s=new _e(new Ui(i,r),e);return n==="back"&&(s.rotation.y=Math.PI),n==="up"&&(s.rotation.x=-Math.PI/2),s.position.set(...t),s}function _n(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Oi(i,e){const t=new Kr(i);return t.colorSpace=vt,t.anisotropy=e.capabilities.getMaxAnisotropy(),t.needsUpdate=!0,t}function Bt(i,e,t,n,r,s){i.beginPath(),i.moveTo(e+s,t),i.arcTo(e+n,t,e+n,t+r,s),i.arcTo(e+n,t+r,e,t+r,s),i.arcTo(e,t+r,e,t,s),i.arcTo(e,t,e+n,t,s),i.closePath()}function jc(i){const[t,n]=_n(512,512),r=512/2;n.fillStyle="#020203",n.fillRect(0,0,512,512);const s=n.createRadialGradient(r,r,512*.04,r,r,512*.5);s.addColorStop(0,"#000000"),s.addColorStop(.25,"#0a0e1d"),s.addColorStop(.55,"#141a33"),s.addColorStop(.8,"#07080d"),s.addColorStop(.93,"#18181c"),s.addColorStop(1,"#050505"),n.fillStyle=s,n.beginPath(),n.arc(r,r,r,0,Math.PI*2),n.fill();const o=[[.9,"rgba(120,120,130,0.35)",3],[.78,"rgba(70,90,170,0.35)",4],[.66,"rgba(140,90,200,0.28)",3],[.52,"rgba(60,110,190,0.35)",5],[.4,"rgba(110,80,170,0.3)",3],[.28,"rgba(50,70,140,0.45)",4]];for(const[a,c,l]of o)n.beginPath(),n.arc(r,r,a*r,0,Math.PI*2),n.strokeStyle=c,n.lineWidth=l,n.stroke();return n.fillStyle="#000",n.beginPath(),n.arc(r,r,.17*r,0,Math.PI*2),n.fill(),n.lineCap="round",n.strokeStyle="rgba(190,200,255,0.22)",n.lineWidth=10,n.beginPath(),n.arc(r,r,.6*r,-2.5,-1.5),n.stroke(),n.strokeStyle="rgba(200,150,255,0.18)",n.lineWidth=6,n.beginPath(),n.arc(r,r,.36*r,.6,1.4),n.stroke(),Oi(t,i)}function Jc(i){const[t,n]=_n(256,256),r=256/2,s=n.createRadialGradient(r,r,0,r,r,r);s.addColorStop(0,"#efe9d6"),s.addColorStop(.8,"#d6cfb8"),s.addColorStop(1,"#a9a28f"),n.fillStyle=s,n.fillRect(0,0,256,256);for(let o=8;o<r;o+=7)n.beginPath(),n.arc(r,r,o,0,Math.PI*2),n.strokeStyle="rgba(80,70,50,0.12)",n.lineWidth=2,n.stroke();return Oi(t,i)}function x0(i){const[t,n]=_n(256,256),r=n.createImageData(256,256);for(let o=0;o<r.data.length;o+=4){const a=150+Math.random()*70;r.data[o]=r.data[o+1]=r.data[o+2]=a,r.data[o+3]=255}n.putImageData(r,0,0);const s=new Kr(t);return s.wrapS=s.wrapT=wi,s.repeat.set(6,12),s}const zn='-apple-system, "SF Pro Display", "Helvetica Neue", Arial, sans-serif';function Qo(i,e,t,n,r,s){const o=i.createLinearGradient(e,t,e,t+r);o.addColorStop(0,s[0]),o.addColorStop(1,s[1]),i.fillStyle=o,i.fillRect(e,t,n,r);const a=[[.2,.3,.7,s[2]],[.85,.55,.65,s[3]],[.4,.9,.7,s[4]]];for(const[c,l,u,f]of a){const p=i.createRadialGradient(e+c*n,t+l*r,0,e+c*n,t+l*r,u*Math.max(n,r));p.addColorStop(0,f),p.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=p,i.fillRect(e,t,n,r)}}function is(i,e,t,{bezel:n,radius:r,kind:s,bezelColor:o="#000",notch:a=!1}){const l=1536/Math.max(e,t),u=Math.round(e*l),f=Math.round(t*l),[p,h]=_n(u,f);h.fillStyle=o,h.fillRect(0,0,u,f);const g=n*l,_=g,m=g,d=u-2*g,x=f-2*g;if(h.save(),Bt(h,_,m,d,x,Math.max(6,(r-n)*l)),h.clip(),h.textAlign="center",h.textBaseline="middle",s==="watch"){h.fillStyle="#000",h.fillRect(_,m,d,x),h.fillStyle="#ff9f0a",h.font=`600 ${d*.1}px ${zn}`,h.fillText("MAR. 13",_+d/2,m+x*.16),h.fillStyle="#fff",h.font=`600 ${d*.34}px ${zn}`,h.fillText("10:09",_+d/2,m+x*.4);const v=[["#fa114f",.78],["#a6ff00",.62],["#00d8fe",.9]],y=_+d/2,R=m+x*.76;v.forEach(([A,w],G)=>{const S=d*(.17-G*.045);h.lineWidth=d*.035,h.lineCap="round",h.strokeStyle=A+"44",h.beginPath(),h.arc(y,R,S,0,Math.PI*2),h.stroke(),h.strokeStyle=A,h.beginPath(),h.arc(y,R,S,-Math.PI/2,-Math.PI/2+Math.PI*2*w),h.stroke()})}else if(s==="ipad")Qo(h,_,m,d,x,["#0d0b14","#120d10","rgba(255,120,90,0.55)","rgba(120,80,220,0.6)","rgba(255,190,120,0.35)"]),h.fillStyle="rgba(255,255,255,0.9)",h.font=`500 ${d*.034}px ${zn}`,h.fillText("mardi 13 octobre",_+d/2,m+x*.1),h.font=`200 ${d*.2}px ${zn}`,h.fillText("9:41",_+d/2,m+x*.18),h.font=`600 ${d*.022}px ${zn}`,h.textAlign="left",h.fillText("9:41",_+d*.03,m+x*.015),h.fillStyle="rgba(255,255,255,0.85)",Bt(h,_+d*.4,m+x*.985,d*.2,x*.005,x*.0025),h.fill();else{Qo(h,_,m,d,x,s==="imac"?["#0b2a5e","#06122b","rgba(80,170,255,0.75)","rgba(40,90,220,0.7)","rgba(140,220,255,0.45)"]:["#140a24","#05060c","rgba(200,90,255,0.6)","rgba(60,120,255,0.6)","rgba(255,130,90,0.35)"]);const v=x*.03;h.fillStyle="rgba(0,0,0,0.28)",h.fillRect(_,m,d,v),h.fillStyle="rgba(255,255,255,0.92)",h.font=`600 ${v*.5}px ${zn}`,h.textAlign="left",["Finder","Fichier","Édition","Présentation","Aller","Fenêtre","Aide"].reduce((F,X,$)=>(h.font=`${$===0?700:500} ${v*.5}px ${zn}`,h.fillText(X,F,m+v/2),F+h.measureText(X).width+v*.9),_+v*.8),h.textAlign="right",h.fillText("mar. 13 oct.  9:41",_+d-v*.8,m+v/2);const y=_+d*.18,R=m+x*.16,A=d*.5,w=x*.52;h.fillStyle="rgba(28,28,34,0.82)",Bt(h,y,R,A,w,x*.015),h.fill(),["#ff5f57","#febc2e","#28c840"].forEach((F,X)=>{h.fillStyle=F,h.beginPath(),h.arc(y+x*(.03+X*.025),R+x*.03,x*.008,0,Math.PI*2),h.fill()}),h.fillStyle="rgba(255,255,255,0.08)";for(let F=0;F<6;F++)Bt(h,y+A*.06,R+w*(.16+F*.12),A*(.88-F%3*.18),w*.06,x*.006),h.fill();const G=11,S=x*.06,T=S*.22,z=G*S+(G+1)*T,W=S+T*2,Q=_+(d-z)/2,P=m+x-W-x*.012;if(h.fillStyle="rgba(255,255,255,0.18)",Bt(h,Q,P,z,W,W*.3),h.fill(),["#1e90ff","#34c759","#ff9500","#ff2d55","#5856d6","#ffcc00","#00c7be","#af52de","#ff3b30","#8e8e93","#30b0c7"].forEach((F,X)=>{const $=h.createLinearGradient(0,P,0,P+S);$.addColorStop(0,F),$.addColorStop(1,"#00000055"),h.fillStyle=F,Bt(h,Q+T+X*(S+T),P+T,S,S,S*.24),h.fill(),h.fillStyle=$,Bt(h,Q+T+X*(S+T),P+T,S,S,S*.24),h.fill()}),a){const F=d*.1,X=v*1.05;h.fillStyle="#000",Bt(h,_+(d-F)/2,m-X,F,X*2,X*.45),h.fill()}}return h.restore(),Oi(p,i)}function ec(i,e="#3a3b3f",t=[8,2]){const[r,s]=_n(256,256);s.fillStyle=e,s.fillRect(0,0,256,256);for(let a=0;a<256;a+=4)s.fillStyle=`rgba(255,255,255,${.04+(a%8?0:.05)})`,s.fillRect(0,a,256,2);for(let a=0;a<3e3;a++)s.fillStyle=`rgba(0,0,0,${Math.random()*.12})`,s.fillRect(Math.random()*256,Math.random()*256,2,1);const o=Oi(r,i);return o.wrapS=o.wrapT=wi,o.repeat.set(...t),o}function M0(i){const[t,n]=_n(128,128);n.fillStyle="#808080",n.fillRect(0,0,128,128),n.fillStyle="#ffffff";for(let s=0;s<128;s+=8)for(let o=s/8%2?4:0;o<128;o+=8)n.beginPath(),n.arc(o+2,s+2,2.2,0,Math.PI*2),n.fill();const r=new Kr(t);return r.wrapS=r.wrapT=wi,r}function S0(i){const[t,n]=_n(512,512);return n.fillStyle="#000",n.fillRect(0,0,512,512),n.globalCompositeOperation="lighter",[["rgba(255,60,160,0.75)",.38,.42],["rgba(60,140,255,0.8)",.62,.45],["rgba(255,170,40,0.6)",.5,.62]].forEach(([r,s,o])=>{const a=n.createRadialGradient(512*s,512*o,0,512*s,512*o,163.84);a.addColorStop(0,r),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(0,0,512,512)}),n.globalCompositeOperation="source-over",n.strokeStyle="rgba(255,255,255,0.75)",n.lineWidth=10,n.lineCap="round",n.beginPath(),n.moveTo(512*.5,512*.12),n.lineTo(512*.5,512*.22),n.moveTo(512*.45,512*.17),n.lineTo(512*.55,512*.17),n.stroke(),n.beginPath(),n.moveTo(512*.45,512*.83),n.lineTo(512*.55,512*.83),n.stroke(),Oi(t,i)}function y0(i,e=8,t=60){const n=e*8,r=t*8,[s,o]=_n(n,r);o.fillStyle="#fff";for(let a=0;a<t;a++)for(let c=0;c<e;c++)o.beginPath(),o.arc(c*8+4,a*8+4,1.6,0,Math.PI*2),o.fill();return new Kr(s)}function E0(i,e,t,{radius:n,cutout:r="island",size:s="normal",front:o="black",screenIn:a=6.1,accent:c="#6b7cff"}){const u=Math.round(768*t/e),f=768/e,[p,h]=_n(768,u),g=o==="white"?"#f1f1ef":"#000";h.fillStyle=g,h.fillRect(0,0,768,u);let _,m,d,x,v;if(r==="home")x=a*2.54*16/Math.hypot(16,9)*f,d=x*(9/16),_=(768-d)/2,m=(u-x)/2,v=2;else{const A=.17*f;_=A,m=A,d=768-2*A,x=u-2*A,v=Math.max(8,(n-.17)*f)}h.save(),Bt(h,_,m,d,x,v),h.clip();const y=h.createLinearGradient(0,m,0,m+x);y.addColorStop(0,tc(c,"#3a3f52",.45)),y.addColorStop(.55,tc(c,"#14161d",.25)),y.addColorStop(1,"#060709"),h.fillStyle=y,h.fillRect(_,m,d,x),[[.25,.3,.8,c,.75],[.85,.62,.7,c,.5],[.4,.95,.75,"#ffffff",.12]].forEach(([A,w,G,S,T])=>{const z=h.createRadialGradient(_+A*d,m+w*x,0,_+A*d,m+w*x,G*d);z.addColorStop(0,b0(S,T)),z.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=z,h.fillRect(_,m,d,x)});const R='-apple-system, "SF Pro Display", "Helvetica Neue", Arial, sans-serif';if(h.textAlign="center",h.textBaseline="middle",h.fillStyle="rgba(255,255,255,0.85)",h.font=`500 ${d*.05}px ${R}`,h.fillText("mercredi 14 octobre",_+d/2,m+x*.13),h.fillStyle="rgba(255,255,255,0.96)",h.font=`${r==="home"?300:200} ${d*.28}px ${R}`,h.fillText("9:41",_+d/2,m+x*.225),h.fillStyle="rgba(255,255,255,0.8)",Bt(h,_+d*.33,m+x*.975,d*.34,x*.006,x*.003),r!=="home"&&h.fill(),h.fillStyle="#000",r==="island"){const A=d*(s==="small"?.27:.32),w=x*.043;s==="dot"?(h.beginPath(),h.arc(_+d/2,m+x*.035,x*.017,0,Math.PI*2),h.fill()):(Bt(h,_+(d-A)/2,m+x*.013,A,w,w/2),h.fill())}else if(r==="notch"){const A=d*(s==="small"?.36:.47),w=x*.036;Bt(h,_+(d-A)/2,m-w,A,w*2,w*.55),h.fill()}if(h.restore(),r==="home"){const w=m/2,G=m+x+(u-m-x)/2,S=o==="white"?"rgba(0,0,0,0.25)":"rgba(255,255,255,0.12)";h.fillStyle=S,Bt(h,384-768*.07,w-3,768*.14,6,3),h.fill(),h.beginPath(),h.arc(384-768*.15,w,5,0,Math.PI*2),h.fill(),h.strokeStyle=S,h.lineWidth=3,h.beginPath(),h.arc(384,G,Math.min(768*.075,(u-m-x)*.32),0,Math.PI*2),h.stroke()}return Oi(p,i)}function b0(i,e){const t=parseInt(i.slice(1),16);return`rgba(${t>>16},${t>>8&255},${t&255},${e})`}function tc(i,e,t){const n=parseInt(i.slice(1),16),r=parseInt(e.slice(1),16),s=o=>Math.round((n>>o&255)*t+(r>>o&255)*(1-t));return`rgb(${s(16)},${s(8)},${s(0)})`}function Zc(i,e){const t=new lt,n=[[.6,0],[.82,0],[.82,.13],[.805,.18],[.77,.21],[.67,.215],[.625,.19],[.6,.13]].map(([l,u])=>new ce(l,u)),r=new _e(new Jn(n,96),i.titaniumPolished);r.rotation.x=Math.PI/2,t.add(r);const s=new _e(new rn(.6,.6,.2,64,1,!0),i.black);s.rotation.x=Math.PI/2,s.position.z=.1,t.add(s);const o=new _e(new Ui(.6,64),new et({map:e,color:16777215,roughness:.03,metalness:.1,clearcoat:1,clearcoatRoughness:.02,iridescence:.9,iridescenceIOR:1.7,iridescenceThicknessRange:[180,520],envMapIntensity:1.4}));o.position.z=.15,t.add(o);const a=Math.asin(.58/.9),c=new _e(new Pi(.9,64,24,0,Math.PI*2,0,a),new et({color:0,transparent:!0,opacity:.35,roughness:0,metalness:0,clearcoat:1,clearcoatRoughness:0,envMapIntensity:2.2,depthWrite:!1}));return c.rotation.x=Math.PI/2,c.scale.set(1,.22,1),c.position.z=.15-.9*Math.cos(a)*.22,t.add(c),t}const nc=new WeakMap;function T0(i){let e=nc.get(i);return e||(e={lens:jc(i),flash:Jc(i),frost:x0()},nc.set(i,e)),e}const A0={alu:.34,steel:.09,titanium:.3},w0={round:i=>({bT:i*.46,bS:Math.min(.32,i*.42),segs:12}),flat:()=>({bT:.045,bS:.045,segs:3}),contour:()=>({bT:.18,bS:.1,segs:10})};function ic(i){const e=/([\d,]+) pouces/.exec(i.display);return e?parseFloat(e[1].replace(",",".")):6.1}function Kc(i,e,t=0){const n=T0(e),[r,s,o]=i.dims||i.dims3d,a=r/10,c=s/10,l=o/10,u=i.design,f=c*u.radius,p=new lt,h=[],g=I=>(h.push(I),I),_=g(new et({metalness:1,roughness:A0[u.frame],clearcoat:u.frame==="steel"?.6:.15,clearcoatRoughness:.2})),m=u.back==="alu"||u.back==="unibody",d=g(m?new et({metalness:.4,roughness:.45,clearcoat:.3,clearcoatRoughness:.35}):u.back==="matte"?new et({metalness:0,roughness:.6,roughnessMap:n.frost,clearcoat:.35,clearcoatRoughness:.55}):new et({metalness:0,roughness:.07,clearcoat:1,clearcoatRoughness:.03})),x=g(new et({metalness:m?.4:0,roughness:m?.36:.12,clearcoat:.9,clearcoatRoughness:.08})),v=g(qe.metal(10066329,.16)),y=g(new et({color:328966,roughness:.5})),R={titaniumPolished:v,black:y},A=w0[u.edge](l);p.add(new _e(g(Gt(c,a,l,f,{bevel:A.bT,bevelSize:A.bS,segments:A.segs,curve:40})),m?d:_));const w=u.edge==="round"?A.bS*.72:A.bS+.02,G=c-2*w,S=a-2*w,T=Math.max(.2,f-w),z=u.edge==="round"?.12:.03,W=g(Kn(G,S,T,{thick:.01,bevel:z})),Q=l/2+.004-(.01+z),P=g(qe.screen(null)),O=new _e(W,P);O.position.z=Q,p.add(O);let F=-l/2;if(m)if(u.back==="unibody"){const I=S*.6,q=new _e(g(Kn(G-.5,I,.7,{thick:.005,bevel:.01})),g(new et({metalness:.2,roughness:.4,clearcoat:.2,clearcoatRoughness:.4})));q.rotation.y=Math.PI,q.position.set(0,-S/2+.35+I/2,-l/2-.005),q.userData.tint=!0,p.add(q)}else{const I=g(new gn(c-2*f*.5,.05,.01)),q=g(new et({color:9211020,roughness:.5,transparent:!0,opacity:.55}));for(const Z of[-1,1]){const E=new _e(I,q);E.position.set(0,Z*(a/2-(u.chamfer?1.2:.62)),-l/2-.002),p.add(E)}}else{const I=new _e(W,d);I.rotation.y=Math.PI,I.position.z=-Q,p.add(I),F=-l/2-.004}let X=null;if(u.front==="home"){const I=ic(i)*2.54*16/Math.hypot(16,9),q=(S-I)/2;X=new _e(g(new ts(Math.min(.55,q*.34),.03,12,64)),v),X.position.set(0,-S/2+q/2,Q+.01+z+.002),p.add(X)}const $=(I,q)=>[c/2-I,a/2-q];let ee=F;const K=(I,q,Z,E,M,N)=>{const te=new _e(g(Gt(Z,E,N,M,{bevel:N*.45,segments:6,curve:32})),x);te.rotation.y=Math.PI;const[ne,ie]=$(I,q);te.position.set(ne,ie,F-N/2+.01),p.add(te),ee=F-N+.01},J=(I,q,Z)=>{const E=Zc(R,n.lens);E.scale.setScalar(Z),E.rotation.y=Math.PI;const[M,N]=$(I,q);E.position.set(M,N,ee),E.traverse(te=>{te.isMesh&&te.geometry&&h.push(te.geometry)}),p.add(E)},ae=(I,q,Z,E,M=.004)=>{const N=new _e(g(new Ui(Z,40)),E);N.rotation.y=Math.PI;const[te,ne]=$(I,q);N.position.set(te,ne,ee-M),p.add(N)},Y=g(new et({map:n.flash,roughness:.35,clearcoat:1})),re=g(qe.glassBlack({iridescence:.6})),ue=(I,q,Z=.19)=>{ae(I,q,Z*1.18,v,.002),ae(I,q,Z,Y)},ye=(I,q,Z=.21)=>{ae(I,q,Z*1.15,v,.002),ae(I,q,Z,re)},fe=(I,q)=>ae(I,q,.045,y),Ae=u.bigLens?1:.86;switch(u.cam){case"single":{const I=u.chamfer?.4:.48;J(.9,.9,I),fe(1.45,.9),ue(1.95,.88,.15);break}case"singleXR":J(1.05,1.05,.6),fe(1.7,1),ue(2.1,1,.16);break;case"single16e":J(1.15,1.15,.7),fe(1.85,1.1),ue(2.3,1.05,.17);break;case"dualH":K(1.55,.95,2.35,1.25,.62,.08),J(.98,.95,.48),J(2.12,.95,.48),ue(3.05,.95,.15);break;case"dualV":K(.95,1.75,1.32,2.8,.66,.1),J(.95,1.05,.5),J(.95,2.45,.5),ue(.95,1.75,.13);break;case"sq2v":case"sq2d":{const I=3*Math.min(1,c/7.15),q=.3+I/2,Z=I*.235;K(q,q,I,I,I*.25,.12),u.cam==="sq2v"?(J(q-Z,q-Z,.74*(I/3)),J(q-Z,q+Z,.74*(I/3)),fe(q+Z,q+.05)):(J(q-Z,q-Z,.78*(I/3)),J(q+Z,q+Z,.78*(I/3)),fe(q-Z,q+Z)),ue(q+Z,q-Z,.19);break}case"sq3":{const I=u.bigLens?3.62:3.25,q=.3+I/2,Z=I*.243;K(q,q,I,I,I*.26,.12),J(q-Z,q-Z,Ae),J(q-Z,q+Z,Ae),J(q+Z,q,Ae),ue(q+I*.26,q-I*.33,.21),u.lidar?ye(q+I*.26,q+I*.33):fe(q+I*.26,q+I*.33);break}case"pill2":K(1.2,2.1,1.8,3.6,.9,.12),J(1.2,1.25,.76),J(1.2,2.95,.76),ue(2.4,1.1,.19),fe(2.4,1.75);break;case"plateau3":{K(c/2,2.4,c-.5,4.3,f*.75,.15);const I=2.15,q=.88;J(I-q,2.4-q,1),J(I-q,2.4+q,1),J(I+q,2.4,1),ue(c-1.15,1.6,.21),ye(c-1.15,3.2),fe(c-1.15,2.4);break}case"plateau1":K(c/2,1.55,c-.5,2.6,1,.12),J(1.45,1.55,.78),ue(2.75,1.55,.19),fe(3.4,1.55);break;case"duo":K(2.6,1.3,4.6,2,1,.12),J(1.55,1.3,.72),J(3.65,1.3,.72),ue(5.2,1.3,.18);break}const Ie=Math.min(.13,l*.17),Me=(I,q,Z,E=m?d:_,M=.45)=>{p.add(fn(E,Z,Ie,[I*(c/2-.012),a/2-q,0],{squash:M}))};if(u.action?Me(-1,a*.215,a*.03):u.mute&&Me(-1,a*.2,a*.025),Me(-1,a*.295,a*.06),Me(-1,a*.38,a*.06),Me(1,a*.31,a*.11),u.control&&Me(1,a*.64,a*.07,g(qe.glassBlack()),.22),u.hinge){const I=new _e(g(new rn(l*.47,l*.47,a-.6,32)),_);I.position.set(-c/2+l*.2,0,0),p.add(I)}const Le=/USB/.test(i.port||"");p.add(fn(g(qe.glassBlack()),Le?.62:.48,.1,[0,-a/2+.07,0],{axis:"x",squash:.6}));const C=g(new rn(.04,.04,.03,12));for(let I=0;I<6;I++)for(const q of[-1,1]){const Z=new _e(C,y);Z.position.set(q*(.95+I*.17)*Math.min(1,c/7),-a/2+.008,0),p.add(Z)}p.traverse(I=>{I.isMesh&&(I.castShadow=!0)});let le=null,j=-1;function oe(I){const q=i.colors[I];if(!q||I===j)return;j=I;const Z=new We(q.hex);d.color.copy(Z),x.color.copy(Z),_.color.set(q.frame||q.hex),v.color.set(q.frame||q.hex).multiplyScalar(.9),m&&(d.roughness=q.gloss?.06:.45),p.traverse(E=>{E.userData.tint&&E.material.color.copy(Z)}),X&&(X.material=v),le&&le.dispose(),le=E0(e,G,S,{radius:T,cutout:u.front,size:u.notch||u.island||"normal",front:q.front||"black",screenIn:ic(i),accent:q.hex}),P.emissiveMap=le,P.needsUpdate=!0}return oe(t),{group:p,setColor:oe,dispose(){le&&le.dispose(),h.forEach(I=>I.dispose&&I.dispose())}}}function Qc(i,e){const t=new ua;t.add(new _e(new gn(80,80,80),new Ln({color:1710878,side:Dt})));const n=(a,c,l,u,f=16777215)=>{const p=new _e(new jn(a,c),new Ln({color:new We(f).multiplyScalar(l),side:nn}));p.position.set(...u),p.lookAt(0,0,0),t.add(p)};n(18,18,2.6,[0,24,4]),n(3,30,5,[-20,2,8],16774890),n(3,30,4,[20,2,-4],15660031),n(26,4,2.2,[0,6,-24]),n(16,10,1.4,[6,0,24]),n(40,40,.5,[0,-24,0],14210770);const r=new Qs(i);e.environment=r.fromScene(t,.03).texture,r.dispose();const s=new g0(16777215,1.6);s.position.set(2.5,24,5),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:60}),s.shadow.radius=18,s.shadow.blurSamples=24,s.shadow.bias=-4e-4,e.add(s,new f0(16777215,9079434,.5));const o=new _e(new jn(200,200),new h0({opacity:.13}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,e.add(o),{floor:o}}function el(i={}){const e=new Bc({antialias:!0,alpha:!0,powerPreference:"high-performance",...i});return e.setClearColor(0,0),e.toneMapping=oc,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=en,e}function tl(i){const e=new Dn().setFromObject(i),t=e.getSize(new L);return i.position.sub(e.getCenter(new L)),t}const Xs=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),vi={front:.38,back:Math.PI+.42,side:Math.PI/2+.25};class R0{constructor(){const e=matchMedia("(pointer: coarse)").matches;this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.renderer=el(),this.renderer.setPixelRatio(Math.min(devicePixelRatio,e?1.75:2)),this.canvas=this.renderer.domElement,this.canvas.className="viewer-canvas",this.scene=new ua,this.camera=new zt(26,1,.1,300),this.studio=Qc(this.renderer,this.scene),this.pivot=new lt,this.scene.add(this.pivot),this.current=null,this.outgoing=[],this.yaw=vi.back,this.yawGoal=vi.back,this.vel=0,this.tilt=.06,this.tiltGoal=.06,this.size=new L(7,15,1),this.lastInput=0,this.enter=1,this.container=null,this.bindInput(),new ResizeObserver(()=>this.resize()).observe(document.documentElement);let t=performance.now();this.renderer.setAnimationLoop(()=>{const n=performance.now();this.tick(Math.min(.05,(n-t)/1e3),n),t=n})}mount(e){this.container=e,e.append(this.canvas),this.resize()}resize(){if(!this.container||!this.container.isConnected)return;const e=this.container.clientWidth,t=this.container.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.fitCamera())}fitCamera(){const e=this.size,t=Or.degToRad(this.camera.fov),n=e.y*1.3/(2*Math.tan(t/2)),r=Math.max(e.x,e.z)*1.45/(2*Math.tan(t/2)*this.camera.aspect),s=Math.max(n,r);this.camera.position.set(0,e.y*.04,s),this.camera.lookAt(0,0,0),this.studio.floor.position.y=-e.y/2-Math.max(.6,e.y*.07)}showObject(e,{view:t="back"}={}){this.current&&this.outgoing.push({...this.current,t:1});const n=new lt;n.add(e.group),this.size=tl(e.group),this.pivot.add(n),this.current={...e,wrap:n},this.enter=0,this.yawGoal=vi[t]??vi.back,this.yaw=this.yawGoal-.9,this.vel=0,this.lastInput=performance.now(),this.fitCamera()}showIPhone(e,t=0,n){this.showObject(Kc(e,this.renderer,t),n)}setColor(e){var t,n;(n=(t=this.current)==null?void 0:t.setColor)==null||n.call(t,e)}setView(e){this.yawGoal=C0(vi[e],this.yaw),this.vel=0,this.lastInput=performance.now()}bindInput(){const e=this.canvas;let t=null,n=0,r=0,s=0;e.addEventListener("pointerdown",a=>{t=a.pointerId,n=a.clientX,r=a.clientY,s=performance.now(),e.setPointerCapture(t),e.classList.add("dragging"),this.vel=0}),e.addEventListener("pointermove",a=>{if(a.pointerId!==t)return;const c=performance.now(),l=a.clientX-n,u=a.clientY-r;n=a.clientX,r=a.clientY;const f=6/Math.min(innerWidth,900);this.yawGoal+=l*f,this.tiltGoal=Or.clamp(this.tiltGoal+u*f*.5,-.6,.6),this.vel=Or.lerp(this.vel,l*f/Math.max(.001,(c-s)/1e3),.4),s=c,this.lastInput=c});const o=a=>{a.pointerId===t&&(performance.now()-s>90&&(this.vel=0),t=null,e.classList.remove("dragging"))};e.addEventListener("pointerup",o),e.addEventListener("pointercancel",o)}tick(e,t){if(!this.container||!this.container.isConnected||!this.current)return;this.yawGoal+=this.vel*e,this.vel*=Math.exp(-2.6*e),!this.reduced&&t-this.lastInput>4500&&(this.yawGoal+=.22*e),this.tiltGoal=Xs(this.tiltGoal,.06,.8,e),this.yaw=Xs(this.yaw,this.yawGoal,6,e),this.tilt=Xs(this.tilt,this.tiltGoal,6,e),this.enter=Math.min(1,this.enter+e/.9);const n=1-Math.pow(1-this.enter,3),r=this.current.wrap;r.rotation.set(this.tilt,this.yaw,0,"YXZ"),r.scale.setScalar(.86+.14*n),r.position.y=(this.reduced?0:Math.sin(t/1600)*.06*this.size.y/15)-(1-n)*.8,this.outgoing=this.outgoing.filter(s=>{var o;return s.t-=e/.35,s.t<=0?(this.pivot.remove(s.wrap),(o=s.dispose)==null||o.call(s),!1):(s.wrap.scale.setScalar(s.t),!0)}),this.renderer.render(this.scene,this.camera)}}function C0(i,e){return i+Math.PI*2*Math.round((e-i)/(Math.PI*2))}class P0{constructor(e=480){this.size=e,this.cache=new Map,this.queue=[],this.busy=!1}ensure(){this.renderer||(this.renderer=el({preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(1),this.renderer.setSize(this.size,this.size,!1),this.scene=new ua,this.camera=new zt(24,1,.1,300),this.studio=Qc(this.renderer,this.scene))}request(e,t,n,{view:r="back"}={}){if(this.cache.has(e)){n(this.cache.get(e));return}this.queue.push({key:e,build:t,cb:n,view:r}),this.pump()}pump(){if(this.busy||!this.queue.length)return;this.busy=!0;const e=()=>{var l;const t=this.queue.shift();if(!t){this.busy=!1;return}if(this.cache.has(t.key)){t.cb(this.cache.get(t.key)),setTimeout(e,0);return}this.ensure();const n=t.build(this.renderer),r=tl(n.group),s=new lt;s.add(n.group),s.rotation.set(.06,vi[t.view],0,"YXZ"),this.scene.add(s);const o=Or.degToRad(this.camera.fov),a=Math.max(r.y,r.x*1.3)*1.14/(2*Math.tan(o/2));this.camera.position.set(0,r.y*.03,a),this.camera.lookAt(0,0,0),this.studio.floor.position.y=-r.y/2-Math.max(.5,r.y*.06),this.renderer.render(this.scene,this.camera);const c=this.renderer.domElement.toDataURL("image/png");this.scene.remove(s),(l=n.dispose)==null||l.call(n),this.cache.set(t.key,c),t.cb(c),setTimeout(e,16)};setTimeout(e,0)}}const Xi=new L;function kt(i,e,t,n,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),c=Math.PI/4;Xi.copy(e),Xi[n]=0,Xi.normalize();const l=.5*o/(o+a),u=1-Xi.angleTo(i)/c;return Math.sign(Xi[t])===1?u*l:a/(o+a)+l+l*(1-u)}class ma extends gn{constructor(e=1,t=1,n=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,h=u.length/6,g=new L,_=.5/r;for(let m=0,d=0;m<u.length;m+=3,d+=2)switch(a.fromArray(u,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[m+0]=l.x*Math.sign(a.x)+c.x*s,u[m+1]=l.y*Math.sign(a.y)+c.y*s,u[m+2]=l.z*Math.sign(a.z)+c.z*s,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/h)){case 0:g.set(1,0,0),p[d+0]=kt(g,c,"z","y",s,n),p[d+1]=1-kt(g,c,"y","z",s,t);break;case 1:g.set(-1,0,0),p[d+0]=1-kt(g,c,"z","y",s,n),p[d+1]=1-kt(g,c,"y","z",s,t);break;case 2:g.set(0,1,0),p[d+0]=1-kt(g,c,"x","z",s,e),p[d+1]=kt(g,c,"z","x",s,n);break;case 3:g.set(0,-1,0),p[d+0]=1-kt(g,c,"x","z",s,e),p[d+1]=1-kt(g,c,"z","x",s,n);break;case 4:g.set(0,0,1),p[d+0]=1-kt(g,c,"x","y",s,e),p[d+1]=1-kt(g,c,"y","x",s,t);break;case 5:g.set(0,0,-1),p[d+0]=kt(g,c,"x","y",s,e),p[d+1]=1-kt(g,c,"y","x",s,t);break}}}function L0(i){const s=new lt,o=qe.metal(3882048,.38);s.add(new _e(Gt(21.55,28.16,.51,1.9,{bevel:.1}),o));const a=21.55-.16,c=28.16-.16,l=is(i,a,c,{bezel:.62,radius:1.9-.08,kind:"ipad"}),u=new _e(Kn(a,c,1.9-.08,{thick:.01,bevel:.02}),qe.screen(l));u.position.z=.51/2-.02,s.add(u);const f=21.55/2-1.95,p=28.16/2-1.95,h=-.51/2,g=new _e(Gt(2.7,2.7,.16,.8,{bevel:.06}),qe.metal(2763566,.22));g.position.set(f,p,h),s.add(g);const _=Zc({titaniumPolished:qe.metal(10263712,.15),black:qe.matteBlack()},jc(i));_.scale.setScalar(.62),_.rotation.y=Math.PI,_.position.set(f+.55,p+.55,h-.08),s.add(_),s.add(Zi(.22,new et({map:Jc(i),roughness:.35,clearcoat:1}),[f-.6,p+.6,h-.081],{facing:"back"})),s.add(Zi(.25,qe.glassBlack(),[f-.55,p-.55,h-.081],{facing:"back"}));for(let m=-1;m<=1;m++)s.add(Zi(.07,qe.metal(9079434,.2),[m*.35,-28.16/2+1.3,h-.002],{facing:"back",seg:24}));return s.add(fn(o,1.6,.11,[21.55/2-3.2,28.16/2-.01,0],{axis:"x",squash:.5})),s.add(fn(o,1.2,.11,[21.55/2-.01,28.16/2-4,0],{squash:.5})),s.add(fn(o,1.2,.11,[21.55/2-.01,28.16/2-5.7,0],{squash:.5})),s.add(fn(qe.glassBlack(),.6,.1,[0,-28.16/2+.05,0],{axis:"x",squash:.6})),s}function D0(i){const r=new lt,s=qe.metal(3289911,.36),o=new _e(Gt(31.26,22.12,.95,.85,{bevel:.2}),s);o.rotation.x=-Math.PI/2,r.add(o);const a=.95/2,c=27.6,l=11.4,u=-22.12/2+1.5+l/2,f=new _e(new jn(c,l),new et({color:855311,roughness:.7}));f.rotation.x=-Math.PI/2,f.position.set(0,a+.004,u),r.add(f);const p=[[1.5,...Array(12).fill(1),1],[...Array(13).fill(1),1.5],[1.5,...Array(13).fill(1)],[1.75,...Array(11).fill(1),1.75],[2.25,...Array(10).fill(1),2.25],[1,1,1,1.25,5,1.25,1,1,1,1]],h=(c-.8)/14.5,g=.22,_=p.reduce((P,O)=>P+O.length,0),m=new Im(new ma(1,.1,1,2,.04),new et({color:1118483,roughness:.45,clearcoat:.2}),_),d=new Mt;let x=0,v=u-l/2+.45;p.forEach((P,O)=>{const F=(O===0?.55:1)*h-g;let X=-c/2+.4;for(const $ of P)d.position.set(X+$*h/2,a+.06,v+F/2),d.scale.set($*h-g,1,F),d.updateMatrix(),m.setMatrixAt(x++,d.matrix),X+=$*h;v+=F+g}),r.add(m);const y=y0(i,6,48);for(const P of[-1,1]){const O=new _e(new jn(1.1,l),new Ln({color:328965,alphaMap:y,transparent:!0}));O.rotation.x=-Math.PI/2,O.position.set(P*(c/2+.9),a+.003,u),r.add(O)}const R=new _e(new pa(Fi(15,9.4,.5),24),qe.metal(3553083,.2));R.rotation.x=-Math.PI/2,R.position.set(0,a+.003,22.12/2-1.2-4.7),r.add(R);const A=qe.glassBlack();[[-1,-4.5,.75],[-1,-2.2,.5],[-1,-.9,.5],[1,-3.2,.9],[1,-1.2,1.1],[1,.6,.5]].forEach(([P,O,F])=>{const X=new _e(new or(.12,F,4,16),A);X.rotation.x=Math.PI/2,X.scale.set(.5,1,1),X.position.set(P*(31.26/2-.02),0,O),r.add(X)});const w=new lt;w.position.set(0,a,-22.12/2+.3),w.rotation.x=-.33,r.add(w);const G=new _e(Gt(31.26,22.12,.6,.85,{bevel:.15}),s);G.position.set(0,22.12/2+.05,0),w.add(G);const S=31.26-.25,T=22.12-.25,z=is(i,S,T,{bezel:.6,radius:.75,kind:"mac",notch:!0}),W=new _e(Kn(S,T,.75,{thick:.01,bevel:.02}),qe.screen(z));W.position.set(0,22.12/2+.05,.28),w.add(W);const Q=new _e(new rn(.42,.42,31.26-5,32),new et({color:789517,roughness:.4}));return Q.rotation.z=Math.PI/2,w.add(Q),r}function I0(i){const s=new lt,o=qe.metal(4025776,.38),a=qe.metal(13097196,.34);s.add(new _e(Gt(54.7,40,1.15,1,{bevel:.3}),o));const c=54.7-.5,l=33-.25,u=is(i,c,l,{bezel:1.15,radius:.75,kind:"imac",bezelColor:"#f1f1ef"}),f=new _e(Kn(c,l,.75,{thick:.01,bevel:.02}),qe.screen(u));f.position.set(0,40/2-.25-l/2,1.15/2-.02),s.add(f);const p=new _e(Gt(54.7-.5,7,.06,.75,{bevel:.02}),a);p.position.set(0,-40/2+.25+7/2,1.15/2),s.add(p);const h=new _e(Gt(15,23.7,.45,.4,{bevel:.1}),o);h.rotation.x=.19,h.position.set(0,-14.65,-1.15/2-2.7),s.add(h);const g=new _e(Gt(15,14,.45,1,{bevel:.1}),o);return g.rotation.x=-Math.PI/2,g.position.set(0,-26.5,-1.8),s.add(g),s}class U0 extends Kt{constructor(e,t,n){super(),this.ry=e,this.rz=t,this.zc=n}getPoint(e,t=new L){const n=e*Math.PI*2;return t.set(0,this.ry*Math.sin(n),this.zc+this.rz*Math.cos(n))}}function N0(i){const s=new lt,o=qe.metal(2829619,.3);s.add(new _e(Gt(3.8,4.5,.78,1.05,{bevel:.22,segments:10}),o));const a=3.8-.16,c=4.5-.16,l=is(i,a,c,{bezel:.26,radius:1.05-.08,kind:"watch"}),u=new _e(Kn(a,c,1.05-.08,{thick:.02,bevel:.12}),qe.screen(l));u.position.z=.78/2-.08,s.add(u);const f=.75,p=new _e(new Pi(1.6,48,16,0,Math.PI*2,0,f),qe.glassBlack());p.rotation.x=-Math.PI/2,p.scale.set(1,.25,1),p.position.z=-.78/2+.02+1.6*Math.cos(f)*.25,s.add(p);const h=new lt;h.position.set(3.8/2+.1,.9,0);const g=new _e(new rn(.3,.3,.26,48),o);g.rotation.z=Math.PI/2,h.add(g);const _=new gn(.24,.03,.045);for(let v=0;v<30;v++){const y=v/30*Math.PI*2,R=new _e(_,o);R.position.set(.01,Math.cos(y)*.3,Math.sin(y)*.3),R.rotation.x=y,h.add(R)}s.add(h),s.add(fn(o,.9,.11,[3.8/2-.02,-.6,0],{squash:.5}));const m=new U0(3.4,2.5,-2.5),d=new Ni(Fi(2.2,.3,.12),{steps:220,bevelEnabled:!1,extrudePath:m}),x=new _e(d,new et({color:1910329,roughness:.55,clearcoat:.15}));return s.add(x),s}function F0(i){const e=new lt,t=qe.plastic(15987697,.22),n=6.06,r=4.52,s=2.17,o=1;e.add(new _e(new ma(n,r,s,8,o),t));const a=r/2-1,c=Fi(n+.01,s+.01,o,.45).getSpacedPoints(160).map(f=>new L(f.x,a,f.y)),l=new _e(new ns(new Qr(c,!0),320,.012,6,!0),new Ln({color:10132122}));e.add(l),e.add(Zi(.055,new Ln({color:6160250}),[0,.15,s/2+.004],{seg:24})),e.add(fn(qe.glassBlack(),.5,.09,[0,-r/2+.03,0],{axis:"x",squash:.6}));for(let f=0;f<4;f++){const p=new _e(new rn(.035,.035,.02,12),qe.matteBlack());p.position.set(-1.4-f*.14,-r/2+.005,0),e.add(p)}const u=new et({color:14474458,roughness:.85,sheen:.4,sheenColor:16777215});for(const f of[-1,1]){const p=new lt,h=new _e(new Pi(.95,48,32),t);h.scale.set(1,.85,.9),p.add(h);const g=new _e(new or(.24,2,8,24),t);g.position.set(f*.25,-1.55,.1),g.rotation.z=f*.15,p.add(g);const _=new _e(new rn(.2,.2,.06,24),qe.metal(13619153,.15));_.position.set(f*.43,-2.83,.1),_.rotation.z=f*.15,p.add(_);const m=new _e(new Pi(.62,32,16,0,Math.PI*2,0,Math.PI/2),u);m.rotation.z=f*Math.PI/2,m.position.set(-f*.7,.1,0),p.add(m);const d=Zi(.16,qe.matteBlack(),[f*.2,.25,.86],{seg:24});d.scale.set(1,.55,1),p.add(d),p.position.set(f*4.6,.6,1.6),p.rotation.y=-f*.5,e.add(p)}return e}function O0(i){const e=new lt,t=11,n=qe.metal(13224395,.24),r=Gt(17.2,8,3,3.4,{bevel:.55,segments:10});e.add(new _e(Ws(r,t),n));const s=Kn(16.5,7.3,3.05,{thick:.05,bevel:.32});s.translate(0,0,1.36),e.add(new _e(Ws(s,t),qe.glassBlack({iridescence:.5,iridescenceIOR:1.4,envMapIntensity:1.6})));const o=Gt(15.8,7,2.6,3,{bevel:.8,segments:8});o.translate(0,0,-2.3),e.add(new _e(Ws(o,t),new et({map:ec(i,"#4a4b50",[6,3]),roughness:1,sheen:.5,sheenColor:16777215})));const a=new Qr([new L(-8,0,-2.4),new L(-9.2,0,-6),new L(-7.6,0,-11),new L(0,0,-14),new L(7.6,0,-11),new L(9.2,0,-6),new L(8,0,-2.4)]),c=new Ni(Fi(3.8,.6,.28),{steps:160,bevelEnabled:!1,extrudePath:a});e.add(new _e(c,new et({map:ec(i,"#3c3d42",[24,2]),roughness:1,sheen:.6,sheenColor:13684944})));const l=qe.plastic(15132388,.4);for(const p of[-1,1]){const h=new _e(new ma(.75,1.3,3.4,4,.3),l);h.position.set(p*7.95,.2,-2.6),h.rotation.y=p*.25,e.add(h)}const u=new _e(new rn(.45,.45,.35,40),n);u.position.set(6.3,4.05,-.6),e.add(u);const f=fn(n,1.1,.16,[-6.1,4,-.6],{axis:"x",squash:.6});return e.add(f),e}function B0(i){const e=new lt,t=4.9,n=1.15,r=.86,s=t*Math.sin(n)*r,o=t*Math.cos(n),a=[new ce(0,-s)];for(let p=0;p<=48;p++){const h=-n+2*n*p/48;a.push(new ce(t*Math.cos(h),t*Math.sin(h)*r))}a.push(new ce(0,s));const c=M0();c.repeat.set(90,40);const l=new et({color:3092532,roughness:.95,bumpMap:c,bumpScale:1.2,sheen:.4,sheenColor:10132128});e.add(new _e(new Jn(a,128),l));const u=new _e(new Ui(o*.96,64),new et({color:0,emissive:16777215,emissiveMap:S0(i),emissiveIntensity:.9,roughness:.08,clearcoat:1}));u.rotation.x=-Math.PI/2,u.position.y=s+.01,e.add(u);const f=new _e(new ns(new Qr([new L(0,-s+.4,-o),new L(0,-s-.1,-4.6),new L(.8,-s-.15,-7)]),64,.18,12),qe.plastic(2763309,.6));return e.add(f),e}function z0(){const i=new lt,e=[[0,0],[1.6,0],[1.45,.2],[1.1,.33],[.6,.4],[0,.42]],t=[[0,-.38],[.9,-.36],[1.4,-.28],[1.58,-.12],[1.6,0]],n=c=>c.map(([l,u])=>new ce(l,u)),r=new _e(new Jn(n(e.slice(1)),96),qe.plastic(16185076,.12,{clearcoat:1,clearcoatRoughness:.05})),s=new _e(new Jn(n(t),96),qe.metal(14277083,.08)),o=new _e(new ts(1.6,.012,8,128),new Ln({color:5592405}));o.rotation.x=Math.PI/2;for(const c of[r,s,o])i.add(c);i.rotation.x=Math.PI/2;const a=new lt;return a.add(i),a}const Tn=document.getElementById("app"),_t=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),sn=Object.fromEntries(Yr.map(i=>[i.id,i])),rc=["pro","promax","duo","air","standard","plus","mini","e","se"],pn=[...Yr].sort((i,e)=>e.year-i.year||rc.indexOf(i.tier)-rc.indexOf(e.tier)),ga=[...new Set(pn.map(i=>i.year))],nl='<span class="nv">Non vérifié</span>',il=i=>i.display.split(" · ")[0],rs=[{id:"ipad",name:"iPad",flagship:"iPad Pro",build:L0,view:"front"},{id:"mac",name:"Mac",flagship:"MacBook Pro",build:D0,view:"front"},{id:"imac",name:"iMac",flagship:"iMac",build:I0,view:"front"},{id:"watch",name:"Watch",flagship:"Apple Watch",build:N0,view:"front"},{id:"airpods",name:"AirPods",flagship:"AirPods Pro",build:F0,view:"front"},{id:"vision",name:"Vision",flagship:"Apple Vision Pro",build:O0,view:"front"},{id:"homepod",name:"Maison",flagship:"HomePod mini",build:B0,view:"front"},{id:"airtag",name:"AirTag",flagship:"AirTag",build:z0,view:"front"}],yi=new R0,G0=new P0(440),ct={compare:["iphone-18-pro","iphone-17-pro","iphone-15-pro"],filter:"all"};document.getElementById("globalnav").innerHTML=`
  <a class="gn-mark" href="#home">Catalogue</a>
  <div class="gn-links">
    <a href="#iphone" data-nav="iphone">iPhone</a>
    ${rs.map(i=>`<a href="#f-${i.id}" data-nav="f-${i.id}">${i.name}</a>`).join("")}
    <a href="#compare" data-nav="compare">Comparer</a>
  </div>`;function H0(i=Tn){i.querySelectorAll("img[data-thumb]").forEach(e=>{const[t,n="0",r="back"]=e.dataset.thumb.split(":"),s=sn[t];s&&G0.request(`${t}:${n}:${r}`,o=>Kc(s,o,+n),o=>{e.src=o,e.classList.add("in")},{view:r})})}const ss=(i,e=0,t="back",n="")=>`<img class="thumb ${n}" data-thumb="${i}:${e}:${t}" alt="${_t(sn[i].name)}" width="440" height="440" />`,rl=(i,e=8)=>`<span class="dots">${i.colors.slice(0,e).map(t=>`<i style="background:${t.hex}" title="${_t(t.n)}"></i>`).join("")}</span>`;function V0(){const i=sn["iphone-18-pro"];return`
  <section class="hero dark">
    <div class="hero-copy">
      <p class="eyebrow">Nouveau · septembre 2026</p>
      <h1 class="display">iPhone 18 Pro</h1>
      <p class="sub">A20 Pro. Caméra Fusion 48 Mpx à ouverture variable. Une Dynamic Island plus discrète.</p>
      <div class="ctas"><a class="btn" href="#m-${i.id}">Découvrir</a><a class="more" href="#iphone">Toute la gamme</a></div>
    </div>
    <div class="hero-stage" data-viewer="${i.id}:0:back"></div>
  </section>

  <section class="timeline-band">
    <div class="wrap">
      <h2 class="h2">Dix ans d’iPhone.</h2>
      <p class="lead">${Yr.length} modèles, de l’iPhone SE de 2016 à l’iPhone Duo pliable. Chacun modélisé en 3D dans ses finitions d’origine.</p>
      <div class="years" role="list">
        ${ga.map(e=>{const t=pn.filter(n=>n.year===e);return`<a role="listitem" class="year" href="#iphone" data-year="${e}">
            ${ss(t[0].id)}<strong>${e}</strong><span>${t.length} modèle${t.length>1?"s":""}</span></a>`}).join("")}
      </div>
    </div>
  </section>

  <section class="tiles wrap">
    ${Fr("iphone-duo","Le premier iPhone pliable.","Écran externe 5,4 pouces, écran interne 7,6 pouces.","dark","front")}
    ${Fr("iphone-air","Le plus fin, à 5,64 mm.","Cadre en titane, puce A19 Pro.","light","side")}
    ${Fr("iphone-17-pro","Aluminium monocoque.","Trois caméras 48 Mpx, en Orange cosmique.","light","back")}
    ${Fr("iphone-7","Là où tout commence.","iPhone 7, 2016. Touch ID et bouton principal.","dark","back")}
  </section>

  <section class="families-band wrap">
    <h2 class="h2">Les autres familles.</h2>
    <div class="fam-grid">${rs.map(e=>`<a class="fam" href="#f-${e.id}"><strong>${e.name}</strong><span>${e.flagship} en 3D</span></a>`).join("")}</div>
  </section>`}function Fr(i,e,t,n,r){const s=sn[i];return`<a class="tile ${n}" href="#m-${i}">
    <p class="eyebrow">${_t(s.name)}</p><h3>${e}</h3><p>${t}</p>${ss(i,0,r)}</a>`}function k0(){const i=us.find(t=>t.id===ct.filter)||us[0],e=pn.filter(i.test);return`
  <section class="page-head wrap">
    <h1 class="h1">iPhone</h1>
    <p class="lead">Toute la gamme depuis 2016. ${Yr.length} modèles, leurs finitions et leurs caractéristiques.</p>
    <div class="chips" role="tablist">${us.map(t=>`<button type="button" role="tab" data-filter="${t.id}" aria-selected="${t.id===i.id}">${t.label}</button>`).join("")}</div>
  </section>
  <div class="wrap">
    ${ga.map(t=>{const n=e.filter(r=>r.year===t);return n.length?`<section class="year-group" id="y${t}"><h2 class="year-title">${t}</h2><div class="grid">
        ${n.map(r=>`
          <article class="card">
            <a class="card-link" href="#m-${r.id}">${ss(r.id)}
              <span class="tier">${hl[r.tier]}</span>
              <h3>${_t(r.name)}</h3>
              ${rl(r)}
              <p class="meta">${_t(il(r))} · ${_t(r.chip)}</p>
            </a>
            <button type="button" class="cmp" data-cmp="${r.id}" aria-pressed="${ct.compare.includes(r.id)}">${ct.compare.includes(r.id)?"Dans la comparaison":"Comparer"}</button>
          </article>`).join("")}
      </div></section>`:""}).join("")}
  </div>`}const sl=[["Écran",i=>i.display],["Puce",i=>i.chip],["Appareil photo arrière",i=>i.cameras],["Caméra avant",i=>i.front],["Capacité",i=>{var e;return(e=i.storage)==null?void 0:e.join(" · ")}],["Authentification",i=>i.auth],["Connecteur",i=>i.port],["Résistance à l’eau",i=>i.ip],["Matériaux",i=>i.material],["Dimensions",i=>i.dims?`${i.dims.map(e=>String(e).replace(".",",")).join(" × ")} mm${i.dimsNote?` (${i.dimsNote})`:""}`:null],["Finitions",i=>i.colors.map(e=>e.n).join(", ")]];function W0(i){const e=sn[i];if(!e)return _a();const t=pn.filter(a=>a.tier===e.tier),n=t.indexOf(e),r=pn.indexOf(e),s=t[n-1]||pn[r-1],o=t[n+1]||pn[r+1];return`
  <nav class="subnav"><div class="wrap subnav-in">
    <strong>${_t(e.name)}</strong>
    <span class="subnav-links"><a href="#specs-${e.id}" data-scroll="specs">Caractéristiques</a><button type="button" class="pill" data-cmp-go="${e.id}">Comparer</button></span>
  </div></nav>
  <section class="product-hero">
    <div class="wrap ph-in">
      <div class="ph-copy">
        <p class="eyebrow">iPhone · ${e.year}</p>
        <h1 class="h1">${_t(e.name)}</h1>
        <p class="lead">${_t(il(e))} · ${_t(e.chip)} · ${_t(e.cameras.split(" : ")[0].split(",")[0])}</p>
      </div>
      <div class="stage-box">
        <div class="stage" data-viewer="${e.id}:0:back"></div>
        <div class="views" role="group" aria-label="Vue">
          <button type="button" data-view="front">Face</button><button type="button" data-view="back" aria-pressed="true">Dos</button><button type="button" data-view="side">Profil</button>
        </div>
        <p class="drag-hint">Glissez pour faire tourner</p>
      </div>
      <div class="finish">
        <p class="finish-name" id="finish-name">${_t(e.colors[0].n)}</p>
        <div class="swatches" role="radiogroup" aria-label="Finition">
          ${e.colors.map((a,c)=>`<button type="button" role="radio" class="sw" data-color="${c}" aria-checked="${c===0}" aria-label="${_t(a.n)}" style="--c:${a.hex}"></button>`).join("")}
        </div>
        <p class="tint-note">Teintes approximatives des finitions officielles.</p>
      </div>
    </div>
  </section>
  <section class="specs" id="specs-${e.id}">
    <div class="wrap">
      <h2 class="h2">Caractéristiques techniques</h2>
      <dl class="spec-grid">
        ${sl.map(([a,c])=>`<div class="spec"><dt>${a}</dt><dd>${c(e)?_t(c(e)):nl}</dd></div>`).join("")}
      </dl>
      <div class="pager">
        ${o?`<a href="#m-${o.id}">‹ ${_t(o.name)}</a>`:"<span></span>"}
        ${s?`<a href="#m-${s.id}">${_t(s.name)} ›</a>`:"<span></span>"}
      </div>
    </div>
  </section>`}function X0(){const i=ct.compare.slice(0,3),e=n=>ga.map(r=>`<optgroup label="${r}">${pn.filter(s=>s.year===r).map(s=>`<option value="${s.id}" ${s.id===n?"selected":""}>${_t(s.name)}</option>`).join("")}</optgroup>`).join(""),t=i.map(n=>sn[n]);return`
  <section class="page-head wrap">
    <h1 class="h1">Comparer</h1>
    <p class="lead">Choisissez jusqu’à trois modèles. Les lignes qui diffèrent sont mises en avant.</p>
  </section>
  <div class="wrap cmp-wrap">
    <div class="cmp-table" style="--n:${t.length}">
      <div class="cmp-row head"><div></div>${t.map((n,r)=>`
        <div class="cmp-col">
          <label class="sr" for="cmp-${r}">Modèle ${r+1}</label>
          <select id="cmp-${r}" data-cmp-slot="${r}">${e(n.id)}</select>
          ${ss(n.id)}
          ${rl(n)}
          <a class="more" href="#m-${n.id}">Voir le modèle</a>
        </div>`).join("")}</div>
      ${sl.map(([n,r])=>{const s=t.map(a=>r(a));return`<div class="cmp-row ${new Set(s.map(a=>a??"")).size>1?"diff":""}"><div class="cmp-k">${n}</div>${s.map(a=>`<div class="cmp-v">${a?_t(a):nl}</div>`).join("")}</div>`}).join("")}
    </div>
  </div>`}function q0(i){const e=rs.find(t=>t.id===i);return e?`
  <section class="product-hero">
    <div class="wrap ph-in">
      <div class="ph-copy">
        <p class="eyebrow">${e.name}</p>
        <h1 class="h1">${e.flagship}</h1>
        <p class="lead">Modèle 3D de référence de la famille. La gamme complète depuis 2016, avec toutes ses finitions et ses fiches techniques, est en préparation.</p>
      </div>
      <div class="stage-box"><div class="stage" data-family="${e.id}"></div><p class="drag-hint">Glissez pour faire tourner</p></div>
    </div>
  </section>`:_a()}function _a(){return'<section class="page-head wrap"><h1 class="h1">Page introuvable</h1><p class="lead"><a class="more" href="#home">Retour à l’accueil</a></p></section>'}function rr(){const i=location.hash.slice(1)||"home";let e,t=i;i==="home"?e=V0():i==="iphone"?e=k0():i==="compare"?e=X0():i.startsWith("m-")?(e=W0(i.slice(2)),t="iphone"):i.startsWith("f-")?e=q0(i.slice(2)):e=_a(),Tn.innerHTML=e,document.querySelectorAll("[data-nav]").forEach(r=>r.setAttribute("aria-current",String(r.dataset.nav===t))),document.body.dataset.page=i.split("-")[0];const n=ct.pendingYear&&document.getElementById(`y${ct.pendingYear}`);ct.pendingYear=null,n?n.scrollIntoView():window.scrollTo({top:0,behavior:"instant"}),Y0(),H0(),document.title=i.startsWith("m-")&&sn[i.slice(2)]?`${sn[i.slice(2)].name} · Catalogue`:"Catalogue iPhone"}function Y0(){const i=Tn.querySelector("[data-viewer], [data-family]");if(i)if(yi.mount(i),i.dataset.viewer){const[e,t,n]=i.dataset.viewer.split(":");yi.showIPhone(sn[e],+t,{view:n})}else{const e=rs.find(t=>t.id===i.dataset.family);yi.showObject({group:e.build(yi.renderer)},{view:e.view})}}Tn.addEventListener("click",i=>{var t;const e=i.target.closest("button, a");if(e)if(e.dataset.filter)ct.filter=e.dataset.filter,rr();else if(e.dataset.cmp){const n=e.dataset.cmp;for(ct.compare=ct.compare.includes(n)?ct.compare.filter(r=>r!==n):[n,...ct.compare].slice(0,3);ct.compare.length<2;)ct.compare.push(pn.find(r=>!ct.compare.includes(r.id)).id);Tn.querySelectorAll("[data-cmp]").forEach(r=>{const s=ct.compare.includes(r.dataset.cmp);r.setAttribute("aria-pressed",String(s)),r.textContent=s?"Dans la comparaison":"Comparer"})}else if(e.dataset.cmpGo){const n=e.dataset.cmpGo;ct.compare=[n,...ct.compare.filter(r=>r!==n)].slice(0,3),location.hash="compare"}else if(e.dataset.color){const n=+e.dataset.color;yi.setColor(n),Tn.querySelectorAll("[data-color]").forEach(s=>s.setAttribute("aria-checked",String(+s.dataset.color===n)));const r=location.hash.slice(3);document.getElementById("finish-name").textContent=sn[r].colors[n].n}else e.dataset.view?(yi.setView(e.dataset.view),Tn.querySelectorAll("[data-view]").forEach(n=>n.setAttribute("aria-pressed",String(n===e)))):e.dataset.scroll?(i.preventDefault(),(t=document.querySelector(".specs"))==null||t.scrollIntoView({behavior:"smooth"})):e.dataset.year&&(i.preventDefault(),ct.filter="all",ct.pendingYear=e.dataset.year,location.hash==="#iphone"?rr():location.hash="iphone")});Tn.addEventListener("change",i=>{const e=i.target.closest("[data-cmp-slot]");e&&(ct.compare[+e.dataset.cmpSlot]=e.value,rr())});window.addEventListener("hashchange",rr);rr();document.body.classList.add("ready");
