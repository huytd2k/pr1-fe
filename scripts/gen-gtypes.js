const util = require('util');
const execPromise = util.promisify(require('child_process').exec);
const { generateTypeScriptTypes } = require('graphql-schema-typescript');
const GraphqlUtils = require('graphql/utilities');
const path = require('path');
// require('dotenv').config();
const GRAPHQL_ENDPOINT = 'http://localhost:3000/graphql';
const SCHEMA_PATH = 'types/schema.json';
const generateGtypes = async () => {
  await execPromise(`node_modules/.bin/apollo schema:download ${SCHEMA_PATH} --endpoint=${GRAPHQL_ENDPOINT}`);
  const schemaSDL =  GraphqlUtils.printSchema(
    GraphqlUtils.buildClientSchema({ __schema: require('../types/schema.json').__schema })
  );
  const options = {
    typePrefix: '',
    noStringEnum: true,
    smartTResult: true,
    asyncResult: true
  };
  const outputPath = path.join(__dirname, '../gtypes.d.ts');
  await generateTypeScriptTypes(schemaSDL, outputPath, options)
};
generateGtypes().then(() => {
  console.log('Complete generate Gtypes.');
}).catch(err => {
  console.log(`Error to generate Gtypes: ${err}`);
});