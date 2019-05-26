const assert = require('assert');
const path = require('path');

const { getDirectories, isFunction, notUndefined } = require('./util');

(function main() {
    const faultSeedingRoot = path.resolve(
        __dirname, 
        '..', 
        path.join('src', 'challenges', 'fault-seeding'));

    getDirectories(faultSeedingRoot)
        .map(loadChallenge)
        .forEach(testChallenge);
})();

function loadChallenge(base) {
    const manifest = require(path.join(base, 'manifest.json'));

    const solutions = getDirectories(path.join(base, 'solutions'))
        .map(loadSolution);

    return {
        evaluator: require(path.join(base, 'evaluator')),
        solutions,
        title: manifest.title
    };
};

function loadSolution(base) {
    const manifest = require(path.join(base, 'manifest.json'));

    return {
        module: require(base),
        testCases: require(path.join(base, 'test.js')),
        title: manifest.title
    };
};

function testChallenge(challenge) {
    describe(challenge.title, function challengeTester() {
        challenge.solutions
            .forEach(solution => testSolution(challenge.evaluator, solution));
    });
};

function testSolution(evaluator, solution) {
    describe(solution.title, function solutionTester() {
        solution.testCases
            .forEach(testCase => runTestCase(evaluator, solution.module, testCase));
    });
};

function runTestCase(evaluator, solutionModule, testCase) {
    it(testCase.description, function testCaseRunner() {
        const output = isFunction(testCase.test)
            ? runFunctionTestCase(evaluator, solutionModule, testCase.test)
            : runInputTestCase(evaluator, solutionModule, testCase.test);

        if (bothError(output.evaluator, output.solution)) {
            compareError(output.evaluator, output.solution);
        }

        if (bothResult(output.evaluator, output.solution)) {
            compareResult(output.evaluator, output.solution);
        }
    });
};

function runFunctionTestCase(evaluator, solutionModule, testFn) {
    return {
        evaluator: executeWithSolution(testFn, evaluator),
        solution: executeWithSolution(testFn, solutionModule)
    };
};

function runInputTestCase(evaluator, solutionModule, testInput) {
    return {
        evaluator: executeWithInput(evaluator, testInput),
        solution: executeWithInput(solutionModule, testInput),
    };
};

function executeWithSolution(fn, solution) {
    let error = undefined;
    let result = undefined;

    try {
        result = fn(solution);
    } catch (e) {
        error = e;
    }

    return {
        error,
        result
    };
};

function executeWithInput(fn, input) {
    let error = undefined;
    let result = undefined;

    try {
        result = fn(...input);
    } catch (e) {
        error = e;
    }

    return {
        error,
        result
    };
};

function bothError(a, b) {
    return notUndefined(a.error) && notUndefined(b.error);
};

function bothResult(a, b) {
    return notUndefined(a.result) && notUndefined(b.result);
};

function compareError(a, b) {
    assert.notDeepStrictEqual(a.error.message, b.error.message);
};

function compareResult(a, b) {
    assert.notDeepStrictEqual(a.result, b.result);
};
