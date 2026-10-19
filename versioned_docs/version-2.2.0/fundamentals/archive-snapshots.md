---
title: Archive snapshots
sidebar_position: 9
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nethermind publishes archive database snapshots for Ethereum Mainnet and Gnosis. Restoring one gives you a full [flat archive](./archive-nodes.md) at a recent block in hours, instead of re-executing every block since genesis. The node then syncs the remaining blocks to the head as usual.

The snapshots are flat archive databases with history. The full Mainnet archive is about 2.2 TB on disk.

:::warning Important
The snapshots require Nethermind 2.1.0 or later. Earlier versions cannot open them.
:::

There are no full or pruned snapshots. For a non-archive node, [snap sync](./sync.md#snap-sync) reaches the head faster than downloading and extracting a snapshot.

## Available snapshots

All files are served from `https://mainnet-archive-snapshot.nethermind.dev/`, which supports range requests. Every snapshot has a `.sha256` file next to it in `sha256sum` format.

| Network | Type                        | Head block | Download | Extracted | Free space to restore | Files                                                                                                                                                                                                                                                                                |
| ------- | --------------------------- | ---------- | -------- | --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mainnet | Archive                     | 26032570   | 2.00 TB  | ~2.2 TB   | 2.99 TB               | [tar.zst](https://mainnet-archive-snapshot.nethermind.dev/mainnet/archive/mainnet-archive-flat-history-26032570.tar.zst), [sha256](https://mainnet-archive-snapshot.nethermind.dev/mainnet/archive/mainnet-archive-flat-history-26032570.tar.zst.sha256)                             |
| Mainnet | Archive + historical proofs | 26060582   | 3.89 TB  | ~4.0 TB   | 5.83 TB               | [tar.zst](https://mainnet-archive-snapshot.nethermind.dev/mainnet/archive-proofs/mainnet-archive-flat-history-proofs-26060582.tar.zst), [sha256](https://mainnet-archive-snapshot.nethermind.dev/mainnet/archive-proofs/mainnet-archive-flat-history-proofs-26060582.tar.zst.sha256) |
| Gnosis  | Archive                     | 48054745   | 825 GB   | 1.01 TB   | 1.24 TB               | [tar.zst](https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive/gnosis-archive-flat-history-48054745.tar.zst), [sha256](https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive/gnosis-archive-flat-history-48054745.tar.zst.sha256)                                 |
| Gnosis  | Archive + historical proofs | 48692569   | 1.31 TB  | 1.53 TB   | 1.96 TB               | [tar.zst](https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive-proofs/gnosis-archive-flat-history-proofs-48692569.tar.zst), [sha256](https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive-proofs/gnosis-archive-flat-history-proofs-48692569.tar.zst.sha256)     |

Sizes are in decimal units (1 TB = 10<sup>12</sup> bytes). "Free space to restore" is what the Snapshot plugin checks for before it starts: 1.5 times the download size, on the drive that holds the database. Leave room on top of the extracted size for the database to grow as the node follows the chain.

Each snapshot was checked before publishing: every block from genesis to the snapshot head was replayed on Nethermind 2.1.0 and matched its block header, with no mismatches. The historical proofs in the proofs snapshots were verified against the state roots in the block headers.

## Choosing a snapshot

- **Archive** is a [full archive](./archive-nodes.md#archive-shapes): historical state at every block from genesis (`eth_call`, `eth_getBalance`, `eth_getStorageAt`, `eth_getCode`), blocks and receipts from genesis (`eth_getBlockBy*`, `eth_getTransactionReceipt`, `eth_getLogs`), and traces of any block (`debug_trace*`, `trace_*`).
- **Archive + historical proofs** adds the commitment layer for [historical proofs](./archive-nodes.md#historical-proofs), so `eth_getProof` answers at any height, not only near the head. Pick it only if you need old proofs: on Mainnet it is nearly twice the size of the plain archive.

## Restoring with the Snapshot plugin

The built-in Snapshot plugin downloads the archive, verifies its checksum, and extracts it into the database directory before the node starts. With [`Snapshot.Streaming`](./configuration.md#snapshot-streaming) enabled, it extracts while it downloads, over several parallel connections, without storing the archive on disk. Use it for these snapshots.

The options below are the ones we use to restore these snapshots. The full list, with defaults, is in the [configuration reference](./configuration.md#snapshot-checksum).

| Option                                                                              | Value                  | Why                                                                                                                                      |
| ----------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [`Snapshot.Enabled`](./configuration.md#snapshot-enabled)                           | `true`                 | Turns the plugin on.                                                                                                                     |
| [`Snapshot.DownloadUrl`](./configuration.md#snapshot-downloadurl)                   | the snapshot URL       | Where to download the archive from.                                                                                                      |
| [`Snapshot.Checksum`](./configuration.md#snapshot-checksum)                         | `0x` + the SHA-256     | Checked against the downloaded bytes. On a mismatch the extracted database is deleted.                                                   |
| [`Snapshot.SnapshotFileName`](./configuration.md#snapshot-snapshotfilename)         | the snapshot file name | The plugin picks the archive format from this name. The default, `snapshot.zip`, makes streaming fail, so set it to the `.tar.zst` name. |
| [`Snapshot.Streaming`](./configuration.md#snapshot-streaming)                       | `true`                 | Extracts while downloading, so the archive is never stored.                                                                              |
| [`Snapshot.StreamingConnections`](./configuration.md#snapshot-streamingconnections) | `8`                    | Parallel connections, 1 to 16. Default `4`. Peak buffer memory is (connections + 1) x 64 MiB.                                            |
| [`Snapshot.StripComponents`](./configuration.md#snapshot-stripcomponents)           | `1`                    | Each archive has one top-level directory, for example `gnosis_archive/`. `1` is the default; it is set here to be explicit.              |

Use `--config mainnet_archive` or `--config gnosis_archive`. These configurations already enable `FlatDb.Enabled` and `FlatDb.HistoryEnabled`; the examples set them explicitly anyway, since the snapshots are flat archives with history and the node must open them that way.

Always set [`--data-dir`](./configuration.md#data-dir). The database is extracted to `<data-dir>/nethermind_db/mainnet_archive` or `<data-dir>/nethermind_db/gnosis_archive`, and the plugin keeps its progress file in `<data-dir>/snapshot`. Both must be on persistent storage; with Docker, that means a mounted volume.

:::warning Important
Only enable the plugin on an empty database directory. If the database directory has data but there is no completed restore recorded in `<data-dir>/snapshot`, the plugin assumes an interrupted restore, deletes the database, and starts over. Remove the `Snapshot.*` options once the restore is done.
:::

### Archive + historical proofs

To serve historical proofs from a proofs snapshot, also set:

- [`FlatDb.ArchiveProofServeEnabled`](./configuration.md#flatdb-archiveproofserveenabled) `true` to answer `eth_getProof` below the head from the commitments.
- [`FlatDb.ArchiveProofBuildEnabled`](./configuration.md#flatdb-archiveproofbuildenabled) `true` to keep writing commitments for new blocks, from the snapshot head onwards.

Leave [`FlatDb.ArchiveProofRecentEpochs`](./configuration.md#flatdb-archiveproofrecentepochs) at its default, `0`, which keeps every epoch. A non-zero value deletes the older epochs the snapshot ships with.

`eth_getProof` is in the `eth` namespace, and the `proof` namespace is enabled by default too. If you set [`JsonRpc.EnabledModules`](./configuration.md#jsonrpc-enabledmodules) yourself, keep `eth` in it, and `proof` if you use its methods.

### Examples

The examples only show the snapshot-related options. Add the options you already use for the consensus client connection (JWT secret, Engine API) and JSON-RPC. A [consensus client](../get-started/running-node/consensus-clients.md) is needed once the restore finishes and the node starts syncing.

<Tabs groupId="snapshot">
<TabItem value="mainnet-archive" label="Mainnet archive">

<Tabs groupId="usage">
<TabItem value="docker" label="Docker">

```bash
docker run -d --name nethermind \
  --mount type=bind,source=/path/to/data,target=/nethermind/data \
  -p 30303:30303/tcp -p 30303:30303/udp \
  nethermind/nethermind:latest \
  --config mainnet_archive \
  --data-dir /nethermind/data \
  --FlatDb.Enabled true \
  --FlatDb.HistoryEnabled true \
  --Snapshot.Enabled true \
  --Snapshot.Streaming true \
  --Snapshot.StreamingConnections 8 \
  --Snapshot.StripComponents 1 \
  --Snapshot.SnapshotFileName mainnet-archive-flat-history-26032570.tar.zst \
  --Snapshot.DownloadUrl https://mainnet-archive-snapshot.nethermind.dev/mainnet/archive/mainnet-archive-flat-history-26032570.tar.zst \
  --Snapshot.Checksum 0xa0b07bcf2b52d08572cb68e9e5809f75cd9ab2f1d34b9a5a685edc0209a3611b
```

</TabItem>
<TabItem value="cli" label="CLI">

```bash
nethermind \
  --config mainnet_archive \
  --data-dir /path/to/data \
  --FlatDb.Enabled true \
  --FlatDb.HistoryEnabled true \
  --Snapshot.Enabled true \
  --Snapshot.Streaming true \
  --Snapshot.StreamingConnections 8 \
  --Snapshot.StripComponents 1 \
  --Snapshot.SnapshotFileName mainnet-archive-flat-history-26032570.tar.zst \
  --Snapshot.DownloadUrl https://mainnet-archive-snapshot.nethermind.dev/mainnet/archive/mainnet-archive-flat-history-26032570.tar.zst \
  --Snapshot.Checksum 0xa0b07bcf2b52d08572cb68e9e5809f75cd9ab2f1d34b9a5a685edc0209a3611b
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="mainnet-archive-proofs" label="Mainnet archive + proofs">

<Tabs groupId="usage">
<TabItem value="docker" label="Docker">

```bash
docker run -d --name nethermind \
  --mount type=bind,source=/path/to/data,target=/nethermind/data \
  -p 30303:30303/tcp -p 30303:30303/udp \
  nethermind/nethermind:latest \
  --config mainnet_archive \
  --data-dir /nethermind/data \
  --FlatDb.Enabled true \
  --FlatDb.HistoryEnabled true \
  --FlatDb.ArchiveProofBuildEnabled true \
  --FlatDb.ArchiveProofServeEnabled true \
  --Snapshot.Enabled true \
  --Snapshot.Streaming true \
  --Snapshot.StreamingConnections 8 \
  --Snapshot.StripComponents 1 \
  --Snapshot.SnapshotFileName mainnet-archive-flat-history-proofs-26060582.tar.zst \
  --Snapshot.DownloadUrl https://mainnet-archive-snapshot.nethermind.dev/mainnet/archive-proofs/mainnet-archive-flat-history-proofs-26060582.tar.zst \
  --Snapshot.Checksum 0xc4a6ba532d0510791ca1276b367e6c502b3ced54c9dd3ecc731963767604ba82
```

</TabItem>
<TabItem value="cli" label="CLI">

```bash
nethermind \
  --config mainnet_archive \
  --data-dir /path/to/data \
  --FlatDb.Enabled true \
  --FlatDb.HistoryEnabled true \
  --FlatDb.ArchiveProofBuildEnabled true \
  --FlatDb.ArchiveProofServeEnabled true \
  --Snapshot.Enabled true \
  --Snapshot.Streaming true \
  --Snapshot.StreamingConnections 8 \
  --Snapshot.StripComponents 1 \
  --Snapshot.SnapshotFileName mainnet-archive-flat-history-proofs-26060582.tar.zst \
  --Snapshot.DownloadUrl https://mainnet-archive-snapshot.nethermind.dev/mainnet/archive-proofs/mainnet-archive-flat-history-proofs-26060582.tar.zst \
  --Snapshot.Checksum 0xc4a6ba532d0510791ca1276b367e6c502b3ced54c9dd3ecc731963767604ba82
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="gnosis-archive" label="Gnosis archive">

<Tabs groupId="usage">
<TabItem value="docker" label="Docker">

```bash
docker run -d --name nethermind \
  --mount type=bind,source=/path/to/data,target=/nethermind/data \
  -p 30303:30303/tcp -p 30303:30303/udp \
  nethermind/nethermind:latest \
  --config gnosis_archive \
  --data-dir /nethermind/data \
  --FlatDb.Enabled true \
  --FlatDb.HistoryEnabled true \
  --Snapshot.Enabled true \
  --Snapshot.Streaming true \
  --Snapshot.StreamingConnections 8 \
  --Snapshot.StripComponents 1 \
  --Snapshot.SnapshotFileName gnosis-archive-flat-history-48054745.tar.zst \
  --Snapshot.DownloadUrl https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive/gnosis-archive-flat-history-48054745.tar.zst \
  --Snapshot.Checksum 0x2d9328c4be03cda21c837cb4f404e18d4dc3c5df387f1de33f763cf8e47e2071
```

</TabItem>
<TabItem value="cli" label="CLI">

```bash
nethermind \
  --config gnosis_archive \
  --data-dir /path/to/data \
  --FlatDb.Enabled true \
  --FlatDb.HistoryEnabled true \
  --Snapshot.Enabled true \
  --Snapshot.Streaming true \
  --Snapshot.StreamingConnections 8 \
  --Snapshot.StripComponents 1 \
  --Snapshot.SnapshotFileName gnosis-archive-flat-history-48054745.tar.zst \
  --Snapshot.DownloadUrl https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive/gnosis-archive-flat-history-48054745.tar.zst \
  --Snapshot.Checksum 0x2d9328c4be03cda21c837cb4f404e18d4dc3c5df387f1de33f763cf8e47e2071
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="gnosis-archive-proofs" label="Gnosis archive + proofs">

<Tabs groupId="usage">
<TabItem value="docker" label="Docker">

```bash
docker run -d --name nethermind \
  --mount type=bind,source=/path/to/data,target=/nethermind/data \
  -p 30303:30303/tcp -p 30303:30303/udp \
  nethermind/nethermind:latest \
  --config gnosis_archive \
  --data-dir /nethermind/data \
  --FlatDb.Enabled true \
  --FlatDb.HistoryEnabled true \
  --FlatDb.ArchiveProofBuildEnabled true \
  --FlatDb.ArchiveProofServeEnabled true \
  --Snapshot.Enabled true \
  --Snapshot.Streaming true \
  --Snapshot.StreamingConnections 8 \
  --Snapshot.StripComponents 1 \
  --Snapshot.SnapshotFileName gnosis-archive-flat-history-proofs-48692569.tar.zst \
  --Snapshot.DownloadUrl https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive-proofs/gnosis-archive-flat-history-proofs-48692569.tar.zst \
  --Snapshot.Checksum 0x76cbdab43c1652f8ddc7db066e2fae637caee2ba215215dd1dc20925d7f14d55
```

</TabItem>
<TabItem value="cli" label="CLI">

```bash
nethermind \
  --config gnosis_archive \
  --data-dir /path/to/data \
  --FlatDb.Enabled true \
  --FlatDb.HistoryEnabled true \
  --FlatDb.ArchiveProofBuildEnabled true \
  --FlatDb.ArchiveProofServeEnabled true \
  --Snapshot.Enabled true \
  --Snapshot.Streaming true \
  --Snapshot.StreamingConnections 8 \
  --Snapshot.StripComponents 1 \
  --Snapshot.SnapshotFileName gnosis-archive-flat-history-proofs-48692569.tar.zst \
  --Snapshot.DownloadUrl https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive-proofs/gnosis-archive-flat-history-proofs-48692569.tar.zst \
  --Snapshot.Checksum 0x76cbdab43c1652f8ddc7db066e2fae637caee2ba215215dd1dc20925d7f14d55
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

The same options can go in a [configuration file](./configuration.md#configuration-file):

```json
{
  "Snapshot": {
    "Enabled": true,
    "Streaming": true,
    "StreamingConnections": 8,
    "StripComponents": 1,
    "SnapshotFileName": "gnosis-archive-flat-history-48054745.tar.zst",
    "DownloadUrl": "https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive/gnosis-archive-flat-history-48054745.tar.zst",
    "Checksum": "0x2d9328c4be03cda21c837cb4f404e18d4dc3c5df387f1de33f763cf8e47e2071"
  }
}
```

The restore is done when the log shows `Database successfully initialized from streamed snapshot.` The node then starts and syncs from the snapshot head to the chain head.

## Disk and time

- **Disk.** The plugin refuses to start unless the drive holding the database has 1.5 times the download size free (the "Free space to restore" column). The finished database takes the extracted size, and grows from there.
- **Memory.** Streaming buffers up to (connections + 1) x 64 MiB, so 576 MiB with 8 connections.
- **Time.** Restore time depends mostly on download bandwidth and disk write speed. In our tests, a streaming restore of the 3.89 TB Mainnet archive + proofs snapshot took about 16.5 hours, and the node then took about 1.5 hours to catch up to the head. Catch-up time grows with the age of the snapshot.
- **Restarts.** A streaming restore cannot resume across a restart of Nethermind or its container: the partly extracted database is deleted and the download starts over. Dropped connections within a run are resumed automatically. Plan for an uninterrupted run.

If you cannot guarantee an uninterrupted run, set `Snapshot.Streaming` to `false`. The plugin then downloads the archive to `<data-dir>/snapshot` over a single connection, resumes the download after a restart, verifies the checksum, and extracts it. This needs room for the archive plus 1.5 times its size (2.5 times the download size in total) and is slower.

## Manual download

You can also download, verify, and extract a snapshot yourself, for example to use a different download tool or to restore several machines from one copy. This needs room for the archive and the extracted database at the same time.

1. Download the archive and its checksum file. The server supports range requests, so `aria2c` can use parallel connections, and `curl -C -` can resume an interrupted download:

   ```bash
   URL=https://mainnet-archive-snapshot.nethermind.dev/gnosis/archive/gnosis-archive-flat-history-48054745.tar.zst

   aria2c -x 8 -s 8 --file-allocation=none "$URL"
   # or: curl -fL -C - -O "$URL"

   curl -fLO "$URL.sha256"
   ```

2. Verify it. Run this in the directory holding both files:

   ```bash
   sha256sum -c gnosis-archive-flat-history-48054745.tar.zst.sha256
   ```

3. Stop Nethermind, then extract into the database directory of the configuration you will run: `<data-dir>/nethermind_db/mainnet_archive` for `mainnet_archive`, `<data-dir>/nethermind_db/gnosis_archive` for `gnosis_archive`. The directory must be empty. `--strip-components=1` drops the archive's top-level directory:

   ```bash
   DB=/path/to/data/nethermind_db/gnosis_archive
   mkdir -p "$DB"
   tar -I zstd -xf gnosis-archive-flat-history-48054745.tar.zst -C "$DB" --strip-components=1
   ```

   Run `tar` as the user that runs Nethermind, or `chown -R` the directory to that user afterwards.

4. Start Nethermind with the same `--config` and `--data-dir`, and with `--FlatDb.Enabled true --FlatDb.HistoryEnabled true` (plus the proof options for a proofs snapshot). Do not set the `Snapshot.*` options. With Docker, mount `/path/to/data` at `/nethermind/data` and pass `--data-dir /nethermind/data`.

## Troubleshooting

- **The database cannot be opened.** Check the Nethermind version: the snapshots need 2.1.0 or later.
- **`Insufficient disk space on '...' to extract the snapshot`.** The drive holding the database needs 1.5 times the download size free. See the table above.
- **`Snapshot streaming supports only tar-based archives`.** `Snapshot.SnapshotFileName` is still the default `snapshot.zip`. Set it to the snapshot's file name.
- **The download started over.** Nethermind or its container was restarted during a streaming restore. This is expected; see [Disk and time](#disk-and-time).
- **`Snapshot checksum verification failed`.** The extracted database is deleted and the node continues without a snapshot, which on an archive configuration means syncing from genesis. Stop the node and check that `Snapshot.Checksum` matches the `.sha256` file of the same snapshot as `Snapshot.DownloadUrl`.
- **The database was deleted on startup.** The `Snapshot.*` options were still set and `<data-dir>/snapshot` did not record a completed restore, for example because that directory was deleted or the plugin was enabled on a node that already had a database. Remove the `Snapshot.*` options after a restore.
