---
toc:
  maxDepth: 4
---

# {%= name %}

<!-- toc -->

## Build status

[![Build Status: Linux](https://travis-ci.org/{%= repository.owner %}/{%= name %}.svg?branch=master)](https://travis-ci.org/{%= repository.owner %}/{%= name %})

## Install

{%= docs('install-npm') %}

## Tasks


### behat-definitions

{%= docs('task-behat-definitions') %}


### behat-story-syntax

{%= docs('task-behat-story-syntax') %}


### behat-config-reference

{%= docs('task-behat-config-reference') %}


### behat-run

{%= docs('task-behat-run') %}


### behat-rerun

{%= docs('task-behat-rerun') %}


## Configuration

{%= docs('config') %}

## Flags

{%= docs('flags') %}

## Examples

{%= docs('examples') %}

## Author

{%= docs('author') %}

## Release History

{%= docs('release-history', {releaseHistory: arguments[0].releaseHistory}) %}

## License

{%= copyright() %}
{%= license() %}
