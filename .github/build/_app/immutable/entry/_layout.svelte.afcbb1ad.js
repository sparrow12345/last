import {
	S as re,
	i as le,
	s as oe,
	C as ne,
	k as n,
	q as _,
	a as d,
	l as c,
	m as f,
	r as v,
	h as l,
	c as p,
	n as t,
	b as ce,
	D as e,
	E as fe,
	F as ie,
	G as ue,
	g as he,
	d as _e
} from '../chunks/index.e03ef04e.js';
import { b as M } from '../chunks/paths.34cee5be.js';
function de(P) {
	let s, h, m, C, j, a, y, x, F, E, H, I, b, O, R, A, V, W, $, k, G, g, L, T, D, z, N, q, B, S;
	const J = P[1].default,
		o = ne(J, P, P[0], null);
	return {
		c() {
			(s = n('div')),
				(h = n('header')),
				(m = n('h1')),
				(C = _('Majed Naser Personal Website')),
				(j = d()),
				(a = n('nav')),
				(y = n('a')),
				(x = _('Portfolio')),
				(F = d()),
				(E = n('a')),
				(H = _('About')),
				(I = d()),
				(b = n('a')),
				(O = _('Experience')),
				(R = d()),
				(A = n('a')),
				(V = _('Education')),
				(W = d()),
				($ = n('a')),
				(k = _('Projects')),
				(G = d()),
				(g = n('a')),
				(L = _('Comic')),
				(T = d()),
				(D = n('main')),
				o && o.c(),
				(z = d()),
				(N = n('footer')),
				(q = n('p')),
				(B = _('Copyright © 2023 by Software Developer')),
				this.h();
		},
		l(r) {
			s = c(r, 'DIV', { class: !0 });
			var u = f(s);
			h = c(u, 'HEADER', { class: !0 });
			var w = f(h);
			m = c(w, 'H1', {});
			var K = f(m);
			(C = v(K, 'Majed Naser Personal Website')),
				K.forEach(l),
				(j = p(w)),
				(a = c(w, 'NAV', { class: !0 }));
			var i = f(a);
			y = c(i, 'A', { href: !0, class: !0 });
			var Q = f(y);
			(x = v(Q, 'Portfolio')), Q.forEach(l), (F = p(i)), (E = c(i, 'A', { href: !0, class: !0 }));
			var U = f(E);
			(H = v(U, 'About')), U.forEach(l), (I = p(i)), (b = c(i, 'A', { href: !0, class: !0 }));
			var X = f(b);
			(O = v(X, 'Experience')), X.forEach(l), (R = p(i)), (A = c(i, 'A', { href: !0, class: !0 }));
			var Y = f(A);
			(V = v(Y, 'Education')), Y.forEach(l), (W = p(i)), ($ = c(i, 'A', { href: !0, class: !0 }));
			var Z = f($);
			(k = v(Z, 'Projects')), Z.forEach(l), (G = p(i)), (g = c(i, 'A', { href: !0, class: !0 }));
			var ee = f(g);
			(L = v(ee, 'Comic')),
				ee.forEach(l),
				i.forEach(l),
				w.forEach(l),
				(T = p(u)),
				(D = c(u, 'MAIN', { class: !0 }));
			var te = f(D);
			o && o.l(te), te.forEach(l), (z = p(u)), (N = c(u, 'FOOTER', { class: !0 }));
			var ae = f(N);
			q = c(ae, 'P', {});
			var se = f(q);
			(B = v(se, 'Copyright © 2023 by Software Developer')),
				se.forEach(l),
				ae.forEach(l),
				u.forEach(l),
				this.h();
		},
		h() {
			t(y, 'href', M + '/'),
				t(y, 'class', 'svelte-1ftnyrr'),
				t(E, 'href', M + '/about'),
				t(E, 'class', 'svelte-1ftnyrr'),
				t(b, 'href', M + '/experience'),
				t(b, 'class', 'svelte-1ftnyrr'),
				t(A, 'href', M + '/education'),
				t(A, 'class', 'svelte-1ftnyrr'),
				t($, 'href', M + '/projects'),
				t($, 'class', 'svelte-1ftnyrr'),
				t(g, 'href', M + '/comic'),
				t(g, 'class', 'svelte-1ftnyrr'),
				t(a, 'class', 'svelte-1ftnyrr'),
				t(h, 'class', 'svelte-1ftnyrr'),
				t(D, 'class', 'svelte-1ftnyrr'),
				t(N, 'class', 'svelte-1ftnyrr'),
				t(s, 'class', 'app svelte-1ftnyrr');
		},
		m(r, u) {
			ce(r, s, u),
				e(s, h),
				e(h, m),
				e(m, C),
				e(h, j),
				e(h, a),
				e(a, y),
				e(y, x),
				e(a, F),
				e(a, E),
				e(E, H),
				e(a, I),
				e(a, b),
				e(b, O),
				e(a, R),
				e(a, A),
				e(A, V),
				e(a, W),
				e(a, $),
				e($, k),
				e(a, G),
				e(a, g),
				e(g, L),
				e(s, T),
				e(s, D),
				o && o.m(D, null),
				e(s, z),
				e(s, N),
				e(N, q),
				e(q, B),
				(S = !0);
		},
		p(r, [u]) {
			o && o.p && (!S || u & 1) && fe(o, J, r, r[0], S ? ue(J, r[0], u, null) : ie(r[0]), null);
		},
		i(r) {
			S || (he(o, r), (S = !0));
		},
		o(r) {
			_e(o, r), (S = !1);
		},
		d(r) {
			r && l(s), o && o.d(r);
		}
	};
}
function ve(P, s, h) {
	let { $$slots: m = {}, $$scope: C } = s;
	return (
		(P.$$set = (j) => {
			'$$scope' in j && h(0, (C = j.$$scope));
		}),
		[C, m]
	);
}
class ye extends re {
	constructor(s) {
		super(), le(this, s, ve, de, oe, {});
	}
}
export { ye as default };
