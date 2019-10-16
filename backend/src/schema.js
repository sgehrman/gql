import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const handleMessage = () => {
  return "handleMessage";
};

const params = {
  name: "hello",
  fields: () => ({
    message: {
      type: GraphQLString,
      resolve: handleMessage
    }
  })
};

const schema = new GraphQLSchema({
  query: new GraphQLObjectType(params)
});

export default schema;
