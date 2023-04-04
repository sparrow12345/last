import {
	S as Q,
	i as R,
	s as V,
	k as i,
	q as c,
	a as f,
	l as s,
	m as o,
	r as h,
	h as t,
	c as m,
	n as X,
	b as Y,
	D as e,
	H as z
} from '../chunks/index.e03ef04e.js';
function Z(K) {
	let a, g, k, P, l, r, w, S, J, y, M, D, b, F, L, n, _, T, q, E, A, H, v, W;
	return {
		c() {
			(a = i('section')),
				(g = i('h2')),
				(k = c('Experience')),
				(P = f()),
				(l = i('ul')),
				(r = i('li')),
				(w = i('h3')),
				(S = c('Game Developer | Internship      June 2021 – July 2021')),
				(J = f()),
				(y = i('p')),
				(M =
					c(`Worked under the umbrella topic “Fun with Formal Methods”, the goal of which was to find more fun ways to teach
          basic mathematical concepts needed for IT Specialists.`)),
				(D = f()),
				(b = i('p')),
				(F =
					c(`Implemented a small-size entertaining finite-position game borrowed from Math contests to engage people with
          the background part of game theory, Finite Positional Analysis in particular.`)),
				(L = f()),
				(n = i('li')),
				(_ = i('h3')),
				(T = c('Data Scientist | Internship      June 2022 – July 2022')),
				(q = f()),
				(E = i('p')),
				(A =
					c(`The goal of this internship was to build a model that predicts a student’s success or failure in a particular college
          course, taking into account the student’s grade history and the course characteristics and prerequisites.`)),
				(H = f()),
				(v = i('p')),
				(W =
					c(`My role was in Data Extraction and Preprocessing. I used BeautifulSoup library to scrape the data we need from
          our university’s EduWiki website. After that, I processed the data so that it could be used to build the ML model.`)),
				this.h();
		},
		l(I) {
			a = s(I, 'SECTION', { id: !0 });
			var d = o(a);
			g = s(d, 'H2', {});
			var B = o(g);
			(k = h(B, 'Experience')), B.forEach(t), (P = m(d)), (l = s(d, 'UL', {}));
			var x = o(l);
			r = s(x, 'LI', {});
			var u = o(r);
			w = s(u, 'H3', {});
			var C = o(w);
			(S = h(C, 'Game Developer | Internship      June 2021 – July 2021')),
				C.forEach(t),
				(J = m(u)),
				(y = s(u, 'P', {}));
			var G = o(y);
			(M = h(
				G,
				`Worked under the umbrella topic “Fun with Formal Methods”, the goal of which was to find more fun ways to teach
          basic mathematical concepts needed for IT Specialists.`
			)),
				G.forEach(t),
				(D = m(u)),
				(b = s(u, 'P', {}));
			var N = o(b);
			(F = h(
				N,
				`Implemented a small-size entertaining finite-position game borrowed from Math contests to engage people with
          the background part of game theory, Finite Positional Analysis in particular.`
			)),
				N.forEach(t),
				u.forEach(t),
				(L = m(x)),
				(n = s(x, 'LI', {}));
			var p = o(n);
			_ = s(p, 'H3', {});
			var O = o(_);
			(T = h(O, 'Data Scientist | Internship      June 2022 – July 2022')),
				O.forEach(t),
				(q = m(p)),
				(E = s(p, 'P', {}));
			var U = o(E);
			(A = h(
				U,
				`The goal of this internship was to build a model that predicts a student’s success or failure in a particular college
          course, taking into account the student’s grade history and the course characteristics and prerequisites.`
			)),
				U.forEach(t),
				(H = m(p)),
				(v = s(p, 'P', {}));
			var j = o(v);
			(W = h(
				j,
				`My role was in Data Extraction and Preprocessing. I used BeautifulSoup library to scrape the data we need from
          our university’s EduWiki website. After that, I processed the data so that it could be used to build the ML model.`
			)),
				j.forEach(t),
				p.forEach(t),
				x.forEach(t),
				d.forEach(t),
				this.h();
		},
		h() {
			X(a, 'id', 'experience');
		},
		m(I, d) {
			Y(I, a, d),
				e(a, g),
				e(g, k),
				e(a, P),
				e(a, l),
				e(l, r),
				e(r, w),
				e(w, S),
				e(r, J),
				e(r, y),
				e(y, M),
				e(r, D),
				e(r, b),
				e(b, F),
				e(l, L),
				e(l, n),
				e(n, _),
				e(_, T),
				e(n, q),
				e(n, E),
				e(E, A),
				e(n, H),
				e(n, v),
				e(v, W);
		},
		p: z,
		i: z,
		o: z,
		d(I) {
			I && t(a);
		}
	};
}
class ee extends Q {
	constructor(a) {
		super(), R(this, a, null, Z, V, {});
	}
}
export { ee as default };
