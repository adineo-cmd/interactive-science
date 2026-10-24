// Tiny safe math-expression parser (recursive descent, no eval).
// Supports: + - * / ^ ( ) , implicit multiplication (2x, 3(x+1)),
// constants pi, e, and functions sin cos tan asin acos atan sqrt abs
// log (natural) log2 log10 exp floor ceil round min max.
// compile('m*x + c') -> { evaluate({m:2, c:1}) -> number, error }

function tokenize(src) {
  const tokens = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === ' ' || ch === '\t') { i++; continue; }
    if (/[0-9.]/.test(ch)) {
      let j = i;
      while (j < src.length && /[0-9.]/.test(src[j])) j++;
      const num = parseFloat(src.slice(i, j));
      if (Number.isNaN(num)) throw new Error('bad number at ' + i);
      tokens.push({ type: 'num', value: num });
      i = j;
      continue;
    }
    if (/[a-zA-Z_]/.test(ch)) {
      let j = i;
      while (j < src.length && /[a-zA-Z_0-9]/.test(src[j])) j++;
      tokens.push({ type: 'name', value: src.slice(i, j) });
      i = j;
      continue;
    }
    if ('+-*/^(),'.includes(ch)) { tokens.push({ type: 'op', value: ch }); i++; continue; }
    throw new Error('unexpected character "' + ch + '"');
  }
  return tokens;
}

const FUNCS = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan,
  asin: Math.asin, acos: Math.acos, atan: Math.atan,
  sqrt: Math.sqrt, abs: Math.abs, exp: Math.exp,
  log: Math.log, ln: Math.log, log2: Math.log2, log10: Math.log10,
  floor: Math.floor, ceil: Math.ceil, round: Math.round,
  min: Math.min, max: Math.max,
  pow: Math.pow, atan2: Math.atan2, sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
};
const CONSTS = { pi: Math.PI, e: Math.E, tau: Math.PI * 2 };

function parse(tokens) {
  let pos = 0;
  const peek = () => tokens[pos];
  const eat = (value) => {
    const t = tokens[pos];
    if (!t || t.value !== value) throw new Error('expected "' + value + '"');
    pos++;
    return t;
  };

  function expr() {
    let node = term();
    while (peek() && peek().type === 'op' && (peek().value === '+' || peek().value === '-')) {
      const op = tokens[pos++].value;
      const right = term();
      node = { type: 'bin', op, left: node, right };
    }
    return node;
  }

  function startsPrimary(t) {
    return t && (t.type === 'num' || t.type === 'name' || (t.type === 'op' && t.value === '('));
  }

  function term() {
    let node = unary();
    for (;;) {
      const t = peek();
      if (t && t.type === 'op' && (t.value === '*' || t.value === '/')) {
        pos++;
        node = { type: 'bin', op: t.value, left: node, right: unary() };
      } else if (startsPrimary(t)) {
        // implicit multiplication: 2x, 3(x+1), x(x-1)
        node = { type: 'bin', op: '*', left: node, right: unary() };
      } else break;
    }
    return node;
  }

  function unary() {
    const t = peek();
    if (t && t.type === 'op' && t.value === '-') {
      pos++;
      return { type: 'neg', arg: unary() };
    }
    if (t && t.type === 'op' && t.value === '+') { pos++; return unary(); }
    return power();
  }

  function power() {
    const base = primary();
    const t = peek();
    if (t && t.type === 'op' && t.value === '^') {
      pos++;
      return { type: 'bin', op: '^', left: base, right: unary() };
    }
    return base;
  }

  function primary() {
    const t = peek();
    if (!t) throw new Error('unexpected end of expression');
    if (t.type === 'num') { pos++; return { type: 'num', value: t.value }; }
    if (t.type === 'name') {
      pos++;
      const next = peek();
      if (next && next.type === 'op' && next.value === '(' && FUNCS[t.value.toLowerCase()]) {
        pos++;
        const args = [expr()];
        while (peek() && peek().value === ',') { pos++; args.push(expr()); }
        eat(')');
        return { type: 'call', name: t.value.toLowerCase(), args };
      }
      return { type: 'var', name: t.value };
    }
    if (t.type === 'op' && t.value === '(') {
      pos++;
      const node = expr();
      eat(')');
      return node;
    }
    throw new Error('unexpected "' + t.value + '"');
  }

  const ast = expr();
  if (pos < tokens.length) throw new Error('unexpected "' + tokens[pos].value + '"');
  return ast;
}

function evalNode(node, scope) {
  switch (node.type) {
    case 'num': return node.value;
    case 'var': {
      const name = node.name;
      if (scope && name in scope) return scope[name];
      const lower = name.toLowerCase();
      if (lower in CONSTS) return CONSTS[lower];
      return NaN;
    }
    case 'neg': return -evalNode(node.arg, scope);
    case 'bin': {
      const a = evalNode(node.left, scope);
      const b = evalNode(node.right, scope);
      switch (node.op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '^': return Math.pow(a, b);
      }
      return NaN;
    }
    case 'call': {
      const fn = FUNCS[node.name];
      if (!fn) return NaN;
      return fn(...node.args.map((a) => evalNode(a, scope)));
    }
  }
  return NaN;
}

export function compile(src) {
  try {
    const ast = parse(tokenize(String(src)));
    return { evaluate: (scope) => evalNode(ast, scope), error: null };
  } catch (err) {
    return { evaluate: () => NaN, error: err.message };
  }
}

export function formatNum(v, digits = 3) {
  if (!Number.isFinite(v)) return '—';
  if (v !== 0 && (Math.abs(v) >= 1e5 || Math.abs(v) < 1e-3)) return v.toExponential(2);
  const s = v.toFixed(digits);
  if (!s.includes('.')) return s;
  return s.replace(/\.?0+$/, '') || '0';
}
