# Reproduction

Amplify Gen 2 destroys DynamoDB Tables upon adding a Secondary Index.

1. Deploy sample environment and place `amplify_outputs.json` in project root
2. Add data with `yarn add-data`
3. Add secondary index (uncomment) and re-deploy
