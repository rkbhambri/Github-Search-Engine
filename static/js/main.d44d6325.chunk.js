(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t(28)},,,,,,function(e,a,t){},function(e,a,t){},,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(11),c=t.n(l),s=(t(18),t(2)),o=t(3),m=t(6),u=t(4),i=t(7),p=t(9),d=function(e){return n.a.createElement("div",{className:"brand col-md-3",style:{color:"#C8C9CB"}},n.a.createElement("h3",null,"Github Search Engine"))},f=(t(19),function(e){return n.a.createElement("div",{className:"search-options col-md-6 offset-1",style:{background:"#fff"}},n.a.createElement("form",{className:"row w-100"},n.a.createElement("div",{className:"searchBy col-md-4"},n.a.createElement("select",{className:"form-control",style:{border:"none",boxShadow:"none"},defaultValue:"username",onChange:function(a){return e.searchOptionHandler(a)}},n.a.createElement("option",{value:"username"},"Username"),n.a.createElement("option",{value:"repo"},"Repo"))),n.a.createElement("div",{className:"search-input col-md-8"},n.a.createElement("input",{type:"text",className:"form-control",style:{border:"none",boxShadow:"none"},placeholder:"Enter A Github Username",onKeyDown:function(a){return e.searchInputHandler(a)}}))))}),h=function(e){return n.a.createElement("div",{className:"header w-100 border p-3",style:{background:"#24282E"}},n.a.createElement("div",{className:"header-content col-md-12 row "},n.a.createElement(d,null),n.a.createElement(f,{searchOptionHandler:function(a){return e.searchOptionHandler(a)},searchInputHandler:function(a){return e.searchInputHandler(a)}})))},E=t(1),v=t.n(E),N=t(8),g=function(){var e=Object(N.a)(v.a.mark(function e(a){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){fetch("https://api.github.com/users/"+a+"?client_id=4ddf9cf2655d5a56cc61&client_secret=695a1d2b6e44672200c8f31a01530f10d9e6206c").then(function(e){return e.json()}).then(function(a){return e(a)})}));case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(N.a)(v.a.mark(function e(a){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){fetch("https://api.github.com/users/"+a+"/repos?client_id=4ddf9cf2655d5a56cc61&client_secret=695a1d2b6e44672200c8f31a01530f10d9e6206c").then(function(e){return e.json()}).then(function(a){return e(a)})}));case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(N.a)(v.a.mark(function e(a){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){fetch("https://api.github.com/search/repositories?q="+a+"&client_id=4ddf9cf2655d5a56cc61&client_secret=695a1d2b6e44672200c8f31a01530f10d9e6206c").then(function(e){return e.json()}).then(function(a){return e(a)})}));case 1:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),y=function(e){console.log("----repoData----",!e.isUserNotFound&&null===e.userData&&null===e.userRepo);var a=null;return e.isUserNotFound||null!==e.userData||null!==e.userRepo||null!==e.repoData||(a=n.a.createElement("div",{className:"content-placeholder text-center pt-5"},n.a.createElement("h2",null,"Please Enter search String"))),a},D=(t(22),function(e){return n.a.createElement("div",{className:"user-info col-md-2 offset-1 p-2"},n.a.createElement("div",{className:"username"},n.a.createElement("h4",{className:"text-center"},e.userData.login)),n.a.createElement("div",{className:"profile-image"},n.a.createElement("img",{className:"image",src:e.userData.avatar_url,alt:"Profile pic not available"})),n.a.createElement("div",{className:"view-profile pt-3"},n.a.createElement("button",{className:"btn form-control btn-md btn-primary"},"View Profile")),n.a.createElement("br",null),n.a.createElement("div",{className:"other-information m-2",style:{fontSize:"14px"}},n.a.createElement("div",{className:"row pl-2 pr-2"},n.a.createElement("div",{className:"public-repo col-md-6 w-50 border p-1"},e.userData.public_repos," Public Repo"),n.a.createElement("div",{className:"public-repo col-md-6 w-50 border p-1"},e.userData.public_gists," Public Gists")),n.a.createElement("div",{className:"row pl-2 pr-2"},n.a.createElement("div",{className:"public-repo col-md-6 w-50 border p-1"},e.userData.followers," Followers"),n.a.createElement("div",{className:"public-repo col-md-6 w-50 border p-1"},e.userData.following," Following"))))}),O=t(5),k=t.n(O),_=function(e){return e.userRepo.map(function(e){return n.a.createElement("div",{className:"repository-info col-md-5 m-2 p-3",key:e.id},n.a.createElement("div",{className:"repo-name"},n.a.createElement("a",{href:e.html_url,target:"_blank",style:{color:"#25282D"},rel:"noopener noreferrer"},n.a.createElement("span",{className:"name"},e.name),n.a.createElement("br",null),n.a.createElement("span",{className:"full-name"},e.full_name))),n.a.createElement("div",{className:"repo-language-info row mt-4"},n.a.createElement("div",{className:"language col-md-4"},n.a.createElement("span",{className:"dot"}),n.a.createElement("span",{className:"pl-1"},e.language)),n.a.createElement("div",{className:"repo-info col-md-7 row ml-2"},n.a.createElement("div",{className:"p-1 border"},e.forks," Forks"),n.a.createElement("div",{className:"p-1 border"},e.watchers," Watchers"),n.a.createElement("div",{className:"p-1 border"},e.stargazers_count," Stars"))),n.a.createElement("div",{className:"repo-lastUpdated mt-4"},"Updated on  "+(a=e.pushed_at,k()(a).format("MMMM Do YYYY, h:mm:ss a"))));var a})},j=(t(24),function(e){return n.a.createElement("div",{className:"repositories-wrapper col-md-8 ml-5"},n.a.createElement("h3",null,"Repositories"),0!==e.userRepo.length?n.a.createElement("div",{className:"repository-info-wrapper row p-2"},n.a.createElement(_,{userRepo:e.userRepo})):n.a.createElement("div",{className:"message pt-4"},n.a.createElement("h5",null,"No repository found")))}),R=function(e){var a=null;return e.isUserNotFound&&(a=n.a.createElement("div",{className:"message text-center pt-5"},n.a.createElement("h2",null,"User not found"))),e.isUserNotFound||null===e.userData||null===e.userRepo||(a=n.a.createElement("div",{className:"user-details row mt-5"},n.a.createElement(D,{userData:e.userData}),n.a.createElement(j,{userRepo:e.userRepo}))),a},x=(t(25),function(e){var a=[];e.repoData.map(function(e){if(null!==e.language){var t=a.findIndex(function(a){return a.language===e.language});-1===t?a.push({language:e.language,count:1}):a[t].count+=1}return 1});var t=a.map(function(e){return n.a.createElement("div",{className:"language-item row w-100",key:e.language},n.a.createElement("div",{className:"language-name col-md-9"},e.language),n.a.createElement("div",{className:"language-count col-md-3"},e.count))});return n.a.createElement("div",{className:"language-container col-md-2 offset-1 p-3",style:{maxHeight:"358px"}},n.a.createElement("div",{className:"heading"},"Languages"),n.a.createElement("div",{className:"language-list mt-3"},t))}),F=(t(26),function(e){return e.repoData.map(function(e){return n.a.createElement("div",{className:"repo-item w-100 row ml-2 mt-4",key:e.id},n.a.createElement("div",{className:"repo-image col-md-3"},n.a.createElement("img",{className:"user-image",src:e.owner.avatar_url,alt:"Not Found"})),n.a.createElement("div",{className:"repo-details p-2"},n.a.createElement("div",{className:"repo-name"},n.a.createElement("a",{href:e.html_url,target:"_blank",style:{color:"#25282D"},rel:"noopener noreferrer"},n.a.createElement("span",{className:"name"},e.name),n.a.createElement("br",null),n.a.createElement("span",{className:"full-name"},e.full_name))),n.a.createElement("div",{className:"repo-description mt-2"},e.description),n.a.createElement("div",{className:"repo-language-info row mt-4"},n.a.createElement("div",{className:"language col-md-4"},n.a.createElement("span",{className:"dot"}),n.a.createElement("span",{className:"pl-1"},e.language)),n.a.createElement("div",{className:"repo-info col-md-7 row ml-2"},n.a.createElement("div",{className:"p-1 ml-2 border"},e.forks," Forks"),n.a.createElement("div",{className:"p-1 ml-2 border"},e.watchers," Watchers"),n.a.createElement("div",{className:"p-1 ml-2 border"},e.stargazers_count," Stars"))),n.a.createElement("div",{className:"repo-lastUpdated mt-4"},"Updated on  "+(a=e.pushed_at,k()(a).format("MMMM Do YYYY, h:mm:ss a")))));var a})}),U=function(e){return n.a.createElement("div",{className:"repositories-wrapper col-md-8 ml-5"},n.a.createElement("h3",{className:"pl-3"},"Repositories"),0!==e.repoData.length&&n.a.createElement("div",{className:"repository-info-wrapper row p-2"},n.a.createElement(F,{repoData:e.repoData})))},H=function(e){var a=null;return null!==e.repoData&&(a=n.a.createElement("div",{className:"repo-data row mt-5"},Array.isArray(e.repoData)&&e.repoData.length>0?n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{repoData:e.repoData}),n.a.createElement(U,{repoData:e.repoData})):n.a.createElement("div",{className:"text-center w-100 pt-4"},n.a.createElement("h5",null,"No repository found")))),a},S=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={searchInput:null,searchBy:"username",userData:null,repoData:null,userRepo:null,isUserNotFound:!1},t.searchOptionHandler=function(e){e.preventDefault(),t.setState(Object(p.a)({},t.state,{searchBy:e.target.value}))},t.searchInputHandler=function(e){var a=t.state.userData,r=t.state.userRepo;t.state.repoData;13===e.which&&(e.preventDefault(),"username"===t.state.searchBy?(a=g(e.target.value),r=b(e.target.value),a.then(function(e){"Not Found"!==e.message&&r.then(function(a){t.setState({userData:e,userRepo:a,isUserNotFound:!1})}),"Not Found"===e.message&&t.setState({isUserNotFound:!0})})):"repo"===t.state.searchBy&&w(e.target.value).then(function(e){t.setState({repoData:e.items})})),t.setState(Object(p.a)({},t.state,{searchInput:e.target.value}))},t}return Object(i.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"layout"},n.a.createElement(h,{searchOptionHandler:function(a){return e.searchOptionHandler(a)},searchInputHandler:function(a){return e.searchInputHandler(a)}}),n.a.createElement(y,this.state),"username"===this.state.searchBy?n.a.createElement(R,this.state):n.a.createElement(H,this.state))}}]),a}(r.Component),I=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(S,null))}}]),a}(r.Component);t(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.d44d6325.chunk.js.map