(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4132],
  {
    84534: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchHistoryNotFoundPage: function () {
          return o;
        },
      });
      var r = a(65301),
        s = a(96233),
        i = a(32544);
      let o = (0, s.Pi)(() => (0, r.jsx)(i.T, {}));
    },
    8139: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchHistoryPage: function () {
          return A;
        },
      });
      var r = a(65301),
        s = a(42621),
        i = a(96233),
        o = a(99678),
        n = a(91207),
        c = a(37184),
        l = a(44729),
        d = a(55975),
        u = a(78372),
        h = a(82036),
        m = a(46642),
        _ = a(81437),
        S = a(98444),
        x = a(58997),
        C = a(7166),
        p = a.n(C);
      let A = (0, i.Pi)(() => {
        var e;
        let t = (0, x.uK4)().get(x.U5t),
          {
            search: a,
            user: i,
            settings: { isMobile: C },
            experiments: A,
          } = (0, x.oR4)(),
          { setContentScrollRef: T } = (0, x.$Y6)(),
          { formatMessage: f } = (0, c.Z)(),
          E = (0, x.k67)(),
          P = (0, n.useRef)(!1),
          y = (0, n.useRef)(null),
          R = (0, S.vy)(() => {
            P.current = !0;
          }),
          g = a.historyPage.items.length;
        A.checkExperiment(x.peG.WebNextSearchLanding, "on") &&
          (0, o.notFound)(),
          a.isHistoryReady &&
            (null === (e = i.account) || void 0 === e ? void 0 : e.uid) &&
            (0, n.use)(a.getHistory({ userId: i.account.uid, config: t })),
          (0, n.useEffect)(() => {
            y.current && E.canBack && y.current.focus();
          }, [E.canBack]),
          (0, n.useEffect)(
            () => () => {
              (null == P ? void 0 : P.current)
                ? (a.resetHistoryItems(), (P.current = !1))
                : a.resetHistoryStateRequest();
            },
            [a],
          );
        let j = (0, n.useMemo)(
            () =>
              (0, s.Z)(() => {
                null == E || E.back();
              }, 200),
            [E],
          ),
          v = (0, n.useMemo)(
            () =>
              g
                ? (0, r.jsx)("div", {
                    className: p().items,
                    children: a.historyPage.items
                      .map((e) => (0, S.Fu)(e, x.Rhz.SEARCH))
                      .filter((e) => !!e),
                  })
                : (0, r.jsx)(_.Caption, {
                    className: p().emptyHistory,
                    variant: "div",
                    size: "m",
                    type: "text",
                    children: (0, r.jsx)(l.Z, { id: "search.history-empty" }),
                  }),
            [a.historyPage.items, g],
          );
        return (0, r.jsx)("div", {
          className: p().root,
          ...(0, d.BA)(d.Br.search.SEARCH_HISTORY_PAGE),
          children: (0, r.jsxs)(m.t, {
            className: p().scrollContent,
            containerClassName: p().scrollContainer,
            ref: T,
            children: [
              (0, r.jsxs)("div", {
                className: p().header,
                children: [
                  (0, r.jsxs)("div", {
                    className: p().title,
                    children: [
                      E.canBack &&
                        (0, r.jsx)(u.z, {
                          ref: y,
                          "aria-label": f({ id: "navigation.go-back" }),
                          radius: "round",
                          disabled: !E.canBack,
                          size: "s",
                          icon: (0, r.jsx)(h.Icon, {
                            size: "xxs",
                            variant: "arrowLeft",
                          }),
                          onClick: j,
                        }),
                      (0, r.jsx)(_.Heading, {
                        variant: "h2",
                        size: C ? "m" : "xl",
                        children: (0, r.jsx)(l.Z, { id: "search.history" }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(u.z, {
                    "aria-label": f({ id: "search.clear-history" }),
                    radius: "xxxl",
                    variant: "outline",
                    disabled: !g,
                    size: C ? "s" : "default",
                    onClick: R,
                    children: (0, r.jsx)(_.Caption, {
                      variant: "span",
                      size: "m",
                      type: "text",
                      children: (0, r.jsx)(l.Z, { id: "search.clear-history" }),
                    }),
                  }),
                ],
              }),
              !a.isHistoryLoading && v,
            ],
          }),
        });
      });
    },
    81189: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchNotFoundPage: function () {
          return c;
        },
      });
      var r = a(65301),
        s = a(96233),
        i = a(91207),
        o = a(32544),
        n = a(58997);
      let c = (0, s.Pi)(() => {
        let { search: e, experiments: t } = (0, n.oR4)();
        return (
          (0, i.useEffect)(
            () => () => {
              t.checkExperiment(n.peG.WebNextSearchLanding, "on") &&
                e.landing.reset();
            },
            [t, e.landing],
          ),
          (0, r.jsx)(o.T, {})
        );
      });
    },
    18018: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchPage: function () {
          return k;
        },
      });
      var r = a(65301),
        s = a(9695),
        i = a(96233),
        o = a(99678),
        n = a(91207),
        c = a(37184),
        l = a(55975),
        d = a(24527),
        u = a(62043),
        h = a(46884),
        m = a(77670),
        _ = a(98444),
        S = a(58997),
        x = a(29778);
      let C = [
          d.a.TOP,
          d.a.TRACK,
          d.a.ALBUM,
          d.a.ARTIST,
          d.a.PLAYLIST,
          d.a.PODCAST,
          d.a.BOOK,
          d.a.CLIP,
        ],
        p = () => {
          let e = (0, S.RVp)(),
            { experiments: t } = (0, S.oR4)();
          return (0, n.useMemo)(
            () =>
              C.filter((a) => {
                if (
                  (a !== d.a.PODCAST || e) &&
                  (a !== d.a.BOOK ||
                    (e && t.checkExperiment(S.peG.WebNextBookSearch, "on"))) &&
                  (a !== d.a.CLIP ||
                    t.checkExperiment(S.peG.WebNextClips, "on"))
                )
                  return a;
              }),
            [e, t],
          );
        };
      var A = a(7291),
        T = a.n(A),
        f = a(91878),
        E = a(46642),
        P = a(74763),
        y = a(69473),
        R = a(36643),
        g = a(21016);
      let j = (0, i.Pi)((e) => {
          let {
              searchResults: t,
              setContentScrollRef: a,
              contentScrollRef: i,
              hasSearchText: o,
            } = e,
            {
              search: c,
              experiments: l,
              settings: { isMobile: d },
            } = (0, S.oR4)(),
            [u, h] = (0, f.z)();
          return o
            ? t
            : l.checkExperiment(S.peG.WebNextSearchLanding, "on")
              ? (0, r.jsx)(S.Lh6, {
                  pageId: S.Rhz.SEARCH,
                  children: (0, r.jsx)(g.I7, {
                    scrollElement: i,
                    headerElement: u,
                    children: (0, r.jsxs)(E.t, {
                      className: T().scrollableContent,
                      containerClassName: T().main,
                      ref: a,
                      children: [
                        (0, r.jsx)(P.Od, {
                          containerClassName: T().skeletonContainer,
                          stickyHeaderClassName: (0, s.W)(
                            T().skeletonStickyHeader,
                            T().important,
                          ),
                          staticHeaderClassName: (0, s.W)(
                            T().skeletonStaticHeader,
                            T().important,
                          ),
                          stickyHeaderTabIndex: d ? null : 0,
                          headerConcealerComponent: (0, r.jsx)("div", {
                            ref: h,
                          }),
                          landing: c.landing,
                          blockHeadingVariant: "h2",
                          errorComponent: (0, r.jsx)(R.D, {
                            className: T().error,
                            withBackwardControl: !1,
                          }),
                        }),
                        (0, r.jsx)(x.$_, { className: T().footer }),
                      ],
                    }),
                  }),
                })
              : (0, r.jsxs)(E.t, {
                  className: T().scrollableContent,
                  containerClassName: T().main,
                  ref: a,
                  children: [
                    (0, r.jsx)(n.Suspense, {
                      children: (0, r.jsx)(S.Ja5, {
                        blockId: S.BEo.SEARCH_HISTORY,
                        blockType: S.BEo.SEARCH_HISTORY,
                        blockPosX: 1,
                        blockPosY: 1,
                        blockIdForFrom: S.BEo.SEARCH_HISTORY,
                        objectsCount: c.historyPage.items.length,
                        children: (0, r.jsx)(_.y9, {}),
                      }),
                    }),
                    (0, r.jsx)(n.Suspense, { children: (0, r.jsx)(y.JG, {}) }),
                    (0, r.jsx)(x.$_, { className: T().footer }),
                  ],
                });
        }),
        v = "text",
        k = (0, i.Pi)(() => {
          let e = (0, m.useTabsState)(0),
            [t, a] = (0, n.useState)(d.a.TOP),
            [i, A] = (0, n.useState)(!1),
            { formatMessage: f } = (0, c.Z)(),
            { search: E, experiments: P, location: y, user: R } = (0, S.oR4)(),
            g = (0, S.uK4)(),
            { contentScrollRef: k, setContentScrollRef: L } = (0, S.$Y6)(),
            I = g.get(S.U5t),
            N = p(),
            [B, b] = (0, n.useState)(() => {
              var e;
              return decodeURIComponent(
                null !== (e = new URLSearchParams(y.searchParams).get(v)) &&
                  void 0 !== e
                  ? e
                  : "",
              );
            }),
            H = (0, n.useRef)(B),
            M = B.length > 0;
          P.checkExperiment(S.peG.WebNextDisableSearch, "on") &&
            (0, o.redirect)("/"),
            (0, S.NOh)(E.landing.loadingState === S.Gui.RESOLVE),
            (0, n.useEffect)(
              () => () => {
                E.reset(),
                  P.checkExperiment(S.peG.WebNextSearchLanding, "on") &&
                    E.landing.reset();
              },
              [P, E],
            );
          let O = (0, n.useCallback)(
            (e, t) => {
              E.resetResults(),
                0 !== e.length &&
                  E.getSearchResults({
                    text: decodeURIComponent(e),
                    filter: t,
                    config: I,
                    experiments: P,
                  });
            },
            [E, I, P],
          );
          E.isNeededToLoad &&
            M &&
            (0, n.use)(
              E.getSearchResults({
                text: decodeURIComponent(B),
                filter: t,
                config: I,
                experiments: P,
              }),
            );
          let w = (0, n.useCallback)(
              (e) => {
                let a = encodeURIComponent(e.trim());
                b(a),
                  (H.current = a),
                  O(a, t),
                  P.checkExperiment(S.peG.WebNextSearchLanding, "on") &&
                    E.history.setShouldUpdateHistory(!0),
                  E.resetSearchCorrectedText(),
                  A(!1);
                let r = new URL(window.location.href);
                r.searchParams.set(v, a),
                  window.history.replaceState(null, "", String(r));
              },
              [O, t, P, E],
            ),
            D = (0, n.useCallback)(() => {
              A(!0);
            }, [A]),
            G = (0, n.useMemo)(
              () => (t) => {
                var r;
                if (!e.onTabChange || t === e.value) return;
                e.onTabChange(t);
                let s = null !== (r = C[t]) && void 0 !== r ? r : d.a.TOP;
                a(s), O(H.current, s);
              },
              [O, e],
            ),
            U = (0, n.useCallback)(
              (e) => {
                let {
                  id: t,
                  type: a,
                  blockPosition: r,
                  position: s,
                  feedbackType: i,
                } = e;
                E.sendFeedback({
                  blockType: a,
                  entityId: "".concat(a, ":").concat(t),
                  timestamp: new Date().toISOString(),
                  searchRequestId: E.searchRequestId,
                  query: H.current,
                  clickType: i,
                  blockPosition: r,
                  position: s,
                  page: 0,
                });
              },
              [E],
            ),
            V = (0, n.useMemo)(
              () =>
                E.searchCorrectedText
                  ? (0, r.jsx)(_.gK, {
                      searchCorrectedText: E.searchCorrectedText,
                      onCorrectText: D,
                    })
                  : null,
              [D, E.searchCorrectedText],
            ),
            K = (0, n.useMemo)(() => {
              if (!E.isLoading && 0 === E.results.length)
                return (0, r.jsx)(_.hF, { searchCorrectedText: V });
              let e = {
                className: T().searchResults,
                isLoading: E.isLoading,
                results: E.results,
                sendSearchFeedback: U,
                searchCorrectedText: V,
                ref: L,
              };
              switch (t) {
                case d.a.TOP:
                  return (0, r.jsx)(_.Id, {
                    ...e,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_TOP),
                  });
                case d.a.TRACK:
                  return (0, r.jsx)(_.XM, { ...e });
                case d.a.ALBUM:
                  return (0, r.jsx)(_.xz, {
                    ...e,
                    filter: d.a.ALBUM,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_ALBUM),
                  });
                case d.a.PLAYLIST:
                  return (0, r.jsx)(_.xz, {
                    ...e,
                    filter: d.a.PLAYLIST,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_PLAYLIST),
                  });
                case d.a.ARTIST:
                  return (0, r.jsx)(_.xz, {
                    ...e,
                    filter: d.a.ARTIST,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_ARTIST),
                  });
                case d.a.PODCAST:
                  return (0, r.jsx)(_.R_, { ...e });
                case d.a.BOOK:
                  return (0, r.jsx)(_.xz, {
                    ...e,
                    filter: d.a.BOOK,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_BOOK),
                  });
                case d.a.CLIP:
                  return (0, r.jsx)(_.xz, {
                    ...e,
                    filter: d.a.CLIP,
                    ...(0, l.BA)(l.Br.search.SEARCH_PAGE_RESULTS_CLIP),
                  });
                default:
                  return V;
              }
            }, [E.isLoading, E.results, t, U, V, L]),
            W = (0, n.useMemo)(
              () => ({
                [d.a.TOP]: f({ id: "search-filters.top" }),
                [d.a.TRACK]: f({ id: "search-filters.track" }),
                [d.a.ALBUM]: f({ id: "search-filters.album" }),
                [d.a.ARTIST]: f({ id: "search-filters.artist" }),
                [d.a.PLAYLIST]: f({ id: "search-filters.playlist" }),
                [d.a.PODCAST]: f({ id: "search-filters.podcast" }),
                [d.a.BOOK]: f({ id: "search-filters.book" }),
                [d.a.CLIP]: f({ id: "search-filters.clip" }),
              }),
              [f],
            ),
            Y = (0, n.useMemo)(() => {
              if (M)
                return (0, r.jsx)(x.J3, {
                  className: T().carousel,
                  carouselElement: (0, r.jsx)(x.no, {
                    className: T().tabs,
                    ...e,
                    onTabChange: G,
                    children: N.map((t, a) =>
                      (0, r.jsx)(
                        x.OK,
                        {
                          className: (0, s.W)(T().tab, {
                            [T().tab_selected]: a === e.value,
                          }),
                          title: W[t],
                          value: a,
                        },
                        a,
                      ),
                    ),
                  }),
                });
            }, [N, G, W, e, M]);
          return (
            E.landing.isNeededToLoad &&
              !M &&
              P.checkExperiment(S.peG.WebNextSearchLanding, "on") &&
              (0, n.use)(
                E.landing.getSkeleton(
                  { id: u.j.SEARCH, showWizard: R.settings.showWizard },
                  { preloadBlocksCount: 2 },
                ),
              ),
            (0, r.jsxs)("div", {
              className: (0, s.W)(T().root, { [T().root_showFilters]: M }),
              ...(0, l.BA)(l.Br.search.SEARCH_PAGE),
              children: [
                (0, r.jsxs)("div", {
                  className: T().header,
                  ...(0, l.BA)(l.Br.search.SEARCH_PAGE_HEADER_CONTAINER),
                  children: [
                    (0, r.jsx)(h.M, {
                      className: T().input,
                      autoFocus: !0,
                      initialValue: H.current,
                      placeholder: f({ id: "search.input-placeholder" }),
                      onChange: w,
                      resetButtonAriaLabel: f({
                        id: "interface-actions.reset-search-input",
                      }),
                      correctedValue: i ? E.searchCorrectedText : null,
                      innerInputProps: (0, l.BA)(
                        l.Br.search.SEARCH_PAGE_SEARCH_INPUT,
                      ),
                      resetButtonProps: (0, l.BA)(
                        l.Br.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON,
                      ),
                      searchIconProps: (0, l.BA)(
                        l.Br.search.SEARCH_PAGE_SEARCH_INPUT_ICON,
                      ),
                    }),
                    Y,
                  ],
                }),
                (0, r.jsx)("div", {
                  className: T().content,
                  children: (0, r.jsx)(j, {
                    hasSearchText: M,
                    contentScrollRef: k,
                    setContentScrollRef: L,
                    searchResults: K,
                  }),
                }),
              ],
            })
          );
        });
    },
    69473: function (e, t, a) {
      "use strict";
      a.d(t, {
        JG: function () {
          return d.Mixes;
        },
        RB: function () {
          return u.MixesGrid;
        },
        ZP: function () {
          return l;
        },
      });
      var r = a(2685),
        s = a(49430),
        i = a(51921),
        o = a(63612),
        n = a(58997);
      let c = (e) => ({
          items: (0, r.pj)(e.items.map((e) => (0, o.Fh)(e.data))),
        }),
        l = r.V5.model("Mixes", {
          loadingState: r.V5.enumeration(Object.values(n.Gui)),
          items: r.V5.array(o.zn),
          errorStatusCode: r.V5.maybeNull(r.V5.number),
        })
          .actions((e) => ({
            getMixes: (0, r.ls)(function* (t) {
              let { landingResource: a, modelActionsLogger: o } = (0, r.dU)(e);
              if (e.loadingState !== n.Gui.PENDING)
                try {
                  e.loadingState = n.Gui.PENDING;
                  let r = yield a.getBlock({
                    source: { uri: "/landing/block/mixes", fullList: t },
                    type: i.g.MIXES,
                  });
                  (e.items = c(r).items), (e.loadingState = n.Gui.RESOLVE);
                } catch (t) {
                  o.error(t),
                    t instanceof s.du &&
                      (t.statusCode === s.CN.NOT_FOUND ||
                        t.statusCode === s.CN.BAD_REQUEST) &&
                      (e.errorStatusCode = s.CN.NOT_FOUND),
                    e.loadingState !== n.Gui.IDLE &&
                      (e.loadingState = n.Gui.REJECT);
                }
            }),
          }))
          .views((e) => ({
            get isLoading() {
              return (
                e.loadingState === n.Gui.IDLE ||
                e.loadingState === n.Gui.PENDING
              );
            },
            get isRejected() {
              return e.loadingState === n.Gui.REJECT;
            },
            get isNotFound() {
              let t = e.loadingState === n.Gui.RESOLVE && 0 === e.items.length;
              return e.errorStatusCode === s.CN.NOT_FOUND || t;
            },
          }));
      var d = a(51275),
        u = a(99569);
    },
    51275: function (e, t, a) {
      "use strict";
      a.d(t, {
        Mixes: function () {
          return S;
        },
      });
      var r = a(65301),
        s = a(96233),
        i = a(91207),
        o = a(58997),
        n = a(37184),
        c = a(62379),
        l = a(63612),
        d = a(29778),
        u = a(28458),
        h = a.n(u);
      let m = (0, s.Pi)((e) => {
        let { isShimmerVisible: t, isShimmerActive: a, mixes: s } = e,
          { formatMessage: o } = (0, n.Z)(),
          u = (0, i.useMemo)(
            () =>
              t
                ? (0, d.Cl)({ isActive: a, withInfo: !1 })
                : s.map((e) =>
                    (0, r.jsx)(
                      l.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        coverSize: 80,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, s],
          );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.ti, {
              className: h().carouselHeader,
              title: o({ id: "entity-names.mixes" }),
              titleSize: "xs",
              viewAllActionLink: "/mixes",
            }),
            (0, r.jsx)(c.l, {
              className: h().carouselBlock,
              itemClassName: h().mixItem,
              children: u,
            }),
          ],
        });
      });
      var _ = a(99569);
      let S = (0, s.Pi)(() => {
        let {
          settings: { isMobile: e },
          search: t,
        } = (0, o.oR4)();
        return (t.mixes.loadingState === o.Gui.IDLE &&
          (0, i.use)(t.mixes.getMixes(!1)),
        e)
          ? (0, r.jsx)(m, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
            })
          : (0, r.jsx)(_.MixesGrid, {
              isShimmerVisible: t.mixes.isLoading || t.mixes.isRejected,
              isShimmerActive: t.mixes.isLoading,
              mixes: t.mixes.items,
              withTitle: !0,
            });
      });
    },
    99569: function (e, t, a) {
      "use strict";
      a.d(t, {
        MixesGrid: function () {
          return m;
        },
      });
      var r = a(65301),
        s = a(96233),
        i = a(91207),
        o = a(44729),
        n = a(55975),
        c = a(81437),
        l = a(63612),
        d = a(29778),
        u = a(42544),
        h = a.n(u);
      let m = (0, s.Pi)((e) => {
        let {
            isShimmerVisible: t,
            isShimmerActive: a,
            withTitle: s,
            mixes: u,
            shimmerCount: m = 5,
          } = e,
          _ = (0, i.useMemo)(
            () =>
              t
                ? (0, r.jsx)(d.Wm, {
                    isActive: a,
                    round: !1,
                    centered: !1,
                    withInfo: !1,
                    count: m,
                  })
                : u.map((e) =>
                    (0, r.jsx)(
                      l.GX,
                      {
                        title: e.title,
                        weblink: e.weblink,
                        covers: e.covers,
                        imagesLayoutType: e.imagesLayoutType,
                      },
                      e.id,
                    ),
                  ),
            [a, t, u, m],
          );
        return (0, r.jsxs)("div", {
          ...(0, n.BA)(n.QM.mixes.MIXES_GRID_CONTAINER),
          children: [
            s &&
              (0, r.jsx)(c.Heading, {
                className: h().mixesTitle,
                size: "s",
                weight: "bold",
                variant: "h3",
                ...(0, n.BA)(n.QM.mixes.MIXES_GRID_HEADER),
                children: (0, r.jsx)(o.Z, { id: "entity-names.mixes" }),
              }),
            (0, r.jsx)("div", { className: h().mixesGrid, children: _ }),
          ],
        });
      });
    },
    98444: function (e, t, a) {
      "use strict";
      a.d(t, {
        gK: function () {
          return P.SearchCorrectedText;
        },
        hF: function () {
          return y.SearchEmpty;
        },
        xz: function () {
          return R.SearchEntitiesGrid;
        },
        y9: function () {
          return g.SearchHistoryBlock;
        },
        Iv: function () {
          return E;
        },
        Id: function () {
          return j.SearchMixed;
        },
        R_: function () {
          return v.SearchPodcastList;
        },
        XM: function () {
          return k.SearchTrackList;
        },
        Fu: function () {
          return o.F;
        },
        vy: function () {
          return n.useClearHistory;
        },
      }),
        a(65301);
      var r = a(54709);
      a(30302);
      var s = a(81706),
        i = a(3154),
        o = a(23340),
        n = a(52208),
        c = a(2685),
        l = a(58702),
        d = a(77702),
        u = a(9096),
        h = a(90741);
      let m = c.V5.model("SearchAlbum", {
          type: c.V5.literal(l.S.ALBUM),
          data: r.ug,
        }),
        _ = c.V5.model("SearchPlaylist", {
          type: c.V5.literal(l.S.PLAYLIST),
          data: s.d2,
        }),
        S = c.V5.model("SearchArtist", {
          type: c.V5.literal(l.S.ARTIST),
          data: u.Go,
        }),
        x = c.V5.model("SearchUgcTrack", {
          type: c.V5.literal(l.S.UGC_TRACK),
          data: i.bc,
        }),
        C = c.V5.model("SearchTrack", {
          type: c.V5.literal(l.S.TRACK),
          data: i.le,
        }),
        p = c.V5.model("SearchVibe", {
          type: c.V5.literal(l.S.WAVE),
          data: h.KW,
        }),
        A = c.V5.model("SearchPodcast", {
          type: c.V5.literal(l.S.PODCAST),
          data: r.ug,
        }),
        T = c.V5.model("SearchPodcastEpisode", {
          type: c.V5.literal(l.S.PODCAST_EPISODE),
          data: i.le,
        }),
        f = c.V5.model("SearchClip", {
          type: c.V5.literal(l.S.CLIP),
          data: d.x$,
        }),
        E = c.V5.union(m, _, S, C, x, p, A, T, f);
      var P = a(74967),
        y = a(95200),
        R = a(87265),
        g = a(18002),
        j = a(12317),
        v = a(52786),
        k = a(63305);
    },
    23340: function (e, t, a) {
      "use strict";
      a.d(t, {
        F: function () {
          return l;
        },
      });
      var r = a(65301),
        s = a(58702),
        i = a(54709),
        o = a(30302),
        n = a(81706),
        c = a(3154);
      let l = (e, t) => {
        switch (e.type) {
          case s.S.UGC_TRACK:
          case s.S.TRACK:
          case s.S.PODCAST_EPISODE: {
            let a = e.data;
            return (0, r.jsx)(
              c.F7,
              { pageId: t, track: a },
              "".concat(e.type, "-").concat(a.id),
            );
          }
          case s.S.ARTIST: {
            let a = e.data;
            return (0, r.jsx)(
              o.Kj,
              { pageId: t, artist: a },
              "".concat(e.type, "-").concat(a.id),
            );
          }
          case s.S.PLAYLIST: {
            let a = e.data;
            return (0, r.jsx)(n.GK, { pageId: t, playlist: a }, a.key);
          }
          case s.S.ALBUM: {
            let a = e.data;
            return (0, r.jsx)(
              i.ZA,
              { pageId: t, album: a },
              "".concat(e.type, "-").concat(a.id),
            );
          }
          default:
            return null;
        }
      };
    },
    52208: function (e, t, a) {
      "use strict";
      a.d(t, {
        useClearHistory: function () {
          return u;
        },
      });
      var r = a(65301),
        s = a(99678),
        i = a(91207),
        o = a(37184),
        n = a(44729),
        c = a(58997),
        l = a(29778);
      let d = "/search",
        u = (e) => {
          let { user: t, search: a } = (0, c.oR4)(),
            { formatMessage: u } = (0, o.Z)(),
            { notify: h } = (0, c.d$W)(),
            m = (0, s.useRouter)();
          return (
            (0, i.useEffect)(() => {
              a.isEmptyHistory && m.push(d);
            }, [a.isEmptyHistory, m]),
            (0, i.useCallback)(() => {
              try {
                var s;
                (null === (s = t.account) || void 0 === s ? void 0 : s.uid) &&
                  a.clearHistory({ userId: t.account.uid }),
                  h(
                    (0, r.jsx)(l.Yj, {
                      message: (0, r.jsx)(n.Z, {
                        id: "search.cleared-history",
                      }),
                    }),
                    { containerId: c.W$x.INFO },
                  ),
                  e && e(),
                  m.push(d);
              } catch (e) {
                h(
                  (0, r.jsx)(l.Q, {
                    error: u({ id: "error-messages.error-during-action" }),
                  }),
                  { containerId: c.W$x.ERROR },
                );
              }
            }, [t.account.uid, h, e, m, a, u])
          );
        };
    },
    74967: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchCorrectedText: function () {
          return u;
        },
      });
      var r = a(65301),
        s = a(91207),
        i = a(44729),
        o = a(55975),
        n = a(78372),
        c = a(81437),
        l = a(96691),
        d = a.n(l);
      let u = (e) => {
        let { onCorrectText: t, searchCorrectedText: a } = e,
          l = (0, s.useMemo)(
            () => ({
              text: (0, r.jsx)(n.z, {
                "aria-label": a,
                variant: "text",
                radius: "xs",
                onClick: t,
                ...(0, o.BA)(o.QM.search.SEARCH_CORRECTED_TEXT_BUTTON),
                children: (0, r.jsx)(c.Caption, {
                  className: d().link,
                  variant: "span",
                  size: "m",
                  type: "text",
                  ...(0, o.BA)(o.QM.search.SEARCH_CORRECTED_TEXT_BUTTON_TEXT),
                  children: a,
                }),
              }),
            }),
            [a, t],
          );
        return (0, r.jsx)("div", {
          className: d().root,
          ...(0, o.BA)(o.QM.search.SEARCH_CORRECTED_TEXT),
          children: (0, r.jsx)(c.Caption, {
            className: d().text,
            variant: "span",
            size: "m",
            type: "text",
            ...(0, o.BA)(o.QM.search.SEARCH_CORRECTED_TEXT_TEXT),
            children: (0, r.jsx)(i.Z, {
              id: "search.corrected-text",
              values: l,
            }),
          }),
        });
      };
    },
    95200: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchEmpty: function () {
          return S;
        },
      });
      var r = a(65301),
        s = a(9695),
        i = a(91207),
        o = a(37184),
        n = a(55975),
        c = a(82036),
        l = a(46642),
        d = a(81437),
        u = a(29778),
        h = a(11531),
        m = a.n(h);
      let _ = (e) => {
          let { forwardRef: t, className: a, searchCorrectedText: i } = e,
            { formatMessage: h } = (0, o.Z)();
          return (0, r.jsxs)(l.t, {
            className: (0, s.W)(m().root, a),
            containerClassName: m().container,
            ref: t,
            children: [
              (0, r.jsxs)("div", {
                className: m().content,
                ...(0, n.BA)(n.QM.search.SEARCH_EMPTY_CONTAINER),
                children: [
                  i &&
                    (0, r.jsx)("div", {
                      className: m().correctedTextBlock,
                      children: i,
                    }),
                  (0, r.jsx)(c.Icon, {
                    className: m().icon,
                    variant: "search",
                    size: "xxl",
                    ...(0, n.BA)(n.QM.search.SEARCH_EMPTY_ICON),
                  }),
                  (0, r.jsx)(d.Heading, {
                    className: m().title,
                    size: "s",
                    weight: "bold",
                    variant: "h3",
                    ...(0, n.BA)(n.QM.search.SEARCH_EMPTY_HEADER),
                    children: h({ id: "search-results.not-found-title" }),
                  }),
                  (0, r.jsx)(d.Caption, {
                    className: m().subtitle,
                    variant: "div",
                    type: "text",
                    size: "l",
                    weight: "normal",
                    ...(0, n.BA)(n.QM.search.SEARCH_EMPTY_DESCRIPTION),
                    children: h({ id: "search-results.not-found-description" }),
                  }),
                ],
              }),
              (0, r.jsx)(u.$_, { className: m().footer }),
            ],
          });
        },
        S = (0, i.forwardRef)((e, t) => (0, r.jsx)(_, { forwardRef: t, ...e }));
    },
    87265: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchEntitiesGrid: function () {
          return f;
        },
      });
      var r = a(65301),
        s = a(9695),
        i = a(91207),
        o = a(58702),
        n = a(44734),
        c = a(46642),
        l = a(54709),
        d = a(30302),
        u = a(77702),
        h = a(81706),
        m = a(58997),
        _ = a(29778),
        S = a(24527),
        x = a(52416);
      let C = (e, t) =>
        t === S.a.BOOK
          ? e.filter(
              (e) => e.type === o.S.PODCAST && e.data.type === x.V.AUDIOBOOK,
            )
          : e.filter((e) => e.type === t);
      var p = a(33314),
        A = a.n(p);
      let T = (e) => {
          let {
              forwardRef: t,
              className: a,
              results: S,
              filter: x,
              isLoading: p,
              sendSearchFeedback: T,
              searchCorrectedText: f,
              children: E,
              ...P
            } = e,
            [y, R] = (0, i.useState)(0),
            g = (0, i.useMemo)(() => {
              if (p)
                return (0, r.jsx)(_.Wm, {
                  isActive: !0,
                  itemClassName: A().block,
                  round: x === o.S.ARTIST,
                  centered: x === o.S.ARTIST,
                  count: 36,
                  shimmerClassName: x === o.S.CLIP && A().video,
                });
              let e = C(S, x);
              return (
                R(e.length),
                e.map((e, t) => {
                  switch (e.type) {
                    case o.S.ALBUM:
                      return (0, r.jsx)(
                        m.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: T,
                            id: e.data.id,
                            type: n.B.ALBUM,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, r.jsx)(
                            l.rf,
                            { album: e.data },
                            e.data.id,
                          ),
                        },
                        e.data.id,
                      );
                    case o.S.PLAYLIST:
                      return (0, r.jsx)(
                        m.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: T,
                            id: e.data.id,
                            type: n.B.PLAYLIST,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, r.jsx)(
                            h.ZL,
                            { playlist: e.data },
                            e.data.key,
                          ),
                        },
                        e.data.id,
                      );
                    case o.S.ARTIST:
                      return (0, r.jsx)(
                        m.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: T,
                            id: e.data.id,
                            type: n.B.ARTIST,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, r.jsx)(
                            d.IT,
                            { artist: e.data },
                            e.data.id,
                          ),
                        },
                        e.data.id,
                      );
                    case o.S.PODCAST:
                      return (0, r.jsx)(
                        m.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: T,
                            id: e.data.id,
                            type: n.B.PODCAST,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, r.jsx)(
                            l.rf,
                            {
                              album: e.data,
                              withLikesCount: !0,
                              withAddition: !1,
                            },
                            e.data.id,
                          ),
                        },
                        e.data.id,
                      );
                    case o.S.CLIP:
                      return (0, r.jsx)(
                        m.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: T,
                            id: e.data.clipId,
                            type: n.B.CLIP,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, r.jsx)(
                            u.xq,
                            { clip: e.data },
                            e.data.clipId,
                          ),
                        },
                        e.data.clipId,
                      );
                    default:
                      return null;
                  }
                })
              );
            }, [p, S, x, T]);
          return (0, r.jsxs)(c.t, {
            className: (0, s.W)(A().root, a),
            containerClassName: A().container,
            ref: t,
            ...(0, m.tEg)(P),
            children: [
              (0, r.jsxs)("div", {
                children: [
                  f &&
                    (0, r.jsx)("div", {
                      className: A().correctedTextBlock,
                      children: f,
                    }),
                  (0, r.jsx)("div", {
                    className: (0, s.W)(A().items, {
                      [A().video]: x === o.S.CLIP,
                      [A().items_withChildren]: y > 0 && !!E,
                    }),
                    children: g,
                  }),
                  E,
                ],
              }),
              (0, r.jsx)(_.$_, { className: A().footer }),
            ],
          });
        },
        f = (0, i.forwardRef)((e, t) => (0, r.jsx)(T, { forwardRef: t, ...e }));
    },
    18002: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchHistoryBlock: function () {
          return V;
        },
      });
      var r,
        s,
        i = a(65301),
        o = a(96233),
        n = a(58997),
        c = a(91207),
        l = a(37184),
        d = a(55975),
        u = a(23340),
        h = a(9695),
        m = a(91246),
        _ = a(62379),
        S = a(29778),
        x = a(82607),
        C = a(39418),
        p = a.n(C);
      let A = (e) => {
        let { className: t, ariaLabel: a } = e;
        return (0, i.jsxs)("div", {
          tabIndex: 0,
          "aria-label": a,
          "aria-live": "polite",
          "aria-busy": !0,
          className: (0, h.W)(p().root, t),
          children: [
            (0, i.jsxs)("div", {
              className: p().infoContainer,
              children: [
                (0, i.jsx)(x.Shimmer, { className: p().cover, radius: "s" }),
                (0, i.jsxs)("div", {
                  className: p().textContainer,
                  children: [
                    (0, i.jsx)(x.Shimmer, {
                      className: p().title,
                      radius: "s",
                    }),
                    (0, i.jsx)(x.Shimmer, {
                      className: p().description,
                      radius: "s",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(x.Shimmer, { className: p().action, radius: "s" }),
          ],
        });
      };
      var T = a(63271),
        f = a.n(T);
      let E = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 5,
            { formatMessage: t } = (0, l.Z)(),
            a = (0, c.useMemo)(
              () =>
                t(
                  { id: "loading-messages.entity-is-loading" },
                  { entityName: t({ id: "search.history" }) },
                ),
              [t],
            );
          return Array.from({ length: e }, (e, t) =>
            (0, i.jsx)(A, { className: f().shimmer, ariaLabel: a }, t),
          );
        },
        P = (e) => {
          let { isLoading: t, shimmersCount: a, className: r, children: s } = e;
          return (0, i.jsx)("div", { className: r, children: t ? E(a) : s });
        };
      var y = a(64995),
        R = a.n(y);
      ((r = s || (s = {})).ONE = "one"), (r.TWO = "two");
      let g = (e) => {
          let {
              forwardRef: t,
              isLoading: a,
              title: r,
              description: s,
              viewAllAction: o,
              coverUrl: n,
              children: l,
              className: d = "",
              maxColumns: u = 2,
              itemsPerColumn: x = 3,
              containerClassName: C = "",
              headerClassName: p = "",
              titleSize: A,
              showControls: T = !1,
            } = e,
            [f, E] = (0, c.useState)(),
            y = (0, c.useRef)(null),
            g = (0, c.useId)(),
            j = (0, c.useMemo)(() => {
              let e = (0, m.Z)(l, x).slice(0, u);
              return (
                1 === e.length ? E("one") : E("two"),
                e.map((e, t) =>
                  (0, i.jsx)(
                    P,
                    {
                      shimmersCount: 3,
                      isLoading: a,
                      className: R().column,
                      children: e,
                    },
                    t,
                  ),
                )
              );
            }, [l, a, x, u]);
          return (0, i.jsxs)("section", {
            ref: t,
            className: (0, h.W)(d, R().root),
            children: [
              (0, i.jsx)(S.ti, {
                className: p,
                labeledForId: g,
                title: r,
                description: s,
                coverUrl: n,
                viewAllActionLink: o,
                titleSize: A,
                controls:
                  T &&
                  (0, i.jsx)(S.J8, { className: R().controls, carouselRef: y }),
              }),
              (0, i.jsx)(_.l, {
                className: C,
                ref: y,
                itemClassName: (0, h.W)(
                  R().columns,
                  R()["columns_".concat(a && u > 1 ? "two" : f)],
                ),
                "aria-labelledby": g,
                role: "group",
                children: j,
              }),
            ],
          });
        },
        j = (0, c.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
      var v = a(72045),
        k = a.n(v);
      let L = "/search/history",
        I = (e) => e === L,
        N = (0, o.Pi)(() => {
          var e;
          let t = (0, n.uK4)().get(n.U5t),
            { search: a, user: r } = (0, n.oR4)(),
            { formatMessage: s } = (0, l.Z)(),
            o = a.historyPage.items;
          if (
            (a.isHistoryReady &&
              (null === (e = r.account) || void 0 === e ? void 0 : e.uid) &&
              (0, c.use)(a.getHistory({ userId: r.account.uid, config: t })),
            (0, c.useEffect)(
              () => () => {
                var e;
                I(
                  null === (e = location) || void 0 === e ? void 0 : e.pathname,
                ) || a.resetHistoryStateRequest();
              },
              [a],
            ),
            0 === o.length)
          )
            return null;
          let h = o.map((e) => (0, u.F)(e, n.Rhz.SEARCH)).filter((e) => e);
          return (0, i.jsx)("section", {
            className: k().root,
            ...(0, d.BA)(d.QM.search.SEARCH_HISTORY_BLOCK_CONTAINER),
            children: (0, i.jsx)(j, {
              headerClassName: k().header,
              containerClassName: k().content,
              isLoading: a.isHistoryLoading,
              title: s({ id: "search.history" }),
              viewAllAction: L,
              maxColumns: 2,
              itemsPerColumn: 4,
              showControls: !0,
              children: h,
            }),
          });
        });
      var B = a(44729),
        b = a(78372),
        H = a(81437),
        M = a(52208),
        O = a(24766),
        w = a.n(O);
      let D = "/search/history",
        G = (e) => e === D,
        U = (0, o.Pi)(() => {
          var e;
          let t = (0, n.uK4)().get(n.U5t),
            { search: a, user: r } = (0, n.oR4)(),
            { formatMessage: s } = (0, l.Z)(),
            o = (0, M.useClearHistory)(a.resetHistoryItems),
            d = a.historyPage.items;
          if (
            (a.isHistoryReady &&
              (null === (e = r.account) || void 0 === e ? void 0 : e.uid) &&
              (0, c.use)(a.getHistory({ userId: r.account.uid, config: t })),
            (0, c.useEffect)(
              () => () => {
                var e;
                G(
                  null === (e = location) || void 0 === e ? void 0 : e.pathname,
                ) || a.resetHistoryStateRequest();
              },
              [a],
            ),
            0 === d.length)
          )
            return null;
          let h = d.map((e) => (0, u.F)(e, n.Rhz.SEARCH)).filter((e) => e);
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(j, {
                headerClassName: w().header,
                containerClassName: w().mixedEntitiesBlock,
                isLoading: a.isHistoryLoading,
                title: s({ id: "search.history" }),
                viewAllAction: D,
                titleSize: "xs",
                children: h,
              }),
              (0, i.jsx)("div", {
                className: w().buttonContainer,
                children: (0, i.jsx)(b.z, {
                  className: w().button,
                  "aria-label": s({ id: "search.clear-history" }),
                  disabled: !d.length,
                  size: "default",
                  radius: "xxxl",
                  onClick: o,
                  children: (0, i.jsx)(H.Caption, {
                    variant: "span",
                    size: "m",
                    type: "text",
                    children: (0, i.jsx)(B.Z, { id: "search.clear-history" }),
                  }),
                }),
              }),
            ],
          });
        }),
        V = (0, o.Pi)(() => {
          let {
            settings: { isMobile: e },
          } = (0, n.oR4)();
          return e ? (0, i.jsx)(U, {}) : (0, i.jsx)(N, {});
        });
    },
    12317: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchMixed: function () {
          return v;
        },
      });
      var r = a(65301),
        s = a(9695),
        i = a(91207),
        o = a(37184),
        n = a(55975),
        c = a(58702),
        l = a(46642),
        d = a(58997),
        u = a(29778),
        h = a(96233),
        m = a(69847),
        _ = a(44734),
        S = a(54709),
        x = a(30302),
        C = a(77702),
        p = a(81706),
        A = a(3154),
        T = a(90741);
      let f = (e) => e.filter((e) => e.type !== c.S.PODCAST_EPISODE),
        E = (0, h.Pi)((e) => {
          let {
              forwardRef: t,
              isLoading: a = !1,
              items: s = [],
              title: i,
              sendSearchFeedback: o,
              blockPosition: n = 0,
              containerClassName: l,
              headerClassName: h,
              className: E,
              itemClassName: P,
              ...y
            } = e,
            R = f(s);
          return (0, r.jsx)(u.HY, {
            isShimmerVisible: a,
            isShimmerActive: !0,
            className: E,
            containerClassName: l,
            headerClassName: h,
            showHeaderShimmer: !0,
            title: i,
            ref: t,
            ...(0, d.tEg)(y),
            itemClassName: P,
            children: R.map((e, t) => {
              switch (e.type) {
                case c.S.ALBUM:
                  return (0, r.jsx)(
                    d.B1g.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.id,
                        type: _.B.ALBUM,
                        blockPosition: n,
                        position: t,
                      },
                      children: (0, r.jsx)(S.rf, {
                        album: e.data,
                        contentLinesCount: 3,
                      }),
                    },
                    e.data.id,
                  );
                case c.S.ARTIST:
                  return (0, r.jsx)(
                    d.B1g.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.id,
                        type: _.B.ARTIST,
                        blockPosition: n,
                        position: t,
                      },
                      children: (0, r.jsx)(x.IT, {
                        artist: e.data,
                        contentLinesCount: 3,
                      }),
                    },
                    e.data.id,
                  );
                case c.S.PLAYLIST:
                  return (0, r.jsx)(
                    d.B1g.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.id,
                        type: _.B.PLAYLIST,
                        blockPosition: n,
                        position: t,
                      },
                      children: (0, r.jsx)(p.ZL, {
                        playlist: e.data,
                        contentLinesCount: 3,
                      }),
                    },
                    e.data.key,
                  );
                case c.S.UGC_TRACK:
                case c.S.TRACK:
                  return (0, r.jsx)(
                    d.B1g.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.albumId
                          ? "".concat(e.data.id, ":").concat(e.data.albumId)
                          : e.data.id,
                        type: _.B.TRACK,
                        blockPosition: n,
                        position: t,
                      },
                      children: (0, r.jsx)(A.G7, {
                        track: e.data,
                        overrideContextType: m.Z.Search,
                      }),
                    },
                    e.data.id,
                  );
                case c.S.WAVE:
                  return (0, r.jsx)(
                    d.B1g.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.stationId,
                        type: _.B.WAVE,
                        blockPosition: n,
                        position: t,
                      },
                      children: (0, r.jsx)(T.op, { vibe: e.data }),
                    },
                    e.data.stationId,
                  );
                case c.S.CLIP:
                  return (0, r.jsx)(
                    d.B1g.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.clipId,
                        type: _.B.WAVE,
                        blockPosition: n,
                        position: t,
                      },
                      children: (0, r.jsx)(C.xq, { clip: e.data }),
                    },
                    e.data.clipId,
                  );
                case c.S.PODCAST:
                  return (0, r.jsx)(
                    d.B1g.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.id,
                        type: _.B.PODCAST,
                        blockPosition: n,
                        position: t,
                      },
                      children: (0, r.jsx)(S.rf, {
                        album: e.data,
                        contentLinesCount: 3,
                        withLikesCount: !0,
                        withAddition: !1,
                      }),
                    },
                    e.data.id,
                  );
              }
            }),
          });
        }),
        P = (0, i.forwardRef)((e, t) => (0, r.jsx)(E, { forwardRef: t, ...e }));
      var y = a(75089),
        R = a.n(y);
      let g = () =>
          Array.from([, ,].keys()).map((e) =>
            (0, r.jsx)(
              P,
              {
                isLoading: !0,
                className: R().block,
                headerClassName: R().blockHeader,
                containerClassName: R().blockCarousel,
              },
              e,
            ),
          ),
        j = (e) => {
          let {
              forwardRef: t,
              className: a,
              results: h,
              isLoading: m,
              sendSearchFeedback: _,
              searchCorrectedText: S,
              ...x
            } = e,
            { formatMessage: C } = (0, o.Z)(),
            p = (0, i.useMemo)(() => {
              if (m) return (0, r.jsx)(g, {});
              let e = {
                [c.S.ALL]: {
                  message: C({ id: "search-results.best" }),
                  type: c.S.ALL,
                  items: [],
                },
                [c.S.ARTIST]: {
                  message: C({ id: "search-results.artist" }),
                  type: c.S.ARTIST,
                  items: [],
                },
                [c.S.PODCAST]: {
                  message: C({ id: "search-results.podcasts-and-books" }),
                  type: c.S.PODCAST,
                  items: [],
                },
                [c.S.ALBUM]: {
                  message: C({ id: "search-results.album" }),
                  type: c.S.ALBUM,
                  items: [],
                },
                [c.S.PLAYLIST]: {
                  message: C({ id: "search-results.playlist" }),
                  type: c.S.PLAYLIST,
                  items: [],
                },
                [c.S.CLIP]: {
                  message: C({ id: "search-results.clip" }),
                  type: c.S.CLIP,
                  items: [],
                },
              };
              h.forEach((t) => {
                var a, r;
                null === (a = e[t.type]) || void 0 === a || a.items.push(t),
                  null === (r = e[c.S.ALL]) || void 0 === r || r.items.push(t);
              });
              let t = {
                [c.S.ALL]: n.QM.search.SEARCH_MIXED_ALL,
                [c.S.ARTIST]: n.QM.search.SEARCH_MIXED_ARTIST,
                [c.S.PODCAST]: n.QM.search.SEARCH_MIXED_PODCAST,
                [c.S.ALBUM]: n.QM.search.SEARCH_MIXED_ALBUM,
                [c.S.PLAYLIST]: n.QM.search.SEARCH_MIXED_PLAYLIST,
                [c.S.CLIP]: n.QM.search.SEARCH_MIXED_CLIP,
              };
              return Object.getOwnPropertyNames(e)
                .filter((t) => e[t].items.length > 0)
                .map((a, i) => {
                  let o = e[a],
                    l = o.type === c.S.CLIP;
                  return (0, r.jsx)(
                    P,
                    {
                      className: R().block,
                      headerClassName: R().blockHeader,
                      containerClassName: R().blockCarousel,
                      blockPosition: i,
                      items: o.items,
                      title: o.message,
                      sendSearchFeedback: _,
                      ...(0, n.BA)(t[o.type]),
                      itemClassName: (0, s.W)({
                        [R().item]: l,
                        [R().important]: l,
                      }),
                    },
                    i,
                  );
                });
            }, [m, h, C, _]);
          return (0, r.jsxs)(l.t, {
            className: (0, s.W)(R().root, a),
            containerClassName: R().container,
            ref: t,
            ...(0, d.tEg)(x),
            children: [
              (0, r.jsxs)("div", {
                className: R().content,
                children: [
                  S &&
                    (0, r.jsx)("div", {
                      className: R().correctedTextBlock,
                      children: S,
                    }),
                  (0, r.jsx)("div", { className: R().items, children: p }),
                ],
              }),
              (0, r.jsx)(u.$_, { className: R().footer }),
            ],
          });
        },
        v = (0, i.forwardRef)((e, t) => (0, r.jsx)(j, { forwardRef: t, ...e }));
    },
    52786: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchPodcastList: function () {
          return P;
        },
      });
      var r = a(65301),
        s = a(91207),
        i = a(55975),
        o = a(24527),
        n = a(58702);
      let c = (e) => {
        let t = [],
          a = [];
        return (
          e.forEach((e) => {
            e.type === n.S.PODCAST ? t.push(e) : a.push(e);
          }),
          { podcasts: t, podcastEpisodes: a }
        );
      };
      var l = a(87265),
        d = a(9695),
        u = a(96233),
        h = a(37184),
        m = a(19489),
        _ = a(44734),
        S = a(3154),
        x = a(58997),
        C = a(29778),
        p = a(17674),
        A = a.n(p);
      let T = (0, u.Pi)((e) => {
          let { results: t, isLoading: a, sendSearchFeedback: o } = e,
            { from: n } = (0, x.MhG)(),
            { formatMessage: c } = (0, h.Z)(),
            l = (0, s.useMemo)(
              () =>
                t.map((e, t) => {
                  let a = e.data.albumId
                    ? "".concat(e.data.id, ":").concat(e.data.albumId)
                    : e.data.id;
                  return (0, r.jsx)(
                    x.B1g.Provider,
                    {
                      value: {
                        sendSearchFeedback: o,
                        id: e.data.id,
                        type: _.B.PODCAST_EPISODE,
                        blockPosition: 0,
                        position: t,
                      },
                      children: (0, r.jsx)(S.FP, {
                        track: e.data,
                        playContextParams: {
                          contextData: {
                            type: m.A.Various,
                            meta: { id: a },
                            from: n,
                          },
                          queueParams: { index: 0 },
                          loadContextMeta: !0,
                        },
                        withPodcastName: !0,
                      }),
                    },
                    a,
                  );
                }),
              [t, n, o],
            );
          return (0, r.jsx)(C.ad, {
            className: A().root,
            blockHeaderClassName: A().header,
            carouselClassName: A().content,
            carouselItemClassName: (0, d.W)(A().podcastColumn, A().important),
            isShimmerVisible: a,
            isShimmerActive: !0,
            blockHeaderTitle: c({ id: "search-results.podcast-episodes" }),
            maxColumnsCount: C.IA.ONE,
            itemsCountPerColumn: 4,
            shimmer: (0, r.jsx)(C.DX, {
              variant: x.Lxt.PLAYLIST,
              isActive: !0,
            }),
            ...(0, i.BA)(i.r9.CAROUSEL_WITH_COLUMNS_BLOCK),
            children: l,
          });
        }),
        f = (0, s.forwardRef)((e, t) => (0, r.jsx)(T, { forwardRef: t, ...e })),
        E = (e) => {
          let {
              isLoading: t,
              results: a,
              sendSearchFeedback: s,
              searchCorrectedText: n,
              className: d,
            } = e,
            { podcasts: u, podcastEpisodes: h } = c(a);
          return (0, r.jsx)(l.SearchEntitiesGrid, {
            className: d,
            isLoading: t,
            results: u,
            filter: o.a.PODCAST,
            sendSearchFeedback: s,
            searchCorrectedText: n,
            ...(0, i.BA)(i.Br.search.SEARCH_PAGE_RESULTS_PODCAST),
            children:
              h.length > 0
                ? (0, r.jsx)(f, {
                    sendSearchFeedback: s,
                    results: h,
                    isLoading: t,
                  })
                : void 0,
          });
        },
        P = (0, s.forwardRef)((e, t) => (0, r.jsx)(E, { forwardRef: t, ...e }));
    },
    63305: function (e, t, a) {
      "use strict";
      a.d(t, {
        SearchTrackList: function () {
          return A;
        },
      });
      var r = a(65301),
        s = a(9695),
        i = a(91207),
        o = a(55975),
        n = a(19489),
        c = a(69847),
        l = a(58702),
        d = a(44734),
        u = a(46642),
        h = a(3154),
        m = a(58997),
        _ = a(29778),
        S = a(14199),
        x = a.n(S);
      let C = () =>
          Array.from(Array(36).keys()).map((e) =>
            (0, r.jsx)(
              _.DX,
              { isActive: !0, className: x().shimmer, variant: m.Lxt.PLAYLIST },
              e,
            ),
          ),
        p = (e) => {
          let {
              forwardRef: t,
              className: a,
              results: S,
              isLoading: p,
              sendSearchFeedback: A,
              searchCorrectedText: T,
            } = e,
            { from: f } = (0, m.MhG)(),
            E = (0, i.useCallback)(
              (e, t) => ({
                contextData: {
                  type: n.A.Various,
                  meta: { id: t ? "".concat(e, ":").concat(t) : e },
                  from: f,
                  overrideContextType: c.Z.Search,
                },
                queueParams: { index: 0 },
                loadContextMeta: !0,
              }),
              [f],
            ),
            P = (0, i.useMemo)(
              () =>
                p
                  ? (0, r.jsx)(C, {})
                  : S.filter((e) =>
                      [l.S.TRACK, l.S.UGC_TRACK].includes(e.type),
                    ).map((e, t) => {
                      let { data: a } = e;
                      return (0, r.jsx)(
                        m.B1g.Provider,
                        {
                          value: {
                            sendSearchFeedback: A,
                            id: a.albumId
                              ? "".concat(a.id, ":").concat(a.albumId)
                              : a.id,
                            type: d.B.TRACK,
                            blockPosition: 0,
                            position: t,
                          },
                          children: (0, r.jsx)(h.O2, {
                            track: a,
                            playContextParams: E(a.id, a.albumId),
                          }),
                        },
                        a.id,
                      );
                    }),
              [p, S, E, A],
            );
          return (0, r.jsxs)(u.t, {
            className: (0, s.W)(x().root, a),
            containerClassName: x().container,
            ref: t,
            ...(0, o.BA)(o.Br.search.SEARCH_PAGE_RESULTS_TRACK),
            children: [
              (0, r.jsxs)("div", {
                className: x().content,
                children: [
                  T &&
                    (0, r.jsx)("div", {
                      className: x().correctedTextBlock,
                      children: T,
                    }),
                  (0, r.jsx)("div", { className: x().items, children: P }),
                ],
              }),
              (0, r.jsx)(_.$_, { className: x().footer }),
            ],
          });
        },
        A = (0, i.forwardRef)((e, t) => (0, r.jsx)(p, { forwardRef: t, ...e }));
    },
    7166: function (e) {
      e.exports = {
        root: "SearchHistoryPage_root__Wbvyf",
        title: "SearchHistoryPage_title__gnJuo",
        header: "SearchHistoryPage_header__YdTG5",
        scrollContainer: "SearchHistoryPage_scrollContainer__ScAez",
        scrollContent: "SearchHistoryPage_scrollContent__5AXWC",
        content: "SearchHistoryPage_content__iPgVO",
        desktopItem: "SearchHistoryPage_desktopItem__Xv9C_",
        items: "SearchHistoryPage_items___okS8",
        emptyHistory: "SearchHistoryPage_emptyHistory__gzfUu",
      };
    },
    7291: function (e) {
      e.exports = {
        header: "SearchPage_header__T2OUM",
        root: "SearchPage_root__TtwTi",
        root_showFilters: "SearchPage_root_showFilters__pb2o1",
        input: "SearchPage_input__7L7wS",
        content: "SearchPage_content__Ax9D6",
        scrollableContent: "SearchPage_scrollableContent__qdrWa",
        main: "SearchPage_main__FDQGD",
        carousel: "SearchPage_carousel__7jwGp",
        tabs: "SearchPage_tabs__tlwgh",
        tab: "SearchPage_tab__2yIDQ",
        tab_selected: "SearchPage_tab_selected__Z7lYv",
        compilations: "SearchPage_compilations__ZHEUr",
        footer: "SearchPage_footer__uQN_X",
        error: "SearchPage_error__WSxpu",
        skeletonStickyHeader: "SearchPage_skeletonStickyHeader__SQqeV",
        important: "SearchPage_important__z3aCa",
        skeletonStaticHeader: "SearchPage_skeletonStaticHeader__PnGJX",
        skeletonContainer: "SearchPage_skeletonContainer__phbvK",
      };
    },
    28458: function (e) {
      e.exports = {
        carouselBlock: "MixesCarousel_carouselBlock__ZpMU2",
        carouselHeader: "MixesCarousel_carouselHeader__6mMHX",
        mixItem: "MixesCarousel_mixItem__YNSsB",
      };
    },
    42544: function (e) {
      e.exports = {
        mixesTitle: "MixesGrid_mixesTitle__QawnL",
        mixesGrid: "MixesGrid_mixesGrid__uZQtt",
      };
    },
    64995: function (e) {
      e.exports = {
        root: "MixedEntitiesBlock_root__Zs8l2",
        controls: "MixedEntitiesBlock_controls__mOhq7",
        columns: "MixedEntitiesBlock_columns__6YlqL",
        columns_one: "MixedEntitiesBlock_columns_one__pVHXi",
        columns_two: "MixedEntitiesBlock_columns_two__zw6GL",
        column: "MixedEntitiesBlock_column__sHpUC",
      };
    },
    63271: function (e) {
      e.exports = { shimmer: "MixedEntitiesList_shimmer__sPCJN" };
    },
    39418: function (e) {
      e.exports = {
        root: "SearchColumnShimmer_root__PDf3Y",
        infoContainer: "SearchColumnShimmer_infoContainer__cQ8_H",
        textContainer: "SearchColumnShimmer_textContainer__IekgL",
        title: "SearchColumnShimmer_title__IorPg",
        description: "SearchColumnShimmer_description__nNupy",
        cover: "SearchColumnShimmer_cover__58jV8",
        action: "SearchColumnShimmer_action__JbJGl",
      };
    },
    96691: function (e) {
      e.exports = {
        root: "SearchCorrectedText_root__ZM2f2",
        link: "SearchCorrectedText_link__eORMG",
        text: "SearchCorrectedText_text__HKgvL",
      };
    },
    11531: function (e) {
      e.exports = {
        root: "SearchEmpty_root__Yz53B",
        container: "SearchEmpty_container__6WP_o",
        content: "SearchEmpty_content__OdVMa",
        correctedTextBlock: "SearchEmpty_correctedTextBlock__wR4Hh",
        icon: "SearchEmpty_icon__NYKMM",
        title: "SearchEmpty_title__C77x5",
        subtitle: "SearchEmpty_subtitle__2TlGa",
        footer: "SearchEmpty_footer__WP03G",
      };
    },
    33314: function (e) {
      e.exports = {
        root: "SearchEntitiesGrid_root__kk0fO",
        container: "SearchEntitiesGrid_container__zFcDu",
        correctedTextBlock: "SearchEntitiesGrid_correctedTextBlock__4j4cD",
        items: "SearchEntitiesGrid_items__RrGDy",
        items_withChildren: "SearchEntitiesGrid_items_withChildren__VW6y_",
        video: "SearchEntitiesGrid_video__2xHJc",
        footer: "SearchEntitiesGrid_footer__NK1iL",
        block: "SearchEntitiesGrid_block__jnP9P",
      };
    },
    72045: function (e) {
      e.exports = {
        root: "SearchHistoryBlockDesktop_root__jKICZ",
        controls: "SearchHistoryBlockDesktop_controls__5JPBt",
        header: "SearchHistoryBlockDesktop_header__zOALK",
        clearButton: "SearchHistoryBlockDesktop_clearButton__kN4Nk",
        content: "SearchHistoryBlockDesktop_content__doQsC",
      };
    },
    24766: function (e) {
      e.exports = {
        button: "SearchHistoryBlockMobile_button__Wh_Q6",
        header: "SearchHistoryBlockMobile_header__Lx4On",
        mixedEntitiesBlock:
          "SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_",
        buttonContainer: "SearchHistoryBlockMobile_buttonContainer__IppED",
      };
    },
    75089: function (e) {
      e.exports = {
        root: "SearchMixed_root__RR4QT",
        container: "SearchMixed_container__KIfE1",
        correctedTextBlock: "SearchMixed_correctedTextBlock___1rfE",
        block: "SearchMixed_block__SasiH",
        blockCarousel: "SearchMixed_blockCarousel__IQjJA",
        blockHeader: "SearchMixed_blockHeader__L0FSh",
        footer: "SearchMixed_footer__INQFP",
        item: "SearchMixed_item__aTIrG",
        important: "SearchMixed_important__1ncD8",
      };
    },
    17674: function (e) {
      e.exports = {
        header: "SearchPodcastEpisodes_header__uqkmY",
        root: "SearchPodcastEpisodes_root__VjZhR",
        clearButton: "SearchPodcastEpisodes_clearButton__eeDVF",
        content: "SearchPodcastEpisodes_content__96WMv",
        podcastColumn: "SearchPodcastEpisodes_podcastColumn___K9Sr",
        important: "SearchPodcastEpisodes_important__c4dHK",
      };
    },
    14199: function (e) {
      e.exports = {
        root: "SearchTrackList_root__pSSfZ",
        container: "SearchTrackList_container__Bww_R",
        shimmer: "SearchTrackList_shimmer__L9t1x",
        correctedTextBlock: "SearchTrackList_correctedTextBlock__w5t0t",
        items: "SearchTrackList_items__VucVX",
        footer: "SearchTrackList_footer__M70p4",
      };
    },
    24527: function (e, t, a) {
      "use strict";
      var r, s;
      a.d(t, {
        a: function () {
          return r;
        },
      }),
        ((s = r || (r = {})).TOP = "top"),
        (s.TRACK = "track"),
        (s.CLIP = "clip"),
        (s.ALBUM = "album"),
        (s.ARTIST = "artist"),
        (s.PLAYLIST = "playlist"),
        (s.KIDS_MUSIC = "kids-music"),
        (s.KIDS_PLAYLIST = "kids-playlist"),
        (s.SPOKEN_PLAYLIST = "spoken-playlist"),
        (s.PODCAST = "podcast"),
        (s.BOOK = "book"),
        (s.KIDS_PODCAST = "kids-podcast"),
        (s.KIDS_BOOK = "kids-book");
    },
    58702: function (e, t, a) {
      "use strict";
      var r, s;
      a.d(t, {
        S: function () {
          return r;
        },
      }),
        ((s = r || (r = {})).ALL = "all"),
        (s.TRACK = "track"),
        (s.ALBUM = "album"),
        (s.ARTIST = "artist"),
        (s.PLAYLIST = "playlist"),
        (s.WAVE = "wave"),
        (s.GENRE = "genre"),
        (s.USER = "user"),
        (s.UGC_TRACK = "ugc_track"),
        (s.PODCAST = "podcast"),
        (s.PODCAST_EPISODE = "podcast_episode"),
        (s.VIDEO = "video"),
        (s.LYRICS = "lyrics"),
        (s.CLIP = "clip");
    },
  },
]);
