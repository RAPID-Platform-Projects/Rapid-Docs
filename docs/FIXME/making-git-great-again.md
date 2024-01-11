# Making Git great again

When working with git, especially in a team context, It is important to follow a standard to enforce consistent git branches and git commits.

Here at RapidPlatform, we have developed our own style guide for working with git, Our style guide is tightly inspired and borrowed from [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/) which provides a great way to enforce consistent styling across teams.

#### Terms

**&lt;scope&gt;** - bug | feature | story | task | hotfix

Relates to what the branch you're creating is focusing on; For example, a bug or feature.

**&lt;win&gt;** - (number)

Relates to the number of the work item inside of DevOps that was created; For example, if a work item was created in azure DevOps, its ID would be something like this `1864`

**&lt;scope&gt;** - fix | task | feat | chore | docs | style | refactor | test | build

#### Creating a Branch

When creating a git branch, you must create it with the following format:

```CSS
<scope>/<win>
```

#### Writing Commit Messages

When writing commit messages, you must create it with the following format:

```CSS
<type>: A short description of what you changed<br></br>[optional body]<br></br>[optional footer(s)]
```