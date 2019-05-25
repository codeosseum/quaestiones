module.exports = [
    {
        description: "Will throw a TypeError instead of returning 0.",
        test(solution) {
            return solution(null)
        }
    },
    {
        description: "Will throw a TypeError instead of returning 0.",
        test(solution) {
            return solution(undefined)
        }
    },
    {
        description: "Will throw a TypeError instead of returning 0.",
        test(solution) {
            return solution({})
        }
    },
    {
        description: "Will throw a TypeError instead of returning 0.",
        test(solution) {
            return solution(0)
        }
    }
];
