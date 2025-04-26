# TODO

## CI/CD Automation for semantic-release

- [ ] **Set up CI/CD workflow to automate semantic-release**
    - Configure a workflow (e.g., GitHub Actions, GitLab CI) to run `npx semantic-release` on every push/merge to `main`.
    - This will automate versioning, changelog generation, and tagging—no manual release steps needed.
    - See `.releaserc.json` for current configuration.
    - Example for GitHub Actions:
      ```yaml
      name: Release
      on:
        push:
          branches:
            - main
      jobs:
        release:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                node-version: '20'
            - run: npm ci
            - run: npx semantic-release
              env:
                GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      ```
    - For npm publishing, add NPM_TOKEN to secrets and update `.releaserc.json` if needed.

- [ ] (Optional) Enforce Conventional Commits with commitlint/husky or commitizen for better team compliance.

---

**Last updated:** 2025-04-26
