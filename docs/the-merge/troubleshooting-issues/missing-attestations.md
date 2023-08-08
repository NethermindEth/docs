# Missing Attestations

1\. **Disk and network performance:**

If you're frequently missing attestations, consider these possible causes:

* The type of Drive you're utilizing could be the problem. Ensure you are using an NVMe SSD.
* Network performance can also influence attestations. If you're losing your network connection intermittently, it could
  be the root cause. Collect relevant metrics regarding this.

**2. Connection with Full Pruning and Old Bodies/Receipts Sync:**

The performance of attestations can be influenced by processes like Old Bodies, Old Receipts, Pruning or Full Pruning.
Hence, if either of these is in progress, it might be the reason for your issues. Refer to the related metrics for
further details.

#### **3. Understanding relevant Metrics:**

In case of missing attestations, you should first of all check metrics such as `nethermind_new_payload_execution_time`.
If you find that the `nethermind_new_payload_execution_time` often exceeds 2 seconds, it could be indicative of an
issue.

[//]: # (<div>)

[//]: # ()

[//]: # (<img src="https://github.com/NethermindEth/nethermind/assets/2915361/d708ca8a-4573-4e02-8c57-b0cb8120117c.png" alt="">)

[//]: # ()

[//]: # ( )

[//]: # ()

[//]: # (<figure><img src="https://user-images.githubusercontent.com/2915361/250080966-d708ca8a-4573-4e02-8c57-b0cb8120117c.png" alt=""></img><figcaption><p>nethermind_new_payload_execution_time in Grafana</p></figcaption></figure>)

[//]: # ()

[//]: # (</div>)

[//]: # ()
