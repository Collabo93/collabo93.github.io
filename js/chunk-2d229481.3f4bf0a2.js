(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229481"],{dd7b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-container",[a("b-form",{on:{submit:function(s){return t.Login()}}},[a("b-row",{staticClass:"padding-top"},[a("b-col",{attrs:{md:"4"}}),a("b-col",{attrs:{md:"4"}},[a("b-form-input",{staticClass:"style-inputField-scheme",attrs:{type:"text",placeholder:"Username",autocomplete:"off",required:""},model:{value:t.Username,callback:function(s){t.Username=s},expression:"Username"}})],1)],1),a("b-row",{staticClass:"padding-top"},[a("b-col",{attrs:{md:"4"}}),a("b-col",{attrs:{md:"4"}},[a("b-form-input",{staticClass:"style-inputField-scheme",attrs:{type:"password",placeholder:"Password",autocomplete:"off",required:""},model:{value:t.Password,callback:function(s){t.Password=s},expression:"Password"}})],1)],1),a("b-row",{staticClass:"padding-top"},[a("b-col",{attrs:{md:"4"}}),a("b-col",{attrs:{md:"4"}},[a("b-button",{staticClass:"style-button-scheme",attrs:{type:"submit"}},[t._v("Login")])],1)],1)],1)],1)},n=[],o=a("8aa5"),r=a.n(o),i={name:"login",data:function(){return{Username:"",Password:""}},created:function(){var t=this;r.a.auth().onAuthStateChanged((function(s){var a=Boolean(s);a&&t.$router.push("/dashboard")}),(function(t){console.log(t)}))},methods:{Login:function(){r.a.auth().signInWithEmailAndPassword(this.Username,this.Password).then((function(t){return t}),(function(t){alert(t.message)}))}}},l=i,c=a("2877"),u=Object(c["a"])(l,e,n,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d229481.3f4bf0a2.js.map