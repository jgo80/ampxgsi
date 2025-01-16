import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { v4 as uuid } from 'uuid';
import type { Schema } from './amplify/data/resource';
import outputs from './amplify_outputs.json';

Amplify.configure(outputs);

const client = generateClient<Schema>()

const addData = client.models.Todo.create({
    userId: uuid(),
    content: 'content',
    isDone: false
})

addData.then(console.log)