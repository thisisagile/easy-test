# easy-test

<a href="https://www.npmjs.com/package/@thisisagile/easy-test" target="_blank"><img src="https://img.shields.io/npm/v/@thisisagile/easy-test.svg" alt="npm version" /></a>
<a href="https://www.npmjs.com/package/@thisisagile/easy-test" target="_blank"><img src="https://img.shields.io/npm/dm/@thisisagile/easy-test.svg" alt="npm downloads" /></a>
<a href="https://github.com/thisisagile/easy-test/actions?query=workflow%3A%22pipeline%22"><img src="https://github.com/thisisagile/easy-test/workflows/pipeline/badge.svg?branch=main" alt="pipeline status" /></a>
<a href="https://sonarcloud.io/dashboard?id=thisisagile_easy-test" target="_blank"><img src="https://sonarcloud.io/api/project_badges/measure?project=thisisagile_easy-test&metric=alert_status" alt="quality gate" /></a>
<a href="https://github.com/semantic-release/semantic-release" target="_blank"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release" /></a>
<a href="https://sonarcloud.io/dashboard?id=thisisagile_easy-test" target="_blank"><img src="https://sonarcloud.io/api/project_badges/measure?project=thisisagile_easy-test&metric=coverage" alt="coverage" /></a>


A simple, straightforward small library for testing microservices that have been built  with the @thisisagile/easy library, based on Jest. 

We also include some commodity utilities for making testing with Jest easier, and a monad for making custom Jest matchers. We've added matchers for:

- `toBeValid()`. Checks for `isValid` property on subject.
- `toBeArrayOf()`. Validates if a subject is an array, and if all elements are instances of the type.



Please note: we are slowly adding more value to the library, step by step. Most of our additions are useful as such, both it will take some effort for the full architecture to be in place to implement fully working microservices. Please bare with us.
