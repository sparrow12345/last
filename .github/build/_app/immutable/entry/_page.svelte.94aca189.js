import {
	S as B,
	i as G,
	s as K,
	k as o,
	a as v,
	q as S,
	J as j,
	l as r,
	h as a,
	c as f,
	m as c,
	r as g,
	n as E,
	D as e,
	b as M,
	H as R
} from '../chunks/index.e03ef04e.js';
function D(q) {
	let s, y, l, d, b, k, t, h, J, L, u, I, N, m, P, F, p, x;
	return {
		c() {
			(s = o('meta')),
				(y = v()),
				(l = o('section')),
				(d = o('h2')),
				(b = S('Skills')),
				(k = v()),
				(t = o('ul')),
				(h = o('li')),
				(J = S('Languages: C/C++, C#, Java, Python, JavaScript, bash, Solidity')),
				(L = v()),
				(u = o('li')),
				(I = S('Frameworks/Libraries: React JS, Pandas, NumPy, Matplotlib, Sci-Kit learn')),
				(N = v()),
				(m = o('li')),
				(P = S('Tools: Version Control (Git), VS Code, Jupyter Notebook')),
				(F = v()),
				(p = o('li')),
				(x = S(
					'Spoken languages: Arabic - Native, English – Fluent, French – Intermediate, Russian – Beginner'
				)),
				this.h();
		},
		l(i) {
			const _ = j('svelte-t32ptj', document.head);
			(s = r(_, 'META', { name: !0, content: !0 })),
				_.forEach(a),
				(y = f(i)),
				(l = r(i, 'SECTION', { id: !0, class: !0 }));
			var C = c(l);
			d = r(C, 'H2', {});
			var T = c(d);
			(b = g(T, 'Skills')), T.forEach(a), (k = f(C)), (t = r(C, 'UL', {}));
			var n = c(t);
			h = r(n, 'LI', {});
			var V = c(h);
			(J = g(V, 'Languages: C/C++, C#, Java, Python, JavaScript, bash, Solidity')),
				V.forEach(a),
				(L = f(n)),
				(u = r(n, 'LI', {}));
			var w = c(u);
			(I = g(w, 'Frameworks/Libraries: React JS, Pandas, NumPy, Matplotlib, Sci-Kit learn')),
				w.forEach(a),
				(N = f(n)),
				(m = r(n, 'LI', {}));
			var A = c(m);
			(P = g(A, 'Tools: Version Control (Git), VS Code, Jupyter Notebook')),
				A.forEach(a),
				(F = f(n)),
				(p = r(n, 'LI', {}));
			var H = c(p);
			(x = g(
				H,
				'Spoken languages: Arabic - Native, English – Fluent, French – Intermediate, Russian – Beginner'
			)),
				H.forEach(a),
				n.forEach(a),
				C.forEach(a),
				this.h();
		},
		h() {
			(document.title = 'Home'),
				E(s, 'name', 'description'),
				E(s, 'content', 'Svelte demo app'),
				E(l, 'id', 'skills'),
				E(l, 'class', 'svelte-7w87tm');
		},
		m(i, _) {
			e(document.head, s),
				M(i, y, _),
				M(i, l, _),
				e(l, d),
				e(d, b),
				e(l, k),
				e(l, t),
				e(t, h),
				e(h, J),
				e(t, L),
				e(t, u),
				e(u, I),
				e(t, N),
				e(t, m),
				e(m, P),
				e(t, F),
				e(t, p),
				e(p, x);
		},
		p: R,
		i: R,
		o: R,
		d(i) {
			a(s), i && a(y), i && a(l);
		}
	};
}
class U extends B {
	constructor(s) {
		super(), G(this, s, null, D, K, {});
	}
}
export { U as default };
