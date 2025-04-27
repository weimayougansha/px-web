import { E as ElCard } from './index3.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import './install.mjs';
import 'lodash-unified';
import '@vue/shared';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import 'vue-router';
import '@vueuse/core';

const _imports_0 = publicAssetsURL("/fwzq.svg");

const _imports_1 = publicAssetsURL("/fwnr.svg");

const _imports_2 = publicAssetsURL("/xmbj.svg");

const _imports_3 = publicAssetsURL("/jjfa.svg");

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_card = ElCard;
  _push(`<!--[--><div class="container text-center text-white bg-[1A1A1A] h-[850px]"><h1> 项目名称 </h1><h2> 品牌logo </h2><p> xxxxxxxxxxxxxxxxxxx </p></div><div class="container mx-auto p-4"><div class="grid grid-cols-4 gap-4 text-white">`);
  _push(ssrRenderComponent(_component_el_card, { style: { "max-width": "480px", "color": "white", "background": "black" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col items-center justify-center bg-black rounded-md"${_scopeId}><img${ssrRenderAttr("src", _imports_0)}${_scopeId}><span class="text-[#4D4D4D]"${_scopeId}>服务周期</span><span class="text-white"${_scopeId}>2</span><span class="text-[#4D4D4D]"${_scopeId}>weeks</span></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col items-center justify-center bg-black rounded-md" }, [
            createVNode("img", { src: _imports_0 }),
            createVNode("span", { class: "text-[#4D4D4D]" }, "服务周期"),
            createVNode("span", { class: "text-white" }, "2"),
            createVNode("span", { class: "text-[#4D4D4D]" }, "weeks")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_el_card, { style: { "max-width": "480px", "color": "white", "background": "black" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col items-center justify-center bg-black rounded-md"${_scopeId}><img${ssrRenderAttr("src", _imports_1)}${_scopeId}><span class="text-[#4D4D4D]"${_scopeId}>服务内容</span></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col items-center justify-center bg-black rounded-md" }, [
            createVNode("img", { src: _imports_1 }),
            createVNode("span", { class: "text-[#4D4D4D]" }, "服务内容")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_el_card, { style: { "max-width": "480px", "color": "white", "background": "black" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col items-center justify-center bg-black rounded-md"${_scopeId}><img${ssrRenderAttr("src", _imports_2)}${_scopeId}><span class="text-[#4D4D4D]"${_scopeId}>项目背景</span><span${_scopeId}> xxxxxxxxxxxxxxxxx </span></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col items-center justify-center bg-black rounded-md" }, [
            createVNode("img", { src: _imports_2 }),
            createVNode("span", { class: "text-[#4D4D4D]" }, "项目背景"),
            createVNode("span", null, " xxxxxxxxxxxxxxxxx ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_el_card, { style: { "max-width": "480px", "color": "white", "background": "black" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col items-center justify-center bg-black rounded-md"${_scopeId}><img${ssrRenderAttr("src", _imports_3)}${_scopeId}><span class="text-[#4D4D4D]"${_scopeId}>解决方案</span><span${_scopeId}> xxxxxxxxxxxxxxxxxx </span></div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col items-center justify-center bg-black rounded-md" }, [
            createVNode("img", { src: _imports_3 }),
            createVNode("span", { class: "text-[#4D4D4D]" }, "解决方案"),
            createVNode("span", null, " xxxxxxxxxxxxxxxxxx ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Service/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue6.mjs.map
