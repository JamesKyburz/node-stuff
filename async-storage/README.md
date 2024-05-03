# Playing with async local storage

## idea:

Instead of passing around loggers, abortSignals and helper functions we could use async local storage.

```sh
node main.mjs
id 0 handler started {"a":0.05243540186664575,"b":0.8268964083827413}
id 1 handler started {"a":0.06405744638582767,"b":0.6027769267213714}
id 2 handler started {"a":0.38606308819139046,"b":0.667718448889826}
id 0 handler completed {"a":0.05243540186664575,"b":0.8268964083827413}
id 1 handler completed {"a":0.06405744638582767,"b":0.6027769267213714}
id 2 handler completed {"a":0.38606308819139046,"b":0.667718448889826}
0.04335864547563505
0.03861235066606822
0.25778144642077133
```
