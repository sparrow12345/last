import {
	S as C,
	i as q,
	s as U,
	a as j,
	e as h,
	c as z,
	b,
	d,
	f as P,
	g,
	h as w,
	j as W,
	o as F,
	k as G,
	l as H,
	m as J,
	n as D,
	p as m,
	q as K,
	r as M,
	u as Q,
	v as A,
	w as I,
	x as E,
	y as v,
	z as O,
	A as R,
	B as L
} from '../chunks/index.e03ef04e.js';
const X = 'modulepreload',
	Y = function (a, e) {
		return new URL(a, e).href;
	},
	T = {},
	p = function (e, n, i) {
		if (!n || n.length === 0) return e();
		const s = document.getElementsByTagName('link');
		return Promise.all(
			n.map((f) => {
				if (((f = Y(f, i)), f in T)) return;
				T[f] = !0;
				const t = f.endsWith('.css'),
					r = t ? '[rel="stylesheet"]' : '';
				if (!!i)
					for (let l = s.length - 1; l >= 0; l--) {
						const u = s[l];
						if (u.href === f && (!t || u.rel === 'stylesheet')) return;
					}
				else if (document.querySelector(`link[href="${f}"]${r}`)) return;
				const o = document.createElement('link');
				if (
					((o.rel = t ? 'stylesheet' : X),
					t || ((o.as = 'script'), (o.crossOrigin = '')),
					(o.href = f),
					document.head.appendChild(o),
					t)
				)
					return new Promise((l, u) => {
						o.addEventListener('load', l),
							o.addEventListener('error', () => u(new Error(`Unable to preload CSS for ${f}`)));
					});
			})
		).then(() => e());
	},
	ie = {};
function Z(a) {
	let e, n, i;
	var s = a[1][0];
	function f(t) {
		return { props: { data: t[3], form: t[2] } };
	}
	return (
		s && ((e = E(s, f(a))), a[12](e)),
		{
			c() {
				e && v(e.$$.fragment), (n = h());
			},
			l(t) {
				e && O(e.$$.fragment, t), (n = h());
			},
			m(t, r) {
				e && R(e, t, r), b(t, n, r), (i = !0);
			},
			p(t, r) {
				const _ = {};
				if ((r & 8 && (_.data = t[3]), r & 4 && (_.form = t[2]), r & 2 && s !== (s = t[1][0]))) {
					if (e) {
						A();
						const o = e;
						d(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							P();
					}
					s
						? ((e = E(s, f(t))),
						  t[12](e),
						  v(e.$$.fragment),
						  g(e.$$.fragment, 1),
						  R(e, n.parentNode, n))
						: (e = null);
				} else s && e.$set(_);
			},
			i(t) {
				i || (e && g(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && d(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				a[12](null), t && w(n), e && L(e, t);
			}
		}
	);
}
function $(a) {
	let e, n, i;
	var s = a[1][0];
	function f(t) {
		return { props: { data: t[3], $$slots: { default: [x] }, $$scope: { ctx: t } } };
	}
	return (
		s && ((e = E(s, f(a))), a[11](e)),
		{
			c() {
				e && v(e.$$.fragment), (n = h());
			},
			l(t) {
				e && O(e.$$.fragment, t), (n = h());
			},
			m(t, r) {
				e && R(e, t, r), b(t, n, r), (i = !0);
			},
			p(t, r) {
				const _ = {};
				if (
					(r & 8 && (_.data = t[3]),
					r & 8215 && (_.$$scope = { dirty: r, ctx: t }),
					r & 2 && s !== (s = t[1][0]))
				) {
					if (e) {
						A();
						const o = e;
						d(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							P();
					}
					s
						? ((e = E(s, f(t))),
						  t[11](e),
						  v(e.$$.fragment),
						  g(e.$$.fragment, 1),
						  R(e, n.parentNode, n))
						: (e = null);
				} else s && e.$set(_);
			},
			i(t) {
				i || (e && g(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && d(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				a[11](null), t && w(n), e && L(e, t);
			}
		}
	);
}
function x(a) {
	let e, n, i;
	var s = a[1][1];
	function f(t) {
		return { props: { data: t[4], form: t[2] } };
	}
	return (
		s && ((e = E(s, f(a))), a[10](e)),
		{
			c() {
				e && v(e.$$.fragment), (n = h());
			},
			l(t) {
				e && O(e.$$.fragment, t), (n = h());
			},
			m(t, r) {
				e && R(e, t, r), b(t, n, r), (i = !0);
			},
			p(t, r) {
				const _ = {};
				if ((r & 16 && (_.data = t[4]), r & 4 && (_.form = t[2]), r & 2 && s !== (s = t[1][1]))) {
					if (e) {
						A();
						const o = e;
						d(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							P();
					}
					s
						? ((e = E(s, f(t))),
						  t[10](e),
						  v(e.$$.fragment),
						  g(e.$$.fragment, 1),
						  R(e, n.parentNode, n))
						: (e = null);
				} else s && e.$set(_);
			},
			i(t) {
				i || (e && g(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && d(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				a[10](null), t && w(n), e && L(e, t);
			}
		}
	);
}
function V(a) {
	let e,
		n = a[6] && y(a);
	return {
		c() {
			(e = G('div')), n && n.c(), this.h();
		},
		l(i) {
			e = H(i, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var s = J(e);
			n && n.l(s), s.forEach(w), this.h();
		},
		h() {
			D(e, 'id', 'svelte-announcer'),
				D(e, 'aria-live', 'assertive'),
				D(e, 'aria-atomic', 'true'),
				m(e, 'position', 'absolute'),
				m(e, 'left', '0'),
				m(e, 'top', '0'),
				m(e, 'clip', 'rect(0 0 0 0)'),
				m(e, 'clip-path', 'inset(50%)'),
				m(e, 'overflow', 'hidden'),
				m(e, 'white-space', 'nowrap'),
				m(e, 'width', '1px'),
				m(e, 'height', '1px');
		},
		m(i, s) {
			b(i, e, s), n && n.m(e, null);
		},
		p(i, s) {
			i[6] ? (n ? n.p(i, s) : ((n = y(i)), n.c(), n.m(e, null))) : n && (n.d(1), (n = null));
		},
		d(i) {
			i && w(e), n && n.d();
		}
	};
}
function y(a) {
	let e;
	return {
		c() {
			e = K(a[7]);
		},
		l(n) {
			e = M(n, a[7]);
		},
		m(n, i) {
			b(n, e, i);
		},
		p(n, i) {
			i & 128 && Q(e, n[7]);
		},
		d(n) {
			n && w(e);
		}
	};
}
function ee(a) {
	let e, n, i, s, f;
	const t = [$, Z],
		r = [];
	function _(l, u) {
		return l[1][1] ? 0 : 1;
	}
	(e = _(a)), (n = r[e] = t[e](a));
	let o = a[5] && V(a);
	return {
		c() {
			n.c(), (i = j()), o && o.c(), (s = h());
		},
		l(l) {
			n.l(l), (i = z(l)), o && o.l(l), (s = h());
		},
		m(l, u) {
			r[e].m(l, u), b(l, i, u), o && o.m(l, u), b(l, s, u), (f = !0);
		},
		p(l, [u]) {
			let k = e;
			(e = _(l)),
				e === k
					? r[e].p(l, u)
					: (A(),
					  d(r[k], 1, 1, () => {
							r[k] = null;
					  }),
					  P(),
					  (n = r[e]),
					  n ? n.p(l, u) : ((n = r[e] = t[e](l)), n.c()),
					  g(n, 1),
					  n.m(i.parentNode, i)),
				l[5]
					? o
						? o.p(l, u)
						: ((o = V(l)), o.c(), o.m(s.parentNode, s))
					: o && (o.d(1), (o = null));
		},
		i(l) {
			f || (g(n), (f = !0));
		},
		o(l) {
			d(n), (f = !1);
		},
		d(l) {
			r[e].d(l), l && w(i), o && o.d(l), l && w(s);
		}
	};
}
function te(a, e, n) {
	let { stores: i } = e,
		{ page: s } = e,
		{ constructors: f } = e,
		{ components: t = [] } = e,
		{ form: r } = e,
		{ data_0: _ = null } = e,
		{ data_1: o = null } = e;
	W(i.page.notify);
	let l = !1,
		u = !1,
		k = null;
	F(() => {
		const c = i.page.subscribe(() => {
			l && (n(6, (u = !0)), n(7, (k = document.title || 'untitled page')));
		});
		return n(5, (l = !0)), c;
	});
	function N(c) {
		I[c ? 'unshift' : 'push'](() => {
			(t[1] = c), n(0, t);
		});
	}
	function S(c) {
		I[c ? 'unshift' : 'push'](() => {
			(t[0] = c), n(0, t);
		});
	}
	function B(c) {
		I[c ? 'unshift' : 'push'](() => {
			(t[0] = c), n(0, t);
		});
	}
	return (
		(a.$$set = (c) => {
			'stores' in c && n(8, (i = c.stores)),
				'page' in c && n(9, (s = c.page)),
				'constructors' in c && n(1, (f = c.constructors)),
				'components' in c && n(0, (t = c.components)),
				'form' in c && n(2, (r = c.form)),
				'data_0' in c && n(3, (_ = c.data_0)),
				'data_1' in c && n(4, (o = c.data_1));
		}),
		(a.$$.update = () => {
			a.$$.dirty & 768 && i.page.set(s);
		}),
		[t, f, r, _, o, l, u, k, i, s, N, S, B]
	);
}
class se extends C {
	constructor(e) {
		super(),
			q(this, e, te, ee, U, {
				stores: 8,
				page: 9,
				constructors: 1,
				components: 0,
				form: 2,
				data_0: 3,
				data_1: 4
			});
	}
}
const re = [
		() =>
			p(
				() => import('../chunks/0.0eb5754b.js'),
				[
					'../chunks/0.0eb5754b.js',
					'../chunks/_layout.79cb23d1.js',
					'./_layout.svelte.afcbb1ad.js',
					'../chunks/index.e03ef04e.js',
					'../chunks/paths.34cee5be.js',
					'../assets/_layout.3b3aa610.css'
				],
				import.meta.url
			),
		() =>
			p(
				() => import('../chunks/1.e3103c28.js'),
				[
					'../chunks/1.e3103c28.js',
					'./error.svelte.172a1b03.js',
					'../chunks/index.e03ef04e.js',
					'../chunks/singletons.aa945778.js',
					'../chunks/paths.34cee5be.js'
				],
				import.meta.url
			),
		() =>
			p(
				() => import('../chunks/2.c4821c0d.js'),
				[
					'../chunks/2.c4821c0d.js',
					'./_page.svelte.94aca189.js',
					'../chunks/index.e03ef04e.js',
					'../assets/_page.a76262f7.css'
				],
				import.meta.url
			),
		() =>
			p(
				() => import('../chunks/3.094c882a.js'),
				[
					'../chunks/3.094c882a.js',
					'../chunks/_page.57618ffe.js',
					'./about-page.svelte.071d4ed7.js',
					'../chunks/index.e03ef04e.js'
				],
				import.meta.url
			),
		() =>
			p(
				() => import('../chunks/4.b474b77b.js'),
				[
					'../chunks/4.b474b77b.js',
					'../chunks/_page.da46b06b.js',
					'./comic-page.svelte.126adddb.js',
					'../chunks/index.e03ef04e.js',
					'../assets/_page.19c07700.css'
				],
				import.meta.url
			),
		() =>
			p(
				() => import('../chunks/5.044566ed.js'),
				[
					'../chunks/5.044566ed.js',
					'./education-page.svelte.cc11566c.js',
					'../chunks/index.e03ef04e.js'
				],
				import.meta.url
			),
		() =>
			p(
				() => import('../chunks/6.ce1be5f1.js'),
				[
					'../chunks/6.ce1be5f1.js',
					'./experience-page.svelte.7997bf73.js',
					'../chunks/index.e03ef04e.js'
				],
				import.meta.url
			),
		() =>
			p(
				() => import('../chunks/7.b8e0eb03.js'),
				[
					'../chunks/7.b8e0eb03.js',
					'./projects-page.svelte.bef4db6c.js',
					'../chunks/index.e03ef04e.js'
				],
				import.meta.url
			)
	],
	oe = [],
	ae = {
		'/': [2],
		'/about': [3],
		'/comic': [4],
		'/education': [5],
		'/experience': [6],
		'/projects': [7]
	},
	le = {
		handleError: ({ error: a }) => {
			console.error(a);
		}
	};
export {
	ae as dictionary,
	le as hooks,
	ie as matchers,
	re as nodes,
	se as root,
	oe as server_loads
};
