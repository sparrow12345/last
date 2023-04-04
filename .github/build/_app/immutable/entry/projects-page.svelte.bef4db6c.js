import {
	S as O,
	i as U,
	s as B,
	k as s,
	q as m,
	a as g,
	l as o,
	m as i,
	r as d,
	h as a,
	c as S,
	n as F,
	b as G,
	D as e,
	H as L
} from '../chunks/index.e03ef04e.js';
function K(N) {
	let t, f, T, y, r, l, u, k, I, p, x, D, n, w, P, R, v, H, J, b, V;
	return {
		c() {
			(t = s('section')),
				(f = s('h2')),
				(T = m('Projects')),
				(y = g()),
				(r = s('ul')),
				(l = s('li')),
				(u = s('h3')),
				(k = m(
					'Movie Website Interface                                                 /Jul, 2022/'
				)),
				(I = g()),
				(p = s('p')),
				(x =
					m(`The main goal of this project was to showcase what I learned about React JS in the first few weeks. This project
          features a movie website interface that I have built from scratch.`)),
				(D = g()),
				(n = s('li')),
				(w = s('h3')),
				(P = m(
					'Recommendation System - Recommending best games from user history       /Apr, 2022/'
				)),
				(R = g()),
				(v = s('p')),
				(H =
					m(`The main goal of this project was to build a recommendation system that builds personalized game
          recommendations for a closed set of users (in this task, we assume that the user database will not receive new
          elements later on). The model built uses Singular Value Decomposition (SVD) to achieve the task at hand.`)),
				(J = g()),
				(b = s('p')),
				(V = m(
					'This project was a test task for my internship in Data Science (added in the next section).'
				)),
				this.h();
		},
		l(_) {
			t = o(_, 'SECTION', { id: !0 });
			var h = i(t);
			f = o(h, 'H2', {});
			var q = i(f);
			(T = d(q, 'Projects')), q.forEach(a), (y = S(h)), (r = o(h, 'UL', {}));
			var j = i(r);
			l = o(j, 'LI', {});
			var E = i(l);
			u = o(E, 'H3', {});
			var z = i(u);
			(k = d(
				z,
				'Movie Website Interface                                                 /Jul, 2022/'
			)),
				z.forEach(a),
				(I = S(E)),
				(p = o(E, 'P', {}));
			var A = i(p);
			(x = d(
				A,
				`The main goal of this project was to showcase what I learned about React JS in the first few weeks. This project
          features a movie website interface that I have built from scratch.`
			)),
				A.forEach(a),
				E.forEach(a),
				(D = S(j)),
				(n = o(j, 'LI', {}));
			var c = i(n);
			w = o(c, 'H3', {});
			var C = i(w);
			(P = d(
				C,
				'Recommendation System - Recommending best games from user history       /Apr, 2022/'
			)),
				C.forEach(a),
				(R = S(c)),
				(v = o(c, 'P', {}));
			var M = i(v);
			(H = d(
				M,
				`The main goal of this project was to build a recommendation system that builds personalized game
          recommendations for a closed set of users (in this task, we assume that the user database will not receive new
          elements later on). The model built uses Singular Value Decomposition (SVD) to achieve the task at hand.`
			)),
				M.forEach(a),
				(J = S(c)),
				(b = o(c, 'P', {}));
			var W = i(b);
			(V = d(
				W,
				'This project was a test task for my internship in Data Science (added in the next section).'
			)),
				W.forEach(a),
				c.forEach(a),
				j.forEach(a),
				h.forEach(a),
				this.h();
		},
		h() {
			F(t, 'id', 'projects');
		},
		m(_, h) {
			G(_, t, h),
				e(t, f),
				e(f, T),
				e(t, y),
				e(t, r),
				e(r, l),
				e(l, u),
				e(u, k),
				e(l, I),
				e(l, p),
				e(p, x),
				e(r, D),
				e(r, n),
				e(n, w),
				e(w, P),
				e(n, R),
				e(n, v),
				e(v, H),
				e(n, J),
				e(n, b),
				e(b, V);
		},
		p: L,
		i: L,
		o: L,
		d(_) {
			_ && a(t);
		}
	};
}
class X extends O {
	constructor(t) {
		super(), U(this, t, null, K, B, {});
	}
}
export { X as default };
