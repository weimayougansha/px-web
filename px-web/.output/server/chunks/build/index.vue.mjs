import { E as ElCarousel, a as ElCarouselItem } from './index.mjs';
import { withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './index2.mjs';
import './install.mjs';
import 'lodash-unified';
import '@vue/shared';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import '@vueuse/core';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_carousel = ElCarousel;
  const _component_el_carousel_item = ElCarouselItem;
  _push(`<!--[--><div class="block text-center" data-v-d56fa4ac>`);
  _push(ssrRenderComponent(_component_el_carousel, { height: "850px" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(4, (item) => {
          _push2(ssrRenderComponent(_component_el_carousel_item, { key: item }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<h3 class="small justify-center" text="2xl" data-v-d56fa4ac${_scopeId2}>${ssrInterpolate(item)}</h3>`);
              } else {
                return [
                  createVNode("h3", {
                    class: "small justify-center",
                    text: "2xl"
                  }, toDisplayString(item), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(), createBlock(Fragment, null, renderList(4, (item) => {
            return createVNode(_component_el_carousel_item, { key: item }, {
              default: withCtx(() => [
                createVNode("h3", {
                  class: "small justify-center",
                  text: "2xl"
                }, toDisplayString(item), 1)
              ]),
              _: 2
            }, 1024);
          }), 64))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="p-10 bg-[#333333] text-white" data-v-d56fa4ac><h1 data-v-d56fa4ac> 技术+美学+制造 </h1><h1 data-v-d56fa4ac> 创造“独一无二”的产品 </h1><h2 data-v-d56fa4ac> 一站式产品设计解决方案 </h2><p data-v-d56fa4ac> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </p><div class="flex justify-between" data-v-d56fa4ac><div data-v-d56fa4ac><h3 data-v-d56fa4ac> 10+ </h3><p data-v-d56fa4ac> xxxxxxxxxxxx </p><p data-v-d56fa4ac> xxxxxxxxxxxx </p></div><div data-v-d56fa4ac><h3 data-v-d56fa4ac> 20+ </h3><p data-v-d56fa4ac> xxxxxxxxxxxx </p><p data-v-d56fa4ac> xxxxxxxxxxxx </p></div><div data-v-d56fa4ac><h3 data-v-d56fa4ac> 30+ </h3><p data-v-d56fa4ac> xxxxxxxxxxxx </p><p data-v-d56fa4ac> xxxxxxxxxxxx </p></div><div data-v-d56fa4ac><h3 data-v-d56fa4ac> 40+ </h3><p data-v-d56fa4ac> xxxxxxxxxxxx </p><p data-v-d56fa4ac> xxxxxxxxxxxx </p></div></div></div><div class="grid grid-cols-2 gap-4 p-10" data-v-d56fa4ac><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-d56fa4ac><div class="flex justify-between p-4" data-v-d56fa4ac><div data-v-d56fa4ac>元素 1</div><div data-v-d56fa4ac>元素 2</div></div></div><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-d56fa4ac><div class="flex justify-between p-4" data-v-d56fa4ac><div data-v-d56fa4ac>元素 1</div><div data-v-d56fa4ac>元素 2</div></div></div><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-d56fa4ac><div class="flex justify-between p-4" data-v-d56fa4ac><div data-v-d56fa4ac>元素 1</div><div data-v-d56fa4ac>元素 2</div></div></div><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-d56fa4ac><div class="flex justify-between p-4" data-v-d56fa4ac><div data-v-d56fa4ac>元素 1</div><div data-v-d56fa4ac>元素 2</div></div></div><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-d56fa4ac><div class="flex justify-between p-4" data-v-d56fa4ac><div data-v-d56fa4ac>元素 1</div><div data-v-d56fa4ac>元素 2</div></div></div><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-d56fa4ac><div class="flex justify-between p-4" data-v-d56fa4ac><div data-v-d56fa4ac>元素 1</div><div data-v-d56fa4ac>元素 2</div></div></div></div><div data-v-d56fa4ac><div class="flex items-center justify-center p-20" data-v-d56fa4ac><div class="flex-grow border-t border-gray-100" data-v-d56fa4ac></div><div class="px-4 text-xl text-white font-bold" data-v-d56fa4ac>NEWS</div><div class="flex-grow border-t border-gray-100" data-v-d56fa4ac></div></div><div class="flex flex-col gap-4 p-10" data-v-d56fa4ac><div class="grid grid-cols-4 h-[400px] gap-4" data-v-d56fa4ac><div class="col-span-2 bg-black flex justify-center items-center" data-v-d56fa4ac>元素 1</div><div class="col-span-1 bg-black flex justify-center items-center" data-v-d56fa4ac>元素 2</div><div class="col-span-1 bg-black flex justify-center items-center" data-v-d56fa4ac>元素 3</div></div><div class="grid grid-cols-10 h-[400px] gap-4" data-v-d56fa4ac><div class="col-span-6 bg-black flex justify-center items-center" data-v-d56fa4ac>元素 4</div><div class="col-span-4 bg-black flex justify-center items-center" data-v-d56fa4ac>元素 5</div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d56fa4ac"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
