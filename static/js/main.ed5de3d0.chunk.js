(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz__ActiveQuiz--1xPLH",Question:"ActiveQuiz__Question--2AtZS",FontLicense:"ActiveQuiz__FontLicense--1SGxn"}},,function(e,t,n){e.exports={Quiz:"Quiz__Quiz--3J8Ip",QuizWrapper:"Quiz__QuizWrapper--2cJp0"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem__AnswerItem--2xulf",success:"AnswerItem__success--17tyF",error:"AnswerItem__error--2G-OL"}},function(e,t,n){e.exports={Button:"Button__Button--QI7b2",disabled:"Button__disabled--1Vm-0",error:"Button__error--tZCD8",success:"Button__success--3d-85",primary:"Button__primary--2Lss2"}},function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz__FinishedQuiz--3-Dtz",success:"FinishedQuiz__success--1N7XY",error:"FinishedQuiz__error--34veZ"}},,,function(e,t,n){e.exports={Layout:"Layout__Layout--2C2_c"}},function(e,t,n){e.exports={AnswersList:"AnswersList__AnswersList--1WLwo"}},function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),r=n(13),a=n.n(r),o=(n(22),n(1)),u=n(2),c=n(4),l=n(3),d=n(5),h=n(14),w=n.n(h),m=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={menu:!1},n.toggleMenuHandler=function(){n.setState({menu:!n.state.menu})},n.menuCloseHandler=function(){n.setState({menu:!1})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:w.a.Layout},s.a.createElement("main",null,this.props.children))}}]),t}(i.Component),f=n(7),y=n(8),p=n.n(y),v=n(6),g=n.n(v),x=n(15),A=n.n(x),_=n(9),b=n.n(_),Q=function(e){var t=[b.a.AnswerItem];return e.state&&t.push(b.a[e.state]),s.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},k=function(e){return s.a.createElement("ul",{className:A.a.AnswersList},e.answers.map(function(t,n){return s.a.createElement(Q,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})}))},z=n(10),E=n.n(z),I=function(e){var t=[E.a.Button,E.a[e.type]];return s.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={answerId:null},n.onAnswerClickHandler=function(e){n.setState({answerId:e})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.question,i=t.answerNumber,r=t.quizLength,a=t.state,o=t.answers,u=t.getAnswer;return s.a.createElement("div",{className:g.a.ActiveQuiz},s.a.createElement("p",{className:g.a.Question},s.a.createElement("span",null,s.a.createElement("strong",null,i,"."),"\xa0",n),s.a.createElement("small",{className:g.a.FontLicense},i," \u0438\u0437 ",r)),s.a.createElement(k,{state:a,answers:o,onAnswerClick:this.onAnswerClickHandler}),s.a.createElement(I,{type:"primary",onClick:function(){return u(e.state.answerId)}},"Next"))}}]),t}(i.Component),C=n(11),O=n.n(C),q=function(e){var t=Object.keys(e.results).reduce(function(t,n){return"success"===e.results[n]&&t++,t},0);return s.a.createElement("div",{className:O.a.FinishedQuiz},s.a.createElement("ul",null,e.quiz.map(function(t,n){var i=["fa","error"===e.results[t.id]?"fa-times":"fa-check",O.a[e.results[t.id]]];return s.a.createElement("li",{key:n},s.a.createElement("strong",null,n+1),".\xa0",t.question,s.a.createElement("i",{className:i.join(" ")}))})),s.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),s.a.createElement("div",null,s.a.createElement(I,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),s.a.createElement(I,{onClick:e.onRetry,type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432")))},S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={results:{},userChoice:null,isFinished:!1,activeQuestion:0,answerState:null,quiz:[{question:"How many hours a day do you watch TV?",rightAnswerId:3,id:1,answers:[{text:"On Tuesday",id:1},{text:"I watch the news",id:2},{text:"About two hours",id:3},{text:"In my living",id:4}]},{question:"What will you do this afternoon?",rightAnswerId:1,id:2,answers:[{text:"I'll play soccer",id:1},{text:"I was playing soccer",id:2},{text:"I play soccer",id:3},{text:"I played soccer",id:4}]},{question:"I got up __ than my mother",rightAnswerId:2,id:3,answers:[{text:"the earliest",id:1},{text:"earlier",id:2},{text:"earliest",id:3},{text:"early",id:4}]},{question:'How do you spell "dog" ?',rightAnswerId:3,id:4,answers:[{text:"Cat",id:1},{text:"No, i don't",id:2},{text:"D-O-G",id:3},{text:"I have one dog",id:4}]},{question:"Where do you usually eat lunch?",rightAnswerId:1,id:5,answers:[{text:"In the cafeteria",id:1},{text:"With Jane",id:2},{text:"Sandwich",id:3},{text:"At 12:00",id:4}]},{question:"What do you like to drink?",rightAnswerId:4,id:6,answers:[{text:"Two ",id:1},{text:"Saturday evening",id:2},{text:"With my friends",id:3},{text:"Coffee",id:4}]},{question:"Who do you usually go shopping with?",rightAnswerId:1,id:7,answers:[{text:"By myself",id:1},{text:"Downtown",id:2},{text:"On Sunday",id:3},{text:"Two or three hours",id:4}]},{question:"What is your busiest day of the week?",rightAnswerId:1,id:8,answers:[{text:"Tuesday",id:1},{text:"Every day",id:2},{text:"In the morning",id:3},{text:"Last week",id:4}]},{question:"How long did you study last night?",rightAnswerId:3,id:9,answers:[{text:"With Bob",id:1},{text:"In my room",id:2},{text:"For three hours",id:3},{text:"English",id:4}]},{question:"Will you __ your car to school tomorrow?",rightAnswerId:3,id:10,answers:[{text:"driving",id:1},{text:"drives",id:2},{text:"drive",id:3},{text:"drove",id:4}]}]},n.onAnswerClickHandler=function(e){n.setState({userChoice:e});var t=n.state.quiz[n.state.activeQuestion],i=n.state.results,s=window.setTimeout(function(){n.isQuizFinished()?n.setState({isFinished:!0}):n.setState({activeQuestion:n.state.activeQuestion+1,answerState:null,userChoice:null}),window.clearTimeout(s)},1e3);t.rightAnswerId===e?(i[t.id]="success",n.setState({answerState:Object(f.a)({},e,"success"),results:i})):(i[t.id]="error",n.setState({answerState:Object(f.a)({},e,"error"),results:i}))},n.retryHandler=function(){n.setState({activeQuestion:0,answerState:null,isFinished:!1,results:{}})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"render",value:function(){return s.a.createElement("div",{className:p.a.Quiz},s.a.createElement("div",{className:p.a.QuizWrapper},s.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),this.state.isFinished?s.a.createElement(q,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):s.a.createElement(j,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,getAnswer:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),t}(i.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement(m,null,s.a.createElement(S,null))}}]),t}(i.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(s.a.createElement(L,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/DemoQuiz",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/DemoQuiz","/service-worker.js");N?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):W(e)})}}()}],[[16,1,2]]]);
//# sourceMappingURL=main.ed5de3d0.chunk.js.map