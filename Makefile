.PHONY: next clean super-clean

define CHANGESET
---
"@fabric/core": patch
---

snapshot
endef

export CHANGESET

define OUTRO

======
You now have unstaged version bumps in all packages' package.json
Make sure NOT to push or merge those changes to any shared origins.
======
endef

export OUTRO

next:
	@npm run build
	@echo "$$CHANGESET" > ./.changeset/snapshot.md
	@npx changeset version --snapshot next
	# We specify the --otp switch below. This is just to prevent changeset
	# from contacting npmjs.org in order to detect 2fa settings.
	@npx changeset publish --tag next --no-git-tag --otp=1234567
	@git checkout -- packages/*/CHANGELOG.md
	@echo "$$OUTRO"

clean:
	rm -rf packages/*/node_modules
	rm -rf packages/*/dist
	rm -rf docs/node_modules

super-clean: clean
	rm -f package-lock.json
	rm -f docs/package-lock.json
