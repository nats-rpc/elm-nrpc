(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}


// BYTES

function _Bytes_width(bytes)
{
	return bytes.byteLength;
}

var _Bytes_getHostEndianness = F2(function(le, be)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(new Uint8Array(new Uint32Array([1]))[0] === 1 ? le : be));
	});
});


// ENCODERS

function _Bytes_encode(encoder)
{
	var mutableBytes = new DataView(new ArrayBuffer($elm$bytes$Bytes$Encode$getWidth(encoder)));
	$elm$bytes$Bytes$Encode$write(encoder)(mutableBytes)(0);
	return mutableBytes;
}


// SIGNED INTEGERS

var _Bytes_write_i8  = F3(function(mb, i, n) { mb.setInt8(i, n); return i + 1; });
var _Bytes_write_i16 = F4(function(mb, i, n, isLE) { mb.setInt16(i, n, isLE); return i + 2; });
var _Bytes_write_i32 = F4(function(mb, i, n, isLE) { mb.setInt32(i, n, isLE); return i + 4; });


// UNSIGNED INTEGERS

var _Bytes_write_u8  = F3(function(mb, i, n) { mb.setUint8(i, n); return i + 1 ;});
var _Bytes_write_u16 = F4(function(mb, i, n, isLE) { mb.setUint16(i, n, isLE); return i + 2; });
var _Bytes_write_u32 = F4(function(mb, i, n, isLE) { mb.setUint32(i, n, isLE); return i + 4; });


// FLOATS

var _Bytes_write_f32 = F4(function(mb, i, n, isLE) { mb.setFloat32(i, n, isLE); return i + 4; });
var _Bytes_write_f64 = F4(function(mb, i, n, isLE) { mb.setFloat64(i, n, isLE); return i + 8; });


// BYTES

var _Bytes_write_bytes = F3(function(mb, offset, bytes)
{
	for (var i = 0, len = bytes.byteLength, limit = len - 4; i <= limit; i += 4)
	{
		mb.setUint32(offset + i, bytes.getUint32(i));
	}
	for (; i < len; i++)
	{
		mb.setUint8(offset + i, bytes.getUint8(i));
	}
	return offset + len;
});


// STRINGS

function _Bytes_getStringWidth(string)
{
	for (var width = 0, i = 0; i < string.length; i++)
	{
		var code = string.charCodeAt(i);
		width +=
			(code < 0x80) ? 1 :
			(code < 0x800) ? 2 :
			(code < 0xD800 || 0xDBFF < code) ? 3 : (i++, 4);
	}
	return width;
}

var _Bytes_write_string = F3(function(mb, offset, string)
{
	for (var i = 0; i < string.length; i++)
	{
		var code = string.charCodeAt(i);
		offset +=
			(code < 0x80)
				? (mb.setUint8(offset, code)
				, 1
				)
				:
			(code < 0x800)
				? (mb.setUint16(offset, 0xC080 /* 0b1100000010000000 */
					| (code >>> 6 & 0x1F /* 0b00011111 */) << 8
					| code & 0x3F /* 0b00111111 */)
				, 2
				)
				:
			(code < 0xD800 || 0xDBFF < code)
				? (mb.setUint16(offset, 0xE080 /* 0b1110000010000000 */
					| (code >>> 12 & 0xF /* 0b00001111 */) << 8
					| code >>> 6 & 0x3F /* 0b00111111 */)
				, mb.setUint8(offset + 2, 0x80 /* 0b10000000 */
					| code & 0x3F /* 0b00111111 */)
				, 3
				)
				:
			(code = (code - 0xD800) * 0x400 + string.charCodeAt(++i) - 0xDC00 + 0x10000
			, mb.setUint32(offset, 0xF0808080 /* 0b11110000100000001000000010000000 */
				| (code >>> 18 & 0x7 /* 0b00000111 */) << 24
				| (code >>> 12 & 0x3F /* 0b00111111 */) << 16
				| (code >>> 6 & 0x3F /* 0b00111111 */) << 8
				| code & 0x3F /* 0b00111111 */)
			, 4
			);
	}
	return offset;
});


// DECODER

var _Bytes_decode = F2(function(decoder, bytes)
{
	try {
		return $elm$core$Maybe$Just(A2(decoder, bytes, 0).b);
	} catch(e) {
		return $elm$core$Maybe$Nothing;
	}
});

var _Bytes_read_i8  = F2(function(      bytes, offset) { return _Utils_Tuple2(offset + 1, bytes.getInt8(offset)); });
var _Bytes_read_i16 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 2, bytes.getInt16(offset, isLE)); });
var _Bytes_read_i32 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getInt32(offset, isLE)); });
var _Bytes_read_u8  = F2(function(      bytes, offset) { return _Utils_Tuple2(offset + 1, bytes.getUint8(offset)); });
var _Bytes_read_u16 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 2, bytes.getUint16(offset, isLE)); });
var _Bytes_read_u32 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getUint32(offset, isLE)); });
var _Bytes_read_f32 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getFloat32(offset, isLE)); });
var _Bytes_read_f64 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 8, bytes.getFloat64(offset, isLE)); });

var _Bytes_read_bytes = F3(function(len, bytes, offset)
{
	return _Utils_Tuple2(offset + len, new DataView(bytes.buffer, bytes.byteOffset + offset, len));
});

var _Bytes_read_string = F3(function(len, bytes, offset)
{
	var string = '';
	var end = offset + len;
	for (; offset < end;)
	{
		var byte = bytes.getUint8(offset++);
		string +=
			(byte < 128)
				? String.fromCharCode(byte)
				:
			((byte & 0xE0 /* 0b11100000 */) === 0xC0 /* 0b11000000 */)
				? String.fromCharCode((byte & 0x1F /* 0b00011111 */) << 6 | bytes.getUint8(offset++) & 0x3F /* 0b00111111 */)
				:
			((byte & 0xF0 /* 0b11110000 */) === 0xE0 /* 0b11100000 */)
				? String.fromCharCode(
					(byte & 0xF /* 0b00001111 */) << 12
					| (bytes.getUint8(offset++) & 0x3F /* 0b00111111 */) << 6
					| bytes.getUint8(offset++) & 0x3F /* 0b00111111 */
				)
				:
				(byte =
					((byte & 0x7 /* 0b00000111 */) << 18
						| (bytes.getUint8(offset++) & 0x3F /* 0b00111111 */) << 12
						| (bytes.getUint8(offset++) & 0x3F /* 0b00111111 */) << 6
						| bytes.getUint8(offset++) & 0x3F /* 0b00111111 */
					) - 0x10000
				, String.fromCharCode(Math.floor(byte / 0x400) + 0xD800, byte % 0x400 + 0xDC00)
				);
	}
	return _Utils_Tuple2(offset, string);
});

var _Bytes_decodeFailure = F2(function() { throw 0; });



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $chelovek0v$bbase64$Base64$Encode$BytesEncoder = function (a) {
	return {$: 'BytesEncoder', a: a};
};
var $chelovek0v$bbase64$Base64$Encode$bytes = function (input) {
	return $chelovek0v$bbase64$Base64$Encode$BytesEncoder(input);
};
var $elm$bytes$Bytes$Encode$getWidth = function (builder) {
	switch (builder.$) {
		case 'I8':
			return 1;
		case 'I16':
			return 2;
		case 'I32':
			return 4;
		case 'U8':
			return 1;
		case 'U16':
			return 2;
		case 'U32':
			return 4;
		case 'F32':
			return 4;
		case 'F64':
			return 8;
		case 'Seq':
			var w = builder.a;
			return w;
		case 'Utf8':
			var w = builder.a;
			return w;
		default:
			var bs = builder.a;
			return _Bytes_width(bs);
	}
};
var $elm$bytes$Bytes$LE = {$: 'LE'};
var $elm$bytes$Bytes$Encode$write = F3(
	function (builder, mb, offset) {
		switch (builder.$) {
			case 'I8':
				var n = builder.a;
				return A3(_Bytes_write_i8, mb, offset, n);
			case 'I16':
				var e = builder.a;
				var n = builder.b;
				return A4(
					_Bytes_write_i16,
					mb,
					offset,
					n,
					_Utils_eq(e, $elm$bytes$Bytes$LE));
			case 'I32':
				var e = builder.a;
				var n = builder.b;
				return A4(
					_Bytes_write_i32,
					mb,
					offset,
					n,
					_Utils_eq(e, $elm$bytes$Bytes$LE));
			case 'U8':
				var n = builder.a;
				return A3(_Bytes_write_u8, mb, offset, n);
			case 'U16':
				var e = builder.a;
				var n = builder.b;
				return A4(
					_Bytes_write_u16,
					mb,
					offset,
					n,
					_Utils_eq(e, $elm$bytes$Bytes$LE));
			case 'U32':
				var e = builder.a;
				var n = builder.b;
				return A4(
					_Bytes_write_u32,
					mb,
					offset,
					n,
					_Utils_eq(e, $elm$bytes$Bytes$LE));
			case 'F32':
				var e = builder.a;
				var n = builder.b;
				return A4(
					_Bytes_write_f32,
					mb,
					offset,
					n,
					_Utils_eq(e, $elm$bytes$Bytes$LE));
			case 'F64':
				var e = builder.a;
				var n = builder.b;
				return A4(
					_Bytes_write_f64,
					mb,
					offset,
					n,
					_Utils_eq(e, $elm$bytes$Bytes$LE));
			case 'Seq':
				var bs = builder.b;
				return A3($elm$bytes$Bytes$Encode$writeSequence, bs, mb, offset);
			case 'Utf8':
				var s = builder.b;
				return A3(_Bytes_write_string, mb, offset, s);
			default:
				var bs = builder.a;
				return A3(_Bytes_write_bytes, mb, offset, bs);
		}
	});
var $elm$bytes$Bytes$Encode$writeSequence = F3(
	function (builders, mb, offset) {
		writeSequence:
		while (true) {
			if (!builders.b) {
				return offset;
			} else {
				var b = builders.a;
				var bs = builders.b;
				var $temp$builders = bs,
					$temp$mb = mb,
					$temp$offset = A3($elm$bytes$Bytes$Encode$write, b, mb, offset);
				builders = $temp$builders;
				mb = $temp$mb;
				offset = $temp$offset;
				continue writeSequence;
			}
		}
	});
var $elm$bytes$Bytes$Encode$encode = _Bytes_encode;
var $elm$bytes$Bytes$Encode$Utf8 = F2(
	function (a, b) {
		return {$: 'Utf8', a: a, b: b};
	});
var $elm$bytes$Bytes$Encode$string = function (str) {
	return A2(
		$elm$bytes$Bytes$Encode$Utf8,
		_Bytes_getStringWidth(str),
		str);
};
var $elm$bytes$Bytes$Decode$decode = F2(
	function (_v0, bs) {
		var decoder = _v0.a;
		return A2(_Bytes_decode, decoder, bs);
	});
var $elm$bytes$Bytes$Decode$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$bytes$Bytes$Decode$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $chelovek0v$bbase64$Base64$Shift$Shift2 = {$: 'Shift2'};
var $chelovek0v$bbase64$Base64$Shift$Shift4 = {$: 'Shift4'};
var $chelovek0v$bbase64$Base64$Shift$Shift6 = {$: 'Shift6'};
var $elm$core$Bitwise$and = _Bitwise_and;
var $chelovek0v$bbase64$Base64$Shift$and = F2(
	function (shift, value) {
		switch (shift.$) {
			case 'Shift0':
				return value;
			case 'Shift2':
				return 3 & value;
			case 'Shift4':
				return 15 & value;
			default:
				return 63 & value;
		}
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $chelovek0v$bbase64$Base64$Table$codeToCharMap = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(0, 'A'),
			_Utils_Tuple2(1, 'B'),
			_Utils_Tuple2(2, 'C'),
			_Utils_Tuple2(3, 'D'),
			_Utils_Tuple2(4, 'E'),
			_Utils_Tuple2(5, 'F'),
			_Utils_Tuple2(6, 'G'),
			_Utils_Tuple2(7, 'H'),
			_Utils_Tuple2(8, 'I'),
			_Utils_Tuple2(9, 'J'),
			_Utils_Tuple2(10, 'K'),
			_Utils_Tuple2(11, 'L'),
			_Utils_Tuple2(12, 'M'),
			_Utils_Tuple2(13, 'N'),
			_Utils_Tuple2(14, 'O'),
			_Utils_Tuple2(15, 'P'),
			_Utils_Tuple2(16, 'Q'),
			_Utils_Tuple2(17, 'R'),
			_Utils_Tuple2(18, 'S'),
			_Utils_Tuple2(19, 'T'),
			_Utils_Tuple2(20, 'U'),
			_Utils_Tuple2(21, 'V'),
			_Utils_Tuple2(22, 'W'),
			_Utils_Tuple2(23, 'X'),
			_Utils_Tuple2(24, 'Y'),
			_Utils_Tuple2(25, 'Z'),
			_Utils_Tuple2(26, 'a'),
			_Utils_Tuple2(27, 'b'),
			_Utils_Tuple2(28, 'c'),
			_Utils_Tuple2(29, 'd'),
			_Utils_Tuple2(30, 'e'),
			_Utils_Tuple2(31, 'f'),
			_Utils_Tuple2(32, 'g'),
			_Utils_Tuple2(33, 'h'),
			_Utils_Tuple2(34, 'i'),
			_Utils_Tuple2(35, 'j'),
			_Utils_Tuple2(36, 'k'),
			_Utils_Tuple2(37, 'l'),
			_Utils_Tuple2(38, 'm'),
			_Utils_Tuple2(39, 'n'),
			_Utils_Tuple2(40, 'o'),
			_Utils_Tuple2(41, 'p'),
			_Utils_Tuple2(42, 'q'),
			_Utils_Tuple2(43, 'r'),
			_Utils_Tuple2(44, 's'),
			_Utils_Tuple2(45, 't'),
			_Utils_Tuple2(46, 'u'),
			_Utils_Tuple2(47, 'v'),
			_Utils_Tuple2(48, 'w'),
			_Utils_Tuple2(49, 'x'),
			_Utils_Tuple2(50, 'y'),
			_Utils_Tuple2(51, 'z'),
			_Utils_Tuple2(52, '0'),
			_Utils_Tuple2(53, '1'),
			_Utils_Tuple2(54, '2'),
			_Utils_Tuple2(55, '3'),
			_Utils_Tuple2(56, '4'),
			_Utils_Tuple2(57, '5'),
			_Utils_Tuple2(58, '6'),
			_Utils_Tuple2(59, '7'),
			_Utils_Tuple2(60, '8'),
			_Utils_Tuple2(61, '9'),
			_Utils_Tuple2(62, '+'),
			_Utils_Tuple2(63, '/')
		]));
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $chelovek0v$bbase64$Base64$Table$encode = function (code) {
	var _v0 = A2($elm$core$Dict$get, code, $chelovek0v$bbase64$Base64$Table$codeToCharMap);
	if (_v0.$ === 'Just') {
		var char_ = _v0.a;
		return char_;
	} else {
		return '';
	}
};
var $chelovek0v$bbase64$Base64$Shift$next = function (shift) {
	switch (shift.$) {
		case 'Shift0':
			return $chelovek0v$bbase64$Base64$Shift$Shift2;
		case 'Shift2':
			return $chelovek0v$bbase64$Base64$Shift$Shift4;
		case 'Shift4':
			return $chelovek0v$bbase64$Base64$Shift$Shift6;
		default:
			return $chelovek0v$bbase64$Base64$Shift$Shift2;
	}
};
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $chelovek0v$bbase64$Base64$Shift$toInt = function (shift) {
	switch (shift.$) {
		case 'Shift0':
			return 0;
		case 'Shift2':
			return 2;
		case 'Shift4':
			return 4;
		default:
			return 6;
	}
};
var $chelovek0v$bbase64$Base64$Shift$shiftRightZfBy = F2(
	function (shift, value) {
		return value >>> $chelovek0v$bbase64$Base64$Shift$toInt(shift);
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $chelovek0v$bbase64$Base64$Shift$shiftLeftBy = F2(
	function (shift, value) {
		return value << $chelovek0v$bbase64$Base64$Shift$toInt(shift);
	});
var $chelovek0v$bbase64$Base64$Encode$sixtet = F2(
	function (octet, _v0) {
		var shift = _v0.a;
		var sixtet_ = _v0.b;
		var strAcc = _v0.c;
		switch (shift.$) {
			case 'Shift0':
				return A2($chelovek0v$bbase64$Base64$Shift$shiftRightZfBy, $chelovek0v$bbase64$Base64$Shift$Shift2, octet);
			case 'Shift2':
				return A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, $chelovek0v$bbase64$Base64$Shift$Shift4, sixtet_) | A2($chelovek0v$bbase64$Base64$Shift$shiftRightZfBy, $chelovek0v$bbase64$Base64$Shift$Shift4, octet);
			case 'Shift4':
				return A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, $chelovek0v$bbase64$Base64$Shift$Shift2, sixtet_) | A2($chelovek0v$bbase64$Base64$Shift$shiftRightZfBy, $chelovek0v$bbase64$Base64$Shift$Shift6, octet);
			default:
				return sixtet_;
		}
	});
var $chelovek0v$bbase64$Base64$Encode$encodeStep = F2(
	function (octet, encodeState) {
		var shift = encodeState.a;
		var strAcc = encodeState.c;
		var nextSixtet = function () {
			switch (shift.$) {
				case 'Shift0':
					return A2($chelovek0v$bbase64$Base64$Shift$and, $chelovek0v$bbase64$Base64$Shift$Shift2, octet);
				case 'Shift2':
					return A2($chelovek0v$bbase64$Base64$Shift$and, $chelovek0v$bbase64$Base64$Shift$Shift4, octet);
				case 'Shift4':
					return A2($chelovek0v$bbase64$Base64$Shift$and, $chelovek0v$bbase64$Base64$Shift$Shift6, octet);
				default:
					return A2($chelovek0v$bbase64$Base64$Shift$and, $chelovek0v$bbase64$Base64$Shift$Shift2, octet);
			}
		}();
		var currentSixtet = A2($chelovek0v$bbase64$Base64$Encode$sixtet, octet, encodeState);
		var base64Char = function () {
			if (shift.$ === 'Shift6') {
				return _Utils_ap(
					$chelovek0v$bbase64$Base64$Table$encode(currentSixtet),
					$chelovek0v$bbase64$Base64$Table$encode(
						A2($chelovek0v$bbase64$Base64$Shift$shiftRightZfBy, $chelovek0v$bbase64$Base64$Shift$Shift2, octet)));
			} else {
				return $chelovek0v$bbase64$Base64$Table$encode(currentSixtet);
			}
		}();
		return _Utils_Tuple3(
			$chelovek0v$bbase64$Base64$Shift$next(shift),
			nextSixtet,
			_Utils_ap(strAcc, base64Char));
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$bytes$Bytes$Decode$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $elm$bytes$Bytes$Decode$map = F2(
	function (func, _v0) {
		var decodeA = _v0.a;
		return $elm$bytes$Bytes$Decode$Decoder(
			F2(
				function (bites, offset) {
					var _v1 = A2(decodeA, bites, offset);
					var aOffset = _v1.a;
					var a = _v1.b;
					return _Utils_Tuple2(
						aOffset,
						func(a));
				}));
	});
var $elm$bytes$Bytes$Decode$succeed = function (a) {
	return $elm$bytes$Bytes$Decode$Decoder(
		F2(
			function (_v0, offset) {
				return _Utils_Tuple2(offset, a);
			}));
};
var $chelovek0v$bbase64$Base64$Encode$decodeStep = F2(
	function (octetDecoder, _v0) {
		var n = _v0.a;
		var encodeState = _v0.b;
		return (n <= 0) ? $elm$bytes$Bytes$Decode$succeed(
			$elm$bytes$Bytes$Decode$Done(encodeState)) : A2(
			$elm$bytes$Bytes$Decode$map,
			function (octet) {
				return $elm$bytes$Bytes$Decode$Loop(
					_Utils_Tuple2(
						n - 1,
						A2($chelovek0v$bbase64$Base64$Encode$encodeStep, octet, encodeState)));
			},
			octetDecoder);
	});
var $chelovek0v$bbase64$Base64$Encode$finalize = function (_v0) {
	var shift = _v0.a;
	var sixtet_ = _v0.b;
	var strAcc = _v0.c;
	switch (shift.$) {
		case 'Shift6':
			return _Utils_ap(
				strAcc,
				$chelovek0v$bbase64$Base64$Table$encode(sixtet_));
		case 'Shift4':
			return strAcc + ($chelovek0v$bbase64$Base64$Table$encode(
				A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, $chelovek0v$bbase64$Base64$Shift$Shift2, sixtet_)) + '=');
		case 'Shift2':
			return strAcc + ($chelovek0v$bbase64$Base64$Table$encode(
				A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, $chelovek0v$bbase64$Base64$Shift$Shift4, sixtet_)) + '==');
		default:
			return strAcc;
	}
};
var $chelovek0v$bbase64$Base64$Shift$Shift0 = {$: 'Shift0'};
var $chelovek0v$bbase64$Base64$Encode$initialEncodeState = _Utils_Tuple3($chelovek0v$bbase64$Base64$Shift$Shift0, 0, '');
var $elm$bytes$Bytes$Decode$loopHelp = F4(
	function (state, callback, bites, offset) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var decoder = _v0.a;
			var _v1 = A2(decoder, bites, offset);
			var newOffset = _v1.a;
			var step = _v1.b;
			if (step.$ === 'Loop') {
				var newState = step.a;
				var $temp$state = newState,
					$temp$callback = callback,
					$temp$bites = bites,
					$temp$offset = newOffset;
				state = $temp$state;
				callback = $temp$callback;
				bites = $temp$bites;
				offset = $temp$offset;
				continue loopHelp;
			} else {
				var result = step.a;
				return _Utils_Tuple2(newOffset, result);
			}
		}
	});
var $elm$bytes$Bytes$Decode$loop = F2(
	function (state, callback) {
		return $elm$bytes$Bytes$Decode$Decoder(
			A2($elm$bytes$Bytes$Decode$loopHelp, state, callback));
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$bytes$Bytes$Decode$unsignedInt8 = $elm$bytes$Bytes$Decode$Decoder(_Bytes_read_u8);
var $elm$bytes$Bytes$width = _Bytes_width;
var $chelovek0v$bbase64$Base64$Encode$tryEncode = function (input) {
	var decoderInitialState = _Utils_Tuple2(
		$elm$bytes$Bytes$width(input),
		$chelovek0v$bbase64$Base64$Encode$initialEncodeState);
	var base64Decoder = A2(
		$elm$bytes$Bytes$Decode$loop,
		decoderInitialState,
		$chelovek0v$bbase64$Base64$Encode$decodeStep($elm$bytes$Bytes$Decode$unsignedInt8));
	return A2(
		$elm$core$Maybe$map,
		$chelovek0v$bbase64$Base64$Encode$finalize,
		A2($elm$bytes$Bytes$Decode$decode, base64Decoder, input));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $chelovek0v$bbase64$Base64$Encode$encode = function (encoder) {
	if (encoder.$ === 'StringEncoder') {
		var input = encoder.a;
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			$chelovek0v$bbase64$Base64$Encode$tryEncode(
				$elm$bytes$Bytes$Encode$encode(
					$elm$bytes$Bytes$Encode$string(input))));
	} else {
		var input = encoder.a;
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			$chelovek0v$bbase64$Base64$Encode$tryEncode(input));
	}
};
var $elm$bytes$Bytes$Encode$Bytes = function (a) {
	return {$: 'Bytes', a: a};
};
var $elm$bytes$Bytes$Encode$bytes = $elm$bytes$Bytes$Encode$Bytes;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$bytes$Bytes$Encode$Seq = F2(
	function (a, b) {
		return {$: 'Seq', a: a, b: b};
	});
var $elm$bytes$Bytes$Encode$getWidths = F2(
	function (width, builders) {
		getWidths:
		while (true) {
			if (!builders.b) {
				return width;
			} else {
				var b = builders.a;
				var bs = builders.b;
				var $temp$width = width + $elm$bytes$Bytes$Encode$getWidth(b),
					$temp$builders = bs;
				width = $temp$width;
				builders = $temp$builders;
				continue getWidths;
			}
		}
	});
var $elm$bytes$Bytes$Encode$sequence = function (builders) {
	return A2(
		$elm$bytes$Bytes$Encode$Seq,
		A2($elm$bytes$Bytes$Encode$getWidths, 0, builders),
		builders);
};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$encode = function (encoder) {
	switch (encoder.$) {
		case 'Encoder':
			var _v1 = encoder.b;
			var encoder_ = _v1.b;
			return $elm$bytes$Bytes$Encode$encode(encoder_);
		case 'ListEncoder':
			var encoders = encoder.a;
			return $elm$bytes$Bytes$Encode$encode(
				$elm$bytes$Bytes$Encode$sequence(
					A2(
						$elm$core$List$map,
						A2($elm$core$Basics$composeL, $elm$bytes$Bytes$Encode$bytes, $eriktim$elm_protocol_buffers$Protobuf$Encode$encode),
						encoders)));
		default:
			return $elm$bytes$Bytes$Encode$encode(
				$elm$bytes$Bytes$Encode$sequence(_List_Nil));
	}
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $eriktim$elm_protocol_buffers$Protobuf$Encode$Encoder = F2(
	function (a, b) {
		return {$: 'Encoder', a: a, b: b};
	});
var $eriktim$elm_protocol_buffers$Internal$Protobuf$VarInt = {$: 'VarInt'};
var $elm$bytes$Bytes$Encode$U8 = function (a) {
	return {$: 'U8', a: a};
};
var $elm$bytes$Bytes$Encode$unsignedInt8 = $elm$bytes$Bytes$Encode$U8;
var $eriktim$elm_protocol_buffers$Protobuf$Encode$toVarIntEncoders = F2(
	function (config, value) {
		var _v0 = config.popBase128(value);
		var base128 = _v0.a;
		var higherBits = _v0.b;
		return _Utils_eq(
			higherBits,
			config.fromBase128(0)) ? _List_fromArray(
			[
				$elm$bytes$Bytes$Encode$unsignedInt8(base128)
			]) : A2(
			$elm$core$List$cons,
			$elm$bytes$Bytes$Encode$unsignedInt8(128 | base128),
			A2($eriktim$elm_protocol_buffers$Protobuf$Encode$toVarIntEncoders, config, higherBits));
	});
var $eriktim$elm_protocol_buffers$Protobuf$Encode$varInt = F2(
	function (config, value) {
		var encoders = A2($eriktim$elm_protocol_buffers$Protobuf$Encode$toVarIntEncoders, config, value);
		return _Utils_Tuple2(
			$elm$core$List$length(encoders),
			$elm$bytes$Bytes$Encode$sequence(encoders));
	});
var $eriktim$elm_protocol_buffers$Protobuf$Encode$intEncoder = function (config) {
	return A2(
		$elm$core$Basics$composeL,
		$eriktim$elm_protocol_buffers$Protobuf$Encode$Encoder($eriktim$elm_protocol_buffers$Internal$Protobuf$VarInt),
		$eriktim$elm_protocol_buffers$Protobuf$Encode$varInt(config));
};
var $elm$core$Basics$pow = _Basics_pow;
var $eriktim$elm_protocol_buffers$Internal$Int32$fromSigned = function (value) {
	return (value < 0) ? (value + A2($elm$core$Basics$pow, 2, 32)) : value;
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $eriktim$elm_protocol_buffers$Internal$Int32$fromZigZag = function (value) {
	return (value >>> 1) ^ ((-1) * (1 & value));
};
var $eriktim$elm_protocol_buffers$Internal$Int32$popBase128 = function (value) {
	var higherBits = value >>> 7;
	var base128 = 127 & value;
	return _Utils_Tuple2(base128, higherBits);
};
var $eriktim$elm_protocol_buffers$Internal$Int32$pushBase128 = F2(
	function (base128, _int) {
		return base128 + (_int << 7);
	});
var $elm$core$Basics$ge = _Utils_ge;
var $eriktim$elm_protocol_buffers$Internal$Int32$toSigned = function (value) {
	return (_Utils_cmp(
		value,
		A2($elm$core$Basics$pow, 2, 31)) > -1) ? (value - A2($elm$core$Basics$pow, 2, 32)) : value;
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $eriktim$elm_protocol_buffers$Internal$Int32$toZigZag = function (value) {
	return (value >> 31) ^ (value << 1);
};
var $eriktim$elm_protocol_buffers$Internal$Int32$operations = {fromBase128: $elm$core$Basics$identity, fromSigned: $eriktim$elm_protocol_buffers$Internal$Int32$fromSigned, fromZigZag: $eriktim$elm_protocol_buffers$Internal$Int32$fromZigZag, popBase128: $eriktim$elm_protocol_buffers$Internal$Int32$popBase128, pushBase128: $eriktim$elm_protocol_buffers$Internal$Int32$pushBase128, toSigned: $eriktim$elm_protocol_buffers$Internal$Int32$toSigned, toZigZag: $eriktim$elm_protocol_buffers$Internal$Int32$toZigZag};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$int32 = $eriktim$elm_protocol_buffers$Protobuf$Encode$intEncoder($eriktim$elm_protocol_buffers$Internal$Int32$operations);
var $eriktim$elm_protocol_buffers$Protobuf$Encode$ListEncoder = function (a) {
	return {$: 'ListEncoder', a: a};
};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$list = function (fn) {
	return A2(
		$elm$core$Basics$composeL,
		$eriktim$elm_protocol_buffers$Protobuf$Encode$ListEncoder,
		$elm$core$List$map(fn));
};
var $eriktim$elm_protocol_buffers$Internal$Protobuf$LengthDelimited = function (a) {
	return {$: 'LengthDelimited', a: a};
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$sequence = function (items) {
	var width = $elm$core$List$sum(
		A2($elm$core$List$map, $elm$core$Tuple$first, items));
	return _Utils_Tuple2(
		width,
		$elm$bytes$Bytes$Encode$sequence(
			A2($elm$core$List$map, $elm$core$Tuple$second, items)));
};
var $elm$core$List$sortBy = _List_sortBy;
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $eriktim$elm_protocol_buffers$Protobuf$Encode$varInt32 = $eriktim$elm_protocol_buffers$Protobuf$Encode$varInt($eriktim$elm_protocol_buffers$Internal$Int32$operations);
var $eriktim$elm_protocol_buffers$Protobuf$Encode$tag = F2(
	function (fieldNumber, wireType) {
		var encodeTag = function (base4) {
			return $eriktim$elm_protocol_buffers$Protobuf$Encode$varInt32((fieldNumber << 3) | base4);
		};
		switch (wireType.$) {
			case 'VarInt':
				return encodeTag(0);
			case 'Bit64':
				return encodeTag(1);
			case 'LengthDelimited':
				var width = wireType.a;
				return $eriktim$elm_protocol_buffers$Protobuf$Encode$sequence(
					_List_fromArray(
						[
							encodeTag(2),
							$eriktim$elm_protocol_buffers$Protobuf$Encode$varInt32(width)
						]));
			case 'StartGroup':
				return encodeTag(3);
			case 'EndGroup':
				return encodeTag(4);
			default:
				return encodeTag(5);
		}
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $eriktim$elm_protocol_buffers$Protobuf$Encode$unwrap = function (encoder) {
	if (encoder.$ === 'Encoder') {
		var encoder_ = encoder.b;
		return $elm$core$Maybe$Just(encoder_);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$toPackedEncoder = function (encoders) {
	if (encoders.b && (encoders.a.$ === 'Encoder')) {
		var _v1 = encoders.a;
		var wireType = _v1.a;
		var encoder = _v1.b;
		var others = encoders.b;
		if (wireType.$ === 'LengthDelimited') {
			return $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Just(
				$eriktim$elm_protocol_buffers$Protobuf$Encode$sequence(
					A2(
						$elm$core$List$cons,
						encoder,
						A2($elm$core$List$filterMap, $eriktim$elm_protocol_buffers$Protobuf$Encode$unwrap, others))));
		}
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$toKeyValuePairEncoder = function (_v0) {
	var fieldNumber = _v0.a;
	var encoder = _v0.b;
	switch (encoder.$) {
		case 'Encoder':
			var wireType = encoder.a;
			var encoder_ = encoder.b;
			return $eriktim$elm_protocol_buffers$Protobuf$Encode$sequence(
				_List_fromArray(
					[
						A2($eriktim$elm_protocol_buffers$Protobuf$Encode$tag, fieldNumber, wireType),
						encoder_
					]));
		case 'ListEncoder':
			var encoders = encoder.a;
			var _v2 = $eriktim$elm_protocol_buffers$Protobuf$Encode$toPackedEncoder(encoders);
			if (_v2.$ === 'Just') {
				var encoder_ = _v2.a;
				return $eriktim$elm_protocol_buffers$Protobuf$Encode$sequence(
					_List_fromArray(
						[
							A2(
							$eriktim$elm_protocol_buffers$Protobuf$Encode$tag,
							fieldNumber,
							$eriktim$elm_protocol_buffers$Internal$Protobuf$LengthDelimited(encoder_.a)),
							encoder_
						]));
			} else {
				return $eriktim$elm_protocol_buffers$Protobuf$Encode$sequence(
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeL,
							$eriktim$elm_protocol_buffers$Protobuf$Encode$toKeyValuePairEncoder,
							$elm$core$Tuple$pair(fieldNumber)),
						encoders));
			}
		default:
			return $eriktim$elm_protocol_buffers$Protobuf$Encode$sequence(_List_Nil);
	}
};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$message = function (items) {
	return function (e) {
		return A2(
			$eriktim$elm_protocol_buffers$Protobuf$Encode$Encoder,
			$eriktim$elm_protocol_buffers$Internal$Protobuf$LengthDelimited(e.a),
			e);
	}(
		$eriktim$elm_protocol_buffers$Protobuf$Encode$sequence(
			A2(
				$elm$core$List$map,
				$eriktim$elm_protocol_buffers$Protobuf$Encode$toKeyValuePairEncoder,
				A2($elm$core$List$sortBy, $elm$core$Tuple$first, items))));
};
var $elm$bytes$Bytes$Encode$getStringWidth = _Bytes_getStringWidth;
var $eriktim$elm_protocol_buffers$Protobuf$Encode$string = function (v) {
	var width = $elm$bytes$Bytes$Encode$getStringWidth(v);
	return A2(
		$eriktim$elm_protocol_buffers$Protobuf$Encode$Encoder,
		$eriktim$elm_protocol_buffers$Internal$Protobuf$LengthDelimited(width),
		_Utils_Tuple2(
			width,
			$elm$bytes$Bytes$Encode$string(v)));
};
var $author$project$Proto$Google$Protobuf$Internals_$encodeProto__Google__Protobuf__GeneratedCodeInfo__Annotation = function (value) {
	return $eriktim$elm_protocol_buffers$Protobuf$Encode$message(
		_List_fromArray(
			[
				_Utils_Tuple2(
				1,
				A2($eriktim$elm_protocol_buffers$Protobuf$Encode$list, $eriktim$elm_protocol_buffers$Protobuf$Encode$int32, value.path)),
				_Utils_Tuple2(
				2,
				$eriktim$elm_protocol_buffers$Protobuf$Encode$string(value.sourceFile)),
				_Utils_Tuple2(
				3,
				$eriktim$elm_protocol_buffers$Protobuf$Encode$int32(value.begin)),
				_Utils_Tuple2(
				4,
				$eriktim$elm_protocol_buffers$Protobuf$Encode$int32(value.end))
			]));
};
var $author$project$Proto$Google$Protobuf$Internals_$encodeProto__Google__Protobuf__GeneratedCodeInfo = function (value) {
	return $eriktim$elm_protocol_buffers$Protobuf$Encode$message(
		_List_fromArray(
			[
				_Utils_Tuple2(
				1,
				A2($eriktim$elm_protocol_buffers$Protobuf$Encode$list, $author$project$Proto$Google$Protobuf$Internals_$encodeProto__Google__Protobuf__GeneratedCodeInfo__Annotation, value.annotation))
			]));
};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$NoEncoder = {$: 'NoEncoder'};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$none = $eriktim$elm_protocol_buffers$Protobuf$Encode$NoEncoder;
var $author$project$Proto$Google$Protobuf$Compiler$Internals_$encodeProto__Google__Protobuf__Compiler__CodeGeneratorResponse__File = function (value) {
	return $eriktim$elm_protocol_buffers$Protobuf$Encode$message(
		_List_fromArray(
			[
				_Utils_Tuple2(
				1,
				$eriktim$elm_protocol_buffers$Protobuf$Encode$string(value.name)),
				_Utils_Tuple2(
				2,
				$eriktim$elm_protocol_buffers$Protobuf$Encode$string(value.insertionPoint)),
				_Utils_Tuple2(
				15,
				$eriktim$elm_protocol_buffers$Protobuf$Encode$string(value.content)),
				_Utils_Tuple2(
				16,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$Maybe$map($author$project$Proto$Google$Protobuf$Internals_$encodeProto__Google__Protobuf__GeneratedCodeInfo),
					$elm$core$Maybe$withDefault($eriktim$elm_protocol_buffers$Protobuf$Encode$none))(value.generatedCodeInfo))
			]));
};
var $eriktim$elm_protocol_buffers$Internal$Int64$Int64 = function (a) {
	return {$: 'Int64', a: a};
};
var $eriktim$elm_protocol_buffers$Internal$Int64$fromInts = F2(
	function (higher, lower) {
		return $eriktim$elm_protocol_buffers$Internal$Int64$Int64(
			{higher: 0 | higher, lower: 0 | lower});
	});
var $eriktim$elm_protocol_buffers$Internal$Int64$fromBase128 = $eriktim$elm_protocol_buffers$Internal$Int64$fromInts(0);
var $eriktim$elm_protocol_buffers$Internal$Int64$and = F2(
	function (n, _v0) {
		var lower = _v0.a.lower;
		return A2($eriktim$elm_protocol_buffers$Internal$Int64$fromInts, 0, n & lower);
	});
var $elm$core$Bitwise$complement = _Bitwise_complement;
var $eriktim$elm_protocol_buffers$Internal$Int64$negate = function (_int) {
	var higher = _int.a.higher;
	var lower = _int.a.lower;
	return ((!lower) && (!higher)) ? _int : A2($eriktim$elm_protocol_buffers$Internal$Int64$fromInts, ~higher, (~lower) + 1);
};
var $eriktim$elm_protocol_buffers$Internal$Int64$shiftRightZfBy = F2(
	function (n, _v0) {
		var higher = _v0.a.higher;
		var lower = _v0.a.lower;
		if (n > 32) {
			return A2($eriktim$elm_protocol_buffers$Internal$Int64$fromInts, 0, higher >>> n);
		} else {
			var carry = higher << (32 - n);
			var newLower = (carry | (lower >>> n)) >>> 0;
			return A2($eriktim$elm_protocol_buffers$Internal$Int64$fromInts, higher >>> n, newLower);
		}
	});
var $eriktim$elm_protocol_buffers$Internal$Int64$xor = F2(
	function (_v0, _v1) {
		var a = _v0.a;
		var b = _v1.a;
		return A2($eriktim$elm_protocol_buffers$Internal$Int64$fromInts, a.higher ^ b.higher, a.lower ^ b.lower);
	});
var $eriktim$elm_protocol_buffers$Internal$Int64$fromZigZag = function (value) {
	return A2(
		$eriktim$elm_protocol_buffers$Internal$Int64$xor,
		A2($eriktim$elm_protocol_buffers$Internal$Int64$shiftRightZfBy, 1, value),
		$eriktim$elm_protocol_buffers$Internal$Int64$negate(
			A2($eriktim$elm_protocol_buffers$Internal$Int64$and, 1, value)));
};
var $eriktim$elm_protocol_buffers$Internal$Int64$popBase128 = function (_int) {
	var lower = _int.a.lower;
	var higherBits = A2($eriktim$elm_protocol_buffers$Internal$Int64$shiftRightZfBy, 7, _int);
	var base128 = 127 & lower;
	return _Utils_Tuple2(base128, higherBits);
};
var $eriktim$elm_protocol_buffers$Internal$Int64$addUnsafe = F2(
	function (n, _v0) {
		var higher = _v0.a.higher;
		var lower = _v0.a.lower;
		return A2($eriktim$elm_protocol_buffers$Internal$Int64$fromInts, higher, n + lower);
	});
var $eriktim$elm_protocol_buffers$Internal$Int64$shiftLeftBy = F2(
	function (n, _v0) {
		var higher = _v0.a.higher;
		var lower = _v0.a.lower;
		if (n > 32) {
			return A2($eriktim$elm_protocol_buffers$Internal$Int64$fromInts, lower << n, 0);
		} else {
			var carry = lower >>> (32 - n);
			var newHigher = carry | (higher << n);
			return A2($eriktim$elm_protocol_buffers$Internal$Int64$fromInts, newHigher, lower << n);
		}
	});
var $eriktim$elm_protocol_buffers$Internal$Int64$pushBase128 = F2(
	function (base128, _int) {
		return A2(
			$eriktim$elm_protocol_buffers$Internal$Int64$addUnsafe,
			base128,
			A2($eriktim$elm_protocol_buffers$Internal$Int64$shiftLeftBy, 7, _int));
	});
var $eriktim$elm_protocol_buffers$Internal$Int64$shiftRightBy63 = function (_v0) {
	var higher = _v0.a.higher;
	var onlyOnesOrZeros = higher >> 31;
	return A2($eriktim$elm_protocol_buffers$Internal$Int64$fromInts, onlyOnesOrZeros, onlyOnesOrZeros);
};
var $eriktim$elm_protocol_buffers$Internal$Int64$toZigZag = function (value) {
	return A2(
		$eriktim$elm_protocol_buffers$Internal$Int64$xor,
		$eriktim$elm_protocol_buffers$Internal$Int64$shiftRightBy63(value),
		A2($eriktim$elm_protocol_buffers$Internal$Int64$shiftLeftBy, 1, value));
};
var $eriktim$elm_protocol_buffers$Internal$Int64$operations = {fromBase128: $eriktim$elm_protocol_buffers$Internal$Int64$fromBase128, fromSigned: $elm$core$Basics$identity, fromZigZag: $eriktim$elm_protocol_buffers$Internal$Int64$fromZigZag, popBase128: $eriktim$elm_protocol_buffers$Internal$Int64$popBase128, pushBase128: $eriktim$elm_protocol_buffers$Internal$Int64$pushBase128, toSigned: $elm$core$Basics$identity, toZigZag: $eriktim$elm_protocol_buffers$Internal$Int64$toZigZag};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$uintEncoder = function (config) {
	return A2(
		$elm$core$Basics$composeL,
		$eriktim$elm_protocol_buffers$Protobuf$Encode$intEncoder(config),
		config.toSigned);
};
var $eriktim$elm_protocol_buffers$Protobuf$Encode$uint64 = $eriktim$elm_protocol_buffers$Protobuf$Encode$uintEncoder($eriktim$elm_protocol_buffers$Internal$Int64$operations);
var $author$project$Proto$Google$Protobuf$Compiler$Internals_$encodeProto__Google__Protobuf__Compiler__CodeGeneratorResponse = function (value) {
	return $eriktim$elm_protocol_buffers$Protobuf$Encode$message(
		_List_fromArray(
			[
				_Utils_Tuple2(
				1,
				$eriktim$elm_protocol_buffers$Protobuf$Encode$string(value.error)),
				_Utils_Tuple2(
				2,
				$eriktim$elm_protocol_buffers$Protobuf$Encode$uint64(value.supportedFeatures)),
				_Utils_Tuple2(
				15,
				A2($eriktim$elm_protocol_buffers$Protobuf$Encode$list, $author$project$Proto$Google$Protobuf$Compiler$Internals_$encodeProto__Google__Protobuf__Compiler__CodeGeneratorResponse__File, value.file))
			]));
};
var $author$project$Proto$Google$Protobuf$Compiler$encodeCodeGeneratorResponse = $author$project$Proto$Google$Protobuf$Compiler$Internals_$encodeProto__Google__Protobuf__Compiler__CodeGeneratorResponse;
var $author$project$Generate$errToString = function (err) {
	return err.title + (': ' + err.description);
};
var $eriktim$elm_protocol_buffers$Protobuf$Types$Int64$fromInts = $eriktim$elm_protocol_buffers$Internal$Int64$fromInts;
var $mdgriffith$elm_codegen$Internal$Compiler$Annotation = function (a) {
	return {$: 'Annotation', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2(
	function (a, b) {
		return {$: 'FunctionTypeAnnotation', a: a, b: b};
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases = $elm$core$Dict$empty;
var $mdgriffith$elm_codegen$Elm$Annotation$getAliases = function (_v0) {
	var ann = _v0.a;
	return ann.aliases;
};
var $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports = function (_v0) {
	var details = _v0.a;
	return details.imports;
};
var $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation = function (_v0) {
	var details = _v0.a;
	return details.annotation;
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$mergeAliases = $elm$core$Dict$union;
var $stil4m$elm_syntax$Elm$Syntax$Node$Node = F2(
	function (a, b) {
		return {$: 'Node', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange = {
	end: {column: 0, row: 0},
	start: {column: 0, row: 0}
};
var $mdgriffith$elm_codegen$Internal$Compiler$nodify = function (exp) {
	return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
};
var $mdgriffith$elm_codegen$Elm$Annotation$function = F2(
	function (anns, _return) {
		return $mdgriffith$elm_codegen$Internal$Compiler$Annotation(
			{
				aliases: A3(
					$elm$core$List$foldl,
					F2(
						function (ann, aliases) {
							return A2(
								$mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
								$mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann),
								aliases);
						}),
					$mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
					A2($elm$core$List$cons, _return, anns)),
				annotation: A3(
					$elm$core$List$foldr,
					F2(
						function (ann, fn) {
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(ann),
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(fn));
						}),
					$mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(_return),
					A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, anns)),
				imports: _Utils_ap(
					$mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(_return),
					A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, anns))
			});
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed = F2(
	function (a, b) {
		return {$: 'Typed', a: a, b: b};
	});
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toUpper = _String_toUpper;
var $mdgriffith$elm_codegen$Internal$Format$formatType = function (str) {
	return _Utils_ap(
		$elm$core$String$toUpper(
			A2($elm$core$String$left, 1, str)),
		A2($elm$core$String$dropLeft, 1, str));
};
var $mdgriffith$elm_codegen$Elm$Annotation$named = F2(
	function (mod, name) {
		return $mdgriffith$elm_codegen$Internal$Compiler$Annotation(
			{
				aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
				annotation: A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(
						_Utils_Tuple2(
							mod,
							$mdgriffith$elm_codegen$Internal$Format$formatType(name))),
					_List_Nil),
				imports: function () {
					if (!mod.b) {
						return _List_Nil;
					} else {
						return _List_fromArray(
							[mod]);
					}
				}()
			});
	});
var $author$project$Generate$messagePbType = F2(
	function (importFrom, desc) {
		return _Utils_Tuple2(
			desc.name,
			A2($mdgriffith$elm_codegen$Elm$Annotation$named, importFrom, desc.name));
	});
var $mdgriffith$elm_codegen$Internal$Compiler$nodifyAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$Compiler$nodify);
var $mdgriffith$elm_codegen$Elm$Annotation$namedWith = F3(
	function (mod, name, args) {
		return $mdgriffith$elm_codegen$Internal$Compiler$Annotation(
			{
				aliases: A3(
					$elm$core$List$foldl,
					F2(
						function (ann, aliases) {
							return A2(
								$mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
								$mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann),
								aliases);
						}),
					$mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
					args),
				annotation: A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(
						_Utils_Tuple2(
							mod,
							$mdgriffith$elm_codegen$Internal$Format$formatType(name))),
					$mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
						A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, args))),
				imports: A2(
					$elm$core$List$cons,
					mod,
					A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, args))
			});
	});
var $elm$core$String$cons = _String_cons;
var $elm_community$string_extra$String$Extra$changeCase = F2(
	function (mutator, word) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (_v0) {
					var head = _v0.a;
					var tail = _v0.b;
					return A2(
						$elm$core$String$cons,
						mutator(head),
						tail);
				},
				$elm$core$String$uncons(word)));
	});
var $elm$core$Char$toUpper = _Char_toUpper;
var $elm_community$string_extra$String$Extra$toSentenceCase = function (word) {
	return A2($elm_community$string_extra$String$Extra$changeCase, $elm$core$Char$toUpper, word);
};
var $mdgriffith$elm_codegen$Internal$Compiler$Expression = function (a) {
	return {$: 'Expression', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue = F2(
	function (a, b) {
		return {$: 'FunctionOrValue', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType = function (a) {
	return {$: 'GenericType', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord = F2(
	function (a, b) {
		return {$: 'GenericRecord', a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record = function (a) {
	return {$: 'Record', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled = function (a) {
	return {$: 'Tupled', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit = {$: 'Unit'};
var $mdgriffith$elm_codegen$Internal$Index$indexToString = function (_v0) {
	var top = _v0.a;
	var tail = _v0.b;
	var scope = _v0.c;
	var check = _v0.d;
	return _Utils_ap(
		(!top) ? '' : ('_' + $elm$core$String$fromInt(top)),
		function () {
			if (!tail.b) {
				return '';
			} else {
				if (!tail.b.b) {
					var one = tail.a;
					return '_' + $elm$core$String$fromInt(one);
				} else {
					if (!tail.b.b.b) {
						var one = tail.a;
						var _v2 = tail.b;
						var two = _v2.a;
						return '_' + ($elm$core$String$fromInt(one) + ('_' + $elm$core$String$fromInt(two)));
					} else {
						if (!tail.b.b.b.b) {
							var one = tail.a;
							var _v3 = tail.b;
							var two = _v3.a;
							var _v4 = _v3.b;
							var three = _v4.a;
							return '_' + ($elm$core$String$fromInt(one) + ('_' + ($elm$core$String$fromInt(two) + ('_' + $elm$core$String$fromInt(three)))));
						} else {
							return '_' + A2(
								$elm$core$String$join,
								'_',
								A2($elm$core$List$map, $elm$core$String$fromInt, tail));
						}
					}
				}
			}
		}());
};
var $mdgriffith$elm_codegen$Internal$Compiler$mapNode = F2(
	function (fn, _v0) {
		var range = _v0.a;
		var n = _v0.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			range,
			fn(n));
	});
var $mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation = F2(
	function (index, ann) {
		switch (ann.$) {
			case 'GenericType':
				var str = ann.a;
				return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
					_Utils_ap(
						str,
						$mdgriffith$elm_codegen$Internal$Index$indexToString(index)));
			case 'Typed':
				var modName = ann.a;
				var anns = ann.b;
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
					modName,
					A2(
						$elm$core$List$map,
						$mdgriffith$elm_codegen$Internal$Compiler$mapNode(
							$mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index)),
						anns));
			case 'Unit':
				return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit;
			case 'Tupled':
				var tupled = ann.a;
				return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(
					A2(
						$elm$core$List$map,
						$mdgriffith$elm_codegen$Internal$Compiler$mapNode(
							$mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index)),
						tupled));
			case 'Record':
				var recordDefinition = ann.a;
				return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(
					A2(
						$elm$core$List$map,
						$mdgriffith$elm_codegen$Internal$Compiler$protectField(index),
						recordDefinition));
			case 'GenericRecord':
				var recordName = ann.a;
				var _v3 = ann.b;
				var recordRange = _v3.a;
				var recordDefinition = _v3.b;
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
					A2(
						$mdgriffith$elm_codegen$Internal$Compiler$mapNode,
						function (n) {
							return _Utils_ap(
								n,
								$mdgriffith$elm_codegen$Internal$Index$indexToString(index));
						},
						recordName),
					A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						recordRange,
						A2(
							$elm$core$List$map,
							$mdgriffith$elm_codegen$Internal$Compiler$protectField(index),
							recordDefinition)));
			default:
				var one = ann.a;
				var two = ann.b;
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
					A2(
						$mdgriffith$elm_codegen$Internal$Compiler$mapNode,
						$mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index),
						one),
					A2(
						$mdgriffith$elm_codegen$Internal$Compiler$mapNode,
						$mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index),
						two));
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$protectField = F2(
	function (index, _v0) {
		var nodeRange = _v0.a;
		var _v1 = _v0.b;
		var nodedName = _v1.a;
		var nodedType = _v1.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			nodeRange,
			_Utils_Tuple2(
				nodedName,
				A2(
					$mdgriffith$elm_codegen$Internal$Compiler$mapNode,
					$mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation(index),
					nodedType)));
	});
var $mdgriffith$elm_codegen$Internal$Compiler$getInnerInference = F2(
	function (index, _v0) {
		var details = _v0.a;
		return {
			aliases: details.aliases,
			inferences: $elm$core$Dict$empty,
			type_: A2($mdgriffith$elm_codegen$Internal$Compiler$protectAnnotation, index, details.annotation)
		};
	});
var $mdgriffith$elm_codegen$Internal$Format$sanitize = function (str) {
	switch (str) {
		case 'in':
			return 'in_';
		case 'type':
			return 'type_';
		case 'case':
			return 'case_';
		case 'let':
			return 'let_';
		case 'module':
			return 'module_';
		case 'exposing':
			return 'exposing_';
		case 'where':
			return 'where_';
		case 'main':
			return 'main_';
		case 'port':
			return 'port_';
		case 'as':
			return 'as_';
		case 'if':
			return 'if_';
		case 'import':
			return 'import_';
		default:
			return str;
	}
};
var $elm$core$String$toLower = _String_toLower;
var $mdgriffith$elm_codegen$Internal$Format$formatValue = function (str) {
	var formatted = _Utils_ap(
		$elm$core$String$toLower(
			A2($elm$core$String$left, 1, str)),
		A2($elm$core$String$dropLeft, 1, str));
	return $mdgriffith$elm_codegen$Internal$Format$sanitize(formatted);
};
var $mdgriffith$elm_codegen$Internal$Index$protectTypeName = F2(
	function (base, index) {
		var top = index.a;
		var tail = index.b;
		var scope = index.c;
		var check = index.d;
		if (!tail.b) {
			return $mdgriffith$elm_codegen$Internal$Format$formatValue(base);
		} else {
			return $mdgriffith$elm_codegen$Internal$Format$formatValue(
				_Utils_ap(
					base,
					$mdgriffith$elm_codegen$Internal$Index$indexToString(index)));
		}
	});
var $mdgriffith$elm_codegen$Elm$value = function (details) {
	return $mdgriffith$elm_codegen$Internal$Compiler$Expression(
		function (index) {
			return {
				annotation: function () {
					var _v0 = details.annotation;
					if (_v0.$ === 'Nothing') {
						var typename = A2($mdgriffith$elm_codegen$Internal$Index$protectTypeName, details.name, index);
						return $elm$core$Result$Ok(
							{
								aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
								inferences: $elm$core$Dict$empty,
								type_: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(typename)
							});
					} else {
						var ann = _v0.a;
						return $elm$core$Result$Ok(
							A2($mdgriffith$elm_codegen$Internal$Compiler$getInnerInference, index, ann));
					}
				}(),
				expression: A2(
					$stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue,
					details.importFrom,
					$mdgriffith$elm_codegen$Internal$Format$sanitize(details.name)),
				imports: function () {
					var _v1 = details.annotation;
					if (_v1.$ === 'Nothing') {
						var _v2 = details.importFrom;
						if (!_v2.b) {
							return _List_Nil;
						} else {
							return _List_fromArray(
								[details.importFrom]);
						}
					} else {
						var ann = _v1.a;
						var _v3 = details.importFrom;
						if (!_v3.b) {
							return $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(ann);
						} else {
							return A2(
								$elm$core$List$cons,
								details.importFrom,
								$mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(ann));
						}
					}
				}()
			};
		});
};
var $author$project$Generate$buildFilePbTypes = F2(
	function (types, file) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (t, output) {
					var importFrom = A2(
						$elm$core$List$cons,
						'Proto',
						A2(
							$elm$core$List$map,
							$elm_community$string_extra$String$Extra$toSentenceCase,
							A2($elm$core$String$split, '.', file._package)));
					var _v0 = A2($author$project$Generate$messagePbType, importFrom, t);
					var name = _v0.a;
					var type_ = _v0.b;
					return _Utils_update(
						output,
						{
							decoders: A3(
								$elm$core$Dict$insert,
								'.' + (file._package + ('.' + name)),
								$mdgriffith$elm_codegen$Elm$value(
									{
										annotation: $elm$core$Maybe$Just(
											A3(
												$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
												_List_fromArray(
													['Protobuf', 'Decode']),
												'Decoder',
												_List_fromArray(
													[type_]))),
										importFrom: importFrom,
										name: 'decode' + name
									}),
								output.decoders),
							encoders: A3(
								$elm$core$Dict$insert,
								'.' + (file._package + ('.' + name)),
								$mdgriffith$elm_codegen$Elm$value(
									{
										annotation: $elm$core$Maybe$Just(
											A2(
												$mdgriffith$elm_codegen$Elm$Annotation$function,
												_List_fromArray(
													[type_]),
												A2(
													$mdgriffith$elm_codegen$Elm$Annotation$named,
													_List_fromArray(
														['Protobuf', 'Encode']),
													'Encoder'))),
										importFrom: importFrom,
										name: 'encode' + name
									}),
								output.encoders),
							types: A3($elm$core$Dict$insert, '.' + (file._package + ('.' + name)), type_, output.types)
						});
				}),
			types,
			file.messageType);
	});
var $author$project$Generate$emptyPbTypes = {decoders: $elm$core$Dict$empty, encoders: $elm$core$Dict$empty, types: $elm$core$Dict$empty};
var $author$project$Generate$mergePbTypes = F2(
	function (src, target) {
		return {
			decoders: A2($elm$core$Dict$union, src.decoders, target.decoders),
			encoders: A2($elm$core$Dict$union, src.encoders, target.encoders),
			types: A2($elm$core$Dict$union, src.types, target.types)
		};
	});
var $author$project$Generate$buildPbTypes = A2(
	$elm$core$List$foldl,
	F2(
		function (f, t) {
			return A2(
				$author$project$Generate$mergePbTypes,
				A2($author$project$Generate$buildFilePbTypes, t, f),
				t);
		}),
	$author$project$Generate$emptyPbTypes);
var $author$project$Generate$elmFileToResponseFile = function (file) {
	return {content: file.contents, generatedCodeInfo: $elm$core$Maybe$Nothing, insertionPoint: '', name: file.path};
};
var $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration = function (a) {
	return {$: 'AliasDeclaration', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$Declaration = function (a) {
	return {$: 'Declaration', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$NotExposed = {$: 'NotExposed'};
var $stil4m$elm_syntax$Elm$Syntax$Node$value = function (_v0) {
	var v = _v0.b;
	return v;
};
var $mdgriffith$elm_codegen$Internal$Compiler$denode = $stil4m$elm_syntax$Elm$Syntax$Node$value;
var $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper = function (ann) {
	switch (ann.$) {
		case 'GenericType':
			var str = ann.a;
			return _List_fromArray(
				[str]);
		case 'Typed':
			var modName = ann.a;
			var anns = ann.b;
			return A2(
				$elm$core$List$concatMap,
				A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper, $mdgriffith$elm_codegen$Internal$Compiler$denode),
				anns);
		case 'Unit':
			return _List_Nil;
		case 'Tupled':
			var tupled = ann.a;
			return A2(
				$elm$core$List$concatMap,
				A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper, $mdgriffith$elm_codegen$Internal$Compiler$denode),
				tupled);
		case 'Record':
			var recordDefinition = ann.a;
			return A2(
				$elm$core$List$concatMap,
				function (nodedField) {
					var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$denode(nodedField);
					var name = _v1.a;
					var field = _v1.b;
					return $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(
						$mdgriffith$elm_codegen$Internal$Compiler$denode(field));
				},
				recordDefinition);
		case 'GenericRecord':
			var recordName = ann.a;
			var recordDefinition = ann.b;
			return A2(
				$elm$core$List$concatMap,
				function (nodedField) {
					var _v2 = $mdgriffith$elm_codegen$Internal$Compiler$denode(nodedField);
					var name = _v2.a;
					var field = _v2.b;
					return $mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(
						$mdgriffith$elm_codegen$Internal$Compiler$denode(field));
				},
				$mdgriffith$elm_codegen$Internal$Compiler$denode(recordDefinition));
		default:
			var one = ann.a;
			var two = ann.b;
			return A2(
				$elm$core$List$concatMap,
				$mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper,
				_List_fromArray(
					[
						$mdgriffith$elm_codegen$Internal$Compiler$denode(one),
						$mdgriffith$elm_codegen$Internal$Compiler$denode(two)
					]));
	}
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2($elm$core$List$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2($elm$core$List$cons, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2($elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$unique = function (list) {
	return A4($mdgriffith$elm_codegen$Internal$Compiler$uniqueHelp, $elm$core$Basics$identity, _List_Nil, list, _List_Nil);
};
var $mdgriffith$elm_codegen$Internal$Compiler$getGenerics = function (_v0) {
	var details = _v0.a;
	return $mdgriffith$elm_codegen$Internal$Compiler$unique(
		$mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(details.annotation));
};
var $mdgriffith$elm_codegen$Elm$alias = F2(
	function (name, innerAnnotation) {
		return $mdgriffith$elm_codegen$Internal$Compiler$Declaration(
			{
				docs: $elm$core$Maybe$Nothing,
				exposed: $mdgriffith$elm_codegen$Internal$Compiler$NotExposed,
				imports: $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports(innerAnnotation),
				name: name,
				toBody: function (index) {
					return {
						additionalImports: _List_Nil,
						declaration: $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(
							{
								documentation: $elm$core$Maybe$Nothing,
								generics: A2(
									$elm$core$List$map,
									$mdgriffith$elm_codegen$Internal$Compiler$nodify,
									$mdgriffith$elm_codegen$Internal$Compiler$getGenerics(innerAnnotation)),
								name: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
									$mdgriffith$elm_codegen$Internal$Format$formatType(name)),
								typeAnnotation: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
									$mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(innerAnnotation))
							}),
						warning: $elm$core$Maybe$Nothing
					};
				}
			});
	});
var $mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey = F2(
	function (mod, name) {
		return A2($elm$core$String$join, '.', mod) + ('.' + name);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$addAlias = F4(
	function (mod, name, ann, aliasCache) {
		var annDetails = ann.a;
		return A3(
			$elm$core$Dict$insert,
			A2($mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey, mod, name),
			{
				target: annDetails.annotation,
				variables: $mdgriffith$elm_codegen$Internal$Compiler$getGenerics(ann)
			},
			aliasCache);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$getAliases = function (_v0) {
	var ann = _v0.a;
	return ann.aliases;
};
var $mdgriffith$elm_codegen$Elm$Annotation$alias = F4(
	function (mod, name, vars, target) {
		return $mdgriffith$elm_codegen$Internal$Compiler$Annotation(
			{
				aliases: A4(
					$mdgriffith$elm_codegen$Internal$Compiler$addAlias,
					mod,
					name,
					target,
					A3(
						$elm$core$List$foldl,
						F2(
							function (ann, aliases) {
								return A2(
									$mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
									$mdgriffith$elm_codegen$Internal$Compiler$getAliases(ann),
									aliases);
							}),
						$mdgriffith$elm_codegen$Internal$Compiler$getAliases(target),
						vars)),
				annotation: A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(
						_Utils_Tuple2(
							mod,
							$mdgriffith$elm_codegen$Internal$Format$formatType(name))),
					A2(
						$elm$core$List$map,
						A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$nodify, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation),
						vars)),
				imports: function () {
					if (!mod.b) {
						return A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, vars);
					} else {
						return _Utils_ap(
							_List_fromArray(
								[mod]),
							A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, vars));
					}
				}()
			});
	});
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration = function (a) {
	return {$: 'FunctionDeclaration', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Node$map = F2(
	function (f, _v0) {
		var r = _v0.a;
		var a = _v0.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			r,
			f(a));
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_codegen$Internal$Clean$doRename = F2(
	function (dict, ann) {
		switch (ann.$) {
			case 'GenericType':
				var generic = ann.a;
				var _v1 = A2($elm$core$Dict$get, generic, dict);
				if (_v1.$ === 'Nothing') {
					return ann;
				} else {
					var renamed = _v1.a;
					return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(renamed);
				}
			case 'Typed':
				var name = ann.a;
				var nodedVars = ann.b;
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
					name,
					A2(
						$elm$core$List$map,
						$stil4m$elm_syntax$Elm$Syntax$Node$map(
							$mdgriffith$elm_codegen$Internal$Clean$doRename(dict)),
						nodedVars));
			case 'Unit':
				return ann;
			case 'Tupled':
				var nodedVars = ann.a;
				return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(
					A2(
						$elm$core$List$map,
						$stil4m$elm_syntax$Elm$Syntax$Node$map(
							$mdgriffith$elm_codegen$Internal$Clean$doRename(dict)),
						nodedVars));
			case 'Record':
				var record = ann.a;
				return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(
					A2(
						$elm$core$List$map,
						$stil4m$elm_syntax$Elm$Syntax$Node$map(
							$elm$core$Tuple$mapSecond(
								$stil4m$elm_syntax$Elm$Syntax$Node$map(
									$mdgriffith$elm_codegen$Internal$Clean$doRename(dict)))),
						record));
			case 'GenericRecord':
				var name = ann.a;
				var _v2 = ann.b;
				var range = _v2.a;
				var record = _v2.b;
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
					name,
					A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						range,
						A2(
							$elm$core$List$map,
							$stil4m$elm_syntax$Elm$Syntax$Node$map(
								$elm$core$Tuple$mapSecond(
									$stil4m$elm_syntax$Elm$Syntax$Node$map(
										$mdgriffith$elm_codegen$Internal$Clean$doRename(dict)))),
							record)));
			default:
				var nodeOne = ann.a;
				var nodeTwo = ann.b;
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
					A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$map,
						$mdgriffith$elm_codegen$Internal$Clean$doRename(dict),
						nodeOne),
					A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$map,
						$mdgriffith$elm_codegen$Internal$Clean$doRename(dict),
						nodeTwo));
		}
	});
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $mdgriffith$elm_codegen$Internal$Clean$prepareRename = F2(
	function (ann, dict) {
		switch (ann.$) {
			case 'GenericType':
				var generic = ann.a;
				return A2($elm$core$Set$insert, generic, dict);
			case 'Typed':
				var name = ann.a;
				var nodedVars = ann.b;
				return A3(
					$elm$core$List$foldl,
					F2(
						function (_v1, d) {
							var tipe = _v1.b;
							return A2($mdgriffith$elm_codegen$Internal$Clean$prepareRename, tipe, d);
						}),
					dict,
					nodedVars);
			case 'Unit':
				return dict;
			case 'Tupled':
				var nodedVars = ann.a;
				return A3(
					$elm$core$List$foldl,
					F2(
						function (_v2, d) {
							var tipe = _v2.b;
							return A2($mdgriffith$elm_codegen$Internal$Clean$prepareRename, tipe, d);
						}),
					dict,
					nodedVars);
			case 'Record':
				var record = ann.a;
				return A3(
					$elm$core$List$foldl,
					F2(
						function (_v3, d) {
							var _v4 = _v3.b;
							var _v5 = _v4.b;
							var field = _v5.b;
							return A2($mdgriffith$elm_codegen$Internal$Clean$prepareRename, field, d);
						}),
					dict,
					record);
			case 'GenericRecord':
				var name = ann.a;
				var _v6 = ann.b;
				var range = _v6.a;
				var record = _v6.b;
				return A3(
					$elm$core$List$foldl,
					F2(
						function (_v7, d) {
							var _v8 = _v7.b;
							var _v9 = _v8.b;
							var field = _v9.b;
							return A2($mdgriffith$elm_codegen$Internal$Clean$prepareRename, field, d);
						}),
					dict,
					record);
			default:
				var _v10 = ann.a;
				var one = _v10.b;
				var _v11 = ann.b;
				var two = _v11.b;
				return A2(
					$mdgriffith$elm_codegen$Internal$Clean$prepareRename,
					two,
					A2($mdgriffith$elm_codegen$Internal$Clean$prepareRename, one, dict));
		}
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_codegen$Internal$Clean$findClean = F3(
	function (i, name, set) {
		findClean:
		while (true) {
			var newName = (!i) ? name : _Utils_ap(
				name,
				$elm$core$String$fromInt(i));
			if (A2($elm$core$Set$member, newName, set)) {
				var $temp$i = i + 1,
					$temp$name = name,
					$temp$set = set;
				i = $temp$i;
				name = $temp$name;
				set = $temp$set;
				continue findClean;
			} else {
				return name;
			}
		}
	});
var $elm$core$Set$foldl = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $mdgriffith$elm_codegen$Internal$Clean$sanitized = function (str) {
	var _v0 = A2($elm$core$String$split, '_', str);
	if (!_v0.b) {
		return str;
	} else {
		var top = _v0.a;
		var remain = _v0.b;
		return top;
	}
};
var $mdgriffith$elm_codegen$Internal$Clean$verify = function (set) {
	return A3(
		$elm$core$Set$foldl,
		F2(
			function (name, gathered) {
				var newName = A3(
					$mdgriffith$elm_codegen$Internal$Clean$findClean,
					0,
					$mdgriffith$elm_codegen$Internal$Clean$sanitized(name),
					set);
				return A3($elm$core$Dict$insert, name, newName, gathered);
			}),
		$elm$core$Dict$empty,
		set);
};
var $mdgriffith$elm_codegen$Internal$Clean$clean = function (ann) {
	var renames = $mdgriffith$elm_codegen$Internal$Clean$verify(
		A2($mdgriffith$elm_codegen$Internal$Clean$prepareRename, ann, $elm$core$Set$empty));
	return A2($mdgriffith$elm_codegen$Internal$Clean$doRename, renames, ann);
};
var $mdgriffith$elm_codegen$Internal$Format$formatDeclarationName = function (str) {
	if (str === 'main') {
		return 'main';
	} else {
		return $mdgriffith$elm_codegen$Internal$Format$formatValue(str);
	}
};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $stil4m$structured_writer$StructuredWriter$asIndent = function (amount) {
	return A2($elm$core$String$repeat, amount, ' ');
};
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $stil4m$structured_writer$StructuredWriter$writeIndented = F2(
	function (indent_, w) {
		switch (w.$) {
			case 'Sep':
				var _v1 = w.a;
				var pre = _v1.a;
				var sep = _v1.b;
				var post = _v1.c;
				var differentLines = w.b;
				var items = w.c;
				var seperator = differentLines ? ('\n' + ($stil4m$structured_writer$StructuredWriter$asIndent(indent_) + sep)) : sep;
				return $elm$core$String$concat(
					_List_fromArray(
						[
							pre,
							A2(
							$elm$core$String$join,
							seperator,
							A2(
								$elm$core$List$map,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Basics$identity,
									$stil4m$structured_writer$StructuredWriter$writeIndented(indent_)),
								items)),
							post
						]));
			case 'Breaked':
				var items = w.a;
				return A2(
					$elm$core$String$join,
					'\n' + $stil4m$structured_writer$StructuredWriter$asIndent(indent_),
					A2(
						$elm$core$List$concatMap,
						A2(
							$elm$core$Basics$composeR,
							$stil4m$structured_writer$StructuredWriter$writeIndented(0),
							$elm$core$String$split('\n')),
						items));
			case 'Str':
				var s = w.a;
				return s;
			case 'Indent':
				var n = w.a;
				var next = w.b;
				return _Utils_ap(
					$stil4m$structured_writer$StructuredWriter$asIndent(n + indent_),
					A2($stil4m$structured_writer$StructuredWriter$writeIndented, n + indent_, next));
			case 'Spaced':
				var items = w.a;
				return A2(
					$elm$core$String$join,
					' ',
					A2(
						$elm$core$List$map,
						$stil4m$structured_writer$StructuredWriter$writeIndented(indent_),
						items));
			case 'Joined':
				var items = w.a;
				return $elm$core$String$concat(
					A2(
						$elm$core$List$map,
						$stil4m$structured_writer$StructuredWriter$writeIndented(indent_),
						items));
			default:
				var x = w.a;
				var y = w.b;
				return _Utils_ap(
					A2($stil4m$structured_writer$StructuredWriter$writeIndented, indent_, x),
					A2($stil4m$structured_writer$StructuredWriter$writeIndented, indent_, y));
		}
	});
var $stil4m$structured_writer$StructuredWriter$write = $stil4m$structured_writer$StructuredWriter$writeIndented(0);
var $stil4m$elm_syntax$Elm$Writer$write = $stil4m$structured_writer$StructuredWriter$write;
var $stil4m$structured_writer$StructuredWriter$Sep = F3(
	function (a, b, c) {
		return {$: 'Sep', a: a, b: b, c: c};
	});
var $stil4m$structured_writer$StructuredWriter$bracesComma = $stil4m$structured_writer$StructuredWriter$Sep(
	_Utils_Tuple3('{', ', ', '}'));
var $stil4m$structured_writer$StructuredWriter$Joined = function (a) {
	return {$: 'Joined', a: a};
};
var $stil4m$structured_writer$StructuredWriter$join = $stil4m$structured_writer$StructuredWriter$Joined;
var $stil4m$structured_writer$StructuredWriter$parensComma = $stil4m$structured_writer$StructuredWriter$Sep(
	_Utils_Tuple3('(', ', ', ')'));
var $elm$core$String$contains = _String_contains;
var $stil4m$structured_writer$StructuredWriter$Str = function (a) {
	return {$: 'Str', a: a};
};
var $stil4m$structured_writer$StructuredWriter$string = $stil4m$structured_writer$StructuredWriter$Str;
var $stil4m$elm_syntax$Elm$Writer$parensIfContainsSpaces = function (w) {
	return A2(
		$elm$core$String$contains,
		' ',
		$stil4m$structured_writer$StructuredWriter$write(w)) ? $stil4m$structured_writer$StructuredWriter$join(
		_List_fromArray(
			[
				$stil4m$structured_writer$StructuredWriter$string('('),
				w,
				$stil4m$structured_writer$StructuredWriter$string(')')
			])) : w;
};
var $stil4m$structured_writer$StructuredWriter$sepByComma = $stil4m$structured_writer$StructuredWriter$Sep(
	_Utils_Tuple3('', ', ', ''));
var $stil4m$structured_writer$StructuredWriter$Spaced = function (a) {
	return {$: 'Spaced', a: a};
};
var $stil4m$structured_writer$StructuredWriter$spaced = $stil4m$structured_writer$StructuredWriter$Spaced;
var $stil4m$elm_syntax$Elm$Writer$writeRecordField = function (_v4) {
	var _v5 = _v4.b;
	var name = _v5.a;
	var ref = _v5.b;
	return $stil4m$structured_writer$StructuredWriter$spaced(
		_List_fromArray(
			[
				$stil4m$structured_writer$StructuredWriter$string(
				$stil4m$elm_syntax$Elm$Syntax$Node$value(name)),
				$stil4m$structured_writer$StructuredWriter$string(':'),
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(ref)
			]));
};
var $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation = function (_v0) {
	var typeAnnotation = _v0.b;
	switch (typeAnnotation.$) {
		case 'GenericType':
			var s = typeAnnotation.a;
			return $stil4m$structured_writer$StructuredWriter$string(s);
		case 'Typed':
			var moduleNameAndName = typeAnnotation.a;
			var args = typeAnnotation.b;
			var moduleName = $stil4m$elm_syntax$Elm$Syntax$Node$value(moduleNameAndName).a;
			var k = $stil4m$elm_syntax$Elm$Syntax$Node$value(moduleNameAndName).b;
			return $stil4m$structured_writer$StructuredWriter$spaced(
				A2(
					$elm$core$List$cons,
					$stil4m$structured_writer$StructuredWriter$string(
						A2(
							$elm$core$String$join,
							'.',
							_Utils_ap(
								moduleName,
								_List_fromArray(
									[k])))),
					A2(
						$elm$core$List$map,
						A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation, $stil4m$elm_syntax$Elm$Writer$parensIfContainsSpaces),
						args)));
		case 'Unit':
			return $stil4m$structured_writer$StructuredWriter$string('()');
		case 'Tupled':
			var xs = typeAnnotation.a;
			return A2(
				$stil4m$structured_writer$StructuredWriter$parensComma,
				false,
				A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation, xs));
		case 'Record':
			var xs = typeAnnotation.a;
			return A2(
				$stil4m$structured_writer$StructuredWriter$bracesComma,
				false,
				A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Writer$writeRecordField, xs));
		case 'GenericRecord':
			var name = typeAnnotation.a;
			var fields = typeAnnotation.b;
			return $stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						$stil4m$structured_writer$StructuredWriter$string('{'),
						$stil4m$structured_writer$StructuredWriter$string(
						$stil4m$elm_syntax$Elm$Syntax$Node$value(name)),
						$stil4m$structured_writer$StructuredWriter$string('|'),
						A2(
						$stil4m$structured_writer$StructuredWriter$sepByComma,
						false,
						A2(
							$elm$core$List$map,
							$stil4m$elm_syntax$Elm$Writer$writeRecordField,
							$stil4m$elm_syntax$Elm$Syntax$Node$value(fields))),
						$stil4m$structured_writer$StructuredWriter$string('}')
					]));
		default:
			var left = typeAnnotation.a;
			var right = typeAnnotation.b;
			var addParensForSubTypeAnnotation = function (type_) {
				if (type_.b.$ === 'FunctionTypeAnnotation') {
					var _v3 = type_.b;
					return $stil4m$structured_writer$StructuredWriter$join(
						_List_fromArray(
							[
								$stil4m$structured_writer$StructuredWriter$string('('),
								$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(type_),
								$stil4m$structured_writer$StructuredWriter$string(')')
							]));
				} else {
					return $stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(type_);
				}
			};
			return $stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						addParensForSubTypeAnnotation(left),
						$stil4m$structured_writer$StructuredWriter$string('->'),
						addParensForSubTypeAnnotation(right)
					]));
	}
};
var $mdgriffith$elm_codegen$Internal$Compiler$inferenceErrorToString = function (inf) {
	switch (inf.$) {
		case 'Todo':
			var str = inf.a;
			return 'Todo ' + str;
		case 'MismatchedList':
			var one = inf.a;
			var two = inf.b;
			return 'There are multiple different types in a list: \n\n' + ('    ' + ($stil4m$elm_syntax$Elm$Writer$write(
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(one))) + ('\n\n    ' + $stil4m$elm_syntax$Elm$Writer$write(
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(two))))));
		case 'RecordUpdateIncorrectFields':
			var details = inf.a;
			return 'Mismatched record update';
		case 'EmptyCaseStatement':
			return 'Case statement is empty';
		case 'FunctionAppliedToTooManyArgs':
			var fn = inf.a;
			var args = inf.b;
			return 'The following is being called as a function\n\n    ' + ($stil4m$elm_syntax$Elm$Writer$write(
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(fn))) + ('\n\nwith these arguments:\n\n    ' + (A2(
				$elm$core$String$join,
				' -> ',
				A2(
					$elm$core$List$map,
					function (arg) {
						return $stil4m$elm_syntax$Elm$Writer$write(
							$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(arg)));
					},
					args)) + '\n\nbut that\'s wrong, right?')));
		case 'DuplicateFieldInRecord':
			var fieldName = inf.a;
			return 'There is a duplicate field in a record: ' + fieldName;
		case 'CaseBranchesReturnDifferentTypes':
			return 'Case returns different types.';
		case 'CouldNotFindField':
			var found = inf.a;
			return 'I can\'t find .' + (found.field + (', this record only has these fields:\n\n    ' + A2($elm$core$String$join, '\n    ', found.existingFields)));
		case 'AttemptingToGetOnIncorrectType':
			var attempting = inf.a;
			return 'You\'re trying to access\n\n    .' + (attempting.field + ('\n\nbut this value isn\'t a record. It\'s a\n\n    ' + $stil4m$elm_syntax$Elm$Writer$write(
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(attempting.on)))));
		case 'AttemptingGetOnTypeNameNotAnAlias':
			var attempting = inf.a;
			return 'You\'re trying to access\n\n    .' + (attempting.field + ('\n\nbut this value isn\'t a record, it\'s a\n\n    ' + ($stil4m$elm_syntax$Elm$Writer$write(
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(attempting.on))) + '\n\nIs this value supposed to be an alias for a record? If so, check out Elm.alias!')));
		case 'LetFieldNotFound':
			var details = inf.a;
			return details.desiredField + ' not found, though I was trying to unpack it in a let expression.';
		case 'NotAppendable':
			var type_ = inf.a;
			return $stil4m$elm_syntax$Elm$Writer$write(
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + ' is not appendable.  Only Strings and Lists are appendable';
		case 'NotComparable':
			var type_ = inf.a;
			return $stil4m$elm_syntax$Elm$Writer$write(
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + ' is not appendable.  Only Strings and Lists are appendable';
		case 'UnableToUnify':
			var one = inf.a;
			var two = inf.b;
			return 'I found\n\n    ' + ($stil4m$elm_syntax$Elm$Writer$write(
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(one))) + ('\n\nBut I was expecting:\n\n    ' + $stil4m$elm_syntax$Elm$Writer$write(
				$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(two)))));
		default:
			return 'Different lists of type variables';
	}
};
var $mdgriffith$elm_codegen$Elm$renderError = function (err) {
	if (!err.b) {
		return '';
	} else {
		return A2(
			$elm$core$String$join,
			'\n\n',
			A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Compiler$inferenceErrorToString, err));
	}
};
var $mdgriffith$elm_codegen$Internal$Compiler$isAppendable = function (annotation) {
	_v0$2:
	while (true) {
		if ((annotation.$ === 'Typed') && (!annotation.a.b.a.b)) {
			switch (annotation.a.b.b) {
				case 'String':
					var _v1 = annotation.a;
					var _v2 = _v1.b;
					return true;
				case 'List':
					if (annotation.b.b && (!annotation.b.b.b)) {
						var _v3 = annotation.a;
						var _v4 = _v3.b;
						var _v5 = annotation.b;
						var _v6 = _v5.a;
						var inner = _v6.b;
						return true;
					} else {
						break _v0$2;
					}
				default:
					break _v0$2;
			}
		} else {
			break _v0$2;
		}
	}
	return false;
};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$isComparable = function (annotation) {
	isComparable:
	while (true) {
		_v0$6:
		while (true) {
			switch (annotation.$) {
				case 'Typed':
					if (annotation.a.b.a.b) {
						if (((annotation.a.b.a.a === 'Char') && (!annotation.a.b.a.b.b)) && (annotation.a.b.b === 'Char')) {
							var _v5 = annotation.a;
							var _v6 = _v5.b;
							var _v7 = _v6.a;
							return true;
						} else {
							break _v0$6;
						}
					} else {
						switch (annotation.a.b.b) {
							case 'Int':
								var _v1 = annotation.a;
								var _v2 = _v1.b;
								return true;
							case 'Float':
								var _v3 = annotation.a;
								var _v4 = _v3.b;
								return true;
							case 'String':
								var _v8 = annotation.a;
								var _v9 = _v8.b;
								return true;
							case 'List':
								if (annotation.b.b && (!annotation.b.b.b)) {
									var _v10 = annotation.a;
									var _v11 = _v10.b;
									var _v12 = annotation.b;
									var _v13 = _v12.a;
									var inner = _v13.b;
									var $temp$annotation = inner;
									annotation = $temp$annotation;
									continue isComparable;
								} else {
									break _v0$6;
								}
							default:
								break _v0$6;
						}
					}
				case 'Tupled':
					var innerList = annotation.a;
					return A2(
						$elm$core$List$all,
						A2($elm$core$Basics$composeL, $mdgriffith$elm_codegen$Internal$Compiler$isComparable, $mdgriffith$elm_codegen$Internal$Compiler$denode),
						innerList);
				default:
					break _v0$6;
			}
		}
		return false;
	}
};
var $mdgriffith$elm_codegen$Internal$Compiler$isNumber = function (annotation) {
	_v0$2:
	while (true) {
		if ((annotation.$ === 'Typed') && (!annotation.a.b.a.b)) {
			switch (annotation.a.b.b) {
				case 'Int':
					var _v1 = annotation.a;
					var _v2 = _v1.b;
					return true;
				case 'Float':
					var _v3 = annotation.a;
					var _v4 = _v3.b;
					return true;
				default:
					break _v0$2;
			}
		} else {
			break _v0$2;
		}
	}
	return false;
};
var $mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions = F2(
	function (restrictions, type_) {
		switch (restrictions.$) {
			case 'NoRestrictions':
				return $elm$core$Result$Ok(type_);
			case 'Overconstrainted':
				var constraints = restrictions.a;
				return $elm$core$Result$Err(
					$stil4m$elm_syntax$Elm$Writer$write(
						$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + (' needs to be: ' + (A2(
						$elm$core$String$join,
						', ',
						A2(
							$elm$core$List$concatMap,
							function (constraint) {
								switch (constraint.$) {
									case 'NoRestrictions':
										return _List_Nil;
									case 'Overconstrainted':
										return _List_Nil;
									case 'IsNumber':
										return _List_fromArray(
											['a number']);
									case 'IsComparable':
										return _List_fromArray(
											['comparable']);
									case 'IsAppendable':
										return _List_fromArray(
											['appendable']);
									default:
										return _List_fromArray(
											['appendable and comparable']);
								}
							},
							constraints)) + '\n\nbut that\'s impossible!  Or Elm Codegen\'s s typechecker is off.')));
			case 'IsNumber':
				return $mdgriffith$elm_codegen$Internal$Compiler$isNumber(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err(
					$stil4m$elm_syntax$Elm$Writer$write(
						$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + ' is not a number');
			case 'IsComparable':
				return $mdgriffith$elm_codegen$Internal$Compiler$isComparable(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err(
					$stil4m$elm_syntax$Elm$Writer$write(
						$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + ' is not comparable.  Only Ints, Floats, Chars, Strings and Lists and Tuples of those things are comparable.');
			case 'IsAppendable':
				return $mdgriffith$elm_codegen$Internal$Compiler$isAppendable(type_) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err(
					$stil4m$elm_syntax$Elm$Writer$write(
						$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + ' is not appendable.  Only Strings and Lists are appendable.');
			default:
				return ($mdgriffith$elm_codegen$Internal$Compiler$isComparable(type_) || $mdgriffith$elm_codegen$Internal$Compiler$isAppendable(type_)) ? $elm$core$Result$Ok(type_) : $elm$core$Result$Err(
					$stil4m$elm_syntax$Elm$Writer$write(
						$stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(type_))) + ' is not appendable/comparable.  Only Strings and Lists are allowed here.');
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$NoRestrictions = {$: 'NoRestrictions'};
var $mdgriffith$elm_codegen$Internal$Compiler$IsAppendable = {$: 'IsAppendable'};
var $mdgriffith$elm_codegen$Internal$Compiler$IsAppendableComparable = {$: 'IsAppendableComparable'};
var $mdgriffith$elm_codegen$Internal$Compiler$IsComparable = {$: 'IsComparable'};
var $mdgriffith$elm_codegen$Internal$Compiler$IsNumber = {$: 'IsNumber'};
var $elm$core$String$startsWith = _String_startsWith;
var $mdgriffith$elm_codegen$Internal$Compiler$nameToRestrictions = function (name) {
	return A2($elm$core$String$startsWith, 'number', name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsNumber : (A2($elm$core$String$startsWith, 'comparable', name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsComparable : (A2($elm$core$String$startsWith, 'appendable', name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsAppendable : (A2($elm$core$String$startsWith, 'compappend', name) ? $mdgriffith$elm_codegen$Internal$Compiler$IsAppendableComparable : $mdgriffith$elm_codegen$Internal$Compiler$NoRestrictions)));
};
var $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted = function (a) {
	return {$: 'Overconstrainted', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$restrictFurther = F2(
	function (restriction, newRestriction) {
		switch (restriction.$) {
			case 'NoRestrictions':
				return newRestriction;
			case 'Overconstrainted':
				var constraints = restriction.a;
				switch (newRestriction.$) {
					case 'Overconstrainted':
						var newConstraints = newRestriction.a;
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							_Utils_ap(constraints, newConstraints));
					case 'NoRestrictions':
						return restriction;
					default:
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							A2($elm$core$List$cons, newRestriction, constraints));
				}
			case 'IsNumber':
				switch (newRestriction.$) {
					case 'IsNumber':
						return newRestriction;
					case 'NoRestrictions':
						return restriction;
					case 'Overconstrainted':
						var constraints = newRestriction.a;
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							A2($elm$core$List$cons, restriction, constraints));
					default:
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							_List_fromArray(
								[restriction, newRestriction]));
				}
			case 'IsComparable':
				switch (newRestriction.$) {
					case 'NoRestrictions':
						return restriction;
					case 'IsAppendableComparable':
						return newRestriction;
					case 'IsComparable':
						return newRestriction;
					case 'Overconstrainted':
						var constraints = newRestriction.a;
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							A2($elm$core$List$cons, restriction, constraints));
					default:
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							_List_fromArray(
								[restriction, newRestriction]));
				}
			case 'IsAppendable':
				switch (newRestriction.$) {
					case 'NoRestrictions':
						return restriction;
					case 'IsAppendableComparable':
						return newRestriction;
					case 'IsComparable':
						return newRestriction;
					case 'Overconstrainted':
						var constraints = newRestriction.a;
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							A2($elm$core$List$cons, restriction, constraints));
					default:
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							_List_fromArray(
								[restriction, newRestriction]));
				}
			default:
				switch (newRestriction.$) {
					case 'NoRestrictions':
						return restriction;
					case 'IsAppendableComparable':
						return newRestriction;
					case 'IsComparable':
						return newRestriction;
					case 'IsAppendable':
						return newRestriction;
					case 'Overconstrainted':
						var constraints = newRestriction.a;
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							A2($elm$core$List$cons, restriction, constraints));
					default:
						return $mdgriffith$elm_codegen$Internal$Compiler$Overconstrainted(
							_List_fromArray(
								[restriction, newRestriction]));
				}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$getRestrictionsHelper = F3(
	function (existingRestrictions, notation, cache) {
		getRestrictionsHelper:
		while (true) {
			switch (notation.$) {
				case 'FunctionTypeAnnotation':
					var _v1 = notation.a;
					var oneCoords = _v1.a;
					var one = _v1.b;
					var _v2 = notation.b;
					var twoCoords = _v2.a;
					var two = _v2.b;
					return existingRestrictions;
				case 'GenericType':
					var name = notation.a;
					var $temp$existingRestrictions = A2(
						$mdgriffith$elm_codegen$Internal$Compiler$restrictFurther,
						existingRestrictions,
						$mdgriffith$elm_codegen$Internal$Compiler$nameToRestrictions(name)),
						$temp$notation = A2(
						$elm$core$Maybe$withDefault,
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit,
						A2($elm$core$Dict$get, name, cache)),
						$temp$cache = cache;
					existingRestrictions = $temp$existingRestrictions;
					notation = $temp$notation;
					cache = $temp$cache;
					continue getRestrictionsHelper;
				case 'Typed':
					var nodedModuleName = notation.a;
					var vars = notation.b;
					return existingRestrictions;
				case 'Unit':
					return existingRestrictions;
				case 'Tupled':
					var nodes = notation.a;
					return existingRestrictions;
				case 'Record':
					var fields = notation.a;
					return existingRestrictions;
				default:
					var baseName = notation.a;
					var _v3 = notation.b;
					var recordNode = _v3.a;
					var fields = _v3.b;
					return existingRestrictions;
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$getRestrictions = F2(
	function (notation, cache) {
		return A3($mdgriffith$elm_codegen$Internal$Compiler$getRestrictionsHelper, $mdgriffith$elm_codegen$Internal$Compiler$NoRestrictions, notation, cache);
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 'Err') {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 'Err') {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList = F4(
	function (visited, cache, nodes, processed) {
		resolveVariableList:
		while (true) {
			if (!nodes.b) {
				return $elm$core$Result$Ok(
					$elm$core$List$reverse(processed));
			} else {
				var _v17 = nodes.a;
				var coords = _v17.a;
				var top = _v17.b;
				var remain = nodes.b;
				var _v18 = A3($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, visited, cache, top);
				if (_v18.$ === 'Ok') {
					var resolved = _v18.a;
					var $temp$visited = visited,
						$temp$cache = cache,
						$temp$nodes = remain,
						$temp$processed = A2(
						$elm$core$List$cons,
						A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, coords, resolved),
						processed);
					visited = $temp$visited;
					cache = $temp$cache;
					nodes = $temp$nodes;
					processed = $temp$processed;
					continue resolveVariableList;
				} else {
					var err = _v18.a;
					return $elm$core$Result$Err(err);
				}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$resolveVariables = F3(
	function (visited, cache, annotation) {
		resolveVariables:
		while (true) {
			switch (annotation.$) {
				case 'FunctionTypeAnnotation':
					var _v1 = annotation.a;
					var oneCoords = _v1.a;
					var one = _v1.b;
					var _v2 = annotation.b;
					var twoCoords = _v2.a;
					var two = _v2.b;
					return A3(
						$elm$core$Result$map2,
						F2(
							function (oneResolved, twoResolved) {
								return A2(
									$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
									A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, oneCoords, oneResolved),
									A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, twoCoords, twoResolved));
							}),
						A3($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, visited, cache, one),
						A3($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, visited, cache, two));
				case 'GenericType':
					var name = annotation.a;
					if (A2($elm$core$Set$member, name, visited)) {
						return $elm$core$Result$Err('Infinite type inference loop!  Whoops.  This is an issue with elm-codegen.  If you can report this to the elm-codegen repo, that would be appreciated!');
					} else {
						var _v3 = A2($elm$core$Dict$get, name, cache);
						if (_v3.$ === 'Nothing') {
							return $elm$core$Result$Ok(annotation);
						} else {
							var newType = _v3.a;
							var $temp$visited = A2($elm$core$Set$insert, name, visited),
								$temp$cache = cache,
								$temp$annotation = newType;
							visited = $temp$visited;
							cache = $temp$cache;
							annotation = $temp$annotation;
							continue resolveVariables;
						}
					}
				case 'Typed':
					var nodedModuleName = annotation.a;
					var vars = annotation.b;
					return A2(
						$elm$core$Result$map,
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed(nodedModuleName),
						A4($mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList, visited, cache, vars, _List_Nil));
				case 'Unit':
					return $elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit);
				case 'Tupled':
					var nodes = annotation.a;
					return A2(
						$elm$core$Result$map,
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled,
						A4($mdgriffith$elm_codegen$Internal$Compiler$resolveVariableList, visited, cache, nodes, _List_Nil));
				case 'Record':
					var fields = annotation.a;
					return A2(
						$elm$core$Result$map,
						A2($elm$core$Basics$composeL, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record, $elm$core$List$reverse),
						A3(
							$elm$core$List$foldl,
							F2(
								function (_v4, found) {
									var fieldRange = _v4.a;
									var _v5 = _v4.b;
									var name = _v5.a;
									var _v6 = _v5.b;
									var fieldTypeRange = _v6.a;
									var fieldType = _v6.b;
									if (found.$ === 'Err') {
										var err = found.a;
										return $elm$core$Result$Err(err);
									} else {
										var processedFields = found.a;
										var _v8 = A3($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, visited, cache, fieldType);
										if (_v8.$ === 'Err') {
											var err = _v8.a;
											return $elm$core$Result$Err(err);
										} else {
											var resolvedField = _v8.a;
											var restrictions = A2($mdgriffith$elm_codegen$Internal$Compiler$getRestrictions, annotation, cache);
											var _v9 = A2($mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions, restrictions, resolvedField);
											if (_v9.$ === 'Ok') {
												return $elm$core$Result$Ok(
													A2(
														$elm$core$List$cons,
														A2(
															$stil4m$elm_syntax$Elm$Syntax$Node$Node,
															fieldRange,
															_Utils_Tuple2(
																name,
																A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, fieldTypeRange, resolvedField))),
														processedFields));
											} else {
												var err = _v9.a;
												return $elm$core$Result$Err(err);
											}
										}
									}
								}),
							$elm$core$Result$Ok(_List_Nil),
							fields));
				default:
					var baseName = annotation.a;
					var _v10 = annotation.b;
					var recordNode = _v10.a;
					var fields = _v10.b;
					var newFieldResult = A3(
						$elm$core$List$foldl,
						F2(
							function (_v11, found) {
								var fieldRange = _v11.a;
								var _v12 = _v11.b;
								var name = _v12.a;
								var _v13 = _v12.b;
								var fieldTypeRange = _v13.a;
								var fieldType = _v13.b;
								if (found.$ === 'Err') {
									var err = found.a;
									return $elm$core$Result$Err(err);
								} else {
									var processedFields = found.a;
									var _v15 = A3($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, visited, cache, fieldType);
									if (_v15.$ === 'Err') {
										var err = _v15.a;
										return $elm$core$Result$Err(err);
									} else {
										var resolvedField = _v15.a;
										var restrictions = A2($mdgriffith$elm_codegen$Internal$Compiler$getRestrictions, annotation, cache);
										return $elm$core$Result$Ok(
											A2(
												$elm$core$List$cons,
												A2(
													$stil4m$elm_syntax$Elm$Syntax$Node$Node,
													fieldRange,
													_Utils_Tuple2(
														name,
														A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, fieldTypeRange, resolvedField))),
												processedFields));
									}
								}
							}),
						$elm$core$Result$Ok(_List_Nil),
						fields);
					return A2(
						$elm$core$Result$map,
						function (newFields) {
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
								baseName,
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Node$Node,
									recordNode,
									$elm$core$List$reverse(newFields)));
						},
						newFieldResult);
			}
		}
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $mdgriffith$elm_codegen$Internal$Compiler$simplify = function (fullStr) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (piece, str) {
				var isDigit = A2($elm$core$String$all, $elm$core$Char$isDigit, piece);
				if (isDigit) {
					return str;
				} else {
					if (str === '') {
						return piece;
					} else {
						return str + ('_' + piece);
					}
				}
			}),
		'',
		A2($elm$core$String$split, '_', fullStr));
};
var $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper = F3(
	function (existing, renames, type_) {
		switch (type_.$) {
			case 'GenericType':
				var varName = type_.a;
				var _v1 = A2($elm$core$Dict$get, varName, renames);
				if (_v1.$ === 'Nothing') {
					var simplified = $mdgriffith$elm_codegen$Internal$Compiler$simplify(varName);
					return (A2($elm$core$Set$member, simplified, existing) && (!_Utils_eq(varName, simplified))) ? _Utils_Tuple2(
						renames,
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(simplified)) : _Utils_Tuple2(
						A3($elm$core$Dict$insert, varName, simplified, renames),
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(simplified));
				} else {
					var rename = _v1.a;
					return _Utils_Tuple2(
						renames,
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(rename));
				}
			case 'Typed':
				var name = type_.a;
				var vars = type_.b;
				var _v2 = A3(
					$elm$core$List$foldl,
					F2(
						function (typevar, _v3) {
							var varUsed = _v3.a;
							var varList = _v3.b;
							var _v4 = A3(
								$mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper,
								existing,
								varUsed,
								$mdgriffith$elm_codegen$Internal$Compiler$denode(typevar));
							var oneUsed = _v4.a;
							var oneType = _v4.b;
							return _Utils_Tuple2(
								oneUsed,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_codegen$Internal$Compiler$nodify(oneType),
									varList));
						}),
					_Utils_Tuple2(renames, _List_Nil),
					vars);
				var newUsed = _v2.a;
				var newVars = _v2.b;
				return _Utils_Tuple2(
					newUsed,
					A2(
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
						name,
						$elm$core$List$reverse(newVars)));
			case 'Unit':
				return _Utils_Tuple2(renames, type_);
			case 'Tupled':
				var valsA = type_.a;
				return _Utils_Tuple2(renames, type_);
			case 'Record':
				var fieldsA = type_.a;
				return _Utils_Tuple2(renames, type_);
			case 'GenericRecord':
				var _v5 = type_.a;
				var reVarName = _v5.b;
				var _v6 = type_.b;
				var fieldsARange = _v6.a;
				var fieldsA = _v6.b;
				return _Utils_Tuple2(renames, type_);
			default:
				var one = type_.a;
				var two = type_.b;
				var _v7 = A3(
					$mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper,
					existing,
					renames,
					$mdgriffith$elm_codegen$Internal$Compiler$denode(one));
				var oneUsed = _v7.a;
				var oneType = _v7.b;
				var _v8 = A3(
					$mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper,
					existing,
					oneUsed,
					$mdgriffith$elm_codegen$Internal$Compiler$denode(two));
				var twoUsed = _v8.a;
				var twoType = _v8.b;
				return _Utils_Tuple2(
					twoUsed,
					A2(
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
						$mdgriffith$elm_codegen$Internal$Compiler$nodify(oneType),
						$mdgriffith$elm_codegen$Internal$Compiler$nodify(twoType)));
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariables = function (type_) {
	var existing = $elm$core$Set$fromList(
		$mdgriffith$elm_codegen$Internal$Compiler$getGenericsHelper(type_));
	return A3($mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariablesHelper, existing, $elm$core$Dict$empty, type_).b;
};
var $mdgriffith$elm_codegen$Internal$Index$typecheck = function (_v0) {
	var top = _v0.a;
	var tail = _v0.b;
	var scope = _v0.c;
	var check = _v0.d;
	return check;
};
var $mdgriffith$elm_codegen$Internal$Compiler$resolve = F3(
	function (index, cache, annotation) {
		if ($mdgriffith$elm_codegen$Internal$Index$typecheck(index)) {
			var restrictions = A2($mdgriffith$elm_codegen$Internal$Compiler$getRestrictions, annotation, cache);
			var _v0 = A3($mdgriffith$elm_codegen$Internal$Compiler$resolveVariables, $elm$core$Set$empty, cache, annotation);
			if (_v0.$ === 'Ok') {
				var newAnnotation = _v0.a;
				return A2(
					$mdgriffith$elm_codegen$Internal$Compiler$checkRestrictions,
					restrictions,
					$mdgriffith$elm_codegen$Internal$Compiler$rewriteTypeVariables(newAnnotation));
			} else {
				var err = _v0.a;
				return $elm$core$Result$Err(err);
			}
		} else {
			return $elm$core$Result$Err('Type inference skipped.');
		}
	});
var $mdgriffith$elm_codegen$Elm$declaration = F2(
	function (nameStr, _v0) {
		var toBody = _v0.a;
		var name = $mdgriffith$elm_codegen$Internal$Format$formatDeclarationName(nameStr);
		return $mdgriffith$elm_codegen$Internal$Compiler$Declaration(
			{
				docs: $elm$core$Maybe$Nothing,
				exposed: $mdgriffith$elm_codegen$Internal$Compiler$NotExposed,
				imports: _List_Nil,
				name: name,
				toBody: function (index) {
					var body = toBody(index);
					var resolvedType = A2(
						$elm$core$Result$andThen,
						function (sig) {
							return A3($mdgriffith$elm_codegen$Internal$Compiler$resolve, index, sig.inferences, sig.type_);
						},
						A2($elm$core$Result$mapError, $mdgriffith$elm_codegen$Elm$renderError, body.annotation));
					var maybeWarning = function () {
						if (resolvedType.$ === 'Ok') {
							var sig = resolvedType.a;
							var _v5 = body.annotation;
							if (_v5.$ === 'Ok') {
								var inference = _v5.a;
								return $elm$core$Maybe$Nothing;
							} else {
								if (!_v5.a.b) {
									return $elm$core$Maybe$Nothing;
								} else {
									var err = _v5.a;
									return $elm$core$Maybe$Just(
										{
											declaration: name,
											warning: $mdgriffith$elm_codegen$Elm$renderError(err)
										});
								}
							}
						} else {
							if (resolvedType.a === '') {
								return $elm$core$Maybe$Nothing;
							} else {
								var err = resolvedType.a;
								return $elm$core$Maybe$Just(
									{declaration: name, warning: err});
							}
						}
					}();
					return {
						additionalImports: body.imports,
						declaration: $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
							{
								declaration: function () {
									var _v1 = body.expression;
									if (_v1.$ === 'LambdaExpression') {
										var lam = _v1.a;
										return $mdgriffith$elm_codegen$Internal$Compiler$nodify(
											{
												_arguments: lam.args,
												expression: lam.expression,
												name: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
											});
									} else {
										return $mdgriffith$elm_codegen$Internal$Compiler$nodify(
											{
												_arguments: _List_Nil,
												expression: $mdgriffith$elm_codegen$Internal$Compiler$nodify(body.expression),
												name: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
											});
									}
								}(),
								documentation: $elm$core$Maybe$Nothing,
								signature: function () {
									var _v2 = body.annotation;
									if (_v2.$ === 'Ok') {
										var sig = _v2.a;
										if (resolvedType.$ === 'Ok') {
											if (resolvedType.a.$ === 'GenericType') {
												var generic = resolvedType.a.a;
												return $elm$core$Maybe$Nothing;
											} else {
												var finalType = resolvedType.a;
												return $elm$core$Maybe$Just(
													$mdgriffith$elm_codegen$Internal$Compiler$nodify(
														{
															name: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name),
															typeAnnotation: $mdgriffith$elm_codegen$Internal$Compiler$nodify(
																$mdgriffith$elm_codegen$Internal$Clean$clean(finalType))
														}));
											}
										} else {
											var errMsg = resolvedType.a;
											return $elm$core$Maybe$Nothing;
										}
									} else {
										return $elm$core$Maybe$Nothing;
									}
								}()
							}),
						warning: maybeWarning
					};
				}
			});
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$All = function (a) {
	return {$: 'All', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit = function (a) {
	return {$: 'Explicit', a: a};
};
var $mdgriffith$elm_codegen$Internal$Comments$Markdown = function (a) {
	return {$: 'Markdown', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule = function (a) {
	return {$: 'NormalModule', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Module$PortModule = function (a) {
	return {$: 'PortModule', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$RenderedBlock = function (a) {
	return {$: 'RenderedBlock', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$RenderedComment = function (a) {
	return {$: 'RenderedComment', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$RenderedDecl = function (a) {
	return {$: 'RenderedDecl', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration = function (a) {
	return {$: 'CustomTypeDeclaration', a: a};
};
var $mdgriffith$elm_codegen$Internal$Render$addDocs = F2(
	function (maybeDoc, decl) {
		if (maybeDoc.$ === 'Nothing') {
			return decl;
		} else {
			var doc = maybeDoc.a;
			switch (decl.$) {
				case 'FunctionDeclaration':
					var func = decl.a;
					return $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
						_Utils_update(
							func,
							{
								documentation: $elm$core$Maybe$Just(
									$mdgriffith$elm_codegen$Internal$Compiler$nodify(doc))
							}));
				case 'AliasDeclaration':
					var typealias = decl.a;
					return $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(
						_Utils_update(
							typealias,
							{
								documentation: $elm$core$Maybe$Just(
									$mdgriffith$elm_codegen$Internal$Compiler$nodify(doc))
							}));
				case 'CustomTypeDeclaration':
					var typeDecl = decl.a;
					return $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(
						_Utils_update(
							typeDecl,
							{
								documentation: $elm$core$Maybe$Just(
									$mdgriffith$elm_codegen$Internal$Compiler$nodify(doc))
							}));
				case 'PortDeclaration':
					var sig = decl.a;
					return decl;
				case 'InfixDeclaration':
					return decl;
				default:
					return decl;
			}
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose = function (a) {
	return {$: 'FunctionExpose', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose = function (a) {
	return {$: 'TypeExpose', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose = function (a) {
	return {$: 'TypeOrAliasExpose', a: a};
};
var $mdgriffith$elm_codegen$Internal$Render$addExposed = F3(
	function (exposed, declaration, otherExposes) {
		if (exposed.$ === 'NotExposed') {
			return otherExposes;
		} else {
			var details = exposed.a;
			switch (declaration.$) {
				case 'FunctionDeclaration':
					var fn = declaration.a;
					var fnName = $mdgriffith$elm_codegen$Internal$Compiler$denode(
						function ($) {
							return $.name;
						}(
							$mdgriffith$elm_codegen$Internal$Compiler$denode(fn.declaration)));
					return A2(
						$elm$core$List$cons,
						$stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose(fnName),
						otherExposes);
				case 'AliasDeclaration':
					var synonym = declaration.a;
					var aliasName = $mdgriffith$elm_codegen$Internal$Compiler$denode(synonym.name);
					return A2(
						$elm$core$List$cons,
						$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose(aliasName),
						otherExposes);
				case 'CustomTypeDeclaration':
					var myType = declaration.a;
					var typeName = $mdgriffith$elm_codegen$Internal$Compiler$denode(myType.name);
					return details.exposeConstructor ? A2(
						$elm$core$List$cons,
						$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{
								name: typeName,
								open: $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)
							}),
						otherExposes) : A2(
						$elm$core$List$cons,
						$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose(typeName),
						otherExposes);
				case 'PortDeclaration':
					var myPort = declaration.a;
					var typeName = $mdgriffith$elm_codegen$Internal$Compiler$denode(myPort.name);
					return A2(
						$elm$core$List$cons,
						$stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose(typeName),
						otherExposes);
				case 'InfixDeclaration':
					var inf = declaration.a;
					return otherExposes;
				default:
					return otherExposes;
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Comments$Comment = function (a) {
	return {$: 'Comment', a: a};
};
var $mdgriffith$elm_codegen$Internal$Comments$addPart = F2(
	function (_v0, part) {
		var parts = _v0.a;
		return $mdgriffith$elm_codegen$Internal$Comments$Comment(
			A2($elm$core$List$cons, part, parts));
	});
var $mdgriffith$elm_codegen$Internal$Compiler$fullModName = function (name) {
	return A2($elm$core$String$join, '.', name);
};
var $mdgriffith$elm_codegen$Internal$Render$dedupImports = function (mods) {
	return A2(
		$elm$core$List$sortBy,
		$mdgriffith$elm_codegen$Internal$Compiler$fullModName,
		A3(
			$elm$core$List$foldl,
			F2(
				function (mod, _v0) {
					var set = _v0.a;
					var gathered = _v0.b;
					var stringName = $mdgriffith$elm_codegen$Internal$Compiler$fullModName(mod);
					return A2($elm$core$Set$member, stringName, set) ? _Utils_Tuple2(set, gathered) : _Utils_Tuple2(
						A2($elm$core$Set$insert, stringName, set),
						A2($elm$core$List$cons, mod, gathered));
				}),
			_Utils_Tuple2($elm$core$Set$empty, _List_Nil),
			mods).b);
};
var $mdgriffith$elm_codegen$Internal$Comments$emptyComment = $mdgriffith$elm_codegen$Internal$Comments$Comment(_List_Nil);
var $mdgriffith$elm_codegen$Internal$Render$matchName = F2(
	function (one, two) {
		if (one.$ === 'Nothing') {
			if (two.$ === 'Nothing') {
				return true;
			} else {
				return false;
			}
		} else {
			var oneName = one.a;
			if (two.$ === 'Nothing') {
				return false;
			} else {
				var twoName = two.a;
				return _Utils_eq(oneName, twoName);
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Render$groupExposing = function (items) {
	return A2(
		$elm$core$List$map,
		function (doc) {
			return _Utils_update(
				doc,
				{
					members: $elm$core$List$reverse(doc.members)
				});
		},
		A3(
			$elm$core$List$foldr,
			F2(
				function (_v0, acc) {
					var maybeGroup = _v0.a;
					var name = _v0.b;
					if (!acc.b) {
						return _List_fromArray(
							[
								{
								group: maybeGroup,
								members: _List_fromArray(
									[name])
							}
							]);
					} else {
						var top = acc.a;
						var groups = acc.b;
						return A2($mdgriffith$elm_codegen$Internal$Render$matchName, maybeGroup, top.group) ? A2(
							$elm$core$List$cons,
							{
								group: top.group,
								members: A2($elm$core$List$cons, name, top.members)
							},
							groups) : A2(
							$elm$core$List$cons,
							{
								group: maybeGroup,
								members: _List_fromArray(
									[name])
							},
							acc);
					}
				}),
			_List_Nil,
			items));
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose = function (a) {
	return {$: 'InfixExpose', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$builtIn = function (name) {
	_v0$13:
	while (true) {
		if (name.b) {
			if (name.b.b) {
				if ((name.a === 'Platform') && (!name.b.b.b)) {
					switch (name.b.a) {
						case 'Sub':
							var _v1 = name.b;
							return true;
						case 'Cmd':
							var _v2 = name.b;
							return true;
						default:
							break _v0$13;
					}
				} else {
					break _v0$13;
				}
			} else {
				switch (name.a) {
					case 'List':
						return true;
					case 'Maybe':
						return true;
					case 'String':
						return true;
					case 'Basics':
						return true;
					case 'Char':
						return true;
					case 'Debug':
						return true;
					case 'Tuple':
						return true;
					case 'Result':
						return true;
					case 'Platform':
						return true;
					case 'Sub':
						return true;
					case 'Cmd':
						return true;
					default:
						break _v0$13;
				}
			}
		} else {
			break _v0$13;
		}
	}
	return false;
};
var $mdgriffith$elm_codegen$Internal$Compiler$findAlias = F2(
	function (modName, aliases) {
		findAlias:
		while (true) {
			if (!aliases.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var _v1 = aliases.a;
				var aliasModName = _v1.a;
				var alias = _v1.b;
				var remain = aliases.b;
				if (_Utils_eq(modName, aliasModName)) {
					return $elm$core$Maybe$Just(alias);
				} else {
					var $temp$modName = modName,
						$temp$aliases = remain;
					modName = $temp$modName;
					aliases = $temp$aliases;
					continue findAlias;
				}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$isParser = function (name) {
	_v0$2:
	while (true) {
		if (name.b && (name.a === 'Parser')) {
			if (!name.b.b) {
				return true;
			} else {
				if ((name.b.a === 'Advanced') && (!name.b.b.b)) {
					var _v1 = name.b;
					return true;
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return false;
};
var $mdgriffith$elm_codegen$Internal$Compiler$isUrlParser = function (name) {
	if ((((name.b && (name.a === 'Url')) && name.b.b) && (name.b.a === 'Parser')) && (!name.b.b.b)) {
		var _v1 = name.b;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_codegen$Internal$Compiler$makeImport = F2(
	function (aliases, name) {
		if (!name.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$findAlias, name, aliases);
			if (_v1.$ === 'Nothing') {
				return $mdgriffith$elm_codegen$Internal$Compiler$builtIn(name) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					{
						exposingList: $mdgriffith$elm_codegen$Internal$Compiler$isUrlParser(name) ? $elm$core$Maybe$Just(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(
								$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
									_List_fromArray(
										[
											$mdgriffith$elm_codegen$Internal$Compiler$nodify(
											$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('</>')),
											$mdgriffith$elm_codegen$Internal$Compiler$nodify(
											$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('<?>'))
										])))) : ($mdgriffith$elm_codegen$Internal$Compiler$isParser(name) ? $elm$core$Maybe$Just(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(
								$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
									_List_fromArray(
										[
											$mdgriffith$elm_codegen$Internal$Compiler$nodify(
											$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('|=')),
											$mdgriffith$elm_codegen$Internal$Compiler$nodify(
											$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('|.'))
										])))) : $elm$core$Maybe$Nothing),
						moduleAlias: $elm$core$Maybe$Nothing,
						moduleName: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
					});
			} else {
				var alias = _v1.a;
				return $elm$core$Maybe$Just(
					{
						exposingList: $mdgriffith$elm_codegen$Internal$Compiler$isUrlParser(name) ? $elm$core$Maybe$Just(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(
								$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
									_List_fromArray(
										[
											$mdgriffith$elm_codegen$Internal$Compiler$nodify(
											$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('</>')),
											$mdgriffith$elm_codegen$Internal$Compiler$nodify(
											$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('<?>'))
										])))) : ($mdgriffith$elm_codegen$Internal$Compiler$isParser(name) ? $elm$core$Maybe$Just(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(
								$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
									_List_fromArray(
										[
											$mdgriffith$elm_codegen$Internal$Compiler$nodify(
											$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('|=')),
											$mdgriffith$elm_codegen$Internal$Compiler$nodify(
											$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('|.'))
										])))) : $elm$core$Maybe$Nothing),
						moduleAlias: $elm$core$Maybe$Just(
							$mdgriffith$elm_codegen$Internal$Compiler$nodify(
								_List_fromArray(
									[alias]))),
						moduleName: $mdgriffith$elm_codegen$Internal$Compiler$nodify(name)
					});
			}
		}
	});
var $the_sett$elm_pretty_printer$Internals$Concatenate = F2(
	function (a, b) {
		return {$: 'Concatenate', a: a, b: b};
	});
var $the_sett$elm_pretty_printer$Pretty$append = F2(
	function (doc1, doc2) {
		return A2(
			$the_sett$elm_pretty_printer$Internals$Concatenate,
			function (_v0) {
				return doc1;
			},
			function (_v1) {
				return doc2;
			});
	});
var $elm_community$basics_extra$Basics$Extra$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var $the_sett$elm_pretty_printer$Pretty$a = $elm_community$basics_extra$Basics$Extra$flip($the_sett$elm_pretty_printer$Pretty$append);
var $the_sett$elm_pretty_printer$Internals$Line = F2(
	function (a, b) {
		return {$: 'Line', a: a, b: b};
	});
var $the_sett$elm_pretty_printer$Pretty$line = A2($the_sett$elm_pretty_printer$Internals$Line, ' ', '');
var $the_sett$elm_pretty_printer$Internals$Empty = {$: 'Empty'};
var $the_sett$elm_pretty_printer$Pretty$empty = $the_sett$elm_pretty_printer$Internals$Empty;
var $the_sett$elm_pretty_printer$Pretty$join = F2(
	function (sep, docs) {
		join:
		while (true) {
			if (!docs.b) {
				return $the_sett$elm_pretty_printer$Pretty$empty;
			} else {
				if (docs.a.$ === 'Empty') {
					var _v1 = docs.a;
					var ds = docs.b;
					var $temp$sep = sep,
						$temp$docs = ds;
					sep = $temp$sep;
					docs = $temp$docs;
					continue join;
				} else {
					var d = docs.a;
					var ds = docs.b;
					var step = F2(
						function (x, rest) {
							if (x.$ === 'Empty') {
								return rest;
							} else {
								var doc = x;
								return A2(
									$the_sett$elm_pretty_printer$Pretty$append,
									sep,
									A2($the_sett$elm_pretty_printer$Pretty$append, doc, rest));
							}
						});
					var spersed = A3($elm$core$List$foldr, step, $the_sett$elm_pretty_printer$Pretty$empty, ds);
					return A2($the_sett$elm_pretty_printer$Pretty$append, d, spersed);
				}
			}
		}
	});
var $the_sett$elm_pretty_printer$Pretty$lines = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$line);
var $mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$Compiler$denode);
var $mdgriffith$elm_codegen$Internal$Compiler$denodeAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$Compiler$denode);
var $the_sett$elm_pretty_printer$Internals$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $the_sett$elm_pretty_printer$Pretty$char = function (c) {
	return A2(
		$the_sett$elm_pretty_printer$Internals$Text,
		$elm$core$String$fromChar(c),
		$elm$core$Maybe$Nothing);
};
var $the_sett$elm_pretty_printer$Pretty$surround = F3(
	function (left, right, doc) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$append,
			A2($the_sett$elm_pretty_printer$Pretty$append, left, doc),
			right);
	});
var $the_sett$elm_pretty_printer$Pretty$parens = function (doc) {
	return A3(
		$the_sett$elm_pretty_printer$Pretty$surround,
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr('(')),
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr(')')),
		doc);
};
var $the_sett$elm_pretty_printer$Pretty$string = function (val) {
	return A2($the_sett$elm_pretty_printer$Internals$Text, val, $elm$core$Maybe$Nothing);
};
var $mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExpose = function (tlExpose) {
	switch (tlExpose.$) {
		case 'InfixExpose':
			var val = tlExpose.a;
			return $the_sett$elm_pretty_printer$Pretty$parens(
				$the_sett$elm_pretty_printer$Pretty$string(val));
		case 'FunctionExpose':
			var val = tlExpose.a;
			return $the_sett$elm_pretty_printer$Pretty$string(val);
		case 'TypeOrAliasExpose':
			var val = tlExpose.a;
			return $the_sett$elm_pretty_printer$Pretty$string(val);
		default:
			var exposedType = tlExpose.a;
			var _v1 = exposedType.open;
			if (_v1.$ === 'Nothing') {
				return $the_sett$elm_pretty_printer$Pretty$string(exposedType.name);
			} else {
				return A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$string('(..)'),
					$the_sett$elm_pretty_printer$Pretty$string(exposedType.name));
			}
	}
};
var $mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExposes = function (exposes) {
	return A2(
		$the_sett$elm_pretty_printer$Pretty$join,
		$the_sett$elm_pretty_printer$Pretty$string(', '),
		A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExpose, exposes));
};
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineTopLevelExposes = function (exposes) {
	if (!exposes.b) {
		return $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('');
	} else {
		var hd = exposes.a;
		var tl = exposes.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (exp, result) {
					var _v1 = _Utils_Tuple2(exp, result);
					if (_v1.a.$ === 'TypeExpose') {
						var typeExpose = _v1.a.a;
						var _v2 = typeExpose.open;
						if (_v2.$ === 'Just') {
							return exp;
						} else {
							return result;
						}
					} else {
						if (_v1.b.$ === 'TypeExpose') {
							var typeExpose = _v1.b.a;
							var _v3 = typeExpose.open;
							if (_v3.$ === 'Just') {
								return result;
							} else {
								return exp;
							}
						} else {
							return result;
						}
					}
				}),
			hd,
			tl);
	}
};
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName = function (tle) {
	switch (tle.$) {
		case 'InfixExpose':
			var val = tle.a;
			return val;
		case 'FunctionExpose':
			var val = tle.a;
			return val;
		case 'TypeOrAliasExpose':
			var val = tle.a;
			return val;
		default:
			var exposedType = tle.a;
			return exposedType.name;
	}
};
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByExposingName = function (innerImports) {
	var _v0 = function () {
		if (!innerImports.b) {
			return _Utils_Tuple3(
				'',
				_List_Nil,
				_List_fromArray(
					[_List_Nil]));
		} else {
			var hd = innerImports.a;
			return A3(
				$elm$core$List$foldl,
				F2(
					function (exp, _v2) {
						var currName = _v2.a;
						var currAccum = _v2.b;
						var accum = _v2.c;
						var nextName = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(exp);
						return _Utils_eq(nextName, currName) ? _Utils_Tuple3(
							currName,
							A2($elm$core$List$cons, exp, currAccum),
							accum) : _Utils_Tuple3(
							nextName,
							_List_fromArray(
								[exp]),
							A2($elm$core$List$cons, currAccum, accum));
					}),
				_Utils_Tuple3(
					$mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(hd),
					_List_Nil,
					_List_Nil),
				innerImports);
		}
	}();
	var hdGroup = _v0.b;
	var remGroups = _v0.c;
	return $elm$core$List$reverse(
		A2($elm$core$List$cons, hdGroup, remGroups));
};
var $elm$core$List$sortWith = _List_sortWith;
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeOrder = F2(
	function (tlel, tler) {
		var _v0 = _Utils_Tuple2(tlel, tler);
		if (_v0.a.$ === 'InfixExpose') {
			if (_v0.b.$ === 'InfixExpose') {
				return A2(
					$elm$core$Basics$compare,
					$mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tlel),
					$mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tler));
			} else {
				return $elm$core$Basics$LT;
			}
		} else {
			if (_v0.b.$ === 'InfixExpose') {
				return $elm$core$Basics$GT;
			} else {
				return A2(
					$elm$core$Basics$compare,
					$mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tlel),
					$mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeName(tler));
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposings = function (tlExposings) {
	return A2(
		$elm$core$List$map,
		$mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineTopLevelExposes,
		$mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByExposingName(
			A2($elm$core$List$sortWith, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$topLevelExposeOrder, tlExposings)));
};
var $the_sett$elm_pretty_printer$Pretty$space = $the_sett$elm_pretty_printer$Pretty$char(
	_Utils_chr(' '));
var $mdgriffith$elm_codegen$Internal$Write$prettyExposing = function (exposing_) {
	var exposings = function () {
		if (exposing_.$ === 'All') {
			return $the_sett$elm_pretty_printer$Pretty$parens(
				$the_sett$elm_pretty_printer$Pretty$string('..'));
		} else {
			var tll = exposing_.a;
			return $the_sett$elm_pretty_printer$Pretty$parens(
				$mdgriffith$elm_codegen$Internal$Write$prettyTopLevelExposes(
					$mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposings(
						$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(tll))));
		}
	}();
	return A2(
		$the_sett$elm_pretty_printer$Pretty$a,
		exposings,
		A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$space,
			$the_sett$elm_pretty_printer$Pretty$string('exposing')));
};
var $mdgriffith$elm_codegen$Internal$Write$prettyMaybe = F2(
	function (prettyFn, maybeVal) {
		return A2(
			$elm$core$Maybe$withDefault,
			$the_sett$elm_pretty_printer$Pretty$empty,
			A2($elm$core$Maybe$map, prettyFn, maybeVal));
	});
var $mdgriffith$elm_codegen$Internal$Write$dot = $the_sett$elm_pretty_printer$Pretty$string('.');
var $mdgriffith$elm_codegen$Internal$Write$prettyModuleName = function (name) {
	return A2(
		$the_sett$elm_pretty_printer$Pretty$join,
		$mdgriffith$elm_codegen$Internal$Write$dot,
		A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, name));
};
var $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameAlias = function (name) {
	if (!name.b) {
		return $the_sett$elm_pretty_printer$Pretty$empty;
	} else {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			A2(
				$the_sett$elm_pretty_printer$Pretty$join,
				$mdgriffith$elm_codegen$Internal$Write$dot,
				A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, name)),
			$the_sett$elm_pretty_printer$Pretty$string('as '));
	}
};
var $mdgriffith$elm_codegen$Internal$Write$prettyImport = function (import_) {
	return A2(
		$the_sett$elm_pretty_printer$Pretty$join,
		$the_sett$elm_pretty_printer$Pretty$space,
		_List_fromArray(
			[
				$the_sett$elm_pretty_printer$Pretty$string('import'),
				$mdgriffith$elm_codegen$Internal$Write$prettyModuleName(
				$mdgriffith$elm_codegen$Internal$Compiler$denode(import_.moduleName)),
				A2(
				$mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
				$mdgriffith$elm_codegen$Internal$Write$prettyModuleNameAlias,
				$mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(import_.moduleAlias)),
				A2(
				$mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
				$mdgriffith$elm_codegen$Internal$Write$prettyExposing,
				$mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(import_.exposingList))
			]));
};
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode = $stil4m$elm_syntax$Elm$Syntax$Node$value;
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode);
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode);
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify = function (exp) {
	return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
};
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll = $elm$core$List$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify);
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinExposings = F2(
	function (left, right) {
		var _v0 = _Utils_Tuple2(left, right);
		if (_v0.a.$ === 'All') {
			var range = _v0.a.a;
			return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
		} else {
			if (_v0.b.$ === 'All') {
				var range = _v0.b.a;
				return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
			} else {
				var leftNodes = _v0.a.a;
				var rightNodes = _v0.b.a;
				return $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					$mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll(
						A2(
							$elm$core$List$append,
							$mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll(leftNodes),
							$mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll(rightNodes))));
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinMaybeExposings = F2(
	function (maybeLeft, maybeRight) {
		var _v0 = _Utils_Tuple2(maybeLeft, maybeRight);
		if (_v0.a.$ === 'Nothing') {
			if (_v0.b.$ === 'Nothing') {
				var _v1 = _v0.a;
				var _v2 = _v0.b;
				return $elm$core$Maybe$Nothing;
			} else {
				var _v4 = _v0.a;
				var right = _v0.b.a;
				return $elm$core$Maybe$Just(right);
			}
		} else {
			if (_v0.b.$ === 'Nothing') {
				var left = _v0.a.a;
				var _v3 = _v0.b;
				return $elm$core$Maybe$Just(left);
			} else {
				var left = _v0.a.a;
				var right = _v0.b.a;
				return $elm$core$Maybe$Just(
					A2($mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinExposings, left, right));
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyMaybe = $elm$core$Maybe$map($mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify);
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$or = F2(
	function (ma, mb) {
		if (ma.$ === 'Nothing') {
			return mb;
		} else {
			return ma;
		}
	});
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposing = function (exp) {
	if (exp.$ === 'All') {
		var range = exp.a;
		return $stil4m$elm_syntax$Elm$Syntax$Exposing$All(range);
	} else {
		var nodes = exp.a;
		return $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
			$mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyAll(
				$mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposings(
					$mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeAll(nodes))));
	}
};
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineImports = function (innerImports) {
	if (!innerImports.b) {
		return {
			exposingList: $elm$core$Maybe$Nothing,
			moduleAlias: $elm$core$Maybe$Nothing,
			moduleName: $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify(_List_Nil)
		};
	} else {
		var hd = innerImports.a;
		var tl = innerImports.b;
		var combinedImports = A3(
			$elm$core$List$foldl,
			F2(
				function (imp, result) {
					return {
						exposingList: $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodifyMaybe(
							A2(
								$mdgriffith$elm_codegen$Internal$ImportsAndExposing$joinMaybeExposings,
								$mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe(imp.exposingList),
								$mdgriffith$elm_codegen$Internal$ImportsAndExposing$denodeMaybe(result.exposingList))),
						moduleAlias: A2($mdgriffith$elm_codegen$Internal$ImportsAndExposing$or, imp.moduleAlias, result.moduleAlias),
						moduleName: imp.moduleName
					};
				}),
			hd,
			tl);
		return _Utils_update(
			combinedImports,
			{
				exposingList: A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeR,
						$mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode,
						A2($elm$core$Basics$composeR, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupExposing, $mdgriffith$elm_codegen$Internal$ImportsAndExposing$nodify)),
					combinedImports.exposingList)
			});
	}
};
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByModuleName = function (innerImports) {
	var _v0 = function () {
		if (!innerImports.b) {
			return _Utils_Tuple3(
				_List_Nil,
				_List_Nil,
				_List_fromArray(
					[_List_Nil]));
		} else {
			var hd = innerImports.a;
			return A3(
				$elm$core$List$foldl,
				F2(
					function (imp, _v2) {
						var currName = _v2.a;
						var currAccum = _v2.b;
						var accum = _v2.c;
						var nextName = $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode(imp.moduleName);
						return _Utils_eq(nextName, currName) ? _Utils_Tuple3(
							currName,
							A2($elm$core$List$cons, imp, currAccum),
							accum) : _Utils_Tuple3(
							nextName,
							_List_fromArray(
								[imp]),
							A2($elm$core$List$cons, currAccum, accum));
					}),
				_Utils_Tuple3(
					$mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode(hd.moduleName),
					_List_Nil,
					_List_Nil),
				innerImports);
		}
	}();
	var hdGroup = _v0.b;
	var remGroups = _v0.c;
	return $elm$core$List$reverse(
		A2($elm$core$List$cons, hdGroup, remGroups));
};
var $mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupImports = function (imports) {
	var impName = function (imp) {
		return $mdgriffith$elm_codegen$Internal$ImportsAndExposing$denode(imp.moduleName);
	};
	return A2(
		$elm$core$List$map,
		$mdgriffith$elm_codegen$Internal$ImportsAndExposing$combineImports,
		$mdgriffith$elm_codegen$Internal$ImportsAndExposing$groupByModuleName(
			A2($elm$core$List$sortBy, impName, imports)));
};
var $mdgriffith$elm_codegen$Internal$Write$prettyImports = function (imports) {
	return $the_sett$elm_pretty_printer$Pretty$lines(
		A2(
			$elm$core$List$map,
			$mdgriffith$elm_codegen$Internal$Write$prettyImport,
			$mdgriffith$elm_codegen$Internal$ImportsAndExposing$sortAndDedupImports(imports)));
};
var $mdgriffith$elm_codegen$Internal$Write$importsPretty = function (imports) {
	if (!imports.b) {
		return $the_sett$elm_pretty_printer$Pretty$line;
	} else {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$line,
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				$the_sett$elm_pretty_printer$Pretty$line,
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$line,
					$mdgriffith$elm_codegen$Internal$Write$prettyImports(imports))));
	}
};
var $mdgriffith$elm_codegen$Internal$Write$prettyComments = function (comments) {
	if (!comments.b) {
		return $the_sett$elm_pretty_printer$Pretty$empty;
	} else {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$line,
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				$the_sett$elm_pretty_printer$Pretty$line,
				$the_sett$elm_pretty_printer$Pretty$lines(
					A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, comments))));
	}
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $the_sett$elm_pretty_printer$Internals$Nest = F2(
	function (a, b) {
		return {$: 'Nest', a: a, b: b};
	});
var $the_sett$elm_pretty_printer$Pretty$nest = F2(
	function (depth, doc) {
		return A2(
			$the_sett$elm_pretty_printer$Internals$Nest,
			depth,
			function (_v0) {
				return doc;
			});
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyDocumentation = function (docs) {
	return A2($elm$core$String$contains, '\n', docs) ? $the_sett$elm_pretty_printer$Pretty$string('{-| ' + (docs + '\n-}')) : $the_sett$elm_pretty_printer$Pretty$string('{-| ' + (docs + ' -}'));
};
var $the_sett$elm_pretty_printer$Internals$Union = F2(
	function (a, b) {
		return {$: 'Union', a: a, b: b};
	});
var $the_sett$elm_pretty_printer$Internals$flatten = function (doc) {
	flatten:
	while (true) {
		switch (doc.$) {
			case 'Concatenate':
				var doc1 = doc.a;
				var doc2 = doc.b;
				return A2(
					$the_sett$elm_pretty_printer$Internals$Concatenate,
					function (_v1) {
						return $the_sett$elm_pretty_printer$Internals$flatten(
							doc1(_Utils_Tuple0));
					},
					function (_v2) {
						return $the_sett$elm_pretty_printer$Internals$flatten(
							doc2(_Utils_Tuple0));
					});
			case 'Nest':
				var i = doc.a;
				var doc1 = doc.b;
				return A2(
					$the_sett$elm_pretty_printer$Internals$Nest,
					i,
					function (_v3) {
						return $the_sett$elm_pretty_printer$Internals$flatten(
							doc1(_Utils_Tuple0));
					});
			case 'Union':
				var doc1 = doc.a;
				var doc2 = doc.b;
				var $temp$doc = doc1;
				doc = $temp$doc;
				continue flatten;
			case 'Line':
				var hsep = doc.a;
				return A2($the_sett$elm_pretty_printer$Internals$Text, hsep, $elm$core$Maybe$Nothing);
			case 'Nesting':
				var fn = doc.a;
				var $temp$doc = fn(0);
				doc = $temp$doc;
				continue flatten;
			case 'Column':
				var fn = doc.a;
				var $temp$doc = fn(0);
				doc = $temp$doc;
				continue flatten;
			default:
				var x = doc;
				return x;
		}
	}
};
var $the_sett$elm_pretty_printer$Pretty$group = function (doc) {
	return A2(
		$the_sett$elm_pretty_printer$Internals$Union,
		$the_sett$elm_pretty_printer$Internals$flatten(doc),
		doc);
};
var $mdgriffith$elm_codegen$Internal$Write$isNakedCompound = function (typeAnn) {
	switch (typeAnn.$) {
		case 'Typed':
			if (!typeAnn.b.b) {
				return false;
			} else {
				var args = typeAnn.b;
				return true;
			}
		case 'FunctionTypeAnnotation':
			return true;
		default:
			return false;
	}
};
var $elm$core$Tuple$mapBoth = F3(
	function (funcA, funcB, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			funcA(x),
			funcB(y));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot = F2(
	function (aliases, name) {
		if (!name.b) {
			return $the_sett$elm_pretty_printer$Pretty$empty;
		} else {
			var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$findAlias, name, aliases);
			if (_v1.$ === 'Nothing') {
				return A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$mdgriffith$elm_codegen$Internal$Write$dot,
					A2(
						$the_sett$elm_pretty_printer$Pretty$join,
						$mdgriffith$elm_codegen$Internal$Write$dot,
						A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, name)));
			} else {
				var alias = _v1.a;
				return A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$mdgriffith$elm_codegen$Internal$Write$dot,
					$the_sett$elm_pretty_printer$Pretty$string(alias));
			}
		}
	});
var $the_sett$elm_pretty_printer$Pretty$separators = function (sep) {
	return $the_sett$elm_pretty_printer$Pretty$join(
		A2($the_sett$elm_pretty_printer$Internals$Line, sep, sep));
};
var $the_sett$elm_pretty_printer$Pretty$words = $the_sett$elm_pretty_printer$Pretty$join($the_sett$elm_pretty_printer$Pretty$space);
var $mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn = F2(
	function (aliases, _v8) {
		var name = _v8.a;
		var ann = _v8.b;
		return $the_sett$elm_pretty_printer$Pretty$group(
			A2(
				$the_sett$elm_pretty_printer$Pretty$nest,
				4,
				$the_sett$elm_pretty_printer$Pretty$lines(
					_List_fromArray(
						[
							$the_sett$elm_pretty_printer$Pretty$words(
							_List_fromArray(
								[
									$the_sett$elm_pretty_printer$Pretty$string(name),
									$the_sett$elm_pretty_printer$Pretty$string(':')
								])),
							A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, ann)
						]))));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyFunctionTypeAnnotation = F3(
	function (aliases, left, right) {
		var expandLeft = function (ann) {
			if (ann.$ === 'FunctionTypeAnnotation') {
				return A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens, aliases, ann);
			} else {
				return A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, ann);
			}
		};
		var innerFnTypeAnn = F2(
			function (innerLeft, innerRight) {
				var rightSide = expandRight(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(innerRight));
				if (rightSide.b) {
					var hd = rightSide.a;
					var tl = rightSide.b;
					return A2(
						$elm$core$List$cons,
						expandLeft(
							$mdgriffith$elm_codegen$Internal$Compiler$denode(innerLeft)),
						A2(
							$elm$core$List$cons,
							$the_sett$elm_pretty_printer$Pretty$words(
								_List_fromArray(
									[
										$the_sett$elm_pretty_printer$Pretty$string('->'),
										hd
									])),
							tl));
				} else {
					return _List_Nil;
				}
			});
		var expandRight = function (ann) {
			if (ann.$ === 'FunctionTypeAnnotation') {
				var innerLeft = ann.a;
				var innerRight = ann.b;
				return A2(innerFnTypeAnn, innerLeft, innerRight);
			} else {
				return _List_fromArray(
					[
						A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, ann)
					]);
			}
		};
		return $the_sett$elm_pretty_printer$Pretty$group(
			$the_sett$elm_pretty_printer$Pretty$lines(
				A2(innerFnTypeAnn, left, right)));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyGenericRecord = F3(
	function (aliases, paramName, fields) {
		var open = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$line,
			$the_sett$elm_pretty_printer$Pretty$words(
				_List_fromArray(
					[
						$the_sett$elm_pretty_printer$Pretty$string('{'),
						$the_sett$elm_pretty_printer$Pretty$string(paramName)
					])));
		var close = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$string('}'),
			$the_sett$elm_pretty_printer$Pretty$line);
		var addBarToFirst = function (exprs) {
			if (!exprs.b) {
				return _List_Nil;
			} else {
				var hd = exprs.a;
				var tl = exprs.b;
				return A2(
					$elm$core$List$cons,
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						hd,
						$the_sett$elm_pretty_printer$Pretty$string('| ')),
					tl);
			}
		};
		if (!fields.b) {
			return $the_sett$elm_pretty_printer$Pretty$string('{}');
		} else {
			return $the_sett$elm_pretty_printer$Pretty$group(
				A3(
					$the_sett$elm_pretty_printer$Pretty$surround,
					$the_sett$elm_pretty_printer$Pretty$empty,
					close,
					A2(
						$the_sett$elm_pretty_printer$Pretty$nest,
						4,
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							A2(
								$the_sett$elm_pretty_printer$Pretty$separators,
								', ',
								addBarToFirst(
									A2(
										$elm$core$List$map,
										$mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn(aliases),
										A2(
											$elm$core$List$map,
											A2($elm$core$Tuple$mapBoth, $mdgriffith$elm_codegen$Internal$Compiler$denode, $mdgriffith$elm_codegen$Internal$Compiler$denode),
											fields)))),
							open))));
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyRecord = F2(
	function (aliases, fields) {
		var open = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$space,
			$the_sett$elm_pretty_printer$Pretty$string('{'));
		var close = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$string('}'),
			$the_sett$elm_pretty_printer$Pretty$line);
		if (!fields.b) {
			return $the_sett$elm_pretty_printer$Pretty$string('{}');
		} else {
			return $the_sett$elm_pretty_printer$Pretty$group(
				A3(
					$the_sett$elm_pretty_printer$Pretty$surround,
					open,
					close,
					A2(
						$the_sett$elm_pretty_printer$Pretty$separators,
						', ',
						A2(
							$elm$core$List$map,
							$mdgriffith$elm_codegen$Internal$Write$prettyFieldTypeAnn(aliases),
							A2(
								$elm$core$List$map,
								A2($elm$core$Tuple$mapBoth, $mdgriffith$elm_codegen$Internal$Compiler$denode, $mdgriffith$elm_codegen$Internal$Compiler$denode),
								fields)))));
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyTupled = F2(
	function (aliases, anns) {
		return $the_sett$elm_pretty_printer$Pretty$parens(
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				$the_sett$elm_pretty_printer$Pretty$space,
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					A2(
						$the_sett$elm_pretty_printer$Pretty$join,
						$the_sett$elm_pretty_printer$Pretty$string(', '),
						A2(
							$elm$core$List$map,
							$mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation(aliases),
							$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(anns))),
					$the_sett$elm_pretty_printer$Pretty$space)));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation = F2(
	function (aliases, typeAnn) {
		switch (typeAnn.$) {
			case 'GenericType':
				var val = typeAnn.a;
				return $the_sett$elm_pretty_printer$Pretty$string(val);
			case 'Typed':
				var fqName = typeAnn.a;
				var anns = typeAnn.b;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyTyped, aliases, fqName, anns);
			case 'Unit':
				return $the_sett$elm_pretty_printer$Pretty$string('()');
			case 'Tupled':
				var anns = typeAnn.a;
				return A2($mdgriffith$elm_codegen$Internal$Write$prettyTupled, aliases, anns);
			case 'Record':
				var recordDef = typeAnn.a;
				return A2(
					$mdgriffith$elm_codegen$Internal$Write$prettyRecord,
					aliases,
					$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(recordDef));
			case 'GenericRecord':
				var paramName = typeAnn.a;
				var recordDef = typeAnn.b;
				return A3(
					$mdgriffith$elm_codegen$Internal$Write$prettyGenericRecord,
					aliases,
					$mdgriffith$elm_codegen$Internal$Compiler$denode(paramName),
					$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(
						$mdgriffith$elm_codegen$Internal$Compiler$denode(recordDef)));
			default:
				var fromAnn = typeAnn.a;
				var toAnn = typeAnn.b;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyFunctionTypeAnnotation, aliases, fromAnn, toAnn);
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens = F2(
	function (aliases, typeAnn) {
		return $mdgriffith$elm_codegen$Internal$Write$isNakedCompound(typeAnn) ? $the_sett$elm_pretty_printer$Pretty$parens(
			A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, typeAnn)) : A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation, aliases, typeAnn);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyTyped = F3(
	function (aliases, fqName, anns) {
		var argsDoc = $the_sett$elm_pretty_printer$Pretty$words(
			A2(
				$elm$core$List$map,
				$mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens(aliases),
				$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(anns)));
		var _v0 = $mdgriffith$elm_codegen$Internal$Compiler$denode(fqName);
		var moduleName = _v0.a;
		var typeName = _v0.b;
		var typeDoc = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$string(typeName),
			A2($mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot, aliases, moduleName));
		return $the_sett$elm_pretty_printer$Pretty$words(
			_List_fromArray(
				[typeDoc, argsDoc]));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructor = F2(
	function (aliases, cons) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$nest,
			4,
			$the_sett$elm_pretty_printer$Pretty$group(
				$the_sett$elm_pretty_printer$Pretty$lines(
					_List_fromArray(
						[
							$the_sett$elm_pretty_printer$Pretty$string(
							$mdgriffith$elm_codegen$Internal$Compiler$denode(cons.name)),
							$the_sett$elm_pretty_printer$Pretty$lines(
							A2(
								$elm$core$List$map,
								$mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotationParens(aliases),
								$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(cons._arguments)))
						]))));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyValueConstructors = F2(
	function (aliases, constructors) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$join,
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				$the_sett$elm_pretty_printer$Pretty$string('| '),
				$the_sett$elm_pretty_printer$Pretty$line),
			A2(
				$elm$core$List$map,
				$mdgriffith$elm_codegen$Internal$Write$prettyValueConstructor(aliases),
				constructors));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyCustomType = F2(
	function (aliases, type_) {
		var customTypePretty = A2(
			$the_sett$elm_pretty_printer$Pretty$nest,
			4,
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				A2(
					$mdgriffith$elm_codegen$Internal$Write$prettyValueConstructors,
					aliases,
					$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(type_.constructors)),
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$string('= '),
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$line,
						$the_sett$elm_pretty_printer$Pretty$words(
							_List_fromArray(
								[
									$the_sett$elm_pretty_printer$Pretty$string('type'),
									$the_sett$elm_pretty_printer$Pretty$string(
									$mdgriffith$elm_codegen$Internal$Compiler$denode(type_.name)),
									$the_sett$elm_pretty_printer$Pretty$words(
									A2(
										$elm$core$List$map,
										$the_sett$elm_pretty_printer$Pretty$string,
										$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(type_.generics)))
								]))))));
		return $the_sett$elm_pretty_printer$Pretty$lines(
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
					$mdgriffith$elm_codegen$Internal$Write$prettyDocumentation,
					$mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(type_.documentation)),
					customTypePretty
				]));
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression = function (a) {
	return {$: 'ParenthesizedExpression', a: a};
};
var $mdgriffith$elm_codegen$Internal$Write$adjustExpressionParentheses = F2(
	function (context, expression) {
		var shouldRemove = function (expr) {
			var _v3 = _Utils_Tuple3(context.isTop, context.isLeftPipe, expr);
			_v3$1:
			while (true) {
				if (_v3.a) {
					return true;
				} else {
					switch (_v3.c.$) {
						case 'Application':
							if (_v3.b) {
								break _v3$1;
							} else {
								return (context.precedence < 11) ? true : false;
							}
						case 'FunctionOrValue':
							if (_v3.b) {
								break _v3$1;
							} else {
								var _v4 = _v3.c;
								return true;
							}
						case 'Integer':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'Hex':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'Floatable':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'Negation':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'Literal':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'CharLiteral':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'TupledExpression':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'RecordExpr':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'ListExpr':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'RecordAccess':
							if (_v3.b) {
								break _v3$1;
							} else {
								var _v5 = _v3.c;
								return true;
							}
						case 'RecordAccessFunction':
							if (_v3.b) {
								break _v3$1;
							} else {
								return true;
							}
						case 'RecordUpdateExpression':
							if (_v3.b) {
								break _v3$1;
							} else {
								var _v6 = _v3.c;
								return true;
							}
						default:
							if (_v3.b) {
								break _v3$1;
							} else {
								return false;
							}
					}
				}
			}
			return true;
		};
		var removeParens = function (expr) {
			if (expr.$ === 'ParenthesizedExpression') {
				var innerExpr = expr.a;
				return shouldRemove(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(innerExpr)) ? removeParens(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(innerExpr)) : expr;
			} else {
				return expr;
			}
		};
		var addParens = function (expr) {
			var _v1 = _Utils_Tuple3(context.isTop, context.isLeftPipe, expr);
			_v1$4:
			while (true) {
				if ((!_v1.a) && (!_v1.b)) {
					switch (_v1.c.$) {
						case 'LetExpression':
							return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
						case 'CaseExpression':
							return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
						case 'LambdaExpression':
							return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
						case 'IfBlock':
							var _v2 = _v1.c;
							return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
						default:
							break _v1$4;
					}
				} else {
					break _v1$4;
				}
			}
			return expr;
		};
		return addParens(
			removeParens(expression));
	});
var $the_sett$elm_pretty_printer$Internals$Column = function (a) {
	return {$: 'Column', a: a};
};
var $the_sett$elm_pretty_printer$Pretty$column = $the_sett$elm_pretty_printer$Internals$Column;
var $the_sett$elm_pretty_printer$Internals$Nesting = function (a) {
	return {$: 'Nesting', a: a};
};
var $the_sett$elm_pretty_printer$Pretty$nesting = $the_sett$elm_pretty_printer$Internals$Nesting;
var $the_sett$elm_pretty_printer$Pretty$align = function (doc) {
	return $the_sett$elm_pretty_printer$Pretty$column(
		function (currentColumn) {
			return $the_sett$elm_pretty_printer$Pretty$nesting(
				function (indentLvl) {
					return A2($the_sett$elm_pretty_printer$Pretty$nest, currentColumn - indentLvl, doc);
				});
		});
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $mdgriffith$elm_codegen$Internal$Write$decrementIndent = F2(
	function (currentIndent, spaces) {
		var modded = A2($elm$core$Basics$modBy, 4, currentIndent - spaces);
		return (!modded) ? 4 : modded;
	});
var $mdgriffith$elm_codegen$Internal$Write$doubleLines = $the_sett$elm_pretty_printer$Pretty$join(
	A2($the_sett$elm_pretty_printer$Pretty$a, $the_sett$elm_pretty_printer$Pretty$line, $the_sett$elm_pretty_printer$Pretty$line));
var $mdgriffith$elm_codegen$Internal$Write$escapeChar = function (val) {
	switch (val.valueOf()) {
		case '\\':
			return '\\\\';
		case '\'':
			return '\\\'';
		case '\t':
			return '\\t';
		case '\n':
			return '\\n';
		default:
			var c = val;
			return $elm$core$String$fromChar(c);
	}
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $the_sett$elm_pretty_printer$Internals$copy = F2(
	function (i, s) {
		return (!i) ? '' : _Utils_ap(
			s,
			A2($the_sett$elm_pretty_printer$Internals$copy, i - 1, s));
	});
var $the_sett$elm_pretty_printer$Pretty$hang = F2(
	function (spaces, doc) {
		return $the_sett$elm_pretty_printer$Pretty$align(
			A2($the_sett$elm_pretty_printer$Pretty$nest, spaces, doc));
	});
var $the_sett$elm_pretty_printer$Pretty$indent = F2(
	function (spaces, doc) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$hang,
			spaces,
			A2(
				$the_sett$elm_pretty_printer$Pretty$append,
				$the_sett$elm_pretty_printer$Pretty$string(
					A2($the_sett$elm_pretty_printer$Internals$copy, spaces, ' ')),
				doc));
	});
var $mdgriffith$elm_codegen$Internal$Write$optionalGroup = F2(
	function (flag, doc) {
		return flag ? doc : $the_sett$elm_pretty_printer$Pretty$group(doc);
	});
var $mdgriffith$elm_codegen$Internal$Write$precedence = function (symbol) {
	switch (symbol) {
		case '>>':
			return 9;
		case '<<':
			return 9;
		case '^':
			return 8;
		case '*':
			return 7;
		case '/':
			return 7;
		case '//':
			return 7;
		case '%':
			return 7;
		case 'rem':
			return 7;
		case '+':
			return 6;
		case '-':
			return 6;
		case '++':
			return 5;
		case '::':
			return 5;
		case '==':
			return 4;
		case '/=':
			return 4;
		case '<':
			return 4;
		case '>':
			return 4;
		case '<=':
			return 4;
		case '>=':
			return 4;
		case '&&':
			return 3;
		case '||':
			return 2;
		case '|>':
			return 0;
		case '<|':
			return 0;
		default:
			return 0;
	}
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern = function (a) {
	return {$: 'ParenthesizedPattern', a: a};
};
var $mdgriffith$elm_codegen$Internal$Write$adjustPatternParentheses = F2(
	function (isTop, pattern) {
		var shouldRemove = function (pat) {
			var _v5 = _Utils_Tuple2(isTop, pat);
			_v5$2:
			while (true) {
				switch (_v5.b.$) {
					case 'NamedPattern':
						if (!_v5.a) {
							var _v6 = _v5.b;
							return false;
						} else {
							break _v5$2;
						}
					case 'AsPattern':
						var _v7 = _v5.b;
						return false;
					default:
						break _v5$2;
				}
			}
			return isTop;
		};
		var removeParens = function (pat) {
			if (pat.$ === 'ParenthesizedPattern') {
				var innerPat = pat.a;
				return shouldRemove(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(innerPat)) ? removeParens(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(innerPat)) : pat;
			} else {
				return pat;
			}
		};
		var addParens = function (pat) {
			var _v1 = _Utils_Tuple2(isTop, pat);
			_v1$2:
			while (true) {
				if (!_v1.a) {
					switch (_v1.b.$) {
						case 'NamedPattern':
							if (_v1.b.b.b) {
								var _v2 = _v1.b;
								var _v3 = _v2.b;
								return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(
									$mdgriffith$elm_codegen$Internal$Compiler$nodify(pat));
							} else {
								break _v1$2;
							}
						case 'AsPattern':
							var _v4 = _v1.b;
							return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(pat));
						default:
							break _v1$2;
					}
				} else {
					break _v1$2;
				}
			}
			return pat;
		};
		return addParens(
			removeParens(pattern));
	});
var $the_sett$elm_pretty_printer$Pretty$braces = function (doc) {
	return A3(
		$the_sett$elm_pretty_printer$Pretty$surround,
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr('{')),
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr('}')),
		doc);
};
var $mdgriffith$elm_codegen$Internal$Write$quotes = function (doc) {
	return A3(
		$the_sett$elm_pretty_printer$Pretty$surround,
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr('\"')),
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr('\"')),
		doc);
};
var $mdgriffith$elm_codegen$Internal$Write$singleQuotes = function (doc) {
	return A3(
		$the_sett$elm_pretty_printer$Pretty$surround,
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr('\'')),
		$the_sett$elm_pretty_printer$Pretty$char(
			_Utils_chr('\'')),
		doc);
};
var $elm$core$String$fromList = _String_fromList;
var $rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return _Utils_chr('0');
			case 1:
				return _Utils_chr('1');
			case 2:
				return _Utils_chr('2');
			case 3:
				return _Utils_chr('3');
			case 4:
				return _Utils_chr('4');
			case 5:
				return _Utils_chr('5');
			case 6:
				return _Utils_chr('6');
			case 7:
				return _Utils_chr('7');
			case 8:
				return _Utils_chr('8');
			case 9:
				return _Utils_chr('9');
			case 10:
				return _Utils_chr('a');
			case 11:
				return _Utils_chr('b');
			case 12:
				return _Utils_chr('c');
			case 13:
				return _Utils_chr('d');
			case 14:
				return _Utils_chr('e');
			case 15:
				return _Utils_chr('f');
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var $rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					$elm$core$List$cons,
					$rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2($elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var $rtfeldman$elm_hex$Hex$toString = function (num) {
	return $elm$core$String$fromList(
		(num < 0) ? A2(
			$elm$core$List$cons,
			_Utils_chr('-'),
			A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2($rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var $mdgriffith$elm_codegen$Internal$Write$prettyPatternInner = F3(
	function (aliases, isTop, pattern) {
		var _v0 = A2($mdgriffith$elm_codegen$Internal$Write$adjustPatternParentheses, isTop, pattern);
		switch (_v0.$) {
			case 'AllPattern':
				return $the_sett$elm_pretty_printer$Pretty$string('_');
			case 'UnitPattern':
				return $the_sett$elm_pretty_printer$Pretty$string('()');
			case 'CharPattern':
				var val = _v0.a;
				return $mdgriffith$elm_codegen$Internal$Write$singleQuotes(
					$the_sett$elm_pretty_printer$Pretty$string(
						$mdgriffith$elm_codegen$Internal$Write$escapeChar(val)));
			case 'StringPattern':
				var val = _v0.a;
				return $mdgriffith$elm_codegen$Internal$Write$quotes(
					$the_sett$elm_pretty_printer$Pretty$string(val));
			case 'IntPattern':
				var val = _v0.a;
				return $the_sett$elm_pretty_printer$Pretty$string(
					$elm$core$String$fromInt(val));
			case 'HexPattern':
				var val = _v0.a;
				return $the_sett$elm_pretty_printer$Pretty$string(
					$rtfeldman$elm_hex$Hex$toString(val));
			case 'FloatPattern':
				var val = _v0.a;
				return $the_sett$elm_pretty_printer$Pretty$string(
					$elm$core$String$fromFloat(val));
			case 'TuplePattern':
				var vals = _v0.a;
				return $the_sett$elm_pretty_printer$Pretty$parens(
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$space,
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							A2(
								$the_sett$elm_pretty_printer$Pretty$join,
								$the_sett$elm_pretty_printer$Pretty$string(', '),
								A2(
									$elm$core$List$map,
									A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, true),
									$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(vals))),
							$the_sett$elm_pretty_printer$Pretty$space)));
			case 'RecordPattern':
				var fields = _v0.a;
				return $the_sett$elm_pretty_printer$Pretty$braces(
					A3(
						$the_sett$elm_pretty_printer$Pretty$surround,
						$the_sett$elm_pretty_printer$Pretty$space,
						$the_sett$elm_pretty_printer$Pretty$space,
						A2(
							$the_sett$elm_pretty_printer$Pretty$join,
							$the_sett$elm_pretty_printer$Pretty$string(', '),
							A2(
								$elm$core$List$map,
								$the_sett$elm_pretty_printer$Pretty$string,
								$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(fields)))));
			case 'UnConsPattern':
				var hdPat = _v0.a;
				var tlPat = _v0.b;
				return $the_sett$elm_pretty_printer$Pretty$words(
					_List_fromArray(
						[
							A3(
							$mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
							aliases,
							false,
							$mdgriffith$elm_codegen$Internal$Compiler$denode(hdPat)),
							$the_sett$elm_pretty_printer$Pretty$string('::'),
							A3(
							$mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
							aliases,
							false,
							$mdgriffith$elm_codegen$Internal$Compiler$denode(tlPat))
						]));
			case 'ListPattern':
				var listPats = _v0.a;
				if (!listPats.b) {
					return $the_sett$elm_pretty_printer$Pretty$string('[]');
				} else {
					var open = A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$space,
						$the_sett$elm_pretty_printer$Pretty$string('['));
					var close = A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$string(']'),
						$the_sett$elm_pretty_printer$Pretty$space);
					return A3(
						$the_sett$elm_pretty_printer$Pretty$surround,
						open,
						close,
						A2(
							$the_sett$elm_pretty_printer$Pretty$join,
							$the_sett$elm_pretty_printer$Pretty$string(', '),
							A2(
								$elm$core$List$map,
								A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false),
								$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(listPats))));
				}
			case 'VarPattern':
				var _var = _v0.a;
				return $the_sett$elm_pretty_printer$Pretty$string(_var);
			case 'NamedPattern':
				var qnRef = _v0.a;
				var listPats = _v0.b;
				return $the_sett$elm_pretty_printer$Pretty$words(
					A2(
						$elm$core$List$cons,
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							$the_sett$elm_pretty_printer$Pretty$string(qnRef.name),
							A2($mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot, aliases, qnRef.moduleName)),
						A2(
							$elm$core$List$map,
							A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false),
							$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(listPats))));
			case 'AsPattern':
				var pat = _v0.a;
				var name = _v0.b;
				return $the_sett$elm_pretty_printer$Pretty$words(
					_List_fromArray(
						[
							A3(
							$mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
							aliases,
							false,
							$mdgriffith$elm_codegen$Internal$Compiler$denode(pat)),
							$the_sett$elm_pretty_printer$Pretty$string('as'),
							$the_sett$elm_pretty_printer$Pretty$string(
							$mdgriffith$elm_codegen$Internal$Compiler$denode(name))
						]));
			default:
				var pat = _v0.a;
				return $the_sett$elm_pretty_printer$Pretty$parens(
					A3(
						$mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
						aliases,
						true,
						$mdgriffith$elm_codegen$Internal$Compiler$denode(pat)));
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyArgs = F2(
	function (aliases, args) {
		return $the_sett$elm_pretty_printer$Pretty$words(
			A2(
				$elm$core$List$map,
				A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false),
				args));
	});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $mdgriffith$elm_codegen$Internal$Write$escape = function (val) {
	return A3(
		$elm$core$String$replace,
		'\t',
		'\\t',
		A3(
			$elm$core$String$replace,
			'\n',
			'\\n',
			A3(
				$elm$core$String$replace,
				'\"',
				'\\\"',
				A3($elm$core$String$replace, '\\', '\\\\', val))));
};
var $mdgriffith$elm_codegen$Internal$Write$tripleQuotes = function (doc) {
	return A3(
		$the_sett$elm_pretty_printer$Pretty$surround,
		$the_sett$elm_pretty_printer$Pretty$string('\"\"\"'),
		$the_sett$elm_pretty_printer$Pretty$string('\"\"\"'),
		doc);
};
var $mdgriffith$elm_codegen$Internal$Write$prettyLiteral = function (val) {
	return A2($elm$core$String$contains, '\n', val) ? $mdgriffith$elm_codegen$Internal$Write$tripleQuotes(
		$the_sett$elm_pretty_printer$Pretty$string(val)) : $mdgriffith$elm_codegen$Internal$Write$quotes(
		$the_sett$elm_pretty_printer$Pretty$string(
			$mdgriffith$elm_codegen$Internal$Write$escape(val)));
};
var $mdgriffith$elm_codegen$Internal$Write$prettyPattern = F2(
	function (aliases, pattern) {
		return A3($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, true, pattern);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettySignature = F2(
	function (aliases, sig) {
		return $the_sett$elm_pretty_printer$Pretty$group(
			A2(
				$the_sett$elm_pretty_printer$Pretty$nest,
				4,
				$the_sett$elm_pretty_printer$Pretty$lines(
					_List_fromArray(
						[
							$the_sett$elm_pretty_printer$Pretty$words(
							_List_fromArray(
								[
									$the_sett$elm_pretty_printer$Pretty$string(
									$mdgriffith$elm_codegen$Internal$Compiler$denode(sig.name)),
									$the_sett$elm_pretty_printer$Pretty$string(':')
								])),
							A2(
							$mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation,
							aliases,
							$mdgriffith$elm_codegen$Internal$Compiler$denode(sig.typeAnnotation))
						]))));
	});
var $the_sett$elm_pretty_printer$Pretty$tightline = A2($the_sett$elm_pretty_printer$Internals$Line, '', '');
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $mdgriffith$elm_codegen$Internal$Write$toHexString = function (val) {
	var padWithZeros = function (str) {
		var length = $elm$core$String$length(str);
		return (length < 2) ? A3(
			$elm$core$String$padLeft,
			2,
			_Utils_chr('0'),
			str) : (((length > 2) && (length < 4)) ? A3(
			$elm$core$String$padLeft,
			4,
			_Utils_chr('0'),
			str) : (((length > 4) && (length < 8)) ? A3(
			$elm$core$String$padLeft,
			8,
			_Utils_chr('0'),
			str) : str));
	};
	return '0x' + padWithZeros(
		$elm$core$String$toUpper(
			$rtfeldman$elm_hex$Hex$toString(val)));
};
var $mdgriffith$elm_codegen$Internal$Write$topContext = {isLeftPipe: false, isTop: true, precedence: 11};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $mdgriffith$elm_codegen$Internal$Write$prettyApplication = F3(
	function (aliases, indent, exprs) {
		var _v30 = A2(
			$elm$core$Tuple$mapSecond,
			$elm$core$List$any($elm$core$Basics$identity),
			$elm$core$List$unzip(
				A2(
					$elm$core$List$map,
					A3(
						$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
						aliases,
						{isLeftPipe: false, isTop: false, precedence: 11},
						4),
					$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(exprs))));
		var prettyExpressions = _v30.a;
		var alwaysBreak = _v30.b;
		return _Utils_Tuple2(
			A2(
				$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
				alwaysBreak,
				$the_sett$elm_pretty_printer$Pretty$align(
					A2(
						$the_sett$elm_pretty_printer$Pretty$nest,
						indent,
						$the_sett$elm_pretty_printer$Pretty$lines(prettyExpressions)))),
			alwaysBreak);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyCaseBlock = F3(
	function (aliases, indent, caseBlock) {
		var prettyCase = function (_v29) {
			var pattern = _v29.a;
			var expr = _v29.b;
			return A2(
				$the_sett$elm_pretty_printer$Pretty$indent,
				indent,
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					A2(
						$the_sett$elm_pretty_printer$Pretty$indent,
						4,
						A4(
							$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
							aliases,
							$mdgriffith$elm_codegen$Internal$Write$topContext,
							4,
							$mdgriffith$elm_codegen$Internal$Compiler$denode(expr)).a),
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$line,
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							$the_sett$elm_pretty_printer$Pretty$string(' ->'),
							A2(
								$mdgriffith$elm_codegen$Internal$Write$prettyPattern,
								aliases,
								$mdgriffith$elm_codegen$Internal$Compiler$denode(pattern))))));
		};
		var patternsPart = $mdgriffith$elm_codegen$Internal$Write$doubleLines(
			A2($elm$core$List$map, prettyCase, caseBlock.cases));
		var casePart = function () {
			var _v28 = A4(
				$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
				aliases,
				$mdgriffith$elm_codegen$Internal$Write$topContext,
				4,
				$mdgriffith$elm_codegen$Internal$Compiler$denode(caseBlock.expression));
			var caseExpression = _v28.a;
			var alwaysBreak = _v28.b;
			return A2(
				$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
				alwaysBreak,
				$the_sett$elm_pretty_printer$Pretty$lines(
					_List_fromArray(
						[
							A2(
							$the_sett$elm_pretty_printer$Pretty$nest,
							indent,
							A2(
								$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
								alwaysBreak,
								$the_sett$elm_pretty_printer$Pretty$lines(
									_List_fromArray(
										[
											$the_sett$elm_pretty_printer$Pretty$string('case'),
											caseExpression
										])))),
							$the_sett$elm_pretty_printer$Pretty$string('of')
						])));
		}();
		return _Utils_Tuple2(
			$the_sett$elm_pretty_printer$Pretty$align(
				$the_sett$elm_pretty_printer$Pretty$lines(
					_List_fromArray(
						[casePart, patternsPart]))),
			true);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyExpression = F2(
	function (aliases, expression) {
		return A4($mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner, aliases, $mdgriffith$elm_codegen$Internal$Write$topContext, 4, expression).a;
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner = F4(
	function (aliases, context, indent, expression) {
		var _v26 = A2($mdgriffith$elm_codegen$Internal$Write$adjustExpressionParentheses, context, expression);
		switch (_v26.$) {
			case 'UnitExpr':
				return _Utils_Tuple2(
					$the_sett$elm_pretty_printer$Pretty$string('()'),
					false);
			case 'Application':
				var exprs = _v26.a;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyApplication, aliases, indent, exprs);
			case 'OperatorApplication':
				var symbol = _v26.a;
				var dir = _v26.b;
				var exprl = _v26.c;
				var exprr = _v26.d;
				return A6($mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplication, aliases, indent, symbol, dir, exprl, exprr);
			case 'FunctionOrValue':
				var modl = _v26.a;
				var val = _v26.b;
				return _Utils_Tuple2(
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$string(val),
						A2($mdgriffith$elm_codegen$Internal$Write$prettyModuleNameDot, aliases, modl)),
					false);
			case 'IfBlock':
				var exprBool = _v26.a;
				var exprTrue = _v26.b;
				var exprFalse = _v26.c;
				return A5($mdgriffith$elm_codegen$Internal$Write$prettyIfBlock, aliases, indent, exprBool, exprTrue, exprFalse);
			case 'PrefixOperator':
				var symbol = _v26.a;
				return _Utils_Tuple2(
					$the_sett$elm_pretty_printer$Pretty$parens(
						$the_sett$elm_pretty_printer$Pretty$string(symbol)),
					false);
			case 'Operator':
				var symbol = _v26.a;
				return _Utils_Tuple2(
					$the_sett$elm_pretty_printer$Pretty$string(symbol),
					false);
			case 'Integer':
				var val = _v26.a;
				return _Utils_Tuple2(
					$the_sett$elm_pretty_printer$Pretty$string(
						$elm$core$String$fromInt(val)),
					false);
			case 'Hex':
				var val = _v26.a;
				return _Utils_Tuple2(
					$the_sett$elm_pretty_printer$Pretty$string(
						$mdgriffith$elm_codegen$Internal$Write$toHexString(val)),
					false);
			case 'Floatable':
				var val = _v26.a;
				return _Utils_Tuple2(
					$the_sett$elm_pretty_printer$Pretty$string(
						$elm$core$String$fromFloat(val)),
					false);
			case 'Negation':
				var expr = _v26.a;
				var _v27 = A4(
					$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
					aliases,
					$mdgriffith$elm_codegen$Internal$Write$topContext,
					4,
					$mdgriffith$elm_codegen$Internal$Compiler$denode(expr));
				var prettyExpr = _v27.a;
				var alwaysBreak = _v27.b;
				return _Utils_Tuple2(
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						prettyExpr,
						$the_sett$elm_pretty_printer$Pretty$string('-')),
					alwaysBreak);
			case 'Literal':
				var val = _v26.a;
				return _Utils_Tuple2(
					$mdgriffith$elm_codegen$Internal$Write$prettyLiteral(val),
					false);
			case 'CharLiteral':
				var val = _v26.a;
				return _Utils_Tuple2(
					$mdgriffith$elm_codegen$Internal$Write$singleQuotes(
						$the_sett$elm_pretty_printer$Pretty$string(
							$mdgriffith$elm_codegen$Internal$Write$escapeChar(val))),
					false);
			case 'TupledExpression':
				var exprs = _v26.a;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyTupledExpression, aliases, indent, exprs);
			case 'ParenthesizedExpression':
				var expr = _v26.a;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyParenthesizedExpression, aliases, indent, expr);
			case 'LetExpression':
				var letBlock = _v26.a;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyLetBlock, aliases, indent, letBlock);
			case 'CaseExpression':
				var caseBlock = _v26.a;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyCaseBlock, aliases, indent, caseBlock);
			case 'LambdaExpression':
				var lambda = _v26.a;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyLambdaExpression, aliases, indent, lambda);
			case 'RecordExpr':
				var setters = _v26.a;
				return A2($mdgriffith$elm_codegen$Internal$Write$prettyRecordExpr, aliases, setters);
			case 'ListExpr':
				var exprs = _v26.a;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyList, aliases, indent, exprs);
			case 'RecordAccess':
				var expr = _v26.a;
				var field = _v26.b;
				return A3($mdgriffith$elm_codegen$Internal$Write$prettyRecordAccess, aliases, expr, field);
			case 'RecordAccessFunction':
				var field = _v26.a;
				return _Utils_Tuple2(
					$the_sett$elm_pretty_printer$Pretty$string(field),
					false);
			case 'RecordUpdateExpression':
				var _var = _v26.a;
				var setters = _v26.b;
				return A4($mdgriffith$elm_codegen$Internal$Write$prettyRecordUpdateExpression, aliases, indent, _var, setters);
			default:
				var val = _v26.a;
				return _Utils_Tuple2(
					$the_sett$elm_pretty_printer$Pretty$string('glsl'),
					true);
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyFun = F2(
	function (aliases, fn) {
		return $the_sett$elm_pretty_printer$Pretty$lines(
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
					$mdgriffith$elm_codegen$Internal$Write$prettyDocumentation,
					$mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(fn.documentation)),
					A2(
					$mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
					$mdgriffith$elm_codegen$Internal$Write$prettySignature(aliases),
					$mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(fn.signature)),
					A2(
					$mdgriffith$elm_codegen$Internal$Write$prettyFunctionImplementation,
					aliases,
					$mdgriffith$elm_codegen$Internal$Compiler$denode(fn.declaration))
				]));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyFunctionImplementation = F2(
	function (aliases, impl) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$nest,
			4,
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				A2(
					$mdgriffith$elm_codegen$Internal$Write$prettyExpression,
					aliases,
					$mdgriffith$elm_codegen$Internal$Compiler$denode(impl.expression)),
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$line,
					$the_sett$elm_pretty_printer$Pretty$words(
						_List_fromArray(
							[
								$the_sett$elm_pretty_printer$Pretty$string(
								$mdgriffith$elm_codegen$Internal$Compiler$denode(impl.name)),
								A2(
								$mdgriffith$elm_codegen$Internal$Write$prettyArgs,
								aliases,
								$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(impl._arguments)),
								$the_sett$elm_pretty_printer$Pretty$string('=')
							])))));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyIfBlock = F5(
	function (aliases, indent, exprBool, exprTrue, exprFalse) {
		var innerIfBlock = F3(
			function (innerExprBool, innerExprTrue, innerExprFalse) {
				var truePart = A2(
					$the_sett$elm_pretty_printer$Pretty$indent,
					indent,
					A4(
						$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
						aliases,
						$mdgriffith$elm_codegen$Internal$Write$topContext,
						4,
						$mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprTrue)).a);
				var ifPart = function () {
					var _v25 = A4(
						$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
						aliases,
						$mdgriffith$elm_codegen$Internal$Write$topContext,
						4,
						$mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprBool));
					var prettyBoolExpr = _v25.a;
					var alwaysBreak = _v25.b;
					return A2(
						$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
						alwaysBreak,
						$the_sett$elm_pretty_printer$Pretty$lines(
							_List_fromArray(
								[
									A2(
									$the_sett$elm_pretty_printer$Pretty$nest,
									indent,
									A2(
										$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
										alwaysBreak,
										$the_sett$elm_pretty_printer$Pretty$lines(
											_List_fromArray(
												[
													$the_sett$elm_pretty_printer$Pretty$string('if'),
													A4(
													$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
													aliases,
													$mdgriffith$elm_codegen$Internal$Write$topContext,
													4,
													$mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprBool)).a
												])))),
									$the_sett$elm_pretty_printer$Pretty$string('then')
								])));
				}();
				var falsePart = function () {
					var _v24 = $mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprFalse);
					if (_v24.$ === 'IfBlock') {
						var nestedExprBool = _v24.a;
						var nestedExprTrue = _v24.b;
						var nestedExprFalse = _v24.c;
						return A3(innerIfBlock, nestedExprBool, nestedExprTrue, nestedExprFalse);
					} else {
						return _List_fromArray(
							[
								A2(
								$the_sett$elm_pretty_printer$Pretty$indent,
								indent,
								A4(
									$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
									aliases,
									$mdgriffith$elm_codegen$Internal$Write$topContext,
									4,
									$mdgriffith$elm_codegen$Internal$Compiler$denode(innerExprFalse)).a)
							]);
					}
				}();
				var elsePart = A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$string('else'),
					$the_sett$elm_pretty_printer$Pretty$line);
				var context = $mdgriffith$elm_codegen$Internal$Write$topContext;
				if (!falsePart.b) {
					return _List_Nil;
				} else {
					if (!falsePart.b.b) {
						var falseExpr = falsePart.a;
						return _List_fromArray(
							[ifPart, truePart, elsePart, falseExpr]);
					} else {
						var hd = falsePart.a;
						var tl = falsePart.b;
						return A2(
							$elm$core$List$append,
							_List_fromArray(
								[
									ifPart,
									truePart,
									$the_sett$elm_pretty_printer$Pretty$words(
									_List_fromArray(
										[elsePart, hd]))
								]),
							tl);
					}
				}
			});
		var prettyExpressions = A3(innerIfBlock, exprBool, exprTrue, exprFalse);
		return _Utils_Tuple2(
			$the_sett$elm_pretty_printer$Pretty$align(
				$the_sett$elm_pretty_printer$Pretty$lines(prettyExpressions)),
			true);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyLambdaExpression = F3(
	function (aliases, indent, lambda) {
		var _v22 = A4(
			$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
			aliases,
			$mdgriffith$elm_codegen$Internal$Write$topContext,
			4,
			$mdgriffith$elm_codegen$Internal$Compiler$denode(lambda.expression));
		var prettyExpr = _v22.a;
		var alwaysBreak = _v22.b;
		return _Utils_Tuple2(
			A2(
				$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
				alwaysBreak,
				$the_sett$elm_pretty_printer$Pretty$align(
					A2(
						$the_sett$elm_pretty_printer$Pretty$nest,
						indent,
						$the_sett$elm_pretty_printer$Pretty$lines(
							_List_fromArray(
								[
									A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									$the_sett$elm_pretty_printer$Pretty$string(' ->'),
									A2(
										$the_sett$elm_pretty_printer$Pretty$a,
										$the_sett$elm_pretty_printer$Pretty$words(
											A2(
												$elm$core$List$map,
												A2($mdgriffith$elm_codegen$Internal$Write$prettyPatternInner, aliases, false),
												$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(lambda.args))),
										$the_sett$elm_pretty_printer$Pretty$string('\\'))),
									prettyExpr
								]))))),
			alwaysBreak);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyLetBlock = F3(
	function (aliases, indent, letBlock) {
		return _Utils_Tuple2(
			$the_sett$elm_pretty_printer$Pretty$align(
				$the_sett$elm_pretty_printer$Pretty$lines(
					_List_fromArray(
						[
							$the_sett$elm_pretty_printer$Pretty$string('let'),
							A2(
							$the_sett$elm_pretty_printer$Pretty$indent,
							indent,
							$mdgriffith$elm_codegen$Internal$Write$doubleLines(
								A2(
									$elm$core$List$map,
									A2($mdgriffith$elm_codegen$Internal$Write$prettyLetDeclaration, aliases, indent),
									$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(letBlock.declarations)))),
							$the_sett$elm_pretty_printer$Pretty$string('in'),
							A4(
							$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
							aliases,
							$mdgriffith$elm_codegen$Internal$Write$topContext,
							4,
							$mdgriffith$elm_codegen$Internal$Compiler$denode(letBlock.expression)).a
						]))),
			true);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyLetDeclaration = F3(
	function (aliases, indent, letDecl) {
		if (letDecl.$ === 'LetFunction') {
			var fn = letDecl.a;
			return A2($mdgriffith$elm_codegen$Internal$Write$prettyFun, aliases, fn);
		} else {
			var pattern = letDecl.a;
			var expr = letDecl.b;
			return A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				A2(
					$the_sett$elm_pretty_printer$Pretty$indent,
					indent,
					A4(
						$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
						aliases,
						$mdgriffith$elm_codegen$Internal$Write$topContext,
						4,
						$mdgriffith$elm_codegen$Internal$Compiler$denode(expr)).a),
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$line,
					$the_sett$elm_pretty_printer$Pretty$words(
						_List_fromArray(
							[
								A3(
								$mdgriffith$elm_codegen$Internal$Write$prettyPatternInner,
								aliases,
								false,
								$mdgriffith$elm_codegen$Internal$Compiler$denode(pattern)),
								$the_sett$elm_pretty_printer$Pretty$string('=')
							]))));
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyList = F3(
	function (aliases, indent, exprs) {
		var open = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$space,
			$the_sett$elm_pretty_printer$Pretty$string('['));
		var close = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$string(']'),
			$the_sett$elm_pretty_printer$Pretty$line);
		if (!exprs.b) {
			return _Utils_Tuple2(
				$the_sett$elm_pretty_printer$Pretty$string('[]'),
				false);
		} else {
			var _v20 = A2(
				$elm$core$Tuple$mapSecond,
				$elm$core$List$any($elm$core$Basics$identity),
				$elm$core$List$unzip(
					A2(
						$elm$core$List$map,
						A3(
							$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
							aliases,
							$mdgriffith$elm_codegen$Internal$Write$topContext,
							A2($mdgriffith$elm_codegen$Internal$Write$decrementIndent, indent, 2)),
						$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(exprs))));
			var prettyExpressions = _v20.a;
			var alwaysBreak = _v20.b;
			return _Utils_Tuple2(
				A2(
					$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
					alwaysBreak,
					$the_sett$elm_pretty_printer$Pretty$align(
						A3(
							$the_sett$elm_pretty_printer$Pretty$surround,
							open,
							close,
							A2($the_sett$elm_pretty_printer$Pretty$separators, ', ', prettyExpressions)))),
				alwaysBreak);
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplication = F6(
	function (aliases, indent, symbol, dir, exprl, exprr) {
		return (symbol === '<|') ? A6($mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationLeft, aliases, indent, symbol, dir, exprl, exprr) : A6($mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationRight, aliases, indent, symbol, dir, exprl, exprr);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationLeft = F6(
	function (aliases, indent, symbol, _v16, exprl, exprr) {
		var context = {
			isLeftPipe: true,
			isTop: false,
			precedence: $mdgriffith$elm_codegen$Internal$Write$precedence(symbol)
		};
		var _v17 = A4(
			$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
			aliases,
			context,
			4,
			$mdgriffith$elm_codegen$Internal$Compiler$denode(exprr));
		var prettyExpressionRight = _v17.a;
		var alwaysBreakRight = _v17.b;
		var _v18 = A4(
			$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
			aliases,
			context,
			4,
			$mdgriffith$elm_codegen$Internal$Compiler$denode(exprl));
		var prettyExpressionLeft = _v18.a;
		var alwaysBreakLeft = _v18.b;
		var alwaysBreak = alwaysBreakLeft || alwaysBreakRight;
		return _Utils_Tuple2(
			A2(
				$the_sett$elm_pretty_printer$Pretty$nest,
				4,
				A2(
					$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
					alwaysBreak,
					$the_sett$elm_pretty_printer$Pretty$lines(
						_List_fromArray(
							[
								$the_sett$elm_pretty_printer$Pretty$words(
								_List_fromArray(
									[
										prettyExpressionLeft,
										$the_sett$elm_pretty_printer$Pretty$string(symbol)
									])),
								prettyExpressionRight
							])))),
			alwaysBreak);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyOperatorApplicationRight = F6(
	function (aliases, indent, symbol, _v11, exprl, exprr) {
		var expandExpr = F3(
			function (innerIndent, context, expr) {
				if (expr.$ === 'OperatorApplication') {
					var sym = expr.a;
					var left = expr.c;
					var right = expr.d;
					return A4(innerOpApply, false, sym, left, right);
				} else {
					return _List_fromArray(
						[
							A4($mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner, aliases, context, innerIndent, expr)
						]);
				}
			});
		var innerOpApply = F4(
			function (isTop, sym, left, right) {
				var innerIndent = A2(
					$mdgriffith$elm_codegen$Internal$Write$decrementIndent,
					4,
					$elm$core$String$length(symbol) + 1);
				var leftIndent = isTop ? indent : innerIndent;
				var context = {
					isLeftPipe: '<|' === sym,
					isTop: false,
					precedence: $mdgriffith$elm_codegen$Internal$Write$precedence(sym)
				};
				var rightSide = A3(
					expandExpr,
					innerIndent,
					context,
					$mdgriffith$elm_codegen$Internal$Compiler$denode(right));
				if (rightSide.b) {
					var _v14 = rightSide.a;
					var hdExpr = _v14.a;
					var hdBreak = _v14.b;
					var tl = rightSide.b;
					return A2(
						$elm$core$List$append,
						A3(
							expandExpr,
							leftIndent,
							context,
							$mdgriffith$elm_codegen$Internal$Compiler$denode(left)),
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									hdExpr,
									A2(
										$the_sett$elm_pretty_printer$Pretty$a,
										$the_sett$elm_pretty_printer$Pretty$space,
										$the_sett$elm_pretty_printer$Pretty$string(sym))),
								hdBreak),
							tl));
				} else {
					return _List_Nil;
				}
			});
		var _v12 = A2(
			$elm$core$Tuple$mapSecond,
			$elm$core$List$any($elm$core$Basics$identity),
			$elm$core$List$unzip(
				A4(innerOpApply, true, symbol, exprl, exprr)));
		var prettyExpressions = _v12.a;
		var alwaysBreak = _v12.b;
		return _Utils_Tuple2(
			A2(
				$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
				alwaysBreak,
				$the_sett$elm_pretty_printer$Pretty$align(
					A2(
						$the_sett$elm_pretty_printer$Pretty$join,
						A2($the_sett$elm_pretty_printer$Pretty$nest, indent, $the_sett$elm_pretty_printer$Pretty$line),
						prettyExpressions))),
			alwaysBreak);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyParenthesizedExpression = F3(
	function (aliases, indent, expr) {
		var open = $the_sett$elm_pretty_printer$Pretty$string('(');
		var close = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$string(')'),
			$the_sett$elm_pretty_printer$Pretty$tightline);
		var _v10 = A4(
			$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
			aliases,
			$mdgriffith$elm_codegen$Internal$Write$topContext,
			A2($mdgriffith$elm_codegen$Internal$Write$decrementIndent, indent, 1),
			$mdgriffith$elm_codegen$Internal$Compiler$denode(expr));
		var prettyExpr = _v10.a;
		var alwaysBreak = _v10.b;
		return _Utils_Tuple2(
			A2(
				$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
				alwaysBreak,
				$the_sett$elm_pretty_printer$Pretty$align(
					A3(
						$the_sett$elm_pretty_printer$Pretty$surround,
						open,
						close,
						A2($the_sett$elm_pretty_printer$Pretty$nest, 1, prettyExpr)))),
			alwaysBreak);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyRecordAccess = F3(
	function (aliases, expr, field) {
		var _v9 = A4(
			$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
			aliases,
			$mdgriffith$elm_codegen$Internal$Write$topContext,
			4,
			$mdgriffith$elm_codegen$Internal$Compiler$denode(expr));
		var prettyExpr = _v9.a;
		var alwaysBreak = _v9.b;
		return _Utils_Tuple2(
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				$the_sett$elm_pretty_printer$Pretty$string(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(field)),
				A2($the_sett$elm_pretty_printer$Pretty$a, $mdgriffith$elm_codegen$Internal$Write$dot, prettyExpr)),
			alwaysBreak);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyRecordExpr = F2(
	function (aliases, setters) {
		var open = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$space,
			$the_sett$elm_pretty_printer$Pretty$string('{'));
		var close = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$string('}'),
			$the_sett$elm_pretty_printer$Pretty$line);
		if (!setters.b) {
			return _Utils_Tuple2(
				$the_sett$elm_pretty_printer$Pretty$string('{}'),
				false);
		} else {
			var _v8 = A2(
				$elm$core$Tuple$mapSecond,
				$elm$core$List$any($elm$core$Basics$identity),
				$elm$core$List$unzip(
					A2(
						$elm$core$List$map,
						$mdgriffith$elm_codegen$Internal$Write$prettySetter(aliases),
						$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(setters))));
			var prettyExpressions = _v8.a;
			var alwaysBreak = _v8.b;
			return _Utils_Tuple2(
				A2(
					$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
					alwaysBreak,
					$the_sett$elm_pretty_printer$Pretty$align(
						A3(
							$the_sett$elm_pretty_printer$Pretty$surround,
							open,
							close,
							A2($the_sett$elm_pretty_printer$Pretty$separators, ', ', prettyExpressions)))),
				alwaysBreak);
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyRecordUpdateExpression = F4(
	function (aliases, indent, _var, setters) {
		var open = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$line,
			$the_sett$elm_pretty_printer$Pretty$words(
				_List_fromArray(
					[
						$the_sett$elm_pretty_printer$Pretty$string('{'),
						$the_sett$elm_pretty_printer$Pretty$string(
						$mdgriffith$elm_codegen$Internal$Compiler$denode(_var))
					])));
		var close = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$string('}'),
			$the_sett$elm_pretty_printer$Pretty$line);
		var addBarToFirst = function (exprs) {
			if (!exprs.b) {
				return _List_Nil;
			} else {
				var hd = exprs.a;
				var tl = exprs.b;
				return A2(
					$elm$core$List$cons,
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						hd,
						$the_sett$elm_pretty_printer$Pretty$string('| ')),
					tl);
			}
		};
		if (!setters.b) {
			return _Utils_Tuple2(
				$the_sett$elm_pretty_printer$Pretty$string('{}'),
				false);
		} else {
			var _v5 = A2(
				$elm$core$Tuple$mapSecond,
				$elm$core$List$any($elm$core$Basics$identity),
				$elm$core$List$unzip(
					A2(
						$elm$core$List$map,
						$mdgriffith$elm_codegen$Internal$Write$prettySetter(aliases),
						$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(setters))));
			var prettyExpressions = _v5.a;
			var alwaysBreak = _v5.b;
			return _Utils_Tuple2(
				A2(
					$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
					alwaysBreak,
					$the_sett$elm_pretty_printer$Pretty$align(
						A3(
							$the_sett$elm_pretty_printer$Pretty$surround,
							$the_sett$elm_pretty_printer$Pretty$empty,
							close,
							A2(
								$the_sett$elm_pretty_printer$Pretty$nest,
								indent,
								A2(
									$the_sett$elm_pretty_printer$Pretty$a,
									A2(
										$the_sett$elm_pretty_printer$Pretty$separators,
										', ',
										addBarToFirst(prettyExpressions)),
									open))))),
				alwaysBreak);
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettySetter = F2(
	function (aliases, _v2) {
		var fld = _v2.a;
		var val = _v2.b;
		var _v3 = A4(
			$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
			aliases,
			$mdgriffith$elm_codegen$Internal$Write$topContext,
			4,
			$mdgriffith$elm_codegen$Internal$Compiler$denode(val));
		var prettyExpr = _v3.a;
		var alwaysBreak = _v3.b;
		return _Utils_Tuple2(
			A2(
				$the_sett$elm_pretty_printer$Pretty$nest,
				4,
				A2(
					$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
					alwaysBreak,
					$the_sett$elm_pretty_printer$Pretty$lines(
						_List_fromArray(
							[
								$the_sett$elm_pretty_printer$Pretty$words(
								_List_fromArray(
									[
										$the_sett$elm_pretty_printer$Pretty$string(
										$mdgriffith$elm_codegen$Internal$Compiler$denode(fld)),
										$the_sett$elm_pretty_printer$Pretty$string('=')
									])),
								prettyExpr
							])))),
			alwaysBreak);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyTupledExpression = F3(
	function (aliases, indent, exprs) {
		var open = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$space,
			$the_sett$elm_pretty_printer$Pretty$string('('));
		var close = A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$string(')'),
			$the_sett$elm_pretty_printer$Pretty$line);
		if (!exprs.b) {
			return _Utils_Tuple2(
				$the_sett$elm_pretty_printer$Pretty$string('()'),
				false);
		} else {
			var _v1 = A2(
				$elm$core$Tuple$mapSecond,
				$elm$core$List$any($elm$core$Basics$identity),
				$elm$core$List$unzip(
					A2(
						$elm$core$List$map,
						A3(
							$mdgriffith$elm_codegen$Internal$Write$prettyExpressionInner,
							aliases,
							$mdgriffith$elm_codegen$Internal$Write$topContext,
							A2($mdgriffith$elm_codegen$Internal$Write$decrementIndent, indent, 2)),
						$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(exprs))));
			var prettyExpressions = _v1.a;
			var alwaysBreak = _v1.b;
			return _Utils_Tuple2(
				A2(
					$mdgriffith$elm_codegen$Internal$Write$optionalGroup,
					alwaysBreak,
					$the_sett$elm_pretty_printer$Pretty$align(
						A3(
							$the_sett$elm_pretty_printer$Pretty$surround,
							open,
							close,
							A2($the_sett$elm_pretty_printer$Pretty$separators, ', ', prettyExpressions)))),
				alwaysBreak);
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyDestructuring = F3(
	function (aliases, pattern, expr) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$nest,
			4,
			$the_sett$elm_pretty_printer$Pretty$lines(
				_List_fromArray(
					[
						$the_sett$elm_pretty_printer$Pretty$words(
						_List_fromArray(
							[
								A2($mdgriffith$elm_codegen$Internal$Write$prettyPattern, aliases, pattern),
								$the_sett$elm_pretty_printer$Pretty$string('=')
							])),
						A2($mdgriffith$elm_codegen$Internal$Write$prettyExpression, aliases, expr)
					])));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyInfix = function (infix_) {
	var dirToString = function (direction) {
		switch (direction.$) {
			case 'Left':
				return 'left';
			case 'Right':
				return 'right';
			default:
				return 'non';
		}
	};
	return $the_sett$elm_pretty_printer$Pretty$words(
		_List_fromArray(
			[
				$the_sett$elm_pretty_printer$Pretty$string('infix'),
				$the_sett$elm_pretty_printer$Pretty$string(
				dirToString(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.direction))),
				$the_sett$elm_pretty_printer$Pretty$string(
				$elm$core$String$fromInt(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.precedence))),
				$the_sett$elm_pretty_printer$Pretty$parens(
				$the_sett$elm_pretty_printer$Pretty$string(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(infix_.operator))),
				$the_sett$elm_pretty_printer$Pretty$string('='),
				$the_sett$elm_pretty_printer$Pretty$string(
				$mdgriffith$elm_codegen$Internal$Compiler$denode(infix_._function))
			]));
};
var $mdgriffith$elm_codegen$Internal$Write$prettyPortDeclaration = F2(
	function (aliases, sig) {
		return $the_sett$elm_pretty_printer$Pretty$words(
			_List_fromArray(
				[
					$the_sett$elm_pretty_printer$Pretty$string('port'),
					A2($mdgriffith$elm_codegen$Internal$Write$prettySignature, aliases, sig)
				]));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyTypeAlias = F2(
	function (aliases, tAlias) {
		var typeAliasPretty = A2(
			$the_sett$elm_pretty_printer$Pretty$nest,
			4,
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				A2(
					$mdgriffith$elm_codegen$Internal$Write$prettyTypeAnnotation,
					aliases,
					$mdgriffith$elm_codegen$Internal$Compiler$denode(tAlias.typeAnnotation)),
				A2(
					$the_sett$elm_pretty_printer$Pretty$a,
					$the_sett$elm_pretty_printer$Pretty$line,
					$the_sett$elm_pretty_printer$Pretty$words(
						_List_fromArray(
							[
								$the_sett$elm_pretty_printer$Pretty$string('type alias'),
								$the_sett$elm_pretty_printer$Pretty$string(
								$mdgriffith$elm_codegen$Internal$Compiler$denode(tAlias.name)),
								$the_sett$elm_pretty_printer$Pretty$words(
								A2(
									$elm$core$List$map,
									$the_sett$elm_pretty_printer$Pretty$string,
									$mdgriffith$elm_codegen$Internal$Compiler$denodeAll(tAlias.generics))),
								$the_sett$elm_pretty_printer$Pretty$string('=')
							])))));
		return $the_sett$elm_pretty_printer$Pretty$lines(
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
					$mdgriffith$elm_codegen$Internal$Write$prettyDocumentation,
					$mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(tAlias.documentation)),
					typeAliasPretty
				]));
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyElmSyntaxDeclaration = F2(
	function (aliases, decl) {
		switch (decl.$) {
			case 'FunctionDeclaration':
				var fn = decl.a;
				return A2($mdgriffith$elm_codegen$Internal$Write$prettyFun, aliases, fn);
			case 'AliasDeclaration':
				var tAlias = decl.a;
				return A2($mdgriffith$elm_codegen$Internal$Write$prettyTypeAlias, aliases, tAlias);
			case 'CustomTypeDeclaration':
				var type_ = decl.a;
				return A2($mdgriffith$elm_codegen$Internal$Write$prettyCustomType, aliases, type_);
			case 'PortDeclaration':
				var sig = decl.a;
				return A2($mdgriffith$elm_codegen$Internal$Write$prettyPortDeclaration, aliases, sig);
			case 'InfixDeclaration':
				var infix_ = decl.a;
				return $mdgriffith$elm_codegen$Internal$Write$prettyInfix(infix_);
			default:
				var pattern = decl.a;
				var expr = decl.b;
				return A3(
					$mdgriffith$elm_codegen$Internal$Write$prettyDestructuring,
					aliases,
					$mdgriffith$elm_codegen$Internal$Compiler$denode(pattern),
					$mdgriffith$elm_codegen$Internal$Compiler$denode(expr));
		}
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyDeclarations = F2(
	function (aliases, decls) {
		return A3(
			$elm$core$List$foldl,
			$elm$core$Basics$apL,
			$the_sett$elm_pretty_printer$Pretty$empty,
			A3(
				$elm$core$Basics$composeR,
				$elm$core$List$reverse,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$List$drop(1),
					$elm$core$List$reverse),
				A2(
					$elm$core$List$concatMap,
					function (decl) {
						switch (decl.$) {
							case 'RenderedComment':
								var content = decl.a;
								return _List_fromArray(
									[
										$the_sett$elm_pretty_printer$Pretty$a(
										$the_sett$elm_pretty_printer$Pretty$string(content + '\n')),
										A2(
										$elm$core$Basics$composeR,
										$the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line),
										$the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line))
									]);
							case 'RenderedBlock':
								var source = decl.a;
								return _List_fromArray(
									[
										$the_sett$elm_pretty_printer$Pretty$a(
										$the_sett$elm_pretty_printer$Pretty$string(source)),
										A2(
										$elm$core$Basics$composeR,
										$the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line),
										A2(
											$elm$core$Basics$composeR,
											$the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line),
											$the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line)))
									]);
							default:
								var innerDecl = decl.a;
								return _List_fromArray(
									[
										$the_sett$elm_pretty_printer$Pretty$a(
										A2($mdgriffith$elm_codegen$Internal$Write$prettyElmSyntaxDeclaration, aliases, innerDecl)),
										A2(
										$elm$core$Basics$composeR,
										$the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line),
										A2(
											$elm$core$Basics$composeR,
											$the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line),
											$the_sett$elm_pretty_printer$Pretty$a($the_sett$elm_pretty_printer$Pretty$line)))
									]);
						}
					},
					decls)));
	});
var $mdgriffith$elm_codegen$Internal$Comments$delimeters = function (doc) {
	return A2(
		$the_sett$elm_pretty_printer$Pretty$a,
		$the_sett$elm_pretty_printer$Pretty$string('-}'),
		A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			$the_sett$elm_pretty_printer$Pretty$line,
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				doc,
				$the_sett$elm_pretty_printer$Pretty$string('{-| '))));
};
var $mdgriffith$elm_codegen$Internal$Comments$getParts = function (_v0) {
	var parts = _v0.a;
	return $elm$core$List$reverse(parts);
};
var $mdgriffith$elm_codegen$Internal$Comments$DocTags = function (a) {
	return {$: 'DocTags', a: a};
};
var $mdgriffith$elm_codegen$Internal$Comments$fitAndSplit = F2(
	function (width, tags) {
		if (!tags.b) {
			return _List_Nil;
		} else {
			var t = tags.a;
			var ts = tags.b;
			var _v1 = A3(
				$elm$core$List$foldl,
				F2(
					function (tag, _v2) {
						var allSplits = _v2.a;
						var curSplit = _v2.b;
						var remaining = _v2.c;
						return (_Utils_cmp(
							$elm$core$String$length(tag),
							remaining) < 1) ? _Utils_Tuple3(
							allSplits,
							A2($elm$core$List$cons, tag, curSplit),
							remaining - $elm$core$String$length(tag)) : _Utils_Tuple3(
							_Utils_ap(
								allSplits,
								_List_fromArray(
									[
										$elm$core$List$reverse(curSplit)
									])),
							_List_fromArray(
								[tag]),
							width - $elm$core$String$length(tag));
					}),
				_Utils_Tuple3(
					_List_Nil,
					_List_fromArray(
						[t]),
					width - $elm$core$String$length(t)),
				ts);
			var splitsExceptLast = _v1.a;
			var lastSplit = _v1.b;
			return _Utils_ap(
				splitsExceptLast,
				_List_fromArray(
					[
						$elm$core$List$reverse(lastSplit)
					]));
		}
	});
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $mdgriffith$elm_codegen$Internal$Comments$mergeDocTags = function (innerParts) {
	var _v0 = A3(
		$elm$core$List$foldr,
		F2(
			function (part, _v1) {
				var accum = _v1.a;
				var context = _v1.b;
				if (context.$ === 'Nothing') {
					if (part.$ === 'DocTags') {
						var tags = part.a;
						return _Utils_Tuple2(
							accum,
							$elm$core$Maybe$Just(tags));
					} else {
						var otherPart = part;
						return _Utils_Tuple2(
							A2($elm$core$List$cons, otherPart, accum),
							$elm$core$Maybe$Nothing);
					}
				} else {
					var contextTags = context.a;
					if (part.$ === 'DocTags') {
						var tags = part.a;
						return _Utils_Tuple2(
							accum,
							$elm$core$Maybe$Just(
								_Utils_ap(contextTags, tags)));
					} else {
						var otherPart = part;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								otherPart,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_codegen$Internal$Comments$DocTags(
										$elm$core$List$sort(contextTags)),
									accum)),
							$elm$core$Maybe$Nothing);
					}
				}
			}),
		_Utils_Tuple2(_List_Nil, $elm$core$Maybe$Nothing),
		innerParts);
	var partsExceptMaybeFirst = _v0.a;
	var maybeFirstPart = _v0.b;
	if (maybeFirstPart.$ === 'Nothing') {
		return partsExceptMaybeFirst;
	} else {
		var tags = maybeFirstPart.a;
		return A2(
			$elm$core$List$cons,
			$mdgriffith$elm_codegen$Internal$Comments$DocTags(
				$elm$core$List$sort(tags)),
			partsExceptMaybeFirst);
	}
};
var $mdgriffith$elm_codegen$Internal$Comments$layoutTags = F2(
	function (width, parts) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (part, _v0) {
					var accumParts = _v0.a;
					var accumDocTags = _v0.b;
					if (part.$ === 'DocTags') {
						var tags = part.a;
						var splits = A2($mdgriffith$elm_codegen$Internal$Comments$fitAndSplit, width, tags);
						return _Utils_Tuple2(
							_Utils_ap(
								A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Comments$DocTags, splits),
								accumParts),
							_Utils_ap(accumDocTags, splits));
					} else {
						var otherPart = part;
						return _Utils_Tuple2(
							A2($elm$core$List$cons, otherPart, accumParts),
							accumDocTags);
					}
				}),
			_Utils_Tuple2(_List_Nil, _List_Nil),
			$mdgriffith$elm_codegen$Internal$Comments$mergeDocTags(parts));
	});
var $the_sett$elm_pretty_printer$Internals$NLine = F3(
	function (a, b, c) {
		return {$: 'NLine', a: a, b: b, c: c};
	});
var $the_sett$elm_pretty_printer$Internals$NNil = {$: 'NNil'};
var $the_sett$elm_pretty_printer$Internals$NText = F3(
	function (a, b, c) {
		return {$: 'NText', a: a, b: b, c: c};
	});
var $the_sett$elm_pretty_printer$Internals$fits = F2(
	function (w, normal) {
		fits:
		while (true) {
			if (w < 0) {
				return false;
			} else {
				switch (normal.$) {
					case 'NNil':
						return true;
					case 'NText':
						var text = normal.a;
						var innerNormal = normal.b;
						var $temp$w = w - $elm$core$String$length(text),
							$temp$normal = innerNormal(_Utils_Tuple0);
						w = $temp$w;
						normal = $temp$normal;
						continue fits;
					default:
						return true;
				}
			}
		}
	});
var $the_sett$elm_pretty_printer$Internals$better = F4(
	function (w, k, doc, doc2Fn) {
		return A2($the_sett$elm_pretty_printer$Internals$fits, w - k, doc) ? doc : doc2Fn(_Utils_Tuple0);
	});
var $the_sett$elm_pretty_printer$Internals$best = F3(
	function (width, startCol, x) {
		var be = F3(
			function (w, k, docs) {
				be:
				while (true) {
					if (!docs.b) {
						return $the_sett$elm_pretty_printer$Internals$NNil;
					} else {
						switch (docs.a.b.$) {
							case 'Empty':
								var _v1 = docs.a;
								var i = _v1.a;
								var _v2 = _v1.b;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = ds;
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
							case 'Concatenate':
								var _v3 = docs.a;
								var i = _v3.a;
								var _v4 = _v3.b;
								var doc = _v4.a;
								var doc2 = _v4.b;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										i,
										doc(_Utils_Tuple0)),
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(
											i,
											doc2(_Utils_Tuple0)),
										ds));
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
							case 'Nest':
								var _v5 = docs.a;
								var i = _v5.a;
								var _v6 = _v5.b;
								var j = _v6.a;
								var doc = _v6.b;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										i + j,
										doc(_Utils_Tuple0)),
									ds);
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
							case 'Text':
								var _v7 = docs.a;
								var i = _v7.a;
								var _v8 = _v7.b;
								var text = _v8.a;
								var maybeTag = _v8.b;
								var ds = docs.b;
								return A3(
									$the_sett$elm_pretty_printer$Internals$NText,
									text,
									function (_v9) {
										return A3(
											be,
											w,
											k + $elm$core$String$length(text),
											ds);
									},
									maybeTag);
							case 'Line':
								var _v10 = docs.a;
								var i = _v10.a;
								var _v11 = _v10.b;
								var vsep = _v11.b;
								var ds = docs.b;
								return A3(
									$the_sett$elm_pretty_printer$Internals$NLine,
									i,
									vsep,
									function (_v12) {
										return A3(
											be,
											w,
											i + $elm$core$String$length(vsep),
											ds);
									});
							case 'Union':
								var _v13 = docs.a;
								var i = _v13.a;
								var _v14 = _v13.b;
								var doc = _v14.a;
								var doc2 = _v14.b;
								var ds = docs.b;
								return A4(
									$the_sett$elm_pretty_printer$Internals$better,
									w,
									k,
									A3(
										be,
										w,
										k,
										A2(
											$elm$core$List$cons,
											_Utils_Tuple2(i, doc),
											ds)),
									function (_v15) {
										return A3(
											be,
											w,
											k,
											A2(
												$elm$core$List$cons,
												_Utils_Tuple2(i, doc2),
												ds));
									});
							case 'Nesting':
								var _v16 = docs.a;
								var i = _v16.a;
								var fn = _v16.b.a;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										i,
										fn(i)),
									ds);
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
							default:
								var _v17 = docs.a;
								var i = _v17.a;
								var fn = _v17.b.a;
								var ds = docs.b;
								var $temp$w = w,
									$temp$k = k,
									$temp$docs = A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										i,
										fn(k)),
									ds);
								w = $temp$w;
								k = $temp$k;
								docs = $temp$docs;
								continue be;
						}
					}
				}
			});
		return A3(
			be,
			width,
			startCol,
			_List_fromArray(
				[
					_Utils_Tuple2(0, x)
				]));
	});
var $the_sett$elm_pretty_printer$Internals$layout = function (normal) {
	var layoutInner = F2(
		function (normal2, acc) {
			layoutInner:
			while (true) {
				switch (normal2.$) {
					case 'NNil':
						return acc;
					case 'NText':
						var text = normal2.a;
						var innerNormal = normal2.b;
						var maybeTag = normal2.c;
						var $temp$normal2 = innerNormal(_Utils_Tuple0),
							$temp$acc = A2($elm$core$List$cons, text, acc);
						normal2 = $temp$normal2;
						acc = $temp$acc;
						continue layoutInner;
					default:
						var i = normal2.a;
						var sep = normal2.b;
						var innerNormal = normal2.c;
						var norm = innerNormal(_Utils_Tuple0);
						if (norm.$ === 'NLine') {
							var $temp$normal2 = innerNormal(_Utils_Tuple0),
								$temp$acc = A2($elm$core$List$cons, '\n' + sep, acc);
							normal2 = $temp$normal2;
							acc = $temp$acc;
							continue layoutInner;
						} else {
							var $temp$normal2 = innerNormal(_Utils_Tuple0),
								$temp$acc = A2(
								$elm$core$List$cons,
								'\n' + (A2($the_sett$elm_pretty_printer$Internals$copy, i, ' ') + sep),
								acc);
							normal2 = $temp$normal2;
							acc = $temp$acc;
							continue layoutInner;
						}
				}
			}
		});
	return $elm$core$String$concat(
		$elm$core$List$reverse(
			A2(layoutInner, normal, _List_Nil)));
};
var $the_sett$elm_pretty_printer$Pretty$pretty = F2(
	function (w, doc) {
		return $the_sett$elm_pretty_printer$Internals$layout(
			A3($the_sett$elm_pretty_printer$Internals$best, w, 0, doc));
	});
var $mdgriffith$elm_codegen$Internal$Comments$prettyCode = function (val) {
	return A2(
		$the_sett$elm_pretty_printer$Pretty$indent,
		4,
		$the_sett$elm_pretty_printer$Pretty$string(val));
};
var $mdgriffith$elm_codegen$Internal$Comments$prettyMarkdown = function (val) {
	return $the_sett$elm_pretty_printer$Pretty$string(val);
};
var $mdgriffith$elm_codegen$Internal$Comments$prettyTags = function (tags) {
	return $the_sett$elm_pretty_printer$Pretty$words(
		_List_fromArray(
			[
				$the_sett$elm_pretty_printer$Pretty$string('@docs'),
				A2(
				$the_sett$elm_pretty_printer$Pretty$join,
				$the_sett$elm_pretty_printer$Pretty$string(', '),
				A2($elm$core$List$map, $the_sett$elm_pretty_printer$Pretty$string, tags))
			]));
};
var $mdgriffith$elm_codegen$Internal$Comments$prettyCommentPart = function (part) {
	switch (part.$) {
		case 'Markdown':
			var val = part.a;
			return $mdgriffith$elm_codegen$Internal$Comments$prettyMarkdown(val);
		case 'Code':
			var val = part.a;
			return $mdgriffith$elm_codegen$Internal$Comments$prettyCode(val);
		default:
			var tags = part.a;
			return $mdgriffith$elm_codegen$Internal$Comments$prettyTags(tags);
	}
};
var $mdgriffith$elm_codegen$Internal$Comments$prettyFileComment = F2(
	function (width, comment) {
		var _v0 = A2(
			$mdgriffith$elm_codegen$Internal$Comments$layoutTags,
			width,
			$mdgriffith$elm_codegen$Internal$Comments$getParts(comment));
		var parts = _v0.a;
		var splits = _v0.b;
		return _Utils_Tuple2(
			A2(
				$the_sett$elm_pretty_printer$Pretty$pretty,
				width,
				$mdgriffith$elm_codegen$Internal$Comments$delimeters(
					$the_sett$elm_pretty_printer$Pretty$lines(
						A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Comments$prettyCommentPart, parts)))),
			splits);
	});
var $mdgriffith$elm_codegen$Internal$Write$prettyDefaultModuleData = function (moduleData) {
	return $the_sett$elm_pretty_printer$Pretty$words(
		_List_fromArray(
			[
				$the_sett$elm_pretty_printer$Pretty$string('module'),
				$mdgriffith$elm_codegen$Internal$Write$prettyModuleName(
				$mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.moduleName)),
				$mdgriffith$elm_codegen$Internal$Write$prettyExposing(
				$mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.exposingList))
			]));
};
var $mdgriffith$elm_codegen$Internal$Write$prettyEffectModuleData = function (moduleData) {
	var prettyCmdAndSub = F2(
		function (maybeCmd, maybeSub) {
			var _v0 = _Utils_Tuple2(maybeCmd, maybeSub);
			if (_v0.a.$ === 'Just') {
				if (_v0.b.$ === 'Just') {
					var cmdName = _v0.a.a;
					var subName = _v0.b.a;
					return $elm$core$Maybe$Just(
						$the_sett$elm_pretty_printer$Pretty$words(
							_List_fromArray(
								[
									$the_sett$elm_pretty_printer$Pretty$string('where { command ='),
									$the_sett$elm_pretty_printer$Pretty$string(cmdName),
									$the_sett$elm_pretty_printer$Pretty$string(','),
									$the_sett$elm_pretty_printer$Pretty$string('subscription ='),
									$the_sett$elm_pretty_printer$Pretty$string(subName),
									$the_sett$elm_pretty_printer$Pretty$string('}')
								])));
				} else {
					var cmdName = _v0.a.a;
					var _v3 = _v0.b;
					return $elm$core$Maybe$Just(
						$the_sett$elm_pretty_printer$Pretty$words(
							_List_fromArray(
								[
									$the_sett$elm_pretty_printer$Pretty$string('where { command ='),
									$the_sett$elm_pretty_printer$Pretty$string(cmdName),
									$the_sett$elm_pretty_printer$Pretty$string('}')
								])));
				}
			} else {
				if (_v0.b.$ === 'Nothing') {
					var _v1 = _v0.a;
					var _v2 = _v0.b;
					return $elm$core$Maybe$Nothing;
				} else {
					var _v4 = _v0.a;
					var subName = _v0.b.a;
					return $elm$core$Maybe$Just(
						$the_sett$elm_pretty_printer$Pretty$words(
							_List_fromArray(
								[
									$the_sett$elm_pretty_printer$Pretty$string('where { subscription ='),
									$the_sett$elm_pretty_printer$Pretty$string(subName),
									$the_sett$elm_pretty_printer$Pretty$string('}')
								])));
				}
			}
		});
	return $the_sett$elm_pretty_printer$Pretty$words(
		_List_fromArray(
			[
				$the_sett$elm_pretty_printer$Pretty$string('effect module'),
				$mdgriffith$elm_codegen$Internal$Write$prettyModuleName(
				$mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.moduleName)),
				A2(
				$mdgriffith$elm_codegen$Internal$Write$prettyMaybe,
				$elm$core$Basics$identity,
				A2(
					prettyCmdAndSub,
					$mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(moduleData.command),
					$mdgriffith$elm_codegen$Internal$Compiler$denodeMaybe(moduleData.subscription))),
				$mdgriffith$elm_codegen$Internal$Write$prettyExposing(
				$mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.exposingList))
			]));
};
var $mdgriffith$elm_codegen$Internal$Write$prettyPortModuleData = function (moduleData) {
	return $the_sett$elm_pretty_printer$Pretty$words(
		_List_fromArray(
			[
				$the_sett$elm_pretty_printer$Pretty$string('port module'),
				$mdgriffith$elm_codegen$Internal$Write$prettyModuleName(
				$mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.moduleName)),
				$mdgriffith$elm_codegen$Internal$Write$prettyExposing(
				$mdgriffith$elm_codegen$Internal$Compiler$denode(moduleData.exposingList))
			]));
};
var $mdgriffith$elm_codegen$Internal$Write$prettyModule = function (mod) {
	switch (mod.$) {
		case 'NormalModule':
			var defaultModuleData = mod.a;
			return $mdgriffith$elm_codegen$Internal$Write$prettyDefaultModuleData(defaultModuleData);
		case 'PortModule':
			var defaultModuleData = mod.a;
			return $mdgriffith$elm_codegen$Internal$Write$prettyPortModuleData(defaultModuleData);
		default:
			var effectModuleData = mod.a;
			return $mdgriffith$elm_codegen$Internal$Write$prettyEffectModuleData(effectModuleData);
	}
};
var $mdgriffith$elm_codegen$Internal$Write$prepareLayout = F2(
	function (width, file) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$a,
			A2($mdgriffith$elm_codegen$Internal$Write$prettyDeclarations, file.aliases, file.declarations),
			A2(
				$the_sett$elm_pretty_printer$Pretty$a,
				$mdgriffith$elm_codegen$Internal$Write$importsPretty(file.imports),
				function (doc) {
					var _v0 = file.comments;
					if (_v0.$ === 'Nothing') {
						return doc;
					} else {
						var fileComment = _v0.a;
						var _v1 = A2($mdgriffith$elm_codegen$Internal$Comments$prettyFileComment, width, fileComment);
						var fileCommentStr = _v1.a;
						var innerTags = _v1.b;
						return A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							$the_sett$elm_pretty_printer$Pretty$line,
							A2(
								$the_sett$elm_pretty_printer$Pretty$a,
								$mdgriffith$elm_codegen$Internal$Write$prettyComments(
									_List_fromArray(
										[fileCommentStr])),
								doc));
					}
				}(
					A2(
						$the_sett$elm_pretty_printer$Pretty$a,
						$the_sett$elm_pretty_printer$Pretty$line,
						A2(
							$the_sett$elm_pretty_printer$Pretty$a,
							$the_sett$elm_pretty_printer$Pretty$line,
							$mdgriffith$elm_codegen$Internal$Write$prettyModule(file.moduleDefinition))))));
	});
var $mdgriffith$elm_codegen$Internal$Write$pretty = F2(
	function (width, file) {
		return A2(
			$the_sett$elm_pretty_printer$Pretty$pretty,
			width,
			A2($mdgriffith$elm_codegen$Internal$Write$prepareLayout, width, file));
	});
var $mdgriffith$elm_codegen$Internal$Write$write = $mdgriffith$elm_codegen$Internal$Write$pretty(80);
var $mdgriffith$elm_codegen$Internal$Render$render = F2(
	function (toDocComment, fileDetails) {
		var rendered = A3(
			$elm$core$List$foldl,
			F2(
				function (decl, gathered) {
					switch (decl.$) {
						case 'Comment':
							var comm = decl.a;
							return _Utils_update(
								gathered,
								{
									declarations: A2(
										$elm$core$List$cons,
										$mdgriffith$elm_codegen$Internal$Compiler$RenderedComment(comm),
										gathered.declarations)
								});
						case 'Block':
							var block = decl.a;
							return _Utils_update(
								gathered,
								{
									declarations: A2(
										$elm$core$List$cons,
										$mdgriffith$elm_codegen$Internal$Compiler$RenderedBlock(block),
										gathered.declarations)
								});
						default:
							var decDetails = decl.a;
							var result = decDetails.toBody(fileDetails.index);
							return {
								declarations: A2(
									$elm$core$List$cons,
									$mdgriffith$elm_codegen$Internal$Compiler$RenderedDecl(
										A2($mdgriffith$elm_codegen$Internal$Render$addDocs, decDetails.docs, result.declaration)),
									gathered.declarations),
								exposed: A3($mdgriffith$elm_codegen$Internal$Render$addExposed, decDetails.exposed, result.declaration, gathered.exposed),
								exposedGroups: function () {
									var _v5 = decDetails.exposed;
									if (_v5.$ === 'NotExposed') {
										return gathered.exposedGroups;
									} else {
										var details = _v5.a;
										return A2(
											$elm$core$List$cons,
											_Utils_Tuple2(details.group, decDetails.name),
											gathered.exposedGroups);
									}
								}(),
								hasPorts: function () {
									if (gathered.hasPorts) {
										return gathered.hasPorts;
									} else {
										var _v6 = result.declaration;
										if (_v6.$ === 'PortDeclaration') {
											return true;
										} else {
											return false;
										}
									}
								}(),
								imports: _Utils_ap(
									result.additionalImports,
									_Utils_ap(decDetails.imports, gathered.imports)),
								warnings: function () {
									var _v7 = result.warning;
									if (_v7.$ === 'Nothing') {
										return gathered.warnings;
									} else {
										var warn = _v7.a;
										return A2($elm$core$List$cons, warn, gathered.warnings);
									}
								}()
							};
					}
				}),
			{declarations: _List_Nil, exposed: _List_Nil, exposedGroups: _List_Nil, hasPorts: false, imports: _List_Nil, warnings: _List_Nil},
			fileDetails.declarations);
		var body = $mdgriffith$elm_codegen$Internal$Write$write(
			{
				aliases: fileDetails.aliases,
				comments: function () {
					var _v0 = rendered.exposedGroups;
					if (!_v0.b) {
						return $elm$core$Maybe$Nothing;
					} else {
						return $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_codegen$Internal$Comments$addPart,
								$mdgriffith$elm_codegen$Internal$Comments$emptyComment,
								$mdgriffith$elm_codegen$Internal$Comments$Markdown(
									'\n' + A2(
										$elm$core$String$join,
										'\n\n',
										toDocComment(
											$mdgriffith$elm_codegen$Internal$Render$groupExposing(
												A2(
													$elm$core$List$sortBy,
													function (_v1) {
														var group = _v1.a;
														if (group.$ === 'Nothing') {
															return 'zzzzzzzzz';
														} else {
															var name = group.a;
															return name;
														}
													},
													rendered.exposedGroups)))))));
					}
				}(),
				declarations: $elm$core$List$reverse(rendered.declarations),
				imports: A2(
					$elm$core$List$filterMap,
					$mdgriffith$elm_codegen$Internal$Compiler$makeImport(fileDetails.aliases),
					$mdgriffith$elm_codegen$Internal$Render$dedupImports(rendered.imports)),
				moduleDefinition: (rendered.hasPorts ? $stil4m$elm_syntax$Elm$Syntax$Module$PortModule : $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule)(
					{
						exposingList: function () {
							var _v3 = rendered.exposed;
							if (!_v3.b) {
								return $mdgriffith$elm_codegen$Internal$Compiler$nodify(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange));
							} else {
								return $mdgriffith$elm_codegen$Internal$Compiler$nodify(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
										$mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(rendered.exposed)));
							}
						}(),
						moduleName: $mdgriffith$elm_codegen$Internal$Compiler$nodify(fileDetails.moduleName)
					})
			});
		return {
			contents: body,
			path: A2($elm$core$String$join, '/', fileDetails.moduleName) + '.elm',
			warnings: rendered.warnings
		};
	});
var $mdgriffith$elm_codegen$Elm$docs = function (group) {
	var _v0 = group.group;
	if (_v0.$ === 'Nothing') {
		return '@docs ' + A2($elm$core$String$join, ', ', group.members);
	} else {
		var groupName = _v0.a;
		return '## ' + (groupName + ('\n\n@docs ' + A2($elm$core$String$join, ', ', group.members)));
	}
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_codegen$Elm$renderStandardComment = function (groups) {
	return $elm$core$List$isEmpty(groups) ? _List_Nil : A2($elm$core$List$map, $mdgriffith$elm_codegen$Elm$docs, groups);
};
var $mdgriffith$elm_codegen$Internal$Index$Index = F4(
	function (a, b, c, d) {
		return {$: 'Index', a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_codegen$Internal$Index$startIndex = A4($mdgriffith$elm_codegen$Internal$Index$Index, 0, _List_Nil, $elm$core$Set$empty, true);
var $mdgriffith$elm_codegen$Elm$file = F2(
	function (mod, decs) {
		return A2(
			$mdgriffith$elm_codegen$Internal$Render$render,
			$mdgriffith$elm_codegen$Elm$renderStandardComment,
			{aliases: _List_Nil, declarations: decs, index: $mdgriffith$elm_codegen$Internal$Index$startIndex, moduleName: mod});
	});
var $author$project$Proto$Nrpc$COPY = {$: 'COPY'};
var $author$project$Proto$Nrpc$defaultSubjectRule = $author$project$Proto$Nrpc$COPY;
var $author$project$Generate$fileOptions = function (file) {
	return A2(
		$elm$core$Maybe$withDefault,
		{nrpcMethodSubjectRule: $author$project$Proto$Nrpc$defaultSubjectRule, nrpcPackageSubject: file._package, nrpcPackageSubjectParams: _List_Nil, nrpcServiceSubjectRule: $author$project$Proto$Nrpc$defaultSubjectRule},
		A2(
			$elm$core$Maybe$map,
			function (options) {
				return {
					nrpcMethodSubjectRule: options.nrpcMethodSubjectRule,
					nrpcPackageSubject: (options.nrpcPackageSubject === '') ? file._package : options.nrpcPackageSubject,
					nrpcPackageSubjectParams: options.nrpcPackageSubjectParams,
					nrpcServiceSubjectRule: options.nrpcServiceSubjectRule
				};
			},
			file.options));
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression = function (a) {
	return {$: 'LambdaExpression', a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern = function (a) {
	return {$: 'VarPattern', a: a};
};
var $mdgriffith$elm_codegen$Internal$Index$dive = function (_v0) {
	var top = _v0.a;
	var tail = _v0.b;
	var scope = _v0.c;
	var check = _v0.d;
	return A4(
		$mdgriffith$elm_codegen$Internal$Index$Index,
		0,
		A2($elm$core$List$cons, top, tail),
		scope,
		check);
};
var $mdgriffith$elm_codegen$Internal$Compiler$expression = function (toExp) {
	return $mdgriffith$elm_codegen$Internal$Compiler$Expression(
		function (index) {
			return toExp(
				$mdgriffith$elm_codegen$Internal$Index$dive(index));
		});
};
var $mdgriffith$elm_codegen$Internal$Index$getName = F2(
	function (desiredName, index) {
		var top = index.a;
		var tail = index.b;
		var scope = index.c;
		var check = index.d;
		var formattedName = $mdgriffith$elm_codegen$Internal$Format$formatValue(desiredName);
		if (!A2($elm$core$Set$member, formattedName, scope)) {
			return _Utils_Tuple2(
				formattedName,
				A4(
					$mdgriffith$elm_codegen$Internal$Index$Index,
					top,
					tail,
					A2($elm$core$Set$insert, formattedName, scope),
					check));
		} else {
			var protectedName = _Utils_ap(
				formattedName,
				$elm$core$String$fromInt(top));
			if (!A2($elm$core$Set$member, protectedName, scope)) {
				return _Utils_Tuple2(
					protectedName,
					A4(
						$mdgriffith$elm_codegen$Internal$Index$Index,
						top + 1,
						tail,
						A2($elm$core$Set$insert, protectedName, scope),
						check));
			} else {
				var protectedNameLevel2 = _Utils_ap(
					formattedName,
					$mdgriffith$elm_codegen$Internal$Index$indexToString(index));
				return _Utils_Tuple2(
					protectedNameLevel2,
					A4(
						$mdgriffith$elm_codegen$Internal$Index$Index,
						top + 1,
						tail,
						A2($elm$core$Set$insert, protectedNameLevel2, scope),
						check));
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType = F3(
	function (index, desiredName, maybeAnnotation) {
		var _v0 = A2($mdgriffith$elm_codegen$Internal$Index$getName, desiredName, index);
		var name = _v0.a;
		var newIndex = _v0.b;
		var _v1 = function () {
			if (maybeAnnotation.$ === 'Nothing') {
				return {
					aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
					annotation: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
						A2($mdgriffith$elm_codegen$Internal$Index$protectTypeName, desiredName, index)),
					imports: _List_Nil
				};
			} else {
				var ann = maybeAnnotation.a.a;
				return ann;
			}
		}();
		var imports = _v1.imports;
		var annotation = _v1.annotation;
		var aliases = _v1.aliases;
		return {
			index: newIndex,
			name: name,
			type_: annotation,
			val: $mdgriffith$elm_codegen$Internal$Compiler$Expression(
				function (ignoredIndex_) {
					return {
						annotation: $elm$core$Result$Ok(
							{aliases: aliases, inferences: $elm$core$Dict$empty, type_: annotation}),
						expression: A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, _List_Nil, name),
						imports: imports
					};
				})
		};
	});
var $mdgriffith$elm_codegen$Elm$fn = F2(
	function (_v0, toExpression) {
		var oneBaseName = _v0.a;
		var maybeAnnotation = _v0.b;
		return $mdgriffith$elm_codegen$Internal$Compiler$expression(
			function (index) {
				var one = A3($mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType, index, oneBaseName, maybeAnnotation);
				var _v1 = toExpression(one.val);
				var toExpr = _v1.a;
				var _return = toExpr(one.index);
				return {
					annotation: function () {
						var _v2 = _return.annotation;
						if (_v2.$ === 'Err') {
							var err = _v2.a;
							return _return.annotation;
						} else {
							var returnAnnotation = _v2.a;
							return $elm$core$Result$Ok(
								{
									aliases: returnAnnotation.aliases,
									inferences: returnAnnotation.inferences,
									type_: A2(
										$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
										$mdgriffith$elm_codegen$Internal$Compiler$nodify(one.type_),
										$mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.type_))
								});
						}
					}(),
					expression: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
						{
							args: _List_fromArray(
								[
									$mdgriffith$elm_codegen$Internal$Compiler$nodify(
									$stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(one.name))
								]),
							expression: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.expression)
						}),
					imports: _return.imports
				};
			});
	});
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$Application = function (a) {
	return {$: 'Application', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$FunctionAppliedToTooManyArgs = F2(
	function (a, b) {
		return {$: 'FunctionAppliedToTooManyArgs', a: a, b: b};
	});
var $mdgriffith$elm_codegen$Internal$Compiler$containsFieldByName = F2(
	function (_v0, _v2) {
		var _v1 = _v0.a;
		var oneName = _v1.b;
		var _v3 = _v2.a;
		var twoName = _v3.b;
		return _Utils_eq(oneName, twoName);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$mergeFieldLists = F2(
	function (fieldOne, fieldTwo) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_new, existing) {
					var newField = _new.b;
					return A2(
						$elm$core$List$any,
						A2(
							$elm$core$Basics$composeL,
							$mdgriffith$elm_codegen$Internal$Compiler$containsFieldByName(newField),
							$mdgriffith$elm_codegen$Internal$Compiler$denode),
						existing) ? existing : A2($elm$core$List$cons, _new, existing);
				}),
			fieldOne,
			fieldTwo);
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$addInference = F3(
	function (key, value, infs) {
		return A3(
			$elm$core$Dict$update,
			key,
			function (maybeValue) {
				if (maybeValue.$ === 'Nothing') {
					return $elm$core$Maybe$Just(value);
				} else {
					if (maybeValue.a.$ === 'GenericRecord') {
						var _v1 = maybeValue.a;
						var _v2 = _v1.a;
						var range = _v2.a;
						var recordName = _v2.b;
						var _v3 = _v1.b;
						var fieldRange = _v3.a;
						var fields = _v3.b;
						if (value.$ === 'GenericRecord') {
							var _v5 = value.a;
							var existingRange = _v5.a;
							var existingRecordName = _v5.b;
							var _v6 = value.b;
							var existingFieldRange = _v6.a;
							var existingFields = _v6.b;
							return $elm$core$Maybe$Just(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
									A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, range, recordName),
									A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										fieldRange,
										A2($mdgriffith$elm_codegen$Internal$Compiler$mergeFieldLists, fields, existingFields))));
						} else {
							return maybeValue;
						}
					} else {
						var existing = maybeValue.a;
						return $elm$core$Maybe$Just(existing);
					}
				}
			},
			infs);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$makeFunctionReversedHelper = F2(
	function (last, reversedArgs) {
		makeFunctionReversedHelper:
		while (true) {
			if (!reversedArgs.b) {
				return last;
			} else {
				if (!reversedArgs.b.b) {
					var penUlt = reversedArgs.a;
					return A2(
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
						A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, penUlt),
						A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, last));
				} else {
					var penUlt = reversedArgs.a;
					var remain = reversedArgs.b;
					var $temp$last = A2(
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
						A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, penUlt),
						A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, last)),
						$temp$reversedArgs = remain;
					last = $temp$last;
					reversedArgs = $temp$reversedArgs;
					continue makeFunctionReversedHelper;
				}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$makeFunction = F2(
	function (result, args) {
		return A2(
			$mdgriffith$elm_codegen$Internal$Compiler$makeFunctionReversedHelper,
			result,
			$elm$core$List$reverse(args));
	});
var $mdgriffith$elm_codegen$Internal$Compiler$MismatchedTypeVariables = {$: 'MismatchedTypeVariables'};
var $mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify = F2(
	function (a, b) {
		return {$: 'UnableToUnify', a: a, b: b};
	});
var $mdgriffith$elm_codegen$Internal$Compiler$getAlias = F2(
	function (_v0, cache) {
		var _v1 = _v0.b;
		var modName = _v1.a;
		var name = _v1.b;
		return A2(
			$elm$core$Dict$get,
			A2($mdgriffith$elm_codegen$Internal$Compiler$formatAliasKey, modName, name),
			cache);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField = function (a) {
	return {$: 'CouldNotFindField', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$getField = F4(
	function (name, val, fields, captured) {
		getField:
		while (true) {
			if (!fields.b) {
				return $elm$core$Result$Err(
					$mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField(
						{
							existingFields: A2(
								$elm$core$List$map,
								A2(
									$elm$core$Basics$composeR,
									$mdgriffith$elm_codegen$Internal$Compiler$denode,
									A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $mdgriffith$elm_codegen$Internal$Compiler$denode)),
								captured),
							field: name
						}));
			} else {
				var top = fields.a;
				var remain = fields.b;
				var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$denode(top);
				var topFieldName = _v1.a;
				var topFieldVal = _v1.b;
				var topName = $mdgriffith$elm_codegen$Internal$Compiler$denode(topFieldName);
				var topVal = $mdgriffith$elm_codegen$Internal$Compiler$denode(topFieldVal);
				if (_Utils_eq(topName, name)) {
					return $elm$core$Result$Ok(
						_Utils_Tuple2(
							topVal,
							_Utils_ap(captured, remain)));
				} else {
					var $temp$name = name,
						$temp$val = val,
						$temp$fields = remain,
						$temp$captured = A2($elm$core$List$cons, top, captured);
					name = $temp$name;
					val = $temp$val;
					fields = $temp$fields;
					captured = $temp$captured;
					continue getField;
				}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$unifiable = F4(
	function (aliases, vars, one, two) {
		unifiable:
		while (true) {
			switch (one.$) {
				case 'GenericType':
					var varName = one.a;
					var _v21 = A2($elm$core$Dict$get, varName, vars);
					if (_v21.$ === 'Nothing') {
						if (two.$ === 'GenericType') {
							var varNameB = two.a;
							return _Utils_eq(varNameB, varName) ? _Utils_Tuple2(
								vars,
								$elm$core$Result$Ok(one)) : _Utils_Tuple2(
								A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, varName, two, vars),
								$elm$core$Result$Ok(two));
						} else {
							return _Utils_Tuple2(
								A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, varName, two, vars),
								$elm$core$Result$Ok(two));
						}
					} else {
						var found = _v21.a;
						if (two.$ === 'GenericType') {
							var varNameB = two.a;
							if (_Utils_eq(varNameB, varName)) {
								return _Utils_Tuple2(
									vars,
									$elm$core$Result$Ok(one));
							} else {
								var _v24 = A2($elm$core$Dict$get, varNameB, vars);
								if (_v24.$ === 'Nothing') {
									return _Utils_Tuple2(
										A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, varNameB, found, vars),
										$elm$core$Result$Ok(two));
								} else {
									var foundTwo = _v24.a;
									var $temp$aliases = aliases,
										$temp$vars = vars,
										$temp$one = found,
										$temp$two = foundTwo;
									aliases = $temp$aliases;
									vars = $temp$vars;
									one = $temp$one;
									two = $temp$two;
									continue unifiable;
								}
							}
						} else {
							var $temp$aliases = aliases,
								$temp$vars = vars,
								$temp$one = found,
								$temp$two = two;
							aliases = $temp$aliases;
							vars = $temp$vars;
							one = $temp$one;
							two = $temp$two;
							continue unifiable;
						}
					}
				case 'Typed':
					var oneName = one.a;
					var oneVars = one.b;
					switch (two.$) {
						case 'Typed':
							var twoName = two.a;
							var twoContents = two.b;
							if (_Utils_eq(
								$mdgriffith$elm_codegen$Internal$Compiler$denode(oneName),
								$mdgriffith$elm_codegen$Internal$Compiler$denode(twoName))) {
								var _v26 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableLists, aliases, vars, oneVars, twoContents, _List_Nil);
								if (_v26.b.$ === 'Ok') {
									var newVars = _v26.a;
									var unifiedContent = _v26.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Ok(
											A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, twoName, unifiedContent)));
								} else {
									var newVars = _v26.a;
									var err = _v26.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Err(err));
								}
							} else {
								return _Utils_Tuple2(
									vars,
									$elm$core$Result$Err(
										A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)));
							}
						case 'GenericType':
							var b = two.a;
							return _Utils_Tuple2(
								A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
								$elm$core$Result$Ok(one));
						default:
							var _v27 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias, aliases, vars, oneName, oneVars, two);
							if (_v27.$ === 'Nothing') {
								return _Utils_Tuple2(
									vars,
									$elm$core$Result$Err(
										A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)));
							} else {
								var unified = _v27.a;
								return unified;
							}
					}
				case 'Unit':
					switch (two.$) {
						case 'GenericType':
							var b = two.a;
							var _v29 = A2($elm$core$Dict$get, b, vars);
							if (_v29.$ === 'Nothing') {
								return _Utils_Tuple2(
									A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
									$elm$core$Result$Ok(one));
							} else {
								var foundTwo = _v29.a;
								var $temp$aliases = aliases,
									$temp$vars = vars,
									$temp$one = one,
									$temp$two = foundTwo;
								aliases = $temp$aliases;
								vars = $temp$vars;
								one = $temp$one;
								two = $temp$two;
								continue unifiable;
							}
						case 'Unit':
							return _Utils_Tuple2(
								vars,
								$elm$core$Result$Ok($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit));
						default:
							return _Utils_Tuple2(
								vars,
								$elm$core$Result$Err(
									A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)));
					}
				case 'Tupled':
					var valsA = one.a;
					switch (two.$) {
						case 'GenericType':
							var b = two.a;
							var _v31 = A2($elm$core$Dict$get, b, vars);
							if (_v31.$ === 'Nothing') {
								return _Utils_Tuple2(
									A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
									$elm$core$Result$Ok(one));
							} else {
								var foundTwo = _v31.a;
								var $temp$aliases = aliases,
									$temp$vars = vars,
									$temp$one = one,
									$temp$two = foundTwo;
								aliases = $temp$aliases;
								vars = $temp$vars;
								one = $temp$one;
								two = $temp$two;
								continue unifiable;
							}
						case 'Tupled':
							var valsB = two.a;
							var _v32 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableLists, aliases, vars, valsA, valsB, _List_Nil);
							if (_v32.b.$ === 'Ok') {
								var newVars = _v32.a;
								var unified = _v32.b.a;
								return _Utils_Tuple2(
									newVars,
									$elm$core$Result$Ok(
										$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(unified)));
							} else {
								var newVars = _v32.a;
								var err = _v32.b.a;
								return _Utils_Tuple2(
									newVars,
									$elm$core$Result$Err(err));
							}
						default:
							return _Utils_Tuple2(
								vars,
								$elm$core$Result$Err(
									A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)));
					}
				case 'Record':
					var fieldsA = one.a;
					switch (two.$) {
						case 'GenericType':
							var b = two.a;
							var _v34 = A2($elm$core$Dict$get, b, vars);
							if (_v34.$ === 'Nothing') {
								return _Utils_Tuple2(
									A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
									$elm$core$Result$Ok(one));
							} else {
								var foundTwo = _v34.a;
								var $temp$aliases = aliases,
									$temp$vars = vars,
									$temp$one = one,
									$temp$two = foundTwo;
								aliases = $temp$aliases;
								vars = $temp$vars;
								one = $temp$one;
								two = $temp$two;
								continue unifiable;
							}
						case 'GenericRecord':
							var _v35 = two.a;
							var twoRecName = _v35.b;
							var _v36 = two.b;
							var fieldsB = _v36.b;
							var _v37 = A2($elm$core$Dict$get, twoRecName, vars);
							if (_v37.$ === 'Nothing') {
								var _v38 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
								if (_v38.b.$ === 'Ok') {
									var newVars = _v38.a;
									var unifiedFields = _v38.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Ok(
											$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
								} else {
									var newVars = _v38.a;
									var err = _v38.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Err(err));
								}
							} else {
								var knownType = _v37.a;
								var _v39 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
								if (_v39.b.$ === 'Ok') {
									var newVars = _v39.a;
									var unifiedFields = _v39.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Ok(
											$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
								} else {
									var newVars = _v39.a;
									var err = _v39.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Err(err));
								}
							}
						case 'Record':
							var fieldsB = two.a;
							var _v40 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
							if (_v40.b.$ === 'Ok') {
								var newVars = _v40.a;
								var unifiedFields = _v40.b.a;
								return _Utils_Tuple2(
									newVars,
									$elm$core$Result$Ok(
										$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
							} else {
								var newVars = _v40.a;
								var err = _v40.b.a;
								return _Utils_Tuple2(
									newVars,
									$elm$core$Result$Err(err));
							}
						case 'Typed':
							var twoName = two.a;
							var twoVars = two.b;
							var _v41 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias, aliases, vars, twoName, twoVars, one);
							if (_v41.$ === 'Nothing') {
								return _Utils_Tuple2(
									vars,
									$elm$core$Result$Err(
										A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)));
							} else {
								var unified = _v41.a;
								return unified;
							}
						default:
							return _Utils_Tuple2(
								vars,
								$elm$core$Result$Err(
									A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)));
					}
				case 'GenericRecord':
					var _v42 = one.a;
					var reVarName = _v42.b;
					var _v43 = one.b;
					var fieldsARange = _v43.a;
					var fieldsA = _v43.b;
					switch (two.$) {
						case 'GenericType':
							var b = two.a;
							var _v45 = A2($elm$core$Dict$get, b, vars);
							if (_v45.$ === 'Nothing') {
								return _Utils_Tuple2(
									A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
									$elm$core$Result$Ok(one));
							} else {
								var foundTwo = _v45.a;
								var $temp$aliases = aliases,
									$temp$vars = vars,
									$temp$one = one,
									$temp$two = foundTwo;
								aliases = $temp$aliases;
								vars = $temp$vars;
								one = $temp$one;
								two = $temp$two;
								continue unifiable;
							}
						case 'GenericRecord':
							var _v46 = two.a;
							var twoRecName = _v46.b;
							var _v47 = two.b;
							var fieldsB = _v47.b;
							var _v48 = A2($elm$core$Dict$get, twoRecName, vars);
							if (_v48.$ === 'Nothing') {
								var _v49 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
								if (_v49.b.$ === 'Ok') {
									var newVars = _v49.a;
									var unifiedFields = _v49.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Ok(
											$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
								} else {
									var newVars = _v49.a;
									var err = _v49.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Err(err));
								}
							} else {
								var knownType = _v48.a;
								var _v50 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
								if (_v50.b.$ === 'Ok') {
									var newVars = _v50.a;
									var unifiedFields = _v50.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Ok(
											$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
								} else {
									var newVars = _v50.a;
									var err = _v50.b.a;
									return _Utils_Tuple2(
										newVars,
										$elm$core$Result$Err(err));
								}
							}
						case 'Record':
							var fieldsB = two.a;
							var _v51 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifiableFields, aliases, vars, fieldsA, fieldsB, _List_Nil);
							if (_v51.b.$ === 'Ok') {
								var newVars = _v51.a;
								var unifiedFields = _v51.b.a;
								return _Utils_Tuple2(
									newVars,
									$elm$core$Result$Ok(
										$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(unifiedFields)));
							} else {
								var newVars = _v51.a;
								var err = _v51.b.a;
								return _Utils_Tuple2(
									newVars,
									$elm$core$Result$Err(err));
							}
						case 'Typed':
							var twoName = two.a;
							var twoVars = two.b;
							var _v52 = A5($mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias, aliases, vars, twoName, twoVars, one);
							if (_v52.$ === 'Nothing') {
								return _Utils_Tuple2(
									vars,
									$elm$core$Result$Err(
										A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)));
							} else {
								var unified = _v52.a;
								return unified;
							}
						default:
							return _Utils_Tuple2(
								vars,
								$elm$core$Result$Err(
									A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)));
					}
				default:
					var oneA = one.a;
					var oneB = one.b;
					switch (two.$) {
						case 'GenericType':
							var b = two.a;
							var _v54 = A2($elm$core$Dict$get, b, vars);
							if (_v54.$ === 'Nothing') {
								return _Utils_Tuple2(
									A3($mdgriffith$elm_codegen$Internal$Compiler$addInference, b, one, vars),
									$elm$core$Result$Ok(one));
							} else {
								var foundTwo = _v54.a;
								var $temp$aliases = aliases,
									$temp$vars = vars,
									$temp$one = one,
									$temp$two = foundTwo;
								aliases = $temp$aliases;
								vars = $temp$vars;
								one = $temp$one;
								two = $temp$two;
								continue unifiable;
							}
						case 'FunctionTypeAnnotation':
							var twoA = two.a;
							var twoB = two.b;
							var _v55 = A4(
								$mdgriffith$elm_codegen$Internal$Compiler$unifiable,
								aliases,
								vars,
								$mdgriffith$elm_codegen$Internal$Compiler$denode(oneA),
								$mdgriffith$elm_codegen$Internal$Compiler$denode(twoA));
							if (_v55.b.$ === 'Ok') {
								var aVars = _v55.a;
								var unifiedA = _v55.b.a;
								var _v56 = A4(
									$mdgriffith$elm_codegen$Internal$Compiler$unifiable,
									aliases,
									aVars,
									$mdgriffith$elm_codegen$Internal$Compiler$denode(oneB),
									$mdgriffith$elm_codegen$Internal$Compiler$denode(twoB));
								if (_v56.b.$ === 'Ok') {
									var bVars = _v56.a;
									var unifiedB = _v56.b.a;
									return _Utils_Tuple2(
										bVars,
										$elm$core$Result$Ok(
											A2(
												$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
												$mdgriffith$elm_codegen$Internal$Compiler$nodify(unifiedA),
												$mdgriffith$elm_codegen$Internal$Compiler$nodify(unifiedB))));
								} else {
									var otherwise = _v56;
									return otherwise;
								}
							} else {
								var otherwise = _v55;
								return otherwise;
							}
						default:
							return _Utils_Tuple2(
								vars,
								$elm$core$Result$Err(
									A2($mdgriffith$elm_codegen$Internal$Compiler$UnableToUnify, one, two)));
					}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$unifiableFields = F5(
	function (aliases, vars, one, two, unified) {
		unifiableFields:
		while (true) {
			var _v13 = _Utils_Tuple2(one, two);
			if (!_v13.a.b) {
				if (!_v13.b.b) {
					return _Utils_Tuple2(
						vars,
						$elm$core$Result$Ok(
							$mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
								$elm$core$List$reverse(unified))));
				} else {
					return _Utils_Tuple2(
						vars,
						$elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$MismatchedTypeVariables));
				}
			} else {
				var _v14 = _v13.a;
				var oneX = _v14.a;
				var oneRemain = _v14.b;
				var twoFields = _v13.b;
				var _v15 = $mdgriffith$elm_codegen$Internal$Compiler$denode(oneX);
				var oneFieldName = _v15.a;
				var oneFieldVal = _v15.b;
				var oneName = $mdgriffith$elm_codegen$Internal$Compiler$denode(oneFieldName);
				var oneVal = $mdgriffith$elm_codegen$Internal$Compiler$denode(oneFieldVal);
				var _v16 = A4($mdgriffith$elm_codegen$Internal$Compiler$getField, oneName, oneVal, twoFields, _List_Nil);
				if (_v16.$ === 'Ok') {
					var _v17 = _v16.a;
					var matchingFieldVal = _v17.a;
					var remainingTwo = _v17.b;
					var _v18 = A4($mdgriffith$elm_codegen$Internal$Compiler$unifiable, aliases, vars, oneVal, matchingFieldVal);
					var newVars = _v18.a;
					var unifiedFieldResult = _v18.b;
					if (unifiedFieldResult.$ === 'Ok') {
						var unifiedField = unifiedFieldResult.a;
						var $temp$aliases = aliases,
							$temp$vars = newVars,
							$temp$one = oneRemain,
							$temp$two = remainingTwo,
							$temp$unified = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(oneName),
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(unifiedField)),
							unified);
						aliases = $temp$aliases;
						vars = $temp$vars;
						one = $temp$one;
						two = $temp$two;
						unified = $temp$unified;
						continue unifiableFields;
					} else {
						var err = unifiedFieldResult.a;
						return _Utils_Tuple2(
							newVars,
							$elm$core$Result$Err(err));
					}
				} else {
					var notFound = _v16.a;
					return _Utils_Tuple2(
						vars,
						$elm$core$Result$Err(notFound));
				}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$unifiableLists = F5(
	function (aliases, vars, one, two, unified) {
		unifiableLists:
		while (true) {
			var _v6 = _Utils_Tuple2(one, two);
			_v6$3:
			while (true) {
				if (!_v6.a.b) {
					if (!_v6.b.b) {
						return _Utils_Tuple2(
							vars,
							$elm$core$Result$Ok(
								$mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
									$elm$core$List$reverse(unified))));
					} else {
						break _v6$3;
					}
				} else {
					if (_v6.b.b) {
						if ((!_v6.a.b.b) && (!_v6.b.b.b)) {
							var _v7 = _v6.a;
							var oneX = _v7.a;
							var _v8 = _v6.b;
							var twoX = _v8.a;
							var _v9 = A4(
								$mdgriffith$elm_codegen$Internal$Compiler$unifiable,
								aliases,
								vars,
								$mdgriffith$elm_codegen$Internal$Compiler$denode(oneX),
								$mdgriffith$elm_codegen$Internal$Compiler$denode(twoX));
							if (_v9.b.$ === 'Ok') {
								var newVars = _v9.a;
								var un = _v9.b.a;
								return _Utils_Tuple2(
									newVars,
									$elm$core$Result$Ok(
										$mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
											$elm$core$List$reverse(
												A2($elm$core$List$cons, un, unified)))));
							} else {
								var newVars = _v9.a;
								var err = _v9.b.a;
								return _Utils_Tuple2(
									newVars,
									$elm$core$Result$Err(err));
							}
						} else {
							var _v10 = _v6.a;
							var oneX = _v10.a;
							var oneRemain = _v10.b;
							var _v11 = _v6.b;
							var twoX = _v11.a;
							var twoRemain = _v11.b;
							var _v12 = A4(
								$mdgriffith$elm_codegen$Internal$Compiler$unifiable,
								aliases,
								vars,
								$mdgriffith$elm_codegen$Internal$Compiler$denode(oneX),
								$mdgriffith$elm_codegen$Internal$Compiler$denode(twoX));
							if (_v12.b.$ === 'Ok') {
								var newVars = _v12.a;
								var un = _v12.b.a;
								var $temp$aliases = aliases,
									$temp$vars = newVars,
									$temp$one = oneRemain,
									$temp$two = twoRemain,
									$temp$unified = A2($elm$core$List$cons, un, unified);
								aliases = $temp$aliases;
								vars = $temp$vars;
								one = $temp$one;
								two = $temp$two;
								unified = $temp$unified;
								continue unifiableLists;
							} else {
								var newVars = _v12.a;
								var err = _v12.b.a;
								return _Utils_Tuple2(
									vars,
									$elm$core$Result$Err(err));
							}
						}
					} else {
						break _v6$3;
					}
				}
			}
			return _Utils_Tuple2(
				vars,
				$elm$core$Result$Err($mdgriffith$elm_codegen$Internal$Compiler$MismatchedTypeVariables));
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$unifyWithAlias = F5(
	function (aliases, vars, typename, typeVars, typeToUnifyWith) {
		var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$getAlias, typename, aliases);
		if (_v0.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var foundAlias = _v0.a;
			var fullAliasedType = function () {
				var _v3 = foundAlias.variables;
				if (!_v3.b) {
					return foundAlias.target;
				} else {
					var makeAliasVarCache = F2(
						function (varName, _v5) {
							var varType = _v5.b;
							return _Utils_Tuple2(varName, varType);
						});
					var _v4 = A3(
						$mdgriffith$elm_codegen$Internal$Compiler$resolveVariables,
						$elm$core$Set$empty,
						$elm$core$Dict$fromList(
							A3($elm$core$List$map2, makeAliasVarCache, foundAlias.variables, typeVars)),
						foundAlias.target);
					if (_v4.$ === 'Ok') {
						var resolvedType = _v4.a;
						return resolvedType;
					} else {
						return foundAlias.target;
					}
				}
			}();
			var _v1 = A4($mdgriffith$elm_codegen$Internal$Compiler$unifiable, aliases, vars, fullAliasedType, typeToUnifyWith);
			var returnedVars = _v1.a;
			var unifiedResult = _v1.b;
			if (unifiedResult.$ === 'Ok') {
				var finalInference = unifiedResult.a;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(
						returnedVars,
						$elm$core$Result$Ok(fullAliasedType)));
			} else {
				var err = unifiedResult.a;
				return $elm$core$Maybe$Nothing;
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$applyTypeHelper = F4(
	function (aliases, cache, fn, args) {
		applyTypeHelper:
		while (true) {
			switch (fn.$) {
				case 'FunctionTypeAnnotation':
					var one = fn.a;
					var two = fn.b;
					if (!args.b) {
						return $elm$core$Result$Ok(
							{aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, inferences: cache, type_: fn});
					} else {
						var top = args.a;
						var rest = args.b;
						var _v2 = A4(
							$mdgriffith$elm_codegen$Internal$Compiler$unifiable,
							aliases,
							cache,
							$mdgriffith$elm_codegen$Internal$Compiler$denode(one),
							top);
						if (_v2.b.$ === 'Ok') {
							var variableCache = _v2.a;
							var $temp$aliases = aliases,
								$temp$cache = variableCache,
								$temp$fn = $mdgriffith$elm_codegen$Internal$Compiler$denode(two),
								$temp$args = rest;
							aliases = $temp$aliases;
							cache = $temp$cache;
							fn = $temp$fn;
							args = $temp$args;
							continue applyTypeHelper;
						} else {
							var varCache = _v2.a;
							var err = _v2.b.a;
							return $elm$core$Result$Err(
								_List_fromArray(
									[err]));
						}
					}
				case 'GenericType':
					var varName = fn.a;
					if (!args.b) {
						return $elm$core$Result$Ok(
							{aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, inferences: cache, type_: fn});
					} else {
						var resultType = $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(varName + '_result');
						return $elm$core$Result$Ok(
							{
								aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
								inferences: A3(
									$mdgriffith$elm_codegen$Internal$Compiler$addInference,
									varName,
									A2($mdgriffith$elm_codegen$Internal$Compiler$makeFunction, resultType, args),
									cache),
								type_: resultType
							});
					}
				default:
					var _final = fn;
					if (!args.b) {
						return $elm$core$Result$Ok(
							{aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, inferences: cache, type_: fn});
					} else {
						return $elm$core$Result$Err(
							_List_fromArray(
								[
									A2($mdgriffith$elm_codegen$Internal$Compiler$FunctionAppliedToTooManyArgs, _final, args)
								]));
					}
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$mergeInferences = F2(
	function (one, two) {
		return A6(
			$elm$core$Dict$merge,
			$elm$core$Dict$insert,
			F4(
				function (key, oneVal, twoVal, d) {
					if (oneVal.$ === 'GenericRecord') {
						var recordName = oneVal.a;
						var _v1 = oneVal.b;
						var oneRange = _v1.a;
						var recordDefinition = _v1.b;
						if (twoVal.$ === 'GenericRecord') {
							var twoRecordName = twoVal.a;
							var _v3 = twoVal.b;
							var twoRange = _v3.a;
							var twoRecordDefinition = _v3.b;
							return A3(
								$elm$core$Dict$insert,
								key,
								A2(
									$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
									recordName,
									A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										oneRange,
										_Utils_ap(recordDefinition, twoRecordDefinition))),
								d);
						} else {
							return A3($elm$core$Dict$insert, key, oneVal, d);
						}
					} else {
						return A3($elm$core$Dict$insert, key, oneVal, d);
					}
				}),
			$elm$core$Dict$insert,
			one,
			two,
			$elm$core$Dict$empty);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$mergeArgInferences = F3(
	function (expressions, annotations, inferences) {
		mergeArgInferences:
		while (true) {
			if (!expressions.b) {
				return $elm$core$Result$Ok(
					{
						inferences: inferences,
						types: $elm$core$List$reverse(annotations)
					});
			} else {
				var top = expressions.a;
				var remain = expressions.b;
				var _v1 = top.annotation;
				if (_v1.$ === 'Ok') {
					var ann = _v1.a;
					var $temp$expressions = remain,
						$temp$annotations = A2($elm$core$List$cons, ann.type_, annotations),
						$temp$inferences = A2($mdgriffith$elm_codegen$Internal$Compiler$mergeInferences, inferences, ann.inferences);
					expressions = $temp$expressions;
					annotations = $temp$annotations;
					inferences = $temp$inferences;
					continue mergeArgInferences;
				} else {
					var err = _v1.a;
					return $elm$core$Result$Err(err);
				}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$applyType = F3(
	function (index, annotation, args) {
		if (annotation.$ === 'Err') {
			var err = annotation.a;
			return $elm$core$Result$Err(err);
		} else {
			var fnAnnotation = annotation.a;
			if ($mdgriffith$elm_codegen$Internal$Index$typecheck(index)) {
				var _v1 = A3($mdgriffith$elm_codegen$Internal$Compiler$mergeArgInferences, args, _List_Nil, fnAnnotation.inferences);
				if (_v1.$ === 'Ok') {
					var mergedArgs = _v1.a;
					return A4($mdgriffith$elm_codegen$Internal$Compiler$applyTypeHelper, fnAnnotation.aliases, mergedArgs.inferences, fnAnnotation.type_, mergedArgs.types);
				} else {
					var err = _v1.a;
					return $elm$core$Result$Err(err);
				}
			} else {
				return $elm$core$Result$Err(_List_Nil);
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$getImports = function (exp) {
	return exp.imports;
};
var $mdgriffith$elm_codegen$Internal$Compiler$parens = function (expr) {
	switch (expr.$) {
		case 'UnitExpr':
			return expr;
		case 'Integer':
			var i = expr.a;
			return expr;
		case 'Literal':
			return expr;
		case 'Hex':
			return expr;
		case 'Floatable':
			return expr;
		case 'TupledExpression':
			return expr;
		case 'ParenthesizedExpression':
			return expr;
		case 'CharLiteral':
			return expr;
		case 'ListExpr':
			return expr;
		case 'FunctionOrValue':
			return expr;
		case 'RecordAccessFunction':
			return expr;
		case 'RecordUpdateExpression':
			return expr;
		case 'RecordExpr':
			return expr;
		case 'LambdaExpression':
			return expr;
		default:
			return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
				$mdgriffith$elm_codegen$Internal$Compiler$nodify(expr));
	}
};
var $mdgriffith$elm_codegen$Internal$Index$next = function (_v0) {
	var top = _v0.a;
	var tail = _v0.b;
	var scope = _v0.c;
	var check = _v0.d;
	return A4($mdgriffith$elm_codegen$Internal$Index$Index, top + 1, tail, scope, check);
};
var $mdgriffith$elm_codegen$Internal$Compiler$threadHelper = F3(
	function (index, exps, rendered) {
		threadHelper:
		while (true) {
			if (!exps.b) {
				return $elm$core$List$reverse(rendered);
			} else {
				var toExpDetails = exps.a.a;
				var remain = exps.b;
				var $temp$index = $mdgriffith$elm_codegen$Internal$Index$next(index),
					$temp$exps = remain,
					$temp$rendered = A2(
					$elm$core$List$cons,
					toExpDetails(index),
					rendered);
				index = $temp$index;
				exps = $temp$exps;
				rendered = $temp$rendered;
				continue threadHelper;
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$thread = F2(
	function (index, exps) {
		return A3($mdgriffith$elm_codegen$Internal$Compiler$threadHelper, index, exps, _List_Nil);
	});
var $mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails = F2(
	function (index, _v0) {
		var toExp = _v0.a;
		return _Utils_Tuple2(
			$mdgriffith$elm_codegen$Internal$Index$next(index),
			toExp(index));
	});
var $mdgriffith$elm_codegen$Elm$apply = F2(
	function (fnExp, argExpressions) {
		return $mdgriffith$elm_codegen$Internal$Compiler$expression(
			function (index) {
				var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, index, fnExp);
				var annotationIndex = _v0.a;
				var fnDetails = _v0.b;
				var args = A2($mdgriffith$elm_codegen$Internal$Compiler$thread, annotationIndex, argExpressions);
				return {
					annotation: A3($mdgriffith$elm_codegen$Internal$Compiler$applyType, index, fnDetails.annotation, args),
					expression: $stil4m$elm_syntax$Elm$Syntax$Expression$Application(
						$mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
							A2(
								$elm$core$List$cons,
								fnDetails.expression,
								A2(
									$elm$core$List$map,
									A2(
										$elm$core$Basics$composeL,
										$mdgriffith$elm_codegen$Internal$Compiler$parens,
										function ($) {
											return $.expression;
										}),
									args)))),
					imports: _Utils_ap(
						fnDetails.imports,
						A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getImports, args))
				};
			});
	});
var $mdgriffith$elm_codegen$Elm$fn2 = F3(
	function (_v0, _v1, toExpression) {
		var oneBaseName = _v0.a;
		var maybeOneType = _v0.b;
		var twoBaseName = _v1.a;
		var maybeTwoType = _v1.b;
		return $mdgriffith$elm_codegen$Internal$Compiler$expression(
			function (index) {
				var one = A3($mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType, index, oneBaseName, maybeOneType);
				var two = A3($mdgriffith$elm_codegen$Internal$Compiler$toVarMaybeType, one.index, twoBaseName, maybeTwoType);
				var _v2 = A2(
					$mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails,
					two.index,
					A2(toExpression, one.val, two.val));
				var newIndex_ = _v2.a;
				var _return = _v2.b;
				return {
					annotation: function () {
						var _v3 = _return.annotation;
						if (_v3.$ === 'Err') {
							var err = _v3.a;
							return _return.annotation;
						} else {
							var returnAnnotation = _v3.a;
							return $elm$core$Result$Ok(
								{
									aliases: returnAnnotation.aliases,
									inferences: returnAnnotation.inferences,
									type_: A2(
										$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
										$mdgriffith$elm_codegen$Internal$Compiler$nodify(one.type_),
										$mdgriffith$elm_codegen$Internal$Compiler$nodify(
											A2(
												$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
												$mdgriffith$elm_codegen$Internal$Compiler$nodify(two.type_),
												$mdgriffith$elm_codegen$Internal$Compiler$nodify(returnAnnotation.type_))))
								});
						}
					}(),
					expression: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
						{
							args: _List_fromArray(
								[
									$mdgriffith$elm_codegen$Internal$Compiler$nodify(
									$stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(one.name)),
									$mdgriffith$elm_codegen$Internal$Compiler$nodify(
									$stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(two.name))
								]),
							expression: $mdgriffith$elm_codegen$Internal$Compiler$nodify(_return.expression)
						}),
					imports: _return.imports
				};
			});
	});
var $mdgriffith$elm_codegen$Internal$Types$nodify = function (exp) {
	return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, exp);
};
var $mdgriffith$elm_codegen$Internal$Types$bool = A2(
	$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
	$mdgriffith$elm_codegen$Internal$Types$nodify(
		_Utils_Tuple2(_List_Nil, 'Bool')),
	_List_Nil);
var $mdgriffith$elm_codegen$Elm$bool = function (on) {
	return $mdgriffith$elm_codegen$Internal$Compiler$Expression(
		function (_v0) {
			return {
				annotation: $elm$core$Result$Ok(
					{aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, inferences: $elm$core$Dict$empty, type_: $mdgriffith$elm_codegen$Internal$Types$bool}),
				expression: A2(
					$stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue,
					_List_Nil,
					on ? 'True' : 'False'),
				imports: _List_Nil
			};
		});
};
var $mdgriffith$elm_codegen$Elm$Annotation$typed = F3(
	function (mod, name, args) {
		return $mdgriffith$elm_codegen$Internal$Compiler$Annotation(
			{
				aliases: A3(
					$elm$core$List$foldl,
					F2(
						function (ann, aliases) {
							return A2(
								$mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
								$mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann),
								aliases);
						}),
					$mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
					args),
				annotation: A2(
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
					$mdgriffith$elm_codegen$Internal$Compiler$nodify(
						_Utils_Tuple2(mod, name)),
					$mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
						A2($elm$core$List$map, $mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation, args))),
				imports: A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports, args)
			});
	});
var $mdgriffith$elm_codegen$Elm$Annotation$bool = A3($mdgriffith$elm_codegen$Elm$Annotation$typed, _List_Nil, 'Bool', _List_Nil);
var $mdgriffith$elm_codegen$Elm$Annotation$string = A3($mdgriffith$elm_codegen$Elm$Annotation$typed, _List_Nil, 'String', _List_Nil);
var $mdgriffith$elm_codegen$Elm$Annotation$unit = $mdgriffith$elm_codegen$Internal$Compiler$Annotation(
	{aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, annotation: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit, imports: _List_Nil});
var $mdgriffith$elm_codegen$Elm$Annotation$var = function (a) {
	return $mdgriffith$elm_codegen$Internal$Compiler$Annotation(
		{
			aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
			annotation: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
				$mdgriffith$elm_codegen$Internal$Format$formatValue(a)),
			imports: _List_Nil
		});
};
var $author$project$Gen$Nrpc$call_ = {
	request: F5(
		function (requestArg, requestArg0, requestArg1, requestArg2, requestArg3) {
			return A2(
				$mdgriffith$elm_codegen$Elm$apply,
				$mdgriffith$elm_codegen$Elm$value(
					{
						annotation: $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_codegen$Elm$Annotation$function,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_codegen$Elm$Annotation$function,
										_List_fromArray(
											[
												$mdgriffith$elm_codegen$Elm$Annotation$var('arg')
											]),
										A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Encoder', _List_Nil)),
										A3(
										$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
										_List_Nil,
										'Decoder',
										_List_fromArray(
											[
												$mdgriffith$elm_codegen$Elm$Annotation$var('result')
											])),
										$mdgriffith$elm_codegen$Elm$Annotation$string,
										$mdgriffith$elm_codegen$Elm$Annotation$var('arg'),
										A2(
										$mdgriffith$elm_codegen$Elm$Annotation$function,
										_List_fromArray(
											[
												A3(
												$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
												_List_Nil,
												'Result',
												_List_fromArray(
													[
														A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Error', _List_Nil),
														$mdgriffith$elm_codegen$Elm$Annotation$var('result')
													]))
											]),
										$mdgriffith$elm_codegen$Elm$Annotation$var('msg'))
									]),
								A3(
									$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
									_List_fromArray(
										['Nats']),
									'Effect',
									_List_fromArray(
										[
											A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Bytes', _List_Nil),
											$mdgriffith$elm_codegen$Elm$Annotation$var('msg')
										])))),
						importFrom: _List_fromArray(
							['Nrpc']),
						name: 'request'
					}),
				_List_fromArray(
					[requestArg, requestArg0, requestArg1, requestArg2, requestArg3]));
		}),
	requestNoReply: F3(
		function (requestNoReplyArg, requestNoReplyArg0, requestNoReplyArg1) {
			return A2(
				$mdgriffith$elm_codegen$Elm$apply,
				$mdgriffith$elm_codegen$Elm$value(
					{
						annotation: $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_codegen$Elm$Annotation$function,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_codegen$Elm$Annotation$function,
										_List_fromArray(
											[
												$mdgriffith$elm_codegen$Elm$Annotation$var('arg')
											]),
										A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Encoder', _List_Nil)),
										$mdgriffith$elm_codegen$Elm$Annotation$string,
										$mdgriffith$elm_codegen$Elm$Annotation$var('arg')
									]),
								A3(
									$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
									_List_fromArray(
										['Nats']),
									'Effect',
									_List_fromArray(
										[
											A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Bytes', _List_Nil),
											$mdgriffith$elm_codegen$Elm$Annotation$var('msg')
										])))),
						importFrom: _List_fromArray(
							['Nrpc']),
						name: 'requestNoReply'
					}),
				_List_fromArray(
					[requestNoReplyArg, requestNoReplyArg0, requestNoReplyArg1]));
		}),
	requestVoidReply: F4(
		function (requestVoidReplyArg, requestVoidReplyArg0, requestVoidReplyArg1, requestVoidReplyArg2) {
			return A2(
				$mdgriffith$elm_codegen$Elm$apply,
				$mdgriffith$elm_codegen$Elm$value(
					{
						annotation: $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_codegen$Elm$Annotation$function,
								_List_fromArray(
									[
										A2(
										$mdgriffith$elm_codegen$Elm$Annotation$function,
										_List_fromArray(
											[
												$mdgriffith$elm_codegen$Elm$Annotation$var('arg')
											]),
										A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Encoder', _List_Nil)),
										$mdgriffith$elm_codegen$Elm$Annotation$string,
										$mdgriffith$elm_codegen$Elm$Annotation$var('arg'),
										A2(
										$mdgriffith$elm_codegen$Elm$Annotation$function,
										_List_fromArray(
											[
												A3(
												$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
												_List_Nil,
												'Result',
												_List_fromArray(
													[
														A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Error', _List_Nil),
														$mdgriffith$elm_codegen$Elm$Annotation$unit
													]))
											]),
										$mdgriffith$elm_codegen$Elm$Annotation$var('msg'))
									]),
								A3(
									$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
									_List_fromArray(
										['Nats']),
									'Effect',
									_List_fromArray(
										[
											A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Bytes', _List_Nil),
											$mdgriffith$elm_codegen$Elm$Annotation$var('msg')
										])))),
						importFrom: _List_fromArray(
							['Nrpc']),
						name: 'requestVoidReply'
					}),
				_List_fromArray(
					[requestVoidReplyArg, requestVoidReplyArg0, requestVoidReplyArg1, requestVoidReplyArg2]));
		}),
	subscribeToNoRequestMethod: F3(
		function (subscribeToNoRequestMethodArg, subscribeToNoRequestMethodArg0, subscribeToNoRequestMethodArg1) {
			return A2(
				$mdgriffith$elm_codegen$Elm$apply,
				$mdgriffith$elm_codegen$Elm$value(
					{
						annotation: $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_codegen$Elm$Annotation$function,
								_List_fromArray(
									[
										$mdgriffith$elm_codegen$Elm$Annotation$string,
										A3(
										$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
										_List_Nil,
										'Decoder',
										_List_fromArray(
											[
												$mdgriffith$elm_codegen$Elm$Annotation$var('a')
											])),
										A2(
										$mdgriffith$elm_codegen$Elm$Annotation$function,
										_List_fromArray(
											[
												A3(
												$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
												_List_Nil,
												'Result',
												_List_fromArray(
													[
														A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Error', _List_Nil),
														$mdgriffith$elm_codegen$Elm$Annotation$var('a')
													]))
											]),
										$mdgriffith$elm_codegen$Elm$Annotation$var('msg'))
									]),
								A3(
									$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
									_List_fromArray(
										['Nats']),
									'Sub',
									_List_fromArray(
										[
											A3($mdgriffith$elm_codegen$Elm$Annotation$namedWith, _List_Nil, 'Bytes', _List_Nil),
											$mdgriffith$elm_codegen$Elm$Annotation$var('msg')
										])))),
						importFrom: _List_fromArray(
							['Nrpc']),
						name: 'subscribeToNoRequestMethod'
					}),
				_List_fromArray(
					[subscribeToNoRequestMethodArg, subscribeToNoRequestMethodArg0, subscribeToNoRequestMethodArg1]));
		})
};
var $elm$core$Char$toLower = _Char_toLower;
var $elm_community$string_extra$String$Extra$decapitalize = function (word) {
	return A2($elm_community$string_extra$String$Extra$changeCase, $elm$core$Char$toLower, word);
};
var $mdgriffith$elm_codegen$Elm$function = F2(
	function (initialArgList, toFullExpression) {
		if (!initialArgList.b) {
			return toFullExpression(_List_Nil);
		} else {
			return $mdgriffith$elm_codegen$Internal$Compiler$expression(
				function (index) {
					var args = A3(
						$elm$core$List$foldl,
						F2(
							function (_v5, found) {
								var nameBase = _v5.a;
								var maybeType = _v5.b;
								var argType = A2(
									$elm$core$Maybe$withDefault,
									$mdgriffith$elm_codegen$Internal$Compiler$Annotation(
										{
											aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
											annotation: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
												A2($mdgriffith$elm_codegen$Internal$Index$protectTypeName, nameBase, found.index)),
											imports: _List_Nil
										}),
									maybeType);
								var _v6 = A2($mdgriffith$elm_codegen$Internal$Index$getName, nameBase, found.index);
								var name = _v6.a;
								var newIndex = _v6.b;
								var arg = $mdgriffith$elm_codegen$Elm$value(
									{
										annotation: $elm$core$Maybe$Just(argType),
										importFrom: _List_Nil,
										name: name
									});
								return {
									args: A2($elm$core$List$cons, arg, found.args),
									index: newIndex,
									names: A2($elm$core$List$cons, name, found.names),
									types: A2(
										$elm$core$List$cons,
										$mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(argType),
										found.types)
								};
							}),
						{args: _List_Nil, index: index, names: _List_Nil, types: _List_Nil},
						initialArgList);
					var fullExpression = toFullExpression(
						$elm$core$List$reverse(args.args));
					var expr = function () {
						var toExpr = fullExpression.a;
						return toExpr(index);
					}();
					return {
						annotation: function () {
							var _v1 = expr.annotation;
							if (_v1.$ === 'Err') {
								var err = _v1.a;
								return $elm$core$Result$Err(err);
							} else {
								var _return = _v1.a;
								return $elm$core$Result$Ok(
									{
										aliases: A3(
											$elm$core$List$foldl,
											F2(
												function (_v2, aliases) {
													var maybeAnn = _v2.b;
													if (maybeAnn.$ === 'Nothing') {
														return aliases;
													} else {
														var ann = maybeAnn.a;
														return A2(
															$mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
															$mdgriffith$elm_codegen$Internal$Compiler$getAliases(ann),
															aliases);
													}
												}),
											_return.aliases,
											initialArgList),
										inferences: _return.inferences,
										type_: A3(
											$elm$core$List$foldl,
											F2(
												function (ann, fnbody) {
													return A2(
														$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
														$mdgriffith$elm_codegen$Internal$Compiler$nodify(ann),
														$mdgriffith$elm_codegen$Internal$Compiler$nodify(fnbody));
												}),
											_return.type_,
											args.types)
									});
							}
						}(),
						expression: $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
							{
								args: A3(
									$elm$core$List$foldl,
									F2(
										function (n, names) {
											return A2(
												$elm$core$List$cons,
												$mdgriffith$elm_codegen$Internal$Compiler$nodify(
													$stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern(n)),
												names);
										}),
									_List_Nil,
									args.names),
								expression: $mdgriffith$elm_codegen$Internal$Compiler$nodify(expr.expression)
							}),
						imports: expr.imports
					};
				});
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess = F2(
	function (a, b) {
		return {$: 'RecordAccess', a: a, b: b};
	});
var $mdgriffith$elm_codegen$Internal$Compiler$AttemptingGetOnTypeNameNotAnAlias = function (a) {
	return {$: 'AttemptingGetOnTypeNameNotAnAlias', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType = function (a) {
	return {$: 'AttemptingToGetOnIncorrectType', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList = F2(
	function (selector, fields) {
		getFieldFromList:
		while (true) {
			if (!fields.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var nodifiedTop = fields.a;
				var remain = fields.b;
				var _v1 = $mdgriffith$elm_codegen$Internal$Compiler$denode(nodifiedTop);
				var fieldname = _v1.a;
				var contents = _v1.b;
				if (_Utils_eq(
					$mdgriffith$elm_codegen$Internal$Compiler$denode(fieldname),
					selector)) {
					return $elm$core$Maybe$Just(
						$mdgriffith$elm_codegen$Internal$Compiler$denode(contents));
				} else {
					var $temp$selector = selector,
						$temp$fields = remain;
					selector = $temp$selector;
					fields = $temp$fields;
					continue getFieldFromList;
				}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$inferRecordField = F2(
	function (index, _v0) {
		var nameOfRecord = _v0.nameOfRecord;
		var fieldName = _v0.fieldName;
		var fieldType = $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType(
			$mdgriffith$elm_codegen$Internal$Format$formatValue(
				_Utils_ap(
					fieldName,
					$mdgriffith$elm_codegen$Internal$Index$indexToString(index))));
		return $elm$core$Result$Ok(
			{
				aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
				inferences: A3(
					$mdgriffith$elm_codegen$Internal$Compiler$addInference,
					nameOfRecord,
					A2(
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
						$mdgriffith$elm_codegen$Internal$Compiler$nodify(nameOfRecord),
						$mdgriffith$elm_codegen$Internal$Compiler$nodify(
							_List_fromArray(
								[
									$mdgriffith$elm_codegen$Internal$Compiler$nodify(
									_Utils_Tuple2(
										$mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName),
										$mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldType)))
								]))),
					$elm$core$Dict$empty),
				type_: fieldType
			});
	});
var $mdgriffith$elm_codegen$Internal$Compiler$resolveField = F5(
	function (index, type_, aliases, inferences, fieldName) {
		resolveField:
		while (true) {
			if ($mdgriffith$elm_codegen$Internal$Index$typecheck(index)) {
				switch (type_.$) {
					case 'Record':
						var fields = type_.a;
						var _v1 = A2($mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList, fieldName, fields);
						if (_v1.$ === 'Just') {
							var ann = _v1.a;
							return $elm$core$Result$Ok(
								{aliases: aliases, inferences: inferences, type_: ann});
						} else {
							return $elm$core$Result$Err(
								_List_fromArray(
									[
										$mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField(
										{
											existingFields: A2(
												$elm$core$List$map,
												A2(
													$elm$core$Basics$composeR,
													$mdgriffith$elm_codegen$Internal$Compiler$denode,
													A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $mdgriffith$elm_codegen$Internal$Compiler$denode)),
												fields),
											field: fieldName
										})
									]));
						}
					case 'GenericRecord':
						var name = type_.a;
						var fields = type_.b;
						var _v2 = A2(
							$mdgriffith$elm_codegen$Internal$Compiler$getFieldFromList,
							fieldName,
							$mdgriffith$elm_codegen$Internal$Compiler$denode(fields));
						if (_v2.$ === 'Just') {
							var ann = _v2.a;
							return $elm$core$Result$Ok(
								{aliases: aliases, inferences: inferences, type_: ann});
						} else {
							return $elm$core$Result$Err(
								_List_fromArray(
									[
										$mdgriffith$elm_codegen$Internal$Compiler$CouldNotFindField(
										{
											existingFields: A2(
												$elm$core$List$map,
												A2(
													$elm$core$Basics$composeR,
													$mdgriffith$elm_codegen$Internal$Compiler$denode,
													A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $mdgriffith$elm_codegen$Internal$Compiler$denode)),
												$mdgriffith$elm_codegen$Internal$Compiler$denode(fields)),
											field: fieldName
										})
									]));
						}
					case 'GenericType':
						var nameOfRecord = type_.a;
						return A2(
							$mdgriffith$elm_codegen$Internal$Compiler$inferRecordField,
							index,
							{fieldName: fieldName, nameOfRecord: nameOfRecord});
					case 'Typed':
						var nodedModAndName = type_.a;
						var vars = type_.b;
						var _v3 = A2($mdgriffith$elm_codegen$Internal$Compiler$getAlias, nodedModAndName, aliases);
						if (_v3.$ === 'Nothing') {
							return $elm$core$Result$Err(
								_List_fromArray(
									[
										$mdgriffith$elm_codegen$Internal$Compiler$AttemptingGetOnTypeNameNotAnAlias(
										{field: fieldName, on: type_})
									]));
						} else {
							var aliased = _v3.a;
							var $temp$index = index,
								$temp$type_ = aliased.target,
								$temp$aliases = aliases,
								$temp$inferences = inferences,
								$temp$fieldName = fieldName;
							index = $temp$index;
							type_ = $temp$type_;
							aliases = $temp$aliases;
							inferences = $temp$inferences;
							fieldName = $temp$fieldName;
							continue resolveField;
						}
					case 'Tupled':
						return $elm$core$Result$Err(
							_List_fromArray(
								[
									$mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType(
									{field: fieldName, on: type_})
								]));
					case 'Unit':
						return $elm$core$Result$Err(
							_List_fromArray(
								[
									$mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType(
									{field: fieldName, on: type_})
								]));
					default:
						return $elm$core$Result$Err(
							_List_fromArray(
								[
									$mdgriffith$elm_codegen$Internal$Compiler$AttemptingToGetOnIncorrectType(
									{field: fieldName, on: type_})
								]));
				}
			} else {
				return $elm$core$Result$Err(_List_Nil);
			}
		}
	});
var $mdgriffith$elm_codegen$Elm$get = F2(
	function (unformattedFieldName, recordExpression) {
		return $mdgriffith$elm_codegen$Internal$Compiler$Expression(
			function (index) {
				var fieldName = $mdgriffith$elm_codegen$Internal$Format$formatValue(unformattedFieldName);
				var _v0 = A2($mdgriffith$elm_codegen$Internal$Compiler$toExpressionDetails, index, recordExpression);
				var expr = _v0.b;
				return {
					annotation: function () {
						var _v1 = expr.annotation;
						if (_v1.$ === 'Ok') {
							var recordAnn = _v1.a;
							return A5($mdgriffith$elm_codegen$Internal$Compiler$resolveField, index, recordAnn.type_, recordAnn.aliases, recordAnn.inferences, fieldName);
						} else {
							var otherwise = _v1;
							return otherwise;
						}
					}(),
					expression: A2(
						$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess,
						$mdgriffith$elm_codegen$Internal$Compiler$nodify(expr.expression),
						$mdgriffith$elm_codegen$Internal$Compiler$nodify(fieldName)),
					imports: expr.imports
				};
			});
	});
var $mdgriffith$elm_codegen$Elm$Annotation$list = function (inner) {
	return A3(
		$mdgriffith$elm_codegen$Elm$Annotation$typed,
		_List_Nil,
		'List',
		_List_fromArray(
			[inner]));
};
var $author$project$Gen$String$join = F2(
	function (joinArg, joinArg0) {
		return A2(
			$mdgriffith$elm_codegen$Elm$apply,
			$mdgriffith$elm_codegen$Elm$value(
				{
					annotation: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_codegen$Elm$Annotation$function,
							_List_fromArray(
								[
									$mdgriffith$elm_codegen$Elm$Annotation$string,
									$mdgriffith$elm_codegen$Elm$Annotation$list($mdgriffith$elm_codegen$Elm$Annotation$string)
								]),
							$mdgriffith$elm_codegen$Elm$Annotation$string)),
					importFrom: _List_fromArray(
						['String']),
					name: 'join'
				}),
			_List_fromArray(
				[joinArg, joinArg0]));
	});
var $elm_community$list_extra$List$Extra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return $elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr = function (a) {
	return {$: 'ListExpr', a: a};
};
var $mdgriffith$elm_codegen$Internal$Compiler$MismatchedList = F2(
	function (a, b) {
		return {$: 'MismatchedList', a: a, b: b};
	});
var $mdgriffith$elm_codegen$Internal$Compiler$unifyHelper = F2(
	function (exps, existing) {
		unifyHelper:
		while (true) {
			if (!exps.b) {
				return $elm$core$Result$Ok(existing);
			} else {
				var top = exps.a;
				var remain = exps.b;
				var _v1 = top.annotation;
				if (_v1.$ === 'Ok') {
					var ann = _v1.a;
					var _v2 = A4($mdgriffith$elm_codegen$Internal$Compiler$unifiable, ann.aliases, ann.inferences, ann.type_, existing.type_);
					if (_v2.b.$ === 'Err') {
						var err = _v2.b.a;
						return $elm$core$Result$Err(
							_List_fromArray(
								[
									A2($mdgriffith$elm_codegen$Internal$Compiler$MismatchedList, ann.type_, existing.type_)
								]));
					} else {
						var cache = _v2.a;
						var _new = _v2.b.a;
						var $temp$exps = remain,
							$temp$existing = {
							aliases: existing.aliases,
							inferences: A2($mdgriffith$elm_codegen$Internal$Compiler$mergeInferences, existing.inferences, cache),
							type_: _new
						};
						exps = $temp$exps;
						existing = $temp$existing;
						continue unifyHelper;
					}
				} else {
					var err = _v1.a;
					return $elm$core$Result$Err(err);
				}
			}
		}
	});
var $mdgriffith$elm_codegen$Internal$Compiler$unify = function (exps) {
	if (!exps.b) {
		return $elm$core$Result$Ok(
			{
				aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
				inferences: $elm$core$Dict$empty,
				type_: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType('a')
			});
	} else {
		var top = exps.a;
		var remain = exps.b;
		var _v1 = top.annotation;
		if (_v1.$ === 'Ok') {
			var ann = _v1.a;
			return A2($mdgriffith$elm_codegen$Internal$Compiler$unifyHelper, remain, ann);
		} else {
			var err = _v1.a;
			return $elm$core$Result$Err(err);
		}
	}
};
var $mdgriffith$elm_codegen$Elm$list = function (exprs) {
	return $mdgriffith$elm_codegen$Internal$Compiler$expression(
		function (index) {
			var exprDetails = A2($mdgriffith$elm_codegen$Internal$Compiler$thread, index, exprs);
			return {
				annotation: A2(
					$elm$core$Result$map,
					function (inner) {
						return {
							aliases: inner.aliases,
							inferences: inner.inferences,
							type_: A2(
								$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(
									_Utils_Tuple2(_List_Nil, 'List')),
								_List_fromArray(
									[
										$mdgriffith$elm_codegen$Internal$Compiler$nodify(inner.type_)
									]))
						};
					},
					$mdgriffith$elm_codegen$Internal$Compiler$unify(exprDetails)),
				expression: $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.expression;
							},
							$mdgriffith$elm_codegen$Internal$Compiler$nodify),
						exprDetails)),
				imports: A2($elm$core$List$concatMap, $mdgriffith$elm_codegen$Internal$Compiler$getImports, exprDetails)
			};
		});
};
var $author$project$Generate$methodOptions = F2(
	function (fOptions, method) {
		var defaultSubject = function () {
			var _v0 = fOptions.nrpcServiceSubjectRule;
			switch (_v0.$) {
				case 'COPY':
					return method.name;
				case 'TOLOWER':
					return $elm$core$String$toLower(method.name);
				default:
					return method.name;
			}
		}();
		return A2(
			$elm$core$Maybe$withDefault,
			{noReply: method.outputType === '.nrpc.NoReply', noRequest: method.inputType === 'nrpc.NoRequest', streamedReply: false, subject: defaultSubject, subjectParams: _List_Nil},
			A2(
				$elm$core$Maybe$map,
				function (options) {
					return {
						noReply: method.outputType === '.nrpc.NoReply',
						noRequest: method.inputType === '.nrpc.NoRequest',
						streamedReply: options.nrpcStreamedReply,
						subject: (options.nrpcMethodSubject === '') ? defaultSubject : options.nrpcMethodSubject,
						subjectParams: options.nrpcMethodSubjectParams
					};
				},
				method.options));
	});
var $mdgriffith$elm_codegen$Elm$Annotation$record = function (fields) {
	return $mdgriffith$elm_codegen$Internal$Compiler$Annotation(
		{
			aliases: A3(
				$elm$core$List$foldl,
				F2(
					function (_v0, aliases) {
						var ann = _v0.b;
						return A2(
							$mdgriffith$elm_codegen$Internal$Compiler$mergeAliases,
							$mdgriffith$elm_codegen$Elm$Annotation$getAliases(ann),
							aliases);
					}),
				$mdgriffith$elm_codegen$Internal$Compiler$emptyAliases,
				fields),
			annotation: $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(
				$mdgriffith$elm_codegen$Internal$Compiler$nodifyAll(
					A2(
						$elm$core$List$map,
						function (_v1) {
							var name = _v1.a;
							var ann = _v1.b;
							return _Utils_Tuple2(
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(
									$mdgriffith$elm_codegen$Internal$Format$formatValue(name)),
								$mdgriffith$elm_codegen$Internal$Compiler$nodify(
									$mdgriffith$elm_codegen$Internal$Compiler$getInnerAnnotation(ann)));
						},
						fields))),
			imports: A2(
				$elm$core$List$concatMap,
				A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $mdgriffith$elm_codegen$Internal$Compiler$getAnnotationImports),
				fields)
		});
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Literal = function (a) {
	return {$: 'Literal', a: a};
};
var $mdgriffith$elm_codegen$Internal$Types$string = A2(
	$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
	$mdgriffith$elm_codegen$Internal$Types$nodify(
		_Utils_Tuple2(_List_Nil, 'String')),
	_List_Nil);
var $mdgriffith$elm_codegen$Elm$string = function (literal) {
	return $mdgriffith$elm_codegen$Internal$Compiler$Expression(
		function (_v0) {
			return {
				annotation: $elm$core$Result$Ok(
					{aliases: $mdgriffith$elm_codegen$Internal$Compiler$emptyAliases, inferences: $elm$core$Dict$empty, type_: $mdgriffith$elm_codegen$Internal$Types$string}),
				expression: $stil4m$elm_syntax$Elm$Syntax$Expression$Literal(literal),
				imports: _List_Nil
			};
		});
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$Generate$generateMethodDeclaration = F6(
	function (pbTypes, fOptions, fAPI, sOptions, sAPI, method) {
		var options = A2($author$project$Generate$methodOptions, fOptions, method);
		var subjectParams = function () {
			var _v10 = options.subjectParams;
			if (!_v10.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var params = _v10;
				var typename = $elm_community$string_extra$String$Extra$toSentenceCase(method.name) + '__SubjectParams';
				var annotation = $mdgriffith$elm_codegen$Elm$Annotation$record(
					A2(
						$elm$core$List$map,
						function (p) {
							return _Utils_Tuple2(p, $mdgriffith$elm_codegen$Elm$Annotation$string);
						},
						params));
				return $elm$core$Maybe$Just(
					{
						annotation: annotation,
						datatype: A4($mdgriffith$elm_codegen$Elm$Annotation$alias, _List_Nil, typename, _List_Nil, annotation),
						params: params,
						typename: typename
					});
			}
		}();
		var subjectArgs = A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					A2(
					$elm$core$Maybe$map,
					function (params) {
						return _Utils_Tuple2(
							'packageParams',
							$elm$core$Maybe$Just(params.datatype));
					},
					fAPI.subjectParams),
					A2(
					$elm$core$Maybe$map,
					function (params) {
						return _Utils_Tuple2(
							'serviceParams',
							$elm$core$Maybe$Just(params.datatype));
					},
					sAPI.subjectParams),
					A2(
					$elm$core$Maybe$map,
					function (params) {
						return _Utils_Tuple2(
							'params',
							$elm$core$Maybe$Just(params.datatype));
					},
					subjectParams)
				]));
		var fnName = $elm_community$string_extra$String$Extra$decapitalize(method.name);
		var subjectFnName = fnName + '__Subject';
		var subjectFn = $mdgriffith$elm_codegen$Elm$value(
			{
				annotation: $elm$core$Maybe$Just(
					A2(
						$mdgriffith$elm_codegen$Elm$Annotation$function,
						A2($elm$core$List$filterMap, $elm$core$Tuple$second, subjectArgs),
						$mdgriffith$elm_codegen$Elm$Annotation$string)),
				importFrom: _List_Nil,
				name: subjectFnName
			});
		return _Utils_ap(
			function () {
				if (subjectParams.$ === 'Nothing') {
					return _List_Nil;
				} else {
					var params = subjectParams.a;
					return _List_fromArray(
						[
							A2($mdgriffith$elm_codegen$Elm$alias, params.typename, params.annotation)
						]);
				}
			}(),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_codegen$Elm$declaration,
					subjectFnName,
					A2(
						$mdgriffith$elm_codegen$Elm$function,
						subjectArgs,
						function (args) {
							return A2(
								$author$project$Gen$String$join,
								$mdgriffith$elm_codegen$Elm$string('.'),
								$mdgriffith$elm_codegen$Elm$list(
									A2(
										$elm$core$List$cons,
										A2(
											$mdgriffith$elm_codegen$Elm$apply,
											sAPI.subject,
											function () {
												if (subjectParams.$ === 'Nothing') {
													return args;
												} else {
													return A2(
														$elm$core$List$take,
														$elm$core$List$length(args) - 1,
														args);
												}
											}()),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_codegen$Elm$string(options.subject),
											function () {
												var _v2 = options.subjectParams;
												if (!_v2.b) {
													return _List_Nil;
												} else {
													var params = _v2;
													var _v3 = $elm_community$list_extra$List$Extra$last(args);
													if (_v3.$ === 'Nothing') {
														return _List_Nil;
													} else {
														var p = _v3.a;
														return A2(
															$elm$core$List$map,
															function (n) {
																return A2($mdgriffith$elm_codegen$Elm$get, n, p);
															},
															params);
													}
												}
											}()))));
						})),
					((!options.noRequest) && (!options.noReply)) ? A2(
					$mdgriffith$elm_codegen$Elm$declaration,
					fnName,
					function () {
						var onResponseType = function (t) {
							return A2(
								$mdgriffith$elm_codegen$Elm$Annotation$function,
								_List_fromArray(
									[
										A3(
										$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
										_List_fromArray(
											['Result']),
										'Result',
										_List_fromArray(
											[
												A2(
												$mdgriffith$elm_codegen$Elm$Annotation$named,
												_List_fromArray(
													['Nrpc']),
												'Error'),
												t
											]))
									]),
								$mdgriffith$elm_codegen$Elm$Annotation$var('msg'));
						}(
							A2(
								$elm$core$Maybe$withDefault,
								$mdgriffith$elm_codegen$Elm$Annotation$bool,
								A2($elm$core$Dict$get, method.outputType, pbTypes.types)));
						return A2(
							$mdgriffith$elm_codegen$Elm$function,
							_Utils_ap(
								subjectArgs,
								_Utils_ap(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'onResponse',
											$elm$core$Maybe$Just(onResponseType))
										]),
									A2(
										$elm$core$Maybe$withDefault,
										_List_Nil,
										A2(
											$elm$core$Maybe$map,
											function (t) {
												return _List_fromArray(
													[
														_Utils_Tuple2(
														'input',
														$elm$core$Maybe$Just(t))
													]);
											},
											A2($elm$core$Dict$get, method.inputType, pbTypes.types))))),
							function (args) {
								var sArgs = A2(
									$elm$core$List$take,
									$elm$core$List$length(subjectArgs),
									args);
								var _v4 = A2(
									$elm$core$List$drop,
									$elm$core$List$length(subjectArgs),
									args);
								if ((_v4.b && _v4.b.b) && (!_v4.b.b.b)) {
									var rArg = _v4.a;
									var _v5 = _v4.b;
									var iArg = _v5.a;
									return A5(
										$author$project$Gen$Nrpc$call_.request,
										A2(
											$elm$core$Maybe$withDefault,
											A2(
												$mdgriffith$elm_codegen$Elm$fn,
												_Utils_Tuple2(
													'i',
													$elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$bool)),
												function (_v6) {
													return $mdgriffith$elm_codegen$Elm$bool(false);
												}),
											A2($elm$core$Dict$get, method.inputType, pbTypes.encoders)),
										A2(
											$elm$core$Maybe$withDefault,
											$mdgriffith$elm_codegen$Elm$bool(false),
											A2($elm$core$Dict$get, method.outputType, pbTypes.decoders)),
										A2(
											$mdgriffith$elm_codegen$Elm$apply,
											subjectFn,
											A2(
												$elm$core$List$take,
												$elm$core$List$length(subjectArgs),
												args)),
										iArg,
										rArg);
								} else {
									return $mdgriffith$elm_codegen$Elm$value(
										{
											annotation: $elm$core$Maybe$Just(
												A3(
													$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
													_List_fromArray(
														['Nats']),
													'Effect',
													_List_fromArray(
														[
															A2(
															$mdgriffith$elm_codegen$Elm$Annotation$named,
															_List_fromArray(
																['Bytes']),
															'Bytes'),
															$mdgriffith$elm_codegen$Elm$Annotation$var('msg')
														]))),
											importFrom: _List_fromArray(
												['Nats', 'Effect']),
											name: 'none'
										});
								}
							});
					}()) : (options.noRequest ? A2(
					$mdgriffith$elm_codegen$Elm$declaration,
					fnName,
					function () {
						var onResponseType = function (t) {
							return A2(
								$mdgriffith$elm_codegen$Elm$Annotation$function,
								_List_fromArray(
									[
										A3(
										$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
										_List_fromArray(
											['Result']),
										'Result',
										_List_fromArray(
											[
												A2(
												$mdgriffith$elm_codegen$Elm$Annotation$named,
												_List_fromArray(
													['Nrpc']),
												'Error'),
												t
											]))
									]),
								$mdgriffith$elm_codegen$Elm$Annotation$var('msg'));
						}(
							A2(
								$elm$core$Maybe$withDefault,
								$mdgriffith$elm_codegen$Elm$Annotation$bool,
								A2($elm$core$Dict$get, method.outputType, pbTypes.types)));
						return A2(
							$mdgriffith$elm_codegen$Elm$function,
							_Utils_ap(
								subjectArgs,
								_List_fromArray(
									[
										_Utils_Tuple2(
										'onResponse',
										$elm$core$Maybe$Just(onResponseType))
									])),
							function (args) {
								var sArgs = A2(
									$elm$core$List$take,
									$elm$core$List$length(subjectArgs),
									args);
								var _v7 = A2(
									$elm$core$List$drop,
									$elm$core$List$length(subjectArgs),
									args);
								if (_v7.b && (!_v7.b.b)) {
									var rArg = _v7.a;
									return A3(
										$author$project$Gen$Nrpc$call_.subscribeToNoRequestMethod,
										A2(
											$mdgriffith$elm_codegen$Elm$apply,
											subjectFn,
											A2(
												$elm$core$List$take,
												$elm$core$List$length(subjectArgs),
												args)),
										A2(
											$elm$core$Maybe$withDefault,
											$mdgriffith$elm_codegen$Elm$bool(false),
											A2($elm$core$Dict$get, method.outputType, pbTypes.decoders)),
										rArg);
								} else {
									return $mdgriffith$elm_codegen$Elm$value(
										{
											annotation: $elm$core$Maybe$Just(
												A3(
													$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
													_List_fromArray(
														['Nats']),
													'Effect',
													_List_fromArray(
														[
															A2(
															$mdgriffith$elm_codegen$Elm$Annotation$named,
															_List_fromArray(
																['Bytes']),
															'Bytes'),
															$mdgriffith$elm_codegen$Elm$Annotation$var('msg')
														]))),
											importFrom: _List_fromArray(
												['Nats', 'Effect']),
											name: 'none'
										});
								}
							});
					}()) : A2(
					$mdgriffith$elm_codegen$Elm$declaration,
					fnName,
					A2(
						$mdgriffith$elm_codegen$Elm$function,
						_Utils_ap(
							subjectArgs,
							A2(
								$elm$core$Maybe$withDefault,
								_List_Nil,
								A2(
									$elm$core$Maybe$map,
									function (t) {
										return _List_fromArray(
											[
												_Utils_Tuple2(
												'input',
												$elm$core$Maybe$Just(t))
											]);
									},
									A2($elm$core$Dict$get, method.inputType, pbTypes.types)))),
						function (args) {
							var sArgs = A2(
								$elm$core$List$take,
								$elm$core$List$length(subjectArgs),
								args);
							var _v8 = A2(
								$elm$core$List$drop,
								$elm$core$List$length(subjectArgs),
								args);
							if (_v8.b && (!_v8.b.b)) {
								var iArg = _v8.a;
								return A3(
									$author$project$Gen$Nrpc$call_.requestNoReply,
									A2(
										$elm$core$Maybe$withDefault,
										A2(
											$mdgriffith$elm_codegen$Elm$fn,
											_Utils_Tuple2(
												'i',
												$elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$bool)),
											function (_v9) {
												return $mdgriffith$elm_codegen$Elm$bool(false);
											}),
										A2($elm$core$Dict$get, method.inputType, pbTypes.encoders)),
									A2(
										$mdgriffith$elm_codegen$Elm$apply,
										subjectFn,
										A2(
											$elm$core$List$take,
											$elm$core$List$length(subjectArgs),
											args)),
									iArg);
							} else {
								return $mdgriffith$elm_codegen$Elm$value(
									{
										annotation: $elm$core$Maybe$Just(
											A3(
												$mdgriffith$elm_codegen$Elm$Annotation$namedWith,
												_List_fromArray(
													['Nats']),
												'Effect',
												_List_fromArray(
													[
														A2(
														$mdgriffith$elm_codegen$Elm$Annotation$named,
														_List_fromArray(
															['Bytes']),
														'Bytes'),
														$mdgriffith$elm_codegen$Elm$Annotation$var('msg')
													]))),
										importFrom: _List_fromArray(
											['Nats', 'Effect']),
										name: 'none'
									});
							}
						})))
				]));
	});
var $author$project$Generate$serviceOptions = F2(
	function (fOptions, service) {
		var _default = function () {
			var _v0 = fOptions.nrpcServiceSubjectRule;
			switch (_v0.$) {
				case 'COPY':
					return service.name;
				case 'TOLOWER':
					return $elm$core$String$toLower(service.name);
				default:
					return service.name;
			}
		}();
		return A2(
			$elm$core$Maybe$withDefault,
			{subject: _default, subjectParams: _List_Nil},
			A2(
				$elm$core$Maybe$map,
				function (options) {
					return {
						subject: (options.nrpcServiceSubject === '') ? _default : options.nrpcServiceSubject,
						subjectParams: options.nrpcServiceSubjectParams
					};
				},
				service.options));
	});
var $author$project$Generate$generateServiceFile = F5(
	function (pbTypes, file, fOptions, fAPI, service) {
		var options = A2($author$project$Generate$serviceOptions, fOptions, service);
		var subjectParams = function () {
			var _v6 = options.subjectParams;
			if (!_v6.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var params = _v6;
				var annotation = $mdgriffith$elm_codegen$Elm$Annotation$record(
					A2(
						$elm$core$List$map,
						function (p) {
							return _Utils_Tuple2(p, $mdgriffith$elm_codegen$Elm$Annotation$string);
						},
						params));
				return $elm$core$Maybe$Just(
					{
						annotation: annotation,
						datatype: A4($mdgriffith$elm_codegen$Elm$Annotation$alias, _List_Nil, 'SubjectParams', _List_Nil, annotation),
						params: params
					});
			}
		}();
		var subjectArgs = A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					A2(
					$elm$core$Maybe$map,
					function (params) {
						return _Utils_Tuple2(
							'packageParams',
							$elm$core$Maybe$Just(params.datatype));
					},
					fAPI.subjectParams),
					A2(
					$elm$core$Maybe$map,
					function (params) {
						return _Utils_Tuple2(
							'params',
							$elm$core$Maybe$Just(params.datatype));
					},
					subjectParams)
				]));
		var serviceAPI = {
			subject: $mdgriffith$elm_codegen$Elm$value(
				{
					annotation: function () {
						if (!subjectArgs.b) {
							return $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$string);
						} else {
							var params = subjectArgs;
							return $elm$core$Maybe$Just(
								A2(
									$mdgriffith$elm_codegen$Elm$Annotation$function,
									A2($elm$core$List$filterMap, $elm$core$Tuple$second, params),
									$mdgriffith$elm_codegen$Elm$Annotation$string));
						}
					}(),
					importFrom: _List_Nil,
					name: 'subject'
				}),
			subjectParams: subjectParams
		};
		var module_path = _Utils_ap(
			fAPI.module_path,
			_List_fromArray(
				[service.name]));
		return A2(
			$mdgriffith$elm_codegen$Elm$file,
			module_path,
			_Utils_ap(
				function () {
					var _v0 = _Utils_Tuple2(fAPI.subjectParams, subjectParams);
					if (_v0.a.$ === 'Nothing') {
						if (_v0.b.$ === 'Nothing') {
							var _v1 = _v0.a;
							var _v2 = _v0.b;
							return _List_fromArray(
								[
									A2(
									$mdgriffith$elm_codegen$Elm$declaration,
									'subject',
									A2(
										$author$project$Gen$String$join,
										$mdgriffith$elm_codegen$Elm$string('.'),
										$mdgriffith$elm_codegen$Elm$list(
											_List_fromArray(
												[
													fAPI.subject,
													$mdgriffith$elm_codegen$Elm$string(options.subject)
												]))))
								]);
						} else {
							var _v3 = _v0.a;
							var params = _v0.b.a;
							return _List_fromArray(
								[
									A2($mdgriffith$elm_codegen$Elm$alias, 'SubjectParams', params.annotation),
									A2(
									$mdgriffith$elm_codegen$Elm$declaration,
									'subject',
									A2(
										$mdgriffith$elm_codegen$Elm$fn,
										_Utils_Tuple2(
											'params',
											$elm$core$Maybe$Just(params.datatype)),
										function (p) {
											return A2(
												$author$project$Gen$String$join,
												$mdgriffith$elm_codegen$Elm$string('.'),
												$mdgriffith$elm_codegen$Elm$list(
													A2(
														$elm$core$List$cons,
														fAPI.subject,
														A2(
															$elm$core$List$cons,
															$mdgriffith$elm_codegen$Elm$string(options.subject),
															A2(
																$elm$core$List$map,
																function (pname) {
																	return A2($mdgriffith$elm_codegen$Elm$get, pname, p);
																},
																params.params)))));
										}))
								]);
						}
					} else {
						if (_v0.b.$ === 'Nothing') {
							var pSubjectParams = _v0.a.a;
							var _v4 = _v0.b;
							return _List_fromArray(
								[
									A2(
									$mdgriffith$elm_codegen$Elm$declaration,
									'subject',
									A2(
										$mdgriffith$elm_codegen$Elm$fn,
										_Utils_Tuple2(
											'packageParams',
											$elm$core$Maybe$Just(pSubjectParams.datatype)),
										function (p) {
											return A2(
												$author$project$Gen$String$join,
												$mdgriffith$elm_codegen$Elm$string('.'),
												$mdgriffith$elm_codegen$Elm$list(
													_List_fromArray(
														[
															A2(
															$mdgriffith$elm_codegen$Elm$apply,
															fAPI.subject,
															_List_fromArray(
																[p])),
															$mdgriffith$elm_codegen$Elm$string(options.subject)
														])));
										}))
								]);
						} else {
							var pSubjectParams = _v0.a.a;
							var params = _v0.b.a;
							return _List_fromArray(
								[
									A2($mdgriffith$elm_codegen$Elm$alias, 'SubjectParams', params.annotation),
									A2(
									$mdgriffith$elm_codegen$Elm$declaration,
									'subject',
									A3(
										$mdgriffith$elm_codegen$Elm$fn2,
										_Utils_Tuple2(
											'packageParams',
											$elm$core$Maybe$Just(pSubjectParams.datatype)),
										_Utils_Tuple2(
											'params',
											$elm$core$Maybe$Just(params.datatype)),
										F2(
											function (p, s) {
												return A2(
													$author$project$Gen$String$join,
													$mdgriffith$elm_codegen$Elm$string('.'),
													$mdgriffith$elm_codegen$Elm$list(
														A2(
															$elm$core$List$cons,
															A2(
																$mdgriffith$elm_codegen$Elm$apply,
																fAPI.subject,
																_List_fromArray(
																	[p])),
															A2(
																$elm$core$List$cons,
																$mdgriffith$elm_codegen$Elm$string(options.subject),
																A2(
																	$elm$core$List$map,
																	function (pname) {
																		return A2($mdgriffith$elm_codegen$Elm$get, pname, s);
																	},
																	params.params)))));
											})))
								]);
						}
					}
				}(),
				A2(
					$elm$core$List$concatMap,
					A5($author$project$Generate$generateMethodDeclaration, pbTypes, fOptions, fAPI, options, serviceAPI),
					service.method)));
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Generate$moduleName = function (name) {
	return _Utils_ap(
		$elm$core$String$toUpper(
			A2($elm$core$String$left, 1, name)),
		A2($elm$core$String$dropLeft, 1, name));
};
var $author$project$Generate$generateFile = F3(
	function (pbTypes, name, files) {
		return A2(
			$elm$core$Result$andThen,
			function (file) {
				var options = $author$project$Generate$fileOptions(file);
				var subjectParamsAnnotation = $mdgriffith$elm_codegen$Elm$Annotation$record(
					A2(
						$elm$core$List$map,
						function (p) {
							return _Utils_Tuple2(p, $mdgriffith$elm_codegen$Elm$Annotation$string);
						},
						options.nrpcPackageSubjectParams));
				var module_path = A2(
					$elm$core$List$map,
					$author$project$Generate$moduleName,
					A2(
						$elm$core$List$cons,
						'Nrpc',
						A2($elm$core$String$split, '.', file._package)));
				var fileAPI = {
					module_path: module_path,
					subject: $mdgriffith$elm_codegen$Elm$value(
						{
							annotation: function () {
								var _v1 = options.nrpcPackageSubjectParams;
								if (!_v1.b) {
									return $elm$core$Maybe$Just($mdgriffith$elm_codegen$Elm$Annotation$string);
								} else {
									return $elm$core$Maybe$Just(
										A2(
											$mdgriffith$elm_codegen$Elm$Annotation$function,
											_List_fromArray(
												[
													A4($mdgriffith$elm_codegen$Elm$Annotation$alias, module_path, 'SubjectParams', _List_Nil, subjectParamsAnnotation)
												]),
											$mdgriffith$elm_codegen$Elm$Annotation$string));
								}
							}(),
							importFrom: module_path,
							name: 'subject'
						}),
					subjectParams: function () {
						var _v2 = options.nrpcPackageSubjectParams;
						if (!_v2.b) {
							return $elm$core$Maybe$Nothing;
						} else {
							var params = _v2;
							return $elm$core$Maybe$Just(
								{
									annotation: subjectParamsAnnotation,
									datatype: A4($mdgriffith$elm_codegen$Elm$Annotation$alias, module_path, 'SubjectParams', _List_Nil, subjectParamsAnnotation),
									params: params
								});
						}
					}()
				};
				return $elm$core$Result$Ok(
					A2(
						$elm$core$List$cons,
						A2(
							$mdgriffith$elm_codegen$Elm$file,
							module_path,
							function () {
								var _v0 = fileAPI.subjectParams;
								if (_v0.$ === 'Nothing') {
									return _List_fromArray(
										[
											A2(
											$mdgriffith$elm_codegen$Elm$declaration,
											'subject',
											$mdgriffith$elm_codegen$Elm$string(options.nrpcPackageSubject))
										]);
								} else {
									var subjectParams = _v0.a;
									return _List_fromArray(
										[
											A2($mdgriffith$elm_codegen$Elm$alias, 'SubjectParams', subjectParams.annotation),
											A2(
											$mdgriffith$elm_codegen$Elm$declaration,
											'subject',
											A2(
												$mdgriffith$elm_codegen$Elm$fn,
												_Utils_Tuple2(
													'params',
													$elm$core$Maybe$Just(
														A4($mdgriffith$elm_codegen$Elm$Annotation$alias, _List_Nil, 'SubjectParams', _List_Nil, subjectParams.annotation))),
												function (p) {
													return A2(
														$author$project$Gen$String$join,
														$mdgriffith$elm_codegen$Elm$string('.'),
														$mdgriffith$elm_codegen$Elm$list(
															A2(
																$elm$core$List$cons,
																$mdgriffith$elm_codegen$Elm$string(options.nrpcPackageSubject),
																A2(
																	$elm$core$List$map,
																	function (pname) {
																		return A2($mdgriffith$elm_codegen$Elm$get, pname, p);
																	},
																	subjectParams.params))));
												}))
										]);
								}
							}()),
						A2(
							$elm$core$List$map,
							A4($author$project$Generate$generateServiceFile, pbTypes, file, options, fileAPI),
							file.service)));
			},
			A2(
				$elm$core$Result$fromMaybe,
				'no description for file ' + name,
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.name;
							},
							$elm$core$Basics$eq(name)),
						files))));
	});
var $author$project$Generate$generate = function (request) {
	var pbTypes = $author$project$Generate$buildPbTypes(request.protoFile);
	return A3(
		$elm$core$List$foldl,
		F2(
			function (name, res) {
				return A3(
					$elm$core$Result$map2,
					$elm$core$Basics$append,
					A2(
						$elm$core$Result$map,
						$elm$core$List$map($author$project$Generate$elmFileToResponseFile),
						A3($author$project$Generate$generateFile, pbTypes, name, request.protoFile)),
					res);
			}),
		$elm$core$Result$Ok(_List_Nil),
		request.fileToGenerate);
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$output = _Platform_outgoingPort('output', $elm$json$Json$Encode$string);
var $chelovek0v$bbase64$Base64$Decode$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $chelovek0v$bbase64$Base64$Decode$encodeBytes = function (encoders) {
	return $elm$bytes$Bytes$Encode$encode(
		$elm$bytes$Bytes$Encode$sequence(
			$elm$core$List$reverse(encoders)));
};
var $chelovek0v$bbase64$Base64$Table$charToCodeMap = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('A', 0),
			_Utils_Tuple2('B', 1),
			_Utils_Tuple2('C', 2),
			_Utils_Tuple2('D', 3),
			_Utils_Tuple2('E', 4),
			_Utils_Tuple2('F', 5),
			_Utils_Tuple2('G', 6),
			_Utils_Tuple2('H', 7),
			_Utils_Tuple2('I', 8),
			_Utils_Tuple2('J', 9),
			_Utils_Tuple2('K', 10),
			_Utils_Tuple2('L', 11),
			_Utils_Tuple2('M', 12),
			_Utils_Tuple2('N', 13),
			_Utils_Tuple2('O', 14),
			_Utils_Tuple2('P', 15),
			_Utils_Tuple2('Q', 16),
			_Utils_Tuple2('R', 17),
			_Utils_Tuple2('S', 18),
			_Utils_Tuple2('T', 19),
			_Utils_Tuple2('U', 20),
			_Utils_Tuple2('V', 21),
			_Utils_Tuple2('W', 22),
			_Utils_Tuple2('X', 23),
			_Utils_Tuple2('Y', 24),
			_Utils_Tuple2('Z', 25),
			_Utils_Tuple2('a', 26),
			_Utils_Tuple2('b', 27),
			_Utils_Tuple2('c', 28),
			_Utils_Tuple2('d', 29),
			_Utils_Tuple2('e', 30),
			_Utils_Tuple2('f', 31),
			_Utils_Tuple2('g', 32),
			_Utils_Tuple2('h', 33),
			_Utils_Tuple2('i', 34),
			_Utils_Tuple2('j', 35),
			_Utils_Tuple2('k', 36),
			_Utils_Tuple2('l', 37),
			_Utils_Tuple2('m', 38),
			_Utils_Tuple2('n', 39),
			_Utils_Tuple2('o', 40),
			_Utils_Tuple2('p', 41),
			_Utils_Tuple2('q', 42),
			_Utils_Tuple2('r', 43),
			_Utils_Tuple2('s', 44),
			_Utils_Tuple2('t', 45),
			_Utils_Tuple2('u', 46),
			_Utils_Tuple2('v', 47),
			_Utils_Tuple2('w', 48),
			_Utils_Tuple2('x', 49),
			_Utils_Tuple2('y', 50),
			_Utils_Tuple2('z', 51),
			_Utils_Tuple2('0', 52),
			_Utils_Tuple2('1', 53),
			_Utils_Tuple2('2', 54),
			_Utils_Tuple2('3', 55),
			_Utils_Tuple2('4', 56),
			_Utils_Tuple2('5', 57),
			_Utils_Tuple2('6', 58),
			_Utils_Tuple2('7', 59),
			_Utils_Tuple2('8', 60),
			_Utils_Tuple2('9', 61),
			_Utils_Tuple2('+', 62),
			_Utils_Tuple2('/', 63)
		]));
var $chelovek0v$bbase64$Base64$Table$decode = function (_char) {
	return A2(
		$elm$core$Dict$get,
		$elm$core$String$fromChar(_char),
		$chelovek0v$bbase64$Base64$Table$charToCodeMap);
};
var $chelovek0v$bbase64$Base64$Shift$decodeNext = function (shift) {
	switch (shift.$) {
		case 'Shift0':
			return $chelovek0v$bbase64$Base64$Shift$Shift2;
		case 'Shift2':
			return $chelovek0v$bbase64$Base64$Shift$Shift4;
		case 'Shift4':
			return $chelovek0v$bbase64$Base64$Shift$Shift6;
		default:
			return $chelovek0v$bbase64$Base64$Shift$Shift0;
	}
};
var $chelovek0v$bbase64$Base64$Decode$finishPartialByte = F3(
	function (shift, sextet, partialByte) {
		return partialByte | A2($chelovek0v$bbase64$Base64$Shift$shiftRightZfBy, shift, sextet);
	});
var $chelovek0v$bbase64$Base64$Decode$decodeStep = F2(
	function (sextet, _v0) {
		var shift = _v0.a;
		var partialByte = _v0.b;
		var deferredEncoders = _v0.c;
		var nextBlankByte = function () {
			switch (shift.$) {
				case 'Shift0':
					return A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, $chelovek0v$bbase64$Base64$Shift$Shift2, sextet);
				case 'Shift2':
					return A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, $chelovek0v$bbase64$Base64$Shift$Shift4, sextet);
				case 'Shift4':
					return A2($chelovek0v$bbase64$Base64$Shift$shiftLeftBy, $chelovek0v$bbase64$Base64$Shift$Shift6, sextet);
				default:
					return 0;
			}
		}();
		var finishedByte = function () {
			switch (shift.$) {
				case 'Shift0':
					return $elm$core$Maybe$Nothing;
				case 'Shift2':
					return $elm$core$Maybe$Just(
						A3($chelovek0v$bbase64$Base64$Decode$finishPartialByte, $chelovek0v$bbase64$Base64$Shift$Shift4, sextet, partialByte));
				case 'Shift4':
					return $elm$core$Maybe$Just(
						A3($chelovek0v$bbase64$Base64$Decode$finishPartialByte, $chelovek0v$bbase64$Base64$Shift$Shift2, sextet, partialByte));
				default:
					return $elm$core$Maybe$Just(partialByte | sextet);
			}
		}();
		var nextDeferredDecoders = function () {
			if (finishedByte.$ === 'Just') {
				var byte_ = finishedByte.a;
				return A2(
					$elm$core$List$cons,
					$elm$bytes$Bytes$Encode$unsignedInt8(byte_),
					deferredEncoders);
			} else {
				return deferredEncoders;
			}
		}();
		return _Utils_Tuple3(
			$chelovek0v$bbase64$Base64$Shift$decodeNext(shift),
			nextBlankByte,
			nextDeferredDecoders);
	});
var $elm$core$String$foldl = _String_foldl;
var $chelovek0v$bbase64$Base64$Decode$initialState = _Utils_Tuple3($chelovek0v$bbase64$Base64$Shift$Shift0, 0, _List_Nil);
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $chelovek0v$bbase64$Base64$Decode$strip = function (input) {
	return A2($elm$core$String$endsWith, '==', input) ? $elm$core$Result$Ok(
		A2($elm$core$String$dropRight, 2, input)) : (A2($elm$core$String$endsWith, '=', input) ? $elm$core$Result$Ok(
		A2($elm$core$String$dropRight, 1, input)) : $elm$core$Result$Ok(input));
};
var $chelovek0v$bbase64$Base64$Decode$ValidationError = {$: 'ValidationError'};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $chelovek0v$bbase64$Base64$Decode$validate = function (input) {
	var regex = A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		$elm$regex$Regex$fromString('^[A-Za-z0-9\\/+]*$'));
	return A2($elm$regex$Regex$contains, regex, input) ? $elm$core$Result$Ok(input) : $elm$core$Result$Err($chelovek0v$bbase64$Base64$Decode$ValidationError);
};
var $chelovek0v$bbase64$Base64$Decode$tryDecode = function (input) {
	return A2(
		$elm$core$Result$map,
		A2(
			$elm$core$String$foldl,
			F2(
				function (_char, state) {
					return A2(
						$elm$core$Maybe$withDefault,
						state,
						A2(
							$elm$core$Maybe$map,
							function (sextet) {
								return A2($chelovek0v$bbase64$Base64$Decode$decodeStep, sextet, state);
							},
							$chelovek0v$bbase64$Base64$Table$decode(_char)));
				}),
			$chelovek0v$bbase64$Base64$Decode$initialState),
		A2(
			$elm$core$Result$andThen,
			$chelovek0v$bbase64$Base64$Decode$validate,
			$chelovek0v$bbase64$Base64$Decode$strip(input)));
};
var $chelovek0v$bbase64$Base64$Decode$bytes = $chelovek0v$bbase64$Base64$Decode$Decoder(
	function (input) {
		var _v0 = $chelovek0v$bbase64$Base64$Decode$tryDecode(input);
		if (_v0.$ === 'Ok') {
			var _v1 = _v0.a;
			var deferredEncoders = _v1.c;
			return $elm$core$Result$Ok(
				$chelovek0v$bbase64$Base64$Decode$encodeBytes(deferredEncoders));
		} else {
			var e = _v0.a;
			return $elm$core$Result$Err(e);
		}
	});
var $chelovek0v$bbase64$Base64$Decode$decode = F2(
	function (_v0, input) {
		var decoder = _v0.a;
		return decoder(input);
	});
var $eriktim$elm_protocol_buffers$Protobuf$Decode$decode = F2(
	function (_v0, bs) {
		var decoder = _v0.a;
		var wireType = $eriktim$elm_protocol_buffers$Internal$Protobuf$LengthDelimited(
			$elm$bytes$Bytes$width(bs));
		return A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$second,
			A2(
				$elm$bytes$Bytes$Decode$decode,
				decoder(wireType),
				bs));
	});
var $author$project$Proto$Google$Protobuf$Compiler$Internals_$defaultProto__Google__Protobuf__Compiler__Version = {major: 0, minor: 0, patch: 0, suffix: ''};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $elm$bytes$Bytes$Decode$fail = $elm$bytes$Bytes$Decode$Decoder(_Bytes_decodeFailure);
var $eriktim$elm_protocol_buffers$Protobuf$Decode$packedDecoder = F2(
	function (decoderWireType, decoder) {
		return $eriktim$elm_protocol_buffers$Protobuf$Decode$Decoder(
			function (wireType) {
				if (wireType.$ === 'LengthDelimited') {
					return decoder;
				} else {
					return _Utils_eq(wireType, decoderWireType) ? decoder : $elm$bytes$Bytes$Decode$fail;
				}
			});
	});
var $elm$bytes$Bytes$Decode$andThen = F2(
	function (callback, _v0) {
		var decodeA = _v0.a;
		return $elm$bytes$Bytes$Decode$Decoder(
			F2(
				function (bites, offset) {
					var _v1 = A2(decodeA, bites, offset);
					var newOffset = _v1.a;
					var a = _v1.b;
					var _v2 = callback(a);
					var decodeB = _v2.a;
					return A2(decodeB, bites, newOffset);
				}));
	});
var $eriktim$elm_protocol_buffers$Protobuf$Decode$varIntDecoder = function (config) {
	return A2(
		$elm$bytes$Bytes$Decode$andThen,
		function (octet) {
			return ((128 & octet) === 128) ? A2(
				$elm$bytes$Bytes$Decode$map,
				function (_v0) {
					var usedBytes = _v0.a;
					var value = _v0.b;
					return _Utils_Tuple2(
						usedBytes + 1,
						A2(config.pushBase128, 127 & octet, value));
				},
				$eriktim$elm_protocol_buffers$Protobuf$Decode$varIntDecoder(config)) : $elm$bytes$Bytes$Decode$succeed(
				_Utils_Tuple2(
					1,
					config.fromBase128(octet)));
		},
		$elm$bytes$Bytes$Decode$unsignedInt8);
};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$intDecoder = A2(
	$elm$core$Basics$composeR,
	$eriktim$elm_protocol_buffers$Protobuf$Decode$varIntDecoder,
	$eriktim$elm_protocol_buffers$Protobuf$Decode$packedDecoder($eriktim$elm_protocol_buffers$Internal$Protobuf$VarInt));
var $eriktim$elm_protocol_buffers$Protobuf$Decode$int32 = $eriktim$elm_protocol_buffers$Protobuf$Decode$intDecoder($eriktim$elm_protocol_buffers$Internal$Int32$operations);
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$isEmpty(dict);
};
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$remove, key, dict));
	});
var $eriktim$elm_protocol_buffers$Internal$Protobuf$Bit32 = {$: 'Bit32'};
var $eriktim$elm_protocol_buffers$Internal$Protobuf$Bit64 = {$: 'Bit64'};
var $eriktim$elm_protocol_buffers$Internal$Protobuf$EndGroup = {$: 'EndGroup'};
var $eriktim$elm_protocol_buffers$Internal$Protobuf$StartGroup = {$: 'StartGroup'};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$tagDecoder = A2(
	$elm$bytes$Bytes$Decode$andThen,
	function (_v0) {
		var usedBytes = _v0.a;
		var value = _v0.b;
		var fieldNumber = value >>> 3;
		return A2(
			$elm$bytes$Bytes$Decode$map,
			function (_v1) {
				var n = _v1.a;
				var wireType = _v1.b;
				return _Utils_Tuple2(
					usedBytes + n,
					_Utils_Tuple2(fieldNumber, wireType));
			},
			function () {
				var _v2 = 7 & value;
				switch (_v2) {
					case 0:
						return $elm$bytes$Bytes$Decode$succeed(
							_Utils_Tuple2(0, $eriktim$elm_protocol_buffers$Internal$Protobuf$VarInt));
					case 1:
						return $elm$bytes$Bytes$Decode$succeed(
							_Utils_Tuple2(0, $eriktim$elm_protocol_buffers$Internal$Protobuf$Bit64));
					case 2:
						return A2(
							$elm$bytes$Bytes$Decode$map,
							$elm$core$Tuple$mapSecond($eriktim$elm_protocol_buffers$Internal$Protobuf$LengthDelimited),
							$eriktim$elm_protocol_buffers$Protobuf$Decode$varIntDecoder($eriktim$elm_protocol_buffers$Internal$Int32$operations));
					case 3:
						return $elm$bytes$Bytes$Decode$succeed(
							_Utils_Tuple2(0, $eriktim$elm_protocol_buffers$Internal$Protobuf$StartGroup));
					case 4:
						return $elm$bytes$Bytes$Decode$succeed(
							_Utils_Tuple2(0, $eriktim$elm_protocol_buffers$Internal$Protobuf$EndGroup));
					case 5:
						return $elm$bytes$Bytes$Decode$succeed(
							_Utils_Tuple2(0, $eriktim$elm_protocol_buffers$Internal$Protobuf$Bit32));
					default:
						return $elm$bytes$Bytes$Decode$fail;
				}
			}());
	},
	$eriktim$elm_protocol_buffers$Protobuf$Decode$varIntDecoder($eriktim$elm_protocol_buffers$Internal$Int32$operations));
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$bytes$Bytes$Decode$bytes = function (n) {
	return $elm$bytes$Bytes$Decode$Decoder(
		_Bytes_read_bytes(n));
};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$unknownFieldDecoder = function (wireType) {
	switch (wireType.$) {
		case 'VarInt':
			return A2(
				$elm$bytes$Bytes$Decode$map,
				$elm$core$Tuple$first,
				$eriktim$elm_protocol_buffers$Protobuf$Decode$varIntDecoder($eriktim$elm_protocol_buffers$Internal$Int32$operations));
		case 'Bit64':
			return A2(
				$elm$bytes$Bytes$Decode$map,
				$elm$core$Basics$always(8),
				$elm$bytes$Bytes$Decode$bytes(8));
		case 'LengthDelimited':
			var width = wireType.a;
			return A2(
				$elm$bytes$Bytes$Decode$map,
				$elm$core$Basics$always(width),
				$elm$bytes$Bytes$Decode$bytes(width));
		case 'StartGroup':
			return $elm$bytes$Bytes$Decode$fail;
		case 'EndGroup':
			return $elm$bytes$Bytes$Decode$fail;
		default:
			return A2(
				$elm$bytes$Bytes$Decode$map,
				$elm$core$Basics$always(4),
				$elm$bytes$Bytes$Decode$bytes(4));
	}
};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$stepMessage = F2(
	function (width, state) {
		return (state.width <= 0) ? ($elm$core$Set$isEmpty(state.requiredFieldNumbers) ? $elm$bytes$Bytes$Decode$succeed(
			$elm$bytes$Bytes$Decode$Done(
				_Utils_Tuple2(width, state.model))) : $elm$bytes$Bytes$Decode$fail) : A2(
			$elm$bytes$Bytes$Decode$andThen,
			function (_v0) {
				var usedBytes = _v0.a;
				var _v1 = _v0.b;
				var fieldNumber = _v1.a;
				var wireType = _v1.b;
				var _v2 = A2($elm$core$Dict$get, fieldNumber, state.dict);
				if (_v2.$ === 'Just') {
					var decoder = _v2.a.a;
					return A2(
						$elm$bytes$Bytes$Decode$map,
						function (_v3) {
							var n = _v3.a;
							var fn = _v3.b;
							return $elm$bytes$Bytes$Decode$Loop(
								_Utils_update(
									state,
									{
										model: fn(state.model),
										requiredFieldNumbers: A2($elm$core$Set$remove, fieldNumber, state.requiredFieldNumbers),
										width: (state.width - usedBytes) - n
									}));
						},
						decoder(wireType));
				} else {
					return A2(
						$elm$bytes$Bytes$Decode$map,
						function (n) {
							return $elm$bytes$Bytes$Decode$Loop(
								_Utils_update(
									state,
									{width: (state.width - usedBytes) - n}));
						},
						$eriktim$elm_protocol_buffers$Protobuf$Decode$unknownFieldDecoder(wireType));
				}
			},
			$eriktim$elm_protocol_buffers$Protobuf$Decode$tagDecoder);
	});
var $eriktim$elm_protocol_buffers$Protobuf$Decode$message = F2(
	function (v, fieldDecoders) {
		var _v0 = A2(
			$elm$core$Tuple$mapSecond,
			$elm$core$Dict$fromList,
			A2(
				$elm$core$Tuple$mapFirst,
				$elm$core$Set$fromList,
				A3(
					$elm$core$List$foldr,
					F2(
						function (_v1, _v2) {
							var isRequired = _v1.a;
							var items = _v1.b;
							var numbers = _v2.a;
							var decoders = _v2.b;
							var numbers_ = isRequired ? _Utils_ap(
								numbers,
								A2($elm$core$List$map, $elm$core$Tuple$first, items)) : numbers;
							return _Utils_Tuple2(
								numbers_,
								_Utils_ap(items, decoders));
						}),
					_Utils_Tuple2(_List_Nil, _List_Nil),
					fieldDecoders)));
		var requiredSet = _v0.a;
		var dict = _v0.b;
		return $eriktim$elm_protocol_buffers$Protobuf$Decode$Decoder(
			function (wireType) {
				if (wireType.$ === 'LengthDelimited') {
					var width = wireType.a;
					return A2(
						$elm$bytes$Bytes$Decode$loop,
						{dict: dict, model: v, requiredFieldNumbers: requiredSet, width: width},
						$eriktim$elm_protocol_buffers$Protobuf$Decode$stepMessage(width));
				} else {
					return $elm$bytes$Bytes$Decode$fail;
				}
			});
	});
var $eriktim$elm_protocol_buffers$Protobuf$Decode$FieldDecoder = F2(
	function (a, b) {
		return {$: 'FieldDecoder', a: a, b: b};
	});
var $eriktim$elm_protocol_buffers$Protobuf$Decode$map = F2(
	function (fn, _v0) {
		var decoder = _v0.a;
		return $eriktim$elm_protocol_buffers$Protobuf$Decode$Decoder(
			function (wireType) {
				return A2(
					$elm$bytes$Bytes$Decode$map,
					$elm$core$Tuple$mapSecond(fn),
					decoder(wireType));
			});
	});
var $eriktim$elm_protocol_buffers$Protobuf$Decode$optional = F3(
	function (fieldNumber, decoder, set) {
		return A2(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$FieldDecoder,
			false,
			_List_fromArray(
				[
					_Utils_Tuple2(
					fieldNumber,
					A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, set, decoder))
				]));
	});
var $eriktim$elm_protocol_buffers$Protobuf$Decode$lengthDelimitedDecoder = function (decoder) {
	return $eriktim$elm_protocol_buffers$Protobuf$Decode$Decoder(
		function (wireType) {
			if (wireType.$ === 'LengthDelimited') {
				var width = wireType.a;
				return A2(
					$elm$bytes$Bytes$Decode$map,
					$elm$core$Tuple$pair(width),
					decoder(width));
			} else {
				return $elm$bytes$Bytes$Decode$fail;
			}
		});
};
var $elm$bytes$Bytes$Decode$string = function (n) {
	return $elm$bytes$Bytes$Decode$Decoder(
		_Bytes_read_string(n));
};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$string = $eriktim$elm_protocol_buffers$Protobuf$Decode$lengthDelimitedDecoder($elm$bytes$Bytes$Decode$string);
var $author$project$Proto$Google$Protobuf$Compiler$Internals_$decodeProto__Google__Protobuf__Compiler__Version = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Compiler$Internals_$defaultProto__Google__Protobuf__Compiler__Version,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{major: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{minor: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{patch: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			4,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{suffix: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__DescriptorProto_ = function (a) {
	return {$: 'Proto__Google__Protobuf__DescriptorProto_', a: a};
};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$bytes = $eriktim$elm_protocol_buffers$Protobuf$Decode$lengthDelimitedDecoder($elm$bytes$Bytes$Decode$bytes);
var $eriktim$elm_protocol_buffers$Protobuf$Decode$bool = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$packedDecoder,
	$eriktim$elm_protocol_buffers$Internal$Protobuf$VarInt,
	A2(
		$elm$bytes$Bytes$Decode$map,
		$elm$core$Tuple$mapSecond(
			$elm$core$Basics$neq(0)),
		$eriktim$elm_protocol_buffers$Protobuf$Decode$varIntDecoder($eriktim$elm_protocol_buffers$Internal$Int32$operations)));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__UninterpretedOption__NamePart = {isExtension: false, namePart: ''};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$required = F3(
	function (fieldNumber, decoder, set) {
		return A2(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$FieldDecoder,
			true,
			_List_fromArray(
				[
					_Utils_Tuple2(
					fieldNumber,
					A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, set, decoder))
				]));
	});
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption__NamePart = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__UninterpretedOption__NamePart,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$required,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{namePart: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$required,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{isExtension: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__UninterpretedOption = {
	aggregateValue: '',
	doubleValue: 0,
	identifierValue: '',
	name: _List_Nil,
	negativeIntValue: A2($eriktim$elm_protocol_buffers$Protobuf$Types$Int64$fromInts, 0, 0),
	positiveIntValue: A2($eriktim$elm_protocol_buffers$Protobuf$Types$Int64$fromInts, 0, 0),
	stringValue: $eriktim$elm_protocol_buffers$Protobuf$Encode$encode(
		$eriktim$elm_protocol_buffers$Protobuf$Encode$string(''))
};
var $elm$bytes$Bytes$Decode$float64 = function (endianness) {
	return $elm$bytes$Bytes$Decode$Decoder(
		_Bytes_read_f64(
			_Utils_eq(endianness, $elm$bytes$Bytes$LE)));
};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$double = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$packedDecoder,
	$eriktim$elm_protocol_buffers$Internal$Protobuf$Bit64,
	A2(
		$elm$bytes$Bytes$Decode$map,
		$elm$core$Tuple$pair(8),
		$elm$bytes$Bytes$Decode$float64($elm$bytes$Bytes$LE)));
var $eriktim$elm_protocol_buffers$Protobuf$Decode$int64 = $eriktim$elm_protocol_buffers$Protobuf$Decode$intDecoder($eriktim$elm_protocol_buffers$Internal$Int64$operations);
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$stepPackedField = F3(
	function (fullWidth, decoder, _v0) {
		var width = _v0.a;
		var values = _v0.b;
		return A2(
			$elm$bytes$Bytes$Decode$map,
			function (_v1) {
				var w = _v1.a;
				var value = _v1.b;
				var values_ = A2($elm$core$List$cons, value, values);
				var bytesRemaining = width - w;
				return (bytesRemaining <= 0) ? $elm$bytes$Bytes$Decode$Done(
					_Utils_Tuple2(
						fullWidth,
						$elm$core$List$reverse(values_))) : $elm$bytes$Bytes$Decode$Loop(
					_Utils_Tuple2(bytesRemaining, values_));
			},
			decoder);
	});
var $eriktim$elm_protocol_buffers$Protobuf$Decode$repeated = F4(
	function (fieldNumber, _v0, get, set) {
		var decoder = _v0.a;
		var update = F2(
			function (value, model) {
				return A2(
					set,
					_Utils_ap(
						get(model),
						value),
					model);
			});
		var listDecoder = $eriktim$elm_protocol_buffers$Protobuf$Decode$Decoder(
			function (wireType) {
				if (wireType.$ === 'LengthDelimited') {
					var width = wireType.a;
					return A2(
						$elm$bytes$Bytes$Decode$loop,
						_Utils_Tuple2(width, _List_Nil),
						A2(
							$eriktim$elm_protocol_buffers$Protobuf$Decode$stepPackedField,
							width,
							decoder(wireType)));
				} else {
					return A2(
						$elm$bytes$Bytes$Decode$map,
						$elm$core$Tuple$mapSecond($elm$core$List$singleton),
						decoder(wireType));
				}
			});
		return A2(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$FieldDecoder,
			false,
			_List_fromArray(
				[
					_Utils_Tuple2(
					fieldNumber,
					A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, update, listDecoder))
				]));
	});
var $eriktim$elm_protocol_buffers$Protobuf$Decode$uintDecoder = function (config) {
	return A2(
		$eriktim$elm_protocol_buffers$Protobuf$Decode$packedDecoder,
		$eriktim$elm_protocol_buffers$Internal$Protobuf$VarInt,
		A2(
			$elm$bytes$Bytes$Decode$map,
			$elm$core$Tuple$mapSecond(config.fromSigned),
			$eriktim$elm_protocol_buffers$Protobuf$Decode$varIntDecoder(config)));
};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$uint64 = $eriktim$elm_protocol_buffers$Protobuf$Decode$uintDecoder($eriktim$elm_protocol_buffers$Internal$Int64$operations);
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__UninterpretedOption,
	_List_fromArray(
		[
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			2,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption__NamePart,
			function ($) {
				return $.name;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{name: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{identifierValue: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			4,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$uint64,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{positiveIntValue: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			5,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int64,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{negativeIntValue: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			6,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$double,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{doubleValue: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			7,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bytes,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{stringValue: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			8,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{aggregateValue: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__ExtensionRangeOptions = {uninterpretedOption: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__ExtensionRangeOptions = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__ExtensionRangeOptions,
	_List_fromArray(
		[
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			999,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption,
			function ($) {
				return $.uninterpretedOption;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{uninterpretedOption: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__DescriptorProto__ExtensionRange = {end: 0, options: $elm$core$Maybe$Nothing, start: 0};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__DescriptorProto__ExtensionRange = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__DescriptorProto__ExtensionRange,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{start: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{end: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__ExtensionRangeOptions),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{options: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__DescriptorProto__ReservedRange = {end: 0, start: 0};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__DescriptorProto__ReservedRange = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__DescriptorProto__ReservedRange,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{start: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{end: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumDescriptorProto__EnumReservedRange = {end: 0, start: 0};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumDescriptorProto__EnumReservedRange = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumDescriptorProto__EnumReservedRange,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{start: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{end: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumOptions = {allowAlias: false, deprecated: false, uninterpretedOption: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumOptions = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumOptions,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{allowAlias: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{deprecated: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			999,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption,
			function ($) {
				return $.uninterpretedOption;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{uninterpretedOption: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumValueOptions = {deprecated: false, uninterpretedOption: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumValueOptions = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumValueOptions,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{deprecated: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			999,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption,
			function ($) {
				return $.uninterpretedOption;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{uninterpretedOption: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumValueDescriptorProto = {name: '', number: 0, options: $elm$core$Maybe$Nothing};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumValueDescriptorProto = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumValueDescriptorProto,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{name: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{number: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumValueOptions),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{options: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumDescriptorProto = {name: '', options: $elm$core$Maybe$Nothing, reservedName: _List_Nil, reservedRange: _List_Nil, value: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumDescriptorProto = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__EnumDescriptorProto,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{name: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			2,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumValueDescriptorProto,
			function ($) {
				return $.value;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{value: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumOptions),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{options: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			4,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumDescriptorProto__EnumReservedRange,
			function ($) {
				return $.reservedRange;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{reservedRange: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			5,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			function ($) {
				return $.reservedName;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{reservedName: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__LABELOPTIONAL = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__LABELOPTIONAL'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__LABELREPEATED = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__LABELREPEATED'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__LABELREQUIRED = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__LABELREQUIRED'};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldDescriptorProto__Label = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$map,
	function (i) {
		switch (i) {
			case 1:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__LABELOPTIONAL;
			case 2:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__LABELREQUIRED;
			case 3:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__LABELREPEATED;
			default:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__LABELOPTIONAL;
		}
	},
	$eriktim$elm_protocol_buffers$Protobuf$Decode$int32);
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEBOOL = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEBOOL'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEBYTES = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEBYTES'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEDOUBLE = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEDOUBLE'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEENUM = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEENUM'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEFIXED32 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEFIXED32'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEFIXED64 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEFIXED64'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEFLOAT = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEFLOAT'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEGROUP = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEGROUP'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEINT32 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEINT32'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEINT64 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEINT64'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEMESSAGE = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEMESSAGE'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESFIXED32 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPESFIXED32'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESFIXED64 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPESFIXED64'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESINT32 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPESINT32'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESINT64 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPESINT64'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESTRING = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPESTRING'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEUINT32 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEUINT32'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEUINT64 = {$: 'Proto__Google__Protobuf__FieldDescriptorProto__TYPEUINT64'};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldDescriptorProto__Type = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$map,
	function (i) {
		switch (i) {
			case 1:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEDOUBLE;
			case 2:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEFLOAT;
			case 3:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEINT64;
			case 4:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEUINT64;
			case 5:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEINT32;
			case 6:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEFIXED64;
			case 7:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEFIXED32;
			case 8:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEBOOL;
			case 9:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESTRING;
			case 10:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEGROUP;
			case 11:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEMESSAGE;
			case 12:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEBYTES;
			case 13:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEUINT32;
			case 14:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEENUM;
			case 15:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESFIXED32;
			case 16:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESFIXED64;
			case 17:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESINT32;
			case 18:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPESINT64;
			default:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEDOUBLE;
		}
	},
	$eriktim$elm_protocol_buffers$Protobuf$Decode$int32);
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__CORD = {$: 'Proto__Google__Protobuf__FieldOptions__CORD'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__STRING = {$: 'Proto__Google__Protobuf__FieldOptions__STRING'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__STRINGPIECE = {$: 'Proto__Google__Protobuf__FieldOptions__STRINGPIECE'};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldOptions__CType = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$map,
	function (i) {
		switch (i) {
			case 0:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__STRING;
			case 1:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__CORD;
			case 2:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__STRINGPIECE;
			default:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__STRING;
		}
	},
	$eriktim$elm_protocol_buffers$Protobuf$Decode$int32);
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__JSNORMAL = {$: 'Proto__Google__Protobuf__FieldOptions__JSNORMAL'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__JSNUMBER = {$: 'Proto__Google__Protobuf__FieldOptions__JSNUMBER'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__JSSTRING = {$: 'Proto__Google__Protobuf__FieldOptions__JSSTRING'};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldOptions__JSType = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$map,
	function (i) {
		switch (i) {
			case 0:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__JSNORMAL;
			case 1:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__JSSTRING;
			case 2:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__JSNUMBER;
			default:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__JSNORMAL;
		}
	},
	$eriktim$elm_protocol_buffers$Protobuf$Decode$int32);
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldOptions__CType = $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__STRING;
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldOptions__JSType = $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldOptions__JSNORMAL;
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldOptions = {ctype: $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldOptions__CType, deprecated: false, jstype: $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldOptions__JSType, lazy: false, packed: false, uninterpretedOption: _List_Nil, weak: false};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldOptions = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldOptions,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldOptions__CType,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{ctype: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{packed: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			6,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldOptions__JSType,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{jstype: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			5,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{lazy: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{deprecated: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			10,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{weak: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			999,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption,
			function ($) {
				return $.uninterpretedOption;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{uninterpretedOption: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldDescriptorProto__Label = $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__LABELOPTIONAL;
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldDescriptorProto__Type = $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FieldDescriptorProto__TYPEDOUBLE;
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldDescriptorProto = {defaultValue: '', extendee: '', jsonName: '', label: $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldDescriptorProto__Label, name: '', number: 0, oneofIndex: -1, options: $elm$core$Maybe$Nothing, proto3Optional: false, typeName: '', type_: $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldDescriptorProto__Type};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldDescriptorProto = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FieldDescriptorProto,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{name: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{number: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			4,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldDescriptorProto__Label,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{label: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			5,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldDescriptorProto__Type,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{type_: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			6,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{typeName: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{extendee: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			7,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{defaultValue: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			9,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{oneofIndex: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			10,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{jsonName: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			8,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldOptions),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{options: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			17,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{proto3Optional: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MessageOptions = {deprecated: false, mapEntry: false, messageSetWireFormat: false, noStandardDescriptorAccessor: false, uninterpretedOption: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__MessageOptions = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MessageOptions,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{messageSetWireFormat: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{noStandardDescriptorAccessor: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{deprecated: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			7,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{mapEntry: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			999,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption,
			function ($) {
				return $.uninterpretedOption;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{uninterpretedOption: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__OneofOptions = {uninterpretedOption: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__OneofOptions = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__OneofOptions,
	_List_fromArray(
		[
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			999,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption,
			function ($) {
				return $.uninterpretedOption;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{uninterpretedOption: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__OneofDescriptorProto = {name: '', options: $elm$core$Maybe$Nothing};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__OneofDescriptorProto = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__OneofDescriptorProto,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{name: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__OneofOptions),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{options: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__DescriptorProto = {enumType: _List_Nil, extension: _List_Nil, extensionRange: _List_Nil, field: _List_Nil, name: '', nestedType: _List_Nil, oneofDecl: _List_Nil, options: $elm$core$Maybe$Nothing, reservedName: _List_Nil, reservedRange: _List_Nil};
var $eriktim$elm_protocol_buffers$Protobuf$Decode$lazy = function (delayedDecoder) {
	return $eriktim$elm_protocol_buffers$Protobuf$Decode$Decoder(
		function (wireType) {
			return A2(
				$elm$bytes$Bytes$Decode$andThen,
				function (v) {
					var _v0 = delayedDecoder(v);
					var decoder = _v0.a;
					return decoder(wireType);
				},
				$elm$bytes$Bytes$Decode$succeed(_Utils_Tuple0));
		});
};
function $author$project$Proto$Google$Protobuf$Internals_$cyclic$decodeProto__Google__Protobuf__DescriptorProto() {
	return A2(
		$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
		$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__DescriptorProto,
		_List_fromArray(
			[
				A3(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
				1,
				$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{name: a});
					})),
				A4(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
				2,
				$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldDescriptorProto,
				function ($) {
					return $.field;
				},
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{field: a});
					})),
				A4(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
				6,
				$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldDescriptorProto,
				function ($) {
					return $.extension;
				},
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{extension: a});
					})),
				A4(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
				3,
				A2(
					$eriktim$elm_protocol_buffers$Protobuf$Decode$map,
					$author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__DescriptorProto_,
					$eriktim$elm_protocol_buffers$Protobuf$Decode$lazy(
						function (_v0) {
							return $author$project$Proto$Google$Protobuf$Internals_$cyclic$decodeProto__Google__Protobuf__DescriptorProto();
						})),
				function ($) {
					return $.nestedType;
				},
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{nestedType: a});
					})),
				A4(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
				4,
				$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumDescriptorProto,
				function ($) {
					return $.enumType;
				},
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{enumType: a});
					})),
				A4(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
				5,
				$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__DescriptorProto__ExtensionRange,
				function ($) {
					return $.extensionRange;
				},
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{extensionRange: a});
					})),
				A4(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
				8,
				$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__OneofDescriptorProto,
				function ($) {
					return $.oneofDecl;
				},
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{oneofDecl: a});
					})),
				A3(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
				7,
				A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__MessageOptions),
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{options: a});
					})),
				A4(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
				9,
				$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__DescriptorProto__ReservedRange,
				function ($) {
					return $.reservedRange;
				},
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{reservedRange: a});
					})),
				A4(
				$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
				10,
				$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
				function ($) {
					return $.reservedName;
				},
				F2(
					function (a, r) {
						return _Utils_update(
							r,
							{reservedName: a});
					}))
			]));
}
try {
	var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__DescriptorProto = $author$project$Proto$Google$Protobuf$Internals_$cyclic$decodeProto__Google__Protobuf__DescriptorProto();
	$author$project$Proto$Google$Protobuf$Internals_$cyclic$decodeProto__Google__Protobuf__DescriptorProto = function () {
		return $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__DescriptorProto;
	};
} catch ($) {
	throw 'Some top-level definitions from `Proto.Google.Protobuf.Internals_` are causing infinite recursion:\n\n  ┌─────┐\n  │    decodeProto__Google__Protobuf__DescriptorProto\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FileOptions__CODESIZE = {$: 'Proto__Google__Protobuf__FileOptions__CODESIZE'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FileOptions__LITERUNTIME = {$: 'Proto__Google__Protobuf__FileOptions__LITERUNTIME'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FileOptions__SPEED = {$: 'Proto__Google__Protobuf__FileOptions__SPEED'};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FileOptions__OptimizeMode = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$map,
	function (i) {
		switch (i) {
			case 1:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FileOptions__SPEED;
			case 2:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FileOptions__CODESIZE;
			case 3:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FileOptions__LITERUNTIME;
			default:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FileOptions__SPEED;
		}
	},
	$eriktim$elm_protocol_buffers$Protobuf$Decode$int32);
var $author$project$Proto$Nrpc$Internals_$Proto__Nrpc__COPY = {$: 'Proto__Nrpc__COPY'};
var $author$project$Proto$Nrpc$Internals_$Proto__Nrpc__SubjectRuleUnrecognized_ = function (a) {
	return {$: 'Proto__Nrpc__SubjectRuleUnrecognized_', a: a};
};
var $author$project$Proto$Nrpc$Internals_$Proto__Nrpc__TOLOWER = {$: 'Proto__Nrpc__TOLOWER'};
var $author$project$Proto$Nrpc$Internals_$decodeProto__Nrpc__SubjectRule = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$map,
	function (i) {
		switch (i) {
			case 0:
				return $author$project$Proto$Nrpc$Internals_$Proto__Nrpc__COPY;
			case 1:
				return $author$project$Proto$Nrpc$Internals_$Proto__Nrpc__TOLOWER;
			default:
				return $author$project$Proto$Nrpc$Internals_$Proto__Nrpc__SubjectRuleUnrecognized_(i);
		}
	},
	$eriktim$elm_protocol_buffers$Protobuf$Decode$int32);
var $author$project$Proto$Nrpc$SubjectRuleUnrecognized_ = function (a) {
	return {$: 'SubjectRuleUnrecognized_', a: a};
};
var $author$project$Proto$Nrpc$TOLOWER = {$: 'TOLOWER'};
var $author$project$Proto$Nrpc$fromInternalSubjectRule = function (data_) {
	switch (data_.$) {
		case 'Proto__Nrpc__COPY':
			return $author$project$Proto$Nrpc$COPY;
		case 'Proto__Nrpc__TOLOWER':
			return $author$project$Proto$Nrpc$TOLOWER;
		default:
			var n_ = data_.a;
			return $author$project$Proto$Nrpc$SubjectRuleUnrecognized_(n_);
	}
};
var $author$project$Proto$Nrpc$decodeSubjectRule = A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $author$project$Proto$Nrpc$fromInternalSubjectRule, $author$project$Proto$Nrpc$Internals_$decodeProto__Nrpc__SubjectRule);
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FileOptions__OptimizeMode = $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FileOptions__SPEED;
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FileOptions = {ccEnableArenas: true, ccGenericServices: false, csharpNamespace: '', deprecated: false, goPackage: '', javaGenerateEqualsAndHash: false, javaGenericServices: false, javaMultipleFiles: false, javaOuterClassname: '', javaPackage: '', javaStringCheckUtf8: false, nrpcMethodSubjectRule: $author$project$Proto$Nrpc$defaultSubjectRule, nrpcPackageSubject: '', nrpcPackageSubjectParams: _List_Nil, nrpcServiceSubjectRule: $author$project$Proto$Nrpc$defaultSubjectRule, objcClassPrefix: '', optimizeFor: $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FileOptions__OptimizeMode, phpClassPrefix: '', phpGenericServices: false, phpMetadataNamespace: '', phpNamespace: '', pyGenericServices: false, rubyPackage: '', swiftPrefix: '', uninterpretedOption: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FileOptions = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FileOptions,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{javaPackage: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			8,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{javaOuterClassname: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			10,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{javaMultipleFiles: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			20,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{javaGenerateEqualsAndHash: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			27,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{javaStringCheckUtf8: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			9,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FileOptions__OptimizeMode,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{optimizeFor: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			11,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{goPackage: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			16,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{ccGenericServices: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			17,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{javaGenericServices: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			18,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{pyGenericServices: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			42,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{phpGenericServices: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			23,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{deprecated: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			31,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{ccEnableArenas: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			36,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{objcClassPrefix: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			37,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{csharpNamespace: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			39,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{swiftPrefix: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			40,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{phpClassPrefix: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			41,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{phpNamespace: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			44,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{phpMetadataNamespace: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			45,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{rubyPackage: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			50000,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{nrpcPackageSubject: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			50001,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			function ($) {
				return $.nrpcPackageSubjectParams;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{nrpcPackageSubjectParams: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			50002,
			$author$project$Proto$Nrpc$decodeSubjectRule,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{nrpcServiceSubjectRule: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			50003,
			$author$project$Proto$Nrpc$decodeSubjectRule,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{nrpcMethodSubjectRule: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			999,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption,
			function ($) {
				return $.uninterpretedOption;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{uninterpretedOption: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__MethodOptions__IDEMPOTENCYUNKNOWN = {$: 'Proto__Google__Protobuf__MethodOptions__IDEMPOTENCYUNKNOWN'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__MethodOptions__IDEMPOTENT = {$: 'Proto__Google__Protobuf__MethodOptions__IDEMPOTENT'};
var $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__MethodOptions__NOSIDEEFFECTS = {$: 'Proto__Google__Protobuf__MethodOptions__NOSIDEEFFECTS'};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__MethodOptions__IdempotencyLevel = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$map,
	function (i) {
		switch (i) {
			case 0:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__MethodOptions__IDEMPOTENCYUNKNOWN;
			case 1:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__MethodOptions__NOSIDEEFFECTS;
			case 2:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__MethodOptions__IDEMPOTENT;
			default:
				return $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__MethodOptions__IDEMPOTENCYUNKNOWN;
		}
	},
	$eriktim$elm_protocol_buffers$Protobuf$Decode$int32);
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MethodOptions__IdempotencyLevel = $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__MethodOptions__IDEMPOTENCYUNKNOWN;
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MethodOptions = {deprecated: false, idempotencyLevel: $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MethodOptions__IdempotencyLevel, nrpcMethodSubject: '', nrpcMethodSubjectParams: _List_Nil, nrpcStreamedReply: false, uninterpretedOption: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__MethodOptions = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MethodOptions,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			33,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{deprecated: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			34,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__MethodOptions__IdempotencyLevel,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{idempotencyLevel: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			52000,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{nrpcMethodSubject: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			52001,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			function ($) {
				return $.nrpcMethodSubjectParams;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{nrpcMethodSubjectParams: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			52002,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{nrpcStreamedReply: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			999,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption,
			function ($) {
				return $.uninterpretedOption;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{uninterpretedOption: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MethodDescriptorProto = {clientStreaming: false, inputType: '', name: '', options: $elm$core$Maybe$Nothing, outputType: '', serverStreaming: false};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__MethodDescriptorProto = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MethodDescriptorProto,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{name: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{inputType: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{outputType: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			4,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__MethodOptions),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{options: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			5,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{clientStreaming: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			6,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{serverStreaming: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__ServiceOptions = {deprecated: false, nrpcServiceSubject: '', nrpcServiceSubjectParams: _List_Nil, uninterpretedOption: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__ServiceOptions = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__ServiceOptions,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			33,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$bool,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{deprecated: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			51000,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{nrpcServiceSubject: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			51001,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			function ($) {
				return $.nrpcServiceSubjectParams;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{nrpcServiceSubjectParams: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			999,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__UninterpretedOption,
			function ($) {
				return $.uninterpretedOption;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{uninterpretedOption: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__ServiceDescriptorProto = {method: _List_Nil, name: '', options: $elm$core$Maybe$Nothing};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__ServiceDescriptorProto = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__ServiceDescriptorProto,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{name: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			2,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__MethodDescriptorProto,
			function ($) {
				return $.method;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{method: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__ServiceOptions),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{options: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__SourceCodeInfo__Location = {leadingComments: '', leadingDetachedComments: _List_Nil, path: _List_Nil, span: _List_Nil, trailingComments: ''};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__SourceCodeInfo__Location = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__SourceCodeInfo__Location,
	_List_fromArray(
		[
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			function ($) {
				return $.path;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{path: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			function ($) {
				return $.span;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{span: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{leadingComments: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			4,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{trailingComments: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			6,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			function ($) {
				return $.leadingDetachedComments;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{leadingDetachedComments: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__SourceCodeInfo = {location: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__SourceCodeInfo = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__SourceCodeInfo,
	_List_fromArray(
		[
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			1,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__SourceCodeInfo__Location,
			function ($) {
				return $.location;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{location: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FileDescriptorProto = {dependency: _List_Nil, enumType: _List_Nil, extension: _List_Nil, messageType: _List_Nil, name: '', options: $elm$core$Maybe$Nothing, _package: '', publicDependency: _List_Nil, service: _List_Nil, sourceCodeInfo: $elm$core$Maybe$Nothing, syntax: '', weakDependency: _List_Nil};
var $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FileDescriptorProto = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FileDescriptorProto,
	_List_fromArray(
		[
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{name: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{_package: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			3,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			function ($) {
				return $.dependency;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{dependency: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			10,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			function ($) {
				return $.publicDependency;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{publicDependency: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			11,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$int32,
			function ($) {
				return $.weakDependency;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{weakDependency: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			4,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__DescriptorProto,
			function ($) {
				return $.messageType;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{messageType: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			5,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__EnumDescriptorProto,
			function ($) {
				return $.enumType;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{enumType: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			6,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__ServiceDescriptorProto,
			function ($) {
				return $.service;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{service: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			7,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FieldDescriptorProto,
			function ($) {
				return $.extension;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{extension: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			8,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FileOptions),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{options: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			9,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__SourceCodeInfo),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{sourceCodeInfo: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			12,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{syntax: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Compiler$Internals_$defaultProto__Google__Protobuf__Compiler__CodeGeneratorRequest = {compilerVersion: $elm$core$Maybe$Nothing, fileToGenerate: _List_Nil, parameter: '', protoFile: _List_Nil};
var $author$project$Proto$Google$Protobuf$Compiler$Internals_$decodeProto__Google__Protobuf__Compiler__CodeGeneratorRequest = A2(
	$eriktim$elm_protocol_buffers$Protobuf$Decode$message,
	$author$project$Proto$Google$Protobuf$Compiler$Internals_$defaultProto__Google__Protobuf__Compiler__CodeGeneratorRequest,
	_List_fromArray(
		[
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			1,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			function ($) {
				return $.fileToGenerate;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{fileToGenerate: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			2,
			$eriktim$elm_protocol_buffers$Protobuf$Decode$string,
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{parameter: a});
				})),
			A4(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$repeated,
			15,
			$author$project$Proto$Google$Protobuf$Internals_$decodeProto__Google__Protobuf__FileDescriptorProto,
			function ($) {
				return $.protoFile;
			},
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{protoFile: a});
				})),
			A3(
			$eriktim$elm_protocol_buffers$Protobuf$Decode$optional,
			3,
			A2($eriktim$elm_protocol_buffers$Protobuf$Decode$map, $elm$core$Maybe$Just, $author$project$Proto$Google$Protobuf$Compiler$Internals_$decodeProto__Google__Protobuf__Compiler__Version),
			F2(
				function (a, r) {
					return _Utils_update(
						r,
						{compilerVersion: a});
				}))
		]));
var $author$project$Proto$Google$Protobuf$Compiler$decodeCodeGeneratorRequest = $author$project$Proto$Google$Protobuf$Compiler$Internals_$decodeProto__Google__Protobuf__Compiler__CodeGeneratorRequest;
var $author$project$Main$parseRequest = function (s) {
	var _v0 = A2($chelovek0v$bbase64$Base64$Decode$decode, $chelovek0v$bbase64$Base64$Decode$bytes, s);
	if (_v0.$ === 'Err') {
		var err = _v0.a;
		return $elm$core$Result$Err(
			{
				description: function () {
					if (err.$ === 'ValidationError') {
						return 'ValidationError';
					} else {
						return 'Base64.Decode.InvalidByteSequence';
					}
				}(),
				title: 'base64 decode'
			});
	} else {
		var bReq = _v0.a;
		var _v2 = A2($eriktim$elm_protocol_buffers$Protobuf$Decode$decode, $author$project$Proto$Google$Protobuf$Compiler$decodeCodeGeneratorRequest, bReq);
		if (_v2.$ === 'Just') {
			var api = _v2.a;
			return $elm$core$Result$Ok(api);
		} else {
			return $elm$core$Result$Err(
				{description: 'failed to decode a protobuf api', title: 'protobuf decode'});
		}
	}
};
var $author$project$Main$init = function (flags) {
	return _Utils_Tuple2(
		_Utils_Tuple0,
		$author$project$Main$output(
			$chelovek0v$bbase64$Base64$Encode$encode(
				$chelovek0v$bbase64$Base64$Encode$bytes(
					$eriktim$elm_protocol_buffers$Protobuf$Encode$encode(
						$author$project$Proto$Google$Protobuf$Compiler$encodeCodeGeneratorResponse(
							function () {
								var _v0 = $author$project$Main$parseRequest(flags.request);
								if (_v0.$ === 'Ok') {
									var request = _v0.a;
									var _v1 = $author$project$Generate$generate(request);
									if (_v1.$ === 'Ok') {
										var fileList = _v1.a;
										return {
											error: '',
											file: fileList,
											supportedFeatures: A2($eriktim$elm_protocol_buffers$Protobuf$Types$Int64$fromInts, 0, 3)
										};
									} else {
										var err = _v1.a;
										return {
											error: err,
											file: _List_Nil,
											supportedFeatures: A2($eriktim$elm_protocol_buffers$Protobuf$Types$Int64$fromInts, 0, 3)
										};
									}
								} else {
									var err = _v0.a;
									return {
										error: $author$project$Generate$errToString(err),
										file: _List_Nil,
										supportedFeatures: A2($eriktim$elm_protocol_buffers$Protobuf$Types$Int64$fromInts, 0, 3)
									};
								}
							}()))))));
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Main$main = $elm$core$Platform$worker(
	{
		init: $author$project$Main$init,
		subscriptions: function (_v0) {
			return $elm$core$Platform$Sub$none;
		},
		update: F2(
			function (_v1, model) {
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			})
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (request) {
			return $elm$json$Json$Decode$succeed(
				{request: request});
		},
		A2($elm$json$Json$Decode$field, 'request', $elm$json$Json$Decode$string)))(0)}});}(this));