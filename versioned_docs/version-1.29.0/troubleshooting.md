---
title: Troubleshooting
sidebar_position: 8
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## File descriptor limits

In some cases, file descriptor limits may cause errors like "Too many open files". To solve that, see the instructions for your platform below.

<Tabs groupId="os">
<TabItem value="linux" label="Linux">

To increase the limits for the user running Nethermind (given the process name of `nethermind`), run:

```bash
sudo echo "nethermind soft nofile 100000" > /etc/security/limits.d/nethermind.conf
sudo echo "nethermind hard nofile 100000" >> /etc/security/limits.d/nethermind.conf
```

</TabItem>
<TabItem value="macos" label="macOS">

To increase the limits, run:

```bash
ulimit -n 10000
```

If you run into issues with the above command, see the [workaround](https://developer.apple.com/forums/thread/735798?answerId=762679022#762679022).

Note that the changes above are temporary and will be reset after the system reboot. To make them permanent, you can add them to your `~/.bashrc` or `~/.bash_profile` shell configuration file.

</TabItem>
</Tabs>

## Database corruption issues

Database corruption is one of the issues that happen now and then; it has many possible causes among them: 

- Hardware failures: disk failures, memory errors, hardware overheating, etc.
- Power cuts and abrupt shutdowns

There's no shortcut in such situations, and [resyncing Nethermind from scratch](./fundamentals/sync.md#resync-a-node-from-scratch) is the recommended remedy.

## TrieNodeException errors

If Nethermind reports `Nethermind.Trie.TrieNodeException` or `Nethermind.Trie.MissingTrieNodeException` errors, that usually indicates database corruption or missing data. The following steps may help:

- If the node is still syncing, wait until it has been fully synced and observe for errors
- Restart the node and observe for errors
- Update to the latest version of Nethermind
- If the above steps fail, a [resync](./fundamentals/sync.md#resync-a-node-from-scratch) may be required

## Issues with lock files

If Nethermind complains about the lock files, it perhaps because of one of the following:

- Another Nethermind process is running using the same database
- The database has not been appropriately closed on the last run.\
  In this case, run the following command from the Nethermind database directory:

  ```bash
  find . -type f -name 'LOCK' -delete
  ```


## Block checksum mismatch

Sometimes Nethermind may fail with an error similar the following:

```
Corruption: block checksum mismatch: expected 2087346143, got 2983326672 in... 
```

This tends to happen on XFS file systems under very high memory pressure. The issue can be mitigated by using the `--Db.UseDirectIoForFlushAndCompactions true` option although at the cost of performance.

However, quite often, this is because of memory module issues.

## Plugin loading failure

If Nethermind fails to start with a message like `Failed to load plugin...`, this is most likely due to a missing or incompatible plugin. Reinstalling Nethermind usually fixes the issue.

:::tip
If you install Nethermind over an existing installation, remove the old installation first, particularly the `plugins` directory. Package managers do this automatically.
:::
