import { E as ElCarousel, a as ElCarouselItem } from './index.mjs';
import { defineComponent, ref, provide, createElementBlock, openBlock, unref, normalizeClass, renderSlot, getCurrentInstance, inject, createElementVNode, createBlock, withCtx, resolveDynamicComponent, toDisplayString, createVNode, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { b as buildProps, _ as _export_sfc, d as definePropType, w as withInstall, a as withNoopInstall } from './install.mjs';
import { i as iconPropType } from './icon.mjs';
import { u as useLocale, E as ElIcon } from './index2.mjs';
import { u as useNamespace, _ as _export_sfc$1 } from './server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const breadcrumbKey = Symbol("breadcrumbKey");

const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: iconPropType
  }
});

const __default__$1 = defineComponent({
  name: "ElBreadcrumb"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("breadcrumb");
    const breadcrumb = ref();
    provide(breadcrumbKey, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        "aria-label": unref(t)("el.breadcrumb.label"),
        role: "navigation"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, ["aria-label"]);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "breadcrumb.vue"]]);

const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: Boolean
});

const __default__ = defineComponent({
  name: "ElBreadcrumbItem"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const ns = useNamespace("breadcrumb");
    const router = instance.appContext.config.globalProperties.$router;
    const link = ref();
    const onClick = () => {
      if (!props.to || !router)
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("item"))
      }, [
        createElementVNode("span", {
          ref_key: "link",
          ref: link,
          class: normalizeClass([unref(ns).e("inner"), unref(ns).is("link", !!_ctx.to)]),
          role: "link",
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        ((_a = unref(breadcrumbContext)) == null ? void 0 : _a.separatorIcon) ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("separator"))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(breadcrumbContext).separatorIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("separator")),
          role: "presentation"
        }, toDisplayString((_b = unref(breadcrumbContext)) == null ? void 0 : _b.separator), 3))
      ], 2);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "breadcrumb-item.vue"]]);

const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_carousel = ElCarousel;
  const _component_el_carousel_item = ElCarouselItem;
  const _component_el_breadcrumb = ElBreadcrumb;
  const _component_el_breadcrumb_item = ElBreadcrumbItem;
  _push(`<!--[--><div class="py-[20px] bg-black" data-v-9e1ecf15>`);
  _push(ssrRenderComponent(_component_el_carousel, {
    interval: 4e3,
    type: "card",
    height: "200px"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(6, (item) => {
          _push2(ssrRenderComponent(_component_el_carousel_item, { key: item }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<h3 text="2xl" justify="center" data-v-9e1ecf15${_scopeId2}>${ssrInterpolate(item)}</h3>`);
              } else {
                return [
                  createVNode("h3", {
                    text: "2xl",
                    justify: "center"
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
          (openBlock(), createBlock(Fragment, null, renderList(6, (item) => {
            return createVNode(_component_el_carousel_item, { key: item }, {
              default: withCtx(() => [
                createVNode("h3", {
                  text: "2xl",
                  justify: "center"
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
  _push(`</div><div class="container text-white" data-v-9e1ecf15>`);
  _push(ssrRenderComponent(_component_el_breadcrumb, {
    separator: "|",
    class: "text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_breadcrumb_item, { to: { path: "/" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`ALL`);
            } else {
              return [
                createTextVNode("ALL")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`医疗产品`);
            } else {
              return [
                createTextVNode("医疗产品")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`工业制造`);
            } else {
              return [
                createTextVNode("工业制造")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`智能出行`);
            } else {
              return [
                createTextVNode("智能出行")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`3C数码`);
            } else {
              return [
                createTextVNode("3C数码")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`特种装备`);
            } else {
              return [
                createTextVNode("特种装备")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_breadcrumb_item, { to: { path: "/" } }, {
            default: withCtx(() => [
              createTextVNode("ALL")
            ]),
            _: 1
          }),
          createVNode(_component_el_breadcrumb_item, null, {
            default: withCtx(() => [
              createTextVNode("医疗产品")
            ]),
            _: 1
          }),
          createVNode(_component_el_breadcrumb_item, null, {
            default: withCtx(() => [
              createTextVNode("工业制造")
            ]),
            _: 1
          }),
          createVNode(_component_el_breadcrumb_item, null, {
            default: withCtx(() => [
              createTextVNode("智能出行")
            ]),
            _: 1
          }),
          createVNode(_component_el_breadcrumb_item, null, {
            default: withCtx(() => [
              createTextVNode("3C数码")
            ]),
            _: 1
          }),
          createVNode(_component_el_breadcrumb_item, null, {
            default: withCtx(() => [
              createTextVNode("特种装备")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grid grid-cols-2 gap-4 p-10" data-v-9e1ecf15><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-9e1ecf15><div class="flex justify-between p-4" data-v-9e1ecf15><div data-v-9e1ecf15>元素 1</div><div data-v-9e1ecf15>元素 2</div></div></div><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-9e1ecf15><div class="flex justify-between p-4" data-v-9e1ecf15><div data-v-9e1ecf15>元素 1</div><div data-v-9e1ecf15>元素 2</div></div></div><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-9e1ecf15><div class="flex justify-between p-4" data-v-9e1ecf15><div data-v-9e1ecf15>元素 1</div><div data-v-9e1ecf15>元素 2</div></div></div><div class="bg-black text-white h-[450px] flex flex-col justify-end" data-v-9e1ecf15><div class="flex justify-between p-4" data-v-9e1ecf15><div data-v-9e1ecf15>元素 1</div><div data-v-9e1ecf15>元素 2</div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9e1ecf15"]]);

export { index as default };
//# sourceMappingURL=index.vue3.mjs.map
