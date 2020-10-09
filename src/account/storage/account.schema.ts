export const AccountSchema = {
    index: 'account',
    body: {
        settings: {
            analysis: {
                analyzer: {
                    autocomplete_analyzer: {
                        tokenizer: 'autocomplete',
                        filter: ['lowercase'],
                    },
                    autocomplete_search_analyzer: {
                        tokenizer: 'keyword',
                        filter: ['lowercase'],
                    },
                },
                tokenizer: {
                    autocomplete: {
                        type: 'edge_ngram',
                        min_gram: 1,
                        max_gram: 30,
                        token_chars: ['letter', 'digit', 'whitespace'],
                    },
                },
            }
        },
        mappings: {
            properties: {
                firstName: { type: 'text'},
                lastName: { type: 'text'},
                username: { type: 'text' },
                email: { type: 'text' },
                profileImageUrl: { type: 'text' },
                createdAt: { type: 'date'},
                updatedAt: { type: 'date'}
            }
        }
    }
}