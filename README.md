# poke
another data validate dsl


## Example

```javascript
const models = {
    id: '3',
    type: '3',
    name: 'pokemon-go',
    password: '233333',
    created_at: null,
    updated_at: null
}

poke.validator({
    // OPTIONAL: [builder: models]
    rules: `
        |> id!type!name!password! |>
        |> id=3 && type!name!password!
    `
})

let errors = poke.resolve({
    models: {
        id: null,
        type: null,
        name: null,
        password: null,
        created_at: null,
        updated_at: null
    }
}))

deepEql(errors, {
    data: {
        id: {
            reason: 'params id is required',
            type: 'params missing'
        },
        type: {
            reason: 'params type is required',
            type: 'params missing'
        },
        name: {
            reason: 'params name is required',
            type: 'params missing'
        },
        password: {
            reason: 'params password is required',
            type: 'params missing'
        },
        created_at: {
            reason: 'params created_at is required',
            type: 'params missing',
        },
        updated_at: {
            reason: 'params created_at is required',
            type: 'params missing',
        }
    }
})

// module.exports = models
module.exports = {
    a: `
        |> id!type!name!password! |>
        |> id=3 && type!name!password!
        |> id=5 && type!name!password!
`,
    b: `
        |>
        |> id=5 && type!name!password!
`,
    c: `
        |
`,
    d: `
    |>|>|>
`
}
```
