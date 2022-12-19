# TraceStore



| Property | Env Variable | Description | Default |
| :--- | :--- | :--- | :--- |
| BlocksToKeep | NETHERMIND_TRACESTORECONFIG_BLOCKSTOKEEP | Defines how many blocks counting from head are kept in the TraceStore, if '0' all traces of processed blocks will be kept. | 10000 |
| DeserializationParallelization | NETHERMIND_TRACESTORECONFIG_DESERIALIZATIONPARALLELIZATION | Maximum parallelization when deserializing requests for trace_filter. 0 defaults to logical cores, set to something low if you experience too big resource usage. | 0 |
| Enabled | NETHERMIND_TRACESTORECONFIG_ENABLED | Defines whether the TraceStore plugin is enabled, if 'true' traces will come from DB if possible. | false |
| TraceTypes | NETHERMIND_TRACESTORECONFIG_TRACETYPES | Defines what kind of traces are saved and kept in TraceStore. Available options are: Trace, Rewards, VmTrace, StateDiff or just All. | Trace, Rewards |
