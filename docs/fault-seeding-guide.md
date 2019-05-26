# Fault Seeding Contributing Guide

  1. [What is Fault Seeding?](#what-is-fault-seeding)
  2. [Developing Solutions](#developing-solutions)
  3. [Developing Specifications](#developing-specifications)

## What is Fault Seeding?

This section quickly skims through the basic mechanics of the Fault Seeding game mode.

### Basic Info

  * Fault Seeding is a free-for-all game mode: each player is on its own.
  * Number of players: 2 or more.
  * Objective: Collect the most number of points until the time runs out.

### Gameplay

Each player is working on the same challenge. However, only the first one who solves the challenge gets reward. Afterwards, a new challenge is selected. This goes on util the time runs out.

A challenge consists of a specification and a solution which does not adhere fully to the specification. The task of the players is to identify an input for which the output provided by solution contradicts the specification.

## Developing Solutions

Prior to creating a new specification, a good starting point is to create a new solution for an existing specification.

Let's assume, that you want to create a new solution for the `example-spec` specification! The process is as follows:

  0. [Naming Your Solution](#0.-naming-your-solution)
  1. [Solution Directory](#1.-solution-directory)
  2. [Solution Manifest File](#2.-solution-manifest-file)
  3. [Description and Breakdown](#3.-description-and-breakdown)
  4. [Actual Solution Code](#4.-actual-solution-code)
  5. [Test Cases](#5.-test-cases)
  6. [Running the Tests](#6.-running-the-tests)

### 0. Naming Your Solution

The name of your solution should refer to the contradiction between the solution and the specification.

### 1. Solution Directory

Create a new directory under the `src/fault-seeding/challenges/example-spec/solutions` directory named after your solution. Directory names should be in [kebab-case](https://en.toolpage.org/tool/kebabcase).

### 2. Solution Manifest File

The manifest is a machine readable solution descriptor in JSON format. The schema of this file can be found at [solution-manifest.schema.json](../src/schemas/fault-seeding/solution-manifest.schema.json).

This file must be placed in the solution directory.

### 3. Description and Breakdown

A human readable description of the solution in the form of a `README.md`. This file must include a `Breakdown` section where the bug is highlighted.

This file must be placed in the solution directory.

### 4. Actual Solution Code

An `index.js` file containing the actual solution. This file must be written as stated in the specification with a little bug hidden inside.

This file must be placed in the solution directory.

### 5. Test Cases

Test cases that catch the bug in the newly created solution. The `test.js` file must export an array of test cases.

A test case is an object of the following shape:

~~~~js
{
    description: 'A short description of the case.`,
    test
}
~~~~

where the `test` field can be any of the following two:

  * A function taking a single parameter, a solution. The function must return with the result of that should be compared.
  * An array of input parameters the solutions will be called with.

This file must be placed in the solution directory.

### 6. Running the Tests

Run the `npm run test` command in the repository root and make sure, that all tests are green!

### Writing Good Solutions

Here are some tips to write good solutions:

  * Break for a single class of inputs.
    * If your solution breaks only for a single class of inputs, it makes it much harder to find a contradicting input.
  * Use real-world inspirations.
    * Typically, bugs inspired by real-world code work best, as those are the hardest to spot.
  * Feel free to be evil.
    * Misleading comments? Sure!

## Developing Specifications

The process is as follows:

  0. [Naming Your Specification](#0.-naming-your-specification)
  1. [Specification Directory](#1.-specification-directory)
  2. [Specification Manifest File](#2.-specification-manifest-file)
  3. [Description](#3.-description)
  4. [Evaluator Code](#4.-evaluator-code)
  5. [Starter Code](#5.-starter-code)
  6. [Solution](#6.-solution)

### 0. Naming Your Specification

The name of your solution be as short and catchy as possible.

### 1. Specification Directory

Create a new directory under the `src/fault-seeding/challenges` directory named after your specification. Directory names should be in [kebab-case](https://en.toolpage.org/tool/kebabcase).

### 2. Specification Manifest File

The manifest is a machine readable specification descriptor in JSON format. The schema of this file can be found at [challenge-manifest.schema.json](../src/schemas/fault-seeding/challenge-manifest.schema.json).

This file must be placed in the specification directory.

### 3. Description

The actual specification text in a `README.md` file. The following sections are recommended:

  * Task
  * Signature
  * Behaviour
  * Input Format
  * Output Format
  * Examples

This file must be placed in the specification directory.

### 4. Evaluator Code

A perfect implementation of the specification. Make sure, that this solution adheres completely to the spec, as this is going to be used as the gold standard when evaluating the output of erroneous solutions.

This code must be in an `index.js` file placed under the `evaluator` directory in the specification directory.

### 5. Starter Code

A simple `index.js` file placed in the `starter` directory containing an empty but signature-wise correct implementation of the specification.

### 6. Solution

Create one or more solutions to your new specification according to the [Developing Solutions](#developing-solutions) section.

### Writing Good Specification

Here are some tips to write good specifications:

  * Choose a simple problem.
    * Codeosseum is intended to be a fast-paced competitive platform. Therefore, make sure that you choose problems that can be easily described.
  * Choose a problem with many pitfalls.
    * Make sure, that the problem is not only easy to comprehend, but easy to get wrong too.
  * Use real-world inspirations.
    * Just as in the case for solutions, best problems have real-world roots.
  * Be as specific as possible.
    * Vague specifications make it hard to create new solutions and even harder to catch bugs. However, this is not the good kind of *hard*.
