# MinVer Version Action

A simple composite GitHub Action to run [`minver-cli`](https://github.com/adamralph/minver) and return the semantic version for the current repository.

## ✅ What It Does

- Installs `minver-cli` globally
- Runs `minver`
- Outputs the calculated version for use in workflows

## 🧪 Example Usage
If your needs are straight forward, you can call this simply like:
```yaml
- name: Get semantic version
  uses: oatcake-development/minver-gh-action@v0.0.1
  id: minver

- run: echo "Version is ${{ steps.minver.outputs.version }}"
```

A better example though, is to store the output into an environment variable so you can use it in later steps.

```yaml
name: Use MinVer Output

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Get semantic version using MinVer
        id: minver
        uses: oatcake-development/minver-gh-action@v0.0.1

      - name: Export VERSION environment variable
        run: echo "VERSION=${{ steps.minver.outputs.version }}" >> $GITHUB_ENV

      - name: Use VERSION in a command
        run: |
          echo "Building version $VERSION"
          # Example of using it in a real command:
          dotnet build -p:Version=$VERSION

```