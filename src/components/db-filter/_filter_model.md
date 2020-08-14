updated 2020.7.5

# Models


---------------------------------------
## opConfig #FOG - config
---------------------------------------
```js
        {
            category: '',        // filter id
            opc:[],              // configured fields
            resources:[],        // functions - download more fields
        }
```


---------------------------------------
## Filterbox #FBX - state
---------------------------------------
```js
        {
            filter_CATEGORY: FLI
        }
```


---------------------------------------
## opFilter #FLI - filter model
---------------------------------------
```js
        {
            category:   '',
            active:     false,
            loaded:     false,

            ops: [],
            raw: {},

            label:      'New Filter',
            searchRule: 'any',
            lastResult: false,
        }
```


---------------------------------------
## opErator #OPS/OP - filter condition model
---------------------------------------
```js
        {
            id:    'Protein',
            label: 'Protein',

         // OPC values

            group: 'General',
            type:  'single',
            valuesList: [],         // type:list
            Suggest: f=>false,      // type:suggestion

         // OPS values

            taken: false,
            value: new opValues(),
            suggestring: '',        // type:suggestion
        }
```


---------------------------------------
## opValue - value model
---------------------------------------
```js
        {
            single:'',
            from:'',
            to:'',
            list:[],
        }
```


# Stories

---------------------------------------
## opLoader Story
---------------------------------------

UnpackFOG
// Create FLI
// Create OPS
// Report Loaded

---------------------------------------
## opConstructor component
---------------------------------------







