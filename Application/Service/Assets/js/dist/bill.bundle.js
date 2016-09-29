webpackJsonp([9],{0:/*!***************************!*\
  !*** ../js/entry/bill.js ***!
  \***************************/
function(n,e,t){"use strict";var i=t(4),a=i.combinePageModule;a({bill:t(126)})},112:/*!*************************!*\
  !*** ../js/api/bill.js ***!
  \*************************/
function(n,e,t){"use strict";var i=t(8),a=i.concatApi,o={comBillpayment:"/Service-Bill-invoice"};n.exports=a(o)},126:/*!**************************!*\
  !*** ../js/page/bill.js ***!
  \**************************/
function(n,e,t){(function(e,i){"use strict";var a=t(6),o=t(112),c=t(7);t(3);var s={init:function(){var n=this;c.getYearMonth(),e('[data-act="invoice"]').click(function(){var o=e(this).data("price"),c={id:e('[name="id"]').val(),amount:o,company:e('[name="company_name"]').val(),contact_name:e('[name="contact_name"]').val(),contact_phone:e('[name="contact_phone"]').val()};i.open({title:"开具发票",content:a.render(t(234).template)(c),btn:["确定","取消"],area:"500px",yes:function(){e("#J_invoice-form-layer").submit()},success:function(){n.validate()}})})},validate:function(){e("#J_invoice-form-layer").validate({submitHandler:function(){var n={id:e('[name="id"]').val(),status:1,invoice_amount:e('[data-act="invoice"]').data("price").split(",").join("")-0,invoice_express_company:e('[name="invoice_express_company"]').val(),invoice_express_no:e('[name="invoice_express_no"]').val(),invoice_consignee:e('[name="invoice_consignee"]').val(),invoice_consignee_phone:e('[name="invoice_consignee_phone"]').val()};o.comBillpayment(n,function(n){var e=n.msg;i.msg(e)},function(n){var e=n.msg;i.msg(e)})},rules:{invoice_consignee_phone:{istelephone:!0}},message:{}})}};n.exports=s}).call(e,t(1),t(2))},212:/*!******************************************************************************************************************************!*\
  !*** F:/item/zbw/~/tpl-html-loader!F:/item/zbw/~/tpl-loader-ie8/lib/selector.js?type=template&index=0!../js/tpl/invoice.vue ***!
  \******************************************************************************************************************************/
function(n,e){n.exports='\n\n<div class="layer-cnt">\n	<form id="J_invoice-form-layer" autocomplete="off" method="post">\n		<input type="hidden" name="id" value="{{ id }}" />\n		<div class="layer-pannel clearfix" >\n			<p class="layer-title col-12">企业信息</p>\n			<p class="layer-comName col-8 ellipsis">公司名称：{{company}}</p>\n			<p class="layer-amount col-4 text-right">金额：<em class="c-money f-bold">{{ amount }}</em> 元</p>\n		</div>\n		<div class="layer-pannel">\n			<p class="layer-title">填写快递信息</p>\n			<dl class="horizontal horizontal-6em">\n	            <dt class="left text-right">收件人名称：</dt>\n	            <dd class="right">\n	                <input type="text" name="invoice_consignee" class="ipt size3" value="{{contact_name}}" required />\n	            </dd>\n	        </dl>\n	        <dl class="horizontal horizontal-6em">\n	            <dt class="left text-right">联系电话：</dt>\n	            <dd class="right">\n	                <input type="text" name="invoice_consignee_phone" class="ipt size3" value="{{contact_phone}}" required />\n	            </dd>\n	        </dl>\n	        <dl class="horizontal horizontal-6em">\n	            <dt class="left text-right">快递公司：</dt>\n	            <dd class="right ">\n	                <input type="text" name="invoice_express_company" class="ipt size3" required />\n	            </dd>\n	        </dl>\n	        <dl class="horizontal horizontal-6em">\n	            <dt class="left text-right">快递号：</dt>\n	            <dd class="right">\n	                <input type="text" name="invoice_express_no" class="ipt size3" required />\n	            </dd>\n	        </dl>\n		</div>\n	</form>\n</div>\n'},234:/*!*****************************!*\
  !*** ../js/tpl/invoice.vue ***!
  \*****************************/
function(n,e,t){var i,a;a=t(212),n.exports=i||{},a&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=a)}});
//# sourceMappingURL=bill.bundle.js.map