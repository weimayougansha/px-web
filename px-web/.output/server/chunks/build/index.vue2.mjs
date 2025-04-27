import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import '@vue/shared';

const _sfc_main = {
  data() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container p-10" }, _attrs))} data-v-82264a8a><div class="container text-center text-white" data-v-82264a8a> NEWS </div><div class="container mx-auto p-4" data-v-82264a8a><div class="flex flex-row space-x-4" data-v-82264a8a><div class="w-1/2" data-v-82264a8a><img src="https://picsum.photos/600/400" alt="示例图片" class="w-full h-auto rounded-md" data-v-82264a8a></div><div class="w-1/2 flex flex-col bg-gray-200 justify-center" data-v-82264a8a><h2 class="text-2xl font-bold mb-2" data-v-82264a8a>这是标题</h2><p class="text-gray-700" data-v-82264a8a> 这里是详细的描述文字，用于介绍相关的内容。可以有更多的段落和详细信息。 这里是详细的描述文字，用于介绍相关的内容。可以有更多的段落和详细信息。 </p></div></div></div><div class="container mx-auto p-4" data-v-82264a8a><div class="flex flex-row space-x-4" data-v-82264a8a><div class="w-1/2" data-v-82264a8a><img src="https://picsum.photos/600/400" alt="示例图片" class="w-full h-auto rounded-md" data-v-82264a8a></div><div class="w-1/2 flex flex-col bg-gray-200 justify-center" data-v-82264a8a><h2 class="text-2xl font-bold mb-2" data-v-82264a8a>这是标题</h2><p class="text-gray-700" data-v-82264a8a> 这里是详细的描述文字，用于介绍相关的内容。可以有更多的段落和详细信息。 这里是详细的描述文字，用于介绍相关的内容。可以有更多的段落和详细信息。 </p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/News/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-82264a8a"]]);

export { index as default };
//# sourceMappingURL=index.vue2.mjs.map
