webpackJsonp([1],{0:/*!*******************************!*\
  !*** ../js/entry/loginReg.js ***!
  \*******************************/
function(e,t,a){"use strict";var s=a(/*! modules/util */3),i=s.combinePageModule;i({getBackPass:a(/*! page/getBackPass */75),getBackPass2:a(/*! page/getBackPass2 */76),getBackPass3:a(/*! page/getBackPass3 */77),firmRegister1:a(/*! page/firmRegister1 */73),firmRegister2:a(/*! page/firmRegister2 */74),login:a(/*! page/login */44)})},26:/*!*****************************!*\
  !*** ../js/modules/form.js ***!
  \*****************************/
function(e,t,a){(function(e){"use strict";t.showPsw=function(){e(".J_show-psw").click(function(){var t=e(this),a=t.closest(".input-box").find("input");"password"===a.attr("type")?(t.addClass("active"),a.attr("type","text")):(t.removeClass("active"),a.attr("type","password"))})},t.pswStronge=function(e){var t=/^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[a-z])(?=.*\W))|((?=.*[A-Z])(?=.*[0-9])(?=.*\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\W))).*$/,a=/^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[a-z])(?=.*\W))|((?=.*[A-Z])(?=.*\W))|((?=.*[0-9])(?=.*\W))).*$/;return t.test(e)?3:a.test(e)?2:1},t.togglePswStronge=function(){var a=arguments.length<=0||void 0===arguments[0]?e("#J_pswStronge"):arguments[0],s=t.pswStronge;a.on("keyup keydwon afterpaste change",function(){var t=this.value,a=1,i=null,r=e(".level-txt");switch(t?(a=s(t),i=e(".level-item"+a),i.addClass("active").nextAll(".level-item").removeClass("active"),i.prevAll(".level-item").addClass("active")):e(".level-item").removeClass("active"),a){case 3:r.text("高");break;case 2:r.text("中");break;default:r.text("低")}})}}).call(t,a(/*! jquery */1))},73:/*!***********************************!*\
  !*** ../js/page/firmRegister1.js ***!
  \***********************************/
function(e,t,a){(function(t,s){"use strict";var i=a(/*! modules/form */26),r=i.showPsw,n=i.togglePswStronge,o=a(/*! api/permit */5),l=o.firmRegister,c=a(/*! plug/validate/index */6),u=c.password,f=c.r_password,d=c.verify_code,m=c.username;e.exports={init:function(){n(),t(".J_btn-submit").click(function(){t(this).closest("form").submit()}),this.validate(),r()},validate:function(){var e=t("#J_reg-form"),a=e.find(".J_btn-submit");return e.validate({submitHandler:function(t){var i=e.serializeArray(),r=a.data("flag"),n=a.val();if(!r)return a.data("flag",!0).val("提交中..."),l(i,function(){s.msg("提交成功"),location.href="/Member-firmRegister2.html"},function(t){var a=t.msg;a&&s.msg(a),e.find(".verifyimg").click()}).complete(function(){a.data("flag",!1).val(n)}),!1},rules:{password:u.rules,r_password:{equalTo:"#J_pswStronge"},username:t.extend(m.rules,{remote:{url:"/Member-repeatUserName",type:"post",dataType:"json",dataFilter:function(e){try{var a=t.parseJSON(e);return a.status-0===0}catch(s){return!0}}}})},messages:{password:u.messages,r_password:f.messages,username:t.extend(m.messages,{remote:'该用户名已存在，立刻<a href="/Member-firmLogin" title="登录"> 登录 </a>或更换用户名'}),verify_code:d.messages}})}}}).call(t,a(/*! jquery */1),a(/*! layer */2))},74:/*!***********************************!*\
  !*** ../js/page/firmRegister2.js ***!
  \***********************************/
function(e,t,a){(function(t,s){"use strict";var i=a(/*! modules/form */26),r=i.showPsw,n=i.togglePswStronge,o=a(/*! api/permit */5),l=o.firmRegister2;a(/*! plug/validate/index */6),e.exports={init:function(){n(),t(".J_btn-submit").click(function(){t(this).closest("form").submit()}),this.validate(),r()},validate:function(){var e=t("#J_reg-form"),a=e.find(".J_btn-submit");return e.validate({submitHandler:function(t){var i=e.serializeArray(),r=a.data("flag"),n=a.val();if(!r)return a.data("flag",!0).val("提交中..."),l(i,function(e){var t=e.url;s.msg("提交成功"),location.href=t},function(e){var t=e.msg;t&&s.msg(t)}).complete(function(){a.data("flag",!1).val(n)}),!1},rules:{contact_phone:{isTel:!0}},messages:{company_name:{required:"请输入企业名称"},email:{required:"请输入邮箱"},contact_name:{required:"请输入联系人姓名"},contact_phone:{required:"请输入联系人电话"}}})}}}).call(t,a(/*! jquery */1),a(/*! layer */2))},75:/*!*********************************!*\
  !*** ../js/page/getBackPass.js ***!
  \*********************************/
function(e,t,a){(function(t,s){"use strict";var i=a(/*! api/permit */5),r=i.getBackPass1,n=a(/*! plug/validate/index */6),o=n.verify_code,l=n.username;e.exports={init:function(){t(".J_btn-submit").click(function(){t(this).closest("form").submit()}),this.validate()},validate:function(){var e=t("#findPsw-form");return e.validate({submitHandler:function(e){var a=t(e),i=a.serializeArray(),n=a.find(".J_btn-submit"),o=n.data("flag"),l=n.val();if(!o)return n.data("flag",!0),n.val("提交中...").addClass("disabled"),r(i,function(e){var t=e.url,a=void 0===t?"/Member-getBackPass2":t;location.href=a},function(e){var t=e.msg;t&&s.alert(t),a.find(".verifyimg").click()}).complete(function(){n.val(l).removeClass("disabled"),n.data("flag",!1)}),!1},rules:{user_name:l.rules},messages:{user_name:l.messages,verify_code:o.messages}})}}}).call(t,a(/*! jquery */1),a(/*! layer */2))},76:/*!**********************************!*\
  !*** ../js/page/getBackPass2.js ***!
  \**********************************/
function(e,t,a){(function(t,s){"use strict";var i=a(/*! api/permit */5),r=i.getBackPass2;e.exports={init:function(){var e=this;t(".J_send-email").click(function(){e.sendEmail(t(this))})},sendEmail:function(e){var t=e.data("flag"),a=e.text();t||(e.data("flag",!0),e.text("发送中...").addClass("disabled"),r({},function(){s.msg("发送成功,请登录邮箱验证")},function(){s.msg("发送失败，请重新发送")}).complete(function(){e.text(a).removeClass("disabled"),e.data("flag",!1)}))}}}).call(t,a(/*! jquery */1),a(/*! layer */2))},77:/*!**********************************!*\
  !*** ../js/page/getBackPass3.js ***!
  \**********************************/
function(e,t,a){(function(t,s){"use strict";var i=a(/*! modules/form */26),r=i.showPsw,n=i.togglePswStronge,o=a(/*! api/permit */5),l=o.modifyPassword,c=a(/*! plug/validate/index */6),u=c.password,f=c.r_password;e.exports={init:function(){t(".J_btn-submit").click(function(){t(this).closest("form").submit()}),n(),this.validate(),r()},validate:function(){var e=t("#J_reg-form"),a=e.find(".J_btn-submit");return e.validate({submitHandler:function(t){var i=e.serializeArray(),r=a.data("flag"),n=a.val();if(!r)return a.data("flag",!0).val("提交中..."),l(i,function(e){var t=e.url;s.msg("修改成功"),location.href=t},function(e){var t=e.msg;t&&s.msg(t)}).complete(function(){a.data("flag",!1).val(n)}),!1},rules:{password:u.rules,r_password:{equalTo:"#J_pswStronge"}},messages:{password:t.extend(u.messages,{required:"请输入新密码"}),r_password:f.messages}})}}}).call(t,a(/*! jquery */1),a(/*! layer */2))}});
//# sourceMappingURL=loginReg.bundle.js.map