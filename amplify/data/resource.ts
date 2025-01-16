import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      userId: a.id().required(),
      content: a.string(),
      isDone: a.boolean(),
    })
    .secondaryIndexes((index) => [index('userId')]) // Add this in step 3
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
