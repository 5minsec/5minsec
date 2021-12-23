"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[545],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return t?n.createElement(h,o(o({ref:r},u),{},{components:t})):n.createElement(h,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1937:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:1},s="grep",c={unversionedId:"tools/grep",id:"tools/grep",title:"grep",description:"Get e-mails:",source:"@site/docs/tools/grep.md",sourceDirName:"tools",slug:"/tools/grep",permalink:"/site/docs/tools/grep",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/grep.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Awesome Links",permalink:"/site/docs/awesome-links"},next:{title:"S3 Bucket",permalink:"/site/docs/tools/s3-bucket"}},u=[{value:"Get e-mails:",id:"get-e-mails",children:[],level:3},{value:"Get valid IP addresses:",id:"get-valid-ip-addresses",children:[],level:3},{value:"Search for a text in any files of the current dir",id:"search-for-a-text-in-any-files-of-the-current-dir",children:[],level:3},{value:"Searching for URLs:",id:"searching-for-urls",children:[],level:3},{value:"Exclude result in search:",id:"exclude-result-in-search",children:[],level:3},{value:"Recursive search only for specific type of files:",id:"recursive-search-only-for-specific-type-of-files",children:[],level:3}],p={toc:u};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grep"},"grep"),(0,i.kt)("h3",{id:"get-e-mails"},"Get e-mails:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'grep -E -o "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}\\b"\n')),(0,i.kt)("h3",{id:"get-valid-ip-addresses"},"Get valid IP addresses:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"\n')),(0,i.kt)("h3",{id:"search-for-a-text-in-any-files-of-the-current-dir"},"Search for a text in any files of the current dir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'grep -r "MY SEARCH TERM"\n')),(0,i.kt)("h3",{id:"searching-for-urls"},"Searching for URLs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grep -Eo '(http|https)://[^/\"]+'\n")),(0,i.kt)("h3",{id:"exclude-result-in-search"},"Exclude result in search:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'grep -v "TERM TO EXCLUDE"\n')),(0,i.kt)("h3",{id:"recursive-search-only-for-specific-type-of-files"},"Recursive search only for specific type of files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# will search for the regex only in html files\n# in the current directory recursively\ngrep --include=\\*.html -rE "MY_REGEX" ./\n')))}f.isMDXComponent=!0}}]);