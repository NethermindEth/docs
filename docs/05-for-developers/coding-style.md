---
description: Nethermind C# Coding Style
---

# Coding Style

## General Rules:

* We use four spaces for indentation (not tabs).
* Do not use Hungarian Notation!
* Avoid more than one empty line at any time. For example, do not have two blank lines between members of a type.
* If a file happens to differ in style from these guidelines (e.g. private members are named m\_member rather than
  \_member), the existing style in that file takes precedence.
* We only use `var` when it's obvious what the variable type is (e.g. `var stream = new FileStream(...)`
  not `var stream = OpenStandardInput()`).
* Fields should be specified at the top within type declarations.
* When using a single-statement `if`, we follow these conventions:
	* Using braces is always accepted, and required if any block of an if/else if/.../else compound statement uses braces
	  or if a single statement body spans multiple lines.
	* Braces may be omitted only if the body of every block associated with an if/else if/.../else compound statement is
	  placed on a single line.&#x20;
* Avoid complex conditions in ternary operators.
* Avoid declaring methods with more than 5 parameters. Consider refactoring this code.
* Try to replace large parameter-sets (> than 5 parameters) with one or more `class` or `struct` parameters –
  
  especially when used in multiple method signatures.&#x20;
* Always call `Close()` or `Dispose()` on classes that offer it.&#x20;
* Wrap instantiation of `IDisposable` objects with a “`using`” statement to ensure that Dispose() is
  
  automatically called.
* Always prefer aggregation over inheritance.&#x20;

## Naming:

* We use `camelCase` for local variables and parameters.
* We use `_camelCase` for internal and private fields and use readonly where possible. Prefix internal and private
  instance fields with `_`, and thread static fields with `t_`.
* We use `snake_case` for test method names.
* We use `IPascalCase` for interfaces names (see the `I` prefix).
* For the rest of identifiers not specified here, we use `PascalCase`.
