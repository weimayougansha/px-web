import { E as ElCard } from './index3.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/cpch.svg");

const _imports_1 = publicAssetsURL("/wgsj.svg");

const _imports_2 = publicAssetsURL("/jgsj.svg");

const _imports_3 = publicAssetsURL("/lhkf.svg");

const _imports_4 = publicAssetsURL("/sczz.svg");

const _imports_5 = publicAssetsURL("/lhsb.svg");

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = ElCard;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-10" }, _attrs))} data-v-57912129><div class="grid grid-cols-2 gap-4 p-4" data-v-57912129><div class="p-10 bg-[#333333] text-white" data-v-57912129><h1 data-v-57912129> 技术+美学+制造 </h1><h1 data-v-57912129> 创造“独一无二”的产品 </h1><h2 data-v-57912129> 一站式产品设计解决方案 </h2><p data-v-57912129> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </p><div class="flex justify-between" data-v-57912129><div data-v-57912129><h3 data-v-57912129> 10+ </h3><p data-v-57912129> xxxxxxxxxxxx </p><p data-v-57912129> xxxxxxxxxxxx </p></div><div data-v-57912129><h3 data-v-57912129> 20+ </h3><p data-v-57912129> xxxxxxxxxxxx </p><p data-v-57912129> xxxxxxxxxxxx </p></div><div data-v-57912129><h3 data-v-57912129> 30+ </h3><p data-v-57912129> xxxxxxxxxxxx </p><p data-v-57912129> xxxxxxxxxxxx </p></div><div data-v-57912129></div></div></div><div class="bg-black h-[450px]" data-v-57912129>`);
      _push(ssrRenderComponent(_component_el_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img alt="示例图片" class="h-full bg-black w-auto object-cover" data-v-57912129${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                alt: "示例图片",
                class: "h-full bg-black w-auto object-cover"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="container mx-auto bg-black p-4" data-v-57912129><div class="columns-5 gap-4 p-4" data-v-57912129><img src="https://picsum.photos/300/200?random=1" alt="Image 1" class="mb-4" data-v-57912129><img src="https://picsum.photos/300/150?random=2" alt="Image 2" class="mb-4" data-v-57912129><img src="https://picsum.photos/300/300?random=3" alt="Image 3" class="mb-4" data-v-57912129><img src="https://picsum.photos/300/100?random=4" alt="Image 4" class="mb-4" data-v-57912129><img src="https://picsum.photos/300/200?random=5" alt="Image 5" class="mb-4" data-v-57912129><img src="https://picsum.photos/300/200?random=6" alt="Image 6" class="mb-4" data-v-57912129><img src="https://picsum.photos/300/200?random=5" alt="Image 7" class="mb-4" data-v-57912129><img src="https://picsum.photos/300/200?random=6" alt="Image 8" class="mb-4" data-v-57912129></div></div><div class="flex items-center justify-center p-20" data-v-57912129><div class="flex-grow border-t border-gray-100" data-v-57912129></div><div class="px-4 text-xl text-white font-bold" data-v-57912129>业务</div><div class="flex-grow border-t border-gray-100" data-v-57912129></div></div><div class="grid grid-cols-6 h-[780px] gap-4 p-4" data-v-57912129><div class="flex flex-col items-center justify-center bg-black rounded-md" data-v-57912129><img${ssrRenderAttr("src", _imports_0)} data-v-57912129><span class="text-[#4D4D4D]" data-v-57912129>产品策划</span></div><div class="flex flex-col items-center justify-center bg-black rounded-md" data-v-57912129><img${ssrRenderAttr("src", _imports_1)} data-v-57912129><span class="text-[#4D4D4D]" data-v-57912129>外观设计</span></div><div class="flex flex-col items-center justify-center bg-black rounded-md" data-v-57912129><img${ssrRenderAttr("src", _imports_2)} data-v-57912129><span class="text-[#4D4D4D]" data-v-57912129>结构设计</span></div><div class="flex flex-col items-center justify-center bg-black rounded-md" data-v-57912129><img${ssrRenderAttr("src", _imports_3)} data-v-57912129><span class="text-[#4D4D4D]" data-v-57912129>联合开发</span></div><div class="flex flex-col items-center justify-center bg-black rounded-md" data-v-57912129><img${ssrRenderAttr("src", _imports_4)} data-v-57912129><span class="text-[#4D4D4D]" data-v-57912129>生产制造</span></div><div class="flex flex-col items-center justify-center bg-black rounded-md" data-v-57912129><img${ssrRenderAttr("src", _imports_5)} data-v-57912129><span class="text-[#4D4D4D]" data-v-57912129>联合申报</span></div></div><div class="flex items-center justify-center p-20" data-v-57912129><div class="flex-grow border-t border-gray-100" data-v-57912129></div><div class="px-4 text-xl text-white font-bold" data-v-57912129>流程</div><div class="flex-grow border-t border-gray-100" data-v-57912129></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Works/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57912129"]]);

export { index as default };
//# sourceMappingURL=index.vue4.mjs.map
