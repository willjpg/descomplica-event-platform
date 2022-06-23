import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qdr4f33ykz01xl3ia1127k/master',
    cache: new InMemoryCache()
})