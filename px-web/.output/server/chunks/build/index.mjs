import { shallowRef, isVNode, getCurrentInstance, useSlots, ref, computed, unref, watch, provide, defineComponent, createElementBlock, openBlock, withModifiers, normalizeClass, createBlock, createCommentVNode, createElementVNode, Transition, withCtx, withDirectives, createVNode, vShow, normalizeStyle, renderSlot, Fragment, renderList, toDisplayString, inject } from 'vue';
import { f as flattedChildren, u as useLocale, E as ElIcon, a as arrow_left_default, b as arrow_right_default } from './index2.mjs';
import { b as buildProps, _ as _export_sfc, w as withInstall, a as withNoopInstall } from './install.mjs';
import { i as isNumber, u as useNamespace } from './server.mjs';
import { throttle } from 'lodash-unified';
import { isString } from '@vue/shared';

const carouselProps = buildProps({
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: String,
    default: ""
  },
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3e3
  },
  indicatorPosition: {
    type: String,
    values: ["", "none", "outside"],
    default: ""
  },
  arrow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "hover"
  },
  type: {
    type: String,
    values: ["", "card"],
    default: ""
  },
  cardScale: {
    type: Number,
    default: 0.83
  },
  loop: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  motionBlur: Boolean
});
const carouselEmits = {
  change: (current, prev) => [current, prev].every(isNumber)
};

const carouselContextKey = Symbol("carouselContextKey");
const CAROUSEL_ITEM_NAME = "ElCarouselItem";

const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter((n) => {
    var _a;
    return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
  });
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p) => !!p);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = {};
  const orderedChildren = shallowRef([]);
  const addChild = (child) => {
    children[child.uid] = child;
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children);
  };
  const removeChild = (uid) => {
    delete children[uid];
    orderedChildren.value = orderedChildren.value.filter((children2) => children2.uid !== uid);
  };
  return {
    children: orderedChildren,
    addChild,
    removeChild
  };
};

const CHANGE_EVENT = "change";

const THROTTLE_TIME = 300;
const useCarousel = (props, emit, componentName) => {
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem
  } = useOrderedChildren(getCurrentInstance(), CAROUSEL_ITEM_NAME);
  const slots = useSlots();
  const activeIndex = ref(-1);
  const timer = ref(null);
  const hover = ref(false);
  const root = ref();
  const containerHeight = ref(0);
  const isItemsTwoLength = ref(true);
  const isFirstCall = ref(true);
  const isTransitioning = ref(false);
  const arrowDisplay = computed(() => props.arrow !== "never" && !unref(isVertical));
  const hasLabel = computed(() => {
    return items.value.some((item) => item.props.label.toString().length > 0);
  });
  const isCardType = computed(() => props.type === "card");
  const isVertical = computed(() => props.direction === "vertical");
  const containerStyle = computed(() => {
    if (props.height !== "auto") {
      return {
        height: props.height
      };
    }
    return {
      height: `${containerHeight.value}px`,
      overflow: "hidden"
    };
  });
  const throttledArrowClick = throttle((index) => {
    setActiveItem(index);
  }, THROTTLE_TIME, { trailing: true });
  const throttledIndicatorHover = throttle((index) => {
    handleIndicatorHover(index);
  }, THROTTLE_TIME);
  const isTwoLengthShow = (index) => {
    if (!isItemsTwoLength.value)
      return true;
    return activeIndex.value <= 1 ? index <= 1 : index > 1;
  };
  function pauseTimer() {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  }
  function startTimer() {
    if (props.interval <= 0 || !props.autoplay || timer.value)
      return;
    timer.value = setInterval(() => playSlides(), props.interval);
  }
  const playSlides = () => {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (activeIndex.value < items.value.length - 1) {
      activeIndex.value = activeIndex.value + 1;
    } else if (props.loop) {
      activeIndex.value = 0;
    } else {
      isTransitioning.value = false;
    }
  };
  function setActiveItem(index) {
    if (!isFirstCall.value) {
      isTransitioning.value = true;
    }
    isFirstCall.value = false;
    if (isString(index)) {
      const filteredItems = items.value.filter((item) => item.props.name === index);
      if (filteredItems.length > 0) {
        index = items.value.indexOf(filteredItems[0]);
      }
    }
    index = Number(index);
    if (Number.isNaN(index) || index !== Math.floor(index)) {
      return;
    }
    const itemCount = items.value.length;
    const oldIndex = activeIndex.value;
    if (index < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0;
    } else if (index >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1;
    } else {
      activeIndex.value = index;
    }
    if (oldIndex === activeIndex.value) {
      resetItemPosition(oldIndex);
    }
    resetTimer();
  }
  function resetItemPosition(oldIndex) {
    items.value.forEach((item, index) => {
      item.translateItem(index, activeIndex.value, oldIndex);
    });
  }
  function itemInStage(item, index) {
    var _a, _b, _c, _d;
    const _items = unref(items);
    const itemCount = _items.length;
    if (itemCount === 0 || !item.states.inStage)
      return false;
    const nextItemIndex = index + 1;
    const prevItemIndex = index - 1;
    const lastItemIndex = itemCount - 1;
    const isLastItemActive = _items[lastItemIndex].states.active;
    const isFirstItemActive = _items[0].states.active;
    const isNextItemActive = (_b = (_a = _items[nextItemIndex]) == null ? void 0 : _a.states) == null ? void 0 : _b.active;
    const isPrevItemActive = (_d = (_c = _items[prevItemIndex]) == null ? void 0 : _c.states) == null ? void 0 : _d.active;
    if (index === lastItemIndex && isFirstItemActive || isNextItemActive) {
      return "left";
    } else if (index === 0 && isLastItemActive || isPrevItemActive) {
      return "right";
    }
    return false;
  }
  function handleMouseEnter() {
    hover.value = true;
    if (props.pauseOnHover) {
      pauseTimer();
    }
  }
  function handleMouseLeave() {
    hover.value = false;
    startTimer();
  }
  function handleTransitionEnd() {
    isTransitioning.value = false;
  }
  function handleButtonEnter(arrow) {
    if (unref(isVertical))
      return;
    items.value.forEach((item, index) => {
      if (arrow === itemInStage(item, index)) {
        item.states.hover = true;
      }
    });
  }
  function handleButtonLeave() {
    if (unref(isVertical))
      return;
    items.value.forEach((item) => {
      item.states.hover = false;
    });
  }
  function handleIndicatorClick(index) {
    if (index !== activeIndex.value) {
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
    activeIndex.value = index;
  }
  function handleIndicatorHover(index) {
    if (props.trigger === "hover" && index !== activeIndex.value) {
      activeIndex.value = index;
      if (!isFirstCall.value) {
        isTransitioning.value = true;
      }
    }
  }
  function prev() {
    setActiveItem(activeIndex.value - 1);
  }
  function next() {
    setActiveItem(activeIndex.value + 1);
  }
  function resetTimer() {
    pauseTimer();
    if (!props.pauseOnHover)
      startTimer();
  }
  function setContainerHeight(height) {
    if (props.height !== "auto")
      return;
    containerHeight.value = height;
  }
  function PlaceholderItem() {
    var _a;
    const defaultSlots = (_a = slots.default) == null ? void 0 : _a.call(slots);
    if (!defaultSlots)
      return null;
    const flatSlots = flattedChildren(defaultSlots);
    const normalizeSlots = flatSlots.filter((slot) => {
      return isVNode(slot) && slot.type.name === CAROUSEL_ITEM_NAME;
    });
    if ((normalizeSlots == null ? void 0 : normalizeSlots.length) === 2 && props.loop && !isCardType.value) {
      isItemsTwoLength.value = true;
      return normalizeSlots;
    }
    isItemsTwoLength.value = false;
    return null;
  }
  watch(() => activeIndex.value, (current, prev2) => {
    resetItemPosition(prev2);
    if (isItemsTwoLength.value) {
      current = current % 2;
      prev2 = prev2 % 2;
    }
    if (prev2 > -1) {
      emit(CHANGE_EVENT, current, prev2);
    }
  });
  watch(() => props.autoplay, (autoplay) => {
    autoplay ? startTimer() : pauseTimer();
  });
  watch(() => props.loop, () => {
    setActiveItem(activeIndex.value);
  });
  watch(() => props.interval, () => {
    resetTimer();
  });
  shallowRef();
  provide(carouselContextKey, {
    root,
    isCardType,
    isVertical,
    items,
    loop: props.loop,
    cardScale: props.cardScale,
    addItem,
    removeItem,
    setActiveItem,
    setContainerHeight
  });
  return {
    root,
    activeIndex,
    arrowDisplay,
    hasLabel,
    hover,
    isCardType,
    isTransitioning,
    items,
    isVertical,
    containerStyle,
    isItemsTwoLength,
    handleButtonEnter,
    handleTransitionEnd,
    handleButtonLeave,
    handleIndicatorClick,
    handleMouseEnter,
    handleMouseLeave,
    setActiveItem,
    prev,
    next,
    PlaceholderItem,
    isTwoLengthShow,
    throttledArrowClick,
    throttledIndicatorHover
  };
};

const COMPONENT_NAME = "ElCarousel";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: carouselProps,
  emits: carouselEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      root,
      activeIndex,
      arrowDisplay,
      hasLabel,
      hover,
      isCardType,
      items,
      isVertical,
      containerStyle,
      handleButtonEnter,
      handleButtonLeave,
      isTransitioning,
      handleIndicatorClick,
      handleMouseEnter,
      handleMouseLeave,
      handleTransitionEnd,
      setActiveItem,
      prev,
      next,
      PlaceholderItem,
      isTwoLengthShow,
      throttledArrowClick,
      throttledIndicatorHover
    } = useCarousel(props, emit);
    const ns = useNamespace("carousel");
    const { t } = useLocale();
    const carouselClasses = computed(() => {
      const classes = [ns.b(), ns.m(props.direction)];
      if (unref(isCardType)) {
        classes.push(ns.m("card"));
      }
      return classes;
    });
    const carouselContainer = computed(() => {
      const classes = [ns.e("container")];
      if (props.motionBlur && unref(isTransitioning) && items.value.length > 1) {
        classes.push(unref(isVertical) ? `${ns.namespace.value}-transitioning-vertical` : `${ns.namespace.value}-transitioning`);
      }
      return classes;
    });
    const indicatorsClasses = computed(() => {
      const classes = [ns.e("indicators"), ns.em("indicators", props.direction)];
      if (unref(hasLabel)) {
        classes.push(ns.em("indicators", "labels"));
      }
      if (props.indicatorPosition === "outside") {
        classes.push(ns.em("indicators", "outside"));
      }
      if (unref(isVertical)) {
        classes.push(ns.em("indicators", "right"));
      }
      return classes;
    });
    expose({
      activeIndex,
      setActiveItem,
      prev,
      next
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "root",
        ref: root,
        class: normalizeClass(unref(carouselClasses)),
        onMouseenter: withModifiers(unref(handleMouseEnter), ["stop"]),
        onMouseleave: withModifiers(unref(handleMouseLeave), ["stop"])
      }, [
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 0,
          name: "carousel-arrow-left",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "left")]),
              "aria-label": unref(t)("el.carousel.leftArrow"),
              onMouseenter: ($event) => unref(handleButtonEnter)("left"),
              onMouseleave: unref(handleButtonLeave),
              onClick: withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) - 1), ["stop"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_left_default))
                ]),
                _: 1
              })
            ], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) > 0)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        unref(arrowDisplay) ? (openBlock(), createBlock(Transition, {
          key: 1,
          name: "carousel-arrow-right",
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("button", {
              type: "button",
              class: normalizeClass([unref(ns).e("arrow"), unref(ns).em("arrow", "right")]),
              "aria-label": unref(t)("el.carousel.rightArrow"),
              onMouseenter: ($event) => unref(handleButtonEnter)("right"),
              onMouseleave: unref(handleButtonLeave),
              onClick: withModifiers(($event) => unref(throttledArrowClick)(unref(activeIndex) + 1), ["stop"])
            }, [
              createVNode(unref(ElIcon), null, {
                default: withCtx(() => [
                  createVNode(unref(arrow_right_default))
                ]),
                _: 1
              })
            ], 42, ["aria-label", "onMouseenter", "onMouseleave", "onClick"]), [
              [
                vShow,
                (_ctx.arrow === "always" || unref(hover)) && (props.loop || unref(activeIndex) < unref(items).length - 1)
              ]
            ])
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(carouselContainer)),
          style: normalizeStyle(unref(containerStyle)),
          onTransitionend: unref(handleTransitionEnd)
        }, [
          createVNode(unref(PlaceholderItem)),
          renderSlot(_ctx.$slots, "default")
        ], 46, ["onTransitionend"]),
        _ctx.indicatorPosition !== "none" ? (openBlock(), createElementBlock("ul", {
          key: 2,
          class: normalizeClass(unref(indicatorsClasses))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item, index) => {
            return withDirectives((openBlock(), createElementBlock("li", {
              key: index,
              class: normalizeClass([
                unref(ns).e("indicator"),
                unref(ns).em("indicator", _ctx.direction),
                unref(ns).is("active", index === unref(activeIndex))
              ]),
              onMouseenter: ($event) => unref(throttledIndicatorHover)(index),
              onClick: withModifiers(($event) => unref(handleIndicatorClick)(index), ["stop"])
            }, [
              createElementVNode("button", {
                class: normalizeClass(unref(ns).e("button")),
                "aria-label": unref(t)("el.carousel.indicator", { index: index + 1 })
              }, [
                unref(hasLabel) ? (openBlock(), createElementBlock("span", { key: 0 }, toDisplayString(item.props.label), 1)) : createCommentVNode("v-if", true)
              ], 10, ["aria-label"])
            ], 42, ["onMouseenter", "onClick"])), [
              [vShow, unref(isTwoLengthShow)(index)]
            ]);
          }), 128))
        ], 2)) : createCommentVNode("v-if", true),
        props.motionBlur ? (openBlock(), createElementBlock("svg", {
          key: 3,
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          style: { "display": "none" }
        }, [
          createElementVNode("defs", null, [
            createElementVNode("filter", { id: "elCarouselHorizontal" }, [
              createElementVNode("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "12,0"
              })
            ]),
            createElementVNode("filter", { id: "elCarouselVertical" }, [
              createElementVNode("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "0,10"
              })
            ])
          ])
        ])) : createCommentVNode("v-if", true)
      ], 42, ["onMouseenter", "onMouseleave"]);
    };
  }
});
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "carousel.vue"]]);

const carouselItemProps = buildProps({
  name: { type: String, default: "" },
  label: {
    type: [String, Number],
    default: ""
  }
});

const useCarouselItem = (props) => {
  const carouselContext = inject(carouselContextKey);
  const instance = getCurrentInstance();
  const carouselItemRef = ref();
  const hover = ref(false);
  const translate = ref(0);
  const scale = ref(1);
  const active = ref(false);
  const ready = ref(false);
  const inStage = ref(false);
  const animating = ref(false);
  const { isCardType, isVertical, cardScale } = carouselContext;
  function handleItemClick() {
    if (carouselContext && unref(isCardType)) {
      const index = carouselContext.items.value.findIndex(({ uid }) => uid === instance.uid);
      carouselContext.setActiveItem(index);
    }
  }
  return {
    carouselItemRef,
    active,
    animating,
    hover,
    inStage,
    isVertical,
    translate,
    isCardType,
    scale,
    ready,
    handleItemClick
  };
};

const __default__ = defineComponent({
  name: CAROUSEL_ITEM_NAME
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: carouselItemProps,
  setup(__props) {
    const ns = useNamespace("carousel");
    const {
      carouselItemRef,
      active,
      animating,
      hover,
      inStage,
      isVertical,
      translate,
      isCardType,
      scale,
      ready,
      handleItemClick
    } = useCarouselItem();
    const itemKls = computed(() => [
      ns.e("item"),
      ns.is("active", active.value),
      ns.is("in-stage", inStage.value),
      ns.is("hover", hover.value),
      ns.is("animating", animating.value),
      {
        [ns.em("item", "card")]: isCardType.value,
        [ns.em("item", "card-vertical")]: isCardType.value && isVertical.value
      }
    ]);
    const itemStyle = computed(() => {
      const translateType = `translate${unref(isVertical) ? "Y" : "X"}`;
      const _translate = `${translateType}(${unref(translate)}px)`;
      const _scale = `scale(${unref(scale)})`;
      const transform = [_translate, _scale].join(" ");
      return {
        transform
      };
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "carouselItemRef",
        ref: carouselItemRef,
        class: normalizeClass(unref(itemKls)),
        style: normalizeStyle(unref(itemStyle)),
        onClick: unref(handleItemClick)
      }, [
        unref(isCardType) ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ns).e("mask"))
        }, null, 2)), [
          [vShow, !unref(active)]
        ]) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 14, ["onClick"])), [
        [vShow, unref(ready)]
      ]);
    };
  }
});
var CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "carousel-item.vue"]]);

const ElCarousel = withInstall(Carousel, {
  CarouselItem
});
const ElCarouselItem = withNoopInstall(CarouselItem);

export { ElCarousel as E, ElCarouselItem as a };
//# sourceMappingURL=index.mjs.map
