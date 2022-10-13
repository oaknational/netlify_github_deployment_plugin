# Oak Netlify GitHub Deployment Plugin

A Netlify plugin for reporting deployment related events into GitHub.

Located in [`netlify/plugins/github-deployments`](netlify/plugins/github-deployments)

Requires an env variable called `GITHUB_DEPLOYMENT_TOKEN` to exist containing a [GitHub PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with repo permissions.

An example GitHub workflow triggered from a `deployment_status` event can be found [here](.github/workflows/post_deployment_actions.yml).

## Further Reading

- [Netlify Custom Plugin Docs](https://docs.netlify.com/integrations/build-plugins/create-plugins/)
- GitHub Docs
  - [`deployment_status` events triggering workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#deployment_status)
  - [deployment_status events](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment_status)
  - [Deployment related REST definitions](https://docs.github.com/en/rest/deployments/deployments)
  - [@actions/github - the GitHub API used to create the REST API calls](https://github.com/actions/toolkit/tree/main/packages/github)
