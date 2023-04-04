import {
	S as U,
	i as G,
	s as H,
	L as K,
	e as T,
	b as P,
	M as O,
	H as y,
	h as i,
	k as o,
	q as b,
	l as p,
	m as d,
	r as g,
	p as F,
	D as n,
	a as D,
	c as E,
	n as c,
	K as J
} from '../chunks/index.e03ef04e.js';
function Q(l) {
	let e,
		t = l[3].message + '',
		a;
	return {
		c() {
			(e = o('p')), (a = b(t)), this.h();
		},
		l(s) {
			e = p(s, 'P', { style: !0 });
			var r = d(e);
			(a = g(r, t)), r.forEach(i), this.h();
		},
		h() {
			F(e, 'color', 'red');
		},
		m(s, r) {
			P(s, e, r), n(e, a);
		},
		p: y,
		d(s) {
			s && i(e);
		}
	};
}
function W(l) {
	let e,
		t,
		a,
		s,
		r,
		m,
		S,
		C,
		_,
		$ = l[2].title + '',
		A,
		L,
		h,
		f,
		N,
		B,
		v,
		q =
			new Date(
				parseInt(l[2].year),
				parseInt(l[2].month) - 1,
				parseInt(l[2].day)
			).toLocaleDateString() + '',
		M;
	return {
		c() {
			(e = o('div')),
				(t = o('img')),
				(s = D()),
				(r = o('div')),
				(m = o('span')),
				(S = b('Title of comic:')),
				(C = D()),
				(_ = o('span')),
				(A = b($)),
				(L = D()),
				(h = o('div')),
				(f = o('span')),
				(N = b('Date of publication:')),
				(B = D()),
				(v = o('span')),
				(M = b(q)),
				this.h();
		},
		l(k) {
			e = p(k, 'DIV', { id: !0, class: !0 });
			var u = d(e);
			(t = p(u, 'IMG', { id: !0, src: !0, alt: !0 })), (s = E(u)), (r = p(u, 'DIV', {}));
			var I = d(r);
			m = p(I, 'SPAN', { class: !0 });
			var V = d(m);
			(S = g(V, 'Title of comic:')),
				V.forEach(i),
				(C = E(I)),
				(_ = p(I, 'SPAN', { class: !0, id: !0 }));
			var j = d(_);
			(A = g(j, $)), j.forEach(i), I.forEach(i), (L = E(u)), (h = p(u, 'DIV', {}));
			var w = d(h);
			f = p(w, 'SPAN', { class: !0 });
			var z = d(f);
			(N = g(z, 'Date of publication:')),
				z.forEach(i),
				(B = E(w)),
				(v = p(w, 'SPAN', { class: !0, id: !0 }));
			var R = d(v);
			(M = g(R, q)), R.forEach(i), w.forEach(i), u.forEach(i), this.h();
		},
		h() {
			c(t, 'id', 'img'),
				J(t.src, (a = l[2].img)) || c(t, 'src', a),
				c(t, 'alt', l[2].alt),
				c(m, 'class', 'span-title svelte-6dr3dv'),
				c(_, 'class', 'span-content svelte-6dr3dv'),
				c(_, 'id', 'comic_title'),
				c(f, 'class', 'span-title svelte-6dr3dv'),
				c(v, 'class', 'span-content svelte-6dr3dv'),
				c(v, 'id', 'date_content'),
				c(e, 'id', 'comic'),
				c(e, 'class', 'svelte-6dr3dv');
		},
		m(k, u) {
			P(k, e, u),
				n(e, t),
				n(e, s),
				n(e, r),
				n(r, m),
				n(m, S),
				n(r, C),
				n(r, _),
				n(_, A),
				n(e, L),
				n(e, h),
				n(h, f),
				n(f, N),
				n(h, B),
				n(h, v),
				n(v, M);
		},
		p: y,
		d(k) {
			k && i(e);
		}
	};
}
function X(l) {
	let e, t;
	return {
		c() {
			(e = o('p')), (t = b('Processing...'));
		},
		l(a) {
			e = p(a, 'P', {});
			var s = d(e);
			(t = g(s, 'Processing...')), s.forEach(i);
		},
		m(a, s) {
			P(a, e, s), n(e, t);
		},
		p: y,
		d(a) {
			a && i(e);
		}
	};
}
function Y(l) {
	let e,
		t = {
			ctx: l,
			current: null,
			token: null,
			hasCatch: !0,
			pending: X,
			then: W,
			catch: Q,
			value: 2,
			error: 3
		};
	return (
		K(l[0](), t),
		{
			c() {
				(e = T()), t.block.c();
			},
			l(a) {
				(e = T()), t.block.l(a);
			},
			m(a, s) {
				P(a, e, s), t.block.m(a, (t.anchor = s)), (t.mount = () => e.parentNode), (t.anchor = e);
			},
			p(a, [s]) {
				(l = a), O(t, l, s);
			},
			i: y,
			o: y,
			d(a) {
				a && i(e), t.block.d(a), (t.token = null), (t = null);
			}
		}
	);
}
const Z = 'i.mirzazhanov@innopolis.university',
	x = 'https://fwd.innopolis.app/api/hw2',
	ee = 'https://getxkcd.vercel.app/api/comic';
function te(l) {
	const e = async () => await (await fetch(x + `?email=${Z}`)).json();
	return [
		async () => {
			let a = await e();
			return await (await fetch(ee + `?num=${a}`)).json();
		}
	];
}
class se extends U {
	constructor(e) {
		super(), G(this, e, te, Y, H, {});
	}
}
export { se as default };
