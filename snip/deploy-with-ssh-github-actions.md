---
slug: deploy-with-ssh-github-actions
title: deploy-with-ssh-github-actions
description: TODO Add description here
authors: kiroki
tags: [devops,git]
---

# deploy-with-ssh-github-actions

Date created: 2024-10-01

# Use Github actions to deploy to a server through SSH

- Add the following secrets to your Github repo
    - `SSH_HOST`
    - `SSH_USERNAME`
    - `SSH_PRIVATE_KEY`

- Add the following job to your github actions workflow, and modify the script
that is being run on the server.

```yaml
jobs:
  deploy:
    name: Deploy
    needs: build_test
    runs-on: ubuntu-latest
    steps:
    - name: Deploy using ssh
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SSH_HOST }}
        username: ${{ secrets.SSH_USERNAME }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        port: 22
        script: |
          ssh-keyscan -H github.com >> ~/.ssh/known_hosts
          cd <project/directory/on/server>
          git pull origin master
          git status
          npm install
          npm run build
```
