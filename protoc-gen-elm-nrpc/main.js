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
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Gen$CodeGen$Generate$onFailureSend = _Platform_outgoingPort(
	'onFailureSend',
	$elm$json$Json$Encode$list(
		function ($) {
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'description',
						$elm$json$Json$Encode$string($.description)),
						_Utils_Tuple2(
						'title',
						$elm$json$Json$Encode$string($.title))
					]));
		}));
var $author$project$Gen$CodeGen$Generate$error = function (errs) {
	return $author$project$Gen$CodeGen$Generate$onFailureSend(errs);
};
var $eriktim$elm_protocol_buffers$Protobuf$Types$Int64$fromInts = $eriktim$elm_protocol_buffers$Internal$Int64$fromInts;
var $author$project$Generate$handleRequest = function (request) {
	return $elm$core$Result$Err('not (yet) implemented');
};
var $author$project$Generate$onSuccessSend = _Platform_outgoingPort('onSuccessSend', $elm$json$Json$Encode$string);
var $chelovek0v$bbase64$Base64$Decode$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var $chelovek0v$bbase64$Base64$Decode$encodeBytes = function (encoders) {
	return $elm$bytes$Bytes$Encode$encode(
		$elm$bytes$Bytes$Encode$sequence(
			$elm$core$List$reverse(encoders)));
};
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
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
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
var $elm$core$String$slice = _String_slice;
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
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
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
var $elm$core$Basics$neq = _Utils_notEqual;
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
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FileOptions__OptimizeMode = $author$project$Proto$Google$Protobuf$Internals_$Proto__Google__Protobuf__FileOptions__SPEED;
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FileOptions = {ccEnableArenas: true, ccGenericServices: false, csharpNamespace: '', deprecated: false, goPackage: '', javaGenerateEqualsAndHash: false, javaGenericServices: false, javaMultipleFiles: false, javaOuterClassname: '', javaPackage: '', javaStringCheckUtf8: false, objcClassPrefix: '', optimizeFor: $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__FileOptions__OptimizeMode, phpClassPrefix: '', phpGenericServices: false, phpMetadataNamespace: '', phpNamespace: '', pyGenericServices: false, rubyPackage: '', swiftPrefix: '', uninterpretedOption: _List_Nil};
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
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MethodOptions = {deprecated: false, idempotencyLevel: $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__MethodOptions__IdempotencyLevel, uninterpretedOption: _List_Nil};
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
var $author$project$Proto$Google$Protobuf$Internals_$defaultProto__Google__Protobuf__ServiceOptions = {deprecated: false, uninterpretedOption: _List_Nil};
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
var $author$project$Generate$parseRequest = function (s) {
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
var $author$project$Generate$init = function (flags) {
	var _v0 = $author$project$Generate$parseRequest(flags.request);
	if (_v0.$ === 'Ok') {
		var request = _v0.a;
		var _v1 = $author$project$Generate$handleRequest(request);
		if (_v1.$ === 'Ok') {
			var fileList = _v1.a;
			return _Utils_Tuple2(
				_Utils_Tuple0,
				$author$project$Generate$onSuccessSend(
					$chelovek0v$bbase64$Base64$Encode$encode(
						$chelovek0v$bbase64$Base64$Encode$bytes(
							$eriktim$elm_protocol_buffers$Protobuf$Encode$encode(
								$author$project$Proto$Google$Protobuf$Compiler$encodeCodeGeneratorResponse(
									{
										error: '',
										file: fileList,
										supportedFeatures: A2($eriktim$elm_protocol_buffers$Protobuf$Types$Int64$fromInts, 0, 0)
									}))))));
		} else {
			var err = _v1.a;
			return _Utils_Tuple2(
				_Utils_Tuple0,
				$author$project$Generate$onSuccessSend(
					$chelovek0v$bbase64$Base64$Encode$encode(
						$chelovek0v$bbase64$Base64$Encode$bytes(
							$eriktim$elm_protocol_buffers$Protobuf$Encode$encode(
								$author$project$Proto$Google$Protobuf$Compiler$encodeCodeGeneratorResponse(
									{
										error: err,
										file: _List_Nil,
										supportedFeatures: A2($eriktim$elm_protocol_buffers$Protobuf$Types$Int64$fromInts, 0, 0)
									}))))));
		}
	} else {
		var err = _v0.a;
		return _Utils_Tuple2(
			_Utils_Tuple0,
			$author$project$Gen$CodeGen$Generate$error(
				_List_fromArray(
					[err])));
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Generate$main = $elm$core$Platform$worker(
	{
		init: $author$project$Generate$init,
		subscriptions: function (_v0) {
			return $elm$core$Platform$Sub$none;
		},
		update: F2(
			function (_v1, model) {
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			})
	});
_Platform_export({'Generate':{'init':$author$project$Generate$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (request) {
			return $elm$json$Json$Decode$succeed(
				{request: request});
		},
		A2($elm$json$Json$Decode$field, 'request', $elm$json$Json$Decode$string)))(0)}});}(this));