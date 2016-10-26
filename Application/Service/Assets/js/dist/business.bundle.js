webpackJsonp([6],{0:/*!*******************************!*\
  !*** ../js/entry/business.js ***!
  \*******************************/
function(t,e,a){"use strict";var n=a(/*! modules/util */4),i=n.combinePageModule;i({salary:a(/*! page/salary */142),company_declare:a(/*! page/company_declare */132)})},61:/*!*****************************!*\
  !*** ../js/api/business.js ***!
  \*****************************/
function(t,e,a){"use strict";var n=a(/*! ./config */8),i=n.concatApi,r={updateSalaryOrder:"Service-Business-updateSalaryOrder",deleteSalaryOrder:"Service-Business-deleteSalaryOrder",updateInsuranceOrder:"Service-Business-updateInsuranceOrder"};t.exports=i(r)},63:/*!*********************************!*\
  !*** ../js/modules/business.js ***!
  \*********************************/
function(t,e,a){(function(t,n){"use strict";e.businessHandler=function(){var e=a(/*! art-template */5),i=a(/*! api/business */61),r=i.updateSalaryOrder,c=i.updateInsuranceOrder,l=a(/*! plug/icheck/index */6);t(".payroll-handle").click(function(i){var s=this,o=t(".single-icheck").filter(":checked").length;0===o?n.msg("请选择记录~"):!function(){var i=t(s).data(),o=i.act,u=i.page,d="",p=t("#J_salary-form").serializeArray();o&&!function(){var i=null,s="",f={},m={},v={},h="declare"==u?c:r;switch(o){case"batch_audit":v={value:1,text:"审核"},s="批量审核";break;case"batch_transact":v={value:3,text:"办理"},s="批量办理";break;default:v={value:3,text:"发放"},s="批量发放"}d=e.render(a(/*! tpl/batch_audit.vue */236).template)(v),n.open({title:s,skin:"batch-layer",content:d,btn:["确定","取消"],yes:function(){i.submit()},success:function(){i=t(".batch-layer form"),l.iCheck(),l.checkAll(),i.validate({submitHandler:function(e){var a=t(e).serializeArray();h(a.concat(p),function(t){var e=t.msg,a=void 0===e?s+"成功":e;n.msg(a,function(){location.href=location.href})},function(t){var e=t.msg,a=void 0===e?s+"失败":e;n.msg(a)})},rules:f,messages:m})}})}()}()})}}).call(e,a(/*! jquery */1),a(/*! layer */2))},132:/*!*************************************!*\
  !*** ../js/page/company_declare.js ***!
  \*************************************/
function(t,e,a){(function(e){"use strict";var n=a(/*! plug/icheck/index */6),i=a(/*! modules/business */63),r=i.businessHandler,c=a(/*! plug/datetimepicker/index */7),l=a(/*! modules/date */19),s=l.countDown,o={init:function(){n.init(),n.checkAll(),c.getYearMonth(),r(),e(".deadline").each(function(){var t=e(this),a=t.text().trim(),n=new Date(a),i=t.data(),r=i.timer;"/"==a?t.html("/"):n.getTime()<(new Date).getTime()?t.html("已截止"):(r=setInterval(function(){var e=s(n),a=e.dd,i=e.hh,c=e.mm,l=e.ss;(!e||n.getTime()<(new Date).getTime())&&clearInterval(r),t.html(a+"天"+i+"小时"+c+"分"+l+"秒")},1e3),t.data("timer",r))})}};t.exports=o}).call(e,a(/*! jquery */1))},142:/*!****************************!*\
  !*** ../js/page/salary.js ***!
  \****************************/
function(t,e,a){(function(e,n){"use strict";var i=a(/*! plug/icheck/index */6),r=a(/*! plug/webuploader/webuploader */34),c=a(/*! api/business */61),l=c.deleteSalaryOrder,s=a(/*! plug/datetimepicker/index */7),o=a(/*! modules/date */19),u=o.dateRange,d=a(/*! modules/business */63),p=d.businessHandler;a(/*! plug/validate/index */3);var f={init:function(){var t=this;i.init(),i.checkAll(),p(),t.upload(),s.getYearMonth(),s.getYearMonthDay(),u("declare"),e('[data-act="del-salary"]').click(function(){var t=e(this),a=t.data(),i=a.id,r=a.userid;n.open({title:"删除",content:"是否删除？",btn:["删除","取消"],yes:function(){l({id:i,userId:r},function(e){var a=e.msg,i=void 0===a?"删除成功":a;n.msg(i),t.closest("tr").remove()},function(t){var e=t.msg,a=void 0===e?"删除失败":e;n.msg(a)})}})})},upload:function(){var t=r.create({swf:"/Application/Service/Assets/js/plug/webuploader/Uploader.swf",server:"",auto:!1,prepareNextFile:!0,chunked:!0,duplicate:!0,accept:{title:"file",extensions:"",mimeTypes:""},pick:{id:".ipt-file",multiple:!0}});t.on("uploadAccept",function(t,e){}),t.on("uploadFinished",function(){}),e('[data-act="upload"]').click(function(){t.upload()})}};t.exports=f}).call(e,a(/*! jquery */1),a(/*! layer */2))},213:/*!**********************************************************************************************************************************!*\
  !*** D:/item/zbw/~/tpl-html-loader!D:/item/zbw/~/tpl-loader-ie8/lib/selector.js?type=template&index=0!../js/tpl/batch_audit.vue ***!
  \**********************************************************************************************************************************/
function(t,e){t.exports='\n\n<div class="layer-cnt">\n\t<form method="post" id="batchAudit_form" autocomplete="off">\n\t\t<div class="layer-pannel">\n\t\t\t<p>\n\t\t\t\t<label class="radio-label">\n\t\t\t\t\t<input type="radio" name="type" value="{{value}}" class="icheck" checked />\n\t\t\t\t\t{{text}}成功\n\t\t\t\t</label>\n\t\t\t\t{{if text != \'发放\'}}\n\t\t\t\t<label class="radio-label">\n\t\t\t\t\t<input type="radio" name="type" value="-{{value}}" class="icheck" />\n\t\t\t\t\t{{text}}失败\n\t\t\t\t</label>\n\t\t\t\t{{/if}}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label>备注：</label><textarea class="remark" name="remark"></textarea>\n\t\t\t</p>\n\t\t</div>\n\t</form>\n</div>\n'},236:/*!*********************************!*\
  !*** ../js/tpl/batch_audit.vue ***!
  \*********************************/
function(t,e,a){var n,i;i=a(/*! !tpl-html-loader!./../../../../../~/tpl-loader-ie8/lib/selector.js?type=template&index=0!./batch_audit.vue */213),t.exports=n||{},i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}});
//# sourceMappingURL=business.bundle.js.map