const redirects = {
  redirects: [
    {
      from: '/nethermind/ethereum-client/configuration',
      to: '/fundamentals/configuration'
    },
    {
      from: '/nethermind/ethereum-client/configuration/aura',
      to: '/fundamentals/configuration#aura'
    },
    {
      from: '/nethermind/ethereum-client/configuration/blocks',
      to: '/fundamentals/configuration#blocks'
    },
    {
      from: '/nethermind/ethereum-client/configuration/bloom',
      to: '/fundamentals/configuration#bloom'
    },
    {
      from: '/nethermind/ethereum-client/configuration/ethstats',
      to: '/fundamentals/configuration#ethstats'
    },
    {
      from: '/nethermind/ethereum-client/configuration/healthchecks',
      to: '/fundamentals/configuration#healthchecks'
    },
    {
      from: '/nethermind/ethereum-client/configuration/hive',
      to: '/fundamentals/configuration#hive'
    },
    {
      from: '/nethermind/ethereum-client/configuration/init',
      to: '/fundamentals/configuration#init'
    },
    {
      from: '/nethermind/ethereum-client/configuration/jsonrpc',
      to: '/fundamentals/configuration#jsonrpc'
    },
    {
      from: '/nethermind/ethereum-client/configuration/keystore',
      to: '/fundamentals/configuration#keystore'
    },
    {
      from: '/nethermind/ethereum-client/configuration/merge',
      to: '/fundamentals/configuration#merge'
    },
    {
      from: '/nethermind/ethereum-client/configuration/metrics',
      to: '/fundamentals/configuration#metrics'
    },
    {
      from: '/nethermind/ethereum-client/configuration/mining',
      to: '/fundamentals/configuration#mining'
    },
    {
      from: '/nethermind/ethereum-client/configuration/network',
      to: '/fundamentals/configuration#network'
    },
    {
      from: '/nethermind/ethereum-client/configuration/pruning',
      to: '/fundamentals/configuration#pruning'
    },
    {
      from: '/nethermind/ethereum-client/configuration/receipt',
      to: '/fundamentals/configuration#receipt'
    },
    {
      from: '/nethermind/ethereum-client/configuration/seq',
      to: '/fundamentals/configuration#seq'
    },
    {
      from: '/nethermind/ethereum-client/configuration/sync',
      to: '/fundamentals/configuration#sync'
    },
    {
      from: '/nethermind/ethereum-client/configuration/txpool',
      to: '/fundamentals/configuration#txpool'
    },
    {
      from: '/nethermind/ethereum-client/configuration/wallet',
      to: '/fundamentals/configuration#wallet'
    },
    {
      from: '/nethermind/ethereum-client/database',
      to: '/fundamentals/database'
    },
    {
      from: '/nethermind/ethereum-client/json-rpc',
      to: '/interacting/json-rpc-server'
    },
    {
      from: '/nethermind/ethereum-client/json-rpc/subscribe',
      to: '/interacting/json-rpc-ns/eth'
    },
    {
      from: '/nethermind/ethereum-client/logging-configuration',
      to: '/fundamentals/logs'
    },
    {
      from: '/nethermind/ethereum-client/metrics',
      to: '/monitoring/metrics'
    },
    {
      from: '/nethermind/ethereum-client/metrics/blockchain',
      to: '/monitoring/metrics#blockchain'
    },
    {
      from: '/nethermind/ethereum-client/metrics/consensus.aura',
      to: '/monitoring/metrics#aura'
    },
    {
      from: '/nethermind/ethereum-client/metrics/evm',
      to: '/monitoring/metrics#evm'
    },
    {
      from: '/nethermind/ethereum-client/metrics/jsonrpc',
      to: '/monitoring/metrics#jsonrpc'
    },
    {
      from: '/nethermind/ethereum-client/metrics/merge.plugin',
      to: '/monitoring/metrics#merge'
    },
    {
      from: '/nethermind/ethereum-client/metrics/network',
      to: '/monitoring/metrics#network'
    },
    {
      from: '/nethermind/ethereum-client/metrics/trie.pruning',
      to: '/monitoring/metrics#pruning'
    },
    {
      from: '/nethermind/ethereum-client/metrics/runner',
      to: '/monitoring/metrics#runner'
    },
    {
      from: '/nethermind/ethereum-client/metrics/store',
      to: '/monitoring/metrics#db'
    },
    {
      from: '/nethermind/ethereum-client/metrics/trie',
      to: '/monitoring/metrics#trie'
    },
    {
      from: '/nethermind/ethereum-client/metrics/txpool',
      to: '/monitoring/metrics#txpool'
    },
    {
      from: '/nethermind/ethereum-client/monitoring-node-health',
      to: '/monitoring/health-check'
    },
    {
      from: '/nethermind/ethereum-client/networks',
      to: '/get-started/installing-nethermind#supported-networks'
    },
    {
      from: '/nethermind/ethereum-client/sync-modes',
      to: '/fundamentals/sync'
    },
    {
      from: '/nethermind/first-steps-with-nethermind/running-nethermind-post-merge',
      to: '/get-started/consensus-clients'
    },
    {
      from: '/nethermind/first-steps-with-nethermind/system-requirements',
      to: '/get-started/system-requirements'
    },
    {
      from: '/nethermind/guides-and-helpers/faq',
      to: '/faq'
    },
    {
      from: '/nethermind/guides-and-helpers/validator-setup/eth2-validator',
      to: '/validators'
    },
    {
      from: '/nethermind/guides-and-helpers/how-to-reduce-database-size',
      to: '/fundamentals/database#reducing-database-size'
    },
    {
      from: '/nethermind/guides-and-helpers/how-to-reduce-database-size/full-pruning',
      to: '/fundamentals/pruning'
    },
    {
      from: '/nethermind/guides-and-helpers/known-issues',
      to: '/troubleshooting'
    }
  ],
  createRedirects: existingPath => {
    if (existingPath.includes('/interacting/json-rpc-ns')) {
      return [
        existingPath.replace('/interacting/json-rpc-ns/', '/nethermind/ethereum-client/json-rpc/'),
      ];
    }

    return null;
  }
};

export default redirects;