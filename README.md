# MinVer Version Action

A simple composite GitHub Action to run [`minver-cli`](https://github.com/adamralph/minver) and return the semantic version for the current repository.

## ✅ What It Does

- Installs `minver-cli` globally
- Runs `minver`
- Outputs the calculated version for use in workflows

## 🧪 Example Usage

```yaml
- name: Get semantic version
  uses: yourgithub/minver-version-action@v1
  id: minver

- run: echo "Version is ${{ steps.minver.outputs.version }}"
