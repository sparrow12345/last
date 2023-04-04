import {
	S as M,
	i as k,
	s as H,
	k as r,
	q as _,
	a as D,
	l as n,
	m as o,
	r as g,
	h as a,
	c as w,
	n as O,
	b as q,
	D as e,
	H as P
} from '../chunks/index.e03ef04e.js';
function G(C) {
	let t, c, y, A, s, i, h, S, v, d, E, I, u, b;
	return {
		c() {
			(t = r('section')),
				(c = r('h2')),
				(y = _('Education')),
				(A = D()),
				(s = r('ul')),
				(i = r('li')),
				(h = r('h3')),
				(S = _("Bachelor's Degree - Innopolis University")),
				(v = D()),
				(d = r('p')),
				(E = _("Earned a Bachelor's degree from Innopolis University with 4.2 GPA")),
				(I = D()),
				(u = r('li')),
				(b =
					_(`Main coursework: Data Structures and Algorithms, Introduction to AI, Software Systems Analysis and Design,
      Computer Architecture, Operating Systems, Linear Algebra, Mathematical Analysis, Probabilities & Statistics.`)),
				this.h();
		},
		l(m) {
			t = n(m, 'SECTION', { id: !0 });
			var l = o(t);
			c = n(l, 'H2', {});
			var x = o(c);
			(y = g(x, 'Education')), x.forEach(a), (A = w(l)), (s = n(l, 'UL', {}));
			var p = o(s);
			i = n(p, 'LI', {});
			var f = o(i);
			h = n(f, 'H3', {});
			var L = o(h);
			(S = g(L, "Bachelor's Degree - Innopolis University")),
				L.forEach(a),
				(v = w(f)),
				(d = n(f, 'P', {}));
			var U = o(d);
			(E = g(U, "Earned a Bachelor's degree from Innopolis University with 4.2 GPA")),
				U.forEach(a),
				f.forEach(a),
				(I = w(p)),
				(u = n(p, 'LI', {}));
			var B = o(u);
			(b = g(
				B,
				`Main coursework: Data Structures and Algorithms, Introduction to AI, Software Systems Analysis and Design,
      Computer Architecture, Operating Systems, Linear Algebra, Mathematical Analysis, Probabilities & Statistics.`
			)),
				B.forEach(a),
				p.forEach(a),
				l.forEach(a),
				this.h();
		},
		h() {
			O(t, 'id', 'education');
		},
		m(m, l) {
			q(m, t, l),
				e(t, c),
				e(c, y),
				e(t, A),
				e(t, s),
				e(s, i),
				e(i, h),
				e(h, S),
				e(i, v),
				e(i, d),
				e(d, E),
				e(s, I),
				e(s, u),
				e(u, b);
		},
		p: P,
		i: P,
		o: P,
		d(m) {
			m && a(t);
		}
	};
}
class T extends M {
	constructor(t) {
		super(), k(this, t, null, G, H, {});
	}
}
export { T as default };
